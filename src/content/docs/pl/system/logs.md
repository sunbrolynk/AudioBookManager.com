---
title: Logi
description: Pliki logów, poziomy, przechowywanie i rotacja.
---

**System > Log Files** wypisuje tekstowe logi ABM. Otwórz któryś, żeby go przeczytać, pobrać albo usunąć, albo wyczyść wszystkie naraz. Logi pojawiają się w miarę, jak wykonują się operacje.

- Zadania i konwersje piszą własne logi. Strona Tasks linkuje do każdego z nich.
- Główny log to `app.log`. Rotuje przy starcie, co najmniej co godzinę i po osiągnięciu 10 MiB. Stare pliki są trzymane przez **Log File Retention** (domyślnie 30 dni).
- Osobny log bezpieczeństwa ma jedną linię na każdą próbę logowania, dla fail2ban i podobnych narzędzi.
- Poziomy ustawisz w **Settings > General > Logging**.

## Jak czytać problem

Zacznij od przycisku logu przy nieudanym zadaniu. Pokazuje operację od linii startowej do bloku końcowego. Sekrety są z tekstu wycinane, ale i tak sprawdź log, zanim wkleisz go publicznie.

## Pułapki

- SQL Logging i poziom Debug są bardzo gadatliwe. Wyłącz je, kiedy skończysz.
- Usunięcie logu zostawia wpisy aktywności, które do niego linkują. Pokazują wtedy "Log no longer kept".
