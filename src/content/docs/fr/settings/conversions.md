---
title: Réglages des conversions
description: Valeurs par défaut, options de codec, chapitres, métadonnées, corbeille et ffmpeg.
---

**Settings > Conversions** définit les valeurs par défaut des [Conversions](/fr/using/conversions/). Chaque tâche peut les remplacer.

## Général

| Réglage | Par défaut | Effet |
|---|---|---|
| Enable Conversions | activé | Désactivé, créer, mettre en file en masse ou relancer une conversion est refusé avec HTTP 409, un job déjà en file échoue avec un message qui le dit, et **Auto-Reformat on Import** ne met rien en file |
| Conversion Folder | vide | L'espace de travail temporaire. Vide, c'est le dossier temporaire du système |
| Concurrent Conversions | 2 | 1 à 4. Garde cette valeur multipliée par **Threads Per Job** au plus égale à ton nombre de cœurs. La page prévient quand c'est dépassé |
| Threads Per Job | Auto | Threads FFmpeg par job, en vue avancée. Auto laisse deux cœurs à ABM et répartit le reste entre les jobs qui tournent en même temps, donc 8 cœurs et 2 jobs simultanés donnent 3 threads chacun. Ou choisis un nombre fixe |
| Process Priority | Normal | Low garde le reste du système réactif. High finit plus vite |

## Qualité audio par défaut

| Réglage | Par défaut |
|---|---|
| Default Output Format | M4B (aussi MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, ou Copy pour ne pas réencoder) |
| Default Sample Rate | Auto, qui ne passe aucune fréquence et laisse FFmpeg décider. Ou 22050, 44100 ou 48000 Hz, qui rééchantillonne. Opus n'accepte que certaines fréquences, donc 22050 devient 24000 et 44100 devient 48000 (le journal le dit) |
| Default Channels | Auto, qui garde la disposition de la source. Mono mixe en un seul canal pour des fichiers plus petits. Stereo en force deux |

Les deux listes de fréquence et de canaux n'acceptent que ce que la page propose. Une valeur enregistrée invalide se charge comme Auto.

## Options de codec

| Format | Encodeur | Options |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC par défaut) et AAC VBR, qualité 1 à 5. Le débit s'applique quand VBR est désactivé. AAC-LC est le seul profil, car l'encodeur ne sait pas faire du HE-AAC. Un profil HE enregistré se charge comme AAC-LC |
| MP3 | LAME | Qualité VBR de 0 à 9 (4 par défaut) et Joint Stereo (activé). Le débit s'applique quand le VBR est désactivé |
| Opus | libopus | Débit variable (activé) et Application : Audio (par défaut), VoIP ou Low Delay |
| FLAC | FLAC | Niveau de compression de 0 à 12 (5 par défaut). Le débit est ignoré |

Un débit réglé sur **Copy** saute le réencodage et toutes les options de codec.

## Gestion des chapitres

| Réglage | Par défaut | Effet |
|---|---|---|
| Default Chapter Behavior | Auto | Les garde s'ils existent, les génère sinon. Autres choix : garder seulement, toujours générer, aucun |
| Chapter Naming Format | `Chapter {n}` | Nomme les chapitres qu'ABM doit inventer. `{n}` est le numéro et `{title}` le nom du fichier source. Les titres de chapitres venant des fichiers ou de Libex sont gardés |
| Silence Detection | désactivé | Pour un fichier sans chapitres, ABM crée des chapitres aux pauses les plus longues de l'audio. Utilisé par Split Chapters et par Ensure Chapters sur un seul fichier quand Libex n'a pas de chapitres. Désactivé, découper un tel fichier échoue |
| Target Chapter Length | 600 s | Affiché quand Silence Detection est activé, 60 s ou plus. Chaque chapitre se termine à la pause la plus longue située à moins de la moitié de cette durée de chaque côté, ou à cette durée s'il n'y a pas de pause. Une courte fin est rattachée au dernier chapitre, et les chapitres couvrent tout le fichier |
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
| Retention Period | 7 jours | Les éléments plus anciens sont supprimés par la tâche de nettoyage de la corbeille. 0 les garde pour toujours |
| Auto-Empty When Bin Is Large | désactivé | Active le seuil ci-dessous |
| Auto-Empty Threshold | 10 GB | Après une conversion, si la corbeille contient plus que ça, les éléments les plus anciens sont supprimés |
| Delete Original | désactivé | La valeur par défaut de chaque tâche, modifiable |
| Update Library Paths | activé | Les fiches des livres suivent les fichiers convertis |
| Auto-Reformat on Import | désactivé | Convertit les livres fraîchement importés qui arrivent dans un autre format, avec les valeurs par défaut ci-dessus |
| Backup Original Metadata | désactivé | Avant de convertir, écrit un fichier JSON dans un dossier `.metadata_backup` à l'intérieur du dossier du livre. Il liste le nom, le format et la taille de chaque fichier d'origine, ainsi que les tags et chapitres qu'il contient |

## FFmpeg avancé

FFmpeg Path (vide, il le trouve dans le PATH), Custom FFmpeg Arguments (ajoutés à chaque commande ; des arguments incorrects font échouer les conversions), Logging Level (error par défaut) et Keep FFmpeg Logs (désactivé).
