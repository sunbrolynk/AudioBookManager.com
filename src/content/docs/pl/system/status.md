---
title: Stan
description: Kontrole stanu i podgląd tego, co robi ABM.
---

**System > Status** uruchamia kontrole stanu i wypisuje wszystko, co jest nie tak: klienty pobierania i indeksatory, które zawodzą, problemy z folderami głównymi oraz nieosiągalnego Libexa. Pokazuje też zużycie puli połączeń z bazą danych. Gdy wszystko gra, pokazuje "All systems healthy".

Kontrole stanu działają też co 6 godzin w tle. Connect może powiadamiać przy **On Health Issue** i **On Health Restored**. Zobacz [Connect](/pl/settings/connect/).

Jeśli znasz Sonarra: to ten sam pomysł co System > Status plus Health na jednej stronie.

## Pułapki

- Wyłączony klient pobierania nie jest traktowany jako niesprawny.
- Konto Audible, które wymaga ponownego zalogowania, pojawia się tutaj, a także na stronie ustawień Audible.
