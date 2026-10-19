---
title: Log
description: File di log, livelli, conservazione e rotazione.
---

**System > Log Files** elenca i log testuali di ABM. Aprine uno per leggerlo, scaricarlo, eliminarlo, oppure svuotali tutti. I log compaiono man mano che girano le operazioni.

- Task e conversioni scrivono un log proprio. La pagina Tasks li collega uno per uno.
- Il log principale è `app.log`. Ruota all'avvio, almeno ogni ora e a 10 MiB. I file vecchi vengono tenuti per **Log File Retention** (30 giorni di default).
- Un log di sicurezza separato scrive una riga per ogni tentativo di accesso, per fail2ban e strumenti simili.
- I livelli si impostano in **Settings > General > Logging**.

## Leggere un problema

Parti dal pulsante del log del task fallito. Mostra l'operazione dalla riga di inizio al blocco di fine. Dal testo vengono tolti i segreti, ma controllalo prima di incollare un log in pubblico.

## Da tenere presente

- I livelli SQL Logging e Debug sono molto prolissi. Spegnili quando hai finito.
- Eliminare un log lascia le voci del registro attività che ci rimandano. Diranno "Log no longer kept".
