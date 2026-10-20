---
title: Discover-Einstellungen
description: Aktualisierungsplan und Scraping-Grenzen für die Discover-Kataloge.
---

**Settings > Discover** steuert, wie die Kataloge unter [Entdecken](/de/using/discover/) gefüllt werden.

## Aktualisierung und Katalogstatus

Jeder Katalog (New Releases, Coming Soon, Audible Best, Recommended) hat einen eigenen Button **Refresh** und **Clear**, und die Seite zeigt, wie voll jeder ist.

## Zeitplan (Schedule)

| Einstellung | Wirkung |
|---|---|
| Auto Refresh | Kataloge nach Zeitplan aktualisieren |
| Frequency | Täglich, wöchentlich oder monatlich, mit Tag und Uhrzeit |
| Refresh on Startup | Leere Kataloge beim Start von ABM füllen |
| Use CRON Expression | Ersetzt die einfachen Optionen |

## Scraping

| Einstellung | Bereich | Wirkung |
|---|---|---|
| Pages to Scrape | 1 bis 50 | Audible-Seiten, die pro Katalog gelesen werden |
| Max ASINs per Refresh | 100 bis 5000 | Bücher, die pro Aktualisierung von Libex geholt werden |
| Batch Size | 10 bis 900 | ASINs pro Libex-Anfrage. Größer ist schneller und kann auf manchen Systemen fehlschlagen |

Die Standards stehen in der App und werden hier nicht wiederholt. Öffne die Seite, um sie zu sehen.

## Stolperfallen

Aktualisierungen werden übersprungen, wenn Libex nicht erreichbar ist, und das wird einmal geloggt.
