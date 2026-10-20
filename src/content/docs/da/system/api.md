---
title: API
description: Godkendelse, dokumentationssider og grænser.
---

ABM har et REST API under `/api`. Den interaktive reference ligger på `/api/docs` (Swagger) og `/api/redoc`, og skemaet på `/api/openapi.json`. Sæt `DOCS_ENABLED=false` for at fjerne alle tre. Dokumentationssiderne henter filer fra et CDN, så de vises kun helt, når der er internetadgang.

## Godkendelse

- **API-nøgle**: send `X-Api-Key: <key>` eller `?apikey=<key>`. Find eller generér den igen under **Settings > General > Security**. Se [Sikkerhed](/da/settings/security/).
- **Bearer-token** fra et login.
- Loginoplysninger, du sender med, vinder over en undtagelse, så en request med nøgle fra LAN'et tæller som en API-request.

## Konventioner

- Fejl kommer tilbage som `{"detail": ...}`.
- Hemmeligheder bliver aldrig returneret. Et svar siger, om der er sat en.
- En browser-request, der ændrer tilstand, kræver en matchende origin. Scripts, der bruger en nøgle, er undtaget.
- Request bodies er begrænset til 10 MiB (`MAX_REQUEST_BODY_BYTES`). Gendannelse af backup og upload af covers har højere grænser. Over grænsen giver HTTP 413.
- Valideringsfejl gentager aldrig det, du sendte.

## Nedbrud hos metadatakilden

En bogsøgning, der ikke får svar fra Libex, giver 502 med "Libex search failed". En søgning efter forfattere eller serier giver 503 med "Libex could not be reached; try again shortly". Nogle opslagsruter giver stadig et tomt resultat under et udfald.

Kender du Sonarr: API'et er ikke v3-kompatibelt. Prowlarr kan synkronisere indeksere ind i ABM gennem sin Prowlarr-forbindelse.
