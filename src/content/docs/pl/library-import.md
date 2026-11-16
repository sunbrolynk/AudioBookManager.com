---
title: Import biblioteki
description: Wprowadź istniejącą kolekcję do ABM przez Import Workbench.
---

Import biblioteki skanuje folder z audiobookami, dopasowuje każdy folder do metadanych i dodaje książki do twojej biblioteki. **Library > Library Import** otwiera "Import audiobooks you already have", gdzie wybierasz folder do zeskanowania. Kiedy skan ruszy, ABM przechodzi na stronę dopasowań z nagłówkiem **Match Audiobooks**, gdzie sprawdzasz dopasowania i dodajesz książki.

## Jak to przebiega

1. Zeskanuj folder. Każdy folder z audio staje się wierszem.
2. Sprawdź dopasowania. Popraw te, które tego wymagają.
3. Zaznacz wiersze, które chcesz, a potem dodaj je do biblioteki albo usuń.

Każda opcja to tylko opcjonalne nadpisanie domyślnego ustawienia z Media Management.

## Kiedy dopasowanie jest przyjmowane

Skan przyjmuje dopasowanie tylko wtedy, gdy pliki je potwierdzają:

- ASIN z własnych tagów plików znajduje książkę, albo
- czas trwania książki różni się od plików najwyżej o trzy minuty, a jej pozycja w serii albo tytuł zgadza się z nimi.

Autor albo pozycja w serii sprzeczna z plikami wyklucza książkę. Gdy pliki pasują równie dobrze do dwóch różnych książek albo nagrań, żadne nie zostaje przyjęte.

Długość plików liczy się tylko wtedy, gdy dało się odczytać każdy plik książki. Jeśli któregoś nie da się zmierzyć, wiersz nie ma długości: dopasowanie może wtedy potwierdzić tylko jego ASIN, a w przeciwnym razie książka czeka w **Needs a look**.

Na podstawie długości przyjmowane jest tylko wydanie angielskie albo takie, którego wpis nie podaje języka. Wydanie w innym języku jest przyjmowane tylko wtedy, gdy znajdzie je własny ASIN plików. Książka z odpowiedzią z [pamięci lokalnej](/pl/settings/metadata/) zamiast z wyszukiwania na żywo nigdy nie jest przyjmowana bez ciebie.

Gdy jedno z wyszukiwań wiersza się nie uda, przyjmowane jest tylko dopasowanie po ASIN. Książka znaleziona tylko przez wyszukanie autora jest proponowana tylko wtedy, gdy jej długość pasuje do plików, więc książka bez wpisu pokazuje **Unmatched**, zamiast proponować inną książkę tego autora.

Każde inne dopasowanie nadal jest proponowane, ale wiersz liczy się pod **Needs a look**, startuje bez zaznaczenia, a **Select All** go pomija, dopóki nie potwierdzisz tego dopasowania albo nie wybierzesz innego. Przyjęte dopasowanie do książki, którą masz już w bibliotece, liczy się pod **In library**. Wiersz **Needs a look**, którego propozycją jest książka z biblioteki, zadaje pytanie o bibliotekę dopiero wtedy, gdy potwierdzisz to dopasowanie. Do tego czasu, jeśli go zaznaczysz, blokuje Add jako wiersz, który wciąż potrzebuje decyzji.

Książka w kilku luźnych plikach, które dzielą folder z innymi książkami, na przykład folder autora albo folder, który skanujesz, to jeden wiersz ze wszystkimi częściami. Pliki, które różnią się numerem książki albo tomu, zostają osobnymi wierszami. Części są grupowane według formatu: plik z całą książką obok nich to osobny wiersz, dwa formaty jednej książki we wspólnym folderze to osobne wiersze, a bitrate w nazwie pliku, np. `128kbps`, nie jest numerem części.

Tag zapisany jako `Title: Series, Book 2` jest odczytywany jako tytuł, seria i pozycja w serii.

Pozycja w serii zapisana jako zakres, np. `1-3`, zgadza się z każdą pozycją w jego obrębie. Dwie liczby zapisane inaczej, np. `1, 3`, liczą się jako brak pozycji.

Tag tytułu, albumu, serii, części serii, wykonawcy, wykonawcy albumu, kompozytora lub lektora dłuższy niż 500 znaków jest ignorowany.

**Recent Import Sessions** na stronie Library Import pokazuje przy każdym skanie, ile wierszy ma dopasowanie, licząc książki, które już są w bibliotece, i ile czeka, licząc wiersze, w których musisz jeszcze wybrać dopasowanie.

## Jak czytać listę

- Podsumowanie pokazuje, ile folderów znaleziono i ile jest gotowych. Górny pasek ma **Sort** (Folder name, Status, Title, Author, Series, Files) i **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Każdy filtr pokazuje swoją liczbę, a liczby zgadzają się z podsumowaniem. Dopasowanie, które potwierdzisz, nazywa się Ready. Sortowanie i filtr są zapamiętywane na tym urządzeniu. Nie są trzymane w adresie strony, więc link z `?sort=` albo `?filter=` ich nie przenosi.
- Każdy wiersz pokazuje okładkę, tytuł, autora i serię oraz to, jak pewne jest dopasowanie, w procentach, na przykład "95% match". W szczegółach folderu są **Find a match** albo **Change match**, żeby szukać ręcznie.
- Kiedy pliki nie mają ASIN-u ani czasu trwania, który potwierdziłby wydanie, szczegóły folderu to pokazują.
- **Rescan** wyłapuje foldery dodane od czasu skanowania i zachowuje twoje wybory.

ASIN znaleziony w komentarzu albo opisie to tylko podpowiedź. Liczy się jako dopasowanie dopiero wtedy, gdy tytuł też zgadza się z nazwą folderu. Sam w sobie liczy się tylko dedykowany tag ASIN.

## Łączenie, rozdzielanie i dodawanie

- Połącz wiersze, które są jedną książką rozbitą na kilka folderów. Rozdzielisz je z powrotem w szczegółach folderu. Dopasowanie połączonego wiersza jest tylko propozycją: liczy się w **Needs a look** i nie jest zaznaczone, dopóki go nie potwierdzisz albo nie wybierzesz innego. Jego długość jest sumą części tylko wtedy, gdy każda część ją ma, a ASIN zostaje tylko wtedy, gdy wszystkie części podają ten sam. Wyszukiwanie, które kończy się po połączeniu albo rozdzieleniu jego wiersza, też jest tylko propozycją.
- **Confirm match** w szczegółach wiersza zaznacza wiersz **Needs a look**, a **Undo confirmation** cofa też to zaznaczenie.
- Add jest zablokowany, a powód widać nad przyciskiem, na przykład "Select at least one folder" albo "2 selected rows still need a decision".
- Wszystko, co usunęłoby albo zastąpiło pliki, najpierw pyta.
- Wyjście ze strony zapisuje twoje oczekujące zmiany.

## Kopiowanie, przenoszenie albo hardlink

**Settings > Media Management > Importing** ustawia domyślny tryb importu biblioteki: kopiowanie (domyślnie), przenoszenie albo hardlink. Przy każdym imporcie możesz wybrać inny.

Książka podlinkowana hardlinkiem nie zajmuje dodatkowego miejsca na dysku, a oryginał zostaje tam, gdzie był. Hardlink wymaga, żeby domyślny folder główny go obsługiwał i żeby najpierw został sprawdzony. W przeciwnym razie opcja jest wyszarzona i widać powód. Plik, którego nie da się podlinkować, na przykład leżący na innym dysku, jest kopiowany, nigdy przenoszony. Zakończony import mówi, ile plików skopiowano.

## Dodatkowe pliki

**Import Extra Files** (domyślnie włączone) zabiera ze sobą okładkę książki, notatki i inne pliki niebędące audio. Działa tak samo przy imporcie biblioteki, Manual Import i ukończonych pobraniach. Z **Show Advanced** opcja **Preferred Cover** wybiera dopasowaną okładkę z Audible (domyślnie) albo tę z folderu.

## Długie wartości

Lektor, tytuł albo ścieżka ucięte wielokropkiem otwierają się w całości, gdy je stukniesz albo klikniesz. Stuknij albo kliknij jeszcze raz, żeby zamknąć. Myszą wystarczy też najechać, żeby zobaczyć całą wartość. Z klawiatury ustaw na nich fokus i naciśnij Enter albo Spację.

## Odpowiedzi inne niż import

Na wiersz możesz też odpowiedzieć **keep library** (odrzuć kopię książki, którą biblioteka już ma) albo **remove empty** (odrzuć folder bez audio, w którym wciąż leżą grafiki i pliki sidecar). Czyszczą one tylko to, co należy do danego wiersza. Wszystko, co zawiera audio, zostaje odrzucone. Pliki trafiają do kosza, jeśli jest ustawiony, a log zadania wypisuje każdą usuniętą ścieżkę. Decyzja **keep library** dotyczy tylko tej książki z biblioteki, o którą chodziło: jeśli wybierzesz dopasowanie, które pyta o coś innego albo o inną książkę z biblioteki, wiersz zapyta ponownie. Import sprawdza to jeszcze raz przy uruchomieniu i nic nie jest usuwane, jeśli kopia w bibliotece nie ma już plików ("Your library has no copy of this book to keep") albo jeśli folder zawiera pliki książki z twojej biblioteki ("This folder holds files of a book in your library").

## Okładka i dodatkowe pliki dla każdego folderu

Inspektor pokazuje własną okładkę folderu obok okładki dopasowanego wydania, każdą z jej rozmiarem w pikselach. Jedno kliknięcie wybiera tę drugą. Pod spodem **Extra files** wypisuje każdy inny plik pod nazwą przełącznika z Media Management, za którym podąża. Kropka oznacza wybór, który różni się od ustawień, a **Apply this cover and these file choices to the N other selected** kopiuje wybory z jednego folderu na pozostałe zaznaczone. Wiersz, który dodaje pliki do książki już obecnej w bibliotece, nie ma tego wyboru.

Zobacz też [Przenoszenie biblioteki do ABM](/pl/guides/moving-a-library-in/) i [Media Management](/pl/settings/media-management/).
