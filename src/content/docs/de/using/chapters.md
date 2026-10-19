---
title: Kapitel
description: Die eingebetteten Kapitel eines Buchs mit Libex vergleichen und korrigieren.
---

:::caution[Kommt mit dem nächsten Release]
Bis auf die Konvertierungs-Standards ist nichts auf dieser Seite schon in einer veröffentlichten Version drin.
:::

Die Detailseite eines Buchs zeigt die Kapitel, die Libex hat, neben den Kapiteln, die tatsächlich in deinen Dateien eingebettet sind. Libex ist die Referenz. Die Ansicht beantwortet die Frage, ob deine Dateien das enthalten, was laut Libex drin sein sollte.

## Den Vergleich lesen

Jedes Libex-Kapitel bekommt ein Badge, ein Symbol plus ein Wort:

- **Matches**: Ein eingebettetes Kapitel beginnt innerhalb von 2 Sekunden, und der Titel ist derselbe, wenn man Groß- und Kleinschreibung, Akzente und Satzzeichen an den Enden ignoriert. "Chapter 1" und "Chapter One" sind verschiedene Titel.
- **Differs**: Der Titel ist anders, oder der Titel ist in der Nähe vorhanden, beginnt aber mehr als 2 Sekunden entfernt.
- **Missing**: Nichts Eingebettetes passt dazu.
- **Extra**: ein eingebettetes Kapitel, zu dem kein Libex-Kapitel passt.

Bücher aus mehreren Dateien werden in der Reihenfolge der Dateinamen hintereinander auf eine Zeitachse gelegt. Ein Kapitel, das als "(cont.)" über eine Datei hinweg weiterläuft, wird als ein Kapitel gelesen. Ist Libex nicht erreichbar, siehst du die eingebettete Liste und eine Zeile mit dem Grund. Die Seite bricht dabei nie mit einem Fehler ab.

## Falsche Ausgabe

Die Zeitangaben von Libex passen nur zu der Ausgabe, die sie beschreiben. Weicht die Länge deines Audios um mehr als 15 Sekunden oder 0,5 Prozent von der bei Libex ab, je nachdem, was größer ist, erscheint eine Warnung, und sowohl **Update** als auch **Create .cue** sind gesperrt. Es gibt keine Möglichkeit, das zu übergehen.

## Eingebettete Kapitel aktualisieren

Ersetzt die Kapitel in jeder Audiodatei durch die von Libex. Das läuft als Kapitel-Job in der [Konvertierungswarteschlange](/de/using/conversions/), ohne Neukodierung. Angeboten wird es nur, wenn der Vergleich "differs" oder "no embedded chapters" ergibt.

- Jede Datei wird in eine temporäre Datei neu geschrieben, geprüft und dann eingetauscht. Die Prüfung verlangt, dass sie lesbar ist, nicht mehr als 0,5 Sekunden oder 1 Prozent kürzer als das Original, im selben Codec, und genau so viele Kapitel enthält wie verlangt. Schlägt die Prüfung fehl, bleibt das Original.
- Bricht ein Job mittendrin ab, bleiben schon neu geschriebene Dateien neu geschrieben. Der Fehler lautet "N of M files already updated". Führ Update noch mal aus, nachdem du die Ursache behoben hast.
- Gleich verweigert wird es, wenn: schon eine andere Konvertierung für das Buch läuft, es keine ASIN oder keine Libex-Kapitel gibt, die Ausgabe falsch ist, eine Datei nicht lesbar ist oder es nichts zu aktualisieren gibt.

## .cue erstellen (Create .cue)

Schreibt aus den Libex-Kapiteln eine Cue-Datei in den Buchordner, benannt nach der ersten Audiodatei. Eine vorhandene Datei mit diesem Namen wird überschrieben. Siehe [Sidecar-Dateien](/de/using/sidecars/).

## Stolperfallen

- VBR-MP3-Dateien ohne Längen-Header haben eine geschätzte Länge. Eine richtige Ausgabe kann dann ein paar Sekunden daneben wirken.
- Eine neu geschriebene Datei sieht für Audiobookshelf geändert aus und wird neu gescannt.
- Kapiteltitel mit `=`, `;`, `#` oder einem Backslash werden möglicherweise falsch geschrieben, bis ein Fix kommt.

## Das Standardverhalten für Kapitel bei Konvertierungen

Unabhängig vom Obigen: **Settings > Conversions > Chapter Handling** legt fest, was eine Konvertierung mit Kapiteln macht. Siehe [Konvertierungseinstellungen](/de/settings/conversions/).
