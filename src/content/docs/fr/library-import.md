---
title: Import de bibliothèque
description: Fais entrer une collection existante dans ABM avec l'Import Workbench.
---

Library Import scanne un dossier de livres audio, fait correspondre chaque dossier à des métadonnées et ajoute les livres à ta bibliothèque. **Library > Library Import** ouvre « Import audiobooks you already have », où tu choisis un dossier à scanner. Une fois le scan lancé, ABM passe à la page de correspondance, intitulée **Match Audiobooks**, où tu vérifies les correspondances et ajoutes les livres.

## Le déroulement

1. Scanne un dossier. Chaque dossier qui contient de l'audio devient une ligne.
2. Vérifie les correspondances. Corrige celles qui en ont besoin.
3. Coche les lignes que tu veux, puis ajoute-les à la bibliothèque ou supprime-les.

Chaque option est un remplacement facultatif d'une valeur par défaut de Media Management.

## Quand une correspondance est acceptée

Le scan n'accepte une correspondance que si les fichiers la confirment :

- l'ASIN des tags des fichiers eux-mêmes trouve le livre, ou
- la durée du livre est à trois minutes au plus de celle des fichiers, et sa position dans la série ou son titre concorde avec eux.

Un auteur ou une position dans la série qui contredit les fichiers écarte un livre. Si les fichiers vont aussi bien à deux livres ou enregistrements différents, aucun n'est accepté.

La durée des fichiers ne compte que si chaque fichier du livre a pu être lu. Si l'un d'eux ne peut pas être mesuré, la ligne n'a pas de durée : seul son ASIN peut confirmer une correspondance, sinon le livre attend sous **Needs a look**.

Quand un livre existe en deux formats, chaque format est sa propre ligne et est mesuré à part. Un livre découpé en parties de formats différents forme une seule ligne quand il a son propre dossier, et ses parties sont additionnées. Un téléchargement terminé qui contient un livre en deux formats est mesuré comme une seule copie, et n'a pas de durée pour la correspondance si la durée des copies diffère de plus de trois minutes.

Seule une édition en anglais, ou une dont la fiche n'indique pas de langue, est acceptée sur la durée. Une édition dans une autre langue n'est acceptée que si l'ASIN des fichiers eux-mêmes la trouve. Un livre répondu depuis le [stockage local](/fr/settings/metadata/) au lieu d'une recherche en direct n'est jamais accepté sans toi.

Quand l'une des recherches d'une ligne échoue, seule une correspondance par ASIN est acceptée. Un livre trouvé seulement en cherchant l'auteur n'est proposé que si sa durée colle à celle des fichiers, donc un livre sans fiche affiche **Unmatched** au lieu de proposer un autre livre de l'auteur.

Toute autre correspondance reste proposée, mais la ligne compte sous **Needs a look**, commence décochée, et **Select All** la laisse de côté jusqu'à ce que tu confirmes cette correspondance ou en choisisses une autre. Une correspondance acceptée avec un livre déjà dans ta bibliothèque compte sous **In library**. Une ligne **Needs a look** dont la suggestion est un livre de la bibliothèque ne pose sa question sur la bibliothèque qu'une fois que tu as confirmé cette correspondance. D'ici là, si tu la coches, elle bloque Add comme une ligne qui attend encore une décision.

Un livre en plusieurs fichiers isolés qui partagent un dossier avec d'autres livres, comme un dossier d'auteur ou le dossier que tu scannes, forme une seule ligne avec toutes ses parties. Les fichiers qui diffèrent par un numéro de livre ou de volume restent des lignes séparées. Les parties sont regroupées par format : un fichier du livre entier à côté est une ligne à part, et un débit dans un nom de fichier, comme `128kbps`, n'est pas un numéro de partie.

Deux formats d'un même livre, comme `Book.mp3` et `Book.m4b`, sont des lignes séparées, que les fichiers soient en vrac dans le dossier que tu scannes ou dans un dossier de livre à eux. Chaque ligne importe, retire et mesure seulement son propre fichier. Une couverture, un cue ou un autre fichier non audio du même nom suit le fichier du livre quand le livre y est dans un seul format, et reste en place quand il y est dans deux. C'est vrai même quand une copie est déplacée dans la bibliothèque et que l'autre est retirée dans le même import.

Un tag écrit `Title: Series, Book 2` est lu comme le titre, la série et sa position.

Une position dans la série écrite comme une plage, comme `1-3`, correspond à toute position comprise dedans. Deux nombres écrits autrement, comme `1, 3`, comptent comme aucune position.

Un tag de titre, d'album, de série, de partie de série, d'artiste, d'artiste de l'album, de compositeur ou de narrateur de plus de 500 caractères est ignoré.

**Recent Import Sessions** sur la page Library Import montre pour chaque scan combien de lignes ont une correspondance, livres déjà dans la bibliothèque compris, et combien sont en attente, y compris les lignes où tu dois encore choisir une correspondance.

## Lire la liste

- Le résumé montre combien de dossiers ont été trouvés et combien sont prêts. La barre du haut a **Sort** (Folder name, Status, Title, Author, Series, Files) et **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Chaque filtre affiche son nombre, et les nombres correspondent au résumé. Une correspondance que tu as confirmée s'appelle Ready. Le tri et le filtre sont mémorisés sur cet appareil. Ils ne sont pas gardés dans l'adresse de la page, donc un lien avec `?sort=` ou `?filter=` ne les transmet pas.
- Chaque ligne affiche la couverture, le titre, l'auteur et la série, et le degré de certitude de la correspondance en pourcentage, comme « 95% match ». Les détails du dossier proposent **Find a match** ou **Change match** pour chercher à la main.
- Quand les fichiers n'ont ni ASIN ni durée pour confirmer l'édition, les détails du dossier le disent.
- **Rescan** prend en compte les dossiers ajoutés depuis le scan et garde tes choix.

Un ASIN trouvé dans un commentaire ou une description n'est qu'un indice. Il ne compte comme correspondance que si le titre concorde aussi avec le nom du dossier. Seul le tag ASIN dédié compte à lui seul.

## Réunir, séparer et ajouter

- Réunis les lignes qui sont un seul livre réparti sur plusieurs dossiers. Sépare-les de nouveau depuis les détails du dossier. La correspondance de la ligne réunie n'est qu'une suggestion : elle compte sous **Needs a look** et reste décochée jusqu'à ce que tu la confirmes ou en choisisses une autre. Sa durée est le total des parties seulement si chaque partie en a une, et elle ne garde un ASIN que si toutes les parties donnent le même. Un livre réuni à partir de deux formats aux mêmes noms de fichiers compte une seule fois : il prend la durée du format le plus long, ou aucune si elles diffèrent de plus de trois minutes. Une recherche qui se termine après que tu as réuni ou séparé sa ligne n'est aussi qu'une suggestion.
- **Confirm match** dans les détails d'une ligne coche une ligne **Needs a look**, et **Undo confirmation** retire cette coche.
- L'ajout est bloqué avec une raison affichée au-dessus du bouton, comme « Select at least one folder » ou « 2 selected rows still need a decision ». L'ajout est aussi refusé, sans rien toucher, quand deux lignes réclament le même dossier ou le même fichier.
- Tout ce qui retirerait ou remplacerait des fichiers demande d'abord.
- Quitter la page enregistre tes modifications en attente.

## Copier, déplacer ou lien physique

**Settings > Media Management > Importing** définit la valeur par défaut de Library Import : copier (par défaut), déplacer ou lien physique. Tu peux en choisir une autre pour chaque import.

Un livre en lien physique ne prend aucun espace disque en plus et l'original reste où il est. Le lien physique demande que le dossier racine par défaut le prenne en charge et qu'il ait été vérifié d'abord. Sinon, l'option est grisée avec la raison. Un fichier qui ne peut pas être lié, par exemple parce qu'il est sur un autre disque, est copié et jamais déplacé. L'import terminé indique combien de fichiers ont été copiés.

## Fichiers en plus

**Import Extra Files** (activé par défaut) emporte la couverture, les notes et les autres fichiers non audio d'un livre. Ça s'applique à la fois à Library Import, à Manual Import et aux téléchargements terminés. Avec **Show Advanced**, **Preferred Cover** choisit la couverture Audible correspondante (par défaut) ou celle du dossier.

## Valeurs longues

Un narrateur, un titre ou un chemin coupé par des points de suspension s'affiche en entier quand tu le touches ou que tu cliques dessus. Touche-le ou clique de nouveau pour le refermer. Avec une souris, le survoler affiche aussi la valeur entière. Au clavier, mets le focus dessus et appuie sur Entrée ou Espace.

## Autres réponses que l'import

Une ligne peut aussi recevoir la réponse **keep library** (refuser une copie d'un livre que la bibliothèque a déjà) ou **remove empty** (refuser un dossier sans audio qui contient encore des images et des fichiers annexes). Elles ne retirent que ce qui appartient à la ligne. **remove empty** refuse tout ce qui contient de l'audio. Les fichiers vont à la corbeille quand il y en a une de définie, et le journal de la tâche liste chaque chemin retiré. Une décision **keep library** ne vaut que pour le livre de la bibliothèque qu'elle concernait : si tu choisis une correspondance qui pose une autre question ou concerne un autre livre de la bibliothèque, la ligne redemande. L'import vérifie à nouveau au moment où il s'exécute, et rien n'est supprimé si la copie de la bibliothèque n'a plus de fichiers d'ici là ("Your library has no copy of this book to keep") ou si le dossier contient des fichiers d'un livre de ta bibliothèque ("This folder holds files of a book in your library"). Les lignes qui retirent des fichiers au lieu de les importer ne s'exécutent qu'une fois chaque import du même ajout terminé, et chacune est refusée si l'un de ses fichiers appartient à ce moment-là à un livre de ta bibliothèque. Elles ne retirent donc jamais des fichiers à partir desquels un livre du même lot vient d'être ajouté.

## Couverture et fichiers en plus par dossier

L'inspecteur affiche la couverture du dossier à côté de celle de l'édition correspondante, chacune avec sa taille en pixels. Un clic choisit l'autre. En dessous, **Extra files** liste tous les autres fichiers sous le nom de l'interrupteur de Media Management qu'ils suivent. Un point marque un choix qui diffère des réglages, et **Apply this cover and these file choices to the N other selected** copie les choix d'un dossier sur les autres. Une ligne qui ajoute des fichiers à un livre déjà dans la bibliothèque n'a pas de sélecteur.

Voir aussi [Faire entrer une bibliothèque](/fr/guides/moving-a-library-in/) et [Gestion des médias](/fr/settings/media-management/).
