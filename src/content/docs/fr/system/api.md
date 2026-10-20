---
title: API
description: Authentification, pages de documentation et limites.
---

ABM a une API REST sous `/api`. La référence interactive se trouve sur `/api/docs` (Swagger) et `/api/redoc`, et le schéma sur `/api/openapi.json`. Mets `DOCS_ENABLED=false` pour retirer les trois. Les pages de documentation chargent des ressources depuis un CDN, donc elles ne s'affichent complètement qu'avec un accès à Internet.

## S'authentifier

- **Clé d'API** : envoie `X-Api-Key: <key>` ou `?apikey=<key>`. Tu la trouves ou la régénères dans **Settings > General > Security**. Voir [Sécurité](/fr/settings/security/).
- **Jeton Bearer** obtenu à la connexion.
- Un identifiant que tu présentes l'emporte sur un contournement, donc une requête avec une clé depuis le LAN compte comme une requête d'API.

## Conventions

- Les erreurs reviennent sous la forme `{"detail": ...}`.
- Les secrets ne sont jamais renvoyés. Une réponse indique seulement s'il y en a un de défini.
- Une requête de navigateur qui modifie l'état doit venir d'une origine correspondante. Les scripts qui utilisent une clé en sont exemptés.
- Le corps des requêtes est limité à 10 MiB (`MAX_REQUEST_BODY_BYTES`). La restauration de sauvegarde et l'envoi de couverture ont des limites plus grandes. Au-delà, c'est une erreur HTTP 413.
- Les erreurs de validation ne renvoient jamais ce que tu as envoyé.

## Pannes de métadonnées

Une recherche de livres qui ne reçoit aucune réponse de Libex renvoie 502 avec "Libex search failed". Une recherche d'auteurs ou de séries renvoie 503 avec "Libex could not be reached; try again shortly". Certaines routes de recherche renvoient encore un résultat vide pendant une panne.

Si tu connais Sonarr : l'API n'est pas compatible v3. Prowlarr peut synchroniser des indexeurs dans ABM via sa connexion Prowlarr.
