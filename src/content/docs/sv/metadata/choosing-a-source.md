---
title: Välja metadatakälla
description: Inbyggd, hostad eller din egen Libex-server.
---

:::caution[Kommer i nästa version]
Valet av källa finns inte i någon släppt version än. Släppta versioner använder den publika Libex-instansen på libexdb.com och har ingen inställning för det här.
:::

I nästa version har **Settings > Metadata > Source** inställningen **Metadata Source** med tre val.

| Val | Vad det betyder |
|---|---|
| Built-in (standard) | Libex körs inuti ABM. Den kräver att en utgående anslutning har valts först. |
| Hosted (libexdb.com) | ABM frågar den publika Libex-instansen. |
| Self-hosted | ABM frågar en Libex-server som du pekar den mot. Ange dess **Server URL**, till exempel `http://192.168.1.20:8000`. |

**Test** kollar den valda källan utan att spara. **Status** säger om den är redo. Ett val som du inte har sparat visar "Not in use yet - save to switch" tills du sparar.

## Inbyggd och den utgående anslutningen

Built-in pratar med Audible från din maskin, så den använder **Settings > General > Proxy & VPN**. Den sidan bestämmer vägen ut: en proxy, den inbyggda WireGuard-tunneln, din egen VPN-container eller en direktanslutning som du godkänner. Är ingen vald blockeras automatiska uppslag, och det står att de är blockerade. En vald väg som ligger nere blockerar också uppslag. Den faller aldrig tillbaka på din egen adress. Direct visar en varning om att Audible ser din IP-adress och böckerna ABM slår upp.

## Hostad och self-hosted

Med de här två frågar ABM en Libex-server och servern pratar med Audible. En self-hosted URL kontrolleras innan den sparas, och en tom eller osäker URL vägras. En server som ligger nere rapporteras som att metadatakällan inte är tillgänglig, med dess namn.

## Vilken ska du välja

- Vill du att det bara ska funka och bryr dig inte om att Audible ser din adress: Built-in med direktanslutning, eller Hosted.
- Vill du inte visa din IP för Audible: Built-in via en VPN eller proxy, eller Hosted.
- Kör du redan en Libex-server: Self-hosted.
