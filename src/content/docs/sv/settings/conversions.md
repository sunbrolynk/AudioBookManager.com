---
title: Konverteringsinställningar
description: Standardval, codec-alternativ, kapitel, metadata, papperskorg och ffmpeg.
---

**Settings > Conversions** ställer in standardvalen för [Konverteringar](/sv/using/conversions/). Varje jobb kan åsidosätta dem.

## Allmänt

| Inställning | Standard | Effekt |
|---|---|---|
| Enable Conversions | på | Är det av avvisas det att skapa, massköa eller försöka om en konvertering med HTTP 409, ett redan köat jobb misslyckas med ett meddelande som säger det, och **Auto-Reformat on Import** köar ingenting |
| Conversion Folder | tom | Arbetsyta. Tom använder systemets temp-mapp |
| Concurrent Conversions | 2 | 1 till 4. Håll det här gånger **Threads Per Job** vid eller under antalet kärnor. Sidan varnar när det är högre |
| Threads Per Job | Auto | FFmpeg-trådar per jobb, i avancerad vy. Auto lämnar två kärnor åt ABM och delar resten mellan jobben som körs samtidigt, så 8 kärnor och 2 samtidiga jobb ger 3 trådar var. Eller välj ett fast antal |
| Process Priority | Normal | Low håller resten av systemet responsivt. High blir klar snabbare |

## Standardval för ljudkvalitet

| Inställning | Standard |
|---|---|
| Default Output Format | M4B (även MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy för ingen omkodning) |
| Default Sample Rate | Auto, som inte skickar med någon frekvens och låter FFmpeg bestämma. Eller 22050, 44100 eller 48000 Hz, som omsamplar. Opus tar bara vissa frekvenser, så 22050 blir 24000 och 44100 blir 48000 (loggen säger det) |
| Default Channels | Auto, som behåller källans layout. Mono mixar ner till en kanal för mindre filer. Stereo tvingar fram två |

De två listorna för frekvens och kanaler tar bara emot det sidan erbjuder. Ett ogiltigt sparat värde läses in som Auto.

## Codec-alternativ

| Format | Kodare | Alternativ |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC som standard) och AAC VBR, kvalitet 1 till 5. Bitraten gäller när VBR är av. AAC-LC är den enda profilen, eftersom kodaren inte kan göra HE-AAC. En sparad HE-profil läses in som AAC-LC |
| MP3 | LAME | VBR-kvalitet 0 till 9 (4 som standard) och Joint Stereo (på). Bitrate gäller när VBR är av |
| Opus | libopus | Variabel bitrate (på) och Application: Audio (standard), VoIP eller Low Delay |
| FLAC | FLAC | Komprimeringsnivå 0 till 12 (5 som standard). Bitrate ignoreras |

En bitrate på **Copy** hoppar över omkodning och alla codec-alternativ.

## Hantering av kapitel

| Inställning | Standard | Effekt |
|---|---|---|
| Default Chapter Behavior | Auto | Behåll om de finns, generera annars. Övriga: bara behåll, generera alltid, inga |
| Chapter Naming Format | `Chapter {n}` | Namnger kapitlen som ABM måste hitta på själv. `{n}` är numret och `{title}` källfilens namn. Kapitelnamn från filerna eller från Libex behålls |
| Silence Detection | av | För en fil utan kapitel gör ABM kapitel vid de längsta pauserna i ljudet. Används av Split Chapters och av Ensure Chapters på en enskild fil när Libex saknar kapitel. Är det av misslyckas delning av en sådan fil |
| Target Chapter Length | 600 s | Visas när Silence Detection är på, 60 s eller mer. Varje kapitel slutar vid den längsta pausen inom halva den här längden åt vardera håll, eller vid den här längden om det inte finns någon paus. En kort svans slås ihop med sista kapitlet, och kapitlen täcker hela filen |
| Chapter Image Handling | Keep in file | Eller ta bort, eller extrahera till en mapp |

## Hantering av metadata

| Inställning | Standard |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | på (bara JPEG, för Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Filhantering

| Inställning | Standard | Effekt |
|---|---|---|
| Enable Recycle Bin | på | Originalen hamnar i papperskorgen i stället för att raderas |
| Recycle Bin Path | tom | Tom använder `/config/recycle/conversions` |
| Retention Period | 7 dagar | Poster äldre än så raderas av papperskorgens rensningsuppgift. 0 behåller dem för alltid |
| Auto-Empty When Bin Is Large | av | Slår på tröskeln nedan |
| Auto-Empty Threshold | 10 GB | Efter en konvertering raderas de äldsta posterna om papperskorgen håller mer än så här |
| Delete Original | av | Standard för varje jobb, kan åsidosättas |
| Update Library Paths | på | Bokposterna följer de konverterade filerna |
| Auto-Reformat on Import | av | Konverterar nyimporterade böcker som kommer i ett annat format, med standardvalen ovan |
| Backup Original Metadata | av | Skriver före konverteringen en JSON-fil till en mapp `.metadata_backup` inne i bokens mapp. Den listar varje originalfils namn, format och storlek, plus taggarna och kapitlen som finns i den |

## Avancerat för FFmpeg

FFmpeg Path (tom hittar den via PATH), Custom FFmpeg Arguments (läggs till i varje kommando; felaktiga gör att konverteringar misslyckas), Logging Level (error som standard) och Keep FFmpeg Logs (av).
