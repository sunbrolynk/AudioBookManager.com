---
title: Från Readarr eller Sonarr
description: Vad som följer med och vad som skiljer sig.
---

Har du kört Sonarr, Radarr eller Readarr ligger det mesta i ABM där du väntar dig.

## Samma sak

Wanted (Missing, Cutoff Unmet), Activity (Queue, History, Blocklist), Calendar med ett iCal-flöde, indexerare med RSS, automatisk och interaktiv sökning, kvalitetsprofiler med cutoff och uppgraderingar, delay- och release-profiler, taggar, Connect, remote path mappings, en papperskorg, säkerhetskopior, Tasks och Status.

## Annorlunda

| I arr-apparna | I ABM |
|---|---|
| Kvaliteter baserade på upplösning | En stege med ljudformat, en fil eller flera filer |
| Custom formats | Release-profiler med Must Contain, Must Not Contain, Preferred |
| En post är ett avsnitt, en film eller en bok | En bok, där serie och plats spåras som kataloger |
| Metadata från deras egen tjänst | Libex, med omslag som kan låsas och sidecars och taggar som skrivs |
| En nedladdningsmapp | Samma, plus Library Import för befintliga samlingar |
| Ingen mediekonvertering | En konverteringskö: konvertera, slå ihop, dela upp, kapitel |
| Namnformat | ABM väljer mappnamnen. Rename Files finns på listan |
| Importlistor av många slag | MAM och RSS |

## Finns inte i ABM

Flood är ingen klient. Det finns inga custom formats. Readarrs stöd för böcker ingår inte. ABM är bara ljudböcker.

## Flytta över

Det finns ingen Readarr-importör. Peka ABM mot din befintliga ljudboksmapp med [Biblioteksimport](/sv/library-import/) och läs [Flytta in ett bibliotek](/sv/guides/moving-a-library-in/).
