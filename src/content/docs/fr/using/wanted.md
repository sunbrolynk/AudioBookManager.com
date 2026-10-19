---
title: Recherchés
description: Les livres manquants et ceux sous leur seuil de qualité.
---

**Wanted** a deux pages.

## Manquants (Missing)

Les livres surveillés qui n'ont aucun fichier. Par ligne : **Auto Search**, **Interactive Search**, **Manual Import**, **Unmonitor**.

- Auto Search interroge chaque indexeur activé et récupère la meilleure sortie que les profils autorisent.
- Interactive Search liste les sorties pour que tu choisisses. Un choix fait ici compte comme une récupération manuelle.
- Manual Import indique à ABM des fichiers que tu as déjà.

ABM cherche aussi les livres manquants tout seul. Les sorties sont retenues par le profil de délai avant d'être récupérées. Voir [Profils](/fr/settings/profiles/).

## Seuil non atteint (Cutoff Unmet)

Les livres téléchargés dont la qualité est encore sous le seuil de leur profil (« Upgrade Until »). **Search All Cutoff Unmet** lance la recherche pour eux. Une meilleure copie ne remplace l'ancienne que si elle est classée au-dessus dans l'échelle.

**Media Management > Quality Upgrades** peut lancer cette recherche pour toi : **Automatic Upgrade Search** (activé par défaut) toutes les **Upgrade Search Interval** (24 heures par défaut). Voir [Gestion des médias](/fr/settings/media-management/).

Si tu connais Sonarr : c'est la même idée que Wanted > Cutoff Unmet, avec une échelle de formats (M4B, MP3 et ainsi de suite, en un ou plusieurs fichiers) à la place des résolutions.
