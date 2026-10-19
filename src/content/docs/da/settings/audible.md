---
title: Audible-indstillinger
description: Konti, tidsplan for synkronisering, downloads og diagnostik.
---

**Settings > Audible** er der, hvor konti bliver forbundet, og hvor synkronisering og downloads bliver finjusteret. Hvordan funktionen virker, står på siden [Audible](/da/audible/).

## Konti

For at forbinde en konto skal du bruge en **Marketplace**, et **Display Name** og den **Redirect URL**, som Amazon sender tilbage, når du har logget ind. Hver konto har sit eget bibliotek. Skal en konto logges ind igen, så log ind på den samme konto i stedet for at slette den. Sletning dropper dens bibliotek og fjerner dens enhed fra Audible.

## Tidsplan

| Indstilling | Virkning |
|---|---|
| Auto Sync | Synkronisér biblioteket efter en tidsplan |
| Sync on Account Add | Synkronisér, så snart en konto er forbundet |
| Frequency | Dagligt, ugentligt eller månedligt. Ugentligt tilføjer Day of Week. Månedligt tilføjer Day of Month (1-28). |
| Time | Time og minut |
| Use CRON Expression | Et brugerdefineret cron-udtryk erstatter mulighederne ovenfor |

## Downloadindstillinger (Download Settings)

| Indstilling | Standard | Virkning |
|---|---|---|
| Auto Add to Library | til | Hentede bøger bliver tilføjet til ABM's bibliotek |
| Concurrent Downloads | 2 | 1 til 5. Højere er hurtigere og kan ramme Audibles begrænsning af kald. |
| Preferred Quality | High Quality | High, Normal eller Low |
| Delete Encrypted Files | til | Fjern den krypterede AAXC-fil, når den er dekrypteret til M4B |
| Temp Download Path | tom | Tom bruger systemets midlertidige mappe |

Fejlede downloads bliver selv prøvet igen et par gange med en ventetid, der bliver længere, og et nedbrud, der varer længere end det, sætter opgaven i kø igen i op til seks timer. Et afslag på licens, en bog, du ikke ejer, eller en fejl ved dekryptering fejler kun én gang.

## Forbindelsesdiagnostik (Connection Diagnostics)

Vælg en konto, og kør diagnostik. Den tester FFmpeg, loginoplysninger, API-forbindelsen og muligheden for at hente og viser din udgående IP, som Audible ser den.
