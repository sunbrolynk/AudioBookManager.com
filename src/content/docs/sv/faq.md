---
title: Vanliga frågor
description: Korta svar på frågorna folk ställer först.
---

## Ersätter ABM Audiobookshelf?

Nej. Audiobookshelf är spelaren och ABM är bibliotekarien. Peka båda mot samma biblioteksmapp och låt var och en göra sitt jobb.

## Var kommer metadatan ifrån?

Från [Libex](https://libexdb.com), en öppen metadatatjänst för Audible-data. ABM uppdaterar den enligt ett schema, och ett omslag du själv har valt kan låsas så att en uppdatering låter det vara.

## Behöver jag en separat databas?

Nej. ABM håller allt i en enda SQLite-fil i `/config`. Det finns inget annat att köra.

## Kan jag nå den utanför mitt nätverk?

Ja, från 0.17.0. Som standard måste allt som kommer utifrån ditt lokala nätverk logga in, och sätter du **Authentication Required** till **Enabled** måste alla logga in, även på ditt eget LAN. Bakom nginx, Traefik eller Caddy sätter du `TRUSTED_PROXIES` till proxyns adress. Sparade inloggningsuppgifter är krypterade. Se [Konfiguration](/sv/configuration/#omvänd-proxy).

## Vilka nedladdningsklienter fungerar?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet och Blackhole.

## Vad hände med Readarr?

Readarr skötte böcker och ljudböcker tillsammans, men den har sedan dess lagts ner. ABM är bara för ljudböcker och bygger på designen som Servarr-apparna banade väg för.

## Hur installerar jag den på Unraid, Windows eller macOS?

Inte än. Just nu är Docker enda vägen in. Se [Installera ABM](/sv/installation/).

## Vad kostar det?

Ingenting. Den är gratis och öppen källkod under GPL-3.0. Om den sparar dig en kväll finns det en [Ko-fi](https://ko-fi.com/sunbrolynk).

## Kan jag ändra en boks titel, författare eller beskrivning?

Nej. Den datan kommer från metadatakällan och ABM redigerar den inte för hand. Det du styr över är omslaget (ett omslag du har valt är låst), när uppdateringar körs, vilka sidecar-filer och ljudtaggar som skrivs, taggar och automatiska taggar, bevakning och kvalitetsprofil. Se [Din metadata, din kontroll](/sv/metadata/control/).

## Kan ABM skriva kapitel, beskrivningar och taggar där Audiobookshelf läser dem?

Den skriver `cover.jpg`, en `.opf`, `desc.txt` och `reader.txt`, och kan skriva taggar in i ljudfilerna. Jämförelse av kapitel mot den publicerade utgåvan och `.cue`-filer kommer i nästa version. Se [Sidecar-filer](/sv/using/sidecars/).

## Kan jag konvertera mina filer?

Ja: konvertera, slå ihop, dela upp och lägg till kapitel, i en kö. Se [Konverteringar](/sv/using/conversions/).

## Kan jag importera min befintliga samling?

Ja, med [Biblioteksimport](/sv/library-import/). Se även [Flytta in ett bibliotek](/sv/guides/moving-a-library-in/).

## Finns det en mobillayout?

Ja, under 768px bredd. Se [Använda mobilen](/sv/phone/).

## Kan ABM använda mer än ett Audible-konto?

Ja. Varje konto har sitt eget bibliotek. Se [Audible](/sv/audible/).
