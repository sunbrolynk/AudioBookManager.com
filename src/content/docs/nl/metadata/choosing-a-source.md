---
title: Een metadatabron kiezen
description: Ingebouwd, gehost of je eigen Libex-server.
---

:::caution[Komt in de volgende release]
De keuze van de bron zit nog niet in een uitgebrachte versie. Uitgebrachte versies gebruiken de publieke Libex-instantie op libexdb.com en hebben hier geen instelling voor.
:::

In de volgende release heeft **Settings > Metadata > Source** een instelling **Metadata Source** met drie keuzes.

| Keuze | Wat het betekent |
|---|---|
| Built-in (standaard) | Libex draait binnen ABM. Daarvoor moet je eerst een uitgaande verbinding kiezen. |
| Hosted (libexdb.com) | ABM vraagt het aan de publieke Libex-instantie. |
| Self-hosted | ABM vraagt het aan een Libex-server die jij opgeeft. Vul de **Server URL** in, bijvoorbeeld `http://192.168.1.20:8000`. |

**Test** controleert de gekozen bron zonder op te slaan. **Status** laat zien of hij klaar is. Een keuze die je nog niet hebt opgeslagen toont "Not in use yet - save to switch" tot je opslaat.

## Ingebouwd en de uitgaande verbinding

Built-in praat vanaf jouw machine met Audible, dus gebruikt het **Settings > General > Proxy & VPN**. Die pagina bepaalt de route: een proxy, de ingebouwde WireGuard-tunnel, je eigen VPN-container, of een directe verbinding die je bewust bevestigt. Is er niks gekozen, dan worden automatische lookups geblokkeerd en zie je waarom. Een gekozen route die plat ligt, blokkeert lookups ook. Er wordt nooit teruggevallen op je eigen adres. Bij Direct krijg je een waarschuwing dat Audible je IP-adres ziet en welke boeken ABM opzoekt.

## Gehost en self-hosted

Bij deze twee vraagt ABM het aan een Libex-server, en die server praat met Audible. Een self-hosted URL wordt gecontroleerd voordat hij wordt opgeslagen, en een lege of onveilige wordt geweigerd. Een server die plat ligt, wordt gemeld als een metadatabron die niet bereikbaar is, met zijn naam erbij.

## Welke kies je?

- Wil je dat het gewoon werkt en vind je het niet erg dat Audible je adres ziet: Built-in met een directe verbinding, of Hosted.
- Wil je je IP niet aan Audible laten zien: Built-in via een VPN of proxy, of Hosted.
- Draai je al een Libex-server: Self-hosted.
