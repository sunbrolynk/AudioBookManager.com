---
title: Downloadclients
description: Ondersteunde clients, afhandeling van afgeronde downloads en remote path mappings.
---

**Settings > Download Clients** koppelt het programma dat het downloaden doet.

## Ondersteunde clients

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet en Blackhole (een watch folder). Dat is de complete lijst.

## Velden

Welke velden je ziet, hangt af van de client.

| Veld | Wat het doet |
|---|---|
| Name | Naam |
| Host, Port, URL Base | Waar de client luistert |
| Use SSL, Verify TLS certificate | HTTPS, en of het certificaat gecontroleerd wordt |
| Username, Password, API Key | Inloggegevens. Een opgeslagen geheim wordt nooit getoond |
| Category | Categorie of label dat ABM op zijn downloads zet, bijvoorbeeld `audiobooks` |
| Watch Folder, Directory | Blackhole: waar bestanden heen gaan en waar afgeronde bestanden verschijnen |
| Client Priority | Welke client wint als er meerdere passen |
| Remove from Client, Also Delete Files, Remove Failed | Wat ABM na een import of mislukking uit de client verwijdert |
| Queue Page Remove Action | Wat het verwijderen van een rij op de pagina Queue doet: alleen uit ABM wegzetten, uit de client verwijderen en de bestanden houden, of verwijderen inclusief bestanden |

**Test** controleert de verbinding. Een uitgeschakelde client is geen ongezonde client. Een client die faalt, wordt opnieuw geprobeerd met een back-off.

## Afgeronde downloads afhandelen

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Enable | aan | Importeert afgeronde downloads automatisch |
| Redownload Failed | aan | Zet een mislukte release op de blocklist en zoekt opnieuw |
| Redownload Failed from Interactive Search | aan | Hetzelfde, voor releases die je met de hand gekozen hebt |

Of imports hardlinken of kopiëren, regel je met **Use Hardlinks instead of Copy** in [Mediabeheer](/nl/settings/media-management/). Is de map van de client niet hetzelfde pad dat ABM ziet, voeg dan een remote path mapping toe.

## Externe padkoppelingen (Remote path mappings)

Meldt de client `/downloads/audiobooks` en ziet ABM het als `/data/audiobooks`, voeg dan een mapping toe.

| Veld | Wat het doet |
|---|---|
| Host | De clienthost waar de mapping voor is |
| Remote Path | Het pad zoals de client het meldt |
| Local Path | Dezelfde map zoals ABM hem ziet |

## Valkuilen

- Een onleesbare submap in een afgeronde download houdt de import van die hele download tegen. Er wordt niks uit de client verwijderd, en het wordt later opnieuw geprobeerd.
- Docker: mount de downloadmap waar het kan op hetzelfde pad in beide containers. Mappings zijn het vangnet.
