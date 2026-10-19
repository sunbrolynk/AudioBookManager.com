---
title: Szybki start
description: Od świeżej instalacji do pierwszej monitorowanej książki.
---

To najkrótsza droga od działającego kontenera do książki, której ABM zaczyna szukać. Najpierw zainstaluj ABM: zobacz [Instalacja ABM](/pl/installation/).

## 1. Zaloguj się

Przy pierwszej wizycie ABM przeprowadzi cię przez założenie loginu. Dopóki tego nie zrobisz, ABM odrzuca żądania. Jak działa logowanie później, opisuje strona [Bezpieczeństwo i logowanie](/pl/settings/security/).

## 2. Wybierz, jak ABM łączy się z internetem

W **Settings > General** jest sekcja **Proxy & VPN**. Jeśli chcesz korzystać z wbudowanego źródła metadanych, najpierw musisz wybrać połączenie. Zobacz [Wybór źródła metadanych](/pl/metadata/choosing-a-source/).

## 3. Dodaj folder główny

Folder główny (root folder) to miejsce, w którym ABM trzyma książki. Dodasz go w **Settings > Media Management**, w sekcji **Root Folders**. Powinien to być ten sam folder, który czyta twój odtwarzacz (na przykład Audiobookshelf).

## 4. Dodaj indekser i klienta pobierania

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse albo Prowlarr. Zobacz [Indeksery](/pl/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet albo Blackhole. Zobacz [Klienty pobierania](/pl/settings/download-clients/).

Jeśli klient działa w innym kontenerze, sprawdź, czy on i ABM widzą folder pobranych plików pod tą samą ścieżką, albo dodaj mapowanie zdalnej ścieżki (remote path mapping).

## 5. Ustaw profil jakości

**Settings > Profiles** trzyma drabinkę jakości, według której ABM decyduje, co pobrać i co liczy się jako ulepszenie. Jeden profil jest domyślny. Zacznij od niego, a dopracujesz go później. Zobacz [Profile](/pl/settings/profiles/).

## 6. Zaimportuj albo dodaj książki

- Masz już kolekcję? Użyj [importu biblioteki](/pl/library-import/).
- Zaczynasz od zera? Użyj **Library > Add New** i szukaj po tytule, autorze albo serii. Zobacz [Dodawanie nowych książek](/pl/using/add-new/).

Dodana książka jest poszukiwana (wanted), dopóki nie zostanie zaimportowany jej plik. Poszukiwane książki pojawiają się w **Wanted > Missing** i są wyszukiwane automatycznie.

## 7. Patrz, jak to działa

**Activity > Queue** pokazuje, co się pobiera. **Activity > History** pokazuje, co zostało pobrane i zaimportowane. Kiedy coś pójdzie nie tak, zajrzyj do [Rozwiązywania problemów](/pl/troubleshooting/) i na stronę [Tasks](/pl/system/tasks/).
