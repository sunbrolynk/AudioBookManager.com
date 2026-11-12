---
title: Audiobookshelf-verbinding
description: Koppel ABM aan je Audiobookshelf-server.
---

:::caution[Komt in een latere release]
De instellingenpagina hiervoor zit nog in geen enkele uitgebrachte versie. De verbinding kun je al via de API opslaan, testen en verwijderen, maar verder gebruikt niets in ABM hem nog.
:::

Audiobookshelf (ABS) is de server waarop je luistert. ABM maakt verbinding met de server-URL en een API-sleutel die is gemaakt voor één ABS-gebruiker.

## Versie

ABM heeft ABS 2.37.0 of nieuwer nodig en is getest op 2.37.2. Een oudere server wordt geweigerd. Bij een nieuwere krijg je een waarschuwing, omdat ABM daar niet op is getest.

## Het account

De API-sleutel hoort bij een ABS-gebruiker. ABM controleert die gebruiker als je opslaat of test.

- **Geweigerd tot het is opgelost:** de gebruiker moet admin of root zijn en de rechten Update hebben, plus toegang tot alle bibliotheken, alle tags en expliciete inhoud.
- **Waarschuwing, maar het wordt wel opgeslagen:** Upload staat uit (ABM kan geen covers beheren) of Delete staat uit (een boek dat je in ABM verwijdert, blijft in ABS staan tot je het aanzet).

## Hoe ABM ABS bereikt

ABM verbindt altijd rechtstreeks met ABS. Het gaat nooit via de VPN of proxy die je bij [Network](/settings/network/) hebt gekozen. De server-URL wordt gecontroleerd voordat hij wordt opgeslagen, en een onveilige wordt geweigerd. Een adres dat terugwijst naar de machine waarop ABM draait, een link-local-adres en een adres voor cloudmetadata worden geweigerd, net als een naam die naar een van die adressen wordt omgezet. Je eigen LAN-adressen zijn prima.

## De API-sleutel

De sleutel wordt versleuteld opgeslagen en nooit meer getoond. Laat hem leeg bij opslaan of testen om de opgeslagen sleutel te houden. Een opgeslagen sleutel gaat alleen naar het adres waarvoor hij is opgeslagen. Verander je de URL, de TLS-instelling of de CA-bundel, voer de sleutel dan opnieuw in.

## TLS verifiëren

Certificaten worden standaard gecontroleerd. Gebruikt je server een certificaat van je eigen autoriteit, geef dan het pad naar de CA-bundel op in plaats van de controle uit te zetten.

## Test en Disconnect

**Test** controleert een server zonder op te slaan: de versie, de rechten van de gebruiker en de bibliotheken. Een ingeschakelde verbinding opslaan doet eerst dezelfde controles en wordt geweigerd als een foutcontrole faalt. Een uitgeschakeld opgeslagen verbinding wordt niet gecontroleerd. **Disconnect** verwijdert de opgeslagen verbinding en de sleutel.

## System Status

Als een verbinding aanstaat, heeft [System > Status](/system/status/) een rij AudioBookShelf met de uitkomst van de laatste controle. Die wordt ververst bij het opslaan en door de periodieke gezondheidscontrole, die elke 6 uur draait. Het is dus geen live controle bij elke keer dat je de pagina opent. Een opgeslagen sleutel die ABM niet meer kan lezen (de versleutelingssleutel is kwijt of veranderd) verschijnt als fout totdat je hem opnieuw invoert. Een verbinding die nog niet is gecontroleerd, verschijnt als waarschuwing.

## Wat ABM verwijdert

ABM verwijdert in ABS alleen het itemrecord. Bestanden worden nooit definitief verwijderd.
