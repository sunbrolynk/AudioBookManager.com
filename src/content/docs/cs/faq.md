---
title: Časté otázky
description: Krátké odpovědi na otázky, které lidi zajímají jako první.
---

## Nahrazuje ABM Audiobookshelf?

Ne. Audiobookshelf je přehrávač a ABM je knihovník. Nasměruj oba na stejnou složku s knihovnou a nech každý dělat svou práci.

## Odkud se berou metadata?

Z [Libexu](https://libexdb.com), otevřené služby s metadaty z Audible. ABM je obnovuje podle plánu a obálku, kterou sis vybral sám, můžeš zamknout, aby ji obnova nechala být.

## Potřebuju samostatnou databázi?

Ne. ABM má všechno v jednom souboru SQLite v `/config`. Nic dalšího spouštět nemusíš.

## Dostanu se k němu i zvenku?

Ano, od verze 0.17.0, ale vystavovat ABM do internetu nedoporučuju, stejně jako aplikace Servarr. Bezpečnější je chodit přes VPN, třeba WireGuard nebo Tailscale. Ve výchozím stavu se musí přihlásit všechno, co přichází zvenčí tvé lokální sítě, a když nastavíš **Authentication Required** na **Enabled**, přihlašuje se každý, včetně tvé vlastní LAN. Za nginx, Traefikem nebo Caddy nastav `TRUSTED_PROXIES` na adresu proxy. Uložené přihlašovací údaje jsou šifrované. Viz [návod k reverzní proxy](/cs/guides/reverse-proxy/) a [Konfigurace](/cs/configuration/#reverzní-proxy).

## Které klienty pro stahování to umí?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet a Blackhole.

## Co se stalo s Readarrem?

Readarr řešil knihy a audioknihy dohromady a mezitím skončil. ABM je jen pro audioknihy a stojí na návrhu, se kterým přišly aplikace Servarr.

## Jde to nainstalovat bez Dockeru?

Zatím ne. Prozatím je jedinou cestou Docker. V plánu jsou nativní instalace pro Linux, Windows a macOS a k tomu Kubernetes, Unraid a Proxmox. Viz [Další způsoby instalace](/cs/installation/#další-způsoby-instalace).

## Kolik to stojí?

Nic. Je zdarma a open source pod GPL-3.0. Jestli ti ušetří večer, je tu [Ko-fi](https://ko-fi.com/sunbrolynk).

## Můžu upravit název knihy, autory nebo popis?

Ne. Tahle data pocházejí ze zdroje metadat a ABM je ručně neupravuje. Pod kontrolou máš obálku (obálka, kterou sis vybral, je zamčená), kdy se spouští obnova, které doprovodné soubory a audio tagy se zapisují, štítky a automatické štítky, sledování a profil kvality. Viz [Tvoje metadata, tvoje kontrola](/cs/metadata/control/).

## Umí ABM zapsat kapitoly, popisy a tagy tam, kde je Audiobookshelf čte?

Zapisuje `cover.jpg`, soubor `.opf`, `desc.txt` a `reader.txt` a umí zapisovat značky do zvuku. Porovnávání kapitol s vydanou edicí a soubory `.cue` jsou plánované na pozdější verzi. Viz [Sidecar soubory](/cs/using/sidecars/).

## Můžu své soubory převádět?

Ano: převod, slučování, dělení a přidávání kapitol, ve frontě. Viz [Převody](/cs/using/conversions/).

## Můžu naimportovat svou stávající sbírku?

Ano, přes [Library Import](/cs/library-import/). Podívej se taky na [Přesun knihovny do ABM](/cs/guides/moving-a-library-in/).

## Je tu mobilní rozložení?

Ano, pod šířkou 768 px. Viz [Používání na telefonu](/cs/phone/).

## Umí ABM používat víc účtů Audible?

Ano. Každý účet má svou vlastní knihovnu. Viz [Audible](/cs/audible/).
