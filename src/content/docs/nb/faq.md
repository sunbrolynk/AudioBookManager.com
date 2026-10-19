---
title: Vanlige spørsmål
description: Korte svar på det folk spør om først.
---

## Erstatter ABM Audiobookshelf?

Nei. Audiobookshelf er spilleren, og ABM er bibliotekaren. Pek begge mot den samme bibliotekmappen og la hver av dem gjøre jobben sin.

## Hvor kommer metadataene fra?

[Libex](https://libexdb.com), en åpen metadatatjeneste for Audible-data. ABM oppdaterer dem etter en tidsplan, og et cover du har valgt selv kan låses, så en oppdatering lar det være i fred.

## Trenger jeg en egen database?

Nei. ABM holder alt i én SQLite-fil i `/config`. Det er ikke noe annet som må kjøre.

## Kan jeg nå den utenfra nettverket mitt?

Ja, fra 0.17.0 og nyere. Som standard må alt som kommer utenfra det lokale nettverket ditt logge inn, og setter du **Authentication Required** til **Enabled**, må alle logge inn, også på ditt eget LAN. Bak nginx, Traefik eller Caddy setter du `TRUSTED_PROXIES` til adressen til proxyen. Lagret påloggingsinfo er kryptert. Se [Konfigurasjon](/nb/configuration/#omvendt-proxy).

## Hvilke nedlastingsklienter fungerer?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet og Blackhole.

## Hva skjedde med Readarr?

Readarr håndterte bøker og lydbøker sammen, og er nå lagt ned. ABM er bare for lydbøker, bygget på designet som Servarr-appene var først ute med.

## Hvordan installerer jeg den på Unraid, Windows eller macOS?

Ikke ennå. Docker er eneste vei inn foreløpig. Se [Installer ABM](/nb/installation/).

## Hva koster det?

Ingenting. Det er gratis og åpen kildekode under GPL-3.0. Hvis det sparer deg for en kveld, finnes det en [Ko-fi](https://ko-fi.com/sunbrolynk).

## Kan jeg redigere tittel, forfattere eller beskrivelse på en bok?

Nei. De dataene kommer fra metadatakilden, og ABM redigerer dem ikke for hånd. Det du styrer, er coveret (et cover du har valgt, blir låst), når oppdateringer kjører, hvilke sidefiler og lydtagger som skrives, tagger og automatiske tagger, overvåking og kvalitetsprofil. Se [Dine metadata, din kontroll](/nb/metadata/control/).

## Kan ABM skrive kapitler, beskrivelser og tagger der Audiobookshelf leser dem?

Den skriver `cover.jpg`, en `.opf`, `desc.txt` og `reader.txt`, og kan skrive tagger inn i lyden. Sammenligning av kapitler mot den utgitte utgaven og `.cue`-filer kommer i neste versjon. Se [Sidefiler](/nb/using/sidecars/).

## Kan jeg konvertere filene mine?

Ja: konvertere, slå sammen, dele opp og legge til kapitler, i en kø. Se [Konverteringer](/nb/using/conversions/).

## Kan jeg importere samlingen jeg allerede har?

Ja, med [Bibliotekimport](/nb/library-import/). Se også [Flytte inn et bibliotek](/nb/guides/moving-a-library-in/).

## Finnes det en mobilvisning?

Ja, under 768 px bredde. Se [Bruk på telefon](/nb/phone/).

## Kan ABM bruke mer enn én Audible-konto?

Ja. Hver konto har sitt eget bibliotek. Se [Audible](/nb/audible/).
