---
title: Rozwiązywanie problemów
description: Poprawki problemów, na które najpewniej trafisz.
---

## Pliki po przerwanym imporcie (.abmstage)

Import najpierw odkłada każdy plik obok jego docelowej nazwy, a potem podmienia je wszystkie naraz, kiedy już dotrą. Jeśli coś się nie uda, ABM odkłada z powrotem to, co przeniósł. Jeśli nie da rady odłożyć jakiejś części, ta część zostaje w folderze książki jako ukryty plik z końcówką `.abmstage`. To może być jedyna kopia, więc ABM go zostawia, a komunikat błędu podaje jego nazwę.

Dopóki w folderze książki jest jakikolwiek plik `.abmstage`, importy do tego folderu zatrzymują się z komunikatem:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Jak to odzyskać:

1. Znajdź plik `.abmstage` podany w błędzie.
2. Przenieś go z powrotem do pobrania albo do folderu książki pod jego prawdziwą nazwą. Albo go usuń, jeśli go nie potrzebujesz.
3. Ponów import.

## Za reverse proxy każdy musi się logować

Bez `TRUSTED_PROXIES` żądanie z nagłówkami przekierowania nigdy nie jest traktowane jako lokalne, więc musi się zalogować. Tak ma być.

1. Ustaw `TRUSTED_PROXIES` na adres swojego proxy, na przykład `172.20.0.5`. Proxy na tym samym hoście potrzebuje `127.0.0.1`.
2. Ustaw proxy tak, żeby wysyłało `X-Forwarded-For` albo `X-Real-IP`. nginx proxy manager, Traefik i Caddy robią to domyślnie.
3. Zrestartuj ABM.

Log aplikacji mówi, o który przypadek chodzi:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": dodaj proxy do `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": skonfiguruj proxy, żeby wysyłało `X-Forwarded-For` albo `X-Real-IP`.

Odwrotny przypadek: proxy, które nie wysyła żadnych nagłówków przekierowania, wygląda jak lokalny klient, więc wszystko, co przez nie przechodzi, pomija logowanie. Ustaw Authentication Required na Enabled.

## Przeglądarka dostaje odmowę przy zmianach

Upewnij się, że proxy przekazuje oryginalny nagłówek `Host` albo wysyła `X-Forwarded-Host`. Zobacz [Konfiguracja](/pl/configuration/#reverse-proxy).

## Za proxy znikają okładki albo strona dziwnie się zachowuje

Nagłówek Content-Security-Policy dopuszcza tylko okładki po HTTPS. Sprawdź w konsoli przeglądarki, czy są naruszenia. Serwuj okładki po HTTPS albo ustaw `SECURITY_HEADERS_CSP_ENABLED=false`.

## Duże żądanie zwraca 413

Podnieś `MAX_REQUEST_BODY_BYTES`. Reverse proxy też może mieć niższy limit i samo odpowiadać 413.

## Źródło metadanych jest niedostępne

Dodawanie, wyszukiwanie, odświeżanie i Discover potrzebują źródła metadanych. Komunikat podaje jego nazwę, na przykład "The metadata source is unavailable". Przyczyny: źródło leży albo ogranicza liczbę zapytań, albo twoje połączenie wychodzące je blokuje.

1. Sprawdź **Settings > General > Proxy & VPN** i czy trasa działa.
2. Spróbuj ponownie za minutę. Źródło, które ogranicza zapytania, odpowiada 503 z podpowiedzią, żeby ponowić za 30 sekund.
3. W międzyczasie nadal możesz dodawać i importować książki ręcznie.

Zadania w tle, które trafią na awarię, kończą się błędem z podaniem powodu i wysyłają jedno powiadomienie na awarię.

## Odświeżenie zmieniło szczegóły książki

Tytuł, opis, autorzy, lektorzy i podobne pola pochodzą ze źródła metadanych, a odświeżenie stosuje to, co ono teraz podaje. ABM nie ma jak edytować ich ręcznie. Kontrolujesz za to okładkę (można ją zablokować), które pliki są zapisywane, tagi oraz to, czy odświeżenia zapisują pliki sidecar i tagi. Zobacz [Twoje metadane, twoja kontrola](/pl/metadata/control/).

## Książka pokazuje Missing Files

Książka została pobrana, ale jej pliki nie leżą tam, gdzie ABM szuka. Sprawdź montowanie i uprawnienia, a potem uruchom **Refresh & Scan**. Skanowanie nie rusza książki, gdy nie da się odczytać jej folderu, a zadanie pokazuje się jako Partial z podanym powodem.

## Importy zatrzymują się z "Files left by an interrupted import"

Zobacz sekcję o `.abmstage` powyżej.

## Pobrania się kończą, ale nigdy nie importują

Dodaj mapowanie zdalnej ścieżki albo ustaw ABM i klienta tak, żeby widzieli folder pod tą samą ścieżką. Nieczytelny podfolder blokuje całe pobranie, dopóki nie poprawisz jego uprawnień. Zobacz [Klienty pobierania](/pl/settings/download-clients/).

## Docker nie może dosięgnąć źródła metadanych ani indekserów

Zanim cokolwiek innego, sprawdź DNS i ustawienie połączenia wychodzącego. W Dockerze połączenie bezpośrednie działa tylko wtedy, gdy kontener ma dostęp do internetu.
