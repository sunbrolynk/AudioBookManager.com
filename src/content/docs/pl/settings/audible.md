---
title: Ustawienia Audible
description: Konta, harmonogram synchronizacji, pobieranie i diagnostyka.
---

**Settings > Audible** to miejsce, w którym podłączasz konta i dostrajasz synchronizację oraz pobieranie. Jak działa sama funkcja, opisuje strona [Audible](/pl/audible/).

## Konta

Podłączenie konta wymaga **Marketplace**, **Display Name** i **Redirect URL**, na który Amazon odsyła cię po zalogowaniu. Każde konto ma własną bibliotekę. Jeśli konto wymaga ponownego logowania, zaloguj się na tym samym koncie, zamiast je usuwać. Usunięcie kasuje jego bibliotekę i usuwa jego urządzenie z Audible.

## Harmonogram

| Ustawienie | Działanie |
|---|---|
| Auto Sync | Synchronizuje bibliotekę według harmonogramu |
| Sync on Account Add | Synchronizuje od razu po podłączeniu konta |
| Frequency | Codziennie, co tydzień albo co miesiąc. Co tydzień dodaje Day of Week. Co miesiąc dodaje Day of Month (1-28). |
| Time | Godzina i minuta |
| Use CRON Expression | Własne wyrażenie cron zastępuje opcje powyżej |

## Ustawienia pobierania (Download Settings)

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Mirror Audible library to ABM | wł. | Każda synchronizacja dodaje książki z Audible, których jeszcze nie ma w ABM, i pobiera te bez plików, do 25 na synchronizację. Po włączeniu widzisz, ile książek doda i pobierze następna synchronizacja. Zobacz [odzwierciedlanie biblioteki Audible w ABM](/pl/audible/#odzwierciedlanie-biblioteki-audible-w-abm-mirror) |
| Concurrent Downloads | 2 | Od 1 do 5. Więcej to szybciej, ale można wpaść na limity zapytań Audible. |
| Preferred Quality | High | High lub Normal |
| Delete Encrypted Files | wł. | Usuwa zaszyfrowany plik AAXC po odszyfrowaniu do M4B |
| Temp Download Path | puste | Puste oznacza systemowy folder tymczasowy |

Nieudane pobrania są same ponawiane kilka razy, z coraz dłuższą przerwą, a awaria trwająca dłużej wrzuca zadanie z powrotem do kolejki na maksymalnie sześć godzin. Odmowa licencji, książka, której nie masz, albo błąd odszyfrowania kończą się błędem od razu.

## Diagnostyka połączenia (Connection Diagnostics)

Wybierz konto i uruchom diagnostykę. Sprawdza FFmpeg, dane logowania, połączenie z API i możliwość pobierania, i pokazuje twój wychodzący adres IP tak, jak widzi go Audible.
