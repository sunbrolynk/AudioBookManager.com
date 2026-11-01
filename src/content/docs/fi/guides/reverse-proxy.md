---
title: Käänteinen välityspalvelin
description: ABM nginxin, Traefikin tai Caddyn taakse niin, ettei kirjautuminen hajoa.
---

:::caution[Ei suositeltavaa]
ABM:n laittamista internetiin, käänteisen välityspalvelimen tai avatun portin kautta, ei suositella, ja samaa neuvovat Servarr-sovellukset. Jos haluat päästä siihen ulkoa, käytä sen sijaan VPN:ää, kuten WireGuardia tai Tailscalea. ABM on tehty turvalliseksi välityspalvelimen takana, mutta kun se on julkinen, turvallisuudesta ei ole takeita, ja riski on sinun. Jos teet sen silti, aseta **Authentication Required** arvoon **Enabled** ja pidä ABM ajan tasalla. Tämä opas on niille, jotka tekevät sen silti.
:::

Kolmella asetuksella on väliä. Kun ne ovat kunnossa, kirjautuminen, websocket ja tallennukset toimivat.

## 1. Kerro ABM:lle, kuka välityspalvelin on

Aseta `TRUSTED_PROXIES` välityspalvelimen osoitteeksi niin kapeasti kuin pystyt:

```
TRUSTED_PROXIES=172.20.0.5
```

Samalla koneella pyörivä välityspalvelin tarvitsee arvon `127.0.0.1`. Sen jälkeen ABM luottaa asiakasosoitteeseen, jonka välityspalvelimesi välittää otsakkeessa `X-Forwarded-For` tai `X-Real-IP`. Ilman tätä jokaisen välitysotsakkeita sisältävän pyynnön on kirjauduttava. Se on tarkoituksellista.

## Miten asiakkaan osoite luetaan

`X-Forwarded-For` luetaan oikealta vasemmalle. Jokainen välityspalvelin lisää näkemänsä osoitteen, joten vasemmanpuoleisin merkintä on se, minkä asiakas itse lähetti, eikä siihen luoteta koskaan. ABM ohittaa merkinnät, jotka ovat `TRUSTED_PROXIES`-listassa, ja pitää asiakkaana ensimmäistä, joka ei ole. Siksi `TRUSTED_PROXIES` pitää rajata kapeaksi: mikä tahansa alueen sisällä voi lisätä merkinnän ketjuun. `X-Forwarded-Host`-otsikkoon uskotaan myös vain, jos se tulee `TRUSTED_PROXIES`-listan osoitteesta.

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

## Esimerkkiasetukset

Jokainen päästää läpi kaikki polut, myös `/initialize.json`, ja hoitaa websocketin. Vaihda tilalle oma verkkotunnuksesi ja konttisi nimi, ja aseta `TRUSTED_PROXIES` välityspalvelimen osoitteeksi.

### nginx

```
server {
    listen 443 ssl;
    server_name abm.example.com;

    location / {
        proxy_pass http://172.20.0.2:5173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}
```

### Nginx Proxy Manager

```
Scheme:               http
Forward Hostname/IP:  audiobook-manager
Forward Port:         5173
Websockets Support:   on
```

### Traefik

```
labels:
  - traefik.enable=true
  - traefik.http.routers.abm.rule=Host(`abm.example.com`)
  - traefik.http.routers.abm.entrypoints=websecure
  - traefik.http.routers.abm.tls.certresolver=letsencrypt
  - traefik.http.services.abm.loadbalancer.server.port=5173
```

Traefik passes websockets without any extra setting.

### Caddy

```
abm.example.com {
    reverse_proxy audiobook-manager:5173
}
```

Caddy passes websockets and the original `Host` on its own.

## Alikansio ja verkkotunnus

Jos haluat ABM:n osoitteeseen `/abm`, aseta General-sivulla **URL Base** arvoon `/abm` ja käynnistä uudelleen. Laita julkinen osoitteesi kenttään **Application URL**.

Jos tallennukset epäonnistuvat virheellä `cross_origin_rejected`, selaimen alkuperä ei täsmää. Korjaa ensin Host-otsake. Muussa tapauksessa lisää verkkotunnuksesi Security-sivulla kenttään **CORS Allowed Domains** ja käynnistä uudelleen.

## Rungon koko

Jos suuret lataukset epäonnistuvat virheellä 413, tarkista välityspalvelimen oma raja sekä `MAX_REQUEST_BODY_BYTES`.

## Mitä loki sanoo

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": lisää se.
- "... is in TRUSTED_PROXIES but didn't name a client address": laita välityspalvelin lähettämään `X-Forwarded-For` tai `X-Real-IP`.

## Vianmääritys

Tyhjä sivu tai "Could not load" -viesti, jonka mukaan käänteisen välityspalvelimen pitää päästää läpi `/initialize.json` (raportoidaan versiosta 0.19.1), tarkoittaa, ettei välityspalvelin välitä `/initialize.json`-polkua ABM:lle. Päästä se läpi muiden yllä olevien polkujen kanssa. Jos reaaliaikaiset päivitykset eivät koskaan yhdisty, websocket-päivitys tai `Sec-WebSocket-Protocol`-otsikko ei yleensä pääse läpi.

Katso myös [Tietoturva ja kirjautuminen](/fi/settings/security/).
