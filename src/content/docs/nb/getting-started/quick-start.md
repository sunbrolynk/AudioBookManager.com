---
title: Hurtigstart
description: Fra ny installasjon til den første overvåkede boka di.
---

Dette er den korteste veien fra en kjørende container til en bok det søkes etter. Installer ABM først: se [Installer ABM](/nb/installation/).

## 1. Logg inn

Første gang du åpner den, blir du guidet gjennom å lage en innlogging. Til du har gjort det, avviser ABM forespørsler. Hvordan innlogging fungerer etterpå, står i [Sikkerhet og innlogging](/nb/settings/security/).

## 2. Velg hvordan ABM kommer seg ut på internett

Under **Settings > General** finner du en **Proxy & VPN**-seksjon. Skal du bruke den innebygde metadatakilden, må du velge en tilkobling først. Se [Velge metadatakilde](/nb/metadata/choosing-a-source/).

## 3. Legg til en rotmappe

En rotmappe er der ABM holder bøkene. Legg den til under **Settings > Media Management** i **Root Folders**-seksjonen. Det bør være den samme mappen som spilleren din (for eksempel Audiobookshelf) leser.

## 4. Legg til en indekserer og en nedlastingsklient

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse eller Prowlarr. Se [Indekserere](/nb/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet eller Blackhole. Se [Nedlastingsklienter](/nb/settings/download-clients/).

Hvis klienten kjører i en annen container, sjekk at den og ABM ser nedlastingsmappen på samme sti, eller legg til en remote path mapping (tilordning av eksterne stier).

## 5. Sett en kvalitetsprofil

**Settings > Profiles** holder kvalitetsstigen ABM bruker for å avgjøre hva den skal hente, og hva som teller som en oppgradering. En ny installasjon har ingen, så lag en. Den første profilen du lager, blir standard, og du kan finpusse den senere. Se [Profiler](/nb/settings/profiles/).

## 6. Koble til Audible (valgfritt)

Har du Audible-bøker, kobler du til kontoen din under **Settings > Audible**. Velg **Marketplace**, trykk **Connect Audible Account** og så **I Understand, Open Amazon Login**. Logg inn hos Amazon i den nye fanen. Den tomme siden, eller "Page not found"-siden, du havner på etterpå, er helt som forventet. Kopier hele adressen fra adressefeltet inn i **Redirect URL**, legg til et **Display Name** hvis du vil, og trykk **Complete Login**. Passordet ditt lagres aldri, og den første biblioteksynkroniseringen starter med en gang. Se [Audible](/nb/audible/).

## 7. Hent inn eller legg til bøker

- Har du allerede en samling? Bruk [Bibliotekimport](/nb/library-import/).
- Begynner du fra null? Bruk **Library > Add New** og søk på tittel, forfatter eller serie. Se [Legg til ny](/nb/using/add-new/).

En bok du legger til, er ønsket (wanted) til en fil for den er importert. Ønskede bøker dukker opp under **Wanted > Missing** og blir søkt etter automatisk.

## 8. Se den jobbe

**Activity > Queue** viser hva som lastes ned. **Activity > History** viser hva som er hentet og importert. Når noe går galt, er [Feilsøking](/nb/troubleshooting/) og [Oppgaver](/nb/system/tasks/)-siden stedene å se.
