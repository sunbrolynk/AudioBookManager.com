---
title: Konvertierungen
description: Audiodateien konvertieren, zusammenführen, aufteilen und mit Kapiteln versehen, über eine Warteschlange, die du pausieren kannst.
---

**Library > Conversions** lässt ffmpeg-Jobs auf deine Bibliothek los. Es gibt vier Arten:

| Job | Was er macht |
|---|---|
| Convert Format | Kodiert neu nach M4B, MP3, M4A, FLAC oder Opus |
| Merge Parts | Fasst mehrere Dateien zu einer zusammen, mit Kapiteln |
| Split Chapters | Teilt eine Datei in eine Datei pro Kapitel auf |
| Ensure Chapters | Fügt Kapitelmarken hinzu oder korrigiert sie, ohne Neukodierung |

Die Standards für jeden Job kommen aus den [Konvertierungseinstellungen](/de/settings/conversions/). Jeder Job kann davon abweichen.

## Die Warteschlange

Jobs warten in einer Warteschlange, und es laufen bis zu **Concurrent Conversions** gleichzeitig (standardmäßig 2). Fertige Jobs wandern in den Verlauf (History), den du leeren kannst.

Die Ausgabe wird in einen privaten Arbeitsordner geschrieben und erst in die Bibliothek gelegt, wenn sie fertig ist. Jede Datei kommt unter einem temporären Namen rein und wird an ihren Platz umbenannt, also taucht nie ein halb geschriebenes Buch auf. Vor dem Start eines Jobs und noch einmal vor dem Einsortieren wird der freie Speicherplatz geprüft. Quelldateien werden nie überschrieben.

Eine Datei in das Format zu konvertieren, das sie schon hat, wird verweigert, weil dabei das Original überschrieben würde.

## Nach einer Konvertierung

ABM aktualisiert die Dateieinträge, die Größe und die Qualität des Buchs, ein konvertiertes Buch zeigt also seine neue Qualität. Ist **Delete Original** an, kommen die alten Dateien in den Konvertierungs-Papierkorb, sofern der aktiviert ist.

Schlägt das Einsortieren des Ergebnisses fehl (etwa weil der Bibliotheksordner voll ist), schlägt der Job fehl, und die fertige Ausgabe bleibt in ihrem Arbeitsordner. Die Fehlermeldung nennt den Ordner. **Retry** startet den Job von vorn und verwirft die aufbewahrte Ausgabe, deshalb fragt es vorher nach. **Clear history** behält Jobs, die noch nicht einsortierte Ausgabe haben.

## Pausieren und fortsetzen

Es gibt zwei Arten von Pause, und keine bricht etwas ab:

- **Pause** bei einem laufenden Job hält seine ffmpeg-Prozesse an der Stelle an, an der sie sind. Resume macht genau dort weiter.
- **Pause queue** (oben in der Warteschlange oder auf dem Handy in der oberen Leiste) verhindert, dass neue Jobs starten, und hält jeden laufenden Job an.

Ein Job, den du selbst pausiert hast, bleibt pausiert, wenn die Warteschlange weiterläuft, und auch über einen Neustart hinweg. Ein Job, der läuft, wenn ABM stoppt, kommt pausiert zurück und startet nicht von selbst. Resume macht bei Merges, Splits und Konvertierungen mit mehreren Dateien beim zuletzt fertigen Teil weiter. Eine Konvertierung mit einer Datei fängt diese Datei neu an.

Das Laufzeitlimit von 6 Stunden zählt nur die Zeit, in der nicht pausiert ist. Lässt sich der gespeicherte Zustand der Warteschlange beim Start nicht lesen, startet die Warteschlange pausiert und sagt das auch. Drück Resume queue, um ihn neu zu schreiben.

Wenn du Sonarr kennst: So etwas gibt es in den Arrs nicht. Stell es dir als kleine Encoder-Warteschlange vor, die zufällig im Manager wohnt.

## Stolperfallen

- Concurrent Conversions mal Threads Per Job sollte die Zahl deiner CPU-Kerne nicht übersteigen. Bei Auto verteilt ABM die übrigen Kerne für dich auf die gleichzeitig laufenden Jobs.
- Eine konvertierte Datei hat eine neue Größe und Änderungszeit, Audiobookshelf scannt sie also neu.
- Wenn du eine Datei konvertierst, die per Hardlink an einem seedenden Torrent hängt, entsteht eine neue Datei. Die geseedete Kopie behält die alten Bytes.
