---
title: Profiler
description: Kvalitetsprofiler, forsinkelsesprofiler og udgivelsesprofiler.
---

**Settings > Profiles** er én side med tre sektioner. De svarer på tre forskellige spørgsmål om en udgivelse.

## Kvalitetsprofiler (Quality profiles)

En kvalitetsprofil er en stige af formater, det dårligste nederst og det bedste øverst. Et trin er et format (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) i enten én fil eller flere filer. Trin kan grupperes, så de rangerer lige, og et trin kan slås fra.

| Indstilling | Betydning |
|---|---|
| Upgrades Allowed | Er den slået fra, erstatter ABM ikke en bog, når den først har en |
| Upgrade Until | Cutoff. Når den kvalitet er nået, holder ABM op med at opgradere |
| Grab off-ladder formats | Hent et format, der ikke er på listen, i stedet for at springe bogen over |
| Default profile | Den profil, der bruges, når intet mere specifikt gælder |

Én profil er standard. En bog bruger, i denne rækkefølge, sin egen profil, sin primære series profil, sin primære forfatters profil og til sidst standarden. En profil, der er i brug, kan ikke slettes.

En ny kopi erstatter kun det, du har, hvis profilen tillader opgraderinger, det nye trin er på stigen og slået til, bogen er under sin cutoff, og det nye trin rangerer strengt højere.

Kender du Sonarr: det er en kvalitetsprofil, hvor kvaliteterne er lydformater og fillayout i stedet for opløsning. Custom formats findes ikke. [Udgivelsesprofiler](#udgivelsesprofiler-release-profiles) dækker noget af det samme.

## Forsinkelsesprofiler (Delay profiles)

En forsinkelsesprofil holder en udgivelse tilbage, før den bliver hentet, for at give en bedre udgivelse tid til at dukke op.

| Indstilling | Betydning |
|---|---|
| Enable Usenet / Enable Torrent | Tillad hentninger fra den protokol |
| Usenet Delay / Torrent Delay | Minutter, der ventes, før en udgivelse fra den protokol bliver hentet |
| Preferred Protocol | Hvilken der foretrækkes, når begge finder et match |
| Bypass if Highest Quality | Spring forsinkelsen over, når en udgivelse allerede når profilens cutoff |
| Tags | Profilen gælder kun for elementer med et matchende tag |

Forsinkelsesprofiler vises som en tabel, ligesom i Sonarr.

## Udgivelsesprofiler (Release profiles)

En udgivelsesprofil lægger regler oven på kvaliteten.

| Felt | Betydning |
|---|---|
| Enable Profile | Til eller fra |
| Must Contain | Udgivelsen skal indeholde mindst ét af ordene (uden forskel på store og små bogstaver) |
| Must Not Contain | En udgivelse med et af disse ord bliver afvist |
| Preferred | Ord, der giver en udgivelse point op eller ned. Skriv `/regex/` for at bruge et regulært udtryk |
| Narration language | Begræns til et sprog |
| Indexer | Gælder for én indekser eller alle |
| Tags | Gælder kun for elementer med et matchende tag |

Udgivelsesprofiler vises som en tabel.

## Faldgruber

- Profiler sletter aldrig filer. De afgør, hvad der skal hentes, og hvad der tæller som en opgradering.
- Tags på en forsinkelses- eller udgivelsesprofil begrænser den til bøger, der har et af de tags.
