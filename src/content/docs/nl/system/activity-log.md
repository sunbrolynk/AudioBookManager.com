---
title: Activiteitenlog en gebeurtenissen
description: Het overzicht van wat er gebeurd is, en hoe dat verschilt van Logs.
---

ABM houdt drie soorten overzichten bij.

| Waar | Wat het is |
|---|---|
| **System > Events** en **System > Activity Log** | Het activiteitenlog: een lijst in de database van dingen die gebeurd zijn. Events is de weergave gefilterd op ernst. Activity Log (met de titel Activity History) filtert op categorie, doorzoekt de berichten en toont de toestand voor en na |
| **System > Log Files** | Tekstlogbestanden met alle details. Zie [Logs](/nl/system/logs/) |
| **Activity > History** | Alleen de downloadgeschiedenis. Zie [Activiteit](/nl/using/activity/) |

## Wat er wordt vastgelegd

Afgeronde achtergrondtaken (één samenvattingsregel per taak), handmatige wijzigingen aan clients, indexers, profielen, tags, meldingen, rootmappen enzovoort, grabs (met wie ze gestart heeft), conversies, mislukte Audible-downloads, back-ups, inlogpogingen en mislukte inlogpogingen, en een opstartstap die mislukt is.

Categorieën: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security en System.

## Privacy

Regels bevatten nooit URL's, hosts, gebruikersnamen, wachtwoorden, sleutels, tokens of ruwe fouttekst van een client of dienst. Objecten worden genoemd bij de naam die jij ze gegeven hebt. Bij het opslaan van instellingen staat erbij welke instellingen veranderd zijn, niet de waarden. Bij inlogpogingen wordt alleen het IP-adres bewaard. Mislukte inlogpogingen vanaf één adres binnen 15 minuten worden samengevoegd tot één regel met het aantal pogingen.

## Bewust stil

Een geplande run die niks te doen had, schrijft niks. Een herhaling van dezelfde mislukking schrijft niks, maar een herstel wel. Een handmatige run wordt altijd vastgelegd.

## Bewaartermijn

**Activity Log Retention** in General verwijdert items standaard na 90 dagen. Met 0 blijven ze staan. Logbestanden hebben hun eigen bewaartermijn (30 dagen).

## Log bekijken

:::caution[Komt in een latere release]
Links naar het log vanuit regels zitten nog niet in een uitgebrachte versie.
:::

Regels linken naar het log waar ze vandaan komen en openen het op die regel. Is het log weg, dan staat er bij de regel "Log no longer kept".
