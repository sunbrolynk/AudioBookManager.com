---
title: Biblioteka
description: Książki, autorzy i serie, oraz to, jak ABM śledzi ich status.
---

Menu **Library** ma trzy listy: **Books**, **Series** i **Authors**. Trafiają do nich rzeczy z **Add New** i **Library Import**. **Audible Library** i **Conversions** mają swoje własne strony.

## Książki

Każda książka to wiersz przeglądu (Overview), plakat albo linia tabeli (przełącznik widoku jest na pasku narzędzi). Książka ma status:

- **Wanted**: monitorowana, jeszcze bez plików. ABM jej szuka.
- **Downloaded**: pliki są na dysku.
- **Missing Files**: książka została pobrana, ale jej pliki nie leżą już tam, gdzie ABM się ich spodziewa.
- **Unmonitored**: ABM jej nie rusza.

Otwórz książkę, żeby zobaczyć jej stronę ze szczegółami: pliki, metadane, historię, jakość zmierzoną przez ABM i akcje takie jak Refresh & Scan oraz okno edycji (zobacz niżej). Zobacz [Pliki sidecar](/pl/using/sidecars/).

Jeśli znasz Sonarra: książka to odcinek, seria to sezon i serial w jednym, a autor to sposób na pogrupowanie obu. Różnica jest taka, że jedna książka może należeć do kilku serii, a ABM, gdy musi wybrać, używa głównej (tej z najniższą pozycją).

## Serie

**Library > Series** pokazuje wszystkie serie z liczbą książek posiadanych, poszukiwanych i z brakującymi plikami, jako Overview albo Posters. Strona serii pokazuje cały katalog, łącznie z książkami, których nie masz. Możesz go przefiltrować: All, In Library albo Not in Library. **Add Remaining** albo **Select to Add** dodaje brakujące książki jako poszukiwane, a **Refresh Series** pobiera katalog jeszcze raz. **Monitor New Books** (All albo None) decyduje, czy książki, które wyjdą później, są dodawane jako poszukiwane. Zobacz [Śledzenie serii](/pl/using/series-tracking/).

## Autorzy

**Library > Authors** pokazuje autorów, jako Overview albo Posters. Strona autora pokazuje jego katalog pogrupowany według serii, z liczbą pobranych i wszystkich książek w każdej serii, a do tego jego profil jakości, gatunki i ocenę. **Refresh Catalog** pobiera go jeszcze raz, a **Search Author** szuka jego poszukiwanych książek. **Monitor New Books** działa tak samo jak przy serii, a autor zaczyna od None.

Usunięcie serii albo autora jest blokowane, dopóki mają jeszcze książki w bibliotece. Najpierw usuń książki.

## Dziedziczenie profilu jakości

Profil jakości książki bierze się kolejno z: jej własnego nadpisania, jej głównej serii, jej głównego autora, a na końcu z profilu domyślnego. Zobacz [Profile](/pl/settings/profiles/).

## Okno edycji

Okno edycji książki zmienia własne ustawienia ABM dla niej, a nie jej metadane:

- **Monitored**
- **Quality Profile** (No Change przy edycji kilku naraz)
- **Path** dla jednej książki (z przyciskiem do ponownego wyliczenia) albo **Root Folder** dla zaznaczenia
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt i OPF (pole wyboru ma etykietę "metadata.opf"; plik dostaje nazwę od pierwszego pliku audio książki, na przykład `Dune.opf`, albo `title.opf`, gdy nie ma audio)
- **Write to Audio Files**: zapisz tagi metadanych

To samo okno otwiera się dla serii i autorów i działa na każdą z ich książek. Opcje zapisu wykonują się przy zapisywaniu.

## Tagi

Książki, autorzy i serie mogą mieć tagi. Tagi sterują indekserami, powiadomieniami, listami importu i profilami oraz filtrują kanał kalendarza. Zobacz [Tagi](/pl/settings/tags/).

## Zaznaczanie

Zaznacz wiersze, żeby działać na kilku naraz: monitorowanie, wyszukiwanie, tagowanie, zmiana nazw, usuwanie. Na telefonie zobacz [Na telefonie](/pl/phone/).
