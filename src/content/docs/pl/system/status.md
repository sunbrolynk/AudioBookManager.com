---
title: Stan
description: Kontrole stanu i podgląd tego, co robi ABM.
---

**System > Status** uruchamia kontrole stanu i wypisuje wszystko, co jest nie tak: niedziałające klienty pobierania i indeksery, problemy z folderami głównymi i problemy z połączeniem wychodzącym. Pokazuje też wykorzystanie puli połączeń z bazą danych. Kiedy wszystko jest w porządku, mówi "All systems healthy".

Kontrole stanu działają też co 6 godzin w tle. Connect może powiadamiać przy **On Health Issue** i **On Health Restored**. Zobacz [Connect](/pl/settings/connect/).

Jeśli znasz Sonarra: to ten sam pomysł co System > Status plus Health na jednej stronie.

## Pułapki

- Wyłączony klient pobierania nie jest traktowany jako niesprawny.
- Konto Audible, które wymaga ponownego zalogowania, pojawia się tutaj, a także na stronie ustawień Audible.
