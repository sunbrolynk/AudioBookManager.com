---
title: Nedladdningsklienter
description: Klienter som stöds, hantering av färdiga nedladdningar och remote path mappings.
---

**Settings > Download Clients** kopplar in programmet som sköter själva nedladdningen.

## Klienter som stöds

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet och Blackhole (en bevakad mapp). Det är hela listan.

## Fält

Vilka fält som visas beror på klienten.

| Fält | Effekt |
|---|---|
| Name | Namn |
| Host, Port, URL Base | Där klienten lyssnar |
| Use SSL, Verify TLS certificate | HTTPS och om certifikatet kontrolleras |
| Username, Password, API Key | Inloggningsuppgifter. En sparad hemlighet visas aldrig |
| Category | Kategori eller etikett som ABM sätter på sina nedladdningar, till exempel `audiobooks` |
| Watch Folder, Directory | Blackhole: var filer ska läggas och var färdiga filer dyker upp |
| Client Priority | Vilken klient som vinner när flera passar |
| Remove from Client, Also Delete Files, Remove Failed | Vad ABM tar bort från klienten efter import eller misslyckande |
| Queue Page Remove Action | Vad det gör att ta bort en rad på sidan Queue: avfärda bara i ABM, ta bort från klienten och behåll filerna, eller ta bort och radera filerna |

**Test** kollar anslutningen. En avaktiverad klient är inte detsamma som en ohälsosam. En klient som strular försöks igen med en växande paus.

## Hantering av färdiga nedladdningar

| Inställning | Standard | Effekt |
|---|---|---|
| Enable | på | Importera färdiga nedladdningar automatiskt |
| Redownload Failed | på | Blocklista en misslyckad release och sök igen |
| Redownload Failed from Interactive Search | på | Samma sak, för releaser du valt för hand |

Om importer hårdlänkar eller kopierar styrs av **Use Hardlinks instead of Copy** i [Mediehantering](/sv/settings/media-management/). Om klientens mapp inte har samma sökväg som ABM ser, lägg till en remote path mapping.

## Remote path mappings (mappning av fjärrsökvägar)

När klienten rapporterar `/downloads/audiobooks` och ABM ser den som `/data/audiobooks` lägger du till en mappning.

| Fält | Effekt |
|---|---|
| Host | Klientvärden som mappningen gäller |
| Remote Path | Sökvägen som klienten rapporterar den |
| Local Path | Samma mapp som ABM ser den |

## Fallgropar

- En undermapp som inte går att läsa i en färdig nedladdning stoppar importen av hela den nedladdningen. Inget tas bort från klienten, och det försöks igen senare.
- Docker: montera nedladdningsmappen på samma sökväg i båda containrarna när du kan. Mappningar är reservlösningen.
