---
title: Nastavení převodů
description: Výchozí hodnoty, volby kodeků, kapitoly, metadata, koš a ffmpeg.
---

**Settings > Conversions** nastavuje výchozí hodnoty pro [Převody](/cs/using/conversions/). Každá úloha je může přepsat.

## Obecné

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Enable Conversions | zapnuto | Když je vypnuto, vytvoření, hromadné zařazení do fronty nebo opakování konverze se odmítne s HTTP 409, úloha už ve frontě selže s hlášením o tom a **Auto-Reformat on Import** nezařadí nic |
| Conversion Folder | prázdné | Pracovní místo. Prázdné použije systémovou dočasnou složku |
| Concurrent Conversions | 2 | 1 až 4. Drž tuto hodnotu krát **Threads Per Job** na počtu jader nebo pod ním. Stránka upozorní, když je vyšší |
| Threads Per Job | Auto | Vlákna FFmpeg na úlohu, v pokročilém zobrazení. Auto nechá dvě jádra pro ABM a zbytek rozdělí mezi úlohy běžící zároveň, takže 8 jader a 2 souběžné úlohy dají po 3 vláknech. Nebo vyber pevný počet |
| Process Priority | Normal | Low nechá zbytek systému svižný. High skončí dřív |

## Výchozí kvalita zvuku

| Nastavení | Výchozí |
|---|---|
| Default Output Format | M4B (dále MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, nebo Copy bez překódování) |
| Default Sample Rate | Auto, které nepředává žádnou frekvenci a nechává volbu na FFmpegu. Nebo 22050, 44100 či 48000 Hz, což převzorkuje. Opus bere jen některé frekvence, takže 22050 se změní na 24000 a 44100 na 48000 (log to uvede) |
| Default Channels | Auto, které zachová rozložení kanálů zdroje. Mono smíchá do jednoho kanálu pro menší soubory. Stereo vynutí dva |

Oba seznamy frekvence a kanálů přijmou jen to, co stránka nabízí. Neplatná uložená hodnota se načte jako Auto.

## Volby kodeků

| Formát | Kodér | Volby |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (ve výchozím stavu AAC-LC) a AAC VBR, kvalita 1 až 5. Bitrate platí, když je VBR vypnuté. AAC-LC je jediný profil, protože kodér neumí HE-AAC. Uložený profil HE se načte jako AAC-LC |
| MP3 | LAME | Kvalita VBR 0 až 9 (ve výchozím stavu 4) a Joint Stereo (zapnuto). Datový tok platí, když je VBR vypnuté |
| Opus | libopus | Proměnný datový tok (zapnuto) a Application: Audio (výchozí), VoIP nebo Low Delay |
| FLAC | FLAC | Úroveň komprese 0 až 12 (ve výchozím stavu 5). Datový tok se ignoruje |

Datový tok **Copy** přeskočí překódování i všechny volby kodeků.

## Zpracování kapitol

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Default Chapter Behavior | Auto | Zachová kapitoly, pokud existují, jinak je vygeneruje. Další možnosti: jen zachovat, vždy generovat, žádné |
| Chapter Naming Format | `Chapter {n}` | Pojmenuje kapitoly, které si ABM musí vymyslet. `{n}` je číslo a `{title}` název zdrojového souboru. Názvy kapitol ze souborů nebo z Libexu zůstanou |
| Silence Detection | vypnuto | U souboru bez kapitol ABM vytvoří kapitoly v nejdelších pauzách ve zvuku. Používá to Split Chapters a Ensure Chapters na jednom souboru, když Libex kapitoly nemá. Když je vypnuto, rozdělení takového souboru selže |
| Target Chapter Length | 600 s | Zobrazí se, když je Silence Detection zapnuto, od 60 s. Každá kapitola končí v nejdelší pauze v rozmezí poloviny této délky na každou stranu, nebo v této délce, pokud pauza není. Krátký zbytek se připojí k poslední kapitole a kapitoly pokryjí celý soubor |
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
| Retention Period | 7 dní | Starší položky maže úloha úklidu koše. 0 je ponechá navždy |
| Auto-Empty When Bin Is Large | vypnuto | Zapne práh níže |
| Auto-Empty Threshold | 10 GB | Po konverzi, pokud koš obsahuje víc než tohle, se smažou nejstarší položky |
| Delete Original | vypnuto | Výchozí pro každou úlohu, dá se přepsat |
| Update Library Paths | zapnuto | Záznamy knih následují převedené soubory |
| Auto-Reformat on Import | vypnuto | Převede nově naimportované knihy, které dorazí v jiném formátu, podle výchozích hodnot výše |
| Backup Original Metadata | vypnuto | Před konverzí zapíše soubor JSON do složky `.metadata_backup` uvnitř složky knihy. Uvádí název, formát a velikost každého původního souboru a značky a kapitoly, které obsahuje |

## Pokročilé FFmpeg

FFmpeg Path (prázdné ho najde v PATH), Custom FFmpeg Arguments (přidají se ke každému příkazu; špatné argumenty způsobí, že převody selžou), Logging Level (výchozí error) a Keep FFmpeg Logs (vypnuto).
