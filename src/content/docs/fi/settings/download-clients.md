---
title: Latausasiakkaat
description: Tuetut asiakkaat, valmiiden latausten käsittely ja etäpolkujen vastaavuudet.
---

**Settings > Download Clients** yhdistää ohjelman, joka hoitaa lataamisen.

## Tuetut asiakkaat

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet ja Blackhole (valvottu kansio). Siinä koko lista.

## Kentät

Näkyvät kentät riippuvat asiakkaasta.

| Kenttä | Vaikutus |
|---|---|
| Name | Nimi |
| Host, Port, URL Base | Missä asiakas kuuntelee |
| Use SSL, Verify TLS certificate | HTTPS ja se, tarkistetaanko varmenne |
| Username, Password, API Key | Tunnukset. Tallennettua salaisuutta ei koskaan näytetä |
| Category | Kategoria tai nimike, jonka ABM laittaa latauksiinsa, esimerkiksi `audiobooks` |
| Watch Folder, Directory | Blackhole: minne tiedostot pudotetaan ja missä valmiit tiedostot näkyvät |
| Client Priority | Mikä asiakas voittaa, kun useampi sopii |
| Remove from Client, Also Delete Files, Remove Failed | Mitä ABM poistaa asiakkaasta tuonnin tai epäonnistumisen jälkeen |
| Queue Page Remove Action | Mitä rivin poistaminen Queue-sivulla tekee: hylkää vain ABM:stä, poista asiakkaasta ja säilytä tiedostot tai poista ja poista tiedostot |

**Test** tarkistaa yhteyden. Pois käytöstä otettu asiakas ei ole sama asia kuin epäkunnossa oleva. Epäonnistuvaa asiakasta yritetään uudelleen kasvavin väliajoin.

## Valmiiden latausten käsittely

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Enable | päällä | Tuo valmiit lataukset automaattisesti |
| Redownload Failed | päällä | Laita epäonnistunut julkaisu estolistalle ja hae uudelleen |
| Redownload Failed from Interactive Search | päällä | Sama käsin valitsemillesi julkaisuille |

Kun valmiissa latauksessa on sama kirja useammin kuin kerran, eri muodoissa, ABM tuo vain sen kopion, jonka kirjan laatuprofiili asettaa korkeimmalle. Kun latausta yhdistetään kirjaan, sekin mittaa vain yhden kopion, sen jonka oletuslaatuprofiili asettaa korkeimmalle. Muodot, jotka profiili asettaa samalle tasolle tai jättää pois, menevät järjestyksessä M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA. Muut kopiot ABM jättää lataukseen; ne poistetaan vain, jos **Also Delete Files** poistaa latauksen tuonnin jälkeen. Yksittäinen tiedosto osasarjan vieressä lasketaan toiseksi kopioksi vain, kun niiden kestot täsmäävät; muuten ne ovat yhden kirjan osia. Kansikuva ja muut lisätiedostot tulevat silti mukaan kopion kanssa, jonka ABM ottaa. Kun latauksen kansiossa on myös toisen kirjan ääntä, mukaan tulevat vain lisätiedostot, jotka on nimetty tuodun äänen mukaan.

Se, kovalinkitetäänkö vai kopioidaanko tuonnit, määritetään asetuksella **Use Hardlinks instead of Copy** sivulla [Median hallinta](/fi/settings/media-management/). Jos asiakkaan kansio ei ole samassa polussa kuin ABM näkee, lisää etäpolun vastaavuus.

## Etäpolkujen vastaavuudet (Remote Path Mappings)

Kun asiakas ilmoittaa polun `/downloads/audiobooks` ja ABM näkee sen polkuna `/data/audiobooks`, lisää vastaavuus.

| Kenttä | Vaikutus |
|---|---|
| Host | Asiakaskone, jota vastaavuus koskee |
| Remote Path | Polku sellaisena kuin asiakas sen ilmoittaa |
| Local Path | Sama kansio sellaisena kuin ABM sen näkee |

## Sudenkuopat

- Lukukelvoton alikansio valmiissa latauksessa pysäyttää koko latauksen tuonnin. Asiakkaasta ei poisteta mitään, ja sitä yritetään myöhemmin uudelleen.
- Docker: liitä latauskansio samaan polkuun molemmissa konteissa, jos voit. Vastaavuudet ovat varavaihtoehto.
