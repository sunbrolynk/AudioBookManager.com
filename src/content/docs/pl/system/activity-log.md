---
title: Dziennik aktywności i zdarzenia
description: Zapis tego, co się wydarzyło, i czym różni się od logów.
---

ABM prowadzi trzy rodzaje zapisów.

| Gdzie | Co to jest |
|---|---|
| **System > Events** i **System > Activity Log** | Dziennik aktywności: lista w bazie danych rzeczy, które się wydarzyły. Events to widok filtrowany według ważności. Activity Log (z tytułem Activity History) filtruje według kategorii, przeszukuje treść komunikatu i pokazuje stan przed i po |
| **System > Log Files** | Tekstowe pliki logów z pełnymi szczegółami. Zobacz [Logi](/pl/system/logs/) |
| **Activity > History** | Tylko historia pobrań. Zobacz [Aktywność](/pl/using/activity/) |

## Co jest zapisywane

Ukończone zadania w tle (po jednym wierszu podsumowania), ręczne zmiany klientów, indekserów, profili, tagów, powiadomień, folderów głównych i tak dalej, pobrania (kto je uruchomił), konwersje, nieudane pobrania z Audible, kopie zapasowe, logowania i nieudane logowania oraz krok startowy, który się nie powiódł.

Kategorie: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security i System.

## Prywatność

Wpisy nigdy nie zawierają adresów URL, hostów, nazw użytkowników, haseł, kluczy, tokenów ani surowego tekstu błędu z klienta czy usługi. Obiekty są nazywane tak, jak je nazwałeś. Zapisy ustawień wypisują, które ustawienia się zmieniły, ale nie ich wartości. Logowania zapisują tylko adres IP. Nieudane logowania z jednego adresu w ciągu 15 minut zwijają się w jeden wiersz z liczbą prób.

## Cisza z założenia

Zaplanowane uruchomienie, które nic nie robiło, niczego nie zapisuje. Powtórka tego samego błędu niczego nie zapisuje, ale powrót do normy już tak. Ręczne uruchomienie jest zawsze zapisywane.

## Przechowywanie

**Activity Log Retention** w General domyślnie usuwa wpisy po 90 dniach. 0 zachowuje je na zawsze. Pliki logów mają własny okres przechowywania (30 dni), więc link z wpisu do logu może przeżyć sam log.

## Podgląd logu (View log)

:::caution[W następnym wydaniu]
Linków View log przy wpisach nie ma jeszcze w żadnej wydanej wersji.
:::

Wpisy linkują do logu, z którego pochodzą, i otwierają go na tej linii. Jeśli logu już nie ma, wpis mówi "Log no longer kept".
