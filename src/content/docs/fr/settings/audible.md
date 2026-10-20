---
title: Réglages Audible
description: Comptes, planning de synchronisation, téléchargements et diagnostics.
---

**Settings > Audible** sert à connecter les comptes et à régler la synchronisation et les téléchargements. Le fonctionnement de la fonctionnalité est expliqué sur la page [Audible](/fr/audible/).

## Comptes

Pour connecter un compte, il faut un **Marketplace**, un **Display Name** et la **Redirect URL** qu'Amazon renvoie après ta connexion. Chaque compte garde sa propre bibliothèque. Si un compte doit se reconnecter, reconnecte-toi sur le même compte au lieu de le supprimer. Le supprimer efface sa bibliothèque et retire son appareil d'Audible.

## Planning

| Réglage | Effet |
|---|---|
| Auto Sync | Synchronise la bibliothèque selon un planning |
| Sync on Account Add | Synchronise dès qu'un compte est connecté |
| Frequency | Quotidien, hebdomadaire ou mensuel. Hebdomadaire ajoute Day of Week. Mensuel ajoute Day of Month (1-28). |
| Time | Heure et minute |
| Use CRON Expression | Une expression cron personnalisée remplace les options ci-dessus |

## Réglages de téléchargement (Download Settings)

| Réglage | Par défaut | Effet |
|---|---|---|
| Mirror Audible library to ABM | activé | Chaque synchronisation ajoute les livres Audible qui ne sont pas encore dans ABM et télécharge ceux qui n'ont pas de fichiers, jusqu'à 25 par synchronisation. À l'activation, tu vois combien de livres la prochaine synchronisation ajoutera et téléchargera. Voir [Refléter la bibliothèque Audible dans ABM](/fr/audible/#faire-un-miroir-de-la-bibliothèque-audible-dans-abm) |
| Concurrent Downloads | 2 | De 1 à 5. Plus haut, c'est plus rapide, mais ça peut toucher les limites de débit d'Audible. |
| Preferred Quality | High | High ou Normal |
| Delete Encrypted Files | activé | Supprime le fichier AAXC chiffré une fois déchiffré en M4B |
| Temp Download Path | vide | Vide, c'est le dossier temporaire du système |

Les téléchargements en échec sont retentés automatiquement quelques fois, avec un délai qui s'allonge, et une panne qui dure plus longtemps que ça remet la tâche en file pendant jusqu'à six heures. Un refus de licence, un livre que tu ne possèdes pas ou un échec de déchiffrement échoue une seule fois.

## Diagnostics de connexion (Connection Diagnostics)

Choisis un compte et lance les diagnostics. Ils testent FFmpeg, les identifiants, la connexion à l'API et la possibilité de télécharger, et affichent ton IP sortante telle qu'Audible la voit.
