---
title: Impostazioni Audible
description: Account, pianificazione della sincronizzazione, download e diagnostica.
---

**Settings > Audible** è dove colleghi gli account e regoli sincronizzazione e download. Come funziona la funzione è spiegato nella pagina [Audible](/it/audible/).

## Account

Per collegare un account servono un **Marketplace**, un **Display Name** e il **Redirect URL** che Amazon rimanda indietro dopo l'accesso. Ogni account ha la sua libreria. Se un account deve accedere di nuovo, rifai l'accesso sullo stesso account invece di eliminarlo. Eliminandolo cancelli la sua libreria e rimuovi il suo dispositivo da Audible.

## Pianificazione

| Impostazione | Effetto |
|---|---|
| Auto Sync | Sincronizza la libreria secondo una pianificazione |
| Sync on Account Add | Sincronizza appena colleghi un account |
| Frequency | Giornaliera, settimanale o mensile. Con settimanale compare Day of Week. Con mensile compare Day of Month (1-28). |
| Time | Ora e minuti |
| Use CRON Expression | Un'espressione cron personalizzata sostituisce le opzioni qui sopra |

## Impostazioni dei download (Download Settings)

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Mirror Audible library to ABM | attivo | Ogni sincronizzazione aggiunge i libri Audible che non sono ancora in ABM e scarica quelli senza file, fino a 25 per sincronizzazione. Quando lo attivi vedi quanti libri aggiungerà e scaricherà la prossima. Vedi [Rispecchiare la libreria Audible in ABM](/it/audible/#rispecchiare-la-libreria-audible-in-abm) |
| Concurrent Downloads | 2 | Da 1 a 5. Più alto è più veloce e può far scattare i limiti di richieste di Audible. |
| Preferred Quality | High | High o Normal |
| Delete Encrypted Files | attivo | Rimuove il file AAXC cifrato dopo averlo decifrato in M4B |
| Temp Download Path | vuoto | Se è vuoto usa la cartella temporanea di sistema |

I download falliti vengono ritentati da soli qualche volta, con un'attesa che si allunga, e un disservizio che dura di più rimette il task in coda fino a sei ore. Una licenza negata, un libro che non possiedi o una decifratura fallita falliscono una volta sola.

## Diagnostica della connessione (Connection Diagnostics)

Scegli un account e lancia la diagnostica. Verifica FFmpeg, le credenziali, la connessione all'API e la capacità di scaricare, e mostra il tuo IP in uscita come lo vede Audible.
