---
title: Tagit
description: Tagit ja automaattisen tagituksen säännöt.
---

**Settings > Tags** hallitsee tageja ja **Auto Tagging** -toimintoa.

## Tagit

Tagi on yksi sana: pienet kirjaimet, ei välilyöntejä, ei pilkkuja, enintään 100 merkkiä. Kun syötät `Sci-Fi`, siitä tulee `sci-fi`. Tagit liitetään kirjoihin, tekijöihin ja sarjoihin, ja niitä vastaan täsmäävät indeksoijat, viive- ja julkaisuprofiilit, tuontilistat, Connect-agentit ja kalenterisyöte.

Jos tunnet Sonarrin: tagit toimivat samalla tavalla. Tagilla varustettu profiili koskee vain asioita, joilla se tagi on.

## Automaattiset tagit

Automaattinen tagi on sääntö, joka lisää tageja täsmääviin kirjoihin.

| Kenttä | Vaikutus |
|---|---|
| Name | Nimi |
| Enable | Päällä tai pois |
| Remove Tags Automatically | Kun kirja ei enää täsmää, poista tagit |
| Tags | Mitä lisätään |
| Conditions | Mitä kirjan on täsmättävä. Jokaisen ehdon voi kääntää tai tehdä pakolliseksi |

Ehtotyypit: Genre, Monitored, Language, Root Folder, Status, Tag, Year (väli), Series Type, Author (sisältää), Narrator (sisältää), Runtime in minutes (väli) ja Rating (väli).

**Apply** ajaa valitut säännöt heti. Säännöt ajetaan myös, kun kirjat muuttuvat.

## Sudenkuopat

- Sääntö, joka viittaa poistettuun tagiin tai juurikansioon, ohitetaan kokonaan molempiin suuntiin, joten rikkinäinen sääntö ei koskaan tagita väärin tai riisu tageja.
- Remove Tags Automatically poistaa vain tageja, joita tämä sääntö lisäisi.
