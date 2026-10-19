---
title: Tâches
description: Le travail en arrière-plan, les plannings et les journaux.
---

**System > Tasks** liste tout ce qu'ABM fait en arrière-plan : scans de bibliothèque, rafraîchissements, imports, recherches, téléchargements, synchronisations, sauvegardes. Chaque ligne affiche son état (en attente, en cours, terminée, en échec), sa progression, son résultat et un bouton pour le journal.

- Une tâche terminée avec des entrées dans sa liste d'erreurs s'affiche comme **Partial**. Déplie-la pour voir chaque élément sauté et la raison.
- Une tâche qui a une nouvelle tentative prévue reste en attente jusqu'à épuisement des tentatives. Le numéro de la tentative est affiché.
- **Clear completed tasks older than 24 hours** fait le ménage dans la liste. Les anciennes tâches sont aussi nettoyées automatiquement (30 jours par défaut).
- Les exécutions planifiées qui n'ont rien fait apparaissent ici, mais pas dans le [journal d'activité](/fr/system/activity-log/).

## Pièges à éviter

- Les conversions ont leur propre file d'attente. Voir [Conversions](/fr/using/conversions/).
- Les passages de téléchargement (nouvelle tentative des récupérations en attente et vérification des téléchargements terminés) ne sont mis en file que si au moins un client de téléchargement est activé, pour que la page ne se remplisse pas d'exécutions vides.
