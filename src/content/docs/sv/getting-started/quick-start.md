---
title: Snabbstart
description: Från en ny installation till din första bevakade bok.
---

Det här är den kortaste vägen från en container som är igång till en bok som söks efter. Installera ABM först: se [Installera ABM](/sv/installation/).

## 1. Logga in

Första gången guidas du genom att skapa en inloggning. Tills du har gjort det vägrar ABM alla anrop. Hur inloggningen fungerar efter det står i [Säkerhet och inloggning](/sv/settings/security/).

## 2. Välj hur ABM når internet

Under **Settings > General** finns sektionen **Proxy & VPN**. Om du tänker använda den inbyggda metadatakällan måste du välja en anslutning först. Se [Välja metadatakälla](/sv/metadata/choosing-a-source/).

## 3. Lägg till en rotmapp

En rotmapp är där ABM förvarar böcker. Lägg till den under **Settings > Media Management** i sektionen **Root Folders**. Det ska vara samma mapp som din spelare (till exempel Audiobookshelf) läser.

## 4. Lägg till en indexerare och en nedladdningsklient

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse eller Prowlarr. Se [Indexerare](/sv/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet eller Blackhole. Se [Nedladdningsklienter](/sv/settings/download-clients/).

Om klienten körs i en annan container, kolla att den och ABM ser nedladdningsmappen på samma sökväg, eller lägg till en remote path mapping (mappning av fjärrsökväg).

## 5. Ställ in en kvalitetsprofil

**Settings > Profiles** innehåller kvalitetsstegen som ABM använder för att avgöra vad som ska hämtas och vad som räknas som en uppgradering. En ny installation har ingen, så skapa en. Den första profilen du gör blir standard, och du kan finslipa den senare. Se [Profiler](/sv/settings/profiles/).

## 6. Koppla Audible (valfritt)

Om du har böcker på Audible kopplar du ditt konto under **Settings > Audible**. Välj din **Marketplace**, tryck på **Connect Audible Account** och sedan **I Understand, Open Amazon Login**. Logga in på Amazon i den nya fliken. Den tomma sidan eller sidan med "Page not found" som du hamnar på efteråt är väntad. Kopiera hela adressen från adressfältet till **Redirect URL**, lägg till ett **Display Name** om du vill och tryck på **Complete Login**. Ditt lösenord sparas aldrig, och den första synken av biblioteket startar direkt. Se [Audible](/sv/audible/).

## 7. Ta in eller lägg till böcker

- Har du redan en samling? Använd [Biblioteksimport](/sv/library-import/).
- Börjar du från noll? Använd **Library > Add New** och sök på titel, författare eller serie. Se [Lägg till nytt](/sv/using/add-new/).

En bok du lägger till är önskad tills en fil för den har importerats. Önskade böcker visas under **Wanted > Missing** och söks automatiskt.

## 8. Se den jobba

**Activity > Queue** visar vad som laddas ner. **Activity > History** visar vad som har hämtats och importerats. När något går fel är [Felsökning](/sv/troubleshooting/) och sidan [Uppgifter](/sv/system/tasks/) rätt ställen att titta på.
