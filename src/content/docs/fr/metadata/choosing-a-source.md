---
title: Choisir une source de métadonnées
description: Intégrée, hébergée, ou ton propre serveur Libex.
---

:::caution[Prévu pour la prochaine version]
Le choix de la source n'est pas encore dans une version publiée. Les versions publiées utilisent l'instance publique de Libex sur libexdb.com et n'ont aucun réglage pour ça.
:::

Dans la prochaine version, **Settings > Metadata > Source** a un réglage **Metadata Source** avec trois choix.

| Choix | Ce que ça veut dire |
|---|---|
| Built-in (par défaut) | Libex tourne à l'intérieur d'ABM. Il faut d'abord choisir une connexion sortante. |
| Hosted (libexdb.com) | ABM interroge l'instance publique de Libex. |
| Self-hosted | ABM interroge un serveur Libex que tu lui indiques. Saisis sa **Server URL**, par exemple `http://192.168.1.20:8000`. |

**Test** vérifie la source sélectionnée sans enregistrer. **Status** indique si elle est prête. Un choix que tu n'as pas encore enregistré affiche « Not in use yet - save to switch » jusqu'à ce que tu enregistres.

## Built-in et la connexion sortante

Built-in parle à Audible depuis ta machine, donc il utilise **Settings > General > Proxy & VPN**. Cette page décide du chemin : un proxy, le tunnel WireGuard intégré, ton propre conteneur VPN, ou une connexion directe que tu acceptes en connaissance de cause. Si rien n'est choisi, les recherches automatiques sont bloquées et le disent. Un chemin choisi qui est en panne bloque aussi les recherches. Il ne se rabat jamais sur ta propre adresse. Direct affiche un avertissement : Audible voit ton adresse IP et les livres qu'ABM recherche.

## Hosted et Self-hosted

Avec ces deux-là, ABM interroge un serveur Libex et c'est le serveur qui parle à Audible. Une URL auto-hébergée est vérifiée avant d'être enregistrée, et une URL vide ou dangereuse est refusée. Un serveur en panne est signalé comme une source de métadonnées indisponible, avec son nom.

## Lequel choisir

- Tu veux que ça marche, tout simplement, et ça ne te gêne pas qu'Audible voie ton adresse : Built-in avec une connexion directe, ou Hosted.
- Tu tiens à ne pas exposer ton IP à Audible : Built-in à travers un VPN ou un proxy, ou Hosted.
- Tu fais déjà tourner un serveur Libex : Self-hosted.
