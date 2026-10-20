---
title: Le verrouillage de couverture
description: Pourquoi une couverture que tu as choisie n'est pas remplacée lors d'un rafraîchissement.
---

Quand tu définis toi-même la couverture d'un livre, en envoyant une image, en collant une URL ou en choisissant un résultat dans la recherche de couvertures, ABM la stocke et la **verrouille**. Aucun rafraîchissement des métadonnées ne remplace une couverture verrouillée.

## Comment le savoir

Une couverture verrouillée est servie depuis le stockage d'ABM lui-même, pas depuis une adresse Audible. C'est comme ça qu'ABM distingue une couverture personnalisée d'une couverture automatique.

## Ce que ça change

- Le rafraîchissement des métadonnées garde la couverture, même si Libex en a une nouvelle.
- L'écriture de `cover.jpg` et l'intégration de l'image dans les fichiers utilisent la couverture que tu as choisie.
- Library Import peut choisir la couverture livre par livre. Voir [Import de bibliothèque](/fr/library-import/).

## Annuler

La couverture du livre peut être remise sur l'automatique, ce qui la déverrouille. Ensuite, un rafraîchissement peut de nouveau la remplacer.

## Pièges à éviter

- Le verrouillage ne s'applique qu'à la couverture. Le titre, l'auteur et le reste continuent de se rafraîchir.
- Les jaquettes sont récupérées via ton proxy si tu en as réglé un sous **Settings > General > Proxy**.
