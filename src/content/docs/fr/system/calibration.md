---
title: Calibrage
description: Comment ABM apprend à estimer la durée des conversions.
---

Chaque conversion terminée enregistre le temps qu'elle a pris par rapport à la durée de l'audio. ABM trace une droite à partir de ces échantillons et s'en sert pour prédire la durée de la prochaine tâche. **System > Calibration** montre ce qu'il a appris pour chaque type de tâche : conversion, fusion, découpage et ajout de chapitres.

- **Samples for Full Confidence** indique combien de tâches terminées il lui faut avant de faire confiance à une estimation.
- Un bouton recalcule tous les coefficients. Sers-t'en si les estimations paraissent fausses après un changement de matériel.

Rien ici n'est un réglage auquel tu dois toucher.
