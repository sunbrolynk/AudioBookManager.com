---
title: Ympäristömuuttujat
description: Ympäristömuuttujat, lähiverkot ja käänteisen välityspalvelimen perusteet.
---

Useimmat asetukset löytyvät verkkokäyttöliittymästä kohdasta **Settings**. Nämä asetetaan ympäristössä.

## Ympäristömuuttujat

| Muuttuja | Oletus | Mitä se tekee |
|---|---|---|
| `PORT` | `5173` | Verkkokäyttöliittymän portti. |
| `TIMEZONE` | `UTC` | Paikallinen aikavyöhykkeesi, esimerkiksi `America/New_York`. |
| `LOCAL_NETWORKS` | tyhjä | Lisää CIDR-verkkoja, joista ei tarvitse kirjautua. Pilkuilla eroteltuna. |
| `TRUSTED_PROXIES` | tyhjä | Niiden käänteisten välityspalvelimien CIDR-verkot, joiden annetaan asettaa `X-Forwarded-For` ja `X-Real-IP`. |
| `APP_SECRET` | automaattinen | Tallennettujen tunnusten salauksen juuriavain. Jos sitä ei ole asetettu, se luodaan ensimmäisellä käynnistyksellä tiedostoon `/config/app_secret`. Aseta se, jos haluat pitää avaimen poissa config-levyltä. |
| `DOCS_ENABLED` | `true` | Tarjoaa API-dokumentaation osoitteissa `/api/docs`, `/api/redoc` ja `/api/openapi.json`. `false` poistaa ne. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Lähettää Content-Security-Policy-otsakkeen, joka rajaa käyttöliittymän ABM:n omiin skripteihin, tyyleihin ja API:in sekä HTTPS-kansikuviin. `false` jättää sen pois. Kehyksiin upottaminen on estetty joka tapauksessa. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Suurin pyynnön runko, jonka päätepiste hyväksyy (10 MiB). Suurempi saa vastauksen HTTP 413. Varmuuskopion palautuksella ja kansikuvan latauksella on omat rajansa. |

## Lähiverkot

Loopback, yksityiset osoitealueet (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), link-local-osoitteet ja IPv6:n unique-local-osoitteet lasketaan jo valmiiksi paikallisiksi. Kun **Authentication Required** on asetettu paikallisten osoitteiden tilaan, niistä tuleva pyyntö ei vaadi kirjautumista. Jos haluat lisätä verkkoja, listaa ne:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Käänteinen välityspalvelin

Kun ABM on nginxin, Traefikin tai vastaavan takana, aseta `TRUSTED_PROXIES` välityspalvelimen osoitteeksi:

```
TRUSTED_PROXIES=172.20.0.5
```

- Pidä se niin kapeana kuin pystyt. Käytä välityspalvelimen omaa osoitetta, älä laajaa Docker-aliverkkoa.
- Samalla koneella pyörivä välityspalvelin tarvitsee asetuksen `TRUSTED_PROXIES=127.0.0.1`.
- Asiakkaaksi lasketaan vain se asiakas, jonka välityspalvelin nimeää otsakkeessa `X-Forwarded-For` tai `X-Real-IP`.
- Välitä alkuperäinen `Host`-otsake eteenpäin (nginx: `proxy_set_header Host $host;`) tai lähetä `X-Forwarded-Host`. Selaimen pyyntö, joka muuttaa jotain, hylätään, ellei sen alkuperä vastaa osoitetta, josta ABM:ää käytetään, tai jotain CORSin sallituista verkkotunnuksista.
- Välityspalvelin, joka ei lähetä välitysotsakkeita, näyttää paikalliselta asiakkaalta. Jos käytät sellaista, aseta Authentication Required arvoon Enabled.

Jos kirjautumista kysytään silloin, kun ei pitäisi, katso [Vianmääritys](/fi/troubleshooting/).

## Lisää

- Kirjautumistilat, API-avaimet ja sisällön suojauskäytäntö: [Tietoturva ja kirjautuminen](/fi/settings/security/).
- Koko välityspalvelimen läpikäynti: [Käänteinen välityspalvelin](/fi/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (oletus 500 MiB) rajaa varmuuskopion palautukseen ladattavien tiedostojen koon.
- Kaikki muu on sovelluksessa kohdassa **Settings**. Katso [Asetusten yleiskatsaus](/fi/settings/media-management/).
