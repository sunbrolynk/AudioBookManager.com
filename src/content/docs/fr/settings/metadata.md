---
title: Métadonnées
description: Quels fichiers annexes et quels tags audio ABM écrit, et quand.
---

**Settings > Metadata** décide de ce qu'ABM écrit dans le dossier d'un livre et dans ses fichiers. La façon dont ces fichiers sont utilisés est expliquée dans [Fichiers annexes](/fr/using/sidecars/).

## Création des fichiers de métadonnées

| Réglage | Par défaut | Effet |
|---|---|---|
| Create on Book Add | désactivé | Écrit les fichiers quand un livre est ajouté comme wanted |
| Create on Import | activé | Écrit les fichiers quand un livre audio est importé |
| Create on Refresh | désactivé | Crée ou met à jour les fichiers quand les métadonnées sont rafraîchies |
| Overwrite Existing | désactivé | Remplace les fichiers déjà présents dans le dossier |

Fichiers à créer : `cover.jpg` (activé), `title.opf` (activé, compatible Audiobookshelf), `desc.txt` (activé) et `reader.txt` (activé).

## Écriture des tags dans les fichiers audio

Écrit les tags audio dans les fichiers audio eux-mêmes. L'écriture des tags est activée par défaut : un import écrit donc les tags, sauf si tu la désactives.

| Réglage | Par défaut |
|---|---|
| Write Audio Tags | activé |
| Write Audio Tags on Import | activé, une fois l'écriture des tags activée |
| Write Audio Tags on Refresh | désactivé |

Champs de tag, tous activés par défaut : Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) et Cover Art.

## Prévu pour une version ultérieure

Un choix de source de métadonnées et une copie locale de la bibliothèque de métadonnées sont prévus pour une version ultérieure. Voir [Tes métadonnées, ton contrôle](/fr/metadata/control/).

## Pièges à éviter

- L'écriture des tags modifie les fichiers audio. Audiobookshelf les verra comme modifiés.
- Si les métadonnées ou une couverture ne peuvent pas être récupérées pendant l'écriture des tags, l'appel renvoie des avertissements au lieu d'échouer.
