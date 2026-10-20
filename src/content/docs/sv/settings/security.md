---
title: Säkerhet och inloggning
description: Autentiseringslägen, API-nycklar, betrodda proxyer, lokala nätverk och content security policy.
---

Sektionen **Security** i **Settings > General** styr vem som får använda ABM och hur.

## Autentisering

| Inställning | Standard | Val |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Lämna lösenordet tomt för att behålla det nuvarande |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | tom | Extra CIDR-intervall vars klienter slipper logga in |
| CORS Allowed Domains | tom | Andra origins som får anropa API:t från en webbläsare. Kräver omstart |

De två lägena för **Authentication Required** som du kommer att använda:

- **Enabled**: alla loggar in, även på ditt LAN.
- **Disabled for Local Addresses** (sparas som `local_disabled`): ett anrop från en lokal adress slipper logga in. Loopback, de privata intervallen, link-local och IPv6 unique-local räknas som lokala. **Local Networks** lägger till fler och ersätter dem aldrig.

På en ny installation nekas anrop tills konfigurationen är klar.

## Omvända proxyer

Bakom en proxy sätter du `TRUSTED_PROXIES` så att ABM vet vilka forwarding-headers den ska tro på. Ett anrop med forwarding-headers från en adress som inte finns i listan är aldrig lokalt och måste logga in. Det är med flit. Se [Omvänd proxy](/sv/guides/reverse-proxy/).

En proxy som inte skickar några forwarding-headers ser ut som en lokal klient. Om du kör en sådan, sätt Authentication Required till Enabled.

## Bekräfta med lösenord

Vissa ändringar frågar efter ditt nuvarande lösenord igen: att spara Security-inställningarna och att visa eller skapa en ny API-nyckel. Ett fel lösenord räknas som en misslyckad inloggning i säkerhetsloggen. Om inget lösenord är satt än frågas det inte efter något.

## API-nyckel

Nyckeln visas aldrig förrän du har bekräftat ditt lösenord. **Regenerate API Key** skapar en ny, visar den en gång och gör den gamla nyckeln ogiltig direkt. Nyckeln går inte att skriva in själv. Om den sparade nyckeln inte kan dekrypteras (apphemligheten har ändrats), generera om den.

Skicka den som `X-Api-Key` eller som parametern `apikey`. En nyckel från en LAN-adress räknas som ett nyckelanrop. Se [API](/sv/system/api/).

## Skrivningar från webbläsaren

Ett anrop från webbläsaren som ändrar något nekas med `cross_origin_rejected` om inte dess origin matchar adressen ABM nås på, en betrodd proxys vidarebefordrade host, eller en domän i CORS allowed domains. Anrop med API-nyckel påverkas inte.

## Content security policy

ABM skickar en Content-Security-Policy-header om inte `SECURITY_HEADERS_CSP_ENABLED=false`. Den begränsar gränssnittet till ABM:s egna skript och API, och bilder till ABM eller HTTPS. Omslag som serveras över vanlig HTTP blockeras, och ABM kan oavsett inte visas i en iframe. Sidorna med API-dokumentation får en lösare policy så att de kan laddas från ett CDN.

## Misslyckade inloggningar

Det finns ingen utelåsning. Misslyckade försök loggas, slås ihop per adress i Activity Log, och skrivs rad för rad till säkerhetsloggen för verktyg som fail2ban.

## Hemligheter

Lösenord och nycklar som ABM sparar för indexerare, klienter och anslutningar krypteras med en apphemlighet. Sätt `APP_SECRET` om du vill hålla nyckeln borta från config-disken. Om ingen av dem finns genererar ABM `/config/app_secret`. Lösenord för proxy och exportmål sparas i klartext.
