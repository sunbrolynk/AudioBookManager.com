---
title: Konwersje
description: Konwertuj, scalaj, dziel i dodawaj rozdziały do plików audio, w kolejce, którą możesz wstrzymać.
---

**Library > Conversions** uruchamia zadania ffmpeg na twojej bibliotece. Są cztery rodzaje:

| Zadanie | Co robi |
|---|---|
| Convert Format | Koduje ponownie do M4B, MP3, M4A, FLAC albo Opus |
| Merge Parts | Łączy kilka plików w jeden, z rozdziałami |
| Split Chapters | Dzieli jeden plik na osobny plik dla każdego rozdziału |
| Ensure Chapters | Dodaje albo poprawia znaczniki rozdziałów bez ponownego kodowania |

Ustawienia domyślne każdego zadania pochodzą z [ustawień konwersji](/pl/settings/conversions/). Każde zadanie może je nadpisać.

## Kolejka

Zadania czekają w kolejce i działają po maksymalnie **Concurrent Conversions** naraz (domyślnie 2). Ukończone zadania trafiają do History, którą możesz wyczyścić.

Wynik jest zapisywany w prywatnym folderze roboczym i trafia do biblioteki dopiero po ukończeniu. Każdy plik wchodzi pod tymczasową nazwą i jest przemianowywany na swoje miejsce, więc w bibliotece nigdy nie pojawi się w połowie zapisana książka. Sprawdzenie wolnego miejsca idzie przed startem zadania i jeszcze raz przed umieszczeniem wyniku. Pliki źródłowe nigdy nie są nadpisywane.

Konwersja pliku do formatu, w którym już jest, jest odrzucana, bo nadpisałaby oryginał.

## Po konwersji

ABM odświeża zapisy plików książki, ich rozmiar i jakość, więc przekonwertowana książka pokazuje nową jakość. Jeśli **Delete Original** jest włączone, stare pliki trafiają do kosza konwersji, o ile jest włączony.

Jeśli umieszczenie wyniku się nie uda (bo na przykład folder biblioteki jest pełny), zadanie kończy się błędem, a gotowy wynik zostaje w swoim folderze roboczym. Błąd podaje ten folder. **Retry** zaczyna zadanie od nowa i wyrzuca zachowany wynik, więc najpierw pyta. **Clear history** zostawia zadania, które wciąż trzymają nieumieszczony wynik.

## Wstrzymywanie i wznawianie

Są dwa rodzaje wstrzymania i żadne niczego nie anuluje:

- **Pause** przy jednym działającym zadaniu zawiesza jego procesy ffmpeg tam, gdzie są. Resume kontynuuje od tego samego miejsca.
- **Pause queue** (na górze kolejki albo na górnym pasku na telefonie) blokuje start nowych zadań i zawiesza każde działające.

Zadanie, które wstrzymałeś sam, zostaje wstrzymane, gdy kolejka zostanie wznowiona, i także po restarcie. Zadanie, które działało, gdy ABM się zatrzymał, wraca jako wstrzymane i samo nie startuje. Przy scalaniu, dzieleniu i konwersji wielu plików Resume kontynuuje od ostatniej ukończonej części. Konwersja pojedynczego pliku zaczyna ten plik od nowa.

Limit 6 godzin pracy liczy tylko czas bez wstrzymania. Jeśli przy starcie nie da się odczytać zapisanego stanu kolejki, kolejka startuje wstrzymana i to mówi. Naciśnij Resume queue, żeby zapisać stan od nowa.

Jeśli znasz Sonarra: w arrach nie ma nic takiego. Pomyśl o tym jak o małej kolejce enkodera, która akurat mieszka w menedżerze.

## Pułapki

- Concurrent Conversions razy Threads Per Job nie powinno przekraczać liczby rdzeni twojego CPU. Przy Auto ABM dzieli za ciebie pozostałe rdzenie między zadania działające jednocześnie.
- Przekonwertowany plik ma nowy rozmiar i czas modyfikacji, więc Audiobookshelf go przeskanuje.
- Konwersja pliku podlinkowanego hardlinkiem do seedowanego torrenta tworzy nowy plik. Seedowana kopia zachowuje stare bajty.
