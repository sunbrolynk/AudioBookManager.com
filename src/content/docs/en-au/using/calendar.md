---
title: Calendar
description: Upcoming releases and an iCal feed.
---

**Calendar** shows release dates of the books ABM knows about, coloured by status. Views are month, week, forecast, day and agenda. Week start and date formats come from [UI settings](/en-au/settings/ui/).

## Options

The **Calendar Options** button offers: collapse multiple books releasing on the same day, colour the whole event with the status colour, and show author and series information.

## iCal feed

Subscribe from a calendar app with the feed URL (copy it, or use **Subscribe in Calendar App**). Options:

- **Include Unmonitored**: include unmonitored books in the feed.
- **Show as All-Day Events**: events are all-day.
- Tags: the feed then contains only books with at least one matching tag.

The feed URL carries your API key as `apikey=`, which is how a calendar app gets in without signing in. It works from outside your network when the calendar app can reach ABM. Anyone with the URL can use ABM's API, and the Calendar page warns about this: a cloud calendar such as Google holds the URL on its servers. Subscribe only from an app you trust, or keep the feed on your own network. If a URL leaks, regenerate the key under **Settings > General > Security**, then copy the subscribe URL again, because the old one stops working. See [Security and sign-in](/en-au/settings/security/).
