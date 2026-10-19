---
title: Sikkerhet og innlogging
description: Autentiseringsmoduser, API-nøkler, klarerte proxyer, lokale nettverk og sikkerhetspolicyen for innhold.
---

**Security**-seksjonen i **Settings > General** styrer hvem som kan bruke ABM, og hvordan.

## Autentisering

| Innstilling | Standard | Valg |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | La passordet stå tomt for å beholde det du har |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | tom | Ekstra CIDR-områder der klientene slipper innlogging |
| CORS Allowed Domains | tom | Andre opprinnelser som får kalle API-et fra en nettleser. Krever omstart |

De to modusene for **Authentication Required** du kommer til å bruke:

- **Enabled**: alle logger inn, også på LAN-et ditt.
- **Disabled for Local Addresses** (lagret som `local_disabled`): en forespørsel fra en lokal adresse slipper innlogging. Loopback, de private områdene, link-local og IPv6 unique-local regnes som lokale. **Local Networks** legger til flere og erstatter dem aldri.

På en ny installasjon blir forespørsler avvist til oppsettet er ferdig.

## Omvendte proxyer

Bak en proxy setter du `TRUSTED_PROXIES`, så ABM vet hvilke videresendingsheadere den skal tro på. En forespørsel med videresendingsheadere fra en adresse som ikke står på den lista, er aldri lokal og må logge inn. Det er med vilje. Se [Omvendt proxy](/nb/guides/reverse-proxy/).

En proxy som ikke sender videresendingsheadere, ser ut som en lokal klient. Kjører du en sånn, setter du Authentication Required til Enabled.

## Bekreftelse med passord

Noen endringer ber om det nåværende passordet ditt igjen: lagring av Security-innstillinger, visning eller ny generering av API-nøkkelen, og lagring eller sletting av en WireGuard-konfigurasjon. Feil passord teller som en mislykket innlogging i sikkerhetsloggen. Er det ikke satt noe passord ennå, blir du ikke spurt.

## API-nøkkel

Nøkkelen vises aldri før du har bekreftet passordet ditt. **Regenerate API Key** lager en ny, viser den én gang og gjør den gamle ugyldig med en gang. Nøkkelen kan ikke skrives inn for hånd. Hvis den lagrede nøkkelen ikke kan dekrypteres (app-hemmeligheten er endret), lager du en ny.

Send den som `X-Api-Key` eller en `apikey`-parameter. En nøkkel fra en LAN-adresse regnes som en forespørsel med nøkkel. Se [API](/nb/system/api/).

## Skriving fra nettleseren

En nettleserforespørsel som endrer noe, blir avvist med `cross_origin_rejected` hvis ikke opprinnelsen stemmer med adressen du når ABM på, verten en klarert proxy videresender, eller et tillatt CORS-domene. Forespørsler med API-nøkkel påvirkes ikke.

## Sikkerhetspolicy for innhold

ABM sender en Content-Security-Policy-header med mindre `SECURITY_HEADERS_CSP_ENABLED=false`. Den begrenser grensesnittet til ABMs egne skript og API, og bilder til ABM eller HTTPS. Cover som serveres over vanlig HTTP blir blokkert, og ABM kan ikke vises i en iframe uansett. Sidene med API-dokumentasjon får en løsere policy, så de kan lastes fra et CDN.

## Mislykkede innlogginger

Det finnes ingen utestenging. Mislykkede forsøk logges, slås sammen per adresse i Activity Log og skrives linje for linje til sikkerhetsloggen for verktøy som fail2ban.

## Hemmeligheter

Passord og nøkler som ABM lagrer for indekserere, klienter og tilkoblinger, krypteres med en app-hemmelighet. Sett `APP_SECRET` for å holde nøkkelen unna config-disken. Finnes ingen av dem, genererer ABM `/config/app_secret`. Passord for proxy og eksportmål lagres som ren tekst.
