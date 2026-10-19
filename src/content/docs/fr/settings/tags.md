---
title: Tags
description: Les tags et les règles de tag automatique.
---

**Settings > Tags** gère les tags et l'**Auto Tagging**.

## Tags

Un tag, c'est un seul mot : en minuscules, sans espaces, sans virgules, jusqu'à 100 caractères. Saisir `Sci-Fi` donne `sci-fi`. Les tags se posent sur les livres, les auteurs et les séries, et ils sont utilisés par les indexeurs, les profils de délai et de release, les listes d'import, les agents Connect et le flux du calendrier.

Si tu connais Sonarr : les tags fonctionnent de la même façon. Un profil avec un tag ne s'applique qu'aux éléments qui le portent.

## Tags automatiques

Un tag automatique est une règle qui pose des tags sur les livres qui correspondent.

| Champ | Effet |
|---|---|
| Name | Nom affiché |
| Enable | Activé ou désactivé |
| Remove Tags Automatically | Quand un livre ne correspond plus, retire les tags |
| Tags | Ce qu'il faut poser |
| Conditions | Ce à quoi un livre doit correspondre. Chacune peut être inversée ou rendue obligatoire |

Types de condition : Genre, Monitored, Language, Root Folder, Status, Tag, Year (plage), Series Type, Author (contient), Narrator (contient), Runtime en minutes (plage) et Rating (plage).

**Apply** lance tout de suite les règles sélectionnées. Les règles tournent aussi quand des livres changent.

## Pièges à éviter

- Une règle qui fait référence à un tag ou un dossier racine supprimé est entièrement sautée, dans les deux sens, pour qu'une règle cassée ne pose jamais de mauvais tags et n'en retire pas non plus.
- Remove Tags Automatically ne retire que les tags que cette règle ajouterait.
