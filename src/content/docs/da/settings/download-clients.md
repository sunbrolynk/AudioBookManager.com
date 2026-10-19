---
title: Downloadklienter
description: Understøttede klienter, håndtering af færdige downloads og remote path mappings.
---

**Settings > Download Clients** forbinder det program, der står for at hente.

## Understøttede klienter

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet og Blackhole (en overvåget mappe). Det er hele listen.

## Felter

Hvilke felter der vises, afhænger af klienten.

| Felt | Virkning |
|---|---|
| Name | Navn |
| Host, Port, URL Base | Hvor klienten lytter |
| Use SSL, Verify TLS certificate | HTTPS, og om certifikatet bliver tjekket |
| Username, Password, API Key | Loginoplysninger. En gemt hemmelighed bliver aldrig vist |
| Category | Kategori eller label, ABM sætter på sine downloads, fx `audiobooks` |
| Watch Folder, Directory | Blackhole: hvor filer skal lægges, og hvor færdige filer dukker op |
| Client Priority | Hvilken klient der vinder, når flere passer |
| Remove from Client, Also Delete Files, Remove Failed | Hvad ABM fjerner fra klienten efter import eller fejl |
| Queue Page Remove Action | Hvad det gør at fjerne en række på siden Queue: afvis kun i ABM, fjern fra klienten og behold filerne, eller fjern og slet filerne |

**Test** tjekker forbindelsen. En deaktiveret klient er ikke en usund klient. En klient, der fejler, bliver prøvet igen med stigende ventetid.

## Håndtering af færdige downloads

| Indstilling | Standard | Virkning |
|---|---|---|
| Enable | til | Importér færdige downloads automatisk |
| Redownload Failed | til | Blokér en mislykket udgivelse, og søg igen |
| Redownload Failed from Interactive Search | til | Det samme, for udgivelser, du har valgt i hånden |

Om importer hardlinker eller kopierer, styres af **Use Hardlinks instead of Copy** i [Media Management](/da/settings/media-management/). Er klientens mappe ikke den samme sti, som ABM ser, så tilføj en remote path mapping.

## Fjerne stitilknytninger (Remote path mappings)

Når klienten melder `/downloads/audiobooks`, og ABM ser det som `/data/audiobooks`, så tilføj en mapping.

| Felt | Virkning |
|---|---|
| Host | Den klientvært, mappingen gælder for |
| Remote Path | Stien, som klienten melder den |
| Local Path | Den samme mappe, som ABM ser den |

## Faldgruber

- En undermappe, der ikke kan læses, i en færdig download stopper importen af hele den download. Intet bliver fjernet fra klienten, og den bliver prøvet igen senere.
- Docker: mount downloadmappen på samme sti i begge containere, når du kan. Mappings er nødløsningen.
