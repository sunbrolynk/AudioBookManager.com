---
title: Rozdziały
description: Porównaj osadzone rozdziały książki z Libex i je popraw.
---

:::caution[W późniejszym wydaniu]
Wszystkiego na tej stronie poza domyślnymi ustawieniami konwersji nie ma jeszcze w żadnej wydanej wersji.
:::

Strona ze szczegółami książki pokazuje rozdziały, które ma Libex, obok rozdziałów faktycznie osadzonych w twoich plikach. Libex jest punktem odniesienia. Widok odpowiada na pytanie, czy twoje pliki mają w sobie to, co według Libex powinny.

## Jak czytać porównanie

Każdy rozdział z Libex dostaje plakietkę, czyli ikonę plus słowo:

- **Matches**: osadzony rozdział zaczyna się w granicach 2 sekund, a tytuł jest taki sam, jeśli pominąć wielkość liter, akcenty i interpunkcję na końcach. "Chapter 1" i "Chapter One" to różne tytuły.
- **Differs**: tytuł się różni albo taki tytuł jest w pobliżu, ale zaczyna się dalej niż 2 sekundy.
- **Missing**: nic osadzonego nie tworzy z nim pary.
- **Extra**: osadzony rozdział, z którym nie łączy się w parę żaden rozdział z Libex.

Książki z wielu plików są układane jedna za drugą na jednej osi czasu, w kolejności nazw plików. Rozdział, który ciągnie się przez granicę pliku jako "(cont.)", jest odczytywany jako jeden rozdział. Jeśli Libex jest nieosiągalny, widzisz listę osadzonych rozdziałów i linijkę z wyjaśnieniem dlaczego. Strona nigdy nie kończy się przez to błędem.

## Złe wydanie

Czasy z Libex pasują tylko do wydania, które opisują. Jeśli długość twojego audio różni się od tej w Libex o więcej niż 15 sekund albo 0,5 procent, zależnie od tego, co większe, pojawia się ostrzeżenie, a **Update** i **Create .cue** są zablokowane. Nie da się tego obejść.

## Aktualizacja osadzonych rozdziałów (Update)

Zastępuje rozdziały w każdym pliku audio rozdziałami z Libex. Działa jako zadanie rozdziałów w [kolejce konwersji](/pl/using/conversions/), bez ponownego kodowania. Jest dostępne tylko wtedy, gdy porównanie mówi "differs" albo "no embedded chapters".

- Każdy plik jest przepisywany do pliku tymczasowego, sprawdzany, a dopiero potem podmieniany. Sprawdzenie wymaga, żeby był czytelny, nie krótszy od oryginału o więcej niż 0,5 sekundy albo 1 procent, w tym samym kodeku i miał dokładnie tyle rozdziałów, ile zażądano. Gdy sprawdzenie się nie powiedzie, zostaje oryginał.
- Jeśli zadanie zatrzyma się w połowie, pliki już przepisane zostają przepisane. Błąd mówi "N of M files already updated". Usuń przyczynę i uruchom Update jeszcze raz.
- Od razu odrzucane są przypadki, gdy: trwa inna konwersja tej książki, nie ma ASIN-u albo rozdziałów w Libex, to złe wydanie, któryś plik jest nieczytelny albo nie ma czego aktualizować.

## Tworzenie pliku .cue (Create .cue)

Zapisuje do folderu książki arkusz cue na podstawie rozdziałów z Libex, nazwany od pierwszego pliku audio. Nadpisuje istniejący plik o tej nazwie. Zobacz [Pliki sidecar](/pl/using/sidecars/).

## Pułapki

- Pliki MP3 VBR bez nagłówka długości mają długość szacowaną. Poprawne wydanie może wyglądać na przesunięte o kilka sekund.
- Przepisany plik wygląda dla Audiobookshelf na zmieniony i jest skanowany ponownie.
- Tytuły rozdziałów zawierające `=`, `;`, `#` albo backslash mogą być zapisywane źle, dopóki nie wejdzie poprawka.

## Domyślne zachowanie rozdziałów przy konwersjach

Niezależnie od powyższego: **Settings > Conversions > Chapter Handling** decyduje, co konwersja robi z rozdziałami. Zobacz [Ustawienia konwersji](/pl/settings/conversions/).
