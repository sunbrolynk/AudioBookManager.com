---
title: Profiler
description: Kvalitetsprofiler, delay-profiler och release-profiler.
---

**Settings > Profiles** är en sida med tre sektioner. De svarar på tre olika frågor om en release.

## Kvalitetsprofiler

En kvalitetsprofil är en stege med format, sämst längst ner och bäst högst upp. Ett steg är ett format (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) i antingen enfils- eller flerfilsform. Steg kan grupperas så att de rankas lika, och ett steg kan stängas av.

| Inställning | Betydelse |
|---|---|
| Upgrades Allowed | Om den är av ersätter ABM inte en bok när den väl har en |
| Upgrade Until | Gränsen. När den här kvaliteten är nådd slutar ABM uppgradera |
| Grab off-ladder formats | Hämta ett format som inte finns på listan i stället för att hoppa över boken |
| Default profile | Profilen som används när inget mer specifikt gäller |

En profil är standard. En bok använder, i den här ordningen, sin egen profil, sin primära series profil, sin primära författares profil och sist standardprofilen. En profil som används kan inte tas bort.

En ny kopia ersätter det du har bara om profilen tillåter uppgraderingar, det nya steget finns på stegen och är aktiverat, boken ligger under sin gräns och det nya steget rankas strikt högre.

Om du kan Sonarr: det här är en kvalitetsprofil där kvaliteterna är ljudformat och fillayout i stället för upplösning. Custom formats finns inte. [Release-profiler](#release-profiler) täcker liknande mark.

## Delay-profiler

En delay-profil håller tillbaka en release innan den hämtas, för att ge en bättre release tid att dyka upp.

| Inställning | Betydelse |
|---|---|
| Enable Usenet / Enable Torrent | Tillåt hämtningar via det protokollet |
| Usenet Delay / Torrent Delay | Minuter att vänta innan en release via det protokollet hämtas |
| Preferred Protocol | Vilket som föredras när båda hittar en matchning |
| Bypass if Highest Quality | Hoppa över fördröjningen när en release redan når profilens gräns |
| Tags | Profilen gäller bara poster med en matchande tagg |

Delay-profiler visas som en tabell, som i Sonarr.

## Release-profiler

En release-profil lägger till regler ovanpå kvaliteten.

| Fält | Betydelse |
|---|---|
| Enable Profile | På eller av |
| Must Contain | Releasen måste innehålla minst en term (skiftlägesokänsligt) |
| Must Not Contain | En release med någon av de här termerna avvisas |
| Preferred | Termer som ger en release högre eller lägre poäng. Skriv `/regex/` för att använda ett reguljärt uttryck |
| Narration language | Begränsa till ett språk |
| Indexer | Gäller en indexerare, eller vilken som helst |
| Tags | Gäller bara poster med en matchande tagg |

Release-profiler visas som en tabell.

## Fallgropar

- Profiler raderar aldrig filer. De bestämmer vad som ska hämtas och vad som räknas som en uppgradering.
- Taggar på en delay- eller release-profil begränsar den till böcker som har någon av de taggarna.
