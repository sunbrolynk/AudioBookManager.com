---
title: Réglages des conversions
description: Valeurs par défaut, options de codec, chapitres, métadonnées, corbeille et ffmpeg.
---

**Settings > Conversions** définit les valeurs par défaut des [Conversions](/fr/using/conversions/). Chaque tâche peut les remplacer.

## Général

| Réglage | Par défaut | Effet |
|---|---|---|
| Enable Conversions | activé | Désactivé, il coupe la conversion sur la page Conversions. **Auto-Reformat on Import** est un réglage à part |
| Conversion Folder | vide | L'espace de travail temporaire. Vide, c'est le dossier temporaire du système |
| Concurrent Conversions | 2 | De 1 à 4. Garde cette valeur multipliée par **Threads Per Job** (dans **Advanced FFmpeg**, en bas de cette page) inférieure ou égale à ton nombre de cœurs. La page t'avertit quand c'est plus |
| Process Priority | Normal | Low garde le reste du système réactif. High finit plus vite |

## Qualité audio par défaut

| Réglage | Par défaut |
|---|---|
| Default Output Format | M4B (aussi MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, ou Copy pour ne pas réencoder) |
| Default Sample Rate | Auto, qui reprend celui de la source. Ou 22050, 44100 ou 48000 Hz |
| Default Channels | Auto, qui reprend ceux de la source. Ou Mono ou Stereo |

## Options de codec

| Format | Encodeur | Options |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC par défaut) et AAC VBR, qualité de 1 à 5. Le débit s'applique quand le VBR est désactivé. HE-AAC et HE-AACv2 sont dans la liste mais encodent pour l'instant en AAC-LC |
| MP3 | LAME | Qualité VBR de 0 à 9 (4 par défaut) et Joint Stereo (activé). Le débit s'applique quand le VBR est désactivé |
| Opus | libopus | Débit variable (activé) et Application : Audio (par défaut), VoIP ou Low Delay |
| FLAC | FLAC | Niveau de compression de 0 à 12 (5 par défaut). Le débit est ignoré |

Un débit réglé sur **Copy** saute le réencodage et toutes les options de codec.

## Gestion des chapitres

| Réglage | Par défaut | Effet |
|---|---|---|
| Default Chapter Behavior | Auto | Les garde s'ils existent, les génère sinon. Autres choix : garder seulement, toujours générer, aucun |
| Chapter Naming Format | `Chapter {n}` | Nomme les chapitres qu'ABM doit inventer. `{n}` est le numéro et `{title}` le nom du fichier source. Les titres de chapitres venant des fichiers ou de Libex sont gardés |
| Silence Detection | désactivé | Expérimental. Sert uniquement quand tu découpes un livre qui n'a pas de chapitres : ABM le découpe aux silences. Désactivé, un tel découpage échoue |
| Minimum Chapter Length | 60 s | Le chapitre le plus court que la détection des silences peut créer |
| Chapter Image Handling | Keep in file | Ou les retirer, ou les extraire dans un dossier |

## Gestion des métadonnées

| Réglage | Par défaut |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | activé (JPEG seulement, pour Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Gestion des fichiers

| Réglage | Par défaut | Effet |
|---|---|---|
| Enable Recycle Bin | activé | Les originaux vont à la corbeille au lieu d'être supprimés |
| Recycle Bin Path | vide | Vide, c'est `/config/recycle/conversions` |
| Retention Period | 7 jours | Définit la date d'expiration affichée sur les éléments de la corbeille. Pour l'instant, rien ne les supprime à cette date |
| Auto-Empty on Low Disk Space | désactivé | Active le seuil juste en dessous |
| Auto-Empty Threshold | 10 | Après une conversion, si la corbeille contient plus que ce nombre de Go, les éléments les plus anciens sont supprimés. La page l'affiche comme un pourcentage, mais il est lu en Go |
| Delete Original | désactivé | La valeur par défaut de chaque tâche, modifiable |
| Update Library Paths | activé | Les fiches des livres suivent les fichiers convertis |
| Auto-Reformat on Import | désactivé | Convertit les livres fraîchement importés qui arrivent dans un autre format, avec les valeurs par défaut ci-dessus |
| Backup Original Metadata | désactivé | Avant la conversion, enregistre une trace des fichiers d'origine (noms, formats, tailles) dans `.metadata_backup/` à côté d'eux. Ça n'enregistre pas les tags audio |

## FFmpeg avancé

FFmpeg Path (vide, il le trouve dans le PATH), Threads Per Job (0 choisit automatiquement le nombre de CPU moins 2), Custom FFmpeg Arguments (ajoutés à chaque commande ; des arguments incorrects font échouer les conversions), Logging Level (error par défaut) et Keep FFmpeg Logs (désactivé).
