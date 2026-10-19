---
title: Aktywność
description: Kolejka, historia i czarna lista.
---

## Kolejka (Queue)

To, nad czym pracują twoje klienty pobierania. Akcje wiersza to między innymi **Grab now**, **Import Now**, **Manual Import** i **Retry Now**, a także **Configure remote path mapping**, gdy ukończone pobranie leży w ścieżce, której ABM nie widzi.

Usunięcie wiersza z kolejki działa według **Queue Page Remove Action** w ustawieniach klienta pobierania: tylko zamknij w ABM, usuń z klienta i zostaw pliki albo usuń z klienta i skasuj pliki. Zobacz [Klienty pobierania](/pl/settings/download-clients/).

## Historia (History)

Pobrania, importy, błędy i ulepszenia. Nieudane pobranie mówi, których klientów próbowano.

## Czarna lista (Blocklist)

Wydania, których ABM już nie pobierze, zwykle dlatego, że się nie udały. **Remove from Blocklist** wpuszcza jedno z powrotem. **Redownload Failed** w obsłudze pobrań dodaje tu nieudane wydanie i szuka ponownie.

## To nie to samo co Events

Te strony dotyczą pobrań. Ogólnosystemowy zapis tego, co działo się w ABM, to [Activity Log](/pl/system/activity-log/).
