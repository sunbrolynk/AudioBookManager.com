---
title: Status
description: Health checks and a look at what ABM is doing.
---

**System > Status** runs health checks and lists anything wrong: failing download clients and indexers, root folder problems and an unreachable Libex. It also shows database connection pool use. When nothing is wrong it says "All systems healthy".

![System, Status on a phone: health checks, disk space, database and version](../../../assets/docs/phone-system-status.jpg)

Health checks also run every 6 hours in the background. Connect can notify on **On Health Issue** and **On Health Restored**. See [Connect](/settings/connect/).

A root folder that doesn't answer within 10 seconds shows as "Unresponsive: <path>" instead of hanging the page, and nested root folders are named. A **Reverse Proxy** warning appears when ABM suspects a proxy that sends no forwarding headers. See [Security](/settings/security/#reverse-proxies). **More Info** at the bottom links the home page, the Discord, the source and the metadata site.

If you know Sonarr: it is the same idea as System > Status plus Health on one page.

## Gotchas

- A disabled download client is not treated as unhealthy.
- An Audible account that needs to sign in again appears here as well as on the Audible settings page.
