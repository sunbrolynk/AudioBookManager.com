---
title: Profile
description: Profile jakości, profile opóźnień i profile wydań.
---

**Settings > Profiles** to jedna strona z trzema sekcjami. Każda odpowiada na inne pytanie o wydanie.

## Profile jakości

Profil jakości to drabinka formatów, od najgorszego na dole do najlepszego na górze. Szczebel to format (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) w postaci jednego pliku albo wielu plików. Szczeble można grupować, żeby miały równą rangę, a pojedynczy szczebel można wyłączyć.

| Ustawienie | Znaczenie |
|---|---|
| Upgrades Allowed | Jeśli wyłączone, ABM nie podmieni książki, kiedy już jakąś ma |
| Upgrade Until | Próg (cutoff). Gdy ta jakość zostanie osiągnięta, ABM przestaje ulepszać |
| Grab off-ladder formats | Pobiera format spoza listy, zamiast pomijać książkę |
| Default profile | Profil używany, gdy nie pasuje nic bardziej szczegółowego |

Jeden profil jest domyślny. Książka używa kolejno: własnego profilu, profilu swojej głównej serii, profilu swojego głównego autora, a na końcu domyślnego. Profilu, który jest w użyciu, nie da się usunąć.

Nowa kopia zastępuje to, co masz, tylko wtedy, gdy profil pozwala na ulepszenia, nowy szczebel jest na drabince i jest włączony, książka jest poniżej progu, a nowy szczebel ma ściśle wyższą rangę.

Jeśli znasz Sonarra: to profil jakości, w którym jakościami są formaty audio i układ plików, a nie rozdzielczość. Custom formats nie istnieją. Podobny zakres obejmują [profile wydań](#profile-wydań).

## Profile opóźnień

Profil opóźnienia wstrzymuje wydanie przed pobraniem, żeby dać czas na pojawienie się lepszego.

| Ustawienie | Znaczenie |
|---|---|
| Enable Usenet / Enable Torrent | Pozwala na pobrania z danego protokołu |
| Usenet Delay / Torrent Delay | Ile minut czekać przed pobraniem wydania z danego protokołu |
| Preferred Protocol | Który preferować, gdy oba znajdą dopasowanie |
| Bypass if Highest Quality | Pomija opóźnienie, gdy wydanie już spełnia próg profilu |
| Tags | Profil dotyczy tylko elementów z pasującym tagiem |

Profile opóźnień są pokazywane jako tabela, tak jak w Sonarrze.

## Profile wydań

Profil wydań dodaje reguły ponad jakość.

| Pole | Znaczenie |
|---|---|
| Enable Profile | Włączony albo wyłączony |
| Must Contain | Wydanie musi zawierać co najmniej jedno wyrażenie (bez rozróżniania wielkości liter) |
| Must Not Contain | Wydanie z którymkolwiek z tych wyrażeń jest odrzucane |
| Preferred | Wyrażenia, które podnoszą albo obniżają punktację wydania. Napisz `/regex/`, żeby użyć wyrażenia regularnego |
| Narration language | Ogranicza do jednego języka |
| Indexer | Dotyczy jednego indeksera albo dowolnego |
| Tags | Dotyczy tylko elementów z pasującym tagiem |

Profile wydań są pokazywane jako tabela.

## Pułapki

- Profile nigdy nie usuwają plików. Decydują, co pobrać i co liczy się jako ulepszenie.
- Tagi przy profilu opóźnienia albo wydań ograniczają go do książek, które mają któryś z tych tagów.
