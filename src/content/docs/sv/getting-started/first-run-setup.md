---
title: Första konfigurationen
description: Installationsguiden på en ny installation, steg för steg.
---

:::caution[Kommer i en senare version]
Installationsguiden finns inte i någon släppt version än. Släppta versioner frågar bara efter en inloggning första gången.
:::

På en ny installation öppnar det första besöket en installationsguide i stället för inloggningssidan. Den leder dig genom allt ABM behöver, ett steg i taget. Den visas bara så länge det inte finns något konto. Alla val kan ändras efteråt i **Settings**.

Överst går en kedja med åtta länkar. Varje länk är ett steg, och kedjan visar var du är:

- **Done**: steget är klart.
- **Current step**: steget på skärmen.
- **Not started**: ett steg du inte har nått än.
- **Later**: ett steg du har gått förbi utan att göra klart det. Det väntar kvar, och du kan göra klart det i **Settings** när du vill.

**Back** går ett steg tillbaka. **Continue** sparar steget och går vidare. Tre steg, Audible, Download client och Indexer, har också **Skip for now**.

## 1. Konto (Account)

Skapar din inloggning och loggar in dig. Du väljer ett användarnamn och ett lösenord på minst 8 tecken, och skriver lösenordet två gånger.

| Inställning | Standard | Effekt |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms använder en inloggningssida. Basic (Browser Popup) använder webbläsarens egen inloggningsruta |
| Authentication required | Everywhere | Everywhere kräver inloggning från alla adresser. Skip on local network släpper in enheter på ditt hem- eller kontorsnätverk utan inloggning |

Det är samma inställningar som på [Säkerhet och inloggning](/sv/settings/security/). Kontot skapas när du trycker på **Continue**. När det finns bekräftar steget det bara.

## 2. Nätverk (Network)

Network är huvudbrytaren. Inget ABM skickar lämnar din maskin förrän du har valt en route här, så stegen Metadata och Audible beror på den. **Continue** förblir av tills routen är komplett. Steget går bara att hoppa över om dess inställningar inte går att läsa in: då visar det felet med **Retry**, **Back** och **Skip for now**. Tills en route är vald blockerar ABM allt det skickar, och steget Finish visar Network som väntande.

| Val | Vad du ger ABM |
|---|---|
| Proxy | Proxyns typ, värdnamn och port, och eventuellt användarnamn och lösenord. SOCKS4 stöds inte |
| WireGuard | En `.conf` från din VPN-leverantör, inklistrad eller släpt in. Om en tunnel redan är sparad används den |
| Own VPN container | Inget att fylla i. Du kryssar i en ruta som säger att all ABMs trafik redan lämnar maskinen genom en VPN- eller proxycontainer. ABM kan inte kontrollera det |
| Direct | Inget att fylla i. Du kryssar i en ruta som säger att varje tjänst ABM kontaktar ser din egen IP-adress |

**Continue** sparar routen och visar sedan **Public IP**-kontrollen, så att du ser att routen fungerar innan något går ut på nätet. Med **Change route** kan du välja igen. Det är samma inställningar som [Network](/sv/settings/network/).

## 3. Metadata

Välj var ABM slår upp böcker. Det kommer före dina mappar, eftersom den första mappskanningen matchar dina böcker mot den.

| Val | Vad det betyder |
|---|---|
| Built-in | Libex körs inuti ABM. Inget konto och ingen extra tjänst. Använder routen från steget Network |
| Hosted | ABM frågar den publika Libex-instansen på libexdb.com |
| Self-hosted | ABM frågar din egen Libex-server. Ange dess **Server URL**. **Test** kontrollerar den utan att spara |

Det finns också en **Local Storage**-ruta. Den sparar en permanent, krypterad, lokal logg över varje bok ABM slår upp, söker efter, lägger till, importerar eller ser i Discover, och den fungerar med alla tre källorna. När den väl är på kan den bara stängas av i **Settings > Metadata**.

**Continue** sparar källan och slår på Local Storage om du kryssade i den. Om den valda källan inte kan nå ut än, till exempel Built-in utan vald route, säger steget varför. Se [Välja metadatakälla](/sv/metadata/choosing-a-source/). Om stegets inställningar inte går att läsa in visar det felet med **Retry**, **Back** och **Skip for now**, och du kan ställa in källan senare under **Settings > Metadata**.

## 4. Audible (valfritt)

Loggar in på ditt Audible-konto så att ABM kan läsa ditt bibliotek. Det går genom den route du valde i steget Network. Om ingen route är vald, eller Audible-trafik är blockerad på den, säger steget det, och **Back to Network** tar dig tillbaka. Själva inloggningen är densamma som på [Audible](/sv/audible/). När du är inloggad visar steget kontot, och **Continue** är tillgänglig.

Du kan välja **Skip for now** och koppla Audible senare under **Settings > Audible**.

## 5. Rotmapp (Root folder)

En rotmapp är där ABM förvarar dina böcker. Välj mappen där dina ljudböcker ligger, eller dit nya ska hamna. Det bör vara samma mapp som din spelare (till exempel Audiobookshelf) läser. Du kan bläddra bland serverns mappar och skapa en ny i webbläsaren. Den första rotmappen du lägger till blir standard. Det här steget går inte att hoppa över. Du kan lägga till fler rötter senare under **Settings > Media Management**.

## 6. Nedladdningsklient (valfritt)

Välj en av de klienter som stöds, Usenet eller torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet eller Blackhole. Fyll i uppgifterna, tryck på **Test** och sedan **Save**. Klienten läggs till direkt i steget. Du kan lägga till en till, och **Refresh** laddar om listan. Steget räknas som klart så snart en klient är sparad.

Du kan välja **Skip for now** och lägga till en klient senare under **Settings > Download Clients**. Se [Nedladdningsklienter](/sv/settings/download-clients/).

## 7. Indexer (valfritt)

Välj en indexertyp eller en förinställning, fyll i den och tryck på **Test** och **Save**, på samma sätt som med nedladdningsklienten. Steget räknas som klart så snart en indexer är sparad. Du kan välja **Skip for now** och lägga till indexers senare under **Settings > Indexers**. Se [Indexerare](/sv/settings/indexers/).

## 8. Klart (Finish)

En sammanfattning listar varje steg med det som ställdes in: din Network-route (och Public IP, om den kontrollerades), metadatakällan, Audible-kontot, rotmappen samt klienten och indexern du lade till. Varje steg du lät vänta till senare visas som väntande. Om ABM inte kan läsa tillbaka ett stegs tillstånd, till exempel för att listan över nedladdningsklienter inte går att läsa in, visar raden **Could not check** och en **Retry**-knapp dyker upp. Om inget väntar säger sammanfattningen att varje länk lyser. **Go to Library** stänger guiden.

Allt du hoppade över finns i **Settings** när du vill ha det. De nästa vettiga sakerna är en kvalitetsprofil och dina böcker: se [Snabbstart](/sv/getting-started/quick-start/).
