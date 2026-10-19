---
title: Import biblioteki
description: Wprowadź istniejącą kolekcję do ABM przez Import Workbench.
---

Import biblioteki skanuje folder z audiobookami, dopasowuje każdy folder do metadanych i dodaje książki do twojej biblioteki. Strona nazywa się **Match Audiobooks**.

## Jak to przebiega

1. Zeskanuj folder. Każdy folder z audio staje się wierszem.
2. Sprawdź dopasowania. Popraw te, które tego wymagają.
3. Zaznacz wiersze i dodaj je do biblioteki.

Każda opcja to tylko opcjonalne nadpisanie domyślnego ustawienia z Media Management. Zwykłe skanowanie i dodanie nigdy nie potrzebuje więcej niż dwóch kliknięć.

## Jak czytać listę

- Podsumowanie pokazuje, ile folderów znaleziono i ile się dopasowało. Listę możesz filtrować: All, Matched, Needs attention, Unmatched, In library albo Failed lookup. Filtr jest zapisywany w adresie strony.
- Każdy wiersz pokazuje okładkę, tytuł, autora i serię oraz to, jak pewne jest dopasowanie, w procentach, na przykład "95% match". W szczegółach folderu są **Find a match** albo **Change match**, żeby szukać ręcznie.
- Kiedy pliki nie mają ASIN-u ani czasu trwania, który potwierdziłby wydanie, szczegóły folderu to pokazują.
- **Rescan** wyłapuje foldery dodane od czasu skanowania i zachowuje twoje wybory.

ASIN znaleziony w komentarzu albo opisie to tylko podpowiedź. Liczy się jako dopasowanie dopiero wtedy, gdy tytuł też zgadza się z nazwą folderu. Sam w sobie liczy się tylko dedykowany tag ASIN.

## Łączenie, rozdzielanie i dodawanie

- Połącz wiersze, które są jedną książką rozbitą na kilka folderów. Rozdzielisz je z powrotem w szczegółach folderu.
- Add jest zablokowany, a powód widać nad przyciskiem, na przykład "Select at least one folder" albo "2 selected rows still need a decision".
- Wszystko, co usunęłoby albo zastąpiło pliki, najpierw pyta.
- Wyjście ze strony zapisuje twoje oczekujące zmiany.

## Kopiowanie, przenoszenie albo hardlink

**Settings > Media Management > Importing** ustawia domyślny tryb importu biblioteki: kopiowanie (domyślnie), przenoszenie albo hardlink. Przy każdym imporcie możesz wybrać inny.

Książka podlinkowana hardlinkiem nie zajmuje dodatkowego miejsca na dysku, a oryginał zostaje tam, gdzie był. Hardlink wymaga, żeby domyślny folder główny go obsługiwał i żeby najpierw został sprawdzony. W przeciwnym razie opcja jest wyszarzona i widać powód. Plik, którego nie da się podlinkować, na przykład leżący na innym dysku, jest kopiowany, nigdy przenoszony. Zakończony import mówi, ile plików skopiowano.

## Dodatkowe pliki

**Import Extra Files** (domyślnie włączone) zabiera ze sobą okładkę książki, notatki i inne pliki niebędące audio. Działa tak samo przy imporcie biblioteki, Manual Import i ukończonych pobraniach. Z **Show Advanced** opcja **Preferred Cover** wybiera dopasowaną okładkę z Audible (domyślnie) albo tę z folderu.

## Długie wartości

Lektor, tytuł albo ścieżka ucięte wielokropkiem otwierają się w całości, gdy je stukniesz albo naciśniesz Enter lub Spację. Stuknij jeszcze raz, żeby zamknąć.

## Odpowiedzi inne niż import

Na wiersz możesz też odpowiedzieć **keep library** (odrzuć kopię książki, którą biblioteka już ma) albo **remove empty** (odrzuć folder bez audio, w którym wciąż leżą grafiki i pliki sidecar). Czyszczą one tylko to, co należy do danego wiersza. Wszystko, co zawiera audio, zostaje odrzucone. Pliki trafiają do kosza, jeśli jest ustawiony, a log zadania wypisuje każdą usuniętą ścieżkę.

## Okładka i dodatkowe pliki dla każdego folderu

Inspektor pokazuje własną okładkę folderu obok okładki dopasowanego wydania, każdą z jej rozmiarem w pikselach. Jedno kliknięcie wybiera tę drugą. Pod spodem **Extra files** wypisuje każdy inny plik pod nazwą przełącznika z Media Management, za którym podąża. Kropka oznacza wybór, który różni się od ustawień, a **Apply this cover and these file choices to the N other selected** kopiuje wybory z jednego folderu na pozostałe zaznaczone. Wiersz, który dodaje pliki do książki już obecnej w bibliotece, nie ma tego wyboru.

Zobacz też [Przenoszenie biblioteki do ABM](/pl/guides/moving-a-library-in/) i [Media Management](/pl/settings/media-management/).
