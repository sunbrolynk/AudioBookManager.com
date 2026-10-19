---
title: Konverteringer
description: Konvertér, flet, del op og tilføj kapitler til lydfiler, med en kø, du kan sætte på pause.
---

**Library > Conversions** kører ffmpeg-jobs på dit bibliotek. Fire slags:

| Job | Hvad det gør |
|---|---|
| Convert Format | Omkoder til M4B, MP3, M4A, FLAC eller Opus |
| Merge Parts | Samler flere filer til én, med kapitler |
| Split Chapters | Deler én fil op i en fil pr. kapitel |
| Ensure Chapters | Tilføjer eller retter kapitelmærker uden omkodning |

Standarderne for hvert job kommer fra [Konverteringsindstillinger](/da/settings/conversions/). Hvert job kan tilsidesætte dem.

## Køen

Jobs venter i en kø og kører op til **Concurrent Conversions** ad gangen (2 som standard). Færdige jobs flytter til History, som du kan rydde.

Output bliver skrevet til en privat arbejdsmappe og først lagt i biblioteket, når det er færdigt. Hver fil kommer ind under et midlertidigt navn og bliver omdøbt på plads, så en halvt skrevet bog aldrig dukker op. Et tjek af ledig plads kører, før et job starter, og igen før placeringen. Kildefiler bliver aldrig overskrevet.

At konvertere en fil til det format, den allerede er i, bliver afvist, fordi det ville overskrive originalen.

## Efter en konvertering

ABM opdaterer bogens filposter, størrelse og kvalitet, så en konverteret bog viser sin nye kvalitet. Er **Delete Original** slået til, ryger de gamle filer i konverteringens papirkurv, når den er slået til.

Fejler placeringen af resultatet (fx fordi biblioteksmappen er fuld), fejler jobbet, og det færdige output bliver gemt i dets arbejdsmappe. Fejlen nævner mappen. **Retry** starter jobbet forfra og smider det gemte output væk, så den spørger først. **Clear history** beholder jobs, der stadig har output, som ikke er placeret.

## Pause og genoptag

:::caution[Kommer i næste udgivelse]
Pause er ikke med i en udgivet version endnu.
:::

To slags pause, og ingen af dem annullerer noget:

- **Pause** på et kørende job sætter dets ffmpeg-processer i bero, hvor de er. Genoptag fortsætter fra samme sted.
- **Pause queue** (øverst i køen, eller i topbjælken på en telefon) forhindrer nye jobs i at starte og sætter alle kørende jobs i bero.

Et job, du selv har sat på pause, bliver på pause, når køen genoptages, og også efter en genstart. Et job, der kører, når ABM stopper, kommer tilbage som sat på pause og starter ikke af sig selv. Genoptag fortsætter fra den sidst færdige del for fletninger, opdelinger og konverteringer med flere filer. En konvertering af én fil starter den fil forfra.

Grænsen på 6 timers kørsel tæller kun tid, der ikke er på pause. Kan den gemte køtilstand ikke læses ved opstart, starter køen på pause og siger det. Tryk på Resume queue for at skrive den igen.

Kender du Sonarr: der er intet lignende i arr-apps'ene. Tænk på det som en lille encoder-kø, der tilfældigvis bor inde i manageren.

## Faldgruber

- Concurrent Conversions gange Threads Per Job bør ikke overstige antallet af kerner i din CPU.
- En konverteret fil har en ny størrelse og ændringstid, så Audiobookshelf scanner den igen.
- Konverterer du en fil, der er hardlinket til en torrent, som seeder, bliver der lavet en ny fil. Den seedende kopi beholder de gamle bytes.
