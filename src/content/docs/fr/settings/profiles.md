---
title: Profils
description: Profils de qualité, profils de délai et profils de release.
---

**Settings > Profiles** est une seule page avec trois sections. Elles répondent à trois questions différentes sur une sortie.

## Profils de qualité

Un profil de qualité est une échelle de formats, du pire en bas au meilleur en haut. Un échelon, c'est un format (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) en version un seul fichier ou plusieurs fichiers. Les échelons peuvent être groupés pour être classés à égalité, et un échelon peut être désactivé.

| Réglage | Signification |
|---|---|
| Upgrades Allowed | Si c'est désactivé, ABM ne remplace pas un livre une fois qu'il en a un |
| Upgrade Until | Le seuil. Une fois cette qualité atteinte, ABM arrête les mises à niveau |
| Grab off-ladder formats | Récupère un format qui n'est pas dans la liste plutôt que de sauter le livre |
| Default profile | Le profil utilisé quand rien de plus précis ne s'applique |

Un profil est celui par défaut. Un livre utilise, dans l'ordre, son propre profil, le profil de sa série principale, celui de son auteur principal, puis celui par défaut. Un profil utilisé ne peut pas être supprimé.

Une nouvelle copie ne remplace ce que tu as que si le profil autorise les mises à niveau, que le nouvel échelon est dans l'échelle et activé, que le livre est sous son seuil, et que le nouvel échelon est classé strictement plus haut.

Si tu connais Sonarr : c'est un profil de qualité où les qualités sont des formats audio et une organisation des fichiers, plutôt qu'une résolution. Les formats personnalisés n'existent pas. Les [profils de release](#profils-de-release) couvrent un terrain similaire.

Il n'y a pas de paliers de débit ou de taille : la qualité, c'est uniquement le format et l'organisation des fichiers. Pour une sortie, ABM prend le format depuis l'indexeur ou le titre et devine l'organisation à partir du titre (un M4B sans numéros de partie ou de piste compte comme un seul fichier), puis vérifie de nouveau une fois les fichiers importés. La **Preferred Quality** des [réglages Audible](/fr/settings/audible/), c'est autre chose : la qualité dans laquelle arrivent les téléchargements Audible.

## Profils de délai

Un profil de délai retient une sortie avant de la récupérer, pour laisser le temps à une meilleure sortie d'apparaître.

| Réglage | Signification |
|---|---|
| Enable Usenet / Enable Torrent | Autorise les récupérations avec ce protocole |
| Usenet Delay / Torrent Delay | Le nombre de minutes à attendre avant de récupérer une sortie de ce protocole |
| Preferred Protocol | Lequel préférer quand les deux trouvent une correspondance |
| Bypass if Highest Quality | Saute le délai quand une sortie atteint déjà le seuil du profil |
| Tags | Le profil ne s'applique qu'aux éléments qui ont un tag correspondant |

Les profils de délai sont affichés sous forme de tableau, comme dans Sonarr.

## Profils de release

Un profil de release ajoute des règles en plus de la qualité.

| Champ | Signification |
|---|---|
| Enable Profile | Activé ou désactivé |
| Must Contain | La sortie doit contenir au moins un des termes (sans tenir compte de la casse) |
| Must Not Contain | Une sortie qui contient l'un de ces termes est rejetée |
| Preferred | Des termes qui font monter ou descendre le score d'une sortie. Écris `/regex/` pour utiliser une expression régulière |
| Narration language | Limite à une langue |
| Indexer | S'applique à un indexeur, ou à n'importe lequel |
| Tags | Ne s'applique qu'aux éléments qui ont un tag correspondant |

Les profils de release sont affichés sous forme de tableau.

## Pièges à éviter

- Les profils ne suppriment jamais de fichiers. Ils décident de ce qu'il faut récupérer et de ce qui compte comme une mise à niveau.
- Les tags d'un profil de délai ou de release le limitent aux livres qui portent l'un de ces tags.
