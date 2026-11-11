---
title: Rychlý start
description: Od čerstvé instalace k první sledované knize.
---

Tohle je nejkratší cesta od běžícího kontejneru ke knize, kterou ABM hledá. Nejdřív ABM nainstaluj: viz [Instalace ABM](/cs/installation/).

## 1. Přihlas se

První návštěva otevře průvodce nastavením a jeho první krok vytvoří tvé přihlášení. Dokud to neuděláš, ABM požadavky odmítá. Průvodce pokrývá také kroky 2 až 4 níže a stránka [První nastavení](/cs/getting-started/first-run-setup/) popisuje každý jeho krok. Jak přihlašování funguje potom, vysvětluje stránka [Zabezpečení a přihlášení](/cs/settings/security/).

## 2. Vyber, jak se ABM dostane na internet

V průvodci je to krok Network. Později to najdeš v **Settings > [Network](/cs/settings/network/)**. Vyber, jak se ABM dostane na internet: proxy, tunel WireGuard, tvůj vlastní VPN kontejner nebo Direct. Nic neodejde, dokud jednu možnost nezvolíš.

## 3. Přidej kořenovou složku

Kořenová složka je místo, kde ABM drží knihy. Přidáš ji v **Settings > Media Management** v sekci **Root Folders**. Měla by to být stejná složka, kterou čte tvůj přehrávač (třeba Audiobookshelf).

## 4. Přidej indexer a klienta pro stahování

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse nebo Prowlarr. Viz [Indexery](/cs/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet nebo Blackhole. Viz [Klienti pro stahování](/cs/settings/download-clients/).

Pokud klient běží v jiném kontejneru, zkontroluj, že on i ABM vidí složku se staženými soubory na stejné cestě, nebo přidej mapování vzdálené cesty.

## 5. Nastav profil kvality

**Settings > Profiles** obsahuje žebříček kvality, podle kterého ABM rozhoduje, co stáhnout a co se počítá jako vylepšení. Čerstvá instalace žádný nemá, takže si jeden vytvoř. První profil, který uděláš, se stane výchozím, a doladit ho můžeš později. Viz [Profily](/cs/settings/profiles/).

## 6. Připoj Audible (volitelné)

Pokud máš knihy na Audible, připoj svůj účet v **Settings > Audible**. Vyber **Marketplace**, klikni na **Connect Audible Account** a pak na **I Understand, Open Amazon Login**. V nové kartě se přihlas k Amazonu. Prázdná stránka nebo "Page not found", na které potom skončíš, je v pořádku. Zkopíruj celou adresu z adresního řádku do **Redirect URL**, jestli chceš, doplň **Display Name** a klikni na **Complete Login**. Heslo se nikdy neukládá a první synchronizace knihovny začne hned. Viz [Audible](/cs/audible/).

## 7. Přines nebo přidej knihy

- Už máš sbírku? Použij [Library Import](/cs/library-import/).
- Začínáš od nuly? Použij **Library > Add New** a hledej podle názvu, autora nebo série. Viz [Přidání nové knihy](/cs/using/add-new/).

Přidaná kniha je hledaná, dokud se pro ni nenaimportuje soubor. Hledané knihy se objeví ve **Wanted > Missing** a vyhledávají se automaticky.

## 8. Sleduj, jak to maká

**Activity > Queue** ukazuje, co se stahuje. **Activity > History** ukazuje, co se stáhlo a naimportovalo. Když se něco pokazí, hledej v [Řešení problémů](/cs/troubleshooting/) a na stránce [Úlohy](/cs/system/tasks/).
