---
title: Import de bibliothèque
description: Fais entrer une collection existante dans ABM avec l'Import Workbench.
---

Library Import scanne un dossier de livres audio, fait correspondre chaque dossier à des métadonnées et ajoute les livres à ta bibliothèque. La page s'appelle **Match Audiobooks**.

## Le déroulement

1. Scanne un dossier. Chaque dossier qui contient de l'audio devient une ligne.
2. Vérifie les correspondances. Corrige celles qui en ont besoin.
3. Sélectionne les lignes et ajoute-les à la bibliothèque.

Chaque option est un remplacement facultatif d'une valeur par défaut de Media Management. Un simple scan suivi d'un ajout ne demande jamais plus de deux clics.

## Lire la liste

- Le résumé montre combien de dossiers ont été trouvés et combien ont une correspondance. Filtre la liste par All, Matched, Needs attention, Unmatched, In library ou Failed lookup. Le filtre est gardé dans l'adresse de la page.
- Chaque ligne affiche la couverture, le titre, l'auteur et la série, et le degré de certitude de la correspondance en pourcentage, comme « 95% match ». Les détails du dossier proposent **Find a match** ou **Change match** pour chercher à la main.
- Quand les fichiers n'ont ni ASIN ni durée pour confirmer l'édition, les détails du dossier le disent.
- **Rescan** prend en compte les dossiers ajoutés depuis le scan et garde tes choix.

Un ASIN trouvé dans un commentaire ou une description n'est qu'un indice. Il ne compte comme correspondance que si le titre concorde aussi avec le nom du dossier. Seul le tag ASIN dédié compte à lui seul.

## Réunir, séparer et ajouter

- Réunis les lignes qui sont un seul livre réparti sur plusieurs dossiers. Sépare-les de nouveau depuis les détails du dossier.
- L'ajout est bloqué avec une raison affichée au-dessus du bouton, comme « Select at least one folder » ou « 2 selected rows still need a decision ».
- Tout ce qui retirerait ou remplacerait des fichiers demande d'abord.
- Quitter la page enregistre tes modifications en attente.

## Copier, déplacer ou lien physique

**Settings > Media Management > Importing** définit la valeur par défaut de Library Import : copier (par défaut), déplacer ou lien physique. Tu peux en choisir une autre pour chaque import.

Un livre en lien physique ne prend aucun espace disque en plus et l'original reste où il est. Le lien physique demande que le dossier racine par défaut le prenne en charge et qu'il ait été vérifié d'abord. Sinon, l'option est grisée avec la raison. Un fichier qui ne peut pas être lié, par exemple parce qu'il est sur un autre disque, est copié et jamais déplacé. L'import terminé indique combien de fichiers ont été copiés.

## Fichiers en plus

**Import Extra Files** (activé par défaut) emporte la couverture, les notes et les autres fichiers non audio d'un livre. Ça s'applique à la fois à Library Import, à Manual Import et aux téléchargements terminés. Avec **Show Advanced**, **Preferred Cover** choisit la couverture Audible correspondante (par défaut) ou celle du dossier.

## Valeurs longues

Un narrateur, un titre ou un chemin coupé par des points de suspension s'affiche en entier quand tu le touches ou que tu appuies sur Entrée ou Espace. Touche de nouveau pour le refermer.

## Autres réponses que l'import

Une ligne peut aussi recevoir la réponse **keep library** (refuser une copie d'un livre que la bibliothèque a déjà) ou **remove empty** (refuser un dossier sans audio qui contient encore des images et des fichiers annexes). Elles ne retirent que ce qui appartient à la ligne. Tout ce qui contient de l'audio est refusé. Les fichiers vont à la corbeille quand il y en a une de définie, et le journal de la tâche liste chaque chemin retiré.

## Couverture et fichiers en plus par dossier

L'inspecteur affiche la couverture du dossier à côté de celle de l'édition correspondante, chacune avec sa taille en pixels. Un clic choisit l'autre. En dessous, **Extra files** liste tous les autres fichiers sous le nom de l'interrupteur de Media Management qu'ils suivent. Un point marque un choix qui diffère des réglages, et **Apply this cover and these file choices to the N other selected** copie les choix d'un dossier sur les autres. Une ligne qui ajoute des fichiers à un livre déjà dans la bibliothèque n'a pas de sélecteur.

Voir aussi [Faire entrer une bibliothèque](/fr/guides/moving-a-library-in/) et [Gestion des médias](/fr/settings/media-management/).
