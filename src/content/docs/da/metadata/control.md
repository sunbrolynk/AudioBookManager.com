---
title: Dine metadata, din kontrol
description: Hvad en opdatering ændrer, hvad du styrer, og de filer og tags ABM skriver til din afspiller.
---

ABM holder styr på dit biblioteks metadata i sin egen database og skriver dem ud igen der, hvor din afspiller kan bruge dem. Denne side gennemgår, hvad du selv styrer, og hvad en opdatering rører ved.

## Hvad en opdatering ændrer

En opdatering (en bogs **Refresh & Scan**, en forfatteropdatering, en serieopdatering) spørger metadatakilden igen og bruger det, der kommer tilbage. Felter, den overskriver, når kilden har en værdi: titel, undertitel, år og udgivelsesdato, bedømmelse, spilletid, sprog, forlag, beskrivelse, forfattere, oplæsere, genrer og coveret.

Et felt, som kilden returnerer tomt, bliver ikke rørt.

## Hvad du styrer

- **Et cover, du har valgt.** Det er låst. Se [Coverlåsen](/da/metadata/cover-lock/).
- **Tags, auto-tags, overvågning, valg af kvalitetsprofil og selve filerne.** En opdatering rører dem ikke.
- **En bog, hvis filer ikke kan læses.** Den bliver ladt helt i fred, og siden Tasks viser hvorfor.

Bogdetaljer som titel, forfattere og beskrivelse kommer fra kilden. ABM tilbyder ikke at rette dem i hånden, og det er ikke planlagt. Det, du styrer, er, hvordan de bliver gemt, og hvor de bliver skrevet.

## Redigeringsdialogen

Redigeringsdialogen ændrer overvågning, kvalitetsprofil, sti og tags og lader dig skrive sidecar-filer og lydtags i samme omgang, for én bog eller en hel markering af serier og forfattere. Se [Bibliotek](/da/using/library/#redigeringsdialogen).

## Sidecars, din afspiller læser

ABM skriver `cover.jpg`, en `.opf`, `desc.txt` og `reader.txt` ved siden af lyden. Audiobookshelf læser OPF-filen, omslaget og tekstfilerne, så afspilleren viser det, du valgte i ABM. Se [Sidecar-filer](/da/using/sidecars/).

## Tags skrevet ind i lyden

ABM kan skrive titel, kunstner, albumkunstner, album, genre, år, kommentar, oplæser og indlejret coverbillede ind i selve lydfilerne, så dataene følger med filen. Det er slået fra som standard. Vælg felterne under **Settings > Metadata**. Se [Metadata-indstillinger](/da/settings/metadata/).

## Kapitler

At sammenligne kapitlerne i dine filer med den udgivne udgaves og skrive de udgivne kapitler ind i filerne er planlagt til en senere udgivelse. Se [Kapitler](/da/using/chapters/).

## Serie og position

En bog har sin serie og position. ABM holder styr på serier som kataloger, så den kan vise, hvilke bøger du ejer, og tilføje dem, du mangler. Se [Følg serier](/da/using/series-tracking/).

## Tags og auto-tags

Tags er dine. Auto-tags sætter dem ud fra regler (genre, oplæser, bedømmelse, spilletid og mere) og kan fjerne dem, når en bog ikke længere passer. Tags styrer så profiler, notifikationer, indeksere, importlister og kalenderfeedet. Se [Tags](/da/settings/tags/).

## En lokal samling, der vokser

Alt, hvad ABM lærer om en bog, bliver i ABM's egen SQLite-database i `/config`, også bøger, du senere fjerner. Tag backup af den mappe, så er samlingen også med. Metadata afhænger ikke af, at kilden kan nås, når en bog først er inde.

:::caution[Kommer i en senere udgivelse]
Et dedikeret **Local Metadata Library** er planlagt: en valgfri kopi af alt, ABM nogensinde har slået op, bevaret selv efter en bog har forladt dit bibliotek, med egne planlagte sikkerhedskopier og en SQLite-download.
:::

## Tidsplaner for opdatering

- Discover har sin egen tidsplan. Se [Discover-indstillinger](/da/settings/discover/).
- Audible-biblioteket har sin egen tidsplan for synkronisering. Se [Audible-indstillinger](/da/settings/audible/).
- En biblioteksscanning kan køre hver N. time og når filer ændrer sig. Se [Media Management](/da/settings/media-management/).
- Om der skrives sidecars og tags ved opdatering, styres af **Create on Refresh** og **Write Tags on Refresh**.
