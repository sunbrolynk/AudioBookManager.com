---
title: Przenoszenie biblioteki do ABM
description: Bezpiecznie wprowadź istniejącą kolekcję do ABM.
---

## Zanim zaczniesz

1. Zrób kopię kolekcji. Import biblioteki domyślnie kopiuje, ale lepiej być przygotowanym na pomyłki.
2. Ustaw folder główny i profil jakości, i upewnij się, że źródło metadanych jest osiągalne.
3. Zdecyduj: kopiowanie, przenoszenie czy hardlink. Kopiowanie jest najbezpieczniejsze. Hardlink oszczędza miejsce, jeśli biblioteka jest na tym samym systemie plików co źródło. Zobacz [Media Management](/pl/settings/media-management/).

## Kroki

1. **Library > Library Import**, zeskanuj folder.
2. Przeczytaj listę. Dopasowania mają wartość procentową. Popraw wiersze **Needs attention** i **Unmatched** przez **Find a match** albo połącz wiersze, które są jedną książką rozbitą na kilka folderów.
3. Okładkę i dodatkowe pliki dla każdego folderu sprawdzaj tylko wtedy, gdy chcesz nadpisać ustawienia domyślne.
4. Zaznacz wiersze i je dodaj. Jeśli zostajesz przy domyślnych, to nadal dwa kliknięcia.
5. Obserwuj zadanie. Podsumowanie mówi, ile plików skopiowano zamiast podlinkować hardlinkiem i co się nie udało.

## Jeśli chcesz, żeby ABM zarządzał folderem źródłowym

Dodaj go zamiast tego jako folder główny i pozwól ABM go zeskanować. Pliki zostają na miejscu, a książki dostają status na podstawie tego, co jest na dysku.

## Pułapki

- Książka, która już jest w bibliotece, jest tak oznaczona. Odrzuć duplikat odpowiedzią keep library, zamiast importować go drugi raz.
- Odrzucenie folderu bez audio usuwa tylko to, co należy do tego wiersza, i trafia do kosza, jeśli jest włączony.
- ASIN znaleziony w opisie to podpowiedź, a nie dopasowanie, chyba że tytuł też się zgadza.
- Po imporcie odśwież książki, żeby pobrać aktualne metadane, i włącz zapisywanie plików sidecar, jeśli chcesz, żeby Audiobookshelf widział wybory ABM. Zobacz [Pliki sidecar](/pl/using/sidecars/).
