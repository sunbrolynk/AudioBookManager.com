---
title: Bibliotheek
description: Boeken, auteurs en series, en hoe ABM hun status bijhoudt.
---

Het menu **Library** heeft drie lijsten: **Books**, **Series** en **Authors**. Met **Add New** en **Library Import** komt er iets in te staan. **Audible Library** en **Conversions** hebben hun eigen pagina's.

## Boeken

Elk boek is een rij, een poster of een regel in een tabel (de weergaveschakelaar zit in de werkbalk). Een boek heeft een status:

- **Wanted**: gevolgd, nog geen bestanden. ABM zoekt ernaar.
- **Downloaded**: de bestanden staan op schijf.
- **Missing Files**: het boek is gedownload, maar de bestanden staan niet meer waar ABM ze verwacht.
- **Unmonitored**: ABM laat het met rust.

Open een boek voor de detailpagina: bestanden, metadata, geschiedenis, de kwaliteit die ABM gemeten heeft, en acties zoals Refresh & Scan en het bewerkdialoogvenster (zie hieronder). Zie [Sidecarbestanden](/nl/using/sidecars/).

Ken je Sonarr? Een boek is een aflevering, een serie is seizoen en show in één, en een auteur is een manier om die twee te groeperen. Het verschil is dat één boek bij meerdere series kan horen, en ABM gebruikt de primaire serie (die met de laagste positie) als het er een moet kiezen.

## Series en auteurs

De lijsten Series en Authors tonen het aantal boeken dat je hebt, dat gewenst is en waarvan bestanden ontbreken. Open er een om de catalogus te zien, inclusief boeken die je niet hebt. Van daaruit kun je de ontbrekende boeken toevoegen. Zie [Series volgen](/nl/using/series-tracking/).

Een serie of auteur verwijderen wordt geweigerd zolang er nog boeken van in de bibliotheek staan. Haal eerst de boeken weg.

## Overerving van het kwaliteitsprofiel

Het kwaliteitsprofiel van een boek komt, in deze volgorde, van: zijn eigen instelling, zijn primaire serie, zijn primaire auteur, en dan het standaardprofiel. Zie [Profielen](/nl/settings/profiles/).

## Het bewerkdialoogvenster

Het bewerkdialoogvenster van een boek past ABM's eigen instellingen voor dat boek aan, niet de metadata:

- **Monitored**
- **Quality Profile** (No Change als je er meerdere bewerkt)
- **Path**, voor één boek (met een knop om het opnieuw te berekenen), of **Root Folder** voor een selectie
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt en een OPF (bij het vinkje staat "metadata.opf"; het bestand wordt vernoemd naar het eerste audiobestand van het boek, bijvoorbeeld `Dune.opf`, of `title.opf` als er geen audio is)
- **Write to Audio Files**: schrijft metadatatags

Hetzelfde dialoogvenster opent voor series en auteurs en geldt dan voor al hun boeken. De schrijfopties draaien als je opslaat.

## Tags

Boeken, auteurs en series kunnen tags hebben. Tags sturen indexers, meldingen, importlijsten en profielen, en filteren de agendafeed. Zie [Tags](/nl/settings/tags/).

## Selecteren

Selecteer rijen om in één keer iets met meerdere te doen: volgen, zoeken, taggen, hernoemen, verwijderen. Voor de telefoon, zie [Op je telefoon](/nl/phone/).
