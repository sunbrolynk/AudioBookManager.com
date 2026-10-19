---
title: Conversions
description: Convertis, fusionne, découpe et ajoute des chapitres aux fichiers audio, avec une file que tu peux mettre en pause.
---

**Library > Conversions** lance des tâches ffmpeg sur ta bibliothèque. Il y en a quatre types :

| Tâche | Ce qu'elle fait |
|---|---|
| Convert Format | Réencode en M4B, MP3, M4A, FLAC ou Opus |
| Merge Parts | Réunit plusieurs fichiers en un seul, avec des chapitres |
| Split Chapters | Découpe un fichier en un fichier par chapitre |
| Ensure Chapters | Ajoute ou corrige les marqueurs de chapitres sans réencoder |

Les valeurs par défaut de chaque tâche viennent des [réglages des conversions](/fr/settings/conversions/). Chaque tâche peut les remplacer.

## La file d'attente

Les tâches attendent dans une file et tournent jusqu'à **Concurrent Conversions** à la fois (2 par défaut). Les tâches terminées passent dans History, que tu peux vider.

La sortie est écrite dans un dossier de travail privé et n'est placée dans la bibliothèque qu'une fois terminée. Chaque fichier arrive sous un nom temporaire et il est renommé à sa place, donc un livre à moitié écrit n'apparaît jamais. Une vérification de l'espace libre tourne avant le début d'une tâche et de nouveau avant le placement. Les fichiers source ne sont jamais écrasés.

Convertir un fichier dans le format qu'il a déjà est refusé, parce que ça écraserait l'original.

## Après une conversion

ABM rafraîchit les fiches des fichiers du livre, sa taille et sa qualité, donc un livre converti affiche sa nouvelle qualité. Si **Delete Original** est activé, les anciens fichiers vont dans la corbeille des conversions quand elle est activée.

Si le placement du résultat échoue (le dossier de la bibliothèque est plein, par exemple), la tâche échoue et la sortie terminée est gardée dans son dossier de travail. L'erreur donne le nom du dossier. **Retry** relance la tâche depuis le début et jette cette sortie gardée, donc il demande d'abord. **Clear history** garde les tâches qui ont encore une sortie non placée.

## Pause et reprise

:::caution[Prévu pour la prochaine version]
La mise en pause n'est pas encore dans une version publiée.
:::

Deux sortes de pause, et aucune n'annule quoi que ce soit :

- **Pause** sur une tâche en cours suspend ses processus ffmpeg là où ils en sont. Resume reprend au même endroit.
- **Pause queue** (en haut de la file, ou dans la barre du haut sur téléphone) empêche les nouvelles tâches de démarrer et suspend toutes les tâches en cours.

Une tâche que tu as mise en pause toi-même reste en pause quand la file reprend, et après un redémarrage. Une tâche en cours au moment où ABM s'arrête revient en pause et ne redémarre pas toute seule. Resume reprend à partir de la dernière partie terminée pour les fusions, les découpages et les conversions en plusieurs fichiers. Une conversion d'un seul fichier recommence ce fichier.

La limite de 6 heures par exécution ne compte que le temps hors pause. Si l'état enregistré de la file ne peut pas être lu au démarrage, la file démarre en pause et le dit. Appuie sur Resume queue pour le réécrire.

Si tu connais Sonarr : il n'y a rien de pareil dans les arrs. Vois ça comme une petite file d'encodage qui se trouve vivre à l'intérieur du gestionnaire.

## Pièges à éviter

- Concurrent Conversions multiplié par Threads Per Job ne devrait pas dépasser ton nombre de cœurs CPU.
- Un fichier converti a une nouvelle taille et une nouvelle date de modification, donc Audiobookshelf va le rescanner.
- Convertir un fichier lié physiquement à un torrent en partage crée un nouveau fichier. La copie en partage garde les anciens octets.
