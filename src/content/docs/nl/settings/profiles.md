---
title: Profielen
description: Kwaliteitsprofielen, delayprofielen en releaseprofielen.
---

**Settings > Profiles** is één pagina met drie secties. Ze beantwoorden drie verschillende vragen over een release.

## Kwaliteitsprofielen

Een kwaliteitsprofiel is een ladder van formaten, van slechtste onderaan tot beste bovenaan. Een sport is een formaat (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) als één bestand of als meerdere bestanden. Sporten kun je groeperen zodat ze even zwaar wegen, en een sport kun je uitzetten.

| Instelling | Betekenis |
|---|---|
| Upgrades Allowed | Staat dit uit, dan vervangt ABM een boek niet meer zodra het er een heeft |
| Upgrade Until | De cutoff. Is deze kwaliteit bereikt, dan stopt ABM met upgraden |
| Grab off-ladder formats | Haalt een formaat binnen dat niet op de lijst staat, in plaats van het boek over te slaan |
| Default profile | Het profiel dat gebruikt wordt als er niks specifiekers geldt |

Eén profiel is de standaard. Een boek gebruikt, in deze volgorde: zijn eigen profiel, het profiel van zijn primaire serie, het profiel van zijn primaire auteur, en dan de standaard. Een profiel dat in gebruik is, kun je niet verwijderen.

Een nieuwe kopie vervangt wat je hebt alleen als het profiel upgrades toestaat, de nieuwe sport op de ladder staat en aan is, het boek onder zijn cutoff zit, en de nieuwe sport echt hoger staat.

Ken je Sonarr? Dit is een kwaliteitsprofiel waarbij kwaliteiten audioformaten en bestandsindeling zijn in plaats van resolutie. Custom formats bestaan niet. [Releaseprofielen](#releaseprofielen) dekken vergelijkbaar terrein.

Er zijn geen niveaus op bitrate of grootte: kwaliteit betekent alleen formaat en bestandsindeling. Bij een release haalt ABM het formaat uit de indexer of de titel en schat het de indeling in op basis van de titel (een M4B zonder deel- of tracknummers telt als één bestand), en daarna controleert het dat opnieuw zodra de bestanden geïmporteerd zijn. De **Preferred Quality** bij [Audible-instellingen](/nl/settings/audible/) is iets anders: dat is de kwaliteit waarin Audible-downloads binnenkomen.

## Delayprofielen

Een delayprofiel houdt een release even tegen voor het binnenhalen, zodat een betere release de tijd krijgt om op te duiken.

| Instelling | Betekenis |
|---|---|
| Enable Usenet / Enable Torrent | Staat grabs via dat protocol toe |
| Usenet Delay / Torrent Delay | Aantal minuten wachten voordat een release via dat protocol wordt binnengehaald |
| Preferred Protocol | Welk protocol de voorkeur krijgt als beide een match vinden |
| Bypass if Highest Quality | Slaat de wachttijd over als een release al aan de cutoff van het profiel voldoet |
| Tags | Het profiel geldt alleen voor items met een overeenkomende tag |

Delayprofielen worden als tabel getoond, net als in Sonarr.

## Releaseprofielen

Een releaseprofiel voegt regels toe bovenop de kwaliteit.

| Veld | Betekenis |
|---|---|
| Enable Profile | Aan of uit |
| Must Contain | De release moet minstens één term bevatten (niet hoofdlettergevoelig) |
| Must Not Contain | Een release met een van deze termen wordt afgewezen |
| Preferred | Termen die een release hoger of lager laten scoren. Schrijf `/regex/` om een reguliere expressie te gebruiken |
| Narration language | Beperkt tot een taal |
| Indexer | Geldt voor één indexer, of voor alle |
| Tags | Geldt alleen voor items met een overeenkomende tag |

Releaseprofielen worden als tabel getoond.

## Valkuilen

- Profielen verwijderen nooit bestanden. Ze bepalen wat er binnengehaald wordt en wat als upgrade telt.
- Tags op een delay- of releaseprofiel beperken het tot boeken die een van die tags hebben.
