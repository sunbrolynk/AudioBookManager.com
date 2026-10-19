---
title: Listes d'import
description: Fais entrer des livres wanted depuis MyAnonamouse ou un flux RSS.
---

**Settings > Import Lists** ajoute automatiquement des livres à partir de sources extérieures.

## Sources

- **MAM** : une liste de souhaits MyAnonamouse, avec un **MAM Session ID**.
- **RSS** : un **RSS Link** que tu fournis, avec une **Website URL** facultative. Le site doit être en http ou https.

## Par liste

| Champ | Effet |
|---|---|
| Name | Nom affiché |
| Monitor | Si les livres ajoutés sont Monitored ou Unmonitored |
| Root Folder | Où ils vont |
| Quality Profile | Un profil, ou Inherit (utiliser celui par défaut) |
| Tags | Posés sur tout ce que la liste ajoute |

**Sync Now** lance les listes tout de suite.

## Options

| Réglage | Par défaut | Effet |
|---|---|---|
| RSS Sync Interval | 12 (heures) | La fréquence de synchronisation des listes. 0 désactive la synchronisation |
| Clean Library Level | Disabled | Ce qui arrive à un livre quand il sort de la liste |

Choix possibles pour Clean Library Level : Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Le dernier supprime les fichiers. Ne le choisis que si c'est vraiment ce que tu veux.

## Exclusions

**Import List Exclusions** bloque un livre par **ASIN**, **Title** et **Year**, pour qu'une liste ne l'ajoute plus jamais. Utilise **Lookup ASIN** pour les remplir.

## Pièges à éviter

- Un lien RSS ou un identifiant de session enregistré n'est plus jamais affiché. Changer l'adresse oblige à ressaisir le secret.
- Les listes déclenchent les notifications On Import List Synced et On Import List New Items. Voir [Connect](/fr/settings/connect/).
