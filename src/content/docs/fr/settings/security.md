---
title: Sécurité et connexion
description: Modes d'authentification, clés d'API, proxies de confiance, réseaux locaux et politique de sécurité du contenu.
---

La section **Security** de **Settings > General** contrôle qui peut utiliser ABM, et comment.

## Authentification

| Réglage | Par défaut | Choix |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Laisse le mot de passe vide pour garder l'actuel |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | vide | Des plages CIDR en plus dont les clients sautent la connexion |
| CORS Allowed Domains | vide | D'autres origines autorisées à appeler l'API depuis un navigateur. Nécessite un redémarrage |

Les deux modes d'**Authentication Required** que tu vas utiliser :

- **Enabled** : tout le monde se connecte, ton LAN compris.
- **Disabled for Local Addresses** (enregistré comme `local_disabled`) : une requête qui vient d'une adresse locale saute la connexion. Le loopback, les plages privées, le link-local et l'IPv6 unique-local comptent comme locaux. **Local Networks** en ajoute d'autres et ne les remplace jamais.

Sur une installation toute neuve, les requêtes sont refusées tant que la configuration initiale n'est pas terminée.

## Reverse proxies

Derrière un proxy, définis `TRUSTED_PROXIES` pour qu'ABM sache à quels en-têtes de transfert se fier. Une requête qui porte des en-têtes de transfert depuis une adresse absente de cette liste n'est jamais locale et doit se connecter. C'est voulu. Voir [Reverse proxy](/fr/guides/reverse-proxy/).

Un proxy qui n'envoie aucun en-tête de transfert ressemble à un client local. Si tu en utilises un, règle Authentication Required sur Enabled.

## Confirmation du mot de passe

Certains changements redemandent ton mot de passe actuel : enregistrer les réglages Security, afficher ou régénérer la clé d'API, et enregistrer ou supprimer une config WireGuard. Un mauvais mot de passe compte comme une connexion échouée dans le journal de sécurité. Si aucun mot de passe n'est encore défini, rien n'est demandé.

## Clé d'API

La clé n'est jamais affichée tant que tu n'as pas confirmé ton mot de passe. **Regenerate API Key** en crée une nouvelle, l'affiche une seule fois et invalide l'ancienne clé immédiatement. La clé ne peut pas être saisie à la main. Si la clé stockée ne peut pas être déchiffrée (le secret de l'app a changé), régénère-la.

Envoie-la dans `X-Api-Key` ou dans un paramètre `apikey`. Une clé envoyée depuis une adresse du LAN compte comme une requête avec clé. Voir [API](/fr/system/api/).

## Écritures depuis le navigateur

Une requête de navigateur qui modifie quelque chose est refusée avec `cross_origin_rejected`, sauf si son origine correspond à l'adresse par laquelle on joint ABM, à l'hôte transmis par un proxy de confiance, ou à un domaine autorisé CORS. Les requêtes avec clé d'API ne sont pas concernées.

## Politique de sécurité du contenu

ABM envoie un en-tête Content-Security-Policy sauf si `SECURITY_HEADERS_CSP_ENABLED=false`. Il limite l'interface aux scripts et à l'API d'ABM, et les images à ABM ou au HTTPS. Les couvertures servies en HTTP simple sont bloquées, et ABM ne peut de toute façon pas être affiché dans une iframe. Les pages de documentation de l'API ont une politique plus souple pour pouvoir se charger depuis un CDN.

## Connexions échouées

Il n'y a pas de verrouillage de compte. Les tentatives échouées sont journalisées, regroupées par adresse dans l'Activity Log, et écrites ligne par ligne dans le journal de sécurité pour des outils comme fail2ban.

## Secrets

Les mots de passe et les clés qu'ABM stocke pour les indexeurs, les clients et les connexions sont chiffrés avec un secret de l'app. Définis `APP_SECRET` pour garder la clé hors du disque de configuration. Si aucun des deux n'existe, ABM génère `/config/app_secret`. Les mots de passe du proxy et des destinations d'export sont stockés en clair.
