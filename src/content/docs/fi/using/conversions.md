---
title: Muunnokset
description: Muunna, yhdistä ja pilko äänitiedostoja ja lisää niihin kappaleita jonossa, jonka voit keskeyttää.
---

**Library > Conversions** ajaa ffmpeg-töitä kirjastossasi. Töitä on neljää lajia:

| Työ | Mitä se tekee |
|---|---|
| Convert Format | Koodaa uudelleen muotoon M4B, MP3, M4A, FLAC tai Opus |
| Merge Parts | Yhdistää useita tiedostoja yhdeksi kappaleineen |
| Split Chapters | Pilkkoo yhden tiedoston niin, että jokaisesta kappaleesta tulee oma tiedosto |
| Ensure Chapters | Lisää tai korjaa kappalemerkit koodaamatta uudelleen |

Jokaisen työn oletukset tulevat [muunnosasetuksista](/fi/settings/conversions/). Jokainen työ voi ohittaa ne.

## Jono

Työt odottavat jonossa, ja niitä ajetaan kerralla enintään **Concurrent Conversions** -asetuksen verran (oletuksena 2). Valmiit työt siirtyvät historiaan, jonka voit tyhjentää.

Tulos kirjoitetaan yksityiseen työkansioon ja siirretään kirjastoon vasta valmiina. Jokainen tiedosto tulee sisään väliaikaisella nimellä ja nimetään sitten paikalleen, joten puoliksi kirjoitettu kirja ei koskaan näy. Vapaan tilan tarkistus ajetaan ennen työn alkua ja uudelleen ennen siirtoa. Lähdetiedostoja ei koskaan kirjoiteta yli.

Tiedoston muuntaminen muotoon, jossa se jo on, hylätään, koska se kirjoittaisi alkuperäisen yli.

## Muunnoksen jälkeen

ABM päivittää kirjan tiedostotietueet, koon ja laadun, joten muunnettu kirja näyttää uuden laatunsa. Jos **Delete Original** on päällä, vanhat tiedostot menevät muunnosten roskakoriin, jos se on käytössä.

Jos tuloksen siirto epäonnistuu (vaikkapa kirjastokansio on täynnä), työ epäonnistuu ja valmis tulos säilytetään työkansiossaan. Virhe nimeää kansion. **Retry** aloittaa työn alusta ja hylkää säilytetyn tuloksen, joten se kysyy ensin. **Clear history** säilyttää työt, joilla on vielä siirtämätöntä tulosta.

## Keskeytys ja jatkaminen

Keskeytyksiä on kahdenlaisia, eikä kumpikaan peru mitään:

- Yhden käynnissä olevan työn **Pause** pysäyttää sen ffmpeg-prosessit siihen kohtaan, missä ne ovat. Resume jatkaa samasta kohdasta.
- **Pause queue** (jonon yläosassa tai puhelimella yläpalkissa) estää uusien töiden käynnistymisen ja pysäyttää kaikki käynnissä olevat työt.

Itse keskeyttämäsi työ pysyy keskeytettynä, kun jono jatkaa, ja myös uudelleenkäynnistyksen yli. Työ, joka on käynnissä ABM:n pysähtyessä, palaa keskeytettynä eikä käynnisty itsestään. Resume jatkaa viimeisestä valmiista osasta yhdistämisissä, pilkkomisissa ja usean tiedoston muunnoksissa. Yhden tiedoston muunnos aloittaa sen tiedoston alusta.

6 tunnin ajoraja laskee vain keskeyttämättömän ajan. Jos tallennettua jonon tilaa ei voi lukea käynnistyksessä, jono käynnistyy keskeytettynä ja kertoo siitä. Paina Resume queue, niin tila kirjoitetaan uudelleen.

Jos tunnet Sonarrin: arr-sovelluksissa ei ole mitään tällaista. Ajattele sitä pienenä enkooderijonona, joka sattuu asumaan hallintaohjelman sisällä.

## Sudenkuopat

- Concurrent Conversions kertaa Threads Per Job ei saisi ylittää suorittimesi ytimien määrää. Autolla ABM jakaa jäljelle jäävät ytimet puolestasi samanaikaisesti ajettavien töiden kesken.
- Muunnetulla tiedostolla on uusi koko ja muokkausaika, joten Audiobookshelf skannaa sen uudelleen.
- Jaossa olevaan torrentiin kovalinkitetyn tiedoston muuntaminen luo uuden tiedoston. Jaettava kopio säilyttää vanhat tavut.
