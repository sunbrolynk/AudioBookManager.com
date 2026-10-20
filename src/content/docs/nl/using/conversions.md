---
title: Conversies
description: Audiobestanden converteren, samenvoegen, splitsen en van hoofdstukken voorzien, met een wachtrij die je kunt pauzeren.
---

**Library > Conversions** draait ffmpeg-jobs op je bibliotheek. Er zijn vier soorten:

| Job | Wat het doet |
|---|---|
| Convert Format | Encodeert opnieuw naar M4B, MP3, M4A, FLAC of Opus |
| Merge Parts | Voegt meerdere bestanden samen tot één, met hoofdstukken |
| Split Chapters | Splitst één bestand in een bestand per hoofdstuk |
| Ensure Chapters | Voegt hoofdstukmarkeringen toe of verbetert ze, zonder opnieuw te encoderen |

De standaarden voor elke job komen uit de [conversie-instellingen](/nl/settings/conversions/). Elke job kan daarvan afwijken.

## De wachtrij

Jobs wachten in een wachtrij en er draaien er maximaal **Concurrent Conversions** tegelijk (standaard 2). Afgeronde jobs gaan naar History, die je kunt leegmaken.

De uitvoer wordt naar een eigen werkmap geschreven en pas in de bibliotheek gezet als hij klaar is. Elk bestand komt binnen onder een tijdelijke naam en wordt dan op zijn plek hernoemd, zodat er nooit een half geschreven boek opduikt. Voor een job start wordt de vrije ruimte gecontroleerd, en nog een keer voor het plaatsen. Bronbestanden worden nooit overschreven.

Een bestand converteren naar het formaat dat het al heeft, wordt geweigerd, omdat dat het origineel zou overschrijven.

## Na een conversie

ABM werkt de bestandsrecords, de grootte en de kwaliteit van het boek bij, zodat een geconverteerd boek zijn nieuwe kwaliteit toont. Staat **Delete Original** aan, dan gaan de oude bestanden naar de prullenbak voor conversies als die aanstaat.

Mislukt het plaatsen van het resultaat (omdat de bibliotheekmap vol is, bijvoorbeeld), dan mislukt de job en blijft de afgeronde uitvoer in zijn werkmap staan. De foutmelding noemt de map. **Retry** begint de job opnieuw en gooit die bewaarde uitvoer weg, dus het vraagt eerst om bevestiging. **Clear history** laat jobs staan die nog niet-geplaatste uitvoer hebben.

## Pauzeren en hervatten

Er zijn twee soorten pauze, en geen van beide annuleert iets:

- **Pause** op één lopende job zet de ffmpeg-processen stil waar ze zijn. Resume gaat verder vanaf hetzelfde punt.
- **Pause queue** (bovenaan de wachtrij, of in de bovenbalk op een telefoon) voorkomt dat er nieuwe jobs starten en zet elke lopende job stil.

Een job die je zelf gepauzeerd hebt, blijft gepauzeerd als de wachtrij hervat wordt, en ook na een herstart. Een job die liep toen ABM stopte, komt terug als gepauzeerd en start niet vanzelf. Resume gaat bij samenvoegen, splitsen en converteren van meerdere bestanden verder vanaf het laatste afgeronde deel. Een conversie van één bestand begint dat bestand opnieuw.

De limiet van 6 uur per run telt alleen de tijd dat de job niet gepauzeerd is. Kan de opgeslagen toestand van de wachtrij bij het opstarten niet gelezen worden, dan start de wachtrij gepauzeerd en zie je dat staan. Druk op Resume queue om hem opnieuw weg te schrijven.

Ken je Sonarr? Zoiets bestaat niet in de arrs. Zie het als een kleine encoderwachtrij die toevallig in de manager woont.

## Valkuilen

- Concurrent Conversions keer Threads Per Job mag niet hoger zijn dan het aantal CPU-cores. Bij Auto verdeelt ABM de overgebleven kernen voor je over de jobs die tegelijk draaien.
- Een geconverteerd bestand heeft een nieuwe grootte en wijzigingstijd, dus Audiobookshelf scant het opnieuw.
- Converteer je een bestand dat gehardlinkt is aan een torrent die nog seedt, dan ontstaat er een nieuw bestand. De kopie die seedt houdt de oude bytes.
