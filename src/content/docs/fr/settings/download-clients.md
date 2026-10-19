---
title: Clients de téléchargement
description: Clients pris en charge, gestion des téléchargements terminés et correspondances de chemins distants.
---

**Settings > Download Clients** connecte le programme qui fait les téléchargements.

## Clients pris en charge

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet et Blackhole (un dossier surveillé). C'est la liste complète.

## Champs

Les champs affichés dépendent du client.

| Champ | Effet |
|---|---|
| Name | Nom affiché |
| Host, Port, URL Base | Là où le client écoute |
| Use SSL, Verify TLS certificate | HTTPS et vérification ou non du certificat |
| Username, Password, API Key | Identifiants. Un secret enregistré n'est jamais affiché |
| Category | La catégorie ou le label qu'ABM met sur ses téléchargements, par exemple `audiobooks` |
| Watch Folder, Directory | Blackhole : où déposer les fichiers et où les fichiers terminés apparaissent |
| Client Priority | Quel client gagne quand plusieurs conviennent |
| Remove from Client, Also Delete Files, Remove Failed | Ce qu'ABM retire du client après un import ou un échec |
| Queue Page Remove Action | Ce que fait le retrait d'une ligne sur la page Queue : l'ignorer dans ABM seulement, la retirer du client en gardant les fichiers, ou la retirer en supprimant les fichiers |

**Test** vérifie la connexion. Un client désactivé n'est pas un client en mauvaise santé. Un client en échec est retenté avec un délai croissant.

## Gestion des téléchargements terminés

| Réglage | Par défaut | Effet |
|---|---|---|
| Enable | activé | Importe automatiquement les téléchargements terminés |
| Redownload Failed | activé | Met une sortie en échec dans la liste de blocage et relance une recherche |
| Redownload Failed from Interactive Search | activé | Pareil, pour les sorties que tu as choisies à la main |

Le choix entre liens physiques et copie pour les imports se fait avec **Use Hardlinks instead of Copy** dans [Gestion des médias](/fr/settings/media-management/). Si le dossier du client n'est pas au même chemin que celui que voit ABM, ajoute une correspondance de chemin distant.

## Correspondances de chemins distants

Quand le client indique `/downloads/audiobooks` et qu'ABM le voit comme `/data/audiobooks`, ajoute une correspondance.

| Champ | Effet |
|---|---|
| Host | L'hôte du client concerné par la correspondance |
| Remote Path | Le chemin tel que le client l'indique |
| Local Path | Le même dossier tel qu'ABM le voit |

## Pièges à éviter

- Un sous-dossier illisible dans un téléchargement terminé bloque complètement l'import de ce téléchargement. Rien n'est retiré du client, et c'est retenté plus tard.
- Docker : monte le dossier des téléchargements au même chemin dans les deux conteneurs quand tu peux. Les correspondances sont la solution de repli.
