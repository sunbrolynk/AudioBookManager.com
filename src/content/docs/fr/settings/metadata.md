---
title: Métadonnées
description: Quels fichiers annexes et quels tags audio ABM écrit, et quand.
---

**Settings > Metadata** décide de ce qu'ABM écrit dans le dossier d'un livre et dans ses fichiers. La façon dont ces fichiers sont utilisés est expliquée dans [Fichiers annexes](/fr/using/sidecars/).

## Source

**Metadata Source** vaut Built-in (par défaut), Hosted (libexdb.com) ou Self-hosted, qui demande une **Server URL**. **Test** envoie une vraie requête à la source choisie sans enregistrer, **Status** dit si elle est prête, et **Connection** montre la route par laquelle sortent les requêtes, avec un lien vers **Settings > Network**. Un changement vaut tout de suite pour toutes les requêtes. Voir [Choisir une source de métadonnées](/fr/metadata/choosing-a-source/).

## Création des fichiers de métadonnées

| Réglage | Par défaut | Effet |
|---|---|---|
| Create on Book Add | désactivé | Écrit les fichiers quand un livre est ajouté comme wanted |
| Create on Import | activé | Écrit les fichiers quand un livre audio est importé |
| Create on Refresh | désactivé | Crée ou met à jour les fichiers quand les métadonnées sont rafraîchies |
| Overwrite Existing | désactivé | Remplace les fichiers déjà présents dans le dossier |

Fichiers à créer : `cover.jpg` (activé), `title.opf` (activé, compatible Audiobookshelf), `desc.txt` (activé) et `reader.txt` (activé).

## Écriture des tags dans les fichiers audio

Écrit les tags audio dans les fichiers audio eux-mêmes.

| Réglage | Par défaut |
|---|---|
| Write Audio Tags | désactivé |
| Write Audio Tags on Import | activé, une fois l'écriture des tags activée |
| Write Audio Tags on Refresh | désactivé |

Champs de tag, tous activés par défaut : Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) et Cover Art.

## Stockage local (Local Storage)

Avec la source Built-in, les sections **Local Storage** et **Storage Backups** s'affichent. Ce n'est qu'un aperçu, pas encore branché. Voir [Tes métadonnées, ton contrôle](/fr/metadata/control/).

## Pièges à éviter

- L'écriture des tags modifie les fichiers audio. Audiobookshelf les verra comme modifiés.
- Si les métadonnées ou une couverture ne peuvent pas être récupérées pendant l'écriture des tags, l'appel renvoie des avertissements au lieu d'échouer.
- Quand une jaquette n'a pas pu être intégrée parce que la connexion l'a refusée, la page du livre et la boîte de dialogue de modification affichent un avertissement au lieu d'un simple succès.
