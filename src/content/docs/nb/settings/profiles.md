---
title: Profiler
description: Kvalitetsprofiler, forsinkelsesprofiler og release-profiler.
---

**Settings > Profiles** er én side med tre seksjoner. De svarer på tre ulike spørsmål om en utgivelse.

## Kvalitetsprofiler

En kvalitetsprofil er en stige med formater, det dårligste nederst og det beste øverst. Et trinn er et format (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) som enten én fil eller flere filer. Trinn kan grupperes så de rangeres likt, og et trinn kan slås av.

| Innstilling | Betydning |
|---|---|
| Upgrades Allowed | Er den av, erstatter ikke ABM en bok når den først har en |
| Upgrade Until | Cutoff. Når denne kvaliteten er nådd, slutter ABM å oppgradere |
| Grab off-ladder formats | Hent et format som ikke står på lista, i stedet for å hoppe over boka |
| Default profile | Profilen som brukes når ingenting mer spesifikt gjelder |

Én profil er standard. En bok bruker, i denne rekkefølgen, sin egen profil, profilen til hovedserien, profilen til hovedforfatteren, og så standarden. En profil som er i bruk, kan ikke slettes.

En ny kopi erstatter det du har bare hvis profilen tillater oppgraderinger, det nye trinnet står på stigen og er slått på, boka er under cutoff, og det nye trinnet rangeres strengt høyere.

Kan du Sonarr: dette er en kvalitetsprofil der kvalitetene er lydformater og filoppsett i stedet for oppløsning. Custom formats finnes ikke. [Release-profiler](#release-profiler) dekker noe av det samme.

Det finnes ingen trinn for bitrate eller størrelse: kvalitet betyr bare format og filoppsett. For en utgivelse henter ABM formatet fra indeksereren eller tittelen og gjetter oppsettet ut fra tittelen (en M4B uten del- eller spornummer regnes som én fil), og sjekker det på nytt når filene er importert. **Preferred Quality** i [Audible-innstillinger](/nb/settings/audible/) er noe annet: det er kvaliteten Audible-nedlastinger kommer i.

## Forsinkelsesprofiler

En forsinkelsesprofil holder igjen en utgivelse før den hentes, for å gi en bedre utgivelse tid til å dukke opp.

| Innstilling | Betydning |
|---|---|
| Enable Usenet / Enable Torrent | Tillat henting fra den protokollen |
| Usenet Delay / Torrent Delay | Minutter å vente før en utgivelse fra den protokollen hentes |
| Preferred Protocol | Hvilken som foretrekkes når begge finner et treff |
| Bypass if Highest Quality | Hopp over ventetiden når en utgivelse allerede når cutoff i profilen |
| Tags | Profilen gjelder bare elementer med en tagg som passer |

Forsinkelsesprofiler vises som en tabell, som i Sonarr.

## Release-profiler

En release-profil legger regler oppå kvaliteten.

| Felt | Betydning |
|---|---|
| Enable Profile | På eller av |
| Must Contain | Utgivelsen må inneholde minst ett av ordene (skiller ikke mellom store og små bokstaver) |
| Must Not Contain | En utgivelse med noen av disse ordene blir avvist |
| Preferred | Ord som gir en utgivelse høyere eller lavere poeng. Skriv `/regex/` for å bruke et regulært uttrykk |
| Narration language | Begrens til et språk |
| Indexer | Gjelder én indekserer, eller alle |
| Tags | Gjelder bare elementer med en tagg som passer |

Release-profiler vises som en tabell.

## Fallgruver

- Profiler sletter aldri filer. De avgjør hva som hentes, og hva som teller som en oppgradering.
- Tagger på en forsinkelses- eller release-profil begrenser den til bøker som har en av de taggene.
