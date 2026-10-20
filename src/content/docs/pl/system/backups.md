---
title: Kopie zapasowe
description: Twórz kopie, eksportuj i przywracaj ABM.
---

**System > Backups** tworzy i przywraca kopie zapasowe. **Backup Now** robi jedną od razu. Harmonogramy, przechowywanie i cele eksportu są w [General](/pl/settings/general/).

## Co jest w kopii

Zaszyfrowane archiwum ze spójną kopią bazy danych (`database.db`), ustawień (`settings.json`) i manifestu. Do swoich własnych kopii dorzuć też `/config`, żeby mieć okładki i plik z sekretem aplikacji.

## Przywracanie

Wybierz kopię z listy albo wgraj plik kopii (do 500 MiB). Najpierw zapisywana jest kopia aktualnej bazy. Przywrócenia nie da się cofnąć.

Domyślnie przywracanie nie przywraca **ustawień bezpieczeństwa** (tryb uwierzytelniania, dane logowania, zaufane sieci). Zostają twoje obecne, a wynik o tym informuje. Strona nie ma na to przełącznika. Przywraca je tylko wywołanie API `restore-upload` z `restore_security_settings=true`, więc przesłane archiwum nigdy nie wyłączy logowania samym przywróceniem.

Jeśli kopia powstała na starszej wersji, po przywróceniu zrestartuj kontener, żeby wykonała się migracja.

Kopia jest odrzucana, bez żadnych zmian, jeśli zawiera nieoczekiwane wpisy, nie jest prawidłową bazą SQLite albo to stara kopia sprzed przejścia na SQLite.

## Cele eksportu

SFTP, SCP, FTPS, FTP, S3 albo zdalny zasób rclone. Cel oznaczony jako **Auto** dostaje każdą kopię automatycznie. Nazwy zdalnych zasobów rclone mogą zawierać litery, cyfry, `_`, `.` i `-`.

## Pułapki

- Obrazu Dockera i twojego pliku compose nie ma w kopii. Trzymaj plik compose u siebie.
- Jeśli ustawiasz `APP_SECRET`, zrób jego kopię osobno. Bez niego zapisanych danych logowania nie da się odszyfrować po przywróceniu na innym hoście.
