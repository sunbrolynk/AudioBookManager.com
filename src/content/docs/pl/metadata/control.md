---
title: Twoje metadane, twoja kontrola
description: Co zmienia odświeżenie, co kontrolujesz i jakie pliki oraz tagi ABM zapisuje dla twojego odtwarzacza.
---

ABM trzyma zapis metadanych twojej biblioteki we własnej bazie danych i zapisuje je z powrotem tam, gdzie twój odtwarzacz może z nich skorzystać. Ta strona wyjaśnia, co możesz kontrolować, a czego dotknie odświeżenie.

## Co zmienia odświeżenie

Odświeżenie (**Refresh & Scan** książki, odświeżenie autora, odświeżenie serii) pyta ponownie źródło metadanych i stosuje to, co wróci. Pola, które nadpisuje, gdy źródło ma dla nich wartość: tytuł, podtytuł, rok i data wydania, ocena, czas trwania, język, wydawca, opis, autorzy, lektorzy, gatunki i okładka.

Pole, które źródło zwraca puste, zostaje bez zmian.

## Co kontrolujesz

- **Okładkę, którą wybrałeś.** Jest zablokowana. Zobacz [Blokada okładki](/pl/metadata/cover-lock/).
- **Tagi, automatyczne tagi, monitorowanie, wybór profilu jakości i same pliki.** Odświeżenie ich nie rusza.
- **Książkę, której plików nie da się odczytać.** Zostaje w całości nietknięta, a strona Tasks pokazuje dlaczego.

Szczegóły książki, takie jak tytuł, autorzy i opis, pochodzą ze źródła. ABM nie daje możliwości ręcznej edycji i nie jest to planowane. Kontrolujesz za to, jak są przechowywane i gdzie są zapisywane.

## Okno edycji

Okno edycji zmienia monitorowanie, profil jakości, ścieżkę i tagi, a w tym samym kroku pozwala zapisać pliki sidecar i tagi audio, dla jednej książki albo dla całego zaznaczenia serii i autorów. Zobacz [Biblioteka](/pl/using/library/#okno-edycji).

## Pliki sidecar, które czyta twój odtwarzacz

ABM zapisuje `cover.jpg`, plik `.opf`, `desc.txt` i `reader.txt` obok audio. Audiobookshelf czyta OPF, okładkę i pliki tekstowe, więc odtwarzacz pokazuje to, co wybrałeś w ABM. Zobacz [Pliki sidecar](/pl/using/sidecars/).

## Tagi zapisywane w audio

ABM potrafi zapisać tytuł, wykonawcę, wykonawcę albumu, album, gatunek, rok, komentarz, lektora i osadzoną okładkę bezpośrednio w plikach audio, więc dane podróżują razem z plikiem. Domyślnie jest to wyłączone. Pola wybierzesz w **Settings > Metadata**. Zobacz [Ustawienia metadanych](/pl/settings/metadata/).

## Rozdziały

Porównywanie rozdziałów osadzonych w twoich plikach z rozdziałami wydania opublikowanego i zapisywanie opublikowanych rozdziałów w plikach jest planowane na późniejsze wydanie. Zobacz [Rozdziały](/pl/using/chapters/).

## Seria i pozycja

Książka ma swoją serię i pozycję w niej. ABM śledzi serie jako katalogi, więc może pokazać, które książki masz, i dodać te, których brakuje. Zobacz [Śledzenie serii](/pl/using/series-tracking/).

## Tagi i automatyczne tagi

Tagi są twoje. Automatyczne tagi nadają je według reguł (gatunek, lektor, ocena, czas trwania i inne) i mogą je zdejmować, gdy książka przestaje pasować. Tagi sterują potem profilami, powiadomieniami, indekserami, listami importu i kanałem kalendarza. Zobacz [Tagi](/pl/settings/tags/).

## Rosnący zapis lokalny

Wszystko, czego ABM dowie się o książce, zostaje we własnej bazie SQLite ABM w `/config`, łącznie z książkami, które potem usuniesz. Zrób kopię tego folderu i masz kopię całego zapisu. Gdy książka już jest w bibliotece, metadane nie zależą od tego, czy źródło jest osiągalne.

:::caution[W późniejszym wydaniu]
Planowana jest osobna **Local Metadata Library**: opcjonalna kopia wszystkiego, co ABM kiedykolwiek sprawdził, zachowana nawet po tym, jak książka opuści twoją bibliotekę, z własnymi zaplanowanymi kopiami zapasowymi i pobraniem w SQLite.
:::

## Harmonogramy odświeżania

- Discover ma własny harmonogram. Zobacz [Ustawienia Discover](/pl/settings/discover/).
- Biblioteka Audible ma własny harmonogram synchronizacji. Zobacz [Ustawienia Audible](/pl/settings/audible/).
- Skanowanie biblioteki może iść co N godzin i przy zmianach plików. Zobacz [Media Management](/pl/settings/media-management/).
- Zapisywaniem plików sidecar i tagów przy odświeżaniu sterują **Create on Refresh** i **Write Tags on Refresh**.
