---
title: Connexion à Audiobookshelf
description: Connecte ABM à ton serveur Audiobookshelf.
---

Audiobookshelf (ABS) est le serveur sur lequel tu écoutes. Connecte ABM dans **Settings > Audiobookshelf**, sur ordinateur comme sur téléphone. Tu donnes l'adresse du serveur et une clé API créée pour un utilisateur ABS.

## Connexion

- **Enable:** Laisse ABM utiliser le serveur. Quand tu enregistres avec cette option, ABM vérifie d'abord le serveur et refuse d'enregistrer si une vérification de niveau erreur échoue. La page affiche les raisons. Une connexion enregistrée désactivée n'est pas vérifiée.
- **Server address:** L'adresse où ton serveur ABS répond, par exemple `http://192.168.1.20:13378`. Si ABS tourne sur la même machine qu'ABM, utilise l'adresse LAN de cette machine, ou le nom ou l'IP du conteneur si les deux tournent dans Docker.
- **API key:** Une clé API d'un utilisateur admin dans ABS.
- **Verify TLS certificate:** Activé par défaut. Si ton serveur utilise un certificat de ta propre autorité, indique le chemin de son bundle CA dans **CA bundle path** au lieu de désactiver la vérification. Laisse le chemin vide pour utiliser les certificats du système.
- **Test:** Lance les vérifications sur ce qui est à l'écran, sans rien enregistrer.
- **Disconnect:** Te demande confirmation, puis supprime l'adresse et la clé enregistrées.

## Comment ABM joint ABS

ABM se connecte toujours directement à ABS. Il ne passe jamais par le VPN ou le proxy choisi dans [Network](/settings/network/). L'adresse est vérifiée avant l'enregistrement, et une adresse dangereuse est refusée. Une adresse qui pointe vers la machine sur laquelle tourne ABM, une adresse link-local et une adresse de métadonnées cloud sont refusées, tout comme un nom qui se résout vers l'une d'elles. Tes propres adresses LAN sont acceptées, c'est pourquoi un ABS sur la même machine demande l'adresse LAN de la machine ou le nom ou l'IP de son conteneur.

## La clé API

La clé est stockée chiffrée et n'est plus jamais affichée. Laisse le champ vide à l'enregistrement ou au test pour garder la clé enregistrée. Une clé enregistrée n'est envoyée qu'à l'adresse pour laquelle elle a été enregistrée : si tu changes l'adresse, Verify TLS ou le bundle CA, saisis de nouveau la clé. Si ABM ne peut plus lire la clé enregistrée (la clé de chiffrement a été perdue ou changée), la page te dit de la saisir de nouveau, même quand la connexion est désactivée.

## Ce qui est vérifié

**Version.** ABM demande ABS 2.37.0 ou plus récent et est testé sur 2.37.2. Un serveur plus ancien, ou qui ne signale pas une version qu'ABM comprend, échoue avec une erreur. Un serveur plus récent donne un avertissement, car ABM n'a pas été testé dessus.

**Le compte.** La clé API appartient à un utilisateur ABS, et ABM vérifie cet utilisateur.

- **Erreur tant que ce n'est pas corrigé :** l'utilisateur doit être admin ou root, et avoir la permission Update, l'accès à toutes les bibliothèques, à tous les tags et au contenu explicite.
- **Avertissement, enregistré quand même :** Upload est désactivé (ABM ne peut pas posséder les couvertures), ou Delete est désactivé (un livre supprimé dans ABM reste dans ABS jusqu'à ce que tu l'actives).

## Statut

La section Status affiche l'état de la dernière vérification (Not connected, OK, Warning ou Error), la version du serveur, l'utilisateur auquel appartient la clé, le moment de la dernière vérification et les vérifications elles-mêmes. Une vérification échouée affiche sa raison, et celles réussies sont comptées.

[System > Status](/system/status/) a aussi une ligne Audiobookshelf quand une connexion est activée. Elle est actualisée à l'enregistrement et par le contrôle de santé périodique, toutes les 6 heures : ce n'est donc pas une sonde en direct à chaque ouverture de la page. Une clé enregistrée qu'ABM ne peut plus lire apparaît comme une erreur jusqu'à ce que tu la saisisses de nouveau. Une connexion pas encore vérifiée apparaît comme un avertissement. Une connexion désactivée reste silencieuse à cet endroit.

## Ce qu'ABM supprime

ABM ne supprime jamais que l'enregistrement de l'élément dans ABS. Il ne supprime jamais définitivement de fichiers.
