---
title: Mediehantering
description: Rotmappar, import, extrafiler, papperskorg, skanningar, uppgraderingar och behörigheter.
---

**Settings > Media Management** styr var böckerna bor och hur filer flyttas in. Inställningar som är märkta som avancerade visas med **Show Advanced**.

## Rotmappar (Root Folders)

En rotmapp är en katalog där ABM hanterar böcker. Lägg till en med **Add Root Folder**, som öppnar en mappbläddrare där du också kan skriva in sökvägen. ABM kan också lista omappade mappar under en rot och importera dem. En rots lediga utrymme och stöd för hårdlänkar kontrolleras när den läggs till. Att ta bort en rot frågar vad som ska hända: **Remove from ABM only** (standard) glömmer böckerna under den och lämnar filerna, och **Delete the books and their files** raderar permanent allt under sökvägen utan att gå via papperskorgen. En rot med böcker i kräver att du skriver för att bekräfta.

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
| Extra File Extensions (avancerad) | tom | Fler filtyper att ta med, som behåller sina egna namn, till exempel `srt, lrc`. Med eller utan punkt, åtskilda med komma eller mellanslag. Blockerade typer, som körbara filer och ofullständiga nedladdningar, går inte att spara. Inaktiverad medan **Import Extra Files** är av |
| Preferred Cover (avancerad) | Matched | Den matchade utgåvans omslag, eller mappens bästa bild, när båda finns |

**Import Extra Files** tar med bokens övriga filer tillsammans med ljudet. Fem brytare väljer vilka sorter som följer med, och en fil som matchar **Extra File Extensions** följer med även när dess sort är avslagen:

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
| Library Scan Interval | 24 | Timmar mellan automatiska skanningar |
| Watch for Changes | på | Skanna när filer läggs till, tas bort eller ändras |
| Cover Cache Workers | 4 | Hur många omslag som laddas ner samtidigt när bilder cachas, från 1 till 16 |

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

## Book Naming

Book Naming styr hur jag namnger filer och mappar. Det sparas med sidans enda Save, tillsammans med resten av Media Management. Det har Rename Books, Replace Illegal Characters, Colon Replacement (med ett eget alternativ) och format för Standard Book, Author Folder, Series Folder, Standalone Folder och Book Folder. Varje format visar ett liveexempel, och en tokenlista visar alla tokens du kan använda.

Library, Series och Authors har också en åtgärd **Organize** för de markerade böckerna, och det har en boksida också. Den öppnar först en förhandsvisning av varje ändring, och inget flyttas förrän du bekräftar. Sedan flyttar och döper Organize om: den flyttar varje boks mapp dit namninställningarna lägger den och döper om filerna. Den körs som en uppgift som du kan följa, avbryta och, efter en omstart, återuppta där den slutade. Bara en Organize körs åt gången. Det går inte att ångra, så kolla förhandsvisningen noga. Massomdöpning finns kvar i Library, Series och Authors som **Rename Files**.

Förhandsvisningen listar bara de böcker som skulle ändras. Bocka i **Show all selected books** för att se resten också. Den laddas i sidor, så använd **Load more** för att fortsätta genom ett stort urval. Förhandsvisningens rubrik räknar hur många böcker som ändras och hur många som hoppas över.

På sidan för en bok vars mapp inte ligger där namninställningarna skulle lägga den står det, med mappen den skulle hamna i och en Organize-knapp.

När en boks nya mapp skulle ligga inuti mappen den ligger i nu skapar Organize undermappen där och flyttar bara bokens egna filer dit: ljudet, plus omslag, kapitel och andra sidofiler som jag för för den. Allt annat i mappen blir kvar. Förhandsvisningen säger "Moves into a subfolder" och listar vad som blir kvar, och resultatrutan listar filerna som lämnades på plats. Om en flytt misslyckas halvvägs läggs redan flyttade filer tillbaka. Att flytta en boks mapp till en undermapp av sig själv från redigeringsrutan fungerar likadant.

Library Import följer samma namninställningar, även när den lägger till en bok som redan ligger i en rotmapp eller flyttar filer in i en bok jag redan har. Med Rename Books av behåller varje fil namnet den kom med. En fil vars namn skulle krocka med en annan fil i omgången, eller med en som redan ligger i bokens mapp (skiftläge ignoreras), får i stället namnet från formatet, och importen noterar vilka filer den gjorde det för. Med Rename Books på numreras filer som skulle få samma namn efter position, så att Manual Import aldrig hoppar över någon.

Standardlayouten är `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. En fristående bok har ingen seriemapp och inget volymnummer: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. En seriebok utan position börjar också med året. Ett okänt år utelämnas och skrivs aldrig som `(Unknown)`.

Om du kan Sonarr: det här är Sonarrs Media Management, namnformat inkluderade.
