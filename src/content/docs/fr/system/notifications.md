---
title: Notifications
description: La cloche dans l'en-tête et le panneau en dessous.
---

La cloche de l'en-tête sur ordinateur te dit ce qui s'est passé et ce qui a besoin de toi. Clique dessus pour ouvrir le panneau de notifications. Il n'y a pas encore de cloche sur téléphone.

## La cloche

- Le nombre sur la cloche est celui des notifications non lues. Il affiche 99+ au-delà de 99. Quand une notification non lue est une erreur, le nombre devient rouge.
- Un anneau autour de la cloche indique un travail en cours. Quand ABM sait où il en est, l'anneau se remplit à la moyenne des éléments en cours. Sinon, il tourne simplement.
- Une nouvelle notification fait clignoter brièvement la cloche à la couleur de son niveau. Si le mouvement réduit est activé sur ton système, ce clignotement est supprimé.
- Si le navigateur perd sa connexion en direct avec ABM pendant plus de 10 secondes, la cloche devient une cloche barrée avec un anneau en pointillés. Elle revient quand la connexion revient.

Le nom accessible de la cloche énonce les mêmes choses : le nombre de non lues, combien d'éléments tournent et leur pourcentage, et si elle est hors ligne.

## Le panneau

De haut en bas :

- **Needs attention** n'apparaît que lorsqu'il y a quelque chose d'ouvert. Ce sont des choses qui restent jusqu'à ce qu'elles soient réglées, comme un livre dont le téléchargement a échoué ou une nouvelle version d'ABM. Chacune a un bouton : **Search again** met en file une recherche pour ce livre, et **What's new** ouvre la page Updates. D'autres ouvrent la page concernée, ou la tâche quand elle peut être reprise. Le **x** d'une ligne la masque.
- **Running** liste le travail en cours : tâches, téléchargements et conversions, avec la progression et le temps restant quand on les connaît. Clique sur une ligne pour y aller.
- **Recent** montre les notifications les plus récentes d'abord, avec le nombre de non lues. Un clic ouvre ce qu'elle concerne et la marque comme lue. Une ligne a aussi des boutons pour la marquer comme lue ou non lue et la supprimer.
- **Load older** affiche plus d'historique. Quand il n'y a rien de plus ancien, le panneau le dit.

Quand les trois sont vides, le panneau dit que tu es à jour.

Le pied a **Mark all read** et un lien vers le [journal d'activité](/fr/system/activity-log/). Le menu à côté du titre du panneau a **Clear all**, qui demande d'abord confirmation. Il supprime toutes les notifications sauf celles qui ont encore besoin d'attention. Celles-ci restent jusqu'à ce que tu les règles ou les masques.

## Ce qui n'est pas enregistré

Une notification peut venir d'une tâche en arrière-plan, d'un téléchargement ou d'une conversion, ou de quelque chose que tu as fait dans le navigateur et qui a échoué. Les commandes du panneau lui-même font exception. Si marquer comme lu, supprimer, masquer, tout effacer ou charger plus ancien échoue, le panneau montre l'erreur à côté de la commande et n'ajoute aucune notification à ce sujet. Sinon une boîte cassée remplirait la boîte.

## Résultats sur la commande

Les actions sur Library, Book Detail, Calendar, Authors et Series, ainsi que les actions de couverture, montrent leur résultat sous forme de courte ligne sur la commande utilisée. Une simple ligne de réussite s'efface toute seule au bout de quelques secondes. Un échec ou un avertissement reste jusqu'à ta prochaine action sur cette commande. Les échecs sont aussi enregistrés dans Notifications, tu peux donc les retrouver une fois la ligne disparue.

Un livre, un auteur ou une série enregistrés dont le catalog fill ne démarre pas enregistre l'avertissement « Catalog fill not started ». Un add all où certains livres échouent enregistre « Some books were not added » avec les raisons.

## Conservation

Les anciennes notifications sont supprimées par le nettoyage quotidien des journaux, au bout de **30 jours** par défaut. Règle-le avec **Notifications Retention** sur la page [Général](/fr/settings/general/), ou `inbox_retention_days` dans l'[API](/fr/system/api/). 0 les garde pour toujours. Les notifications qui ont encore besoin d'attention ne sont pas supprimées tant que tu ne les as pas réglées. Le nettoyage tourne une fois par jour à l'heure de nettoyage (03:00 par défaut) et ne fait rien quand **Automatic Cleanup** est désactivé. La note en bas du panneau montre le nombre de jours actuel et disparaît quand la conservation est à 0.

## Différence avec le journal d'activité

Les notifications sont ce qu'on te dit, et tu peux les effacer. Le [journal d'activité](/fr/system/activity-log/) est la trace permanente de ce qui s'est passé, et vider Notifications n'y touche pas.
