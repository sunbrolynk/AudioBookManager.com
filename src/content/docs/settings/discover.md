---
title: Discover settings
description: Refresh schedule and scraping limits for the Discover catalogs.
---

**Settings > Discover** controls how the [Discover](/using/discover/) catalogs are filled.

## Refresh and catalog status

Each catalog (New Releases, Coming Soon, Audible Best, Recommended) has its own **Refresh** and **Clear** button, and the page shows how full each is.

## Schedule

| Setting | Effect |
|---|---|
| Auto Refresh | Refresh catalogs on a schedule |
| Frequency | Daily, weekly or monthly, with day and time. Day of Month is 1 to 28 |
| Refresh on Startup | Fill any empty catalog when ABM starts |
| Use CRON Expression | Replaces the simple options |

## Scraping

| Setting | Range | Effect |
|---|---|---|
| Pages to Scrape | 1 to 50 | Audible pages read per catalog |
| Max ASINs per Refresh | 100 to 5000 | Books fetched from Libex per refresh |
| Batch Size | 10 to 900 | ASINs per Libex request. Larger is faster and may fail on some systems |

The defaults live in the app and are not repeated here. Open the page to see them.

## Gotchas

Refreshes are skipped when the metadata source is not ready, and logged once.
