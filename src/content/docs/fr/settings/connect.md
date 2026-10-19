---
title: Notifications (Connect)
description: Notifications, serveurs multimédias et scripts personnalisés.
---

**Settings > Connect** envoie des événements vers d'autres endroits. La page s'appelle Connect, comme dans Sonarr.

## Agents

**Agents de notification** : Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook et Apprise. **Serveurs multimédias** : Jellyfin et Emby. **Autres** : Custom Script. Audiobookshelf n'est pas un agent Connect.

## Événements

Chaque connexion choisit les événements qui la déclenchent.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Par connexion

| Champ | Effet |
|---|---|
| Name, Enable | Nom affiché et activé/désactivé |
| Include covers | Joint la couverture du livre quand l'agent le permet |
| Tags | Ne se déclenche que pour les éléments qui ont un tag correspondant |
| Conditions | Des règles combinées par un ET sur des champs comme l'auteur ou la taille. Une condition mal formée laisse passer plutôt que de faire taire une alerte |
| Priority | Là où l'agent le gère |

**Test** envoie un message de test. **Test All** teste toutes les connexions.

## Messages personnalisés

Un message personnalisé réécrit le texte d'un événement. Choisis un **Format**, une **Cover** (Auto utilise la couverture du livre, None, ou une Custom URL), écris le **Title** et le corps, et clique sur une variable pour l'insérer. Le modèle par défaut de chaque événement sert de point de départ. L'aperçu montre le résultat, et tu peux envoyer un test via une connexion.

## Pièges à éviter

- Les secrets comme les jetons sont stockés chiffrés, vides quand tu modifies la connexion, et conservés si tu les laisses vides. Changer la destination oblige à les ressaisir.
- Une alerte de tâche en échec liée à une panne de métadonnées part une fois par panne, pas une fois par échec, et une exécution planifiée n'en envoie jamais.
- Les en-têtes du Webhook sont un objet JSON et sont stockés comme un secret.
