---
title: Velge metadatakilde
description: Innebygd, hostet eller din egen Libex-server.
---

:::caution[Kommer i neste versjon]
Valg av kilde er ikke med i en utgitt versjon ennå. Utgitte versjoner bruker den offentlige Libex-instansen på libexdb.com og har ingen innstilling for dette.
:::

I neste versjon har **Settings > Metadata > Source** en **Metadata Source**-innstilling med tre valg.

| Valg | Hva det betyr |
|---|---|
| Built-in (standard) | Libex kjører inne i ABM. Den trenger at du har valgt en utgående tilkobling først. |
| Hosted (libexdb.com) | ABM spør den offentlige Libex-instansen. |
| Self-hosted | ABM spør en Libex-server du peker den mot. Fyll inn **Server URL**, for eksempel `http://192.168.1.20:8000`. |

**Test** sjekker den valgte kilden uten å lagre. **Status** sier om den er klar. Et valg du ikke har lagret, viser "Not in use yet - save to switch" til du lagrer.

## Innebygd og den utgående tilkoblingen

Built-in snakker med Audible fra maskinen din, så den bruker **Settings > General > Proxy & VPN**. Den siden bestemmer ruta: en proxy, den innebygde WireGuard-tunnelen, din egen VPN-container eller en direkte tilkobling du bekrefter. Er ingen valgt, blir automatiske oppslag blokkert, og det står hvorfor. En valgt rute som er nede, blokkerer også oppslag. Den faller aldri tilbake til din egen adresse. Direct viser en advarsel om at Audible ser IP-adressen din og bøkene ABM slår opp.

## Hostet og selvhostet

Med disse to spør ABM en Libex-server, og serveren snakker med Audible. En selvhostet URL blir sjekket før den lagres, og en tom eller usikker en blir avvist. En server som er nede, meldes som at metadatakilden er utilgjengelig, med navnet sitt.

## Hva du bør velge

- Vil du bare at det skal virke, og bryr deg ikke om at Audible ser adressen din: Built-in med direkte tilkobling, eller Hosted.
- Vil du ikke vise IP-en din til Audible: Built-in gjennom VPN eller proxy, eller Hosted.
- Kjører du allerede en Libex-server: Self-hosted.
