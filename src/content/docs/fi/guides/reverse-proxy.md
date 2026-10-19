---
title: Käänteinen välityspalvelin
description: ABM nginxin, Traefikin tai Caddyn taakse niin, ettei kirjautuminen hajoa.
---

Kolmella asetuksella on väliä. Kun ne ovat kunnossa, kirjautuminen, websocket ja tallennukset toimivat.

## 1. Kerro ABM:lle, kuka välityspalvelin on

Aseta `TRUSTED_PROXIES` välityspalvelimen osoitteeksi niin kapeasti kuin pystyt:

```
TRUSTED_PROXIES=172.20.0.5
```

Samalla koneella pyörivä välityspalvelin tarvitsee arvon `127.0.0.1`. Sen jälkeen ABM luottaa asiakasosoitteeseen, jonka välityspalvelimesi välittää otsakkeessa `X-Forwarded-For` tai `X-Real-IP`. Ilman tätä jokaisen välitysotsakkeita sisältävän pyynnön on kirjauduttava. Se on tarkoituksellista.

## 2. Välitä otsakkeet

Välitä alkuperäinen `Host` tai lähetä `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik ja Caddy lähettävät välitysotsakkeet oletuksena. ABM käyttää websocketia reaaliaikaisiin päivityksiin, joten välityspalvelimen on päästettävä upgrade-pyynnöt läpi.

## 3. Päätä, kuka kirjautuu

- **Authentication Required: Enabled** pakottaa kaikki kirjautumaan. Turvallisin, jos välityspalvelin on julkinen.
- **Disabled for Local Addresses** ohittaa kirjautumisen asiakkailta, jotka ABM näkee paikallisina. Luotetun välityspalvelimen kautta se tarkoittaa asiakasta, jonka välityspalvelin nimeää.
- Välityspalvelin, joka ei lähetä välitysotsakkeita, saa kaiken näyttämään paikalliselta. Valitse Enabled.

## Alikansio ja verkkotunnus

Jos haluat ABM:n osoitteeseen `/abm`, aseta General-sivulla **URL Base** arvoon `/abm` ja käynnistä uudelleen. Laita julkinen osoitteesi kenttään **Application URL**.

Jos tallennukset epäonnistuvat virheellä `cross_origin_rejected`, selaimen alkuperä ei täsmää. Korjaa ensin Host-otsake. Muussa tapauksessa lisää verkkotunnuksesi Security-sivulla kenttään **CORS Allowed Domains** ja käynnistä uudelleen.

## Rungon koko

Jos suuret lataukset epäonnistuvat virheellä 413, tarkista välityspalvelimen oma raja sekä `MAX_REQUEST_BODY_BYTES`.

## Mitä loki sanoo

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": lisää se.
- "... is in TRUSTED_PROXIES but didn't name a client address": laita välityspalvelin lähettämään `X-Forwarded-For` tai `X-Real-IP`.

Katso myös [Tietoturva ja kirjautuminen](/fi/settings/security/).
