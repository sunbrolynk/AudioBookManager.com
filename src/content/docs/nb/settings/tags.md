---
title: Tagger
description: Tagger og regler for automatisk tagging.
---

**Settings > Tags** styrer tagger og **Auto Tagging**.

## Tagger

En tagg er ett ord: små bokstaver, ingen mellomrom, ingen komma, opptil 100 tegn. Skriver du `Sci-Fi`, blir det `sci-fi`. Tagger settes på bøker, forfattere og serier, og blir matchet av indekserere, forsinkelses- og release-profiler, importlister, Connect-agenter og kalenderfeeden.

Kan du Sonarr: tagger virker på samme måte. En profil med en tagg gjelder bare det som har den taggen.

## Automatiske tagger

En automatisk tagg er en regel som setter tagger på bøker som passer.

| Felt | Virkning |
|---|---|
| Name | Navn |
| Enable | På eller av |
| Remove Tags Automatically | Når en bok ikke passer lenger, tas taggene av |
| Tags | Hva som skal settes |
| Conditions | Hva en bok må passe med. Hver betingelse kan snus eller gjøres påkrevd |

Typer betingelser: Genre, Monitored, Language, Root Folder, Status, Tag, Year (område), Series Type, Author (inneholder), Narrator (inneholder), spilletid i minutter (område) og Rating (område).

**Apply** kjører valgte regler nå. Reglene kjører også når bøker endres.

## Fallgruver

- En regel som viser til en slettet tagg eller rotmappe, hoppes helt over, begge veier, så en ødelagt regel aldri tagger feil eller fjerner tagger.
- Remove Tags Automatically fjerner bare tagger som denne regelen selv ville satt.
