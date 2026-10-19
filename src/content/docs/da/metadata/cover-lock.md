---
title: Coverlåsen
description: Hvorfor et cover, du har valgt, ikke bliver udskiftet ved opdatering.
---

Når du selv sætter en bogs cover, ved at uploade et billede, indsætte en URL eller vælge et resultat i coversøgningen, gemmer ABM det og **låser** det. Ingen metadataopdatering udskifter et låst cover.

## Sådan kan du se det

Et låst cover bliver serveret fra ABM's eget lager, ikke fra en Audible-adresse. Sådan kender ABM forskel på et brugervalgt cover og et automatisk.

## Hvad det påvirker

- Metadataopdatering beholder coveret, også selvom Libex har et nyt.
- Når der skrives `cover.jpg` og indlejres billeder, bruges det cover, du har valgt.
- Biblioteksimport kan vælge coveret for hver bog. Se [Biblioteksimport](/da/library-import/).

## Fortryd det

Bogens cover kan nulstilles til det automatiske, hvilket låser det op. Derefter kan en opdatering udskifte det igen.

## Faldgruber

- Låsen gælder kun coveret. Titel, forfatter og resten bliver stadig opdateret.
- Covers bliver hentet gennem din udgående forbindelse. Er der ikke valgt nogen, bliver nye covers ikke hentet, men covers i cachen bliver stadig serveret.
