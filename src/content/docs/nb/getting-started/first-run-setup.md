---
title: Førstegangsoppsett
description: Oppsettsveiviseren på en ny installasjon, steg for steg.
---

:::caution[Kommer i en senere versjon]
Oppsettsveiviseren er ikke med i en utgitt versjon ennå. Utgitte versjoner ber bare om en innlogging første gang.
:::

På en ny installasjon åpner det første besøket en oppsettsveiviser i stedet for innloggingssiden. Den leder deg gjennom alt ABM trenger, ett steg om gangen. Den dukker bare opp så lenge det ikke finnes noen konto. Alle valg kan endres etterpå i **Settings**.

Øverst går det en kjede med åtte ledd. Hvert ledd er ett steg, og kjeden viser hvor du er:

- **Done**: steget er ferdig.
- **Current step**: steget som vises på skjermen.
- **Not started**: et steg du ikke har kommet til ennå.
- **Later**: et steg du har gått forbi uten å fullføre det. Det blir stående og vente, og du kan fullføre det i **Settings** når du vil.

**Back** går ett steg tilbake. **Continue** lagrer steget og går videre. Tre steg, Audible, Download client og Indexer, har også **Skip for now**.

## 1. Konto (Account)

Oppretter innloggingen din og logger deg inn. Du velger et brukernavn og et passord på minst 8 tegn, og skriver passordet to ganger.

| Innstilling | Standard | Virkning |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms bruker en innloggingsside. Basic (Browser Popup) bruker nettleserens egen innloggingsboks |
| Authentication required | Everywhere | Everywhere krever innlogging fra alle adresser. Skip on local network slipper enheter på hjemme- eller kontornettverket inn uten innlogging |

Dette er de samme innstillingene som på [Sikkerhet og innlogging](/nb/settings/security/). Kontoen opprettes når du trykker **Continue**. Når den finnes, bekrefter steget den bare.

## 2. Nettverk (Network)

Network er hovedbryteren. Ingenting ABM sender forlater maskinen din før du har valgt en rute her, så stegene Metadata og Audible avhenger av den. Dette steget kan ikke hoppes over, og **Continue** forblir av til ruten er komplett.

| Valg | Hva du gir ABM |
|---|---|
| Proxy | Proxyens type, vertsnavn og port, og eventuelt brukernavn og passord. SOCKS4 støttes ikke |
| WireGuard | En `.conf` fra VPN-leverandøren din, limt inn eller dratt inn. Hvis en tunnel allerede er lagret, brukes den |
| Own VPN container | Ingenting å fylle ut. Du huker av i en boks som sier at all trafikken til ABM allerede går ut gjennom en VPN- eller proxy-container. ABM kan ikke sjekke dette |
| Direct | Ingenting å fylle ut. Du huker av i en boks som sier at hver tjeneste ABM kontakter, vil se din egen IP-adresse |

**Continue** lagrer ruten og viser deretter **Public IP**-sjekken, så du ser at ruten fungerer før noe går på nett. Med **Change route** kan du velge på nytt. Dette er de samme innstillingene som [Network](/nb/settings/network/).

## 3. Metadata

Velg hvor ABM slår opp bøker. Dette kommer før mappene dine, fordi den første mappeskanningen matcher bøkene dine mot den.

| Valg | Hva det betyr |
|---|---|
| Built-in | Libex kjører inni ABM. Ingen konto og ingen ekstra tjeneste. Bruker ruten fra steget Network |
| Hosted | ABM spør den offentlige Libex-instansen på libexdb.com |
| Self-hosted | ABM spør din egen Libex-server. Skriv inn **Server URL**. **Test** sjekker den uten å lagre |

Det er også en **Local Storage**-boks. Den holder en permanent, kryptert, lokal oversikt over hver bok ABM slår opp, søker etter, legger til, importerer eller ser i Discover, og den fungerer med alle tre kildene. Når den først er på, kan den bare slås av i **Settings > Metadata**.

**Continue** lagrer kilden og slår på Local Storage hvis du huket av. Hvis den valgte kilden ikke kan nå ut ennå, for eksempel Built-in uten valgt rute, sier steget hvorfor. Se [Velge metadatakilde](/nb/metadata/choosing-a-source/).

## 4. Audible (valgfritt)

Logger inn på Audible-kontoen din slik at ABM kan lese biblioteket ditt. Det går gjennom ruten du valgte i steget Network. Hvis ingen rute er valgt, eller Audible-trafikk er blokkert på den, sier steget det, og **Back to Network** tar deg tilbake. Selve innloggingen er den samme som på [Audible](/nb/audible/). Når du er logget inn, viser steget kontoen, og **Continue** er tilgjengelig.

Du kan velge **Skip for now** og koble til Audible senere under **Settings > Audible**.

## 5. Rotmappe (Root folder)

En rotmappe er der ABM oppbevarer bøkene dine. Velg mappen lydbøkene dine ligger i, eller der nye skal havne. Det bør være samme mappe som avspilleren din (for eksempel Audiobookshelf) leser. Du kan bla gjennom mappene på serveren og opprette en ny i nettleseren. Den første rotmappen du legger til, blir standard. Dette steget kan ikke hoppes over. Du kan legge til flere røtter senere under **Settings > Media Management**.

## 6. Nedlastingsklient (valgfritt)

Velg en av de støttede klientene, Usenet eller torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet eller Blackhole. Fyll ut opplysningene, trykk **Test** og deretter **Save**. Klienten legges til rett der, i steget. Du kan legge til en til, og **Refresh** laster listen på nytt. Steget teller som ferdig så snart én klient er lagret.

Du kan velge **Skip for now** og legge til en klient senere under **Settings > Download Clients**. Se [Nedlastingsklienter](/nb/settings/download-clients/).

## 7. Indexer (valgfritt)

Velg en indexertype eller en forhåndsinnstilling, fyll den ut, og trykk **Test** og **Save**, på samme måte som med nedlastingsklienten. Steget teller som ferdig så snart én indexer er lagret. Du kan velge **Skip for now** og legge til indexere senere under **Settings > Indexers**. Se [Indekserere](/nb/settings/indexers/).

## 8. Avslutt (Finish)

En oppsummering viser hvert steg med det som ble satt opp: Network-ruten din (og Public IP, hvis den ble sjekket), metadatakilden, Audible-kontoen, rotmappen og klienten og indexeren du la til. Hvert steg du lot vente til senere, vises som ventende. Hvis ingenting venter, sier oppsummeringen at alle ledd lyser. **Go to Library** lukker veiviseren.

Alt du hoppet over, ligger i **Settings** når du vil ha det. De neste fornuftige tingene er en kvalitetsprofil og bøkene dine: se [Hurtigstart](/nb/getting-started/quick-start/).
