---
title: Sidecar-Dateien
description: Die metadata.json-, Cover-, OPF-, Beschreibungs- und Sprecher-Dateien, die ABM neben ein Buch schreibt.
---

Ein Sidecar ist eine kleine Datei neben dem Audio. Audiobookshelf und andere Player lesen sie. ABM schreibt diese hier:

| Datei | Inhalt | Schalter |
|---|---|---|
| `metadata.json` | Die eigene Metadatendatei von Audiobookshelf, plus ein `abm`-Block, der sie als ABMs Datei kennzeichnet. Audiobookshelf liest sie vor allem anderen | Keiner, wird immer geschrieben |
| `cover.jpg` | Das Cover des Buchs. Wird nicht geschrieben, wenn im Ordner schon ein `cover.*` liegt | cover.jpg |
| `.opf` | Metadaten im OPF-Format. Benannt nach der ersten Audiodatei des Buchs (zum Beispiel `Dune.opf`), oder `title.opf`, wenn das Buch kein Audio hat | title.opf |
| `desc.txt` | Die Beschreibung, ohne HTML. Fällt weg, wenn es keine gibt | desc.txt |
| `reader.txt` | Die Sprecher. Fällt weg, wenn es keine gibt | reader.txt |

Zusammen mit der Ordnerstruktur sind das die Dateien, aus denen Audiobookshelf die Details eines Buchs liest, es sieht also dasselbe Buch wie ABM.

## Wann sie geschrieben werden

`metadata.json` wird jedes Mal geschrieben, wenn ein Buch hinzugefügt, importiert oder aktualisiert wird.

Die anderen vier haben jeweils einen Schalter unter **Settings > Metadata > Files to Create**, standardmäßig alle an. Geschrieben werden sie nur, wenn auch der passende Auslöser an ist: **Create on Book Add** (aus), **Create on Import** (an, das gilt für Downloads, den Bibliotheksimport und Audible-Downloads) und **Create on Refresh** (aus). **Overwrite Existing** ist aus, eine schon vorhandene Datei bleibt also. Solange der Ordner des Buchs nicht existiert, wird nichts geschrieben.

**Write to Directories** im Bearbeiten-Dialog schreibt die vier ebenfalls, für ein Buch oder eine Auswahl an Serien und Autoren. Siehe [Metadaten-Einstellungen](/de/settings/metadata/).

## Das Cover ist ein Sonderfall

Ein Cover, das du selbst ausgewählt hast, ist gesperrt. Siehe [Die Cover-Sperre](/de/metadata/cover-lock/).

## Beim Import

Der Import nimmt auch die vorhandenen Nicht-Audio-Dateien eines Buchs mit, gesteuert über **Media Management > Importing**. Hat die Quelle eine `.opf`, eine Beschreibung oder eine Sprecher-Datei, übernimmt ABM höchstens eine von jeder Sorte und benennt sie `desc.txt` und `reader.txt`. Ein schon vorhandenes Ziel bleibt unangetastet, und ein neues Cover wird nie über ein bestehendes `cover.*` geschrieben.

## Hardlinks

Ein per Hardlink übernommener Import lässt das Original unberührt. Wenn ABM eine dieser Dateien schreibt, legt es eine neue Datei an, statt sie an Ort und Stelle zu bearbeiten, also behält die Quelle, aus der du importiert hast, ihren Inhalt.

## Stolperfallen

- Eine `metadata.json` verarbeitet ABM, wenn sie ABMs eigenen Block enthält. Die `metadata.json` eines anderen Tools richtet sich nach dem Schalter für die Buchinfo-Dateien.
- In einem Ordner, den sich mehrere Bücher teilen, gehören nur die Dateien zu diesem Buch, die nach seinem Audio benannt sind.
- Beim Löschen eines Buchs werden seine Sidecars entfernt, wenn sie nach den Dateien dieses Buchs benannt sind.
