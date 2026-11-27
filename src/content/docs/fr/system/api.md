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
- `POST /api/tasks` ne met en file que `backup_export`. Tout autre type de tâche reçoit une erreur HTTP 403, et des réglages qui ne correspondent pas à `backup_export` reçoivent une erreur HTTP 422. Les imports manuels passent par les endpoints `/api/manual-import/` et les analyses de la bibliothèque par `POST /api/library/scan`.
- Library Import garde lui-même sur le serveur les correspondances Libex de chaque ligne. Un enregistrement de la session (`PUT /api/library-import/session/{id}` ou `PATCH /api/library-import/session/{id}/choices`) avec une ligne qui envoie `libex_matches` est refusé avec un HTTP 422 qui nomme le champ, donc laisse-le hors des lignes que tu renvoies. Un enregistrement, ou un ajout, dont les lignes nomment un dossier ou un fichier (y compris les `audio_files` d'une ligne) que le scan de la session n'a pas trouvé est refusé avec un HTTP 422 qui nomme les chemins. L'aperçu des fichiers annexes d'une ligne (`POST /api/library-import/session/{id}/extras`), ses aperçus de couverture et `POST /api/library-import/session/{id}/file-tags` répondent HTTP 422 « Outside the folder this session scanned » quand la ligne ou un fichier sort du dossier scanné par un lien. `POST /api/library-import/retry-match` accepte un `session_id` facultatif et enregistre dans cette session les correspondances qu'il trouve.
- `GET /api/metadata/search` renvoie une page d'au plus 50 résultats. `page` (de 0 à 9) choisit la page, et la réponse contient `page` et `has_more`, qui indique si une page suivante peut en contenir d'autres. Une recherche par ASIN n'a que la page 0. `search_type=phrase` renvoie les meilleures correspondances de Libex pour la requête, elle aussi uniquement en page 0 et avec `has_more` à false. Une page peut revenir incomplète avec `has_more` à true, parce que Libex écarte les livres qu'il n'arrive pas à lire, alors continue de demander des pages jusqu'à ce que `has_more` soit false. `limit` (de 1 à 50) raccourcit une page.
- `POST /api/manual-import/execute` et `/execute-to-book` vérifient chaque ligne de fichier selon un schéma fixe. Une clé inconnue, un `source_path` relatif ou une liste `files` vide est refusé avec HTTP 422. Chaque source doit être un fichier audio qui ne se trouve ni dans un dossier système, ni directement dans un dossier de premier niveau comme `/tmp` ou `/mnt`, ni dans un des dossiers d'ABM (configuration, base de données, sauvegardes, journaux, couvertures, corbeille, dossier temporaire et les dossiers du certificat et de la clé SSL), liens symboliques suivis. Un fichier refusé renvoie HTTP 400 avec son chemin (`Can't import <path>: the file <reason>.`) et rien n'est mis en file d'attente.
- `POST /api/manual-import/execute` et `/execute-to-book` nomment chaque fichier selon [Book Naming](/fr/settings/media-management/#book-naming) au moment où l'import s'exécute, et ignorent tout `destination_filename` présent dans une ligne de fichier.
- `POST /api/manual-import/check-conflicts` prend un `book_id` et les `source_paths` que tu comptes importer, et renvoie dans `destination_filenames` le nom que chaque fichier recevra, par chemin source. `clashed` liste les fichiers source qui prennent un nom du format parce que leur propre nom entrerait en conflit. `audio_conflicts` et `own_conflicts` listent les noms déjà présents dans le dossier du livre, sans tenir compte de la casse.

## Pannes de métadonnées

Une requête qui a besoin de la source de métadonnées et n'obtient pas de réponse échoue avec un `detail` qui nomme la source et la raison, jamais avec un résultat vide. Une recherche que tu attends abandonne au bout d'environ 10 secondes quand Libex limite le débit.

Si tu connais Sonarr : l'API n'est pas compatible v3. Prowlarr peut synchroniser des indexeurs dans ABM via sa connexion Prowlarr.
