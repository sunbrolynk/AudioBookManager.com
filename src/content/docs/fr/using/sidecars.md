---
title: Fichiers annexes
description: Les fichiers de couverture, OPF, description, narrateur et cue qu'ABM écrit à côté d'un livre.
---

Un fichier annexe (sidecar), c'est un petit fichier à côté de l'audio. Audiobookshelf et d'autres lecteurs les lisent. ABM peut écrire ceux-ci :

| Fichier | Contenu |
|---|---|
| `cover.jpg` | La couverture du livre |
| `.opf` | Les métadonnées au format OPF, lisibles par Audiobookshelf. Nommé d'après le premier fichier audio du livre (par exemple `Dune.opf`), ou `title.opf` quand le livre n'a pas d'audio |
| `desc.txt` | La description |
| `reader.txt` | Le narrateur |
| `.cue` | Les chapitres venant de Libex (prévu pour la prochaine version) |

## Quand ils sont écrits

Dans **Settings > Metadata**, **Create on Book Add**, **Create on Import** et **Create on Refresh** décident du moment. Par défaut, seul l'import les écrit. **Overwrite Existing** est désactivé, donc un fichier déjà présent reste tel quel. Tu peux aussi les écrire depuis la fenêtre de modification, pour un livre ou pour une sélection de séries et d'auteurs. Voir [Réglages des métadonnées](/fr/settings/metadata/).

## La couverture est à part

Une couverture que tu as choisie toi-même est verrouillée. Voir [Le verrouillage de couverture](/fr/metadata/cover-lock/).

## À l'import

L'import fait aussi passer les fichiers non audio existants d'un livre, selon **Media Management > Importing**. Quand la source a un `.opf`, une description ou un fichier de narrateur, ABM en prend au plus un de chaque et les nomme `desc.txt` et `reader.txt`. Une destination qui existe déjà n'est pas touchée, et une nouvelle couverture n'écrase jamais un `cover.*` existant.

## Liens physiques

Un import par lien physique laisse l'original intact. Quand ABM écrit l'un de ces fichiers, il écrit un nouveau fichier au lieu de modifier l'existant, donc la source depuis laquelle tu as importé garde son contenu.

## Pièges à éviter

- Un `metadata.json` est géré par ABM quand il contient le bloc propre à ABM. Le `metadata.json` d'un autre outil suit l'interrupteur des fichiers d'infos du livre (Book info files).
- Dans un dossier partagé par plusieurs livres, seuls les fichiers nommés d'après l'audio de ce livre lui appartiennent.
- Supprimer un livre retire ses fichiers annexes quand ils sont nommés d'après les fichiers de ce livre.
