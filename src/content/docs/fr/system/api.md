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

Une requête qui a besoin de la source de métadonnées et n'obtient pas de réponse échoue avec un `detail` qui nomme la source et la raison, jamais avec un résultat vide. Une recherche que tu attends abandonne au bout d'environ 10 secondes quand Libex limite le débit.

Si tu connais Sonarr : l'API n'est pas compatible v3. Prowlarr peut synchroniser des indexeurs dans ABM via sa connexion Prowlarr.
