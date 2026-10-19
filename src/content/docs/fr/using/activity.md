---
title: Activité
description: La file d'attente, l'historique et la liste de blocage.
---

## File d'attente (Queue)

Ce sur quoi tes clients de téléchargement travaillent. Les actions par ligne comprennent **Grab now**, **Import Now**, **Manual Import** et **Retry Now**, ainsi que **Configure remote path mapping** quand un téléchargement terminé se trouve dans un chemin qu'ABM ne voit pas.

Retirer une ligne de la file suit le réglage **Queue Page Remove Action** du client de téléchargement : l'ignorer dans ABM seulement, la retirer du client en gardant les fichiers, ou la retirer du client en supprimant les fichiers. Voir [Clients de téléchargement](/fr/settings/download-clients/).

## Historique (History)

Les récupérations, imports, échecs et mises à niveau. Une récupération qui a échoué indique quels clients ont été essayés.

## Liste de blocage (Blocklist)

Les sorties qu'ABM ne récupérera plus, en général parce qu'elles ont échoué. **Remove from Blocklist** en laisse une revenir. **Redownload Failed**, dans la gestion des téléchargements, ajoute ici une sortie qui a échoué et relance une recherche.

## À ne pas confondre avec les événements

Ces pages concernent les téléchargements. Le registre de tout ce qui s'est passé dans ABM, à l'échelle du système, c'est le [journal d'activité](/fr/system/activity-log/).
