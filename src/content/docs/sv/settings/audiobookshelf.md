---
title: Audiobookshelf-anslutning
description: Anslut ABM till din Audiobookshelf-server.
---

:::caution[Kommer i en senare version]
Inställningssidan för det här finns ännu inte i någon utgiven version. Anslutningen går redan att spara, testa och ta bort via API:et, men inget annat i ABM använder den än.
:::

Audiobookshelf (ABS) är servern du lyssnar från. ABM ansluter med serverns URL och en API-nyckel som skapats för en ABS-användare.

## Version

ABM behöver ABS 2.37.0 eller nyare och är testat på 2.37.2. En äldre server nekas. En nyare får en varning, eftersom ABM inte är testat på den.

## Kontot

API-nyckeln tillhör en ABS-användare. ABM kontrollerar den användaren när du sparar eller testar.

- **Nekas tills det är åtgärdat:** användaren måste vara admin eller root och ha behörigheten Update samt åtkomst till alla bibliotek, alla taggar och explicit innehåll.
- **Varning, men det sparas ändå:** Upload är av (ABM kan inte äga omslagen) eller Delete är av (en bok du tar bort i ABM ligger kvar i ABS tills du slår på det).

## Hur ABM når ABS

ABM ansluter alltid direkt till ABS. Det går aldrig via det VPN eller den proxy du valde under [Network](/settings/network/). Serverns URL kontrolleras innan den sparas, och en osäker nekas.

## API-nyckeln

Nyckeln lagras krypterad och visas aldrig igen. Lämna den tom när du sparar eller testar för att behålla den sparade. En sparad nyckel skickas bara till adressen den sparades för, så om du ändrar URL, TLS-inställning eller CA-paket ska du ange nyckeln igen.

## Verifiera TLS

Certifikat verifieras som standard. Om din server använder ett certifikat från din egen utfärdare anger du sökvägen till dess CA-paket i stället för att stänga av verifieringen.

## Test och Disconnect

**Test** kontrollerar en server utan att spara: versionen, användarens behörigheter och dess bibliotek. Att spara en påslagen anslutning kör samma kontroller först och nekas om en felkontroll misslyckas. En anslutning som sparas avstängd kontrolleras inte. **Disconnect** tar bort den sparade anslutningen och dess nyckel.

## System Status

När en anslutning är påslagen har [System > Status](/system/status/) en rad AudioBookShelf med resultatet av den senaste kontrollen. Den uppdateras när du sparar och av den periodiska hälsokontrollen, som körs var 6:e timme, så det är ingen liveavläsning varje gång du öppnar sidan.

## Vad ABM tar bort

ABM tar bara bort objektposten i ABS. Filer raderas aldrig för gott.
