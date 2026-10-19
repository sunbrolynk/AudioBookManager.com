---
title: Dine metadata, din kontroll
description: Hva en oppdatering endrer, hva du styrer, og filene og taggene ABM skriver for spilleren din.
---

ABM holder oversikt over metadataene i biblioteket ditt i sin egen database, og skriver dem ut igjen der spilleren din kan bruke dem. Denne siden viser hva du styrer, og hva en oppdatering rører.

## Hva en oppdatering endrer

En oppdatering (**Refresh & Scan** på en bok, en forfatteroppdatering, en serieoppdatering) spør metadatakilden på nytt og bruker det som kommer tilbake. Feltene den overskriver når kilden har en verdi: tittel, undertittel, år og utgivelsesdato, vurdering, spilletid, språk, forlag, beskrivelse, forfattere, opplesere, sjangre og coveret.

Et felt som kilden returnerer tomt, blir latt være som det er.

## Det du styrer

- **Et cover du har valgt.** Det er låst. Se [Coverlåsen](/nb/metadata/cover-lock/).
- **Tagger, automatiske tagger, overvåking, valg av kvalitetsprofil og selve filene.** En oppdatering rører dem ikke.
- **En bok med filer som ikke kan leses.** Den blir latt helt i fred, og Tasks-siden viser hvorfor.

Bokdetaljer som tittel, forfattere og beskrivelse kommer fra kilden. ABM har ingen håndredigering av dem, og det er ikke planlagt heller. Det du styrer, er hvordan de tas vare på og hvor de skrives.

## Redigeringsdialogen

Redigeringsdialogen endrer overvåking, kvalitetsprofil, sti og tagger, og lar deg skrive sidefiler og lydtagger i samme slengen, for én bok eller et helt utvalg av serier og forfattere. Se [Bibliotek](/nb/using/library/#redigeringsdialogen).

## Sidefiler spilleren din leser

ABM skriver `cover.jpg`, en `.opf`, `desc.txt` og `reader.txt` ved siden av lyden, og et `.cue`-kapittelark i neste versjon. Audiobookshelf leser OPF-, cover- og tekstfilene, så det du valgte i ABM, er det spilleren viser. Se [Sidefiler](/nb/using/sidecars/).

## Tagger skrevet inn i lyden

ABM kan skrive tittel, artist, albumartist, album, sjanger, år, kommentar, oppleser og innebygd coverbilde inn i selve lydfilene, så dataene følger med fila. Det er av som standard. Velg feltene under **Settings > Metadata**. Se [Metadatainnstillinger](/nb/settings/metadata/).

## Kapitler

ABM sammenligner kapitlene som ligger i filene dine med kapitlene i den utgitte utgaven, og kan skrive de utgitte kapitlene inn i filene uten å kode om. Den nekter når lengden på lyden viser at det er en annen utgave. Se [Kapitler](/nb/using/chapters/). Kommer i neste versjon.

## Serie og plassering

En bok har med seg serie og plassering. ABM sporer serier som kataloger, så den kan vise hvilke bøker du har og legge til dem du mangler. Se [Seriesporing](/nb/using/series-tracking/).

## Tagger og automatiske tagger

Taggene er dine. Automatiske tagger setter dem etter regler (sjanger, oppleser, vurdering, spilletid og mer), og kan fjerne dem når en bok ikke passer lenger. Taggene styrer så profiler, varsler, indekserere, importlister og kalenderfeeden. Se [Tagger](/nb/settings/tags/).

## En lokal oversikt som vokser

Alt ABM lærer om en bok, blir værende i ABMs egen SQLite-database i `/config`, også bøker du fjerner senere. Ta sikkerhetskopi av den mappen, så er oversikten sikret. Metadataene er ikke avhengige av at kilden er tilgjengelig når en bok først er inne.

:::caution[Kommer i neste versjon]
Et eget **Local Metadata Library** er planlagt: en kopi du velger å slå på, av alt ABM noen gang har slått opp, som blir værende selv etter at en bok har forlatt biblioteket ditt, med egne planlagte sikkerhetskopier og nedlasting som SQLite. Seksjonen for den på Metadata-siden finnes i arbeidet som ikke er slått sammen ennå, og er merket som forhåndsvisning, ikke koblet til ennå.
:::

## Tidsplaner for oppdatering

- Discover har sin egen tidsplan. Se [Discover-innstillinger](/nb/settings/discover/).
- Audible-biblioteket har sin egen synkroniseringsplan. Se [Audible-innstillinger](/nb/settings/audible/).
- En bibliotekskanning kan kjøre hver N. time og når filer endres. Se [Mediehåndtering](/nb/settings/media-management/).
- Skriving av sidefiler og tagger ved oppdatering styres av **Create on Refresh** og **Write Tags on Refresh**.
