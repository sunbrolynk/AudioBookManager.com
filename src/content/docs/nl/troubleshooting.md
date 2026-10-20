---
title: Problemen oplossen
description: Oplossingen voor de problemen waar je het eerst tegenaan loopt.
---

## Bestanden van een onderbroken import (.abmstage)

Een import zet elk bestand eerst klaar naast zijn uiteindelijke naam, en wisselt ze pas om als ze er allemaal zijn. Gaat er iets mis, dan zet ABM terug wat het verplaatst had. Lukt dat voor een deel niet, dan blijft dat deel in de map van het boek staan als verborgen bestand dat eindigt op `.abmstage`. Het kan de enige kopie zijn, dus ABM laat het staan en noemt het in de foutmelding.

Zolang er een `.abmstage`-bestand in de map van een boek staat, stoppen imports in die map met:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Zo herstel je het:

1. Zoek het `.abmstage`-bestand dat in de foutmelding staat.
2. Zet het terug in de download, of in de map van het boek onder zijn echte naam. Of verwijder het als je het niet nodig hebt.
3. Probeer de import opnieuw.

## Iedereen moet inloggen achter een reverse proxy

Zonder `TRUSTED_PROXIES` wordt een request met forwarding-headers nooit als lokaal gezien, dus moet het inloggen. Dat is expres zo.

1. Zet `TRUSTED_PROXIES` op het adres van je proxy, bijvoorbeeld `172.20.0.5`. Een proxy op dezelfde host heeft `127.0.0.1` nodig.
2. Laat de proxy `X-Forwarded-For` of `X-Real-IP` meesturen. Nginx Proxy Manager, Traefik en Caddy doen dat standaard.
3. Herstart ABM.

Het applog vertelt je welk van de twee het is:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": zet de proxy in `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": stel de proxy zo in dat hij `X-Forwarded-For` of `X-Real-IP` meestuurt.

Het omgekeerde geval: een proxy die geen forwarding-headers meestuurt, ziet eruit als een lokale client, dus alles wat erdoorheen komt hoeft niet in te loggen. Zet Authentication Required op Enabled.

## Wijzigingen vanuit de browser worden geweigerd

Zorg dat de proxy de originele `Host`-header doorgeeft, of `X-Forwarded-Host` meestuurt. Zie [Configuratie](/nl/configuration/#reverse-proxy).

## Covers verdwijnen, of de pagina doet raar achter een proxy

De Content-Security-Policy-header staat alleen covers via HTTPS toe. Kijk in de browserconsole of er overtredingen staan. Serveer covers via HTTPS, of zet `SECURITY_HEADERS_CSP_ENABLED=false`.

## Een groot request geeft 413

Verhoog `MAX_REQUEST_BODY_BYTES`. Een reverse proxy kan ook een lagere limiet hebben en zelf met 413 antwoorden.

## De metadatabron is niet bereikbaar

Toevoegen, zoeken, vernieuwen en Discover hebben Libex nodig. Krijgt ABM geen antwoord, dan mislukt een zoekopdracht op boeken met "Libex search failed" en een zoekopdracht op auteurs of series met "Libex could not be reached; try again shortly", in plaats van een lege lijst te tonen. Oorzaken: Libex ligt eruit, of de verbinding van ABM komt er niet bij.

1. Kijk op de [ABM-statuspagina](https://status.audiobookmanager.com) en de [Libex-statuspagina](https://status.libexdb.com) of het voor iedereen stuk is.
2. Controleer of de container het internet op kan, en of de proxy onder **Settings > General > Proxy** klopt als je er een gebruikt.
3. Probeer het na een minuut opnieuw.
4. Intussen kun je boeken gewoon met de hand toevoegen en importeren.

Een achtergrondtaak die in een storing loopt, mislukt met de reden. Hij wordt vanzelf opnieuw geprobeerd, tot zes keer of zes uur lang, wat het eerst komt.

## Een vernieuwing heeft de gegevens van een boek veranderd

Titel, beschrijving, auteurs, vertellers en vergelijkbare velden komen van de metadatabron, en een vernieuwing neemt over wat die nu zegt. ABM kan ze niet met de hand aanpassen. Wat jij bepaalt: de cover (die kun je vastzetten), welke bestanden er geschreven worden, tags, en of vernieuwingen sidecars en tags schrijven. Zie [Jouw metadata, jouw regie](/nl/metadata/control/).

## Een boek staat op Missing Files

Het boek is gedownload, maar de bestanden staan niet waar ABM zoekt. Controleer de mount en de rechten, en draai dan **Refresh & Scan**. Een scan laat een boek met rust als de map niet te lezen is, en de taak staat dan op Partial met de reden erbij.

## Imports stoppen met "Files left by an interrupted import"

Zie het stuk over `.abmstage` hierboven.

## Downloads worden afgerond maar nooit geïmporteerd

Voeg een remote path mapping toe, of zorg dat ABM en de client de map op hetzelfde pad zien. Een onleesbare submap blokkeert de hele download tot de rechten zijn opgelost. Zie [Downloadclients](/nl/settings/download-clients/).

## Docker kan de metadatabron of indexers niet bereiken

Controleer eerst DNS en de proxy-instelling. In Docker bereikt ABM Libex en je indexers alleen als de container het internet op kan.

## Kom je er nog steeds niet uit?

Vraag het in de [ABM Discord](https://discord.gg/qeJRrM6AZ), [open een issue](https://github.com/sunbrolynk/AudioBook-Manager/issues), of mail naar [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
