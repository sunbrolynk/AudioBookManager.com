---
title: Yhteydet (Connect)
description: Ilmoitukset, mediapalvelimet ja omat skriptit.
---

**Settings > Connect** lähettää tapahtumia muualle. Sen nimi on Connect, kuten Sonarrissa.

## Agentit

**Ilmoitusagentit**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook ja Apprise. **Mediapalvelimet**: Jellyfin ja Emby. **Muut**: Custom Script. Audiobookshelf ei ole Connect-agentti.

## Tapahtumat

Jokainen yhteys valitsee, mitkä tapahtumat laukaisevat sen.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Yhteyskohtaiset asetukset

| Kenttä | Vaikutus |
|---|---|
| Name, Enable | Nimi ja päälle/pois |
| Include covers | Liitä mukaan kirjan kansikuva, jos agentti pystyy siihen |
| Tags | Laukaise vain kohteille, joilla on vastaava tagi |
| Conditions | AND-ehdoin yhdistetyt säännöt kentille, kuten tekijä tai koko. Virheellinen ehto päästää läpi sen sijaan, että hiljentäisi hälytyksen |
| Priority | Jos agentti tukee sitä |

**Test** lähettää testiviestin. **Test All** testaa jokaisen yhteyden.

## Omat viestit

Oma viesti kirjoittaa tapahtuman tekstin uudelleen. Valitse **Format** ja **Cover** (Auto käyttää kirjan kansikuvaa, lisäksi None tai Custom URL), kirjoita **Title** ja leipäteksti ja klikkaa muuttujaa lisätäksesi sen. Kunkin tapahtuman oletuspohja on lähtökohta. Esikatselu näyttää tuloksen, ja voit lähettää testin jonkin yhteyden kautta.

## Sudenkuopat

- Salaisuudet, kuten tokenit, tallennetaan salattuina, näkyvät tyhjinä muokatessa ja säilyvät, jos jätät kentän tyhjäksi. Kohteen muuttaminen vaatii, että syötät ne uudelleen.
- Metatietokatkoksesta kertova epäonnistuneen tehtävän hälytys lähtee kerran katkosta kohden, ei kerran jokaisesta epäonnistumisesta, eikä ajastettu ajo koskaan lähetä sellaista.
- Webhookin otsakkeet ovat JSON-objekti, ja ne tallennetaan salaisuutena.
