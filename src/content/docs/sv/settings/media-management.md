---
title: Mediehantering
description: Rotmappar, import, extrafiler, papperskorg, skanningar, uppgraderingar och behörigheter.
---

**Settings > Media Management** styr var böckerna bor och hur filer flyttas in. Inställningar som är märkta som avancerade visas med **Show Advanced**.

## Rotmappar (Root Folders)

En rotmapp är en katalog där ABM hanterar böcker. Lägg till en med **Add Root Folder**, som öppnar en mappbläddrare där du också kan skriva in sökvägen. ABM kan också lista omappade mappar under en rot och importera dem. En rots lediga utrymme och stöd för hårdlänkar kontrolleras när den läggs till. Att ta bort en rot raderar inga filer.

Standardrotmappen är den som nya böcker hamnar i och den som avgör om hårdlänkning erbjuds för Library Import.

## Mappar (Folders)

| Inställning | Standard | Effekt |
|---|---|---|
| Create Empty Book Folders | av | Skapar saknade bokmappar när böcker läggs till, när rotmappen ändras och vid en diskskanning. Ignoreras så länge **Delete empty folders** är på, så att en mapp inte skapas bara för att tas bort. |
| Delete empty folders | av | Raderar tomma bokmappar vid en diskskanning och när bokfiler raderas |

## Import (Importing)

| Inställning | Standard | Effekt |
|---|---|---|
| Skip Free Space Check | av | För när ABM inte kan avgöra ledigt utrymme på en rot |
| Minimum Free Space | 100 (MB) | En import som skulle lämna mindre än så vägras |
| Use Hardlinks instead of Copy | på | För färdiga nedladdningar: hårdlänka i stället för att kopiera, så att seedning inte tar dubbelt utrymme. Kräver samma volym. |
| Library Import | Copy | Standard för [Biblioteksimport](/sv/library-import/): kopiera, hårdlänka eller flytta. Hårdlänka är utgråat tills standardroten har kontrollerats och har stöd för det. |
| Import Extra Files | på | Huvudbrytare för att ta med filer som inte är ljud. Gäller Library Import, Manual Import och färdiga nedladdningar |
| Extra File Extensions (avancerad) | tom | Extra filändelser att importera, till exempel `srt, lrc`. Blockerade typer vägras. |
| Preferred Cover (avancerad) | Matched | Den matchade utgåvans omslag, eller mappens bästa bild, när båda finns |

Extrafiler har fem brytare:

| Brytare | Standard | Omfattar |
|---|---|---|
| Cover art | på | Omslag plus skannade baksidor och häften |
| Book info files | på | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | av | PDF:er som följer med en bok |
| Chapters, transcripts and playlists | på | .cue, kapitellistor, undertexter, sångtexter, spellistor. Filnamn inuti dem skrivs om till det omdöpta ljudet. |
| Audible originals and ebooks | av | .aax/.aaxc, vouchers, epub och liknande |

Ofullständiga nedladdningar och körbara filer importeras aldrig. ABM:s egen `metadata.json` hanteras alltid av ABM.

Hårdlänka är inte samma sak som **Use Hardlinks instead of Copy**. Den är för nedladdningar. Standarden för Library Import är bara det som dialogen Add to Library förväljer.

## Filhantering (File Management)

| Inställning | Standard | Effekt |
|---|---|---|
| Unmonitor Deleted Books | av | En bok som raderas från disken blir obevakad |
| Change File Date | None | Ändrar fildatum vid import och omskanning |
| Enable Recycling Bin | på | Raderade bokfiler flyttas till en papperskorg i stället för att raderas |
| Recycling Bin | tom | Var papperskorgen ligger. Tom använder ABM:s standard (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (dagar) | 0 stänger av automatisk rensning |
| Library Scan Interval | 0 (av) | Timmar mellan automatiska skanningar |
| Watch for Changes | av | Skanna när filer läggs till, tas bort eller ändras |
| Cover Cache Workers | 4 | Hur många omslag som laddas ner samtidigt när bilder cachas, från 1 till 16. Sänk den om en cachningskörning rapporterar fel |

## Kvalitetsuppgraderingar (Quality Upgrades)

| Inställning | Standard | Effekt |
|---|---|---|
| Automatic Upgrade Search | på | Söker regelbundet efter bättre releaser av nedladdade böcker som fortfarande ligger under sin gräns. En kopia ersätter din bara när den är en riktig uppgradering. |
| Upgrade Search Interval | 24 (timmar) | Hur ofta den körs |

## Behörigheter (Permissions, avancerat)

| Inställning | Standard | Effekt |
|---|---|---|
| Set Permissions | av | Kör chmod vid import och omdöpning |
| chmod Folder | 755 | Oktalt läge för mappar och filer, utan exekveringsbitar för filer |
| chown Group | tom | Gruppnamn eller gid. Använd ett gid på fjärrfilsystem |

## Fallgropar

- Om papperskorgen är på men dess mapp inte är tillgänglig misslyckas borttagningar som behöver den i stället för att radera permanent.
- Hårdlänkar fungerar bara inom ett och samma filsystem. Filer som inte går att länka kopieras, flyttas aldrig, och räknas i importresultatet.

Om du kan Sonarr: det här är Sonarrs Media Management utan namnformat. Mappnamnen väljs av ABM. Massomdöpning finns i Library, Series och Authors som **Rename Files**.
