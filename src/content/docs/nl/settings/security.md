---
title: Beveiliging en inloggen
description: Authenticatiemodi, API-sleutels, vertrouwde proxy's, lokale netwerken en de content security policy.
---

De sectie **Security** van **Settings > General** bepaalt wie ABM mag gebruiken en hoe.

## Authenticatie

| Instelling | Standaard | Keuzes |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Laat het wachtwoord leeg om het huidige te houden |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | leeg | Extra CIDR-ranges waarvan de clients niet hoeven in te loggen |
| CORS Allowed Domains | leeg | Andere origins die de API vanuit een browser mogen aanroepen. Vereist een herstart |

De twee modi van **Authentication Required** die je gaat gebruiken:

- **Enabled**: iedereen logt in, ook op je LAN.
- **Disabled for Local Addresses** (opgeslagen als `local_disabled`): een request vanaf een lokaal adres hoeft niet in te loggen. Loopback, de private ranges, link-local en IPv6 unique-local tellen als lokaal. **Local Networks** voegt er meer toe en vervangt ze nooit.

Bij een verse installatie worden requests geweigerd tot de setup klaar is.

## Reverse proxy's

Draait ABM achter een proxy, zet dan `TRUSTED_PROXIES` zodat ABM weet welke forwarding-headers het kan geloven. Een request met forwarding-headers vanaf een adres dat niet in die lijst staat, is nooit lokaal en moet inloggen. Dat is expres zo. Zie [Reverse proxy](/nl/guides/reverse-proxy/).

Een proxy die geen forwarding-headers meestuurt, ziet eruit als een lokale client. Draai je zo'n proxy, zet Authentication Required dan op Enabled.

## Wachtwoordbevestiging

Sommige wijzigingen vragen opnieuw om je huidige wachtwoord: het opslaan van de Security-instellingen en het tonen of opnieuw genereren van de API-sleutel. Een fout wachtwoord telt als mislukte aanmelding in het beveiligingslog. Is er nog geen wachtwoord ingesteld, dan wordt er geen gevraagd.

## API-sleutel

De sleutel wordt pas getoond als je je wachtwoord bevestigt. **Regenerate API Key** maakt een nieuwe, toont die één keer, en maakt de oude sleutel meteen ongeldig. Je kunt de sleutel niet zelf intypen. Kan de opgeslagen sleutel niet ontsleuteld worden (omdat het app-secret veranderd is), genereer hem dan opnieuw.

Stuur hem mee als `X-Api-Key` of als parameter `apikey`. Een sleutel vanaf een LAN-adres telt als request met sleutel. Zie [API](/nl/system/api/).

## Schrijfacties vanuit de browser

Een browserrequest dat iets wijzigt, wordt geweigerd met `cross_origin_rejected`, tenzij de origin overeenkomt met het adres waarop ABM bereikt wordt, met de doorgestuurde host van een vertrouwde proxy, of met een toegestaan CORS-domein. Requests met een API-sleutel hebben hier geen last van.

## Content security policy

ABM stuurt een Content-Security-Policy-header mee, tenzij `SECURITY_HEADERS_CSP_ENABLED=false`. Die beperkt de UI tot ABM's eigen scripts en API, en afbeeldingen tot ABM of HTTPS. Covers via gewone HTTP worden geblokkeerd, en ABM kan hoe dan ook niet in een iframe getoond worden. De pagina's met API-docs krijgen een ruimere policy, zodat ze van een CDN kunnen laden.

## Mislukte inlogpogingen

Er is geen lockout. Mislukte pogingen worden gelogd, per adres samengevoegd in het Activity Log, en regel voor regel naar het beveiligingslog geschreven voor tools als fail2ban.

## Geheimen

Wachtwoorden en sleutels die ABM opslaat voor indexers, clients en koppelingen worden versleuteld met een app-secret. Zet `APP_SECRET` om de sleutel van de configschijf te houden. Bestaat geen van beide, dan genereert ABM `/config/app_secret`. Wachtwoorden van proxy's en exportdoelen worden als platte tekst opgeslagen.
