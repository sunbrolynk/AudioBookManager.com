---
title: Backup
description: Fare il backup, esportare e ripristinare ABM.
---

**System > Backups** crea e ripristina i backup. **Backup Now** ne crea uno. Pianificazioni, conservazione e destinazioni di esportazione sono in [General](/it/settings/general/).

## Cosa c'è in un backup

Un archivio cifrato con una copia coerente del database (`database.db`), le impostazioni (`settings.json`) e un manifest. Includi anche `/config` nei tuoi backup, per le copertine e il file della chiave segreta.

## Ripristinare

Scegline uno dall'elenco, oppure carica un file di backup (fino a 500 MiB). Prima viene salvata una copia del database attuale. Il ripristino non si può annullare.

Di default un ripristino non riporta indietro le **impostazioni di sicurezza** (modalità di autenticazione, credenziali, reti attendibili). Restano quelle attuali e il risultato lo dice. La pagina non ha un interruttore per questo. Solo una chiamata API a `restore-upload` con `restore_security_settings=true` le riporta indietro, così un archivio caricato non può mai disattivare l'accesso solo perché viene ripristinato.

Se il backup è stato fatto con una versione più vecchia, riavvia il container dopo il ripristino così parte la migrazione.

Un backup viene rifiutato, senza cambiare niente, se contiene voci inattese, non è un database SQLite valido, o è un backup vecchio di prima del passaggio a SQLite.

## Destinazioni di esportazione

SFTP, SCP, FTPS, FTP, S3 o un remote rclone. Una destinazione segnata **Auto** riceve ogni backup in automatico. I nomi dei remote rclone possono usare lettere, cifre, `_`, `.` e `-`.

## Da tenere presente

- L'immagine Docker e il tuo file compose non sono nel backup. Tieni da parte il file compose.
- Se imposti `APP_SECRET`, fanne il backup a parte. Senza, le credenziali salvate non si possono decifrare dopo un ripristino su un altro host.
