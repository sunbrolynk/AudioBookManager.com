---
title: Fehlerbehebung
description: Lösungen für die Probleme, auf die du am wahrscheinlichsten stößt.
---

## Dateien von einem unterbrochenen Import (.abmstage)

Ein Import legt jede Datei zuerst neben ihrem endgültigen Namen bereit und tauscht sie erst ein, wenn alle angekommen sind. Wenn etwas schiefgeht, stellt ABM zurück, was es verschoben hat. Kann es einen Teil nicht zurückstellen, bleibt dieser Teil als versteckte Datei mit der Endung `.abmstage` im Ordner des Buchs. Das kann die einzige Kopie sein, deshalb behält ABM sie, und die Fehlermeldung nennt sie.

Solange eine `.abmstage`-Datei im Ordner eines Buchs liegt, brechen Importe in diesen Ordner ab mit:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

So stellst du das wieder her:

1. Such die `.abmstage`-Datei, die in der Fehlermeldung genannt wird.
2. Verschieb sie zurück in den Download oder unter ihrem echten Namen in den Ordner des Buchs. Oder lösch sie, wenn du sie nicht brauchst.
3. Starte den Import neu.

## Hinter einem Reverse Proxy muss sich jeder anmelden

Ohne `TRUSTED_PROXIES` wird eine Anfrage mit Forwarding-Headern nie als lokal behandelt, sie muss sich also anmelden. Das ist Absicht.

1. Setz `TRUSTED_PROXIES` auf die Adresse deines Proxys, zum Beispiel `172.20.0.5`. Ein Proxy auf demselben Host braucht `127.0.0.1`.
2. Sorg dafür, dass der Proxy `X-Forwarded-For` oder `X-Real-IP` schickt. nginx proxy manager, Traefik und Caddy machen das standardmäßig.
3. Starte ABM neu.

Im App-Log steht, was davon zutrifft:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": Füg den Proxy zu `TRUSTED_PROXIES` hinzu.
- "... is in TRUSTED_PROXIES but didn't name a client address": Konfigurier den Proxy so, dass er `X-Forwarded-For` oder `X-Real-IP` schickt.

Der umgekehrte Fall: Ein Proxy, der keine Forwarding-Header schickt, sieht aus wie ein lokaler Client, also kommt alles über ihn ohne Anmeldung durch. Stell Authentication Required auf Enabled.

## Änderungen aus dem Browser werden abgelehnt

Stell sicher, dass der Proxy den ursprünglichen `Host`-Header weitergibt oder `X-Forwarded-Host` schickt. Siehe [Konfiguration](/de/configuration/#reverse-proxy).

## Cover verschwinden oder die Seite spinnt hinter einem Proxy

Der Content-Security-Policy-Header erlaubt nur Cover-Bilder über HTTPS. Schau in der Browser-Konsole nach Verstößen. Liefer die Cover über HTTPS aus oder setz `SECURITY_HEADERS_CSP_ENABLED=false`.

## Eine große Anfrage liefert 413

Erhöh `MAX_REQUEST_BODY_BYTES`. Auch ein Reverse Proxy kann ein niedrigeres Limit durchsetzen und selbst mit 413 antworten.

## Die Metadatenquelle ist nicht erreichbar

Hinzufügen, Suchen, Aktualisieren und Discover brauchen Libex. Bekommt ABM keine Antwort, schlägt eine Buchsuche mit "Libex search failed" fehl und eine Autoren- oder Serien-Suche mit "Libex could not be reached; try again shortly", statt eine leere Liste zu zeigen. Ursachen: Libex ist down, oder die Verbindung von ABM erreicht es nicht.

1. Schau auf die [ABM-Statusseite](https://status.audiobookmanager.com) und die [Libex-Statusseite](https://status.libexdb.com), ob es für alle down ist.
2. Prüf, ob der Container ins Internet kommt, und ob der Proxy unter **Settings > General > Proxy** stimmt, falls du einen nutzt.
3. Versuch es nach einer Minute noch mal.
4. In der Zwischenzeit kannst du Bücher weiter von Hand hinzufügen und importieren.

Eine Hintergrundaufgabe, die in einen Ausfall läuft, schlägt mit dem Grund fehl. Sie wird von allein wiederholt, bis zu sechsmal oder sechs Stunden lang, je nachdem, was zuerst eintritt.

## Eine Aktualisierung hat die Details eines Buchs geändert

Titel, Beschreibung, Autoren, Sprecher und ähnliche Felder kommen von der Metadatenquelle, und eine Aktualisierung übernimmt, was dort jetzt steht. ABM kann sie nicht von Hand bearbeiten. Was du steuerst: das Cover (sperrbar), welche Dateien geschrieben werden, Tags und ob Aktualisierungen Sidecars und Tags schreiben. Siehe [Deine Metadaten, deine Entscheidung](/de/metadata/control/).

## Ein Buch zeigt Missing Files

Das Buch wurde heruntergeladen, aber seine Dateien liegen nicht da, wo ABM nachschaut. Prüf das Mount und die Berechtigungen und führ dann **Refresh & Scan** aus. Ein Scan lässt ein Buch unangetastet, wenn sein Ordner nicht lesbar ist, und die Aufgabe wird als Partial mit dem Grund angezeigt.

## Importe brechen ab mit "Files left by an interrupted import"

Siehe den Abschnitt zu `.abmstage` oben.

## Downloads werden fertig, aber nie importiert

Leg ein Remote Path Mapping an oder sorg dafür, dass ABM und der Client den Ordner unter demselben Pfad sehen. Ein nicht lesbarer Unterordner blockiert den ganzen Download, bis seine Berechtigungen korrigiert sind. Siehe [Download-Clients](/de/settings/download-clients/).

## Docker erreicht die Metadatenquelle oder die Indexer nicht

Prüf zuerst DNS und die Proxy-Einstellung. In Docker erreicht ABM Libex und deine Indexer nur, wenn der Container ins Internet kommt.

## Immer noch nicht gelöst?

Frag im [ABM-Discord](https://discord.gg/qeJRrM6AZ), [eröffne ein Issue](https://github.com/sunbrolynk/AudioBook-Manager/issues) oder schreib eine Mail an [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
