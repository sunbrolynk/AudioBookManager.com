---
title: Registro attività ed eventi
description: Il registro di quello che è successo, e in cosa è diverso dai log.
---

ABM tiene tre tipi di registro.

| Dove | Cos'è |
|---|---|
| **System > Events** e **System > Activity Log** | Il registro attività: un elenco nel database delle cose successe. Events è la vista filtrata per gravità. Activity Log (con il titolo Activity History) filtra per categoria, cerca nel messaggio e mostra lo stato prima e dopo |
| **System > Log Files** | File di log testuali con tutti i dettagli. Vedi [Log](/it/system/logs/) |
| **Activity > History** | Solo la cronologia dei download. Vedi [Attività](/it/using/activity/) |

## Cosa viene registrato

I task in background finiti (una riga di riepilogo ciascuno), le modifiche manuali a client, indexer, profili, tag, notifiche, cartelle radice e così via, i grab (chi li ha avviati), le conversioni, i download Audible falliti, i backup, gli accessi e gli accessi falliti, e un passaggio dell'avvio che è fallito.

Categorie: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security e System.

## Privacy

Le voci non contengono mai URL, host, nomi utente, password, chiavi, token o il testo grezzo degli errori di un client o di un servizio. Gli oggetti vengono indicati con il nome che gli hai dato tu. I salvataggi delle impostazioni elencano quali impostazioni sono cambiate, non i loro valori. Per gli accessi viene salvato solo l'indirizzo IP. Gli accessi falliti da uno stesso indirizzo entro 15 minuti si raggruppano in una riga con il numero di tentativi.

## Silenzioso per scelta

Un'esecuzione pianificata che non ha fatto niente non scrive niente. La ripetizione dello stesso errore non scrive niente, ma il ritorno alla normalità sì. Un'esecuzione manuale viene sempre registrata.

## Conservazione

**Activity Log Retention** in General elimina le voci dopo 90 giorni di default. Con 0 restano. I file di log hanno una loro conservazione (30 giorni).

## Vedere il log

:::caution[In arrivo in una release successiva]
I link "View log" dalle voci non sono ancora in una versione rilasciata.
:::

Le voci rimandano al log da cui provengono e lo aprono a quella riga. Se il log non c'è più, la voce dice "Log no longer kept".
