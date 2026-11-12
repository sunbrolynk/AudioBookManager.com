---
title: Powiadomienia
description: Dzwonek w nagłówku i panel pod nim.
---

Dzwonek w nagłówku na komputerze to miejsce, w którym ABM mówi ci, co się stało i co wymaga twojej uwagi. Kliknij go, żeby otworzyć panel powiadomień. Na telefonie nie ma jeszcze dzwonka.

## Dzwonek

- Liczba na dzwonku to ilość nieprzeczytanych powiadomień. Powyżej 99 pokazuje 99+. Gdy któreś nieprzeczytane jest błędem, liczba robi się czerwona.
- Pierścień wokół dzwonka to praca w toku. Gdy ABM wie, jak daleko doszła, pierścień wypełnia się do średniej z działających pozycji. Gdy nie wie, pierścień po prostu się kręci.
- Nowe powiadomienie powoduje krótkie mignięcie dzwonka w kolorze jego poziomu. Jeśli w systemie masz włączone ograniczenie ruchu, mignięcie jest pomijane.
- Jeśli przeglądarka straci połączenie na żywo z ABM na dłużej niż 10 sekund, dzwonek zmienia się w przekreślony dzwonek z przerywanym pierścieniem. Wraca, gdy połączenie wróci.

Dostępna nazwa dzwonka odczytuje to samo: liczbę nieprzeczytanych, ile pozycji działa i ich procent oraz czy jest offline.

## Panel

Od góry do dołu:

- **Needs attention** pojawia się tylko wtedy, gdy coś jest otwarte. To rzeczy, które zostają, dopóki nie zostaną rozwiązane, na przykład książka, której pobieranie się nie udało, albo nowa wersja ABM. Każda ma jeden przycisk: **Search again** kolejkuje wyszukiwanie tej książki, a **What's new** otwiera stronę Updates. Inne otwierają stronę, której dotyczą, albo zadanie, jeśli można je wznowić. **x** w wierszu odrzuca go.
- **Running** wymienia pracę trwającą teraz: zadania, pobierania i konwersje, z postępem i pozostałym czasem tam, gdzie są znane. Kliknij wiersz, żeby do niego przejść.
- **Recent** pokazuje najnowsze powiadomienia jako pierwsze, z liczbą nieprzeczytanych. Kliknięcie otwiera to, czego dotyczy, i oznacza je jako przeczytane. Wiersz ma też przyciski do oznaczania go jako przeczytany lub nieprzeczytany oraz do usuwania.
- **Load older** pokazuje więcej historii. Gdy nie ma niczego starszego, panel to mówi.

Gdy wszystkie trzy są puste, panel mówi, że jesteś na bieżąco.

Stopka ma **Mark all read** i link do [Activity Log](/pl/system/activity-log/). Menu obok tytułu panelu ma **Clear all**, które najpierw pyta. Usuwa wszystkie powiadomienia poza tymi, które nadal wymagają uwagi. Te zostają, dopóki ich nie rozwiążesz lub nie odrzucisz.

## Czego się nie zapisuje

Powiadomienie może pochodzić z zadania w tle, pobierania lub konwersji albo z czegoś, co zrobiłeś w przeglądarce i się nie udało. Wyjątkiem są kontrolki samego panelu. Jeśli oznaczanie jako przeczytane, usuwanie, odrzucanie, czyszczenie lub ładowanie starszych się nie powiedzie, panel pokazuje błąd obok tej kontrolki i nie dodaje o tym powiadomienia. Inaczej zepsuta skrzynka zapełniałaby skrzynkę.

## Wyniki przy kontrolce

Akcje na Library, Book Detail, Calendar, Authors i Series oraz akcje okładek pokazują wynik jako krótką linię przy użytej kontrolce. Zwykła linia sukcesu znika sama po kilku sekundach. Błąd lub ostrzeżenie zostaje do twojej następnej akcji na tej kontrolce. Błędy są też zapisywane w Powiadomieniach, więc znajdziesz je, gdy linia zniknie.

Książka, autor lub seria, które zostały zapisane, ale ich catalog fill się nie uruchomił, zapisują ostrzeżenie "Catalog fill not started". Add all, w którym część książek zawiodła, zapisuje "Some books were not added" wraz z powodami.

## Przechowywanie

Stare powiadomienia usuwa codzienne czyszczenie logów, domyślnie po **30 dniach**. Ustawisz to przez **Notifications Retention** na stronie [General](/pl/settings/general/) albo `inbox_retention_days` w [API](/pl/system/api/). 0 zachowuje je na zawsze. Powiadomienia, które nadal wymagają uwagi, nie są usuwane, dopóki ich nie rozwiążesz. Czyszczenie działa raz dziennie o godzinie czyszczenia (domyślnie 03:00) i nic nie robi, gdy **Automatic Cleanup** jest wyłączone. Notatka na dole panelu pokazuje bieżącą liczbę dni i jest ukryta, gdy przechowywanie wynosi 0.

## Czym różni się od Activity Log

Powiadomienia to to, co ci się mówi, i możesz je wyczyścić. [Activity Log](/pl/system/activity-log/) to stały zapis tego, co się stało, a czyszczenie Powiadomień go nie dotyka.
