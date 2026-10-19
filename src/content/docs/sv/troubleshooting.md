---
title: Felsökning
description: Lösningar på problemen du troligast stöter på.
---

## Filer kvar efter en avbruten import (.abmstage)

En import lägger först varje fil bredvid sitt slutliga namn och byter sedan in dem när alla har kommit fram. Om något går fel lägger ABM tillbaka det den har flyttat. Om den inte kan lägga tillbaka en del ligger den delen kvar i bokens mapp som en dold fil som slutar på `.abmstage`. Det kan vara den enda kopian, så ABM behåller den och felet anger dess namn.

Så länge det finns en `.abmstage`-fil i en boks mapp stoppas importer till den mappen med:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Så återställer du:

1. Leta upp `.abmstage`-filen som nämns i felet.
2. Flytta tillbaka den till nedladdningen, eller in i bokens mapp under sitt riktiga namn. Eller radera den om du inte behöver den.
3. Kör importen igen.

## Alla ombeds logga in bakom en omvänd proxy

Utan `TRUSTED_PROXIES` behandlas ett anrop som har forwarding-headers aldrig som lokalt, så det måste logga in. Det är med flit.

1. Sätt `TRUSTED_PROXIES` till din proxys adress, till exempel `172.20.0.5`. En proxy på samma värd behöver `127.0.0.1`.
2. Se till att proxyn skickar `X-Forwarded-For` eller `X-Real-IP`. nginx proxy manager, Traefik och Caddy gör det som standard.
3. Starta om ABM.

Apploggen säger vilket det är:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": lägg till proxyn i `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": ställ in proxyn så att den skickar `X-Forwarded-For` eller `X-Real-IP`.

Det omvända fallet: en proxy som inte skickar några forwarding-headers ser ut som en lokal klient, så allt som går genom den slipper logga in. Sätt Authentication Required till Enabled.

## Ändringar från webbläsaren nekas

Se till att proxyn skickar vidare den ursprungliga `Host`-headern, eller skickar `X-Forwarded-Host`. Se [Konfiguration](/sv/configuration/#omvänd-proxy).

## Omslag försvinner, eller sidan beter sig konstigt bakom en proxy

Content-Security-Policy-headern tillåter bara omslagsbilder över HTTPS. Kolla webbläsarkonsolen efter överträdelser. Servera omslagen över HTTPS, eller sätt `SECURITY_HEADERS_CSP_ENABLED=false`.

## Ett stort anrop ger 413

Höj `MAX_REQUEST_BODY_BYTES`. En omvänd proxy kan också ha en lägre gräns och själv svara med 413.

## Metadatakällan är inte tillgänglig

Att lägga till, söka, uppdatera och Discover kräver metadatakällan. Meddelandet nämner den, till exempel "The metadata source is unavailable". Orsaker: källan ligger nere eller begränsar antalet anrop, eller så blockerar din utgående anslutning den.

1. Kolla **Settings > General > Proxy & VPN** och att vägen ut fungerar.
2. Försök igen om en minut. En källa som begränsar anrop svarar 503 med en hint om att försöka igen efter 30 sekunder.
3. Under tiden kan du fortfarande lägga till och importera böcker för hand.

Bakgrundsuppgifter som träffar ett avbrott misslyckas med orsaken och skickar en notis per avbrott.

## En uppdatering ändrade en boks detaljer

Titel, beskrivning, författare, uppläsare och liknande fält kommer från metadatakällan, och en uppdatering tillämpar det som källan säger nu. ABM har inget sätt att ändra dem för hand. Det du styr över är omslaget (kan låsas), vilka filer som skrivs, taggar och om uppdateringar skriver sidecars och taggar. Se [Din metadata, din kontroll](/sv/metadata/control/).

## En bok visar Missing Files

Boken laddades ner men filerna ligger inte där ABM letar. Kolla mounten och behörigheterna och kör sedan **Refresh & Scan**. En skanning låter en bok vara när dess mapp inte går att läsa, och uppgiften visas som Partial med orsaken.

## Importer stoppas med "Files left by an interrupted import"

Se avsnittet om `.abmstage` ovan.

## Nedladdningar blir klara men importeras aldrig

Lägg till en remote path mapping, eller se till att ABM och klienten ser mappen på samma sökväg. En undermapp som inte går att läsa blockerar hela nedladdningen tills dess behörigheter är fixade. Se [Nedladdningsklienter](/sv/settings/download-clients/).

## Docker når inte metadatakällan eller indexerarna

Kolla DNS och inställningen för utgående anslutning innan något annat. I Docker fungerar en direktanslutning bara om containern kan nå internet.
