---
title: Audiobookshelf-anslutning
description: Anslut ABM till din Audiobookshelf-server.
---

Audiobookshelf (ABS) är servern du lyssnar från. Anslut ABM under **Settings > Audiobookshelf**, på datorn och på telefonen. Du anger serveradressen och en API-nyckel som skapats för en ABS-användare.

## Anslutning

- **Enable:** Låter ABM använda servern. När du sparar med detta på kontrollerar ABM servern först och vägrar spara om en kontroll på felnivå misslyckas. Sidan visar orsakerna. En anslutning som sparas avstängd kontrolleras inte.
- **Server address:** Där din ABS-server svarar, till exempel `http://192.168.1.20:13378`. Körs ABS på samma maskin som ABM, använd maskinens LAN-adress, eller containerns namn eller IP om båda körs i Docker.
- **API key:** En API-nyckel från en admin-användare i ABS.
- **Verify TLS certificate:** På som standard. Använder din server ett certifikat från din egen utfärdare, ange sökvägen till dess CA-paket i **CA bundle path** i stället för att stänga av verifieringen. Lämna sökvägen tom för att använda systemets certifikat.
- **Test:** Kör kontrollerna på det som visas på skärmen, utan att spara något.
- **Disconnect:** Ber om bekräftelse och tar sedan bort den sparade adressen och nyckeln.

## Hur ABM når ABS

ABM ansluter alltid direkt till ABS. Det går aldrig via det VPN eller den proxy du valde under [Network](/settings/network/). Adressen kontrolleras innan den sparas, och en osäker adress vägras. En adress som pekar tillbaka på maskinen där ABM körs, en link-local-adress och en molnmetadataadress vägras, liksom ett namn som slås upp till någon av dem. Dina egna LAN-adresser är okej, och därför behöver en ABS på samma maskin maskinens LAN-adress eller containerns namn eller IP.

## API-nyckeln

Nyckeln sparas krypterad och visas aldrig igen. Lämna den tom när du sparar eller testar för att behålla den sparade. En sparad nyckel skickas bara till adressen den sparades för, så ändrar du adressen, Verify TLS eller CA-paketet, ange nyckeln igen. Kan ABM inte längre läsa den sparade nyckeln (krypteringsnyckeln försvann eller ändrades) visar den här sidan samma meddelande som de andra inställningssidorna och säger att du ska ange den igen, även när anslutningen är avstängd.

## Vad som kontrolleras

**Version.** ABM kräver ABS 2.37.0 eller nyare och är testat på 2.37.2. En äldre server, eller en som inte rapporterar en version ABM förstår, misslyckas med ett fel. En nyare ger en varning, eftersom ABM inte är testat på den.

**Kontot.** API-nyckeln tillhör en ABS-användare, och ABM kontrollerar den användaren.

- **Fel tills det är åtgärdat:** användaren måste vara admin eller root och ha behörigheten Update samt åtkomst till alla bibliotek, alla taggar och explicit innehåll.
- **Varning, sparas ändå:** Upload är av (ABM kan inte äga omslag), eller Delete är av (en bok du raderar i ABM ligger kvar i ABS tills du slår på det).

## Status

Avsnittet Status visar resultatet av den senaste kontrollen (Not connected, OK, Warning eller Error), serverversionen, användaren nyckeln tillhör, när ABM senast kontrollerade och själva kontrollerna. En misslyckad kontroll visar sin orsak, och de godkända räknas.

[System > Status](/system/status/) har också en rad Audiobookshelf när en anslutning är på. Den uppdateras när du sparar och av den periodiska hälsokontrollen, som körs var 6:e timme, så det är ingen liveprobe varje gång du öppnar sidan. En avstängd anslutning är tyst där, även om dess sparade nyckel inte går att läsa. Med anslutningen på visas en sparad nyckel som ABM inte längre kan läsa som ett fel tills du anger den igen, och en anslutning som inte kontrollerats ännu visas som en varning.

## Vad ABM tar bort

ABM tar i ABS bara bort objektposten. Det raderar aldrig filer permanent.
