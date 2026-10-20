---
title: Audible-innstillinger
description: Kontoer, synkroniseringsplan, nedlastinger og diagnostikk.
---

**Settings > Audible** er der du kobler til kontoer og finjusterer synkronisering og nedlasting. Hvordan funksjonen virker, står på [Audible](/nb/audible/)-siden.

## Kontoer

For å koble til en konto trenger du en **Marketplace**, et **Display Name** og **Redirect URL** som Amazon sender tilbake etter at du har logget inn. Hver konto har sitt eget bibliotek. Hvis en konto må logge inn på nytt, logger du inn på den samme kontoen i stedet for å slette den. Sletting fjerner biblioteket dens og fjerner enheten fra Audible.

## Tidsplan

| Innstilling | Virkning |
|---|---|
| Auto Sync | Synkroniser biblioteket etter en tidsplan |
| Sync on Account Add | Synkroniser med en gang en konto er koblet til |
| Frequency | Daglig, ukentlig eller månedlig. Ukentlig legger til Day of Week. Månedlig legger til Day of Month (1-28). |
| Time | Time og minutt |
| Use CRON Expression | Et eget cron-uttrykk erstatter valgene over |

## Nedlastingsinnstillinger (Download Settings)

| Innstilling | Standard | Virkning |
|---|---|---|
| Mirror Audible library to ABM | på | Hver synkronisering legger til Audible-bøkene som ikke er i ABM ennå og laster ned de uten filer, opptil 25 per synkronisering. Når du slår det på, ser du hvor mange bøker neste synkronisering legger til og laster ned. Se [Speil Audible-biblioteket til ABM](/nb/audible/#speil-audible-biblioteket-til-abm-mirror-audible-library-to-abm) |
| Concurrent Downloads | 2 | 1 til 5. Høyere går fortere og kan treffe grensene Audible har for antall forespørsler. |
| Preferred Quality | High | High eller Normal |
| Delete Encrypted Files | på | Fjern den krypterte AAXC-fila etter at den er dekryptert til M4B |
| Temp Download Path | tom | Tom bruker systemets midlertidige mappe |

Nedlastinger som feiler, prøves på nytt av seg selv noen ganger, med en ventetid som øker, og et brudd som varer lenger enn det, legger oppgaven i kø igjen i opptil seks timer. Avslått lisens, en bok du ikke eier eller en feil ved dekryptering feiler én gang.

## Tilkoblingsdiagnostikk (Connection Diagnostics)

Velg en konto og kjør diagnostikken. Den tester FFmpeg, påloggingsinfo, API-tilkoblingen og om nedlasting virker, og viser den utgående IP-en din slik Audible ser den.
