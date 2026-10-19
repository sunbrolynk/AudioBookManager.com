---
title: Omslagslåset
description: Varför ett omslag du har valt inte ersätts vid uppdatering.
---

När du själv sätter en boks omslag, genom att ladda upp en bild, klistra in en URL eller välja ett resultat i omslagssökningen, sparar ABM det och **låser** det. Ingen metadatauppdatering ersätter ett låst omslag.

## Så ser du det

Ett låst omslag serveras från ABM:s egen lagring, inte från en Audible-adress. Det är så ABM skiljer ett eget omslag från ett automatiskt.

## Vad det påverkar

- Metadatauppdateringen behåller omslaget, även om Libex har ett nytt.
- När `cover.jpg` skrivs och bilder bäddas in används omslaget du har valt.
- Library Import kan välja omslag per bok. Se [Biblioteksimport](/sv/library-import/).

## Ångra det

Bokens omslag kan återställas till det automatiska, vilket låser upp det. Efter det kan en uppdatering ersätta det igen.

## Fallgropar

- Låset gäller bara omslaget. Titel, författare och resten uppdateras fortfarande.
- Omslag hämtas via din utgående anslutning. Är ingen vald laddas inga nya omslag ner, men cachade omslag serveras fortfarande.
