---
title: Task
description: Lavoro in background, pianificazioni e log.
---

**System > Tasks** elenca tutto quello che ABM fa in background: scansioni della libreria, aggiornamenti, importazioni, ricerche, download, sincronizzazioni, backup. Ogni riga mostra il suo stato (in attesa, in esecuzione, completato, fallito), l'avanzamento, il risultato e un pulsante per il log.

- Un task completato con delle voci nella sua lista di errori risulta **Partial**. Espandilo per vedere ogni elemento saltato e il motivo.
- Un task con un nuovo tentativo in arrivo resta in attesa finché i tentativi non finiscono. Il numero del tentativo è indicato.
- **Clear completed tasks older than 24 hours** fa pulizia nell'elenco. I task vecchi vengono anche puliti in automatico (30 giorni di default).
- Le esecuzioni pianificate che non hanno fatto niente compaiono qui ma non nel [Registro attività](/it/system/activity-log/).

## Da tenere presente

- Le conversioni sono una coda separata. Vedi [Conversioni](/it/using/conversions/).
- I controlli periodici dei download (nuovo tentativo dei grab in sospeso e verifica dei download completati) si mettono in coda solo se c'è almeno un client di download attivo, così la pagina non si riempie di esecuzioni vuote.
