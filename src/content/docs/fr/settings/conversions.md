---
title: Réglages des conversions
description: Valeurs par défaut, options de codec, chapitres, métadonnées, corbeille et ffmpeg.
---

**Settings > Conversions** définit les valeurs par défaut des [Conversions](/fr/using/conversions/). Chaque tâche peut les remplacer.

## Général

| Réglage | Par défaut | Effet |
|---|---|---|
| Enable Conversions | activé | L'interrupteur principal |
| Conversion Folder | vide | L'espace de travail temporaire. Vide, c'est le dossier temporaire du système |
| Concurrent Conversions | 2 | De 1 à 4 dans l'interface. Garde le nombre de conversions simultanées multiplié par les threads sous ton nombre de cœurs |
| Process Priority | Normal | Low garde le reste du système réactif. High finit plus vite |

## Qualité audio par défaut

| Réglage | Par défaut |
|---|---|
| Default Output Format | M4B (aussi MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, ou Copy pour ne pas réencoder) |
| Default Sample Rate | Auto, qui reprend celui de la source |
| Default Channels | Auto, qui reprend ceux de la source |

## Options de codec

AAC Profile (AAC-LC par défaut, HE-AAC, HE-AACv2) et AAC VBR ; qualité VBR et joint stereo pour le MP3 ; niveau de compression FLAC (5 par défaut) ; débit variable Opus (activé) et type d'application (Audio par défaut ; VoIP et Low Delay existent aussi).

## Gestion des chapitres

| Réglage | Par défaut | Effet |
|---|---|---|
| Default Chapter Behavior | Auto | Les garde s'ils existent, les génère sinon. Autres choix : garder seulement, toujours générer, aucun |
| Chapter Naming Format | `Chapter {n}` | Le modèle des noms générés |
| Silence Detection | désactivé | Expérimental. Essaie de trouver les chapitres à partir des silences |
| Minimum Chapter Length | 60 s | Pour les chapitres détectés |
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
| Retention Period | 7 jours | 0 désactive le nettoyage automatique |
| Auto-Empty on Low Disk Space | désactivé | Vide la corbeille sous le seuil |
| Auto-Empty Threshold | 10 (%) | Le niveau d'espace libre |
| Delete Original | désactivé | La valeur par défaut de chaque tâche, modifiable |
| Update Library Paths | activé | Les fiches des livres suivent les fichiers convertis |
| Auto-Reformat on Import | désactivé | Convertit les livres fraîchement importés qui arrivent dans un autre format, avec les valeurs par défaut ci-dessus |
| Backup Original Metadata | désactivé | Enregistre d'abord les tags d'origine dans un fichier annexe `.json` |

## FFmpeg avancé

FFmpeg Path (vide, il le trouve dans le PATH), Threads Per Job (0 choisit automatiquement le nombre de CPU moins 2), Custom FFmpeg Arguments (ajoutés à chaque commande ; des arguments incorrects font échouer les conversions), Logging Level (error par défaut) et Keep FFmpeg Logs (désactivé).
