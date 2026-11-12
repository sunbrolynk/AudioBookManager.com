---
title: Bibliotheek
description: Boeken, auteurs en series, en hoe ABM hun status bijhoudt.
---

Het menu **Library** heeft drie lijsten: **Books**, **Series** en **Authors**. Met **Add New** en **Library Import** komt er iets in te staan. **Audible Library** en **Conversions** hebben hun eigen pagina's.

## Boeken

Elk boek is een overzichtsrij, een poster of een regel in een tabel (de weergaveschakelaar zit in de werkbalk). Een boek heeft een status:

- **Wanted**: gevolgd, nog geen bestanden. ABM zoekt ernaar.
- **Downloaded**: de bestanden staan op schijf.
- **Missing Files**: het boek is gedownload, maar de bestanden staan niet meer waar ABM ze verwacht.
- **Unmonitored**: ABM laat het met rust.

Open een boek voor de detailpagina: bestanden, metadata, geschiedenis, de kwaliteit die ABM gemeten heeft, en acties zoals Refresh & Scan en het bewerkdialoogvenster (zie hieronder). Zie [Sidecarbestanden](/nl/using/sidecars/).

De detailpagina kan ook één los bestand schrijven (OPF, NFO of metadata.json), de audiotags, de ingesloten cover of **Write All**. Op een telefoon staan die in het Actions-blad onder **Write to folder and files**.

Als de werkbalk van een pagina op een desktop te smal is, verhuizen de knoppen die niet meer passen naar een **More**-menu aan het einde van hun groep. Sorteren, filteren en de weergave blijven altijd op de balk staan.

Ken je Sonarr? Een boek is een aflevering, een serie is seizoen en show in één, en een auteur is een manier om die twee te groeperen. Het verschil is dat één boek bij meerdere series kan horen, en ABM gebruikt de primaire serie (die met de laagste positie) als het er een moet kiezen.

## Series

**Library > Series** toont elke serie met het aantal boeken dat je hebt, dat gewenst is en waarvan bestanden ontbreken, als Overview of Posters. Een seriepagina toont de hele catalogus, ook boeken die je niet hebt. Filter op All, In Library of Not in Library. **Add Remaining** of **Select to Add** haalt de ontbrekende boeken binnen als gewenst, en **Refresh Series** haalt de catalogus opnieuw op. **Monitor New Books** (All of None) bepaalt of boeken die later uitkomen als gewenst worden toegevoegd. Zie [Series volgen](/nl/using/series-tracking/).

## Auteurs

**Library > Authors** toont de auteurs, als Overview of Posters. Een auteurspagina toont hun catalogus gegroepeerd per serie, met per serie het aantal gedownloade boeken en het totaal, plus hun kwaliteitsprofiel, genres en beoordeling. **Refresh Catalog** haalt hem opnieuw op en **Search Author** zoekt naar hun gewenste boeken. **Monitor New Books** werkt hetzelfde als bij een serie, en een auteur begint op None.

Een serie of auteur verwijderen wordt geweigerd zolang er nog boeken van in de bibliotheek staan. Haal eerst de boeken weg.

## Overerving van het kwaliteitsprofiel

Het kwaliteitsprofiel van een boek komt, in deze volgorde, van: zijn eigen instelling, zijn primaire serie, zijn primaire auteur, en dan het standaardprofiel. Zie [Profielen](/nl/settings/profiles/).

## Het bewerkdialoogvenster

Het bewerkdialoogvenster van een boek past ABM's eigen instellingen voor dat boek aan, niet de metadata:

- **Monitored**
- **Quality Profile** (No Change als je er meerdere bewerkt)
- **Path**, voor één boek (met een knop om het opnieuw te berekenen), of **Root Folder** voor een selectie
- **Tags**
- **Audiobookshelf**: het vakje **Write All** vinkt alle vakjes hieronder aan, zodat één keer opslaan alle bestanden schrijft die Audiobookshelf leest
- **Write to Directories**: cover.jpg, desc.txt, reader.txt, een OPF, een NFO en metadata.json. De OPF en NFO heten naar het eerste audiobestand van het boek (bijvoorbeeld `Dune.opf`), of naar het boek als er geen audio is
- **Write to Audio Files**: **Write audio tags** en **Embed cover art**, dat de cover in de audiobestanden schrijft

Hetzelfde dialoogvenster opent voor series en auteurs en geldt dan voor al hun boeken. De schrijfopties draaien als je opslaat. Per boek worden eerst de mapbestanden geschreven, dan de tags, dan de ingesloten cover. Een bestand waar het boek niets voor heeft (geen beschrijving, geen verteller, geen cover) wordt overgeslagen en telt niet als fout. Bij één boek of een selectie boeken zie je bij het opslaan een waarschuwing. Bij een serie of een auteur wordt het stil overgeslagen. Bij een serie of een auteur noemt het logboek van de taak elke overgeslagen of mislukte bestandsschrijving.

## Tags

Boeken, auteurs en series kunnen tags hebben. Tags sturen indexers, meldingen, importlijsten en profielen, en filteren de agendafeed. Zie [Tags](/nl/settings/tags/).

## Selecteren

Selecteer rijen om in één keer iets met meerdere te doen: volgen, zoeken, taggen, hernoemen, verwijderen. Voor de telefoon, zie [Op je telefoon](/nl/phone/).
