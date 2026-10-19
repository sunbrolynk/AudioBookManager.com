---
title: FAQ
description: Des réponses courtes aux questions qu'on pose en premier.
---

## Est-ce qu'ABM remplace Audiobookshelf ?

Non. Audiobookshelf est le lecteur et ABM est le bibliothécaire. Fais pointer les deux vers le même dossier de bibliothèque et laisse chacun faire son boulot.

## D'où viennent les métadonnées ?

De [Libex](https://libexdb.com), un service de métadonnées ouvert pour les données Audible. ABM les rafraîchit selon un planning, et une couverture que tu as choisie toi-même peut être verrouillée pour qu'un rafraîchissement n'y touche pas.

## J'ai besoin d'une base de données à part ?

Non. ABM garde tout dans un seul fichier SQLite dans `/config`. Il n'y a rien d'autre à faire tourner.

## Je peux y accéder depuis l'extérieur de mon réseau ?

Oui, à partir de la 0.17.0. Par défaut, tout ce qui vient de l'extérieur de ton réseau local doit se connecter, et régler **Authentication Required** sur **Enabled** oblige tout le monde à se connecter, ton propre LAN compris. Derrière nginx, Traefik ou Caddy, mets l'adresse du proxy dans `TRUSTED_PROXIES`. Les identifiants enregistrés sont chiffrés. Voir [Configuration](/fr/configuration/#reverse-proxy).

## Quels clients de téléchargement fonctionnent ?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet et Blackhole.

## Qu'est-il arrivé à Readarr ?

Readarr gérait les livres et les livres audio ensemble, et il a depuis été abandonné. ABM est fait uniquement pour les livres audio, sur le design inventé par les apps Servarr.

## Comment je l'installe sur Unraid, Windows ou macOS ?

Pas encore possible. Pour l'instant, Docker est la seule façon de l'installer. Voir [Installer ABM](/fr/installation/).

## Combien ça coûte ?

Rien. C'est gratuit et open source sous GPL-3.0. S'il te fait gagner une soirée, il y a un [Ko-fi](https://ko-fi.com/sunbrolynk).

## Je peux modifier le titre, les auteurs ou la description d'un livre ?

Non. Ces données viennent de la source de métadonnées et ABM ne les modifie pas à la main. Ce que tu contrôles, c'est la couverture (une couverture que tu as choisie est verrouillée), le moment où tournent les rafraîchissements, quels fichiers annexes et tags audio sont écrits, les tags et les tags automatiques, la surveillance et le profil de qualité. Voir [Tes métadonnées, ton contrôle](/fr/metadata/control/).

## ABM peut écrire les chapitres, les descriptions et les tags là où Audiobookshelf les lit ?

Il écrit `cover.jpg`, un `.opf`, `desc.txt` et `reader.txt`, et il peut écrire des tags dans l'audio. La comparaison des chapitres avec l'édition publiée et les fichiers `.cue` arrivent dans la prochaine version. Voir [Fichiers annexes](/fr/using/sidecars/).

## Je peux convertir mes fichiers ?

Oui : convertir, fusionner, découper et ajouter des chapitres, dans une file d'attente. Voir [Conversions](/fr/using/conversions/).

## Je peux importer ma collection existante ?

Oui, avec [Import de bibliothèque](/fr/library-import/). Voir aussi [Faire entrer une bibliothèque](/fr/guides/moving-a-library-in/).

## Il y a une mise en page mobile ?

Oui, en dessous de 768px de large. Voir [Sur téléphone](/fr/phone/).

## ABM peut utiliser plusieurs comptes Audible ?

Oui. Chaque compte garde sa propre bibliothèque. Voir [Audible](/fr/audible/).
