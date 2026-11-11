---
title: Første opsætning
description: Opsætningsguiden på en ny installation, trin for trin.
---

:::caution[Kommer i en senere udgivelse]
Opsætningsguiden er ikke med i en udgivet version endnu. Udgivne versioner beder kun om et login første gang.
:::

På en ny installation åbner det første besøg en opsætningsguide i stedet for loginsiden. Den guider dig gennem alt, hvad ABM har brug for, et trin ad gangen. Den dukker kun op, så længe der ikke findes en konto. Alle valg kan ændres bagefter i **Settings**.

Øverst løber en kæde af otte led. Hvert led er et trin, og kæden viser, hvor du er:

- **Done**: trinnet er færdigt.
- **Current step**: trinnet på skærmen.
- **Not started**: et trin, du ikke er nået til endnu.
- **Later**: et trin, du er gået forbi uden at gøre det færdigt. Det bliver ved med at vente, og du kan gøre det færdigt i **Settings**, når du vil.

**Back** går et trin tilbage. **Continue** gemmer trinnet og går videre. Tre trin, Audible, Download client og Indexer, har også **Skip for now**.

## 1. Konto (Account)

Opretter dit login og logger dig ind. Du vælger et brugernavn og en adgangskode på mindst 8 tegn, og du skriver adgangskoden to gange.

| Indstilling | Standard | Virkning |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms bruger en loginside. Basic (Browser Popup) bruger din browsers egen loginprompt |
| Authentication required | Everywhere | Everywhere kræver login fra alle adresser. Skip on local network lader enheder på dit hjemme- eller kontornetværk komme ind uden login |

Det er de samme indstillinger som på [Sikkerhed og login](/da/settings/security/). Kontoen oprettes, når du trykker på **Continue**. Når den findes, bekræfter trinnet den bare.

## 2. Netværk (Network)

Network er hovedafbryderen. Intet, ABM sender, forlader din maskine, før du har valgt en rute her, så trinene Metadata og Audible afhænger af den. Dette trin kan ikke springes over, og **Continue** forbliver slukket, til ruten er komplet.

| Valg | Hvad du giver ABM |
|---|---|
| Proxy | Proxyens type, værtsnavn og port, og eventuelt et brugernavn og en adgangskode. SOCKS4 understøttes ikke |
| WireGuard | En `.conf` fra din VPN-udbyder, indsat eller trukket ind. Hvis en tunnel allerede er gemt, bruges den |
| Own VPN container | Intet at udfylde. Du sætter flueben i en boks om, at al ABMs trafik allerede forlader maskinen gennem en VPN- eller proxy-container. ABM kan ikke kontrollere det |
| Direct | Intet at udfylde. Du sætter flueben i en boks om, at hver tjeneste, ABM kontakter, vil se din egen IP-adresse |

**Continue** gemmer ruten og viser så **Public IP**-tjekket, så du kan se, at ruten virker, før noget går online. Med **Change route** kan du vælge igen. Det er de samme indstillinger som [Network](/da/settings/network/).

## 3. Metadata

Vælg, hvor ABM slår bøger op. Det kommer før dine mapper, fordi den første mappescanning matcher dine bøger mod den.

| Valg | Hvad det betyder |
|---|---|
| Built-in | Libex kører inde i ABM. Ingen konto og ingen ekstra tjeneste. Bruger ruten fra trinnet Network |
| Hosted | ABM spørger den offentlige Libex-instans på libexdb.com |
| Self-hosted | ABM spørger din egen Libex-server. Skriv dens **Server URL**. **Test** tjekker den uden at gemme |

Der er også en **Local Storage**-boks. Den gemmer en permanent, krypteret, lokal oversigt over hver bog, ABM slår op, søger efter, tilføjer, importerer eller ser i Discover, og den virker med alle tre kilder. Når den først er slået til, kan den kun slås fra i **Settings > Metadata**.

**Continue** gemmer kilden og slår Local Storage til, hvis du satte flueben. Hvis den valgte kilde ikke kan komme ud endnu, for eksempel Built-in uden valgt rute, siger trinnet hvorfor. Se [Vælg en metadatakilde](/da/metadata/choosing-a-source/).

## 4. Audible (valgfrit)

Logger ind på din Audible-konto, så ABM kan læse dit bibliotek. Det går gennem den rute, du valgte i trinnet Network. Hvis ingen rute er valgt, eller Audible-trafik er blokeret på den, siger trinnet det, og **Back to Network** tager dig tilbage. Selve loginnet er det samme som på [Audible](/da/audible/). Når du er logget ind, viser trinnet kontoen, og **Continue** er tilgængelig.

Du kan vælge **Skip for now** og forbinde Audible senere under **Settings > Audible**.

## 5. Rodmappe (Root folder)

En rodmappe er der, hvor ABM opbevarer dine bøger. Vælg den mappe, dine lydbøger ligger i, eller hvor nye skal hen. Det bør være den samme mappe, som din afspiller (for eksempel Audiobookshelf) læser. Du kan bladre gennem serverens mapper og oprette en ny i browseren. Den første rodmappe, du tilføjer, bliver standard. Dette trin kan ikke springes over. Du kan tilføje flere rødder senere under **Settings > Media Management**.

## 6. Downloadklient (valgfrit)

Vælg en af de understøttede klienter, Usenet eller torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet eller Blackhole. Udfyld dens oplysninger, tryk på **Test** og derefter **Save**. Klienten tilføjes lige der i trinnet. Du kan tilføje en til, og **Refresh** genindlæser listen. Trinnet tæller som færdigt, så snart en klient er gemt.

Du kan vælge **Skip for now** og tilføje en klient senere under **Settings > Download Clients**. Se [Downloadklienter](/da/settings/download-clients/).

## 7. Indexer (valgfrit)

Vælg en indexertype eller en forudindstilling, udfyld den, og tryk så på **Test** og **Save**, på samme måde som med downloadklienten. Trinnet tæller som færdigt, så snart en indexer er gemt. Du kan vælge **Skip for now** og tilføje indexere senere under **Settings > Indexers**. Se [Indeksere](/da/settings/indexers/).

## 8. Afslut (Finish)

Et overblik viser hvert trin med det, der blev sat op: din Network-rute (og Public IP, hvis den blev tjekket), metadatakilden, Audible-kontoen, rodmappen samt den klient og indexer, du tilføjede. Hvert trin, du lod vente til senere, vises som ventende. Hvis intet venter, siger overblikket, at alle led lyser. **Go to Library** lukker guiden.

Alt, du sprang over, ligger i **Settings**, når du vil have det. De næste fornuftige ting er en kvalitetsprofil og dine bøger: se [Hurtig start](/da/getting-started/quick-start/).
