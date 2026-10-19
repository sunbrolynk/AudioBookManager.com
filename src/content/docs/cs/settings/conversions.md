---
title: Nastavení převodů
description: Výchozí hodnoty, volby kodeků, kapitoly, metadata, koš a ffmpeg.
---

**Settings > Conversions** nastavuje výchozí hodnoty pro [Převody](/cs/using/conversions/). Každá úloha je může přepsat.

## Obecné

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Enable Conversions | zapnuto | Vypne převádění na stránce Conversions. **Auto-Reformat on Import** je samostatné |
| Conversion Folder | prázdné | Pracovní místo. Prázdné použije systémovou dočasnou složku |
| Concurrent Conversions | 2 | 1 až 4. Tohle číslo krát **Threads Per Job** (v **Advanced FFmpeg** dole na této stránce) drž na počtu jader nebo pod ním. Když je vyšší, stránka varuje |
| Process Priority | Normal | Low nechá zbytek systému svižný. High skončí dřív |

## Výchozí kvalita zvuku

| Nastavení | Výchozí |
|---|---|
| Default Output Format | M4B (dále MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, nebo Copy bez překódování) |
| Default Sample Rate | Auto, tedy podle zdroje. Nebo 22050, 44100 či 48000 Hz |
| Default Channels | Auto, tedy podle zdroje. Nebo Mono či Stereo |

## Volby kodeků

| Formát | Kodér | Volby |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (ve výchozím stavu AAC-LC) a AAC VBR, kvalita 1 až 5. Datový tok platí, když je VBR vypnuté. HE-AAC a HE-AACv2 jsou v nabídce, ale zatím se kódují jako AAC-LC |
| MP3 | LAME | Kvalita VBR 0 až 9 (ve výchozím stavu 4) a Joint Stereo (zapnuto). Datový tok platí, když je VBR vypnuté |
| Opus | libopus | Proměnný datový tok (zapnuto) a Application: Audio (výchozí), VoIP nebo Low Delay |
| FLAC | FLAC | Úroveň komprese 0 až 12 (ve výchozím stavu 5). Datový tok se ignoruje |

Datový tok **Copy** přeskočí překódování i všechny volby kodeků.

## Zpracování kapitol

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Default Chapter Behavior | Auto | Zachová kapitoly, pokud existují, jinak je vygeneruje. Další možnosti: jen zachovat, vždy generovat, žádné |
| Chapter Naming Format | `Chapter {n}` | Pojmenuje kapitoly, které si ABM musí vymyslet. `{n}` je číslo a `{title}` název zdrojového souboru. Názvy kapitol ze souborů nebo z Libexu zůstanou |
| Silence Detection | vypnuto | Experimentální. Použije se jen při dělení knihy, která nemá kapitoly: ABM ji rozdělí v místech ticha. Když je vypnuté, takové dělení selže |
| Minimum Chapter Length | 60 s | Nejkratší kapitola, kterou detekce ticha vytvoří |
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
| Retention Period | 7 dní | Nastaví datum vypršení, které se ukazuje u položek v koši. Zatím je k tomu datu nic nesmaže |
| Auto-Empty on Low Disk Space | vypnuto | Zapne hranici pod tím |
| Auto-Empty Threshold | 10 | Když po převodu koš obsahuje víc než tolik GB, nejstarší položky se smažou. Stránka hodnotu ukazuje jako procenta, ale čte se jako GB |
| Delete Original | vypnuto | Výchozí pro každou úlohu, dá se přepsat |
| Update Library Paths | zapnuto | Záznamy knih následují převedené soubory |
| Auto-Reformat on Import | vypnuto | Převede nově naimportované knihy, které dorazí v jiném formátu, podle výchozích hodnot výše |
| Backup Original Metadata | vypnuto | Před převodem uloží záznam o původních souborech (názvy, formáty, velikosti) do `.metadata_backup/` vedle nich. Audio tagy neukládá |

## Pokročilé FFmpeg

FFmpeg Path (prázdné ho najde v PATH), Threads Per Job (0 vybere automaticky počet CPU minus 2), Custom FFmpeg Arguments (přidají se ke každému příkazu; špatné argumenty způsobí, že převody selžou), Logging Level (výchozí error) a Keep FFmpeg Logs (vypnuto).
