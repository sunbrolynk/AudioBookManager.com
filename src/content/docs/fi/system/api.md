---
title: API
description: Tunnistautuminen, dokumentaatiosivut ja rajat.
---

ABM:llä on REST API polun `/api` alla. Interaktiivinen viite on osoitteissa `/api/docs` (Swagger) ja `/api/redoc`, ja skeema osoitteessa `/api/openapi.json`. Aseta `DOCS_ENABLED=false`, jos haluat poistaa kaikki kolme. Dokumentaatiosivut lataavat resursseja CDN:stä, joten ne näkyvät kokonaan vain, kun internet-yhteys on käytössä.

## Tunnistautuminen

- **API-avain**: lähetä `X-Api-Key: <key>` tai `?apikey=<key>`. Löydät sen tai voit luoda sen uudelleen kohdassa **Settings > General > Security**. Katso [Tietoturva](/fi/settings/security/).
- Kirjautumisesta saatava **Bearer-token**.
- Esittämäsi tunniste voittaa ohituksen, joten lähiverkosta tuleva avaimellinen pyyntö lasketaan API-pyynnöksi.

## Käytännöt

- Virheet palautetaan muodossa `{"detail": ...}`.
- Salaisuuksia ei koskaan palauteta. Vastaus kertoo, onko sellainen asetettu.
- Tilaa muuttava selainpyyntö tarvitsee täsmäävän alkuperän. Avainta käyttävät skriptit on vapautettu tästä.
- Pyyntöjen rungot on rajattu 10 MiB:iin (`MAX_REQUEST_BODY_BYTES`). Varmuuskopion palautuksella ja kansikuvan latauksella on suuremmat rajat. Rajan ylittävä saa vastauksen HTTP 413.
- Validointivirheet eivät koskaan toista takaisin sitä, mitä lähetit.

## Metatietokatkokset

Kirjahaku, joka ei saa vastausta Libexilta, palauttaa 502 ja viestin "Libex search failed". Kirjailija- tai sarjahaku palauttaa 503 ja viestin "Libex could not be reached; try again shortly". Jotkin hakureitit palauttavat katkon aikana edelleen tyhjän tuloksen.

Jos tunnet Sonarrin: API ei ole v3-yhteensopiva. Prowlarr voi synkronoida indeksoijia ABM:ään Prowlarr-yhteytensä kautta.
