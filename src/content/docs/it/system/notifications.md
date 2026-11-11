---
title: Notifiche
description: La campanella nell'intestazione e il pannello sotto di essa.
---

La campanella nell'intestazione su desktop è dove ABM ti dice cosa è successo e cosa ha bisogno di te. Cliccaci per aprire il pannello delle notifiche. Su telefono non c'è ancora una campanella.

## La campanella

- Il numero sulla campanella indica quante notifiche non sono lette. Oltre 99 mostra 99+. Se una non letta è un errore, il numero diventa rosso.
- Un anello attorno alla campanella indica un lavoro in corso. Quando ABM sa a che punto è, l'anello si riempie fino alla media degli elementi in corso. Quando non lo sa, l'anello gira soltanto.
- Una nuova notifica fa lampeggiare brevemente la campanella con il colore del suo livello. Se nel sistema hai attivato la riduzione del movimento, il lampeggio viene saltato.
- Se il browser perde la connessione live con ABM per più di 10 secondi, la campanella diventa una campanella barrata con un anello tratteggiato. Torna normale quando la connessione ritorna.

Il nome accessibile della campanella legge le stesse cose: il numero di non lette, quanti elementi sono in corso e la loro percentuale, e se è offline.

## Il pannello

Dall'alto in basso:

- **Needs attention** compare solo quando c'è qualcosa di aperto. Sono cose che restano finché non vengono risolte, come un libro il cui download è fallito o una nuova versione di ABM. Ognuna ha un pulsante: **Search again** mette in coda una ricerca per quel libro e **What's new** apre la pagina Updates. Le altre aprono la pagina a cui si riferiscono, o il task se può essere ripreso. La **x** su una riga la ignora.
- **Running** elenca il lavoro in corso adesso: task, download e conversioni, con avanzamento e tempo rimanente quando noti. Clicca una riga per andarci.
- **Recent** mostra prima le notifiche più nuove, con il conteggio delle non lette. Cliccandone una si apre ciò a cui si riferisce e viene segnata come letta. Una riga ha anche pulsanti per segnarla come letta o non letta e per eliminarla.
- **Load older** mostra altra cronologia. Quando non c'è niente di più vecchio, il pannello lo dice.

Quando tutte e tre sono vuote, il pannello dice che sei in pari.

Il piè di pagina ha **Mark all read** e un link al [Registro attività](/it/system/activity-log/). Il menu accanto al titolo del pannello ha **Clear all**, che chiede prima conferma. Rimuove tutte le notifiche tranne quelle che hanno ancora bisogno di attenzione. Quelle restano finché non le risolvi o le ignori.

## Cosa non viene registrato

Una notifica può arrivare da un task in background, da un download o da una conversione, oppure da qualcosa che hai fatto nel browser ed è fallito. I controlli del pannello stesso sono l'eccezione. Se segnare come letta, eliminare, ignorare, svuotare o caricare le più vecchie fallisce, il pannello mostra l'errore accanto a quel controllo e non aggiunge nessuna notifica. Altrimenti una casella rotta riempirebbe la casella.

## Risultati sul controllo

Le azioni su Library, Book Detail, Calendar, Authors e Series e le azioni sulle copertine mostrano il risultato come una breve riga sul controllo che hai usato. Una semplice riga di successo sparisce da sola dopo un paio di secondi. Un errore o un avviso resta fino alla tua prossima azione su quel controllo. Gli errori vengono registrati anche nella campanella, così li ritrovi anche dopo che la riga è sparita.

Un libro, un autore o una serie salvati il cui catalog fill non parte registra l'avviso «Catalog fill not started». Un add all in cui alcuni libri falliscono registra «Some books were not added» con i motivi.

## Conservazione

Le vecchie notifiche vengono rimosse dalla pulizia giornaliera dei log, per impostazione predefinita dopo **30 giorni**. Impostalo con **Notifications Retention** nella pagina [General](/it/settings/general/), oppure con `inbox_retention_days` nell'[API](/it/system/api/). 0 le conserva per sempre. Le notifiche che hanno ancora bisogno di attenzione non vengono rimosse finché non le risolvi. La pulizia gira una volta al giorno all'ora di pulizia (03:00 per impostazione predefinita) e non fa nulla quando **Automatic Cleanup** è disattivato. La nota in fondo al pannello mostra il numero di giorni attuale e viene nascosta quando la conservazione è 0.

## Differenza dal Registro attività

Le notifiche sono ciò che ti viene detto, e puoi svuotarle. Il [Registro attività](/it/system/activity-log/) è la traccia permanente di ciò che è successo, e svuotare la campanella non lo tocca.
