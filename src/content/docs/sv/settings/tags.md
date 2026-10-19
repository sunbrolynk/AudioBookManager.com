---
title: Taggar
description: Taggar och regler för automatisk taggning.
---

**Settings > Tags** hanterar taggar och **Auto Tagging**.

## Taggar

En tagg är ett ord: gemener, inga mellanslag, inga kommatecken, upp till 100 tecken. Skriver du `Sci-Fi` blir det `sci-fi`. Taggar sätts på böcker, författare och serier, och matchas av indexerare, delay- och release-profiler, importlistor, Connect-agenter och kalenderflödet.

Om du kan Sonarr: taggar fungerar på samma sätt. En profil med en tagg gäller bara saker som har den.

## Automatiska taggar

En automatisk tagg är en regel som sätter taggar på böcker som matchar.

| Fält | Effekt |
|---|---|
| Name | Namn |
| Enable | På eller av |
| Remove Tags Automatically | När en bok inte längre matchar tas taggarna bort |
| Tags | Vad som ska sättas |
| Conditions | Vad en bok måste matcha. Varje villkor kan negeras eller krävas |

Villkorstyper: Genre, Monitored, Language, Root Folder, Status, Tag, Year (intervall), Series Type, Author (innehåller), Narrator (innehåller), Runtime i minuter (intervall) och Rating (intervall).

**Apply** kör valda regler nu. Reglerna körs också när böcker ändras.

## Fallgropar

- En regel som hänvisar till en borttagen tagg eller rotmapp hoppas över helt, åt båda hållen, så att en trasig regel aldrig taggar fel eller river bort taggar.
- Remove Tags Automatically tar bara bort taggar som den här regeln skulle lägga till.
