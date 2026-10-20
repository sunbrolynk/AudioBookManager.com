---
title: Tes métadonnées, ton contrôle
description: Ce que change un rafraîchissement, ce que tu contrôles, et les fichiers et tags qu'ABM écrit pour ton lecteur.
---

ABM garde un registre des métadonnées de ta bibliothèque dans sa propre base de données, et les réécrit là où ton lecteur peut s'en servir. Cette page explique ce que tu contrôles et ce qu'un rafraîchissement va toucher.

## Ce que change un rafraîchissement

Un rafraîchissement (le **Refresh & Scan** d'un livre, le rafraîchissement d'un auteur ou d'une série) réinterroge la source de métadonnées et applique ce qui revient. Les champs qu'il écrase quand la source a une valeur : titre, sous-titre, année et date de sortie, note, durée, langue, éditeur, description, auteurs, narrateurs, genres, et la couverture.

Un champ que la source renvoie vide est laissé tel quel.

## Ce que tu contrôles

- **Une couverture que tu as choisie.** Elle est verrouillée. Voir [Le verrouillage de couverture](/fr/metadata/cover-lock/).
- **Les tags, les tags automatiques, la surveillance, le choix du profil de qualité et les fichiers eux-mêmes.** Un rafraîchissement n'y touche pas.
- **Un livre dont les fichiers ne peuvent pas être lus.** Il est laissé complètement tranquille, et la page Tasks explique pourquoi.

Les détails d'un livre comme le titre, les auteurs et la description viennent de la source. ABM ne propose pas de les modifier à la main, et ce n'est pas prévu. Ce que tu contrôles, c'est la façon dont ils sont gardés et l'endroit où ils sont écrits.

## La fenêtre de modification

La fenêtre de modification change la surveillance, le profil de qualité, le chemin et les tags, et te permet d'écrire les fichiers annexes et les tags audio dans la même étape, pour un livre ou pour toute une sélection de séries et d'auteurs. Voir [Bibliothèque](/fr/using/library/#la-fenêtre-de-modification).

## Les fichiers annexes que lit ton lecteur

ABM écrit `cover.jpg`, un `.opf`, `desc.txt` et `reader.txt` à côté de l'audio. Audiobookshelf lit l'OPF, la jaquette et les fichiers texte, donc le lecteur affiche ce que tu as choisi dans ABM. Voir [Fichiers sidecar](/fr/using/sidecars/).

## Les tags écrits dans l'audio

ABM peut écrire le titre, l'artiste, l'artiste de l'album, l'album, le genre, l'année, le commentaire, le narrateur et la couverture intégrée dans les fichiers audio eux-mêmes, pour que les données voyagent avec le fichier. C'est désactivé par défaut. Choisis les champs dans **Settings > Metadata**. Voir [Réglages des métadonnées](/fr/settings/metadata/).

## Chapitres

Comparer les chapitres intégrés à tes fichiers avec ceux de l'édition publiée, et écrire les chapitres publiés dans les fichiers, est prévu pour une version ultérieure. Voir [Chapitres](/fr/using/chapters/).

## Série et position

Un livre porte sa série et sa position. ABM suit les séries comme des catalogues pour pouvoir montrer quels livres tu possèdes et ajouter ceux qui te manquent. Voir [Suivi des séries](/fr/using/series-tracking/).

## Tags et tags automatiques

Les tags t'appartiennent. Les tags automatiques les posent selon des règles (genre, narrateur, note, durée et plus encore), et peuvent les retirer quand un livre ne correspond plus. Les tags orientent ensuite les profils, les notifications, les indexeurs, les listes d'import et le flux du calendrier. Voir [Tags](/fr/settings/tags/).

## Un registre local qui grandit

Tout ce qu'ABM apprend sur un livre reste dans la base SQLite d'ABM dans `/config`, y compris les livres que tu retires ensuite. Sauvegarde ce dossier et le registre est sauvegardé. Une fois un livre entré, ses métadonnées ne dépendent plus de la disponibilité de la source.

:::caution[Prévu pour une version ultérieure]
Une **Local Metadata Library** dédiée est prévue : une copie facultative de tout ce qu'ABM a déjà consulté, conservée même après qu'un livre a quitté ta bibliothèque, avec ses propres sauvegardes planifiées et un téléchargement SQLite.
:::

## Plannings de rafraîchissement

- Discover a son propre planning. Voir [Réglages de Discover](/fr/settings/discover/).
- La bibliothèque Audible a son propre planning de synchronisation. Voir [Réglages Audible](/fr/settings/audible/).
- Un scan de la bibliothèque peut tourner toutes les N heures et lors des changements de fichiers. Voir [Gestion des médias](/fr/settings/media-management/).
- L'écriture des fichiers annexes et des tags lors d'un rafraîchissement est contrôlée par **Create on Refresh** et **Write Tags on Refresh**.
