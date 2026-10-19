---
title: Fichiers annexes
description: Les fichiers metadata.json, de couverture, OPF, description et narrateur qu'ABM écrit à côté d'un livre.
---

Un fichier annexe (sidecar), c'est un petit fichier à côté de l'audio. Audiobookshelf et d'autres lecteurs les lisent. ABM écrit ceux-ci :

| Fichier | Contenu | Interrupteur |
|---|---|---|
| `metadata.json` | Le fichier de métadonnées propre à Audiobookshelf, plus un bloc `abm` qui le marque comme étant celui d'ABM. Audiobookshelf le lit avant tout le reste | Aucun, toujours écrit |
| `cover.jpg` | La couverture du livre. Pas écrit quand le dossier a déjà un `cover.*` | cover.jpg |
| `.opf` | Les métadonnées au format OPF. Nommé d'après le premier fichier audio du livre (par exemple `Dune.opf`), ou `title.opf` quand le livre n'a pas d'audio | title.opf |
| `desc.txt` | La description, sans HTML. Pas écrit quand il n'y en a pas | desc.txt |
| `reader.txt` | Les narrateurs. Pas écrit quand il n'y en a pas | reader.txt |

Avec l'organisation des dossiers, ce sont les fichiers qu'Audiobookshelf lit pour les détails d'un livre, donc il voit le même livre qu'ABM.

## Quand ils sont écrits

`metadata.json` est écrit à chaque fois qu'un livre est ajouté, importé ou rafraîchi.

Les quatre autres ont chacun un interrupteur dans **Settings > Metadata > Files to Create**, tous activés par défaut. Ils ne sont écrits que si le déclencheur correspondant est activé lui aussi : **Create on Book Add** (désactivé), **Create on Import** (activé, ce qui couvre les téléchargements, Library Import et les téléchargements Audible) et **Create on Refresh** (désactivé). **Overwrite Existing** est désactivé, donc un fichier déjà présent reste tel quel. Rien n'est écrit tant que le dossier du livre n'existe pas.

**Write to Directories**, dans la fenêtre de modification, écrit aussi les quatre, pour un livre ou pour une sélection de séries et d'auteurs. Voir [Réglages des métadonnées](/fr/settings/metadata/).

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
