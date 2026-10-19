---
title: Journaux
description: Fichiers journaux, niveaux, conservation et rotation.
---

**System > Log Files** liste les journaux texte d'ABM. Ouvres-en un pour le lire, le télécharger ou le supprimer, ou efface-les tous. Les journaux apparaissent au fur et à mesure que les opérations tournent.

- Les tâches et les conversions écrivent leur propre journal. La page Tasks donne le lien vers chacun.
- Le journal principal est `app.log`. Il tourne au démarrage, au moins toutes les heures et à 10 MiB. Les anciens fichiers sont gardés pendant **Log File Retention** (30 jours par défaut).
- Un journal de sécurité séparé contient une ligne par tentative de connexion, pour fail2ban et les outils du même genre.
- Les niveaux se règlent dans **Settings > General > Logging**.

## Lire un problème

Commence par le bouton de journal de la tâche en échec. Il montre l'opération depuis sa ligne de début jusqu'à son bloc de fin. Les secrets sont masqués dans le texte, mais vérifie quand même avant de coller un journal en public.

## Pièges à éviter

- Les niveaux SQL Logging et Debug sont très bavards. Désactive-les quand tu as fini.
- Supprimer un journal laisse en place les entrées d'activité qui pointent vers lui. Elles affichent « Log no longer kept ».
