---
title: Tags
description: Tags og regler for automatisk tagging.
---

**Settings > Tags** styrer tags og **Auto Tagging**.

## Tags

Et tag er ét ord: små bogstaver, ingen mellemrum, ingen kommaer, op til 100 tegn. Skriver du `Sci-Fi`, bliver det til `sci-fi`. Tags sættes på bøger, forfattere og serier og bliver matchet af indeksere, forsinkelses- og udgivelsesprofiler, importlister, Connect-agenter og kalenderfeedet.

Kender du Sonarr: tags virker på samme måde. En profil med et tag gælder kun for ting, der har det.

## Auto-tags

Et auto-tag er en regel, der sætter tags på bøger, som matcher.

| Felt | Virkning |
|---|---|
| Name | Navn |
| Enable | Til eller fra |
| Remove Tags Automatically | Når en bog ikke længere matcher, fjernes tagsene |
| Tags | Hvad der skal sættes |
| Conditions | Hvad en bog skal matche. Hver kan vendes om eller gøres påkrævet |

Betingelsestyper: Genre, Monitored, Language, Root Folder, Status, Tag, Year (interval), Series Type, Author (indeholder), Narrator (indeholder), Runtime in minutes (interval) og Rating (interval).

**Apply** kører de valgte regler nu. Regler kører også, når bøger ændrer sig.

## Faldgruber

- En regel, der henviser til et slettet tag eller en slettet rodmappe, bliver sprunget helt over, i begge retninger, så en ødelagt regel aldrig tagger forkert eller fjerner tags.
- Remove Tags Automatically fjerner kun tags, som denne regel selv ville sætte.
