---
title: FAQ
description: Krótkie odpowiedzi na pytania, które ludzie zadają najpierw.
---

## Czy ABM zastępuje Audiobookshelf?

Nie. Audiobookshelf to odtwarzacz, a ABM to bibliotekarz. Skieruj oba na ten sam folder biblioteki i niech każdy robi swoje.

## Skąd biorą się metadane?

Z [Libex](https://libexdb.com), otwartej usługi metadanych dla danych z Audible. ABM odświeża je według harmonogramu, a okładkę, którą wybrałeś sam, możesz zablokować, żeby odświeżanie jej nie ruszało.

## Potrzebuję osobnej bazy danych?

Nie. ABM trzyma wszystko w jednym pliku SQLite w `/config`. Nic więcej nie trzeba uruchamiać.

## Mogę się do niego dostać spoza swojej sieci?

Tak, od wersji 0.17.0, ale nie polecam wystawiania ABM do internetu, tak samo radzą aplikacje Servarr. Bezpieczniej wchodzić przez VPN, na przykład WireGuard albo Tailscale. Domyślnie wszystko spoza twojej sieci lokalnej musi się zalogować, a ustawienie **Authentication Required** na **Enabled** każe logować się wszystkim, łącznie z twoim LAN-em. Za nginx, Traefikiem albo Caddym ustaw `TRUSTED_PROXIES` na adres proxy. Zapisane dane logowania są szyfrowane. Zobacz [poradnik o reverse proxy](/pl/guides/reverse-proxy/) i [Konfiguracja](/pl/configuration/#reverse-proxy).

## Które klienty pobierania działają?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet i Blackhole.

## Co się stało z Readarrem?

Readarr ogarniał książki i audiobooki razem, ale już go wycofano. ABM jest tylko dla audiobooków i opiera się na projekcie, który wymyśliły aplikacje Servarr.

## Czy da się to zainstalować bez Dockera?

Jeszcze nie. Na razie jedyna droga to Docker. Natywne instalacje na Linuksa, Windowsa i macOS, a do tego Kubernetes, Unraid i Proxmox, są w planach. Zobacz [Inne sposoby instalacji](/pl/installation/#inne-sposoby-instalacji).

## Ile to kosztuje?

Nic. Jest darmowy i open source na licencji GPL-3.0. Jeśli zaoszczędzi ci wieczór, jest [Ko-fi](https://ko-fi.com/sunbrolynk).

## Mogę edytować tytuł, autorów albo opis książki?

Nie. Te dane pochodzą ze źródła metadanych i ABM nie edytuje ich ręcznie. Kontrolujesz za to okładkę (wybrana przez ciebie okładka jest zablokowana), to, kiedy idą odświeżenia, które pliki sidecar i tagi audio są zapisywane, tagi i automatyczne tagi, monitorowanie oraz profil jakości. Zobacz [Twoje metadane, twoja kontrola](/pl/metadata/control/).

## Czy ABM może zapisywać rozdziały, opisy i tagi tam, gdzie czyta je Audiobookshelf?

Zapisuje `cover.jpg`, plik `.opf`, `desc.txt` i `reader.txt`, i potrafi wpisać tagi do samego audio. Porównywanie rozdziałów z wydaną edycją i pliki `.cue` będą w następnym wydaniu. Zobacz [Pliki sidecar](/pl/using/sidecars/).

## Mogę konwertować swoje pliki?

Tak: konwertować, scalać, dzielić i dodawać rozdziały, w kolejce. Zobacz [Konwersje](/pl/using/conversions/).

## Mogę zaimportować swoją obecną kolekcję?

Tak, przez [import biblioteki](/pl/library-import/). Zobacz też [Przenoszenie biblioteki do ABM](/pl/guides/moving-a-library-in/).

## Jest układ na telefon?

Tak, poniżej 768px szerokości. Zobacz [Na telefonie](/pl/phone/).

## Czy ABM obsłuży więcej niż jedno konto Audible?

Tak. Każde konto ma własną bibliotekę. Zobacz [Audible](/pl/audible/).
