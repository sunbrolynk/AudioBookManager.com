---
title: Połączenia
description: Powiadomienia, serwery multimediów i własne skrypty.
---

**Settings > Connect** wysyła zdarzenia w inne miejsca. Nazywa się Connect, tak jak w Sonarrze.

## Agenci

**Agenci powiadomień**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook i Apprise. **Serwery multimediów**: Jellyfin i Emby. **Inne**: Custom Script. Audiobookshelf nie jest agentem Connect.

## Zdarzenia

Każde połączenie wybiera, które zdarzenia je wyzwalają.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Dla każdego połączenia

| Pole | Działanie |
|---|---|
| Name, Enable | Etykieta i włączenie/wyłączenie |
| Include covers | Dołącza okładkę książki, jeśli agent to obsługuje |
| Tags | Wyzwala tylko dla elementów z pasującym tagiem |
| Conditions | Reguły łączone przez AND na polach takich jak autor albo rozmiar. Źle zbudowany warunek przepuszcza, zamiast wyciszać alert |
| Priority | Tam, gdzie agent to obsługuje |

**Test** wysyła wiadomość testową. **Test All** testuje każde połączenie.

## Własne wiadomości

Własna wiadomość zmienia tekst dla danego zdarzenia. Wybierz **Format**, **Cover** (Auto używa okładki książki, None albo Custom URL), napisz **Title** i treść, i kliknij zmienną, żeby ją wstawić. Domyślny szablon każdego zdarzenia to punkt wyjścia. Podgląd pokazuje wynik, a test możesz wysłać przez wybrane połączenie.

## Pułapki

- Sekrety takie jak tokeny są przechowywane zaszyfrowane, przy edycji są puste i zostają zachowane, jeśli zostawisz je puste. Zmiana miejsca docelowego wymaga ponownego ich wpisania.
- Alert o nieudanym zadaniu przez awarię metadanych idzie raz na awarię, a nie raz na każdy błąd, a zaplanowane uruchomienie nigdy go nie wysyła.
- Nagłówki webhooka to obiekt JSON i są przechowywane jako sekret.
