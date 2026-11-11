---
title: Audiobookshelf-tilkobling
description: Koble ABM til Audiobookshelf-serveren din.
---

:::caution[Kommer i en senere utgave]
Innstillingssiden for dette er ikke i noen utgitt versjon ennå. Tilkoblingen kan allerede lagres, testes og fjernes via API-et, men ingenting annet i ABM bruker den ennå.
:::

Audiobookshelf (ABS) er serveren du lytter fra. ABM kobler til med serverens URL og en API-nøkkel som er laget for én ABS-bruker.

## Versjon

ABM trenger ABS 2.37.0 eller nyere og er testet på 2.37.2. En eldre server avvises. En nyere får en advarsel, fordi ABM ikke er testet på den.

## Kontoen

API-nøkkelen tilhører en ABS-bruker. ABM sjekker den brukeren når du lagrer eller tester.

- **Avvist til det er rettet:** brukeren må være admin eller root og ha tillatelsen Update samt tilgang til alle biblioteker, alle tagger og eksplisitt innhold.
- **Advarsel, men det lagres likevel:** Upload er av (ABM kan ikke eie omslagene), eller Delete er av (en bok du sletter i ABM blir liggende i ABS til du slår det på).

## Slik når ABM ABS

ABM kobler alltid direkte til ABS. Det går aldri via VPN-en eller proxyen du valgte under [Network](/settings/network/). Serverens URL sjekkes før den lagres, og en usikker avvises.

## API-nøkkelen

Nøkkelen lagres kryptert og vises aldri igjen. La den stå tom når du lagrer eller tester for å beholde den lagrede. En lagret nøkkel sendes bare til adressen den ble lagret for, så hvis du endrer URL, TLS-innstilling eller CA-pakke, må du skrive inn nøkkelen på nytt.

## Bekreft TLS

Sertifikater bekreftes som standard. Bruker serveren din et sertifikat fra din egen utsteder, oppgi stien til CA-pakken i stedet for å slå av bekreftelsen.

## Test og Disconnect

**Test** sjekker en server uten å lagre: versjonen, brukerens tillatelser og bibliotekene. Å lagre en påslått tilkobling kjører de samme sjekkene først og avvises hvis en feilsjekk mislykkes. En tilkobling lagret som avslått sjekkes ikke. **Disconnect** fjerner den lagrede tilkoblingen og nøkkelen.

## System Status

Når en tilkobling er påslått, har [System > Status](/system/status/) en rad AudioBookShelf med resultatet av den siste sjekken. Den oppdateres når du lagrer og av den periodiske helsesjekken, som kjører hver 6. time, så det er ikke en live-sjekk hver gang du åpner siden.

## Hva ABM fjerner

ABM fjerner bare elementposten i ABS. Filer slettes aldri for godt.
