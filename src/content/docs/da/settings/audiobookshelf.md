---
title: Audiobookshelf-forbindelse
description: Forbind ABM til din Audiobookshelf-server.
---

:::caution[Kommer i en senere udgave]
Indstillingssiden til det her er endnu ikke i nogen udgivet version. Forbindelsen kan allerede gemmes, testes og fjernes via API'et, men ingenting andet i ABM bruger den endnu.
:::

Audiobookshelf (ABS) er den server, du lytter fra. ABM forbinder med serverens URL og en API-nøgle, der er lavet til én ABS-bruger.

## Version

ABM kræver ABS 2.37.0 eller nyere og er testet på 2.37.2. En ældre server afvises. En nyere får en advarsel, fordi ABM ikke er testet på den.

## Kontoen

API-nøglen tilhører en ABS-bruger. ABM tjekker den bruger, når du gemmer eller tester.

- **Afvist, til det er rettet:** brugeren skal være admin eller root og have tilladelsen Update samt adgang til alle biblioteker, alle tags og eksplicit indhold.
- **Advarsel, men det bliver gemt alligevel:** Upload er slået fra (ABM kan ikke eje omslagene), eller Delete er slået fra (en bog, du sletter i ABM, bliver i ABS, til du slår det til).

## Sådan når ABM ABS

ABM forbinder altid direkte til ABS. Det går aldrig gennem den VPN eller proxy, du valgte under [Network](/settings/network/). Serverens URL tjekkes, før den gemmes, og en usikker afvises. En adresse, der peger tilbage på den maskine, ABM kører på, en link-local-adresse og en adresse til cloud-metadata afvises, og det samme gælder et navn, der oversættes til en af dem. Dine egne LAN-adresser er fine.

## API-nøglen

Nøglen gemmes krypteret og vises aldrig igen. Lad den stå tom, når du gemmer eller tester, for at beholde den gemte. En gemt nøgle sendes kun til den adresse, den blev gemt til, så hvis du ændrer URL, TLS-indstilling eller CA-pakke, skal du indtaste nøglen igen.

## Bekræft TLS

Certifikater bekræftes som standard. Bruger din server et certifikat fra din egen udsteder, så angiv stien til dens CA-pakke i stedet for at slå bekræftelsen fra.

## Test og Disconnect

**Test** tjekker en server uden at gemme: versionen, brugerens tilladelser og dens biblioteker. At gemme en slået-til forbindelse kører først de samme tjek og afvises, hvis et fejltjek fejler. En forbindelse gemt som slået fra tjekkes ikke. **Disconnect** fjerner den gemte forbindelse og dens nøgle.

## System Status

Når en forbindelse er slået til, har [System > Status](/system/status/) en række AudioBookShelf med resultatet af det seneste tjek. Den opdateres, når du gemmer, og af det periodiske sundhedstjek, der kører hver 6. time, så det er ikke et live-tjek, hver gang du åbner siden. En gemt nøgle, som ABM ikke længere kan læse (krypteringsnøglen er gået tabt eller ændret), vises som en fejl, indtil du indtaster den igen. En forbindelse, der endnu ikke er tjekket, vises som en advarsel.

## Hvad ABM fjerner

ABM fjerner kun elementposten i ABS. Filer slettes aldrig for altid.
