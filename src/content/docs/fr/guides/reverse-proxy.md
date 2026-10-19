---
title: Reverse proxy
description: Mettre ABM derrière nginx, Traefik ou Caddy sans casser la connexion.
---

Trois réglages comptent. Règle-les correctement et la connexion, le websocket et les enregistrements fonctionnent tous.

## 1. Dis à ABM qui est le proxy

Mets l'adresse du proxy dans `TRUSTED_PROXIES`, de la façon la plus restreinte possible :

```
TRUSTED_PROXIES=172.20.0.5
```

Un proxy sur la même machine a besoin de `127.0.0.1`. ABM fait alors confiance à l'adresse du client que ton proxy transmet dans `X-Forwarded-For` ou `X-Real-IP`. Sans ça, toute requête qui porte des en-têtes de transfert doit se connecter. C'est voulu.

## 2. Transmets les en-têtes

Transmets le `Host` d'origine, ou envoie `X-Forwarded-Host`. Avec nginx :

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik et Caddy envoient les en-têtes de transfert par défaut. ABM utilise un websocket pour les mises à jour en direct, donc le proxy doit laisser passer les requêtes d'upgrade.

## 3. Décide qui doit se connecter

- **Authentication Required: Enabled** oblige tout le monde à se connecter. C'est le plus sûr si le proxy est public.
- **Disabled for Local Addresses** saute la connexion pour les clients qu'ABM voit comme locaux. À travers un proxy de confiance, ça veut dire le client que le proxy indique.
- Un proxy qui n'envoie aucun en-tête de transfert fait passer tout le monde pour local. Choisis Enabled.

## Sous-dossier et domaine

Pour servir ABM sous `/abm`, mets **URL Base** à `/abm` dans General et redémarre. Mets ton adresse publique dans **Application URL**.

Si les enregistrements échouent avec `cross_origin_rejected`, c'est que l'origine du navigateur ne correspond pas. Corrige d'abord l'en-tête Host. Sinon, ajoute ton domaine dans **CORS Allowed Domains** dans Security et redémarre.

## Taille du corps des requêtes

Si les gros envois échouent avec une erreur 413, vérifie la limite propre au proxy en plus de `MAX_REQUEST_BODY_BYTES`.

## Ce que dit le journal

- « carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES » : ajoute-le.
- « ... is in TRUSTED_PROXIES but didn't name a client address » : fais en sorte que le proxy envoie `X-Forwarded-For` ou `X-Real-IP`.

Voir aussi [Sécurité et connexion](/fr/settings/security/).
