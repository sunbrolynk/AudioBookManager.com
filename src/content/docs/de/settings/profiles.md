---
title: Profile
description: Qualitätsprofile, Delay-Profile und Release-Profile.
---

**Settings > Profiles** ist eine Seite mit drei Abschnitten. Sie beantworten drei verschiedene Fragen zu einem Release.

## Qualitätsprofile

Ein Qualitätsprofil ist eine Leiter aus Formaten, unten das schlechteste, oben das beste. Eine Stufe ist ein Format (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA), entweder als einzelne Datei oder als mehrere Dateien. Stufen lassen sich gruppieren, damit sie gleich viel zählen, und eine Stufe kann abgeschaltet werden.

| Einstellung | Bedeutung |
|---|---|
| Upgrades Allowed | Wenn aus, ersetzt ABM ein Buch nicht mehr, sobald es eins hat |
| Upgrade Until | Der Cutoff. Ist diese Qualität erreicht, hört ABM mit Upgrades auf |
| Grab off-ladder formats | Ein Format laden, das nicht auf der Liste steht, statt das Buch zu überspringen |
| Default profile | Das Profil, das gilt, wenn nichts Spezifischeres greift |

Ein Profil ist das Standardprofil. Ein Buch nutzt, in dieser Reihenfolge, sein eigenes Profil, das Profil seiner primären Serie, das Profil seines primären Autors und dann das Standardprofil. Ein Profil, das in Benutzung ist, lässt sich nicht löschen.

Eine neue Kopie ersetzt deine nur, wenn das Profil Upgrades erlaubt, die neue Stufe auf der Leiter steht und aktiviert ist, das Buch unter seinem Cutoff liegt und die neue Stufe echt höher steht.

Wenn du Sonarr kennst: Das ist ein Qualitätsprofil, bei dem die Qualitäten Audioformate und Dateiaufteilung sind statt Auflösungen. Custom Formats gibt es nicht. [Release-Profile](#release-profile) decken Ähnliches ab.

Stufen nach Bitrate oder Größe gibt es nicht: Qualität heißt nur Format und Dateiaufteilung. Bei einem Release nimmt ABM das Format vom Indexer oder aus dem Titel und schätzt die Aufteilung anhand des Titels (eine M4B ohne Teil- oder Tracknummern zählt als einzelne Datei), und prüft sie nach dem Import der Dateien noch einmal. Die **Preferred Quality** in den [Audible-Einstellungen](/de/settings/audible/) ist etwas anderes: die Qualität, in der Audible-Downloads kommen.

## Delay-Profile

Ein Delay-Profil hält ein Release vor dem Laden zurück, damit ein besseres Release Zeit hat, aufzutauchen.

| Einstellung | Bedeutung |
|---|---|
| Enable Usenet / Enable Torrent | Grabs über dieses Protokoll erlauben |
| Usenet Delay / Torrent Delay | Minuten, die vor dem Laden eines Releases dieses Protokolls gewartet werden |
| Preferred Protocol | Welches bevorzugt wird, wenn beide einen Treffer finden |
| Bypass if Highest Quality | Die Wartezeit überspringen, wenn ein Release den Cutoff des Profils schon erreicht |
| Tags | Das Profil gilt nur für Einträge mit einem passenden Tag |

Delay-Profile werden als Tabelle angezeigt, wie in Sonarr.

## Release-Profile

Ein Release-Profil legt zusätzliche Regeln über die Qualität.

| Feld | Bedeutung |
|---|---|
| Enable Profile | An oder aus |
| Must Contain | Das Release muss mindestens einen Begriff enthalten (Groß- und Kleinschreibung egal) |
| Must Not Contain | Ein Release mit einem dieser Begriffe wird abgelehnt |
| Preferred | Begriffe, die ein Release höher oder niedriger bewerten. Schreib `/regex/`, um einen regulären Ausdruck zu nutzen |
| Narration language | Auf eine Sprache beschränken |
| Indexer | Für einen bestimmten Indexer oder für alle |
| Tags | Nur für Einträge mit einem passenden Tag |

Release-Profile werden als Tabelle angezeigt.

## Stolperfallen

- Profile löschen nie Dateien. Sie entscheiden, was geladen wird und was als Upgrade zählt.
- Tags an einem Delay- oder Release-Profil beschränken es auf Bücher, die einen dieser Tags tragen.
