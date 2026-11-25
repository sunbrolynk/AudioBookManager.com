---
title: Klienty pobierania
description: Obsługiwane klienty, obsługa ukończonych pobrań i mapowania zdalnych ścieżek.
---

**Settings > Download Clients** podłącza program, który zajmuje się pobieraniem.

## Obsługiwane klienty

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet i Blackhole (obserwowany folder). To pełna lista.

## Pola

To, które pola widać, zależy od klienta.

| Pole | Działanie |
|---|---|
| Name | Etykieta |
| Host, Port, URL Base | Gdzie nasłuchuje klient |
| Use SSL, Verify TLS certificate | HTTPS i to, czy certyfikat jest sprawdzany |
| Username, Password, API Key | Dane logowania. Zapisany sekret nigdy nie jest pokazywany |
| Category | Kategoria albo etykieta, którą ABM nadaje swoim pobraniom, na przykład `audiobooks` |
| Watch Folder, Directory | Blackhole: gdzie wrzucać pliki i gdzie pojawiają się ukończone |
| Client Priority | Który klient wygrywa, gdy pasuje kilka |
| Remove from Client, Also Delete Files, Remove Failed | Co ABM usuwa z klienta po imporcie albo błędzie |
| Queue Page Remove Action | Co robi usunięcie wiersza na stronie Queue: tylko zamyka w ABM, usuwa z klienta i zostawia pliki albo usuwa i kasuje pliki |

**Test** sprawdza połączenie. Wyłączony klient to nie to samo co niesprawny. Niedziałający klient jest ponawiany z rosnącą przerwą.

## Obsługa ukończonych pobrań

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Enable | wł. | Automatycznie importuje ukończone pobrania |
| Redownload Failed | wł. | Wrzuca nieudane wydanie na czarną listę i szuka ponownie |
| Redownload Failed from Interactive Search | wł. | To samo, dla wydań wybranych ręcznie |

Gdy ukończone pobieranie zawiera tę samą książkę więcej niż raz, w różnych formatach, ABM importuje tylko kopię, którą profil jakości książki stawia najwyżej. Przy dopasowywaniu pobierania do książki też mierzona jest tylko jedna kopia, ta, którą najwyżej stawia domyślny profil jakości. Formaty, które profil stawia na równi albo których nie ma, idą w kolejności M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA. Pozostałe kopie ABM zostawia w pobieraniu; są usuwane tylko wtedy, gdy **Also Delete Files** usuwa pobieranie po imporcie. Pojedynczy plik obok zestawu części liczy się jako druga kopia tylko wtedy, gdy ich długości się zgadzają; inaczej to części jednej książki. Okładka i inne dodatkowe pliki i tak trafiają razem z kopią, którą bierze ABM. Gdy folder pobierania zawiera też dźwięk innej książki, trafiają tylko dodatkowe pliki nazwane tak jak importowany dźwięk.

To, czy importy używają hardlinków, czy kopiują, ustawia **Use Hardlinks instead of Copy** w [Media Management](/pl/settings/media-management/). Jeśli folder klienta nie ma tej samej ścieżki, którą widzi ABM, dodaj mapowanie zdalnej ścieżki.

## Mapowania zdalnych ścieżek

Kiedy klient zgłasza `/downloads/audiobooks`, a ABM widzi to jako `/data/audiobooks`, dodaj mapowanie.

| Pole | Działanie |
|---|---|
| Host | Host klienta, którego dotyczy mapowanie |
| Remote Path | Ścieżka tak, jak zgłasza ją klient |
| Local Path | Ten sam folder tak, jak widzi go ABM |

## Pułapki

- Nieczytelny podfolder w ukończonym pobraniu całkowicie zatrzymuje import tego pobrania. Nic nie jest usuwane z klienta, a import jest ponawiany później.
- Docker: jeśli możesz, montuj folder pobrań pod tą samą ścieżką w obu kontenerach. Mapowania to plan awaryjny.
