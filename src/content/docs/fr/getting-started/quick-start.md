---
title: Démarrage rapide
description: D'une installation toute neuve à ton premier livre surveillé.
---

C'est le chemin le plus court entre un conteneur qui tourne et un livre en cours de recherche. Installe d'abord ABM : voir [Installer ABM](/fr/installation/).

## 1. Connecte-toi

À la première visite, l'app te guide pour créer un identifiant. Tant que ce n'est pas fait, ABM refuse les requêtes. Le comportement de la connexion ensuite est expliqué dans [Sécurité et connexion](/fr/settings/security/).

## 2. Choisis comment ABM accède à Internet

Dans **Settings > General**, il y a une section **Proxy & VPN**. Si tu comptes utiliser la source de métadonnées intégrée, il faut d'abord choisir une connexion. Voir [Choisir une source de métadonnées](/fr/metadata/choosing-a-source/).

## 3. Ajoute un dossier racine

Un dossier racine, c'est l'endroit où ABM range les livres. Ajoute-le dans **Settings > Media Management**, section **Root Folders**. Ça doit être le même dossier que celui que lit ton lecteur (Audiobookshelf, par exemple).

## 4. Ajoute un indexeur et un client de téléchargement

- **Settings > Indexers** : Newznab, Torznab, MyAnonamouse ou Prowlarr. Voir [Indexeurs](/fr/settings/indexers/).
- **Settings > Download Clients** : Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet ou Blackhole. Voir [Clients de téléchargement](/fr/settings/download-clients/).

Si le client tourne dans un autre conteneur, vérifie que lui et ABM voient le dossier des téléchargements au même chemin, ou ajoute une correspondance de chemin distant.

## 5. Définis un profil de qualité

**Settings > Profiles** contient l'échelle de qualité qu'ABM utilise pour décider quoi récupérer et ce qui compte comme une mise à niveau. Un profil est celui par défaut. Commence avec celui-là et affine plus tard. Voir [Profils](/fr/settings/profiles/).

## 6. Fais entrer ou ajoute des livres

- Tu as déjà une collection ? Utilise [Import de bibliothèque](/fr/library-import/).
- Tu pars de zéro ? Utilise **Library > Add New** et cherche par titre, auteur ou série. Voir [Ajouter un livre](/fr/using/add-new/).

Un livre que tu ajoutes est wanted jusqu'à ce qu'un fichier pour lui soit importé. Les livres wanted apparaissent dans **Wanted > Missing** et sont cherchés automatiquement.

## 7. Regarde-le travailler

**Activity > Queue** montre ce qui est en train de se télécharger. **Activity > History** montre ce qui a été récupéré et importé. Quand quelque chose se passe mal, c'est dans [Dépannage](/fr/troubleshooting/) et sur la page [Tâches](/fr/system/tasks/) qu'il faut regarder.
