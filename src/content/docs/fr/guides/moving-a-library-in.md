---
title: Faire entrer une bibliothèque
description: Amène une collection existante dans ABM sans risque.
---

## Avant de commencer

1. Sauvegarde la collection. Library Import copie par défaut, mais prévois quand même les erreurs.
2. Configure un dossier racine et un profil de qualité, et vérifie que la source de métadonnées est joignable.
3. Choisis entre copier, déplacer ou créer des liens physiques. Copier est le plus sûr. Les liens physiques font gagner de la place si la bibliothèque est sur le même système de fichiers que la source. Voir [Gestion des médias](/fr/settings/media-management/).

## Les étapes

1. **Library > Library Import**, scanne le dossier.
2. Lis la liste. Les correspondances affichent un pourcentage. Corrige les lignes **Needs attention** et **Unmatched** avec **Find a match**, ou réunis les lignes qui sont un seul livre réparti sur plusieurs dossiers.
3. Vérifie la couverture et les fichiers en plus de chaque dossier seulement si tu veux changer les valeurs par défaut.
4. Sélectionne les lignes et ajoute-les. Ça reste deux clics si tu acceptes les valeurs par défaut.
5. Surveille la tâche. Le résumé indique combien de fichiers ont été copiés au lieu d'être liés physiquement, et ce qui a échoué.

## Si tu veux qu'ABM gère le dossier source

Ajoute-le plutôt comme dossier racine et laisse ABM le scanner. Les fichiers restent en place et les livres prennent leur statut d'après ce qu'il y a sur le disque.

## Pièges à éviter

- Un livre déjà dans la bibliothèque est affiché comme tel. Refuse le doublon avec la réponse qui garde la bibliothèque plutôt que de l'importer deux fois.
- Refuser un dossier sans audio ne retire que ce qui appartient à cette ligne, et ça part dans la corbeille si elle est activée.
- Un ASIN trouvé dans une description est un indice, pas une correspondance, sauf si le titre concorde aussi.
- Après l'import, lance un rafraîchissement pour récupérer les métadonnées à jour, et active l'écriture des fichiers annexes si tu veux qu'Audiobookshelf voie les choix d'ABM. Voir [Fichiers annexes](/fr/using/sidecars/).
