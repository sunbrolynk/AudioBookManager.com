---
title: Scegliere una fonte di metadati
description: Integrata, ospitata o il tuo server Libex.
---

:::caution[In arrivo nella prossima release]
La scelta della fonte non è ancora in una versione rilasciata. Le versioni rilasciate usano l'istanza pubblica di Libex su libexdb.com e non hanno un'impostazione per questo.
:::

Nella prossima release, **Settings > Metadata > Source** ha un'impostazione **Metadata Source** con tre scelte.

| Scelta | Cosa significa |
|---|---|
| Built-in (predefinito) | Libex gira dentro ABM. Prima serve scegliere una connessione in uscita. |
| Hosted (libexdb.com) | ABM interroga l'istanza pubblica di Libex. |
| Self-hosted | ABM interroga un server Libex che indichi tu. Inserisci il suo **Server URL**, per esempio `http://192.168.1.20:8000`. |

**Test** verifica la fonte selezionata senza salvare. **Status** dice se è pronta. Una scelta che non hai ancora salvato mostra "Not in use yet - save to switch" finché non salvi.

## Built-in e la connessione in uscita

Built-in parla con Audible dalla tua macchina, quindi usa **Settings > General > Proxy & VPN**. Quella pagina decide il percorso: un proxy, il tunnel WireGuard integrato, un tuo container VPN, oppure una connessione diretta di cui ti prendi la responsabilità. Se non ne scegli nessuno, le ricerche automatiche vengono bloccate e te lo dicono. Anche un percorso scelto ma giù blocca le ricerche. Non ripiega mai sul tuo indirizzo. Direct mostra un avviso: Audible vede il tuo indirizzo IP e i libri che ABM cerca.

## Hosted e self-hosted

Con queste due, ABM interroga un server Libex ed è il server a parlare con Audible. Un URL self-hosted viene verificato prima di essere salvato, e uno vuoto o non sicuro viene rifiutato. Un server giù viene segnalato come fonte dei metadati non disponibile, con il suo nome.

## Quale scegliere

- Vuoi che funzioni e basta e non ti importa che Audible veda il tuo indirizzo: Built-in con connessione diretta, oppure Hosted.
- Non vuoi esporre il tuo IP ad Audible: Built-in tramite una VPN o un proxy, oppure Hosted.
- Hai già un server Libex: Self-hosted.
