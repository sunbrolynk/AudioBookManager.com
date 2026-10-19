---
title: Mediabeheer
description: Rootmappen, importeren, extra bestanden, prullenbak, scans, upgrades en rechten.
---

**Settings > Media Management** bepaalt waar boeken staan en hoe bestanden binnenkomen. Instellingen die als geavanceerd gemarkeerd zijn, verschijnen met **Show Advanced**.

## Rootmappen (Root Folders)

Een rootmap is een map waarin ABM boeken beheert. Voeg er een toe met **Add Root Folder**, die een mapbrowser opent waarin je ook een pad kunt typen. ABM kan ook mappen onder een root tonen die nog nergens aan gekoppeld zijn, en die importeren. Bij het toevoegen van een root worden de vrije ruimte en de ondersteuning voor hardlinks gecontroleerd. Een root verwijderen verwijdert geen bestanden.

De standaard rootmap is de map waar nieuwe boeken heen gaan, en de map die bepaalt of hardlinken wordt aangeboden bij Library Import.

## Mappen (Folders)

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Create Empty Book Folders | uit | Maakt ontbrekende boekmappen aan bij toevoegen, bij het wijzigen van de rootmap en tijdens een schijfscan. Wordt genegeerd zolang **Delete empty folders** aanstaat, zodat er geen map wordt gemaakt die meteen weer weg moet. |
| Delete empty folders | uit | Verwijdert lege boekmappen tijdens een schijfscan en als boekbestanden worden verwijderd |

## Importeren (Importing)

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Skip Free Space Check | uit | Voor als ABM de vrije ruimte op een root niet kan bepalen |
| Minimum Free Space | 100 (MB) | Een import die minder dan dit overlaat, wordt geweigerd |
| Use Hardlinks instead of Copy | aan | Voor afgeronde downloads: hardlinken in plaats van kopiëren, zodat seeden de ruimte niet verdubbelt. Moet op hetzelfde volume. |
| Library Import | Copy | De standaard voor [Bibliotheek importeren](/nl/library-import/): kopiëren, hardlinken of verplaatsen. Hardlinken is grijs tot de standaard root gecontroleerd is en het ondersteunt. |
| Import Extra Files | aan | Hoofdschakelaar voor het meenemen van niet-audiobestanden. Geldt voor Library Import, Manual Import en afgeronde downloads |
| Extra File Extensions (geavanceerd) | leeg | Extra extensies om te importeren, zoals `srt, lrc`. Geblokkeerde types worden geweigerd. |
| Preferred Cover (geavanceerd) | Matched | De cover van de gematchte editie, of de beste afbeelding uit de map, als ze er allebei zijn |

Extra bestanden hebben vijf schakelaars:

| Schakelaar | Standaard | Omvat |
|---|---|---|
| Cover art | aan | Cover plus scans van de achterkant en het boekje |
| Book info files | aan | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | uit | PDF's die bij een boek horen |
| Chapters, transcripts and playlists | aan | .cue, hoofdstuklijsten, ondertitels, songteksten, playlists. Bestandsnamen daarin worden herschreven naar de hernoemde audio. |
| Audible originals and ebooks | uit | .aax/.aaxc, vouchers, epub en vergelijkbaar |

Half gedownloade bestanden en uitvoerbare bestanden worden nooit geïmporteerd. ABM's eigen `metadata.json` wordt altijd door ABM zelf afgehandeld.

Hardlinken is niet hetzelfde als **Use Hardlinks instead of Copy**. Die is voor downloads. De standaard voor Library Import is alleen wat het dialoogvenster Add to Library vooraf selecteert.

## Bestandsbeheer (File Management)

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Unmonitor Deleted Books | uit | Een boek dat van schijf verwijderd is, wordt niet meer gevolgd |
| Change File Date | None | Past bestandsdatums aan bij importeren en opnieuw scannen |
| Enable Recycling Bin | aan | Verwijderde boekbestanden gaan naar een prullenbak in plaats van weg te zijn |
| Recycling Bin | leeg | Waar de prullenbak staat. Leeg gebruikt de standaard van ABM (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (dagen) | 0 zet automatisch opruimen uit |
| Library Scan Interval | 0 (uit) | Aantal uur tussen automatische scans |
| Watch for Changes | uit | Scant als bestanden worden toegevoegd, verwijderd of gewijzigd |
| Cover Cache Workers | 4 | Hoeveel covers er tegelijk gedownload worden bij het cachen van artwork, van 1 tot 16. Zet hem lager als een cache-run fouten meldt |

## Kwaliteitsupgrades (Quality Upgrades)

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Automatic Upgrade Search | aan | Zoekt regelmatig naar betere releases van gedownloade boeken die nog onder hun cutoff zitten. Een kopie vervangt de jouwe alleen als het echt een upgrade is. |
| Upgrade Search Interval | 24 (uur) | Hoe vaak het draait |

## Rechten (Permissions, geavanceerd)

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Set Permissions | uit | Draait chmod bij importeren en hernoemen |
| chmod Folder | 755 | Octale modus voor mappen en bestanden, voor bestanden zonder execute-bits |
| chown Group | leeg | Groepsnaam of gid. Gebruik een gid op externe bestandssystemen |

## Valkuilen

- Staat de prullenbak aan maar is de map niet beschikbaar, dan mislukken verwijderacties die hem nodig hebben, in plaats van dat er definitief verwijderd wordt.
- Hardlinks werken alleen binnen één bestandssysteem. Bestanden die niet gelinkt kunnen worden, worden gekopieerd, nooit verplaatst, en geteld in het importresultaat.

Ken je Sonarr? Dit is Media Management uit Sonarr zonder naamgevingsformaten. Mapnamen kiest ABM. Bulk hernoemen zit op Library, Series en Authors als **Rename Files**.
