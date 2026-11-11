---
title: Połączenie z Audiobookshelf
description: Połącz ABM ze swoim serwerem Audiobookshelf.
---

:::caution[Będzie w późniejszym wydaniu]
Strony ustawień dla tego jeszcze nie ma w żadnej wydanej wersji. Połączenie można już zapisać, przetestować i usunąć przez API, ale nic innego w ABM jeszcze go nie używa.
:::

Audiobookshelf (ABS) to serwer, na którym słuchasz. ABM łączy się z nim przez adres URL serwera i klucz API utworzony dla jednego użytkownika ABS.

## Wersja

ABM potrzebuje ABS 2.37.0 lub nowszego i jest testowany na 2.37.2. Starszy serwer zostanie odrzucony. Nowszy dostaje ostrzeżenie, bo ABM nie był na nim testowany.

## Konto

Klucz API należy do użytkownika ABS. ABM sprawdza tego użytkownika przy zapisie i teście.

- **Odrzucone, dopóki tego nie poprawisz:** użytkownik musi być adminem lub rootem i mieć uprawnienie Update oraz dostęp do wszystkich bibliotek, wszystkich tagów i treści dla dorosłych.
- **Ostrzeżenie, ale zapis się uda:** Upload jest wyłączony (ABM nie może zarządzać okładkami) albo Delete jest wyłączony (książka usunięta w ABM zostaje w ABS, dopóki tego nie włączysz).

## Jak ABM łączy się z ABS

ABM zawsze łączy się z ABS bezpośrednio. Nigdy nie idzie przez VPN ani proxy wybrane w [Network](/settings/network/). Adres URL serwera jest sprawdzany przed zapisem, a niebezpieczny zostanie odrzucony.

## Klucz API

Klucz jest przechowywany w postaci zaszyfrowanej i nigdy więcej się nie pokazuje. Zostaw pole puste przy zapisie lub teście, żeby zachować zapisany klucz. Zapisany klucz trafia tylko pod adres, dla którego go zapisano, więc po zmianie adresu URL, ustawienia TLS lub pakietu CA wpisz klucz jeszcze raz.

## Weryfikuj TLS

Certyfikaty są domyślnie weryfikowane. Jeśli serwer używa certyfikatu z twojego własnego urzędu, podaj ścieżkę do jego pakietu CA zamiast wyłączać weryfikację.

## Test i Disconnect

**Test** sprawdza serwer bez zapisywania: wersję, uprawnienia użytkownika i jego biblioteki. Zapis włączonego połączenia najpierw robi te same sprawdzenia i zostaje odrzucony, jeśli któreś sprawdzenie błędu się nie powiedzie. Połączenie zapisane jako wyłączone nie jest sprawdzane. **Disconnect** usuwa zapisane połączenie i jego klucz.

## System Status

Gdy połączenie jest włączone, [System > Status](/system/status/) ma wiersz AudioBookShelf z wynikiem ostatniego sprawdzenia. Odświeża się przy zapisie i przy okresowej kontroli stanu, która działa co 6 godzin, więc to nie jest sprawdzenie na żywo przy każdym otwarciu strony.

## Co usuwa ABM

ABM usuwa w ABS tylko rekord pozycji. Nigdy nie kasuje plików na stałe.
