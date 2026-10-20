---
title: Journal d'activité et événements
description: Le registre de ce qui s'est passé, et en quoi il diffère des journaux.
---

ABM garde trois sortes de registres.

| Où | Ce que c'est |
|---|---|
| **System > Events** et **System > Activity Log** | Le journal d'activité : une liste en base de données de ce qui s'est passé. Events en est la vue filtrée par gravité. Activity Log (intitulé Activity History) filtre par catégorie, cherche dans le message et montre l'état avant et après |
| **System > Log Files** | Les fichiers journaux texte, avec tout le détail. Voir [Journaux](/fr/system/logs/) |
| **Activity > History** | L'historique des téléchargements uniquement. Voir [Activité](/fr/using/activity/) |

## Ce qui est enregistré

Les tâches en arrière-plan terminées (une ligne de résumé chacune), les modifications manuelles des clients, indexeurs, profils, tags, notifications, dossiers racine et ainsi de suite, les récupérations (avec qui les a lancées), les conversions, les échecs de téléchargement Audible, les sauvegardes, les connexions et les connexions échouées, et une étape de démarrage qui a échoué.

Catégories : Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security et System.

## Confidentialité

Les entrées ne contiennent jamais d'URL, d'hôtes, de noms d'utilisateur, de mots de passe, de clés, de jetons ni le texte d'erreur brut d'un client ou d'un service. Les objets sont désignés par le nom que tu leur as donné. Les enregistrements de réglages listent quels réglages ont changé, pas leurs valeurs. Les connexions ne stockent que l'adresse IP. Les connexions échouées depuis une même adresse en moins de 15 minutes sont regroupées en une seule ligne avec un nombre de tentatives.

## Discret par conception

Une exécution planifiée qui n'a rien eu à faire n'écrit rien. La répétition d'un même échec n'écrit rien, mais un rétablissement, si. Une exécution manuelle est toujours enregistrée.

## Conservation

**Activity Log Retention** dans General supprime les entrées au bout de 90 jours par défaut. 0 les garde. Les fichiers journaux ont leur propre rétention (30 jours).

## Voir le journal

:::caution[Prévu pour une version ultérieure]
Les liens « View log » depuis les entrées ne sont pas encore dans une version publiée.
:::

Les entrées renvoient au journal dont elles viennent et l'ouvrent à la bonne ligne. Si le journal n'existe plus, l'entrée affiche « Log no longer kept ».
