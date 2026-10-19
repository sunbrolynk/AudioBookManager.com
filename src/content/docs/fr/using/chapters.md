---
title: Chapitres
description: Compare les chapitres intégrés d'un livre avec Libex et corrige-les.
---

:::caution[Prévu pour la prochaine version]
Tout ce qui est sur cette page, sauf les réglages par défaut des conversions, n'est pas encore dans une version publiée.
:::

La page de détail d'un livre affiche les chapitres que Libex connaît à côté des chapitres réellement intégrés dans tes fichiers. Libex sert de référence. La question à laquelle cette vue répond, c'est : est-ce que tes fichiers contiennent ce que Libex dit qu'ils devraient contenir ?

## Lire la comparaison

Chaque chapitre Libex reçoit un badge, une icône plus un mot :

- **Matches** : un chapitre intégré commence à moins de 2 secondes près et le titre est le même, sans tenir compte de la casse, des accents et de la ponctuation aux extrémités. « Chapter 1 » et « Chapter One » sont des titres différents.
- **Differs** : le titre est différent, ou le titre existe à proximité mais commence à plus de 2 secondes d'écart.
- **Missing** : aucun chapitre intégré ne lui correspond.
- **Extra** : un chapitre intégré auquel aucun chapitre Libex ne correspond.

Les livres en plusieurs fichiers sont mis bout à bout sur une seule ligne de temps, dans l'ordre des noms de fichiers. Un chapitre qui continue sur un autre fichier en « (cont.) » est relu comme un seul chapitre. Si Libex est injoignable, tu vois la liste des chapitres intégrés et une ligne qui explique pourquoi. La page ne plante jamais pour ça.

## Mauvaise édition

Les minutages de Libex ne collent qu'à l'édition qu'ils décrivent. Si la durée de ton audio diffère de celle de Libex de plus de 15 secondes ou de 0,5 pour cent, selon ce qui est le plus grand, un avertissement apparaît et **Update** comme **Create .cue** sont bloqués. Il n'y a aucun moyen de passer outre.

## Mettre à jour les chapitres intégrés

Remplace les chapitres de chaque fichier audio par ceux de Libex. Ça tourne comme une tâche de chapitres dans la [file de conversion](/fr/using/conversions/), sans réencodage. Ce n'est proposé que quand la comparaison indique « differs » ou « no embedded chapters ».

- Chaque fichier est réécrit dans un fichier temporaire, vérifié, puis mis à la place de l'original. La vérification exige qu'il soit lisible, pas plus court que l'original de plus de 0,5 seconde ou 1 pour cent, dans le même codec, et qu'il contienne exactement le nombre de chapitres demandé. Si la vérification échoue, l'original reste.
- Si une tâche s'arrête en cours de route, les fichiers déjà réécrits le restent. L'erreur indique « N of M files already updated ». Relance Update une fois la cause corrigée.
- Refusé dès le départ : une autre conversion du livre est en cours, pas d'ASIN ou pas de chapitres Libex, mauvaise édition, un fichier illisible, ou rien à mettre à jour.

## Créer un .cue

Écrit une feuille cue à partir des chapitres Libex dans le dossier du livre, nommée d'après le premier fichier audio. Elle écrase un fichier existant du même nom. Voir [Fichiers annexes](/fr/using/sidecars/).

## Pièges à éviter

- Les fichiers MP3 VBR sans en-tête de durée ont une durée estimée. Une édition correcte peut sembler décalée de quelques secondes.
- Un fichier réécrit apparaît comme modifié pour Audiobookshelf et il est rescanné.
- Les titres de chapitres qui contiennent `=`, `;`, `#` ou une barre oblique inversée peuvent être mal écrits tant qu'une correction n'est pas sortie.

## Le comportement par défaut des chapitres pour les conversions

Ça n'a rien à voir avec ce qui précède : **Settings > Conversions > Chapter Handling** décide de ce qu'une conversion fait des chapitres. Voir [Réglages des conversions](/fr/settings/conversions/).
