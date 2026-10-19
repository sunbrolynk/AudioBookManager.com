---
title: Bibliotek
description: Bøker, forfattere og serier, og hvordan ABM holder styr på statusen deres.
---

**Library**-menyen har tre lister: **Books**, **Series** og **Authors**. **Add New** og **Library Import** legger ting inn i dem. **Audible Library** og **Conversions** har egne sider.

## Bøker

Hver bok er en rad, en plakat eller en tabellinje (visningsbryteren ligger i verktøylinja). En bok har en status:

- **Wanted**: overvåket, ingen filer ennå. ABM søker etter den.
- **Downloaded**: filene ligger på disken.
- **Missing Files**: boka er lastet ned, men filene ligger ikke lenger der ABM forventer.
- **Unmonitored**: ABM lar den være i fred.

Åpne en bok for å se detaljsiden: filer, metadata, historikk, kvaliteten ABM målte, og handlinger som Refresh & Scan og redigeringsdialogen (se under). Se [Sidefiler](/nb/using/sidecars/).

Kan du Sonarr: en bok er en episode, en serie er sesong og serie i ett, og en forfatter er en måte å gruppere begge på. Forskjellen er at én bok kan høre til flere serier, og ABM bruker hovedserien (den laveste plasseringen) når den må velge.

## Serier og forfattere

Listene Series og Authors viser antall eide, ønskede og bøker med manglende filer. Åpne en for å se katalogen, som også har bøker du ikke eier. Derfra kan du legge til bøkene som mangler. Se [Seriesporing](/nb/using/series-tracking/).

Å slette en serie eller forfatter blir avvist så lenge den fortsatt har bøker i biblioteket. Fjern bøkene først.

## Arv av kvalitetsprofil

Kvalitetsprofilen til en bok kommer fra, i denne rekkefølgen: dens egen overstyring, hovedserien, hovedforfatteren, og så standardprofilen. Se [Profiler](/nb/settings/profiles/).

## Redigeringsdialogen

Redigeringsdialogen på en bok endrer ABMs egne innstillinger for den, ikke metadataene:

- **Monitored**
- **Quality Profile** (No Change når du redigerer flere)
- **Path**, for én bok (med en knapp som regner den ut på nytt), eller **Root Folder** for et utvalg
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt og en OPF (avkrysningsboksen heter "metadata.opf"; fila får navn etter den første lydfila i boka, for eksempel `Dune.opf`, eller `title.opf` når det ikke finnes lyd)
- **Write to Audio Files**: skriv metadatatagger

Den samme dialogen åpnes for serier og forfattere og gjelder hver av bøkene deres. Skrivevalgene kjører når du lagrer.

## Tagger

Bøker, forfattere og serier kan ha tagger. Tagger styrer indekserere, varsler, importlister og profiler, og filtrerer kalenderfeeden. Se [Tagger](/nb/settings/tags/).

## Utvalg

Velg rader for å gjøre noe med flere samtidig: overvåke, søke, tagge, gi nytt navn, slette. På telefon, se [Bruk på telefon](/nb/phone/).
