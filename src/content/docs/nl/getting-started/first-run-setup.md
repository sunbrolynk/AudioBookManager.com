---
title: Eerste configuratie
description: De installatiewizard bij een nieuwe installatie, stap voor stap.
---

:::caution[Komt in een latere release]
De installatiewizard zit nog niet in een uitgebrachte versie. Uitgebrachte versies vragen bij het eerste bezoek alleen om een login.
:::

Bij een nieuwe installatie opent het eerste bezoek een installatiewizard in plaats van de inlogpagina. Die leidt je stap voor stap door alles wat ABM nodig heeft. Hij verschijnt alleen zolang er nog geen account is. Elke keuze kun je daarna wijzigen in **Settings**.

Bovenaan loopt een keten van acht schakels. Elke schakel is een stap, en de keten laat zien waar je bent:

- **Done**: de stap is klaar.
- **Current step**: de stap die je nu ziet.
- **Not started**: een stap die je nog niet hebt bereikt.
- **Later**: een stap die je voorbij bent zonder hem af te maken. Hij blijft wachten, en je kunt hem afmaken via **Settings** wanneer je wilt.

**Back** gaat een stap terug. **Continue** slaat de stap op en gaat verder. Drie stappen, Audible, Download client en Indexer, hebben ook **Skip for now**.

## 1. Account

Maakt je login aan en logt je in. Je kiest een gebruikersnaam en een wachtwoord van minstens 8 tekens, en typt het wachtwoord twee keer.

| Instelling | Standaard | Effect |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms gebruikt een inlogpagina. Basic (Browser Popup) gebruikt de eigen inlogprompt van je browser |
| Authentication required | Everywhere | Everywhere vraagt om in te loggen vanaf elk adres. Skip on local network laat apparaten op je thuis- of kantoornetwerk zonder inloggen binnen |

Dit zijn dezelfde instellingen als op [Beveiliging en inloggen](/nl/settings/security/). Het account wordt aangemaakt als je op **Continue** drukt. Als het er eenmaal is, bevestigt deze stap het alleen nog.

## 2. Netwerk (Network)

Network is de hoofdschakelaar. Niets wat ABM verstuurt verlaat je machine totdat je hier een route kiest, dus de stappen Metadata en Audible hangen ervan af. **Continue** blijft uit tot de route compleet is. De stap kun je alleen overslaan als de instellingen niet laden: dan toont hij de fout met **Retry**, **Back** en **Skip for now**. Zolang er geen route is gekozen, blokkeert ABM alles wat het verstuurt, en de stap Finish toont Network als wachtend.

| Keuze | Wat je ABM geeft |
|---|---|
| Proxy | Het type, de hostnaam en de poort van de proxy, en eventueel een gebruikersnaam en wachtwoord. SOCKS4 wordt niet ondersteund |
| WireGuard | Een `.conf` van je VPN-aanbieder, geplakt of erin gesleept. Is er al een tunnel opgeslagen, dan wordt die gebruikt |
| Own VPN container | Niets in te vullen. Je vinkt een vakje aan dat zegt dat al het verkeer van ABM al via een VPN- of proxycontainer gaat. ABM kan dit niet controleren |
| Direct | Niets in te vullen. Je vinkt een vakje aan dat zegt dat elke dienst die ABM contacteert je eigen IP-adres ziet |

**Continue** slaat de route op en toont daarna de **Public IP**-controle, zodat je ziet dat de route werkt voordat er iets online gaat. Met **Change route** kies je opnieuw. Dit zijn dezelfde instellingen als [Network](/nl/settings/network/).

## 3. Metadata

Kies waar ABM boeken opzoekt. Dit komt vóór je mappen, omdat de eerste mapscan je boeken hiermee vergelijkt.

| Keuze | Wat het betekent |
|---|---|
| Built-in | Libex draait in ABM. Geen account en geen extra dienst. Gebruikt de route uit de stap Network |
| Hosted | ABM vraagt de publieke Libex-instantie op libexdb.com |
| Self-hosted | ABM vraagt je eigen Libex-server. Vul de **Server URL** in. **Test** controleert hem zonder op te slaan |

Er is ook een vakje **Local Storage**. Dat bewaart een permanent, versleuteld, lokaal overzicht van elk boek dat ABM opzoekt, zoekt, toevoegt, importeert of in Discover ziet, en het werkt met alle drie de bronnen. Als het eenmaal aan staat, kun je het alleen nog uitzetten in **Settings > Metadata**.

**Continue** slaat de bron op en zet Local Storage aan als je het hebt aangevinkt. Kan de gekozen bron nog niet naar buiten, bijvoorbeeld Built-in zonder gekozen route, dan zegt de stap waarom. Zie [Een metadatabron kiezen](/nl/metadata/choosing-a-source/). Laden de instellingen van de stap niet, dan toont hij de fout met **Retry**, **Back** en **Skip for now**, en kun je de bron later instellen onder **Settings > Metadata**.

## 4. Audible (optioneel)

Logt in op je Audible-account zodat ABM je bibliotheek kan lezen. Het gaat via de route die je in de stap Network hebt gekozen. Is er geen route gekozen, of wordt Audible-verkeer erop geblokkeerd, dan zegt de stap dat en brengt **Back to Network** je terug. De inlog zelf is dezelfde als op [Audible](/nl/audible/). Als je bent ingelogd, toont de stap het account en is **Continue** beschikbaar.

Je kunt **Skip for now** kiezen en Audible later koppelen via **Settings > Audible**.

## 5. Rootmap (Root folder)

Een rootmap is waar ABM je boeken bewaart. Kies de map waar je luisterboeken staan, of waar nieuwe heen moeten. Het hoort dezelfde map te zijn die je speler (bijvoorbeeld Audiobookshelf) leest. Je kunt door de mappen van de server bladeren en in de browser een nieuwe maken. De eerste rootmap die je toevoegt wordt de standaard. Deze stap kun je niet overslaan. Meer roots voeg je later toe via **Settings > Media Management**.

## 6. Downloadclient (optioneel)

Kies een van de ondersteunde clients, Usenet of torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet of Blackhole. Vul de gegevens in, druk op **Test** en dan op **Save**. De client wordt meteen in de stap toegevoegd. Je kunt er nog een toevoegen, en **Refresh** laadt de lijst opnieuw. De stap telt als klaar zodra er één client is opgeslagen.

Je kunt **Skip for now** kiezen en later een client toevoegen via **Settings > Download Clients**. Zie [Downloadclients](/nl/settings/download-clients/).

## 7. Indexer (optioneel)

Kies een indexertype of preset, vul hem in en druk op **Test** en **Save**, net als bij de downloadclient. De stap telt als klaar zodra er één indexer is opgeslagen. Je kunt **Skip for now** kiezen en later indexers toevoegen via **Settings > Indexers**. Zie [Indexers](/nl/settings/indexers/).

## 8. Afronden (Finish)

Een overzicht toont elke stap met wat is ingesteld: je Network-route (en het Public IP, als dat is gecontroleerd), de metadatabron, het Audible-account, de rootmap, en de client en indexer die je hebt toegevoegd. Elke stap die je voor later hebt laten liggen staat als wachtend. Kan ABM de status van een stap niet terugkijken, bijvoorbeeld omdat de lijst met downloadclients niet laadt, dan toont die rij **Could not check** en verschijnt er een **Retry**-knop. Wacht er niets, dan zegt het overzicht dat elke schakel brandt. **Go to Library** sluit de wizard.

Alles wat je hebt overgeslagen staat in **Settings** wanneer je het wilt. Handige volgende dingen zijn een kwaliteitsprofiel en je boeken: zie [Snel aan de slag](/nl/getting-started/quick-start/).
