---
title: Sidecar-Dateien
description: Die Cover-, OPF-, Beschreibungs-, Sprecher- und Cue-Dateien, die ABM neben ein Buch schreibt.
---

Ein Sidecar ist eine kleine Datei neben dem Audio. Audiobookshelf und andere Player lesen sie. ABM kann diese hier schreiben:

| Datei | Inhalt |
|---|---|
| `cover.jpg` | Das Cover des Buchs |
| `.opf` | Metadaten im OPF-Format, lesbar für Audiobookshelf. Benannt nach der ersten Audiodatei des Buchs (zum Beispiel `Dune.opf`), oder `title.opf`, wenn das Buch kein Audio hat |
| `desc.txt` | Die Beschreibung |
| `reader.txt` | Der Sprecher |
| `.cue` | Kapitel von Libex (kommt mit dem nächsten Release) |

## Wann sie geschrieben werden

Unter **Settings > Metadata** legen **Create on Book Add**, **Create on Import** und **Create on Refresh** fest, wann. Standardmäßig schreibt sie nur der Import. **Overwrite Existing** ist aus, eine schon vorhandene Datei bleibt also. Du kannst sie auch aus dem Bearbeiten-Dialog schreiben, für ein Buch oder eine Auswahl an Serien und Autoren. Siehe [Metadaten-Einstellungen](/de/settings/metadata/).

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
