---
title: Audible-instellingen
description: Accounts, sync-schema, downloads en diagnose.
---

In **Settings > Audible** koppel je accounts en stel je het synchroniseren en downloaden af. Hoe de functie werkt, staat op de pagina [Audible](/nl/audible/).

## Accounts

Voor het koppelen van een account heb je een **Marketplace**, een **Display Name** en de **Redirect URL** nodig die Amazon terugstuurt nadat je bent ingelogd. Elk account houdt zijn eigen bibliotheek bij. Moet een account opnieuw inloggen, log dan opnieuw in op hetzelfde account in plaats van het te verwijderen. Bij verwijderen gaat de bibliotheek weg en wordt het apparaat uit Audible gehaald.

## Schema

| Instelling | Wat het doet |
|---|---|
| Auto Sync | Synchroniseert de bibliotheek volgens een schema |
| Sync on Account Add | Synchroniseert zodra een account gekoppeld is |
| Frequency | Dagelijks, wekelijks of maandelijks. Wekelijks voegt Day of Week toe. Maandelijks voegt Day of Month (1-28) toe. |
| Time | Uur en minuut |
| Use CRON Expression | Een eigen cron-expressie vervangt de opties hierboven |

## Downloadinstellingen

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Mirror Audible library to ABM | aan | Elke sync voegt de Audible-boeken toe die nog niet in ABM staan en downloadt die zonder bestanden, tot 25 per sync. Bij het aanzetten zie je hoeveel boeken de volgende sync toevoegt en downloadt. Zie [Audible-bibliotheek naar ABM spiegelen](/nl/audible/#audible-bibliotheek-spiegelen-naar-abm) |
| Concurrent Downloads | 2 | 1 tot 5. Hoger is sneller en kan tegen de rate limits van Audible aanlopen. |
| Preferred Quality | High | High of Normal |
| Delete Encrypted Files | aan | Verwijdert het versleutelde AAXC-bestand nadat het naar M4B is ontsleuteld |
| Temp Download Path | leeg | Leeg gebruikt de tijdelijke map van het systeem |

Mislukte downloads worden een paar keer vanzelf opnieuw geprobeerd, met een steeds langere wachttijd, en een storing die langer duurt zet de taak tot zes uur lang opnieuw in de wachtrij. Een geweigerde licentie, een boek dat je niet bezit of een mislukte ontsleuteling faalt in één keer.

## Verbindingsdiagnose

Kies een account en draai de diagnose. Die test FFmpeg, de inloggegevens, de API-verbinding en of downloaden lukt, en toont je uitgaande IP zoals Audible het ziet.
