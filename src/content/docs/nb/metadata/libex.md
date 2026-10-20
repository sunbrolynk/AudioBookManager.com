---
title: Libex
description: Hvor bokdataene i ABM kommer fra.
---

ABM henter data om bøker, forfattere, serier og kapitler fra **Libex**, en åpen metadatatjeneste for Audible som er et eget prosjekt. Libex er kilden. Det som betyr noe for deg, er hva ABM gjør med dataene når den har dem, og hvor mye av det du styrer. Det er resten av denne delen.

Libex: [Kildekode](https://github.com/LibexHQ/Libex) · [API-referanse](https://libexdb.com/redoc)

ABM spør den offentlige Libex-instansen på libexdb.com. Et valg av kilde er planlagt til en senere versjon.

Når Libex ikke kan nås, sier ABM fra og oppgir kilden. Du kan fortsatt legge til og importere bøker for hånd. Se [Feilsøking](/nb/troubleshooting/#metadatakilden-er-utilgjengelig).
