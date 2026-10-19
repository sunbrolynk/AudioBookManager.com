---
title: Statut
description: Les contrôles de santé et un aperçu de ce que fait ABM.
---

**System > Status** lance les contrôles de santé et liste tout ce qui ne va pas : clients de téléchargement et indexeurs en échec, problèmes de dossiers racine et problèmes de connexions sortantes. Il affiche aussi l'utilisation du pool de connexions à la base de données. Quand tout va bien, il affiche « All systems healthy ».

Les contrôles de santé tournent aussi toutes les 6 heures en arrière-plan. Connect peut envoyer une notification sur **On Health Issue** et **On Health Restored**. Voir [Connect](/fr/settings/connect/).

Si tu connais Sonarr : c'est la même idée que System > Status et Health réunis sur une seule page.

## Pièges à éviter

- Un client de téléchargement désactivé n'est pas considéré comme en mauvaise santé.
- Un compte Audible qui doit se reconnecter apparaît ici, en plus de la page des réglages Audible.
