---
title: Nedlastingsklienter
description: Støttede klienter, håndtering av fullførte nedlastinger og remote path mappings.
---

**Settings > Download Clients** kobler til programmet som gjør selve nedlastingen.

## Støttede klienter

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet og Blackhole (en overvåket mappe). Det er hele lista.

## Felt

Hvilke felt som vises, kommer an på klienten.

| Felt | Virkning |
|---|---|
| Name | Navn |
| Host, Port, URL Base | Hvor klienten lytter |
| Use SSL, Verify TLS certificate | HTTPS, og om sertifikatet sjekkes |
| Username, Password, API Key | Påloggingsinfo. En lagret hemmelighet vises aldri |
| Category | Kategori eller etikett ABM setter på nedlastingene sine, for eksempel `audiobooks` |
| Watch Folder, Directory | Blackhole: hvor filer skal legges, og hvor ferdige filer dukker opp |
| Client Priority | Hvilken klient som vinner når flere passer |
| Remove from Client, Also Delete Files, Remove Failed | Hva ABM fjerner fra klienten etter import eller feil |
| Queue Page Remove Action | Hva det gjør å fjerne en rad på Queue-siden: bare avvis i ABM, fjern fra klienten og behold filene, eller fjern og slett filene |

**Test** sjekker tilkoblingen. En klient som er slått av, er ikke det samme som en klient med feil. En klient som feiler, prøves igjen med økende ventetid.

## Håndtering av fullførte nedlastinger

| Innstilling | Standard | Virkning |
|---|---|---|
| Enable | på | Importer ferdige nedlastinger automatisk |
| Redownload Failed | på | Blokker en utgivelse som feilet, og søk igjen |
| Redownload Failed from Interactive Search | på | Det samme, for utgivelser du valgte for hånd |

Om importer hardlenker eller kopierer, styres av **Use Hardlinks instead of Copy** i [Mediehåndtering](/nb/settings/media-management/). Hvis mappen til klienten ikke har samme sti som ABM ser, legger du til en remote path mapping.

## Eksterne stitilordninger (Remote path mappings)

Når klienten melder `/downloads/audiobooks` og ABM ser det som `/data/audiobooks`, legger du til en tilordning.

| Felt | Virkning |
|---|---|
| Host | Klientverten tilordningen gjelder |
| Remote Path | Stien slik klienten melder den |
| Local Path | Den samme mappen slik ABM ser den |

## Fallgruver

- En undermappe som ikke kan leses i en ferdig nedlasting, stopper importen av hele den nedlastingen. Ingenting fjernes fra klienten, og det prøves igjen senere.
- Docker: monter nedlastingsmappen på samme sti i begge containerne når du kan. Tilordninger er reserveløsningen.
