---
title: Klienti pro stahování
description: Podporovaní klienti, zpracování dokončených stahování a mapování vzdálených cest.
---

**Settings > Download Clients** připojí program, který samotné stahování dělá.

## Podporovaní klienti

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet a Blackhole (sledovaná složka). To je celý seznam.

## Pole

Která pole se ukážou, záleží na klientovi.

| Pole | Co dělá |
|---|---|
| Name | Popisek |
| Host, Port, URL Base | Kde klient poslouchá |
| Use SSL, Verify TLS certificate | HTTPS a jestli se ověřuje certifikát |
| Username, Password, API Key | Přihlašovací údaje. Uložený tajný údaj se nikdy nezobrazí |
| Category | Kategorie nebo popisek, který ABM dává svým stahováním, třeba `audiobooks` |
| Watch Folder, Directory | Blackhole: kam soubory hodit a kde se objeví hotové soubory |
| Client Priority | Který klient vyhraje, když jich sedí víc |
| Remove from Client, Also Delete Files, Remove Failed | Co ABM po importu nebo selhání z klienta odstraní |
| Queue Page Remove Action | Co udělá odebrání řádku na stránce Queue: zahodit jen z ABM, odebrat z klienta a soubory nechat, nebo odebrat i se soubory |

**Test** ověří připojení. Vypnutý klient není nezdravý klient. Klient, který selhává, se zkouší znovu s postupně delší pauzou.

## Zpracování dokončených stahování (Completed download handling)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Enable | zapnuto | Dokončená stahování se importují automaticky |
| Redownload Failed | zapnuto | Neúspěšné vydání dá na blocklist a hledá znovu |
| Redownload Failed from Interactive Search | zapnuto | Totéž pro vydání, která jsi vybral ručně |

Když dokončené stahování obsahuje stejnou knihu víckrát, v různých formátech, ABM naimportuje jen kopii, kterou profil kvality knihy řadí nejvýš. Při přiřazování stahování ke knize se taky měří jen jedna kopie, ta, kterou nejvýš řadí výchozí profil kvality. Formáty, které profil řadí stejně nebo v sobě nemá, jdou v pořadí M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA. Ostatní kopie ABM nechá ve stahování; smažou se jen tehdy, když **Also Delete Files** po importu stahování odstraní. Jeden soubor vedle sady částí se počítá jako druhá kopie jen tehdy, když jejich délky souhlasí; jinak jsou to části jedné knihy. Obálka a další soubory navíc přijdou s kopií, kterou ABM vezme. Když složka stahování obsahuje i zvuk jiné knihy, přijdou jen soubory navíc pojmenované podle importovaného zvuku.

Jestli importy dělají hardlink, nebo kopii, určuje **Use Hardlinks instead of Copy** ve [Správě médií](/cs/settings/media-management/). Pokud složka klienta není na stejné cestě, jakou vidí ABM, přidej mapování vzdálené cesty.

## Mapování vzdálených cest (Remote path mappings)

Když klient hlásí `/downloads/audiobooks` a ABM tu složku vidí jako `/data/audiobooks`, přidej mapování.

| Pole | Co dělá |
|---|---|
| Host | Hostitel klienta, pro kterého mapování platí |
| Remote Path | Cesta tak, jak ji hlásí klient |
| Local Path | Tatáž složka tak, jak ji vidí ABM |

## Na co si dát pozor

- Podsložka, kterou nejde přečíst, v dokončeném stahování úplně zastaví import toho stahování. Z klienta se nic neodstraní a později se to zkusí znovu.
- Docker: kde to jde, připoj složku se stahováním v obou kontejnerech na stejnou cestu. Mapování je až záložní řešení.
