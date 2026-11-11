---
title: Pierwsza konfiguracja
description: Kreator konfiguracji przy nowej instalacji, krok po kroku.
---

:::caution[W późniejszym wydaniu]
Kreatora konfiguracji nie ma jeszcze w żadnej wydanej wersji. Wydane wersje przy pierwszej wizycie proszą tylko o login.
:::

Przy nowej instalacji pierwsza wizyta otwiera kreator konfiguracji zamiast strony logowania. Prowadzi cię przez wszystko, czego ABM potrzebuje, krok po kroku. Pojawia się tylko dopóki nie istnieje żadne konto. Każdy wybór możesz potem zmienić w **Settings**.

U góry biegnie łańcuch z ośmiu ogniw. Każde ogniwo to jeden krok, a łańcuch pokazuje, gdzie jesteś:

- **Done**: krok jest skończony.
- **Current step**: krok widoczny na ekranie.
- **Not started**: krok, do którego jeszcze nie doszedłeś.
- **Later**: krok, który minąłeś bez kończenia. Czeka dalej, a skończyć go możesz w **Settings**, kiedy chcesz.

**Back** wraca do poprzedniego kroku. **Continue** zapisuje krok i idzie dalej. Trzy kroki, Audible, Download client i Indexer, mają też **Skip for now**.

## 1. Konto (Account)

Tworzy twój login i cię loguje. Wybierasz nazwę użytkownika i hasło co najmniej 8-znakowe, a hasło wpisujesz dwa razy.

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms używa strony logowania. Basic (Browser Popup) używa wbudowanego okienka logowania przeglądarki |
| Authentication required | Everywhere | Everywhere wymaga logowania z każdego adresu. Skip on local network wpuszcza urządzenia z twojej sieci domowej lub biurowej bez logowania |

To te same ustawienia co w [Bezpieczeństwo i logowanie](/pl/settings/security/). Konto powstaje po naciśnięciu **Continue**. Gdy już istnieje, ten krok tylko je potwierdza.

## 2. Sieć (Network)

Network to główny wyłącznik. Nic, co wysyła ABM, nie opuści twojego komputera, dopóki nie wybierzesz tu trasy, więc kroki Metadata i Audible od niego zależą. Tego kroku nie można pominąć, a **Continue** pozostaje wyłączony, dopóki trasa nie jest kompletna.

| Wybór | Co dajesz ABM |
|---|---|
| Proxy | Typ, nazwę hosta i port proxy oraz opcjonalnie nazwę użytkownika i hasło. SOCKS4 nie jest obsługiwany |
| WireGuard | Plik `.conf` od twojego dostawcy VPN, wklejony lub upuszczony. Jeśli tunel jest już zapisany, używany jest on |
| Own VPN container | Nic do wpisania. Zaznaczasz pole mówiące, że cały ruch ABM już wychodzi przez kontener VPN lub proxy. ABM nie może tego sprawdzić |
| Direct | Nic do wpisania. Zaznaczasz pole mówiące, że każda usługa, z którą łączy się ABM, zobaczy twój własny adres IP |

**Continue** zapisuje trasę, a potem pokazuje sprawdzenie **Public IP**, żebyś zobaczył, że trasa działa, zanim cokolwiek pójdzie do sieci. **Change route** pozwala wybrać ponownie. To te same ustawienia co w [Network](/pl/settings/network/).

## 3. Metadane (Metadata)

Wybierz, gdzie ABM szuka książek. To idzie przed twoimi folderami, bo pierwsze skanowanie folderów dopasowuje twoje książki właśnie do tego źródła.

| Wybór | Co oznacza |
|---|---|
| Built-in | Libex działa wewnątrz ABM. Bez konta i bez dodatkowej usługi. Używa trasy z kroku Network |
| Hosted | ABM pyta publiczną instancję Libex pod adresem libexdb.com |
| Self-hosted | ABM pyta twój własny serwer Libex. Wpisz jego **Server URL**. **Test** sprawdza go bez zapisywania |

Jest też pole **Local Storage**. Prowadzi stały, szyfrowany, lokalny zapis każdej książki, którą ABM wyszukuje, dodaje, importuje lub widzi w Discover, i działa ze wszystkimi trzema źródłami. Po włączeniu można je wyłączyć tylko w **Settings > Metadata**.

**Continue** zapisuje źródło i włącza Local Storage, jeśli je zaznaczyłeś. Jeśli wybrane źródło nie może jeszcze wyjść do sieci, na przykład Built-in bez wybranej trasy, krok mówi dlaczego. Zobacz [Wybór źródła metadanych](/pl/metadata/choosing-a-source/).

## 4. Audible (opcjonalnie)

Loguje cię do konta Audible, żeby ABM mógł czytać twoją bibliotekę. Idzie to trasą wybraną w kroku Network. Jeśli nie wybrano trasy albo ruch Audible jest na niej zablokowany, krok to mówi, a **Back to Network** zabiera cię z powrotem. Samo logowanie jest takie samo jak w [Audible](/pl/audible/). Gdy jesteś zalogowany, krok pokazuje konto, a **Continue** staje się dostępny.

Możesz wybrać **Skip for now** i połączyć Audible później w **Settings > Audible**.

## 5. Folder główny (Root folder)

Folder główny to miejsce, w którym ABM trzyma twoje książki. Wybierz folder, w którym leżą twoje audiobooki, albo do którego mają trafiać nowe. Powinien to być ten sam folder, który czyta twój odtwarzacz (na przykład Audiobookshelf). Możesz przeglądać foldery serwera i utworzyć nowy w przeglądarce. Pierwszy dodany folder główny staje się domyślnym. Tego kroku nie można pominąć. Kolejne foldery główne możesz dodać później w **Settings > Media Management**.

## 6. Klient pobierania (opcjonalnie)

Wybierz jednego z obsługiwanych klientów, Usenet lub torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet albo Blackhole. Wpisz jego dane, naciśnij **Test**, potem **Save**. Klient jest dodawany od razu w tym kroku. Możesz dodać kolejnego, a **Refresh** odświeża listę. Krok liczy się jako zrobiony, gdy zapisany jest jeden klient.

Możesz wybrać **Skip for now** i dodać klienta później w **Settings > Download Clients**. Zobacz [Klienty pobierania](/pl/settings/download-clients/).

## 7. Indekser (opcjonalnie)

Wybierz typ indeksera lub gotowy wzór, wypełnij go, potem **Test** i **Save**, tak samo jak przy kliencie pobierania. Krok liczy się jako zrobiony, gdy zapisany jest jeden indekser. Możesz wybrać **Skip for now** i dodać indeksery później w **Settings > Indexers**. Zobacz [Indeksery](/pl/settings/indexers/).

## 8. Koniec (Finish)

Podsumowanie wymienia każdy krok i to, co ustawiono: twoją trasę Network (oraz Public IP, jeśli ją sprawdzono), źródło metadanych, konto Audible, folder główny oraz dodanego klienta i indekser. Każdy krok odłożony na później wyświetla się jako oczekujący. Jeśli nic nie czeka, podsumowanie mówi, że wszystkie ogniwa się świecą. **Go to Library** zamyka kreatora.

Wszystko, co pominąłeś, jest w **Settings**, kiedy tylko zechcesz. Sensowne następne rzeczy to profil jakości i twoje książki: zobacz [Szybki start](/pl/getting-started/quick-start/).
