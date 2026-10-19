---
title: Zadania
description: Praca w tle, harmonogramy i logi.
---

**System > Tasks** wypisuje wszystko, co ABM robi w tle: skanowanie biblioteki, odświeżenia, importy, wyszukiwania, pobrania, synchronizacje, kopie zapasowe. Każdy wiersz pokazuje stan (oczekuje, działa, ukończone, błąd), postęp, wynik i przycisk logu.

- Zadanie ukończone z wpisami na liście błędów pokazuje się jako **Partial**. Rozwiń je, żeby zobaczyć każdy pominięty element i powód.
- Zadanie, które ma jeszcze zaplanowaną ponowną próbę, zostaje jako oczekujące, dopóki próby się nie skończą. Widać numer próby.
- **Clear completed tasks older than 24 hours** porządkuje listę. Stare zadania są też czyszczone automatycznie (domyślnie po 30 dniach).
- Zaplanowane uruchomienia, które nic nie zrobiły, pojawiają się tutaj, ale nie w [Activity Log](/pl/system/activity-log/).

## Pułapki

- Konwersje to osobna kolejka. Zobacz [Konwersje](/pl/using/conversions/).
- Przeglądy pobrań (ponawianie oczekujących pobrań i sprawdzanie ukończonych pobrań) trafiają do kolejki tylko wtedy, gdy włączony jest co najmniej jeden klient pobierania, więc strona nie zapełnia się pustymi uruchomieniami.
