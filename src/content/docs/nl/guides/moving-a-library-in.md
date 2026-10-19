---
title: Een bibliotheek verhuizen
description: Breng een bestaande collectie veilig in ABM.
---

## Voordat je begint

1. Maak een back-up van de collectie. Library Import kopieert standaard, maar houd rekening met fouten.
2. Zet een rootmap en een kwaliteitsprofiel op, en zorg dat de metadatabron bereikbaar is.
3. Kies tussen kopiëren, verplaatsen of hardlinken. Kopiëren is het veiligst. Hardlinken bespaart ruimte als de bibliotheek op hetzelfde bestandssysteem staat als de bron. Zie [Mediabeheer](/nl/settings/media-management/).

## De stappen

1. Ga naar **Library > Library Import** en scan de map.
2. Lees de lijst. Matches tonen een percentage. Verbeter rijen met **Needs attention** en **Unmatched** via **Find a match**, of voeg rijen samen die één boek zijn, verspreid over meerdere mappen.
3. Controleer de cover en extra bestanden per map alleen als je van de standaard wilt afwijken.
4. Selecteer de rijen en voeg ze toe. Neem je de standaard over, dan blijft het bij twee klikken.
5. Houd de taak in de gaten. De samenvatting meldt hoeveel bestanden er gekopieerd zijn in plaats van gehardlinkt, en wat er misging.

## Als je collectie al staat waar je hem wilt hebben

Een map toevoegen als rootmap voegt zelf nog geen boeken toe. De scans van ABM controleren alleen boeken die het al kent, dus wat er in die map staat pakt het niet op. De boeken moeten nog steeds via Library Import binnenkomen: het aantal **Unmapped Folders** van de rootmap onder **Settings > Media Management** opent Library Import voor die rootmap.

Bij het importeren zet ABM elk boek in zijn eigen indeling Auteur/Serie/Boek onder de standaard rootmap. Kies hardlinken als je de originelen ongemoeid wilt laten zonder extra ruimte te gebruiken.

## Valkuilen

- Een boek dat al in de bibliotheek staat, wordt ook zo getoond. Wijs het duplicaat af met het antwoord keep library in plaats van het twee keer te importeren.
- Een map zonder audio afwijzen verwijdert alleen wat bij die rij hoort, en gaat naar de prullenbak als die aanstaat.
- Een ASIN uit een beschrijving is een hint, geen match, tenzij de titel ook overeenkomt.
- Ververs na het importeren om de actuele metadata binnen te halen, en zet het schrijven van sidecars aan als je wilt dat Audiobookshelf de keuzes van ABM ziet. Zie [Sidecarbestanden](/nl/using/sidecars/).
