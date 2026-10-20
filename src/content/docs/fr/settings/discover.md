---
title: Réglages de Discover
description: Le planning de rafraîchissement et les limites de scraping des catalogues Discover.
---

**Settings > Discover** contrôle la façon dont les catalogues [Discover](/fr/using/discover/) sont remplis.

## Rafraîchissement et état des catalogues

Chaque catalogue (New Releases, Coming Soon, Audible Best, Recommended) a ses propres boutons **Refresh** et **Clear**, et la page montre à quel point chacun est rempli.

## Planning

| Réglage | Effet |
|---|---|
| Auto Refresh | Rafraîchit les catalogues selon un planning |
| Frequency | Quotidien, hebdomadaire ou mensuel, avec le jour et l'heure |
| Refresh on Startup | Remplit tout catalogue vide au démarrage d'ABM |
| Use CRON Expression | Remplace les options simples |

## Scraping

| Réglage | Plage | Effet |
|---|---|---|
| Pages to Scrape | 1 à 50 | Pages Audible lues par catalogue |
| Max ASINs per Refresh | 100 à 5000 | Livres récupérés auprès de Libex par rafraîchissement |
| Batch Size | 10 à 900 | ASIN par requête Libex. Plus grand, c'est plus rapide, mais ça peut échouer sur certains systèmes |

Les valeurs par défaut sont dans l'app et ne sont pas répétées ici. Ouvre la page pour les voir.

## Pièges à éviter

Les actualisations sont ignorées quand Libex est injoignable, et c'est noté une seule fois dans le journal.
