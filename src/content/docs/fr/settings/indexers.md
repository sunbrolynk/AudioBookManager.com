---
title: Indexeurs
description: Newznab, Torznab, MyAnonamouse et Prowlarr.
---

**Settings > Indexers** liste les endroits où ABM cherche des sorties.

## Types

Newznab (usenet), Torznab (torrent), MyAnonamouse, et une connexion Prowlarr qui synchronise les indexeurs depuis Prowlarr.

## Champs

| Champ | S'applique à | Effet |
|---|---|---|
| Name | tous | Nom affiché |
| Enable RSS | tous | Inclus dans la synchronisation RSS |
| Enable Automatic Search | tous | Utilisé pour les recherches lancées par ABM |
| Enable Interactive Search | tous | Utilisé quand tu cherches à la main |
| URL, API Path, API Key | Newznab, Torznab | Où et comment se connecter. Les identifiants vont dans le champ, jamais dans l'URL |
| Categories | Newznab, Torznab | Les catégories dans lesquelles chercher |
| Cookie (mam_id) | MyAnonamouse | Cookie de session |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only ou Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Élargit la recherche |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Limites des sorties et objectifs de partage |
| Indexer Priority | tous | De 1 (la plus haute) à 50 (la plus basse), 25 par défaut. Quand la même sortie vient de deux indexeurs, le plus petit numéro gagne |
| Download Client | tous | Envoie les récupérations de cet indexeur à un seul client. (Any) utilise n'importe lequel |
| Tags | tous | N'utilise cet indexeur que pour les éléments qui ont un tag correspondant |

Une clé d'API ou un cookie enregistré n'est plus jamais affiché. Laisse le champ vide lors d'une modification pour le garder. Changer l'URL oblige à ressaisir le secret, pour qu'une clé ne puisse pas être envoyée par erreur à une nouvelle adresse.

## Options

Elles s'appliquent à tous les indexeurs, donc respecte les règles propres à chaque indexeur.

| Réglage | Par défaut | Effet |
|---|---|---|
| Minimum Age | 0 (minutes) | Ignore les sorties usenet plus récentes que ça |
| Retention | 0 (jours) | Ignore les sorties plus anciennes que ça. 0, c'est sans limite |
| Maximum Size | 0 (Mo) | 0, c'est sans limite |
| RSS Sync Interval | 15 (minutes) | La fréquence d'interrogation du RSS |

La liste MAM peut aussi alimenter les [listes d'import](/fr/settings/import-lists/).

Si tu connais Sonarr : c'est la même séparation entre RSS, recherche automatique et recherche interactive par indexeur. Il n'y a pas de « test all » séparé pour les catégories.
