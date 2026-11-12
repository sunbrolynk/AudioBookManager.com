---
title: Audiobookshelf-verbinding
description: Verbind ABM met je Audiobookshelf-server.
---

Audiobookshelf (ABS) is de server waar je naar luistert. Verbind ABM onder **Settings > Audiobookshelf**, op de computer en op de telefoon. Je geeft het serveradres en een API-sleutel die voor één ABS-gebruiker is gemaakt.

## Verbinding

- **Enable:** Laat ABM de server gebruiken. Als je opslaat met dit aan, controleert ABM eerst de server en weigert op te slaan als een controle op foutniveau mislukt. De pagina toont de redenen. Een uitgeschakeld opgeslagen verbinding wordt niet gecontroleerd.
- **Server address:** Waar je ABS-server antwoordt, bijvoorbeeld `http://192.168.1.20:13378`. Draait ABS op dezelfde machine als ABM, gebruik dan het LAN-adres van die machine, of de containernaam of het container-IP als beide in Docker draaien.
- **API key:** Een API-sleutel van een admin-gebruiker in ABS.
- **Verify TLS certificate:** Standaard aan. Gebruikt je server een certificaat van je eigen autoriteit, geef dan het pad naar de CA-bundel op bij **CA bundle path** in plaats van de verificatie uit te zetten. Laat het pad leeg om de certificaten van het systeem te gebruiken.
- **Test:** Voert de controles uit op wat op het scherm staat, zonder iets op te slaan.
- **Disconnect:** Vraagt om bevestiging en verwijdert dan het opgeslagen adres en de sleutel.

## Hoe ABM ABS bereikt

ABM verbindt altijd rechtstreeks met ABS. Het gaat nooit via de VPN of proxy die je onder [Network](/settings/network/) hebt gekozen. Het adres wordt gecontroleerd voordat het wordt opgeslagen, en een onveilig adres wordt geweigerd. Een adres dat terugwijst naar de machine waarop ABM draait, een link-local-adres en een cloudmetadata-adres worden geweigerd, net als een naam die naar een van die adressen wordt omgezet. Je eigen LAN-adressen zijn prima, daarom heeft een ABS op dezelfde machine het LAN-adres van de machine of de naam of het IP van zijn container nodig.

## De API-sleutel

De sleutel wordt versleuteld opgeslagen en nooit meer getoond. Laat het veld leeg bij opslaan of testen om de opgeslagen sleutel te houden. Een opgeslagen sleutel gaat alleen naar het adres waarvoor hij is opgeslagen, dus als je het adres, Verify TLS of de CA-bundel wijzigt, voer je de sleutel opnieuw in. Kan ABM de opgeslagen sleutel niet meer lezen (de versleutelingssleutel is kwijt of gewijzigd), dan zegt de pagina dat je hem opnieuw moet invoeren, ook als de verbinding uit staat.

## Wat er wordt gecontroleerd

**Versie.** ABM heeft ABS 2.37.0 of nieuwer nodig en is getest op 2.37.2. Een oudere server, of een die geen versie meldt die ABM begrijpt, faalt met een fout. Een nieuwere geeft een waarschuwing, omdat ABM er niet op is getest.

**Het account.** De API-sleutel hoort bij een ABS-gebruiker, en ABM controleert die gebruiker.

- **Fout tot het is opgelost:** de gebruiker moet admin of root zijn en de rechten Update hebben, plus toegang tot alle bibliotheken, alle tags en expliciete inhoud.
- **Waarschuwing, wordt toch opgeslagen:** Upload staat uit (ABM kan geen covers beheren), of Delete staat uit (een boek dat je in ABM verwijdert, blijft in ABS staan tot je het aanzet).

## Status

Het onderdeel Status toont het resultaat van de laatste controle (Not connected, OK, Warning of Error), de serverversie, de gebruiker bij wie de sleutel hoort, wanneer ABM voor het laatst controleerde en de controles zelf. Een mislukte controle toont zijn reden, en de geslaagde worden geteld.

[System > Status](/system/status/) heeft ook een rij Audiobookshelf als een verbinding aan staat. Die wordt vernieuwd bij het opslaan en door de periodieke gezondheidscontrole, die elke 6 uur draait, dus het is geen live meting bij elke keer dat je de pagina opent. Een opgeslagen sleutel die ABM niet meer kan lezen, verschijnt als fout tot je hem opnieuw invoert. Een verbinding die nog niet is gecontroleerd, verschijnt als waarschuwing. Een uitgeschakelde verbinding blijft daar stil.

## Wat ABM verwijdert

ABM verwijdert in ABS alleen het itemrecord. Het verwijdert nooit definitief bestanden.
