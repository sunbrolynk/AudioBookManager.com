---
title: Ajouter un livre
description: Cherche un livre et ajoute-le comme wanted.
---

**Library > Add New** cherche des livres sur Libex et ajoute ceux que tu choisis. La recherche porte sur le titre, l'auteur, la série ou un ASIN. Une recherche en mode **Title** affiche d'abord **Best matches**, les meilleures correspondances de Libex pour ce que tu as tapé. Viennent ensuite les résultats par titre, sans les livres déjà listés là, 50 à la fois. Les 50 suivants se chargent quand tu fais défiler ou avec **Load more**, jusqu'à ce que Libex n'en ait plus, 500 au maximum.

## Ce que fait l'ajout

Un livre ajouté passe en **Wanted** dans le dossier racine et le profil de qualité que tu as choisis, et ABM commence à le chercher selon le réglage de surveillance. Un livre déjà présent dans la bibliothèque n'est détecté que par son ASIN. Une autre édition du même titre a un autre ASIN.

## Recherche par auteur et par série

La recherche a des modes pour Title, Author, Series, Books by author, Books in series et ASIN. Author et Series trouvent les auteurs et les séries eux-mêmes ; Books by author et Books in series trouvent des livres. Ajouter un auteur ou une série construit son catalogue et ajoute ses livres comme recherchés selon **Monitor** :

| Monitor | Ajoute |
|---|---|
| All | Chaque livre, y compris ceux pas encore sortis |
| Future | Seulement les livres qui sortent à partir de maintenant |
| Missing (par défaut) | Les livres que tu ne possèdes pas |
| None | Seulement le catalogue |

Tu choisis aussi le dossier racine, le profil de qualité et si les livres qui apparaîtront plus tard doivent être ajoutés aussi. C'est activé par défaut pour une série et désactivé pour un auteur. Un auteur ou une série déjà dans ta bibliothèque affiche « In Library » avec une action **Add missing books**.

L'ajout tourne comme une tâche en arrière-plan, avec une notification de progression. Si un livre, un auteur ou une série est enregistré mais que son catalog fill ne démarre pas, un avertissement est enregistré dans [Notifications](/fr/system/notifications/). Add all fait pareil quand certains livres échouent, avec les raisons.

## Si la recherche ne renvoie rien

Une recherche qui n'obtient aucune réponse de la source de métadonnées échoue avec une erreur au lieu d'une liste vide. Voir [Dépannage](/fr/troubleshooting/#la-source-de-métadonnées-est-indisponible).
