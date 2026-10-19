---
title: Tag
description: Tag e regole di tagging automatico.
---

**Settings > Tags** gestisce i tag e l'**Auto Tagging**.

## Tag

Un tag è una parola sola: minuscola, senza spazi, senza virgole, fino a 100 caratteri. Se scrivi `Sci-Fi` diventa `sci-fi`. I tag vanno su libri, autori e serie, e vengono confrontati da indexer, profili di ritardo e di release, liste di importazione, agenti di Connect e il feed del calendario.

Se conosci Sonarr: i tag funzionano allo stesso modo. Un profilo con un tag vale solo per le cose che lo hanno.

## Tag automatici

Un tag automatico è una regola che applica dei tag ai libri che corrispondono.

| Campo | Effetto |
|---|---|
| Name | Etichetta |
| Enable | Attivo o disattivo |
| Remove Tags Automatically | Quando un libro smette di corrispondere, toglie i tag |
| Tags | Cosa applicare |
| Conditions | Cosa deve soddisfare un libro. Ognuna si può negare o rendere obbligatoria |

Tipi di condizione: Genre, Monitored, Language, Root Folder, Status, Tag, Year (intervallo), Series Type, Author (contiene), Narrator (contiene), Runtime in minuti (intervallo) e Rating (intervallo).

**Apply** esegue subito le regole selezionate. Le regole girano anche quando i libri cambiano.

## Da tenere presente

- Una regola che si riferisce a un tag o a una cartella radice eliminati viene saltata del tutto, in entrambe le direzioni, così una regola rotta non mette mai tag sbagliati né li toglie.
- Remove Tags Automatically toglie solo i tag che questa regola aggiungerebbe.
