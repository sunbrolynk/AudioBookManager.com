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
- `POST /api/tasks` lisää jonoon vain `backup_export`-tehtävän. Mikä tahansa muu tehtävätyyppi saa HTTP 403:n, ja asetukset, jotka eivät sovi `backup_export`-tehtävälle, saavat HTTP 422:n. Manuaaliset tuonnit kulkevat `/api/manual-import/`-päätepisteiden kautta ja kirjaston skannaukset `POST /api/library/scan` -kutsulla.
- Library Import pitää jokaisen rivin Libex-osumat itse palvelimella. Istunnon tallennus (`PUT /api/library-import/session/{id}` tai `PATCH /api/library-import/session/{id}/choices`), jonka rivi lähettää `libex_matches`-kentän, hylätään HTTP 422 -virheellä, joka nimeää kentän, joten jätä se pois riveistä, jotka tallennat takaisin. `POST /api/library-import/retry-match` ottaa valinnaisen `session_id`:n ja tallentaa löytämänsä osumat siihen istuntoon.
- `GET /api/metadata/search` palauttaa jokaisen tuloksen, kun jätät `limit`-parametrin pois. `limit`-arvolla (1–50) se palauttaa enintään niin monta.

## Metatietokatkokset

Pyyntö, joka tarvitsee metadatalähteen eikä saa vastausta, epäonnistuu `detail`-kentällä, joka nimeää lähteen ja syyn, ei koskaan tyhjällä tuloksella. Odottamasi haku luovuttaa noin 10 sekunnin kuluttua, kun Libex rajoittaa nopeutta.

Jos tunnet Sonarrin: API ei ole v3-yhteensopiva. Prowlarr voi synkronoida indeksoijia ABM:ään Prowlarr-yhteytensä kautta.
