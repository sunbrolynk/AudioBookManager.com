---
title: Première configuration
description: L'assistant de configuration d'une nouvelle installation, étape par étape.
---

:::caution[Prévu pour une version ultérieure]
L'assistant de configuration n'est pas encore dans une version publiée. Les versions publiées ne demandent qu'un identifiant à la première visite.
:::

Sur une nouvelle installation, la première visite ouvre un assistant de configuration à la place de la page de connexion. Il te guide à travers tout ce dont ABM a besoin, une étape à la fois. Il n'apparaît que tant qu'aucun compte n'existe. Tous les choix peuvent être modifiés ensuite dans **Settings**.

Une chaîne de huit maillons court en haut de l'écran. Chaque maillon est une étape, et la chaîne te montre où tu en es :

- **Done** : l'étape est terminée.
- **Current step** : l'étape affichée à l'écran.
- **Not started** : une étape que tu n'as pas encore atteinte.
- **Later** : une étape que tu as passée sans la terminer. Elle reste en attente, et tu peux la finir depuis **Settings** quand tu veux.

**Back** revient à l'étape précédente. **Continue** enregistre l'étape et passe à la suivante. Trois étapes, Audible, Download client et Indexer, proposent aussi **Skip for now**.

## 1. Compte (Account)

Crée ton identifiant et te connecte. Tu choisis un nom d'utilisateur et un mot de passe d'au moins 8 caractères, que tu saisis deux fois.

| Réglage | Par défaut | Effet |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms utilise une page de connexion. Basic (Browser Popup) utilise l'invite de connexion de ton navigateur |
| Authentication required | Everywhere | Everywhere demande la connexion depuis toutes les adresses. Skip on local network laisse entrer sans connexion les appareils de ton réseau domestique ou de bureau |

Ce sont les mêmes réglages que sur [Sécurité et connexion](/fr/settings/security/). Le compte est créé quand tu appuies sur **Continue**. Une fois créé, cette étape ne fait que le confirmer.

## 2. Réseau (Network)

Network est l'interrupteur général. Rien de ce qu'ABM envoie ne quitte ta machine tant que tu n'as pas choisi une route ici, donc les étapes Metadata et Audible en dépendent. **Continue** reste grisé tant que la route n'est pas complète. L'étape ne peut être passée que si ses réglages ne se chargent pas : elle affiche alors l'erreur avec **Retry**, **Back** et **Skip for now**. Tant qu'aucune route n'est choisie, ABM continue de bloquer tout ce qu'il envoie, et l'étape Finish montre Network comme en attente.

| Choix | Ce que tu donnes à ABM |
|---|---|
| Proxy | Le type, le nom d'hôte et le port du proxy, et en option un nom d'utilisateur et un mot de passe. SOCKS4 n'est pas pris en charge |
| WireGuard | Un `.conf` de ton fournisseur VPN, collé ou déposé. Si un tunnel est déjà enregistré, c'est lui qui est utilisé |
| Own VPN container | Rien à saisir. Tu coches une case pour dire que tout le trafic d'ABM sort déjà par un conteneur VPN ou proxy. ABM ne peut pas le vérifier |
| Direct | Rien à saisir. Tu coches une case pour dire que chaque service contacté par ABM verra ta propre adresse IP |

**Continue** enregistre la route puis affiche la vérification **Public IP**, pour que tu voies que la route fonctionne avant que quoi que ce soit ne parte en ligne. **Change route** te laisse en choisir une autre. Ce sont les mêmes réglages que [Network](/fr/settings/network/).

## 3. Métadonnées (Metadata)

Choisis où ABM cherche les livres. Cette étape vient avant tes dossiers, car le premier scan de dossier compare tes livres à cette source.

| Choix | Ce que ça veut dire |
|---|---|
| Built-in | Libex tourne dans ABM. Pas de compte, pas de service en plus. Il utilise la route de l'étape Network |
| Hosted | ABM interroge l'instance publique de Libex sur libexdb.com |
| Self-hosted | ABM interroge ton propre serveur Libex. Saisis son **Server URL**. **Test** le vérifie sans enregistrer |

Il y a aussi une case **Local Storage**. Elle garde un enregistrement local, permanent et chiffré de chaque livre qu'ABM consulte, cherche, ajoute, importe ou voit dans Discover, et elle marche avec les trois sources. Une fois activée, elle ne peut être désactivée que dans **Settings > Metadata**.

**Continue** enregistre la source, et active Local Storage si tu l'as cochée. Si la source choisie ne peut pas encore sortir, par exemple Built-in sans route choisie, l'étape explique pourquoi. Voir [Choisir une source de métadonnées](/fr/metadata/choosing-a-source/). Si les réglages de l'étape ne se chargent pas, elle affiche l'erreur avec **Retry**, **Back** et **Skip for now**, et tu pourras régler la source plus tard dans **Settings > Metadata**.

## 4. Audible (facultatif)

Connecte ton compte Audible pour qu'ABM puisse lire ta bibliothèque. Ça passe par la route choisie à l'étape Network. Si aucune route n'est choisie, ou que le trafic Audible y est bloqué, l'étape le dit et **Back to Network** te ramène en arrière. La connexion elle-même est la même que sur [Audible](/fr/audible/). Une fois connecté, l'étape affiche le compte et **Continue** devient disponible.

Tu peux faire **Skip for now** et connecter Audible plus tard dans **Settings > Audible**.

## 5. Dossier racine (Root folder)

Un dossier racine est l'endroit où ABM range tes livres. Choisis le dossier où vivent tes livres audio, ou celui où doivent aller les nouveaux. Ça devrait être le même dossier que lit ton lecteur (Audiobookshelf, par exemple). Tu peux parcourir les dossiers du serveur et en créer un nouveau dans le navigateur. Le premier dossier racine que tu ajoutes devient celui par défaut. Cette étape ne peut pas être passée. Tu pourras ajouter d'autres racines plus tard dans **Settings > Media Management**.

## 6. Client de téléchargement (facultatif)

Choisis un des clients pris en charge, Usenet ou torrent : Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet ou Blackhole. Remplis ses informations, appuie sur **Test**, puis **Save**. Le client est ajouté directement dans l'étape. Tu peux en ajouter un autre, et **Refresh** recharge la liste. L'étape compte comme terminée dès qu'un client est enregistré.

Tu peux faire **Skip for now** et ajouter un client plus tard dans **Settings > Download Clients**. Voir [Clients de téléchargement](/fr/settings/download-clients/).

## 7. Indexeur (facultatif)

Choisis un type d'indexeur ou un préréglage, remplis-le, puis **Test** et **Save**, comme pour le client de téléchargement. L'étape compte comme terminée dès qu'un indexeur est enregistré. Tu peux faire **Skip for now** et ajouter des indexeurs plus tard dans **Settings > Indexers**. Voir [Indexeurs](/fr/settings/indexers/).

## 8. Fin (Finish)

Un récapitulatif liste chaque étape avec ce qui a été réglé : ta route Network (et la Public IP si elle a été vérifiée), la source de métadonnées, le compte Audible, le dossier racine, ainsi que le client et l'indexeur que tu as ajoutés. Chaque étape remise à plus tard apparaît comme en attente. Si ABM ne peut pas relire l'état d'une étape, par exemple parce que la liste des clients de téléchargement ne se charge pas, cette ligne affiche **Could not check** et un bouton **Retry** apparaît. Si rien n'attend, le récapitulatif dit que tous les maillons sont allumés. **Go to Library** ferme l'assistant.

Tout ce que tu as passé est dans **Settings** quand tu veux. Les prochaines choses utiles sont un profil de qualité et tes livres : voir [Démarrage rapide](/fr/getting-started/quick-start/).
