---
title: Vælg en metadatakilde
description: Indbygget, hostet eller din egen Libex-server.
---

:::caution[Kommer i næste udgivelse]
Valget af kilde er ikke med i en udgivet version endnu. Udgivne versioner bruger den offentlige Libex-instans på libexdb.com og har ingen indstilling for det.
:::

I næste udgivelse har **Settings > Metadata > Source** en indstilling, der hedder **Metadata Source**, med tre valg.

| Valg | Hvad det betyder |
|---|---|
| Built-in (standard) | Libex kører inde i ABM. Det kræver, at der er valgt en udgående forbindelse først. |
| Hosted (libexdb.com) | ABM spørger den offentlige Libex-instans. |
| Self-hosted | ABM spørger en Libex-server, du peger den på. Skriv dens **Server URL**, fx `http://192.168.1.20:8000`. |

**Test** tjekker den valgte kilde uden at gemme. **Status** fortæller, om den er klar. Et valg, du ikke har gemt, viser "Not in use yet - save to switch", indtil du gemmer.

## Indbygget og den udgående forbindelse

Built-in snakker med Audible fra din maskine, så den bruger **Settings > General > Proxy & VPN**. Den side bestemmer ruten: en proxy, den indbyggede WireGuard-tunnel, din egen VPN-container eller en direkte forbindelse, du accepterer. Er der ikke valgt nogen, bliver automatiske opslag blokeret, og det bliver sagt. En valgt rute, der er nede, blokerer også opslag. Den falder aldrig tilbage til din egen adresse. Direct viser en advarsel om, at Audible kan se din IP-adresse og de bøger, ABM slår op.

## Hostet og selvhostet

Med de to spørger ABM en Libex-server, og serveren snakker med Audible. En selvhostet URL bliver tjekket, før den bliver gemt, og en tom eller usikker en bliver afvist. En server, der er nede, bliver meldt som at metadatakilden ikke er tilgængelig, med dens navn.

## Hvad skal du vælge

- Vil du bare have, at det virker, og er du ligeglad med, at Audible ser din adresse: Built-in med en direkte forbindelse, eller Hosted.
- Vil du ikke vise din IP til Audible: Built-in gennem en VPN eller proxy, eller Hosted.
- Kører du allerede en Libex-server: Self-hosted.
