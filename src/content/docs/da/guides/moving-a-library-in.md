---
title: Flyt et bibliotek ind
description: Tag en eksisterende samling med ind i ABM på en sikker måde.
---

## Før du går i gang

1. Tag backup af samlingen. Biblioteksimport kopierer som standard, men regn med, at der sker fejl.
2. Sæt en rodmappe og en kvalitetsprofil op, og sørg for, at metadatakilden kan nås.
3. Bestem dig for kopiér, flyt eller hardlink. Kopiér er det sikreste. Hardlink sparer plads, hvis biblioteket ligger på samme filsystem som kilden. Se [Media Management](/da/settings/media-management/).

## Trinene

1. **Library > Library Import**, scan mappen.
2. Læs listen. Match viser en procent. Ret rækkerne **Needs attention** og **Unmatched** med **Find a match**, eller læg rækker sammen, der er én bog fordelt på flere mapper.
3. Tjek cover og ekstra filer pr. mappe, men kun hvis du vil tilsidesætte standarderne.
4. Vælg rækkerne, og tilføj dem. Det bliver ved to klik, hvis du accepterer standarderne.
5. Hold øje med opgaven. Oversigten siger, hvor mange filer der blev kopieret i stedet for hardlinket, og hvad der fejlede.

## Hvis ABM skal styre kildemappen

Tilføj den som rodmappe i stedet, og lad ABM scanne den. Så bliver filerne liggende, og bøgerne får deres status ud fra det, der ligger på disken.

## Faldgruber

- En bog, der allerede er i biblioteket, bliver vist som sådan. Afvis dubletten med svaret keep library i stedet for at importere den to gange.
- Afviser du en mappe uden lyd, fjernes kun det, rækken ejer, og det ryger i papirkurven, hvis den er slået til.
- En ASIN fundet i en beskrivelse er et hint, ikke et match, medmindre titlen også passer.
- Efter importen skal du opdatere for at hente aktuelle metadata, og slå skrivning af sidecars til, hvis Audiobookshelf skal kunne se ABM's valg. Se [Sidecar-filer](/da/using/sidecars/).
