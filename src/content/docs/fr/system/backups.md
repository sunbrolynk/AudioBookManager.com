---
title: Sauvegardes
description: Sauvegarder, exporter et restaurer ABM.
---

**System > Backups** crée et restaure des sauvegardes. **Backup Now** en fait une. Les plannings, la conservation et les destinations d'export se trouvent dans [Général](/fr/settings/general/).

## Ce que contient une sauvegarde

Une archive chiffrée avec une copie cohérente de la base de données (`database.db`), des réglages (`settings.json`) et un manifeste. Mets aussi `/config` dans tes propres sauvegardes, pour les couvertures et le fichier du secret de l'app.

## Restaurer

Choisis une sauvegarde dans la liste, ou envoie un fichier de sauvegarde (jusqu'à 500 MiB). Une copie de la base de données en service est enregistrée d'abord. Une restauration ne peut pas être annulée.

Par défaut, une restauration ne ramène pas les **réglages de sécurité** (mode d'authentification, identifiants, réseaux de confiance). Les actuels sont conservés et le résultat le dit. La page n'a pas d'interrupteur pour ça. Seul un appel d'API à `restore-upload` avec `restore_security_settings=true` les ramène, pour qu'une archive téléversée ne puisse jamais désactiver la connexion simplement en étant restaurée.

Si la sauvegarde a été faite sur une version plus ancienne, redémarre le conteneur après la restauration pour que la migration tourne.

Une sauvegarde est refusée, sans rien changer, si elle contient des entrées inattendues, si ce n'est pas une base SQLite valide, ou si c'est une ancienne sauvegarde d'avant le passage à SQLite.

## Destinations d'export

SFTP, SCP, FTPS, FTP, S3 ou un remote rclone. Une destination marquée **Auto** reçoit automatiquement chaque sauvegarde. Les noms de remote rclone peuvent contenir des lettres, des chiffres, `_`, `.` et `-`.

## Pièges à éviter

- L'image Docker et ton fichier compose ne sont pas dans la sauvegarde. Garde le fichier compose.
- Si tu définis `APP_SECRET`, sauvegarde-le à part. Sans lui, les identifiants stockés ne peuvent pas être déchiffrés après une restauration sur une autre machine.
