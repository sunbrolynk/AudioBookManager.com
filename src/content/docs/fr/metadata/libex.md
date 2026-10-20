---
title: Libex
description: D'où viennent les données des livres dans ABM.
---

ABM récupère les données des livres, des auteurs, des séries et des chapitres auprès de **Libex**, un service ouvert de métadonnées Audible qui est un projet à part. Libex est la source. Ce qui compte pour toi, c'est ce qu'ABM fait des données une fois qu'il les a, et à quel point tu en gardes le contrôle. C'est le sujet du reste de cette section.

Libex: [Code source](https://github.com/LibexHQ/Libex) · [Référence de l'API](https://libexdb.com/redoc)

ABM interroge l'instance publique de Libex sur libexdb.com. Un choix de source est prévu pour une version ultérieure.

Quand Libex est injoignable, ABM le dit et nomme la source. Tu peux quand même ajouter et importer des livres à la main. Voir [Dépannage](/fr/troubleshooting/#la-source-de-métadonnées-est-indisponible).
