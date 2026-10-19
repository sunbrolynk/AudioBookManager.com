---
title: Bibliothèque
description: Les livres, les auteurs et les séries, et la façon dont ABM suit leur statut.
---

Le menu **Library** a trois listes : **Books**, **Series** et **Authors**. **Add New** et **Library Import** y ajoutent des choses. **Audible Library** et **Conversions** ont chacune leur propre page.

## Livres

Chaque livre est une ligne d'aperçu, une affiche ou une ligne de tableau (le sélecteur de vue est dans la barre d'outils). Un livre a un statut :

- **Wanted** : surveillé, pas encore de fichiers. ABM le cherche.
- **Downloaded** : les fichiers sont sur le disque.
- **Missing Files** : le livre a été téléchargé, mais ses fichiers ne sont plus là où ABM les attend.
- **Unmonitored** : ABM n'y touche pas.

Ouvre un livre pour voir sa page de détail : fichiers, métadonnées, historique, la qualité mesurée par ABM, et des actions comme Refresh & Scan et la fenêtre de modification (voir plus bas). Voir [Fichiers annexes](/fr/using/sidecars/).

Si tu connais Sonarr : un livre, c'est un épisode, une série, c'est une saison et une série télé en un, et un auteur sert à regrouper les deux. La différence, c'est qu'un livre peut appartenir à plusieurs séries, et ABM utilise la principale (celle avec la position la plus basse) quand il doit en choisir une.

## Séries

**Library > Series** liste toutes les séries avec le nombre de livres possédés, wanted et avec fichiers manquants, en Overview ou en Posters. Une page de série montre tout le catalogue, y compris les livres que tu ne possèdes pas. Filtre-la sur All, In Library ou Not in Library. **Add Remaining** ou **Select to Add** ajoute les livres manquants comme wanted, et **Refresh Series** récupère de nouveau le catalogue. **Monitor New Books** (All ou None) décide si les livres qui sortiront plus tard sont ajoutés comme wanted. Voir [Suivi des séries](/fr/using/series-tracking/).

## Auteurs

**Library > Authors** liste les auteurs, en Overview ou en Posters. Une page d'auteur montre son catalogue groupé par série, avec pour chaque série le nombre de livres téléchargés et le total, plus son profil de qualité, ses genres et sa note. **Refresh Catalog** le récupère de nouveau et **Search Author** cherche ses livres wanted. **Monitor New Books** fonctionne comme pour une série, et un auteur démarre sur None.

La suppression d'une série ou d'un auteur est refusée tant qu'il reste des livres dans la bibliothèque. Retire d'abord les livres.

## Héritage du profil de qualité

Le profil de qualité d'un livre vient, dans l'ordre : de son propre réglage spécifique, de sa série principale, de son auteur principal, puis du profil par défaut. Voir [Profils](/fr/settings/profiles/).

## La fenêtre de modification

La fenêtre de modification d'un livre change les réglages propres à ABM pour ce livre, pas ses métadonnées :

- **Monitored**
- **Quality Profile** (No Change quand tu en modifies plusieurs)
- **Path**, pour un seul livre (avec un bouton pour le recalculer), ou **Root Folder** pour une sélection
- **Tags**
- **Write to Directories** : cover.jpg, desc.txt, reader.txt et un OPF (la case affiche « metadata.opf » ; le fichier est nommé d'après le premier fichier audio du livre, par exemple `Dune.opf`, ou `title.opf` quand il n'y a pas d'audio)
- **Write to Audio Files** : écrit les tags de métadonnées

La même fenêtre s'ouvre pour les séries et les auteurs et s'applique à chacun de leurs livres. Les options d'écriture tournent quand tu enregistres.

## Tags

Les livres, les auteurs et les séries peuvent porter des tags. Les tags orientent les indexeurs, les notifications, les listes d'import et les profils, et filtrent le flux du calendrier. Voir [Tags](/fr/settings/tags/).

## Sélection

Sélectionne des lignes pour agir sur plusieurs à la fois : surveiller, chercher, taguer, renommer, supprimer. Sur téléphone, voir [Sur téléphone](/fr/phone/).
