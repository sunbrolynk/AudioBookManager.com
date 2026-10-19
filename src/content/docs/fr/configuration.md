---
title: Variables d'environnement
description: Les variables d'environnement, les réseaux locaux et les bases du reverse proxy.
---

La plupart des réglages se trouvent dans l'interface web, sous **Settings**. Ceux-ci se définissent dans l'environnement.

## Variables d'environnement

| Variable | Par défaut | Ce qu'elle fait |
|---|---|---|
| `PORT` | `5173` | Le port de l'interface web. |
| `TIMEZONE` | `UTC` | Ton fuseau horaire, par exemple `America/New_York`. |
| `LOCAL_NETWORKS` | vide | Des réseaux CIDR en plus qui sautent la connexion. Séparés par des virgules. |
| `TRUSTED_PROXIES` | vide | Les réseaux CIDR des reverse proxies autorisés à définir `X-Forwarded-For` et `X-Real-IP`. |
| `APP_SECRET` | auto | La racine de chiffrement des identifiants stockés. Générée dans `/config/app_secret` au premier lancement si elle n'est pas définie. Définis-la pour garder la clé hors du disque de configuration. |
| `DOCS_ENABLED` | `true` | Sert la documentation de l'API sur `/api/docs`, `/api/redoc` et `/api/openapi.json`. `false` la retire. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Envoie un en-tête Content-Security-Policy qui limite l'interface aux scripts, styles et à l'API d'ABM, plus les images de couverture en HTTPS. `false` le retire. L'intégration dans une frame reste bloquée dans tous les cas. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | La taille maximale du corps de requête qu'un endpoint accepte (10 MiB). Au-delà, c'est une erreur HTTP 413. La restauration de sauvegarde et l'envoi de couverture ont leurs propres limites. |

## Réseaux locaux

Le loopback, les plages privées (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), les adresses link-local et les adresses IPv6 unique-local comptent déjà comme locales. Avec **Authentication Required** réglé sur le mode des adresses locales, une requête qui vient de l'une d'elles saute la connexion. Pour en ajouter d'autres, liste-les :

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Reverse proxy

Derrière nginx, Traefik ou équivalent, mets l'adresse du proxy dans `TRUSTED_PROXIES` :

```
TRUSTED_PROXIES=172.20.0.5
```

- Garde-le aussi restreint que possible. Utilise l'adresse du proxy lui-même, pas un large sous-réseau Docker.
- Un proxy sur la même machine a besoin de `TRUSTED_PROXIES=127.0.0.1`.
- Seul le client que le proxy indique dans `X-Forwarded-For` ou `X-Real-IP` compte comme le client.
- Fais passer l'en-tête `Host` d'origine (nginx : `proxy_set_header Host $host;`) ou envoie `X-Forwarded-Host`. Une requête de navigateur qui modifie quelque chose est refusée sauf si son origine correspond à l'adresse par laquelle on joint ABM, ou à un domaine des domaines autorisés CORS.
- Un proxy qui n'envoie aucun en-tête de transfert ressemble à un client local. Si tu en utilises un, règle Authentication Required sur Enabled.

Si la connexion est demandée alors qu'elle ne devrait pas l'être, va voir [Dépannage](/fr/troubleshooting/).

## Pour aller plus loin

- Les modes de connexion, les clés d'API et la politique de sécurité du contenu : [Sécurité et connexion](/fr/settings/security/).
- Un guide complet sur le proxy : [Reverse proxy](/fr/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (500 MiB par défaut) limite la taille des envois pour restaurer une sauvegarde.
- Tout le reste se trouve sous **Settings** dans l'app. Voir [Vue d'ensemble des réglages](/fr/settings/media-management/).
