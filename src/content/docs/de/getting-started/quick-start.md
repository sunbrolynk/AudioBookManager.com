---
title: Schnellstart
description: Von der frischen Installation zum ersten überwachten Buch.
---

Das ist der kürzeste Weg von einem laufenden Container zu einem Buch, nach dem gesucht wird. Installier ABM zuerst: siehe [ABM installieren](/de/installation/).

## 1. Anmelden

Beim ersten Besuch legst du einen Login an. Bis das erledigt ist, lehnt ABM Anfragen ab. Wie die Anmeldung danach funktioniert, steht unter [Sicherheit und Anmeldung](/de/settings/security/).

## 2. Festlegen, wie ABM ins Internet kommt

Unter **Settings > General** gibt es den Abschnitt **Proxy & VPN**. Wenn du die eingebaute Metadatenquelle nutzen willst, musst du dort zuerst eine Verbindung auswählen. Siehe [Eine Metadatenquelle auswählen](/de/metadata/choosing-a-source/).

## 3. Einen Root-Ordner anlegen

Ein Root-Ordner ist der Ort, an dem ABM die Bücher ablegt. Du legst ihn unter **Settings > Media Management** im Abschnitt **Root Folders** an. Es sollte derselbe Ordner sein, den auch dein Player (zum Beispiel Audiobookshelf) liest.

## 4. Einen Indexer und einen Download-Client hinzufügen

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse oder Prowlarr. Siehe [Indexer](/de/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet oder Blackhole. Siehe [Download-Clients](/de/settings/download-clients/).

Läuft der Client in einem anderen Container, prüf, ob er und ABM den Download-Ordner unter demselben Pfad sehen, oder leg ein Remote Path Mapping an.

## 5. Ein Qualitätsprofil festlegen

Unter **Settings > Profiles** liegt die Qualitätsleiter, nach der ABM entscheidet, was es lädt und was als Upgrade zählt. Eine frische Installation hat noch keins, also leg eins an. Das erste Profil, das du anlegst, wird zum Standardprofil, und du kannst es später verfeinern. Siehe [Profile](/de/settings/profiles/).

## 6. Audible verbinden (optional)

Wenn du Audible-Bücher hast, verbindest du dein Konto unter **Settings > Audible**. Wähl deinen **Marketplace**, klick auf **Connect Audible Account** und dann auf **I Understand, Open Amazon Login**. Meld dich im neuen Tab bei Amazon an. Dass du danach auf einer leeren Seite oder bei "Page not found" landest, ist so gewollt. Kopier die komplette Adresse aus der Adressleiste in **Redirect URL**, gib bei Bedarf einen **Display Name** ein und klick auf **Complete Login**. Dein Passwort wird nie gespeichert, und der erste Bibliotheks-Sync startet sofort. Siehe [Audible](/de/audible/).

## 7. Bücher übernehmen oder hinzufügen

- Du hast schon eine Sammlung? Nimm den [Bibliotheksimport](/de/library-import/).
- Du fängst bei null an? Nimm **Library > Add New** und such nach Titel, Autor oder Serie. Siehe [Neu hinzufügen](/de/using/add-new/).

Ein Buch, das du hinzufügst, ist gesucht (Wanted), bis eine Datei dafür importiert wurde. Gesuchte Bücher tauchen unter **Wanted > Missing** auf und werden automatisch gesucht.

## 8. Zuschauen, wie es arbeitet

**Activity > Queue** zeigt, was gerade lädt. **Activity > History** zeigt, was geladen und importiert wurde. Wenn etwas schiefgeht, schau unter [Fehlerbehebung](/de/troubleshooting/) und auf der Seite [Aufgaben](/de/system/tasks/) nach.
