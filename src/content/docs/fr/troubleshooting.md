---
title: Dépannage
description: Les solutions aux problèmes que tu as le plus de chances de rencontrer.
---

## Fichiers laissés par un import interrompu (.abmstage)

Un import commence par préparer chaque fichier à côté de son nom final, puis les met en place une fois qu'ils sont tous arrivés. Si quelque chose échoue, ABM remet en place ce qu'il a déplacé. S'il n'arrive pas à remettre une partie en place, cette partie reste dans le dossier du livre sous la forme d'un fichier caché qui se termine par `.abmstage`. Ça peut être la seule copie, donc ABM la garde et l'erreur donne son nom.

Tant qu'un fichier `.abmstage` se trouve dans le dossier d'un livre, les imports dans ce dossier s'arrêtent avec :

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Pour récupérer :

1. Trouve le fichier `.abmstage` nommé dans l'erreur.
2. Remets-le dans le téléchargement, ou dans le dossier du livre sous son vrai nom. Ou supprime-le si tu n'en as pas besoin.
3. Relance l'import.

## Tout le monde doit se connecter derrière un reverse proxy

Sans `TRUSTED_PROXIES`, une requête qui porte des en-têtes de transfert n'est jamais considérée comme locale, donc elle doit se connecter. C'est voulu.

1. Mets l'adresse de ton proxy dans `TRUSTED_PROXIES`, par exemple `172.20.0.5`. Un proxy sur la même machine a besoin de `127.0.0.1`.
2. Fais en sorte que le proxy envoie `X-Forwarded-For` ou `X-Real-IP`. nginx proxy manager, Traefik et Caddy le font par défaut.
3. Redémarre ABM.

Le journal de l'app dit de quel cas il s'agit :

- « carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES » : ajoute le proxy dans `TRUSTED_PROXIES`.
- « ... is in TRUSTED_PROXIES but didn't name a client address » : configure le proxy pour qu'il envoie `X-Forwarded-For` ou `X-Real-IP`.

Le cas inverse : un proxy qui n'envoie aucun en-tête de transfert ressemble à un client local, donc tout ce qui passe par lui saute la connexion. Règle Authentication Required sur Enabled.

## Les modifications sont refusées depuis le navigateur

Vérifie que le proxy transmet l'en-tête `Host` d'origine, ou qu'il envoie `X-Forwarded-Host`. Voir [Configuration](/fr/configuration/#reverse-proxy).

## Les couvertures disparaissent, ou la page se comporte bizarrement derrière un proxy

L'en-tête Content-Security-Policy n'autorise que les images de couverture en HTTPS. Regarde la console du navigateur pour repérer les violations. Sers les couvertures en HTTPS, ou mets `SECURITY_HEADERS_CSP_ENABLED=false`.

## Une grosse requête renvoie 413

Augmente `MAX_REQUEST_BODY_BYTES`. Un reverse proxy peut aussi imposer une limite plus basse et répondre 413 lui-même.

## La source de métadonnées est indisponible

Ajouter, chercher, actualiser et Discover ont besoin de Libex. Quand ABM n'obtient pas de réponse, une recherche de livres échoue avec "Libex search failed" et une recherche d'auteurs ou de séries avec "Libex could not be reached; try again shortly", au lieu d'afficher une liste vide. Causes : Libex est en panne, ou la connexion d'ABM ne l'atteint pas.

1. Regarde la [page d'état d'ABM](https://status.audiobookmanager.com) et la [page d'état de Libex](https://status.libexdb.com) pour voir si c'est en panne pour tout le monde.
2. Vérifie que le conteneur a accès à Internet, et que le proxy sous **Settings > General > Proxy** est bon si tu en utilises un.
3. Réessaie au bout d'une minute.
4. Tu peux continuer à ajouter et importer des livres à la main en attendant.

Une tâche en arrière-plan qui tombe sur une panne échoue en donnant la raison. Elle est relancée toute seule, jusqu'à six fois ou pendant six heures, selon ce qui arrive en premier.

## Un rafraîchissement a changé les détails d'un livre

Le titre, la description, les auteurs, les narrateurs et les champs du même genre viennent de la source de métadonnées, et un rafraîchissement applique ce qu'elle dit maintenant. ABM n'a aucun moyen de les modifier à la main. Ce que tu contrôles, c'est la couverture (verrouillable), les fichiers écrits, les tags, et si les rafraîchissements écrivent les fichiers annexes et les tags. Voir [Tes métadonnées, ton contrôle](/fr/metadata/control/).

## Un livre affiche Missing Files

Le livre a été téléchargé, mais ses fichiers ne sont pas là où ABM regarde. Vérifie le montage et les permissions, puis lance **Refresh & Scan**. Un scan ne touche pas à un livre dont le dossier ne peut pas être lu, et la tâche s'affiche comme Partial avec la raison.

## Les imports s'arrêtent avec « Files left by an interrupted import »

Voir la section `.abmstage` plus haut.

## Les téléchargements se terminent mais ne sont jamais importés

Ajoute une correspondance de chemin distant, ou fais en sorte qu'ABM et le client voient le dossier au même chemin. Un sous-dossier illisible bloque tout le téléchargement jusqu'à ce que ses permissions soient corrigées. Voir [Clients de téléchargement](/fr/settings/download-clients/).

## Docker n'arrive pas à joindre la source de métadonnées ou les indexeurs

Vérifie d'abord le DNS et le réglage du proxy. Dans Docker, ABM n'atteint Libex et tes indexeurs que si le conteneur a accès à Internet.

## Toujours bloqué

Pose ta question sur le [Discord d'ABM](https://discord.gg/qeJRrM6AZ), [ouvre une issue](https://github.com/sunbrolynk/AudioBook-Manager/issues), ou écris à [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
