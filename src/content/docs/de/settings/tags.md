---
title: Tags
description: Tags und Regeln für automatisches Taggen.
---

**Settings > Tags** verwaltet Tags und **Auto Tagging**.

## Tags

Ein Tag ist ein Wort: kleingeschrieben, ohne Leerzeichen, ohne Kommas, bis zu 100 Zeichen. Aus der Eingabe `Sci-Fi` wird `sci-fi`. Tags hängen an Büchern, Autoren und Serien und werden von Indexern, Delay- und Release-Profilen, Importlisten, Connect-Agenten und dem Kalender-Feed abgeglichen.

Wenn du Sonarr kennst: Tags funktionieren genauso. Ein Profil mit einem Tag gilt nur für Dinge, die diesen Tag tragen.

## Auto-Tags

Ein Auto-Tag ist eine Regel, die Tags auf Bücher setzt, die passen.

| Feld | Wirkung |
|---|---|
| Name | Bezeichnung |
| Enable | An oder aus |
| Remove Tags Automatically | Passt ein Buch nicht mehr, werden die Tags wieder entfernt |
| Tags | Was gesetzt wird |
| Conditions | Was ein Buch erfüllen muss. Jede Bedingung kann negiert oder als Pflicht gesetzt werden |

Arten von Bedingungen: Genre, Monitored, Language, Root Folder, Status, Tag, Year (Bereich), Series Type, Author (enthält), Narrator (enthält), Laufzeit in Minuten (Bereich) und Rating (Bereich).

**Apply** führt ausgewählte Regeln sofort aus. Regeln laufen außerdem, wenn sich Bücher ändern.

## Stolperfallen

- Eine Regel, die auf einen gelöschten Tag oder Root-Ordner verweist, wird komplett übersprungen, in beide Richtungen, damit eine kaputte Regel nie falsch taggt oder Tags entfernt.
- Remove Tags Automatically entfernt nur Tags, die diese Regel auch setzen würde.
