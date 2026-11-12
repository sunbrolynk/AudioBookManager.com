---
title: Audiobookshelf-forbindelse
description: Forbind ABM til din Audiobookshelf-server.
---

Audiobookshelf (ABS) er den server, du lytter fra. Forbind ABM under **Settings > Audiobookshelf**, på computeren og på telefonen. Du angiver serveradressen og en API-nøgle, der er lavet til én ABS-bruger.

## Forbindelse

- **Enable:** Lader ABM bruge serveren. Når du gemmer med dette slået til, tjekker ABM serveren først og nægter at gemme, hvis et tjek på fejlniveau fejler. Siden viser årsagerne. En forbindelse, der gemmes slået fra, tjekkes ikke.
- **Server address:** Hvor din ABS-server svarer, for eksempel `http://192.168.1.20:13378`. Kører ABS på samme maskine som ABM, så brug maskinens LAN-adresse, eller containerens navn eller IP, hvis begge kører i Docker.
- **API key:** En API-nøgle fra en admin-bruger i ABS.
- **Verify TLS certificate:** Slået til som standard. Bruger din server et certifikat fra din egen udsteder, så angiv stien til dens CA-pakke i **CA bundle path** i stedet for at slå verificeringen fra. Lad stien stå tom for at bruge systemets certifikater.
- **Test:** Kører tjekkene på det, der står på skærmen, uden at gemme noget.
- **Disconnect:** Beder om bekræftelse og fjerner derefter den gemte adresse og nøgle.

## Hvordan ABM når ABS

ABM forbinder altid direkte til ABS. Den går aldrig gennem den VPN eller proxy, du valgte under [Network](/settings/network/). Adressen tjekkes, før den gemmes, og en usikker adresse afvises. En adresse, der peger tilbage på den maskine, ABM kører på, en link-local-adresse og en cloud-metadataadresse afvises, og det samme gør et navn, der opløses til en af dem. Dine egne LAN-adresser er fine, og derfor kræver en ABS på samme maskine maskinens LAN-adresse eller containerens navn eller IP.

## API-nøglen

Nøglen gemmes krypteret og vises aldrig igen. Lad feltet stå tomt, når du gemmer eller tester, for at beholde den gemte nøgle. En gemt nøgle sendes kun til den adresse, den blev gemt for, så ændrer du adressen, Verify TLS eller CA-pakken, skal du indtaste nøglen igen. Kan ABM ikke længere læse den gemte nøgle (krypteringsnøglen er mistet eller ændret), siger siden, at du skal indtaste den igen, selv når forbindelsen er slået fra.

## Hvad der tjekkes

**Version.** ABM kræver ABS 2.37.0 eller nyere og er testet på 2.37.2. En ældre server, eller en der ikke melder en version, ABM forstår, fejler med en fejl. En nyere giver en advarsel, fordi ABM ikke er testet på den.

**Kontoen.** API-nøglen tilhører en ABS-bruger, og ABM tjekker den bruger.

- **Fejl, til det er rettet:** brugeren skal være admin eller root og have tilladelsen Update samt adgang til alle biblioteker, alle tags og eksplicit indhold.
- **Advarsel, gemmes alligevel:** Upload er slået fra (ABM kan ikke eje covers), eller Delete er slået fra (en bog, du sletter i ABM, bliver i ABS, indtil du slår det til).

## Status

Afsnittet Status viser resultatet af det seneste tjek (Not connected, OK, Warning eller Error), serverversionen, den bruger nøglen tilhører, hvornår ABM sidst tjekkede, og selve tjekkene. Et tjek, der fejlede, viser sin årsag, og de beståede tælles.

[System > Status](/system/status/) har også en række Audiobookshelf, når en forbindelse er slået til. Den opdateres, når du gemmer, og af det periodiske helbredstjek, der kører hver 6. time, så det er ikke en live-måling, hver gang du åbner siden. En gemt nøgle, ABM ikke længere kan læse, vises som en fejl, indtil du indtaster den igen. En forbindelse, der endnu ikke er tjekket, vises som en advarsel. En forbindelse, der er slået fra, er tavs dér.

## Hvad ABM fjerner

ABM fjerner kun elementposten i ABS. Den sletter aldrig filer permanent.
