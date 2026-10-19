---
title: Nastavení převodů
description: Výchozí hodnoty, volby kodeků, kapitoly, metadata, koš a ffmpeg.
---

**Settings > Conversions** nastavuje výchozí hodnoty pro [Převody](/cs/using/conversions/). Každá úloha je může přepsat.

## Obecné

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Enable Conversions | zapnuto | Hlavní vypínač |
| Conversion Folder | prázdné | Pracovní místo. Prázdné použije systémovou dočasnou složku |
| Concurrent Conversions | 2 | V rozhraní 1 až 4. Souběh krát počet vláken drž pod počtem jader |
| Process Priority | Normal | Low nechá zbytek systému svižný. High skončí dřív |

## Výchozí kvalita zvuku

| Nastavení | Výchozí |
|---|---|
| Default Output Format | M4B (dále MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, nebo Copy bez překódování) |
| Default Sample Rate | Auto, tedy podle zdroje |
| Default Channels | Auto, tedy podle zdroje |

## Volby kodeků

AAC Profile (výchozí AAC-LC, HE-AAC, HE-AACv2) a AAC VBR; kvalita MP3 VBR a joint stereo; úroveň komprese FLAC (výchozí 5); proměnný datový tok Opus (zapnuto) a typ aplikace (výchozí Audio; existují i VoIP a Low Delay).

## Zpracování kapitol

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Default Chapter Behavior | Auto | Zachová kapitoly, pokud existují, jinak je vygeneruje. Další možnosti: jen zachovat, vždy generovat, žádné |
| Chapter Naming Format | `Chapter {n}` | Šablona pro vygenerované názvy |
| Silence Detection | vypnuto | Experimentální. Zkouší najít kapitoly podle ticha |
| Minimum Chapter Length | 60 s | Pro rozpoznané kapitoly |
| Chapter Image Handling | Keep in file | Nebo odstranit, nebo vytáhnout do složky |

## Zpracování metadat

| Nastavení | Výchozí |
|---|---|
| Preserve Metadata | Všechna metadata |
| Embed Cover Art | zapnuto (jen JPEG, kvůli Audiobookshelfu) |
| Cover Art Max Size | 1000x1000 |

## Správa souborů

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Enable Recycle Bin | zapnuto | Originály jdou do koše místo smazání |
| Recycle Bin Path | prázdné | Prázdné použije `/config/recycle/conversions` |
| Retention Period | 7 dní | 0 vypne automatický úklid |
| Auto-Empty on Low Disk Space | vypnuto | Vysype koš, když volné místo klesne pod hranici |
| Auto-Empty Threshold | 10 (%) | Úroveň volného místa |
| Delete Original | vypnuto | Výchozí pro každou úlohu, dá se přepsat |
| Update Library Paths | zapnuto | Záznamy knih následují převedené soubory |
| Auto-Reformat on Import | vypnuto | Převede nově naimportované knihy, které dorazí v jiném formátu, podle výchozích hodnot výše |
| Backup Original Metadata | vypnuto | Nejdřív uloží původní tagy do doprovodného souboru `.json` |

## Pokročilé FFmpeg

FFmpeg Path (prázdné ho najde v PATH), Threads Per Job (0 vybere automaticky počet CPU minus 2), Custom FFmpeg Arguments (přidají se ke každému příkazu; špatné argumenty způsobí, že převody selžou), Logging Level (výchozí error) a Keep FFmpeg Logs (vypnuto).
