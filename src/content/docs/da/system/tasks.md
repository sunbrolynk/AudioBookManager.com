---
title: Opgaver
description: Arbejde i baggrunden, tidsplaner og logs.
---

**System > Tasks** viser alt, hvad ABM laver i baggrunden: biblioteksscanninger, opdateringer, importer, søgninger, downloads, synkroniseringer, backups. Hver række viser sin tilstand (venter, kører, fuldført, fejlet), fremskridt, resultat og en log-knap.

- En opgave, der blev fuldført med poster på sin fejlliste, står som **Partial**. Fold den ud for at se hvert element, der blev sprunget over, og årsagen.
- En opgave med et nyt forsøg på vej står som ventende, indtil forsøgene er brugt op. Forsøgsnummeret bliver vist.
- **Clear completed tasks older than 24 hours** rydder op i listen. Gamle opgaver bliver også ryddet automatisk (30 dage som standard).
- Planlagte kørsler, der ikke lavede noget, vises her, men ikke i [aktivitetsloggen](/da/system/activity-log/).

## Faldgruber

- Konverteringer er en separat kø. Se [Konverteringer](/da/using/conversions/).
- Download-gennemløbene (nyt forsøg på ventende hentning og tjek af færdige downloads) bliver kun sat i kø, mens mindst én downloadklient er aktiveret, så siden ikke fyldes med tomme kørsler.
