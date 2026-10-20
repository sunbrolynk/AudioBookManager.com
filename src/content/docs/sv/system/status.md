---
title: Status
description: Hälsokontroller och en titt på vad ABM håller på med.
---

**System > Status** kör hälsokontroller och listar allt som är fel: nedladdningsklienter och indexerare som fallerar, problem med rotmappar och ett Libex som inte går att nå. Den visar också användningen av databasens anslutningspool. När allt är bra står det "All systems healthy".

Hälsokontrollerna körs också var sjätte timme i bakgrunden. Connect kan skicka notiser vid **On Health Issue** och **On Health Restored**. Se [Connect](/sv/settings/connect/).

Om du kan Sonarr: det är samma idé som System > Status plus Health på en och samma sida.

## Fallgropar

- En avaktiverad nedladdningsklient behandlas inte som ohälsosam.
- Ett Audible-konto som behöver logga in igen visas här såväl som på inställningssidan för Audible.
