---
title: FAQ
description: Korte antwoorden op de vragen die mensen als eerste stellen.
---

## Vervangt ABM Audiobookshelf?

Nee. Audiobookshelf is de speler en ABM is de bibliothecaris. Laat ze allebei naar dezelfde bibliotheekmap wijzen en laat elk zijn eigen werk doen.

## Waar komt de metadata vandaan?

Van [Libex](https://libexdb.com), een open metadataservice voor Audible-data. ABM ververst die volgens een schema, en een cover die je zelf hebt gekozen kun je vastzetten zodat een vernieuwing er vanaf blijft.

## Heb ik een aparte database nodig?

Nee. ABM bewaart alles in één SQLite-bestand in `/config`. Er hoeft verder niks te draaien.

## Kan ik er van buiten mijn netwerk bij?

Ja, vanaf 0.17.0. Standaard moet alles van buiten je lokale netwerk inloggen, en zet je **Authentication Required** op **Enabled**, dan moet iedereen inloggen, ook op je eigen LAN. Draait het achter nginx, Traefik of Caddy, zet dan `TRUSTED_PROXIES` op het adres van de proxy. Opgeslagen inloggegevens worden versleuteld. Zie [Configuratie](/nl/configuration/#reverse-proxy).

## Welke downloadclients werken?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet en Blackhole.

## Wat is er met Readarr gebeurd?

Readarr deed boeken en luisterboeken samen, en is inmiddels met pensioen. ABM is alleen voor luisterboeken, gebouwd op het ontwerp waar de Servarr-apps mee begonnen zijn.

## Kan ik het zonder Docker installeren?

Nog niet. Docker is voorlopig de enige manier. Native installaties voor Linux, Windows en macOS, plus Kubernetes, Unraid en Proxmox, staan op de planning. Zie [Andere manieren om te installeren](/nl/installation/#andere-manieren-om-te-installeren).

## Wat kost het?

Niks. Het is gratis en open source onder GPL-3.0. Scheelt het je een avond werk, dan is er een [Ko-fi](https://ko-fi.com/sunbrolynk).

## Kan ik de titel, auteurs of beschrijving van een boek aanpassen?

Nee. Die data komt van de metadatabron en ABM past die niet met de hand aan. Wat jij bepaalt: de cover (een cover die je zelf kiest staat vast), wanneer vernieuwingen draaien, welke sidecarbestanden en audiotags er geschreven worden, tags en automatische tags, volgen en het kwaliteitsprofiel. Zie [Jouw metadata, jouw regie](/nl/metadata/control/).

## Kan ABM hoofdstukken, beschrijvingen en tags schrijven op de plek waar Audiobookshelf ze leest?

Het schrijft `cover.jpg`, een `.opf`, `desc.txt` en `reader.txt`, en kan tags in de audio zelf zetten. Hoofdstukken vergelijken met de gepubliceerde editie en `.cue`-bestanden komen in de volgende release. Zie [Sidecarbestanden](/nl/using/sidecars/).

## Kan ik mijn bestanden converteren?

Ja: converteren, samenvoegen, splitsen en hoofdstukken toevoegen, via een wachtrij. Zie [Conversies](/nl/using/conversions/).

## Kan ik mijn bestaande collectie importeren?

Ja, met [Bibliotheek importeren](/nl/library-import/). Zie ook [Een bibliotheek verhuizen](/nl/guides/moving-a-library-in/).

## Is er een mobiele weergave?

Ja, onder de 768px breed. Zie [Op je telefoon](/nl/phone/).

## Kan ABM meer dan één Audible-account gebruiken?

Ja. Elk account houdt zijn eigen bibliotheek bij. Zie [Audible](/nl/audible/).
