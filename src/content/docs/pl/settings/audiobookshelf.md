---
title: Połączenie z Audiobookshelf
description: Połącz ABM ze swoim serwerem Audiobookshelf.
---

Audiobookshelf (ABS) to serwer, na którym słuchasz. Połącz ABM w **Settings > Audiobookshelf**, na komputerze i na telefonie. Podajesz adres serwera i klucz API utworzony dla jednego użytkownika ABS.

## Połączenie

- **Enable:** Pozwala ABM korzystać z serwera. Gdy zapisujesz z tą opcją włączoną, ABM najpierw sprawdza serwer i odmawia zapisu, jeśli nie przejdzie sprawdzenie na poziomie błędu. Strona pokazuje powody. Połączenie zapisane jako wyłączone nie jest sprawdzane.
- **Server address:** Gdzie odpowiada Twój serwer ABS, na przykład `http://192.168.1.20:13378`. Jeśli ABS działa na tej samej maszynie co ABM, użyj adresu LAN tej maszyny albo nazwy lub IP kontenera, gdy oba działają w Dockerze.
- **API key:** Klucz API użytkownika admin w ABS.
- **Verify TLS certificate:** Domyślnie włączone. Jeśli serwer używa certyfikatu z Twojego własnego urzędu, podaj ścieżkę do jego pakietu CA w **CA bundle path** zamiast wyłączać weryfikację. Zostaw ścieżkę pustą, aby użyć certyfikatów systemu.
- **Test:** Uruchamia sprawdzenia dla tego, co jest na ekranie, bez zapisywania czegokolwiek.
- **Disconnect:** Prosi o potwierdzenie, a potem usuwa zapisany adres i klucz.

## Jak ABM dociera do ABS

ABM zawsze łączy się z ABS bezpośrednio. Nigdy nie idzie przez VPN ani proxy wybrane w [Network](/settings/network/). Adres jest sprawdzany przed zapisem, a niebezpieczny jest odrzucany. Odrzucany jest adres wskazujący z powrotem na maszynę, na której działa ABM, adres link-local i adres metadanych chmury, tak samo jak nazwa, która się do któregoś z nich rozwiązuje. Twoje własne adresy LAN są w porządku, dlatego ABS na tej samej maszynie potrzebuje adresu LAN maszyny albo nazwy lub IP jej kontenera.

## Klucz API

Klucz jest przechowywany zaszyfrowany i nigdy więcej nie jest pokazywany. Zostaw pole puste przy zapisie lub teście, aby zachować zapisany klucz. Zapisany klucz jest wysyłany tylko pod adres, dla którego go zapisano, więc jeśli zmienisz adres, Verify TLS lub pakiet CA, wpisz klucz ponownie. Jeśli ABM nie może już odczytać zapisanego klucza (klucz szyfrowania zginął lub się zmienił), strona każe wpisać go ponownie, nawet gdy połączenie jest wyłączone.

## Co jest sprawdzane

**Wersja.** ABM wymaga ABS 2.37.0 lub nowszego i jest testowany na 2.37.2. Starszy serwer albo taki, który nie podaje wersji zrozumiałej dla ABM, kończy się błędem. Nowszy daje ostrzeżenie, bo ABM nie był na nim testowany.

**Konto.** Klucz API należy do użytkownika ABS, a ABM sprawdza tego użytkownika.

- **Błąd do czasu naprawy:** użytkownik musi być adminem lub rootem i mieć uprawnienie Update oraz dostęp do wszystkich bibliotek, wszystkich tagów i treści dla dorosłych.
- **Ostrzeżenie, zapis i tak przechodzi:** Upload jest wyłączony (ABM nie może być właścicielem okładek) albo Delete jest wyłączone (książka usunięta w ABM zostaje w ABS, dopóki tego nie włączysz).

## Status

Sekcja Status pokazuje wynik ostatniego sprawdzenia (Not connected, OK, Warning lub Error), wersję serwera, użytkownika, do którego należy klucz, kiedy ABM sprawdzał ostatnio, oraz same sprawdzenia. Nieudane sprawdzenie pokazuje swój powód, a udane są zliczane.

[System > Status](/system/status/) ma też wiersz Audiobookshelf, gdy połączenie jest włączone. Odświeża się przy zapisie i przy okresowej kontroli stanu, która działa co 6 godzin, więc to nie jest sondowanie na żywo przy każdym otwarciu strony. Zapisany klucz, którego ABM już nie może odczytać, pokazuje się jako błąd, dopóki nie wpiszesz go ponownie. Połączenie jeszcze niesprawdzone pokazuje się jako ostrzeżenie. Wyłączone połączenie milczy tam.

## Co usuwa ABM

ABM usuwa w ABS tylko rekord elementu. Nigdy nie kasuje plików na stałe.
