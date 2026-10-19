---
title: Gestion des médias
description: Dossiers racine, import, fichiers en plus, corbeille, scans, mises à niveau et permissions.
---

**Settings > Media Management** contrôle l'endroit où vivent les livres et la façon dont les fichiers arrivent. Les réglages marqués comme avancés apparaissent avec **Show Advanced**.

## Dossiers racine (Root Folders)

Un dossier racine est un répertoire dans lequel ABM gère des livres. Ajoutes-en un avec **Add Root Folder**, qui ouvre un navigateur de dossiers avec un chemin que tu peux taper. ABM peut aussi lister les dossiers non associés sous une racine et les importer. L'espace libre d'une racine et la prise en charge des liens physiques sont vérifiés à l'ajout. Retirer une racine te demande quoi faire : **Remove from ABM only** (par défaut) oublie les livres qu'elle contient et laisse les fichiers, et **Delete the books and their files** supprime définitivement tout ce qu'il y a sous le chemin, sans passer par la corbeille. Pour une racine qui contient des livres, tu dois taper du texte pour confirmer.

Le dossier racine par défaut est celui où vont les nouveaux livres, et c'est lui qui décide si le lien physique est proposé pour Library Import.

## Dossiers (Folders)

| Réglage | Par défaut | Effet |
|---|---|---|
| Create Empty Book Folders | désactivé | Crée les dossiers de livres manquants à l'ajout, au changement de dossier racine et pendant un scan du disque. Ignoré tant que **Delete empty folders** est activé, pour ne pas créer un dossier juste pour qu'il soit supprimé. |
| Delete empty folders | désactivé | Supprime les dossiers de livres vides pendant un scan du disque et quand des fichiers de livres sont supprimés |

## Import (Importing)

| Réglage | Par défaut | Effet |
|---|---|---|
| Skip Free Space Check | désactivé | Pour quand ABM n'arrive pas à détecter l'espace libre d'une racine |
| Minimum Free Space | 100 (Mo) | Un import qui laisserait moins que ça est refusé |
| Use Hardlinks instead of Copy | activé | Pour les téléchargements terminés : lien physique au lieu de copie, pour que le partage ne double pas l'espace utilisé. Il faut que ce soit le même volume. |
| Library Import | Copy | La valeur par défaut d'[Import de bibliothèque](/fr/library-import/) : copier, lien physique ou déplacer. Le lien physique est grisé tant que la racine par défaut n'a pas été vérifiée et ne le prend pas en charge. |
| Import Extra Files | activé | L'interrupteur principal pour emporter les fichiers non audio. S'applique à Library Import, à Manual Import et aux téléchargements terminés |
| Extra File Extensions (avancé) | vide | D'autres types de fichiers à emporter, gardés sous leur propre nom, par exemple `srt, lrc`. Avec ou sans le point, séparés par des virgules ou des espaces. Les types bloqués, comme les exécutables et les téléchargements partiels, ne peuvent pas être enregistrés. Désactivé tant que **Import Extra Files** est désactivé |
| Preferred Cover (avancé) | Matched | La couverture de l'édition correspondante, ou la meilleure image du dossier, quand les deux existent |

**Import Extra Files** emporte les autres fichiers d'un livre avec son audio. Cinq interrupteurs choisissent quels types viennent avec, et un fichier qui correspond à **Extra File Extensions** vient même quand son type est désactivé :

| Interrupteur | Par défaut | Concerne |
|---|---|---|
| Cover art | activé | La couverture, plus les scans de la quatrième de couverture et du livret |
| Book info files | activé | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | désactivé | Les PDF fournis avec un livre |
| Chapters, transcripts and playlists | activé | .cue, listes de chapitres, sous-titres, paroles, playlists. Les noms de fichiers qu'ils contiennent sont réécrits pour pointer vers l'audio renommé. |
| Audible originals and ebooks | désactivé | .aax/.aaxc, vouchers, epub et formats du même genre |

Les téléchargements partiels et les exécutables ne sont jamais importés. Le `metadata.json` propre à ABM est toujours géré par ABM.

Le lien physique de Library Import, ce n'est pas la même chose que **Use Hardlinks instead of Copy**. Celui-là concerne les téléchargements. La valeur par défaut de Library Import, c'est seulement ce que la fenêtre Add to Library présélectionne.

## Gestion des fichiers (File Management)

| Réglage | Par défaut | Effet |
|---|---|---|
| Unmonitor Deleted Books | désactivé | Un livre supprimé du disque n'est plus surveillé |
| Change File Date | None | Change les dates des fichiers à l'import et au rescan |
| Enable Recycling Bin | activé | Les fichiers de livres supprimés vont dans une corbeille au lieu d'être effacés |
| Recycling Bin | vide | L'emplacement de la corbeille. Vide, c'est l'emplacement par défaut d'ABM (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (jours) | 0 désactive le nettoyage automatique |
| Library Scan Interval | 0 (désactivé) | Le nombre d'heures entre deux scans automatiques |
| Watch for Changes | désactivé | Lance un scan quand des fichiers sont ajoutés, retirés ou modifiés |
| Cover Cache Workers | 4 | Combien de couvertures sont téléchargées à la fois lors de la mise en cache des images, de 1 à 16 |

## Mises à niveau de qualité (Quality Upgrades)

| Réglage | Par défaut | Effet |
|---|---|---|
| Automatic Upgrade Search | activé | Cherche régulièrement de meilleures sorties pour les livres téléchargés encore sous leur seuil. Une copie ne remplace la tienne que si c'est une vraie mise à niveau. |
| Upgrade Search Interval | 24 (heures) | La fréquence à laquelle elle tourne |

## Permissions (avancé)

| Réglage | Par défaut | Effet |
|---|---|---|
| Set Permissions | désactivé | Lance chmod à l'import et au renommage |
| chmod Folder | 755 | Le mode octal des dossiers et des fichiers, sans les bits d'exécution pour les fichiers |
| chown Group | vide | Le nom du groupe ou le gid. Utilise un gid sur les systèmes de fichiers distants |

## Pièges à éviter

- Si la corbeille est activée mais que son dossier n'est pas disponible, les suppressions qui en ont besoin échouent au lieu de supprimer définitivement.
- Les liens physiques ne fonctionnent qu'à l'intérieur d'un même système de fichiers. Les fichiers qui ne peuvent pas être liés sont copiés, jamais déplacés, et comptés dans le résultat de l'import.

Si tu connais Sonarr : c'est le Media Management de Sonarr sans les formats de nommage. Les noms des dossiers sont choisis par ABM. Le renommage en masse se trouve dans Library, Series et Authors sous le nom **Rename Files**.
