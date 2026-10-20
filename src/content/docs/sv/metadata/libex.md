---
title: Libex
description: Var ABM:s bokdata kommer ifrån.
---

ABM hämtar data om böcker, författare, serier och kapitel från **Libex**, en öppen metadatatjänst för Audible som är ett separat projekt. Libex är källan. Det som spelar roll för dig är vad ABM gör med datan när den väl har den, och hur mycket av det du styr över. Det är resten av det här avsnittet.

Libex: [Källkod](https://github.com/LibexHQ/Libex) · [API-referens](https://libexdb.com/redoc)

ABM frågar den publika Libex-instansen på libexdb.com. Ett val av källa är planerat till en senare version.

När Libex inte går att nå säger ABM det och nämner källan. Du kan fortfarande lägga till och importera böcker för hand. Se [Felsökning](/sv/troubleshooting/#metadatakällan-är-inte-tillgänglig).
