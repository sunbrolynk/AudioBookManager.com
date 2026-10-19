---
title: Hurtig start
description: Fra en frisk installation til din første overvågede bog.
---

Det her er den korteste vej fra en kørende container til en bog, der bliver søgt efter. Installér ABM først: se [Installér ABM](/da/installation/).

## 1. Log ind

Første gang bliver du guidet igennem at oprette et login. Indtil du har gjort det, afviser ABM alle requests. Hvordan login opfører sig bagefter, står i [Sikkerhed og login](/da/settings/security/).

## 2. Vælg, hvordan ABM kommer på nettet

Under **Settings > General** er der en sektion, der hedder **Proxy & VPN**. Vil du bruge den indbyggede metadatakilde, skal der vælges en forbindelse først. Se [Vælg en metadatakilde](/da/metadata/choosing-a-source/).

## 3. Tilføj en rodmappe

En rodmappe er der, hvor ABM gemmer bøger. Tilføj den under **Settings > Media Management** i sektionen **Root Folders**. Det skal være den samme mappe, som din afspiller (fx Audiobookshelf) læser.

## 4. Tilføj en indekser og en downloadklient

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse eller Prowlarr. Se [Indeksere](/da/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet eller Blackhole. Se [Downloadklienter](/da/settings/download-clients/).

Kører klienten i en anden container, så tjek, at den og ABM ser downloadmappen på den samme sti, eller tilføj en remote path mapping.

## 5. Sæt en kvalitetsprofil

**Settings > Profiles** har den kvalitetsstige, ABM bruger til at afgøre, hvad der skal hentes, og hvad der tæller som en opgradering. En frisk installation har ingen, så opret en. Den første profil, du laver, bliver standard, og du kan finpudse den senere. Se [Profiler](/da/settings/profiles/).

## 6. Forbind Audible (valgfrit)

Har du Audible-bøger, så forbind din konto under **Settings > Audible**. Vælg din **Marketplace**, tryk på **Connect Audible Account** og så **I Understand, Open Amazon Login**. Log ind hos Amazon i den nye fane. Den tomme side eller "Page not found"-side, du lander på bagefter, er helt forventet. Kopiér hele adressen fra adresselinjen ind i **Redirect URL**, tilføj et **Display Name**, hvis du har lyst, og tryk på **Complete Login**. Din adgangskode bliver aldrig gemt, og den første synkronisering af biblioteket starter med det samme. Se [Audible](/da/audible/).

## 7. Hent eller tilføj bøger

- Har du allerede en samling? Brug [Biblioteksimport](/da/library-import/).
- Starter du forfra? Brug **Library > Add New**, og søg efter titel, forfatter eller serie. Se [Tilføj ny](/da/using/add-new/).

En bog, du tilføjer, står som ønsket, indtil der er importeret en fil til den. Ønskede bøger dukker op under **Wanted > Missing** og bliver søgt efter automatisk.

## 8. Se den arbejde

**Activity > Queue** viser, hvad der bliver hentet. **Activity > History** viser, hvad der er blevet hentet og importeret. Når noget går galt, er [Fejlfinding](/da/troubleshooting/) og siden [Opgaver](/da/system/tasks/) stederne at kigge.
