---
title: Libri cercati (Wanted)
description: Libri mancanti e libri sotto il cutoff di qualità.
---

**Wanted** ha due pagine.

## Mancanti (Missing)

Libri monitorati senza file. Per ogni riga: **Auto Search**, **Interactive Search**, **Manual Import**, **Unmonitor**.

- Auto Search interroga tutti gli indexer attivi e prende la release migliore che i profili permettono.
- Interactive Search elenca le release così scegli tu. Una scelta fatta da qui conta come grab manuale.
- Manual Import punta ABM su file che hai già.

ABM cerca anche da solo i libri mancanti. Le release vengono trattenute dal profilo di ritardo prima del grab. Vedi [Profili](/it/settings/profiles/).

## Cutoff non raggiunto (Cutoff Unmet)

Libri scaricati la cui qualità è ancora sotto il cutoff del loro profilo ("Upgrade Until"). **Search All Cutoff Unmet** li cerca. Una copia migliore sostituisce quella vecchia solo quando sta più in alto nella scala.

**Media Management > Quality Upgrades** può fare questa ricerca per te: **Automatic Upgrade Search** (attivo di default) ogni **Upgrade Search Interval** (24 ore di default). Vedi [Media Management](/it/settings/media-management/).

Se conosci Sonarr: è la stessa idea di Wanted > Cutoff Unmet, con una scala di formati (M4B, MP3 e così via, a file singolo o multiplo) al posto delle risoluzioni.
