---
title: Szybki start
description: Od świeżej instalacji do pierwszej monitorowanej książki.
---

To najkrótsza droga od działającego kontenera do książki, której ABM zaczyna szukać. Najpierw zainstaluj ABM: zobacz [Instalacja ABM](/pl/installation/).

## 1. Zaloguj się

Pierwsza wizyta otwiera kreator konfiguracji, a jego pierwszy krok tworzy twój login. Dopóki tego nie zrobisz, ABM odrzuca żądania. Kreator obejmuje też kroki 2 do 4 poniżej, a [Pierwsza konfiguracja](/pl/getting-started/first-run-setup/) opisuje każdy z jego kroków. Jak działa logowanie potem, opisano w [Bezpieczeństwo i logowanie](/pl/settings/security/).

## 2. Wybierz, jak ABM łączy się z internetem

W kreatorze to krok Network. Później znajdziesz to w **Settings > [Network](/pl/settings/network/)**. Wybierz, jak ABM łączy się z internetem: proxy, tunel WireGuard, twój własny kontener VPN albo Direct. Nic nie wychodzi, dopóki nie wybierzesz jednego.

## 3. Dodaj folder główny

Folder główny (root folder) to miejsce, w którym ABM trzyma książki. Dodasz go w **Settings > Media Management**, w sekcji **Root Folders**. Powinien to być ten sam folder, który czyta twój odtwarzacz (na przykład Audiobookshelf).

## 4. Dodaj indekser i klienta pobierania

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse albo Prowlarr. Zobacz [Indeksery](/pl/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet albo Blackhole. Zobacz [Klienty pobierania](/pl/settings/download-clients/).

Jeśli klient działa w innym kontenerze, sprawdź, czy on i ABM widzą folder pobranych plików pod tą samą ścieżką, albo dodaj mapowanie zdalnej ścieżki (remote path mapping).

## 5. Ustaw profil jakości

**Settings > Profiles** trzyma drabinkę jakości, według której ABM decyduje, co pobrać i co liczy się jako ulepszenie. Świeża instalacja nie ma żadnego, więc go utwórz. Pierwszy profil, który zrobisz, staje się domyślny, a dopracować go możesz później. Zobacz [Profile](/pl/settings/profiles/).

## 6. Podłącz Audible (opcjonalnie)

Jeśli masz książki z Audible, podłącz konto w **Settings > Audible**. Wybierz **Marketplace**, kliknij **Connect Audible Account**, a potem **I Understand, Open Amazon Login**. Zaloguj się do Amazona w nowej karcie. Pusta strona albo "Page not found", na którą potem trafisz, to normalna sprawa. Skopiuj cały adres z paska adresu do **Redirect URL**, dodaj **Display Name**, jeśli chcesz, i kliknij **Complete Login**. Twoje hasło nigdy nie jest zapisywane, a pierwsza synchronizacja biblioteki rusza od razu. Zobacz [Audible](/pl/audible/).

## 7. Zaimportuj albo dodaj książki

- Masz już kolekcję? Użyj [importu biblioteki](/pl/library-import/).
- Zaczynasz od zera? Użyj **Library > Add New** i szukaj po tytule, autorze albo serii. Zobacz [Dodawanie nowych książek](/pl/using/add-new/).

Dodana książka jest poszukiwana (wanted), dopóki nie zostanie zaimportowany jej plik. Poszukiwane książki pojawiają się w **Wanted > Missing** i są wyszukiwane automatycznie.

## 8. Patrz, jak to działa

**Activity > Queue** pokazuje, co się pobiera. **Activity > History** pokazuje, co zostało pobrane i zaimportowane. Kiedy coś pójdzie nie tak, zajrzyj do [Rozwiązywania problemów](/pl/troubleshooting/) i na stronę [Tasks](/pl/system/tasks/).
