---
title: Connexion à Audiobookshelf
description: Connecte ABM à ton serveur Audiobookshelf.
---

:::caution[Disponible dans une prochaine version]
La page de réglages correspondante n'est dans aucune version publiée pour l'instant. La connexion peut déjà être enregistrée, testée et supprimée via l'API, mais rien d'autre dans ABM ne l'utilise encore.
:::

Audiobookshelf (ABS) est le serveur sur lequel tu écoutes. ABM s'y connecte avec l'URL du serveur et une clé API créée pour un utilisateur ABS.

## Version

ABM demande ABS 2.37.0 ou plus récent et est testé sur 2.37.2. Un serveur plus ancien est refusé. Un serveur plus récent donne un avertissement, car ABM n'a pas été testé dessus.

## Le compte

La clé API appartient à un utilisateur ABS. ABM vérifie cet utilisateur quand tu enregistres ou que tu testes.

- **Refusé tant que ce n'est pas corrigé :** l'utilisateur doit être admin ou root, et avoir la permission Update, l'accès à toutes les bibliothèques, à tous les tags et au contenu explicite.
- **Avertissement, mais l'enregistrement a lieu :** Upload est désactivé (ABM ne peut pas gérer les couvertures) ou Delete est désactivé (un livre que tu supprimes dans ABM reste dans ABS tant que tu ne l'actives pas).

## Comment ABM joint ABS

ABM se connecte toujours directement à ABS. Il ne passe jamais par le VPN ou le proxy que tu as choisi dans [Network](/settings/network/). L'URL du serveur est vérifiée avant l'enregistrement, et une URL dangereuse est refusée.

## La clé API

La clé est stockée chiffrée et n'est plus jamais affichée. Laisse le champ vide quand tu enregistres ou testes pour garder la clé enregistrée. Une clé enregistrée n'est envoyée qu'à l'adresse pour laquelle elle a été enregistrée : si tu changes l'URL, le réglage TLS ou le bundle CA, saisis de nouveau la clé.

## Vérifier TLS

Les certificats sont vérifiés par défaut. Si ton serveur utilise un certificat de ta propre autorité, indique le chemin de son bundle CA au lieu de désactiver la vérification.

## Test et Disconnect

**Test** vérifie un serveur sans l'enregistrer : la version, les permissions de l'utilisateur et ses bibliothèques. Enregistrer une connexion activée lance d'abord les mêmes vérifications et est refusé si une vérification d'erreur échoue. Une connexion enregistrée désactivée n'est pas vérifiée. **Disconnect** supprime la connexion enregistrée et sa clé.

## System Status

Quand une connexion est activée, [System > Status](/system/status/) affiche une ligne AudioBookShelf avec le résultat de la dernière vérification. Elle est mise à jour à l'enregistrement et par la vérification de santé périodique, toutes les 6 heures. Ce n'est donc pas un sondage en direct à chaque ouverture de la page.

## Ce qu'ABM supprime

ABM ne supprime jamais que la fiche du livre dans ABS. Il ne supprime jamais définitivement de fichiers.
