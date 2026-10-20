---
title: Aktivitetslogg og hendelser
description: Oversikten over hva som har skjedd, og hvordan den skiller seg fra Logs.
---

ABM fører tre typer oversikt.

| Hvor | Hva det er |
|---|---|
| **System > Events** og **System > Activity Log** | Aktivitetsloggen: en liste i databasen over ting som har skjedd. Events er visningen filtrert på alvorlighetsgrad. Activity Log (med tittelen Activity History) filtrerer på kategori, søker i meldingen og viser tilstanden før og etter |
| **System > Log Files** | Tekstlogger med alle detaljene. Se [Logger](/nb/system/logs/) |
| **Activity > History** | Bare nedlastingshistorikk. Se [Aktivitet](/nb/using/activity/) |

## Hva som blir registrert

Ferdige bakgrunnsoppgaver (én sammendragsrad hver), manuelle endringer av klienter, indekserere, profiler, tagger, varsler, rotmapper og så videre, hentinger (og hvem som startet dem), konverteringer, feilede Audible-nedlastinger, sikkerhetskopier, innlogginger og mislykkede innlogginger, og et oppstartssteg som feilet.

Kategorier: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security og System.

## Personvern

Oppføringene inneholder aldri URL-er, verter, brukernavn, passord, nøkler, tokens eller rå feiltekst fra en klient eller tjeneste. Objekter omtales med navnet du har gitt dem. Når innstillinger lagres, vises hvilke innstillinger som ble endret, ikke verdiene. Innlogginger lagrer bare IP-adressen. Mislykkede innlogginger fra én adresse innenfor 15 minutter slås sammen til én rad med antall forsøk.

## Stille med vilje

En planlagt kjøring som ikke hadde noe å gjøre, skriver ingenting. En gjentakelse av den samme feilen skriver ingenting, men det gjør det når det retter seg igjen. En manuell kjøring blir alltid registrert.

## Oppbevaring

**Activity Log Retention** i General sletter oppføringer etter 90 dager som standard. 0 beholder dem. Loggfiler har egen oppbevaring (30 dager).

## Vis logg (View log)

:::caution[Kommer i en senere versjon]
View log-lenker fra oppføringer er ikke med i en utgitt versjon ennå.
:::

Oppføringer lenker til loggen de kom fra, og åpner den på riktig linje. Er loggen borte, står det "Log no longer kept" på oppføringen.
