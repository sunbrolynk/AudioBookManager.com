---
title: Konverteringer
description: Konverter, slå sammen, del opp og legg til kapitler i lydfiler, med en kø du kan sette på pause.
---

**Library > Conversions** kjører ffmpeg-jobber på biblioteket ditt. Fire typer:

| Jobb | Hva den gjør |
|---|---|
| Convert Format | Koder om til M4B, MP3, M4A, FLAC eller Opus |
| Merge Parts | Slår sammen flere filer til én, med kapitler |
| Split Chapters | Deler én fil opp i én fil per kapittel |
| Ensure Chapters | Legger til eller fikser kapittelmarkører uten omkoding |

Standardene for hver jobb kommer fra [Konverteringsinnstillinger](/nb/settings/conversions/). Hver jobb kan overstyre dem.

## Køen

Jobbene venter i en kø og kjører opptil **Concurrent Conversions** om gangen (2 som standard). Ferdige jobber flyttes til History, som du kan tømme.

Resultatet skrives til en privat arbeidsmappe og legges i biblioteket først når det er ferdig. Hver fil kommer inn under et midlertidig navn og får så det riktige navnet, så en halvskrevet bok aldri dukker opp. En sjekk av ledig plass kjører før en jobb starter, og igjen før resultatet legges på plass. Kildefilene blir aldri overskrevet.

Å konvertere en fil til formatet den allerede har, blir avvist, fordi det ville overskrevet originalen.

## Etter en konvertering

ABM oppdaterer filoppføringene, størrelsen og kvaliteten til boka, så en konvertert bok viser den nye kvaliteten. Er **Delete Original** på, havner de gamle filene i papirkurven for konverteringer når den er slått på.

Hvis det feiler å legge resultatet på plass (bibliotekmappen er full, for eksempel), feiler jobben, og det ferdige resultatet blir liggende i arbeidsmappen. Feilmeldingen oppgir mappen. **Retry** starter jobben på nytt og kaster det lagrede resultatet, så den spør først. **Clear history** beholder jobber som fortsatt har resultat som ikke er lagt på plass.

## Pause og fortsett

To typer pause, og ingen av dem avbryter noe:

- **Pause** på én jobb som kjører, fryser ffmpeg-prosessene der de er. Resume fortsetter fra samme sted.
- **Pause queue** (øverst i køen, eller i topplinja på telefon) hindrer nye jobber i å starte og fryser alle jobber som kjører.

En jobb du har satt på pause selv, blir stående på pause når køen fortsetter, og også etter en omstart. En jobb som kjører når ABM stopper, kommer tilbake på pause og starter ikke av seg selv. Resume fortsetter fra den siste ferdige delen for sammenslåinger, oppdelinger og konverteringer med flere filer. En konvertering av én fil starter den fila på nytt.

Grensen på 6 timer per kjøring teller bare tid uten pause. Hvis den lagrede køtilstanden ikke kan leses ved oppstart, starter køen på pause og sier fra. Trykk Resume queue for å skrive den på nytt.

Kan du Sonarr: det finnes ingenting som dette i arr-appene. Tenk på det som en liten kodingskø som tilfeldigvis bor inne i manageren.

## Fallgruver

- Concurrent Conversions ganger Threads Per Job bør ikke være mer enn antall CPU-kjerner. Med Auto deler ABM de ledige kjernene mellom jobbene som kjører samtidig for deg.
- En konvertert fil har ny størrelse og nytt endringstidspunkt, så Audiobookshelf skanner den på nytt.
- Å konvertere en fil som er hardlenket til en torrent som seedes, lager en ny fil. Kopien som seedes, beholder de gamle bytene.
