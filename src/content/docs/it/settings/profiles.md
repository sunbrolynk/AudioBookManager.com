---
title: Profili
description: Profili di qualità, profili di ritardo e profili di release.
---

**Settings > Profiles** è una sola pagina con tre sezioni. Rispondono a tre domande diverse su una release.

## Profili di qualità

Un profilo di qualità è una scala di formati, dal peggiore in basso al migliore in alto. Un gradino è un formato (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) in forma a file singolo o a più file. I gradini si possono raggruppare così valgono uguale, e un gradino si può disattivare.

| Impostazione | Significato |
|---|---|
| Upgrades Allowed | Se è disattivato, ABM non sostituisce un libro una volta che ce l'ha |
| Upgrade Until | Il cutoff. Raggiunta questa qualità, ABM smette di fare upgrade |
| Grab off-ladder formats | Prende un formato che non è nell'elenco invece di saltare il libro |
| Default profile | Il profilo usato quando non vale niente di più specifico |

Un profilo è quello predefinito. Un libro usa, in quest'ordine, il suo profilo, il profilo della sua serie principale, il profilo del suo autore principale, e infine quello predefinito. Un profilo in uso non si può eliminare.

Una nuova copia sostituisce quella che hai solo se il profilo permette gli upgrade, il nuovo gradino è nella scala ed è attivo, il libro è sotto il suo cutoff, e il nuovo gradino sta strettamente più in alto.

Se conosci Sonarr: è un profilo di qualità in cui le qualità sono formati audio e struttura dei file invece della risoluzione. I custom format non esistono. I [profili di release](#profili-di-release) coprono un terreno simile.

## Profili di ritardo

Un profilo di ritardo trattiene una release prima del grab, per dare a una release migliore il tempo di comparire.

| Impostazione | Significato |
|---|---|
| Enable Usenet / Enable Torrent | Permette i grab da quel protocollo |
| Usenet Delay / Torrent Delay | Minuti di attesa prima di prendere una release di quel protocollo |
| Preferred Protocol | Quale preferire quando entrambi trovano qualcosa |
| Bypass if Highest Quality | Salta il ritardo quando una release raggiunge già il cutoff del profilo |
| Tags | Il profilo vale solo per gli elementi con un tag corrispondente |

I profili di ritardo sono mostrati in una tabella, come in Sonarr.

## Profili di release

Un profilo di release aggiunge regole sopra la qualità.

| Campo | Significato |
|---|---|
| Enable Profile | Attivo o disattivo |
| Must Contain | La release deve contenere almeno un termine (senza distinzione tra maiuscole e minuscole) |
| Must Not Contain | Una release con uno qualsiasi di questi termini viene scartata |
| Preferred | Termini che alzano o abbassano il punteggio di una release. Scrivi `/regex/` per usare un'espressione regolare |
| Narration language | Limita a una lingua |
| Indexer | Vale per un indexer, o per tutti |
| Tags | Vale solo per gli elementi con un tag corrispondente |

I profili di release sono mostrati in una tabella.

## Da tenere presente

- I profili non eliminano mai file. Decidono cosa prendere e cosa conta come upgrade.
- I tag su un profilo di ritardo o di release lo limitano ai libri che hanno uno di quei tag.
