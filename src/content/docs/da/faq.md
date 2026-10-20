---
title: FAQ
description: Korte svar på de spørgsmål, folk stiller først.
---

## Erstatter ABM Audiobookshelf?

Nej. Audiobookshelf er afspilleren, og ABM er bibliotekaren. Peg dem begge på den samme biblioteksmappe, og lad hver af dem passe sit.

## Hvor kommer metadataene fra?

[Libex](https://libexdb.com), en åben metadataservice til Audible-data. ABM opdaterer dem efter en tidsplan, og et cover, du selv har valgt, kan låses, så en opdatering lader det være.

## Skal jeg bruge en separat database?

Nej. ABM gemmer alt i én SQLite-fil i `/config`. Der er ikke andet, der skal køre.

## Kan jeg nå den udefra?

Ja, fra 0.17.0 og frem, men jeg fraråder at lægge ABM ud på internettet, det samme råd som Servarr-apperne giver. En VPN som WireGuard eller Tailscale er den sikre vej ind. Som standard skal alt, der kommer udefra dit lokale netværk, logge ind, og sætter du **Authentication Required** til **Enabled**, skal alle logge ind, også fra dit eget LAN. Bag nginx, Traefik eller Caddy skal du sætte `TRUSTED_PROXIES` til proxyens adresse. Gemte loginoplysninger er krypterede. Se [vejledningen om reverse proxy](/da/guides/reverse-proxy/) og [Konfiguration](/da/configuration/#reverse-proxy).

## Hvilke downloadklienter virker?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet og Blackhole.

## Hvad skete der med Readarr?

Readarr håndterede bøger og lydbøger sammen, og det er siden blevet lagt i graven. ABM er kun til lydbøger og bygger på det design, Servarr-apps'ene banede vejen for.

## Kan jeg installere den uden Docker?

Ikke endnu. Docker er den eneste vej ind lige nu. Native installationer på Linux, Windows og macOS, plus Kubernetes, Unraid og Proxmox, er planlagt. Se [Andre måder at installere på](/da/installation/#andre-måder-at-installere-på).

## Hvad koster det?

Ingenting. Det er gratis og open source under GPL-3.0. Sparer det dig en aften, er der en [Ko-fi](https://ko-fi.com/sunbrolynk).

## Kan jeg rette en bogs titel, forfattere eller beskrivelse?

Nej. De data kommer fra metadatakilden, og ABM retter dem ikke i hånden. Det, du styrer, er coveret (et cover, du har valgt, bliver låst), hvornår opdateringer kører, hvilke sidecar-filer og lydtags der bliver skrevet, tags og auto-tags, overvågning og kvalitetsprofil. Se [Dine metadata, din kontrol](/da/metadata/control/).

## Kan ABM skrive kapitler, beskrivelser og tags der, hvor Audiobookshelf læser dem?

Den skriver `cover.jpg`, en `.opf`, `desc.txt` og `reader.txt`, og kan skrive tags ind i lyden. Kapitelsammenligning med den udgivne udgave og `.cue`-filer er planlagt til en senere udgivelse. Se [Sidecar-filer](/da/using/sidecars/).

## Kan jeg konvertere mine filer?

Ja: konvertér, flet, del op og tilføj kapitler, i en kø. Se [Konverteringer](/da/using/conversions/).

## Kan jeg importere min eksisterende samling?

Ja, med [Biblioteksimport](/da/library-import/). Se også [Flyt et bibliotek ind](/da/guides/moving-a-library-in/).

## Er der et mobillayout?

Ja, under 768px i bredden. Se [Brug på telefonen](/da/phone/).

## Kan ABM bruge mere end én Audible-konto?

Ja. Hver konto har sit eget bibliotek. Se [Audible](/da/audible/).
