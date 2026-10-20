---
title: Fejlfinding
description: Løsninger på de problemer, du højst sandsynligt løber ind i.
---

## Filer efterladt af en afbrudt import (.abmstage)

En import lægger først hver fil klar ved siden af dens endelige navn og bytter dem så ind, når alle er kommet frem. Går noget galt, lægger ABM det tilbage, den har flyttet. Kan den ikke lægge en del tilbage, bliver den del liggende i bogens mappe som en skjult fil, der ender på `.abmstage`. Det kan være den eneste kopi, så ABM beholder den, og fejlen nævner den ved navn.

Så længe der ligger en `.abmstage`-fil i en bogs mappe, stopper importer til den mappe med:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Sådan redder du den:

1. Find den `.abmstage`-fil, der står i fejlen.
2. Flyt den tilbage i downloaden eller ind i bogens mappe under dens rigtige navn. Eller slet den, hvis du ikke har brug for den.
3. Prøv importen igen.

## Alle bliver bedt om at logge ind bag en reverse proxy

Uden `TRUSTED_PROXIES` bliver en request med forwarding-headers aldrig behandlet som lokal, så den skal logge ind. Det er med vilje.

1. Sæt `TRUSTED_PROXIES` til din proxys adresse, for eksempel `172.20.0.5`. En proxy på samme vært skal have `127.0.0.1`.
2. Få proxyen til at sende `X-Forwarded-For` eller `X-Real-IP`. nginx proxy manager, Traefik og Caddy gør det som standard.
3. Genstart ABM.

App-loggen siger, hvad det drejer sig om:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": tilføj proxyen til `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": sæt proxyen op til at sende `X-Forwarded-For` eller `X-Real-IP`.

Det modsatte tilfælde: en proxy, der ikke sender forwarding-headers, ligner en lokal klient, så alt, der går igennem den, springer login over. Sæt Authentication Required til Enabled.

## Ændringer bliver afvist fra browseren

Sørg for, at proxyen sender den oprindelige `Host`-header videre eller sender `X-Forwarded-Host`. Se [Konfiguration](/da/configuration/#reverse-proxy).

## Covers forsvinder, eller siden opfører sig mærkeligt bag en proxy

Content-Security-Policy-headeren tillader kun coverbilleder over HTTPS. Tjek browserens konsol for overtrædelser. Server covers over HTTPS, eller sæt `SECURITY_HEADERS_CSP_ENABLED=false`.

## En stor request giver 413

Hæv `MAX_REQUEST_BODY_BYTES`. En reverse proxy kan også have en lavere grænse og selv svare 413.

## Metadatakilden er ikke tilgængelig

Tilføjelse, søgning, opdatering og Discover har brug for Libex. Får ABM ikke svar, fejler en bogsøgning med "Libex search failed" og en søgning efter forfattere eller serier med "Libex could not be reached; try again shortly", i stedet for at vise en tom liste. Årsager: Libex er nede, eller ABM's forbindelse når det ikke.

1. Se [ABM's statusside](https://status.audiobookmanager.com) og [Libex' statusside](https://status.libexdb.com) for at se, om det er nede for alle.
2. Tjek, at containeren kan nå internettet, og at proxyen under **Settings > General > Proxy** er rigtig, hvis du bruger en.
3. Prøv igen efter et minut.
4. I mellemtiden kan du stadig tilføje og importere bøger i hånden.

En baggrundsopgave, der rammer et udfald, fejler med årsagen. Den prøves igen af sig selv, op til seks gange eller i seks timer, alt efter hvad der kommer først.

## En opdatering ændrede en bogs detaljer

Titel, beskrivelse, forfattere, oplæsere og lignende felter kommer fra metadatakilden, og en opdatering bruger det, kilden siger nu. ABM kan ikke rette dem i hånden. Det, du styrer, er coveret (kan låses), hvilke filer der bliver skrevet, tags, og om opdateringer skriver sidecars og tags. Se [Dine metadata, din kontrol](/da/metadata/control/).

## En bog står som Missing Files

Bogen er hentet, men dens filer ligger ikke der, hvor ABM kigger. Tjek mountet og rettighederne, og kør så **Refresh & Scan**. En scanning rører ikke en bog, hvis dens mappe ikke kan læses, og opgaven står som Partial med årsagen.

## Importer stopper med "Files left by an interrupted import"

Se afsnittet om `.abmstage` ovenfor.

## Downloads bliver færdige, men bliver aldrig importeret

Tilføj en remote path mapping, eller få ABM og klienten til at se mappen på samme sti. En undermappe, der ikke kan læses, blokerer hele downloaden, indtil dens rettigheder er rettet. Se [Downloadklienter](/da/settings/download-clients/).

## Docker kan ikke nå metadatakilden eller indekserne

Tjek DNS og proxyindstillingen først. I Docker når ABM kun Libex og dine indexere, hvis containeren kan nå internettet.

## Sidder du stadig fast?

Spørg i [ABM's Discord](https://discord.gg/qeJRrM6AZ), [opret et issue](https://github.com/sunbrolynk/AudioBook-Manager/issues), eller skriv til [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
