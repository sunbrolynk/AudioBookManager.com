---
title: UKK
description: Lyhyet vastaukset kysymyksiin, joita kysytään ensimmäisenä.
---

## Korvaako ABM Audiobookshelfin?

Ei. Audiobookshelf on soitin ja ABM on kirjastonhoitaja. Osoita molemmat samaan kirjastokansioon ja anna kummankin hoitaa oma tehtävänsä.

## Mistä metatiedot tulevat?

[Libex](https://libexdb.com) on avoin metatietopalvelu Audiblen tiedoille. ABM päivittää ne ajastetusti, ja itse valitsemasi kansikuvan voi lukita, jolloin päivitys jättää sen rauhaan.

## Tarvitsenko erillisen tietokannan?

Et tarvitse. ABM pitää kaiken yhdessä SQLite-tiedostossa kansiossa `/config`. Mitään muuta ei tarvitse ajaa.

## Pääsenkö siihen käsiksi oman verkkoni ulkopuolelta?

Pääset, versiosta 0.17.0 alkaen, mutta en suosittele ABM:n laittamista suoraan internetiin, ja samaa neuvovat Servarr-sovellukset. Turvallisempi tapa on VPN, kuten WireGuard tai Tailscale. Oletuksena kaikki lähiverkkosi ulkopuolelta tuleva joutuu kirjautumaan, ja kun asetat **Authentication Required** -arvoksi **Enabled**, kaikkien on kirjauduttava, myös omassa lähiverkossasi. Jos käytössä on nginx, Traefik tai Caddy, aseta `TRUSTED_PROXIES` välityspalvelimen osoitteeksi. Tallennetut tunnukset on salattu. Katso [käänteisen välityspalvelimen opas](/fi/guides/reverse-proxy/) ja [Ympäristömuuttujat](/fi/configuration/#käänteinen-välityspalvelin).

## Mitkä latausasiakkaat toimivat?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet ja Blackhole.

## Mitä Readarrille tapahtui?

Readarr hoiti kirjoja ja äänikirjoja yhdessä, ja se on sittemmin lopetettu. ABM on pelkästään äänikirjoille, ja se rakentuu Servarr-sovellusten luoman mallin päälle.

## Voinko asentaa sen ilman Dockeria?

Et vielä. Docker on toistaiseksi ainoa tapa. Natiivit Linux-, Windows- ja macOS-asennukset sekä Kubernetes, Unraid ja Proxmox ovat suunnitteilla. Katso [Muut asennustavat](/fi/installation/#muut-asennustavat).

## Paljonko se maksaa?

Ei mitään. Se on ilmainen ja avointa lähdekoodia GPL-3.0-lisenssillä. Jos se säästää sinulta illan, löydät minut [Ko-fistä](https://ko-fi.com/sunbrolynk).

## Voinko muokata kirjan nimeä, tekijöitä tai kuvausta?

Et. Ne tiedot tulevat metatietolähteestä, eikä ABM muokkaa niitä käsin. Sinun hallinnassasi ovat kansikuva (valitsemasi kansikuva lukitaan), päivitysten ajankohta, mitkä sivutiedostot ja äänitiedostojen tagit kirjoitetaan, tagit ja automaattiset tagit, seuranta ja laatuprofiili. Katso [Metatietosi, sinun hallinnassasi](/fi/metadata/control/).

## Voiko ABM kirjoittaa kappaleet, kuvaukset ja tagit sinne, mistä Audiobookshelf ne lukee?

Se kirjoittaa `cover.jpg`-, `.opf`-, `desc.txt`- ja `reader.txt`-tiedostot ja voi kirjoittaa tunnisteita ääneen. Lukujen vertailu julkaistuun painokseen ja `.cue`-tiedostot on suunniteltu myöhempään julkaisuun. Katso [Sidecar-tiedostot](/fi/using/sidecars/).

## Voinko muuntaa tiedostojani?

Voit: muunna, yhdistä, pilko ja lisää kappaleita jonossa. Katso [Muunnokset](/fi/using/conversions/).

## Voinko tuoda olemassa olevan kokoelmani?

Voit, [kirjaston tuonnilla](/fi/library-import/). Katso myös [Kirjaston siirtäminen ABM:ään](/fi/guides/moving-a-library-in/).

## Onko mobiiliasettelua?

On, alle 768 pikselin levyisillä näytöillä. Katso [Puhelimella käyttö](/fi/phone/).

## Voiko ABM käyttää useampaa kuin yhtä Audible-tiliä?

Voi. Jokaisella tilillä on oma kirjastonsa. Katso [Audible](/fi/audible/).
