---
title: Status
description: Health checks and a look at what ABM is doing.
---

**System > Status** runs health checks and lists anything wrong: failing download clients and indexers, root folder problems and outbound connection problems. It also shows database connection pool use. When nothing is wrong it says "All systems healthy".

Health checks also run every 6 hours in the background. Connect can notify on **On Health Issue** and **On Health Restored**. See [Connect](/settings/connect/).

If you know Sonarr: it is the same idea as System > Status plus Health on one page.

## Gotchas

- A disabled download client is not treated as unhealthy.
- An Audible account that needs to sign in again appears here as well as on the Audible settings page.
