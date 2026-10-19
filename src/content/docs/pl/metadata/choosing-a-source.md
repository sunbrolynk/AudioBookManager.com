---
title: Wybór źródła metadanych
description: Wbudowane, hostowane albo twój własny serwer Libex.
---

:::caution[W następnym wydaniu]
Wyboru źródła nie ma jeszcze w żadnej wydanej wersji. Wydane wersje używają publicznej instancji Libex pod adresem libexdb.com i nie mają do tego ustawienia.
:::

W następnym wydaniu **Settings > Metadata > Source** ma ustawienie **Metadata Source** z trzema opcjami.

| Opcja | Co oznacza |
|---|---|
| Built-in (domyślnie) | Libex działa wewnątrz ABM. Najpierw trzeba wybrać połączenie wychodzące. |
| Hosted (libexdb.com) | ABM pyta publiczną instancję Libex. |
| Self-hosted | ABM pyta serwer Libex, który mu wskażesz. Wpisz jego **Server URL**, na przykład `http://192.168.1.20:8000`. |

**Test** sprawdza wybrane źródło bez zapisywania. **Status** mówi, czy jest gotowe. Wybór, którego nie zapisałeś, pokazuje "Not in use yet - save to switch", dopóki go nie zapiszesz.

## Built-in i połączenie wychodzące

Built-in rozmawia z Audible z twojej maszyny, więc korzysta z **Settings > General > Proxy & VPN**. Ta strona decyduje o trasie: proxy, wbudowany tunel WireGuard, twój własny kontener VPN albo połączenie bezpośrednie, które świadomie zaakceptujesz. Jeśli nic nie wybierzesz, automatyczne wyszukiwania są zablokowane i ABM to mówi. Wybrana trasa, która nie działa, też blokuje wyszukiwania. ABM nigdy nie wraca wtedy do twojego własnego adresu. Przy połączeniu bezpośrednim widać ostrzeżenie, że Audible widzi twój adres IP i książki, których szuka ABM.

## Hosted i self-hosted

Przy tych dwóch ABM pyta serwer Libex, a to serwer rozmawia z Audible. Adres self-hosted jest sprawdzany przed zapisaniem, a pusty albo niebezpieczny zostaje odrzucony. Serwer, który nie działa, jest zgłaszany jako niedostępne źródło metadanych, z jego nazwą.

## Co wybrać

- Chcesz, żeby po prostu działało, i nie przeszkadza ci, że Audible widzi twój adres: Built-in z połączeniem bezpośrednim albo Hosted.
- Zależy ci, żeby nie pokazywać Audible swojego IP: Built-in przez VPN albo proxy, albo Hosted.
- Masz już własny serwer Libex: Self-hosted.
