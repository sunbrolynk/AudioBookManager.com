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
- `POST /api/manual-import/execute` ja `/execute-to-book` tarkistavat jokaisen tiedostorivin kiinteää skeemaa vasten. Tuntematon avain, suhteellinen `source_path` tai tyhjä `files`-lista hylätään HTTP 422:lla. Jokaisen lähteen on oltava äänitiedosto, joka ei ole järjestelmäkansiossa, suoraan ylimmän tason kansiossa kuten `/tmp` tai `/mnt` eikä missään ABM:n omista kansioista (asetukset, tietokanta, varmuuskopiot, lokit, kannet, roskakori, väliaikaiskansio sekä SSL-varmenteen ja -avaimen kansiot), ja symboliset linkit seurataan. Hylätty tiedosto saa HTTP 400:n, joka nimeää sen polun (`Can't import <path>: the file <reason>.`), eikä mitään lisätä jonoon.

## Metatietokatkokset

Pyyntö, joka tarvitsee metadatalähteen eikä saa vastausta, epäonnistuu `detail`-kentällä, joka nimeää lähteen ja syyn, ei koskaan tyhjällä tuloksella. Odottamasi haku luovuttaa noin 10 sekunnin kuluttua, kun Libex rajoittaa nopeutta.

Jos tunnet Sonarrin: API ei ole v3-yhteensopiva. Prowlarr voi synkronoida indeksoijia ABM:ään Prowlarr-yhteytensä kautta.
