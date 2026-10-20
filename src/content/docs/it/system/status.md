---
title: Stato
description: Controlli di salute e uno sguardo a cosa sta facendo ABM.
---

**System > Status** esegue controlli di salute ed elenca tutto ciò che non va: client di download e indexer in errore, problemi con le cartelle radice e un Libex irraggiungibile. Mostra anche l'uso del pool di connessioni al database. Quando va tutto bene dice "All systems healthy".

I controlli di salute girano anche in background ogni 6 ore. Connect può mandare notifiche con **On Health Issue** e **On Health Restored**. Vedi [Connect](/it/settings/connect/).

Se conosci Sonarr: è la stessa idea di System > Status più Health in un'unica pagina.

## Da tenere presente

- Un client di download disattivato non viene considerato in errore.
- Un account Audible che deve accedere di nuovo compare qui oltre che nella pagina delle impostazioni Audible.
