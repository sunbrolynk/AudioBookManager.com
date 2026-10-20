---
title: Sikkerhed og login
description: Godkendelsestilstande, API-nøgler, betroede proxies, lokale netværk og content security policy.
---

Sektionen **Security** i **Settings > General** styrer, hvem der kan bruge ABM, og hvordan.

## Godkendelse

| Indstilling | Standard | Valg |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Lad adgangskoden stå tom for at beholde den nuværende |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | tom | Ekstra CIDR-intervaller, hvis klienter springer login over |
| CORS Allowed Domains | tom | Andre origins, der må kalde API'et fra en browser. Kræver genstart |

De to tilstande af **Authentication Required**, du kommer til at bruge:

- **Enabled**: alle logger ind, også dit LAN.
- **Disabled for Local Addresses** (gemt som `local_disabled`): en request fra en lokal adresse springer login over. Loopback, de private intervaller, link-local og IPv6 unique-local tæller som lokale. **Local Networks** tilføjer flere og erstatter dem aldrig.

På en frisk installation bliver requests afvist, indtil opsætningen er færdig.

## Reverse proxies

Bag en proxy skal du sætte `TRUSTED_PROXIES`, så ABM ved, hvilke forwarding-headers den skal tro på. En request med forwarding-headers fra en adresse, der ikke står på listen, er aldrig lokal og skal logge ind. Det er med vilje. Se [Reverse proxy](/da/guides/reverse-proxy/).

En proxy, der ikke sender forwarding-headers, ligner en lokal klient. Kører du sådan en, så sæt Authentication Required til Enabled.

## Bekræftelse med adgangskode

Nogle ændringer spørger igen efter din nuværende adgangskode: at gemme Security-indstillingerne og at vise eller genskabe API-nøglen. En forkert adgangskode tæller som et mislykket login i sikkerhedsloggen. Er der ikke sat en adgangskode endnu, spørges der ikke.

## API-nøgle

Nøglen bliver aldrig vist, før du har bekræftet din adgangskode. **Regenerate API Key** laver en ny, viser den én gang og gør den gamle nøgle ugyldig med det samme. Nøglen kan ikke skrives ind. Kan den gemte nøgle ikke dekrypteres (app-hemmeligheden er ændret), så generér en ny.

Send den som `X-Api-Key` eller en `apikey`-parameter. En nøgle fra en LAN-adresse tæller som en nøgle-request. Se [API](/da/system/api/).

## Skrivninger fra browseren

En browser-request, der ændrer noget, bliver afvist med `cross_origin_rejected`, medmindre dens origin matcher den adresse, ABM bliver tilgået på, en betroet proxys videresendte host eller et domæne i CORS Allowed Domains. Requests med API-nøgle bliver ikke påvirket.

## Content security policy

ABM sender en Content-Security-Policy-header, medmindre `SECURITY_HEADERS_CSP_ENABLED=false`. Den begrænser UI'et til ABM's egne scripts og API, og billeder til ABM eller HTTPS. Covers, der bliver serveret over almindelig HTTP, bliver blokeret, og ABM kan ikke vises i en iframe uanset hvad. Siderne med API-dokumentation får en løsere politik, så de kan hente fra et CDN.

## Mislykkede logins

Der er ingen udelukkelse. Mislykkede forsøg bliver logget, samlet pr. adresse i Activity Log og skrevet linje for linje til sikkerhedsloggen til værktøjer som fail2ban.

## Hemmeligheder

Adgangskoder og nøgler, som ABM gemmer til indeksere, klienter og forbindelser, er krypteret med en app-hemmelighed. Sæt `APP_SECRET`, hvis nøglen ikke skal ligge på config-disken. Findes ingen af dem, genererer ABM `/config/app_secret`. Adgangskoder til proxy og eksportmål bliver gemt som almindelig tekst.
