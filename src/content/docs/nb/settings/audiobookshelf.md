---
title: Audiobookshelf-tilkobling
description: Koble ABM til Audiobookshelf-serveren din.
---

Audiobookshelf (ABS) er serveren du lytter fra. Koble ABM til under **Settings > Audiobookshelf**, på datamaskinen og på telefonen. Du oppgir serveradressen og en API-nøkkel som er laget for én ABS-bruker.

## Tilkobling

- **Enable:** Lar ABM bruke serveren. Når du lagrer med dette på, sjekker ABM serveren først og nekter å lagre hvis en sjekk på feilnivå mislykkes. Siden viser årsakene. En tilkobling som lagres avslått, sjekkes ikke.
- **Server address:** Der ABS-serveren din svarer, for eksempel `http://192.168.1.20:13378`. Kjører ABS på samme maskin som ABM, bruk maskinens LAN-adresse, eller containerens navn eller IP hvis begge kjører i Docker.
- **API key:** En API-nøkkel fra en admin-bruker i ABS.
- **Verify TLS certificate:** På som standard. Bruker serveren din et sertifikat fra din egen utsteder, oppgi stien til CA-pakken i **CA bundle path** i stedet for å slå av verifiseringen. La stien stå tom for å bruke systemets sertifikater.
- **Test:** Kjører sjekkene på det som står på skjermen, uten å lagre noe.
- **Disconnect:** Ber om bekreftelse og fjerner deretter den lagrede adressen og nøkkelen.

## Hvordan ABM når ABS

ABM kobler alltid direkte til ABS. Den går aldri gjennom VPN-en eller proxyen du valgte under [Network](/settings/network/). Adressen sjekkes før den lagres, og en utrygg adresse nektes. En adresse som peker tilbake på maskinen ABM kjører på, en link-local-adresse og en skymetadata-adresse nektes, det samme gjør et navn som løses til en av dem. Dine egne LAN-adresser er greie, og derfor trenger en ABS på samme maskin maskinens LAN-adresse eller containerens navn eller IP.

## API-nøkkelen

Nøkkelen lagres kryptert og vises aldri igjen. La feltet stå tomt når du lagrer eller tester for å beholde den lagrede nøkkelen. En lagret nøkkel sendes bare til adressen den ble lagret for, så endrer du adressen, Verify TLS eller CA-pakken, må du skrive inn nøkkelen på nytt. Kan ABM ikke lenger lese den lagrede nøkkelen (krypteringsnøkkelen gikk tapt eller ble endret), sier siden at du må skrive den inn på nytt, også når tilkoblingen er avslått.

## Hva som sjekkes

**Versjon.** ABM trenger ABS 2.37.0 eller nyere og er testet på 2.37.2. En eldre server, eller en som ikke melder en versjon ABM forstår, feiler med en feil. En nyere gir en advarsel, fordi ABM ikke er testet på den.

**Kontoen.** API-nøkkelen tilhører en ABS-bruker, og ABM sjekker den brukeren.

- **Feil til det er rettet:** brukeren må være admin eller root og ha tillatelsen Update, samt tilgang til alle bibliotek, alle tagger og eksplisitt innhold.
- **Advarsel, lagres likevel:** Upload er av (ABM kan ikke eie omslag), eller Delete er av (en bok du sletter i ABM, blir værende i ABS til du slår det på).

## Status

Delen Status viser resultatet av siste sjekk (Not connected, OK, Warning eller Error), serverversjonen, brukeren nøkkelen tilhører, når ABM sist sjekket, og selve sjekkene. En sjekk som feilet viser årsaken sin, og de beståtte telles.

[System > Status](/system/status/) har også en rad Audiobookshelf når en tilkobling er på. Den oppdateres når du lagrer og av den periodiske helsesjekken, som kjører hver 6. time, så det er ikke en live-måling hver gang du åpner siden. En lagret nøkkel ABM ikke lenger kan lese, vises som en feil til du skriver den inn på nytt. En tilkobling som ikke er sjekket ennå, vises som en advarsel. En avslått tilkobling er stille der.

## Hva ABM fjerner

ABM fjerner bare elementposten i ABS. Den sletter aldri filer permanent.
