---
title: Ajouter un livre
description: Cherche un livre et ajoute-le comme wanted.
---

**Library > Add New** cherche des livres sur Libex et ajoute ceux que tu choisis. La recherche porte sur le titre, l'auteur, la série ou un ASIN.

## Ce que fait l'ajout

Un livre ajouté passe en **Wanted** dans le dossier racine et le profil de qualité que tu as choisis, et ABM commence à le chercher selon le réglage de surveillance. Un livre déjà présent dans la bibliothèque n'est détecté que par son ASIN. Une autre édition du même titre a un autre ASIN.

## Recherche par auteur et par série

:::caution[Prévu pour la prochaine version]
Les modes de recherche Author et Series ne sont pas encore dans une version publiée.
:::

La recherche gagne deux modes qui trouvent directement les auteurs et les séries. Les anciens modes de recherche de livres sont renommés « Books by author » et « Books in series ». Ajouter un auteur ou une série construit son catalogue et ajoute ses livres comme wanted selon **Monitor** :

| Monitor | Ajoute |
|---|---|
| All | Chaque livre, y compris ceux pas encore sortis |
| Future | Seulement les livres qui sortent à partir de maintenant |
| Missing (par défaut) | Les livres que tu ne possèdes pas |
| None | Seulement le catalogue |

Tu choisis aussi le dossier racine, le profil de qualité et si les livres qui apparaîtront plus tard doivent être ajoutés aussi. C'est activé par défaut pour une série et désactivé pour un auteur. Un auteur ou une série déjà dans ta bibliothèque affiche « In Library » avec une action **Add missing books**.

L'ajout tourne comme une tâche en arrière-plan, avec une notification de progression.

## Si la recherche ne renvoie rien

Une recherche qui n'obtient aucune réponse de la source de métadonnées échoue avec une erreur au lieu d'une liste vide. Voir [Dépannage](/fr/troubleshooting/#la-source-de-métadonnées-est-indisponible).
