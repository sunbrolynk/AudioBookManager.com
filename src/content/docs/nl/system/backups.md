---
title: Back-ups
description: Back-ups maken, exporteren en terugzetten.
---

**System > Backups** maakt back-ups en zet ze terug. **Backup Now** maakt er een. Schema's, bewaartermijn en exportdoelen staan onder [Algemeen](/nl/settings/general/).

## Wat er in een back-up zit

Een versleuteld archief met een consistente kopie van de database (`database.db`), de instellingen (`settings.json`) en een manifest. Neem `/config` ook mee in je eigen back-ups, voor de covers en het bestand met het app-secret.

## Terugzetten

Kies er een uit de lijst, of upload een back-upbestand (tot 500 MiB). Er wordt eerst een kopie van de live database opgeslagen. Terugzetten kun je niet ongedaan maken.

Standaard haalt een herstel de **beveiligingsinstellingen** (authenticatiemodus, inloggegevens, vertrouwde netwerken) niet terug. Je huidige blijven staan en het resultaat zegt dat. De pagina heeft hier geen schakelaar voor. Alleen een API-aanroep naar `restore-upload` met `restore_security_settings=true` brengt ze terug, zodat een geüpload archief nooit de aanmelding kan uitschakelen door alleen hersteld te worden.

Is de back-up gemaakt met een oudere versie, herstart dan de container na het terugzetten zodat de migratie draait.

Een back-up wordt geweigerd, zonder dat er iets verandert, als er onverwachte onderdelen in zitten, als het geen geldige SQLite-database is, of als het een oude back-up is van vóór de overstap naar SQLite.

## Exportdoelen

SFTP, SCP, FTPS, FTP, S3 of een rclone-remote. Een doel dat op **Auto** staat, krijgt elke back-up automatisch. Namen van rclone-remotes mogen letters, cijfers, `_`, `.` en `-` bevatten.

## Valkuilen

- De Docker-image en je compose-bestand zitten niet in de back-up. Bewaar het compose-bestand.
- Heb je `APP_SECRET` gezet, maak daar dan apart een back-up van. Zonder kunnen opgeslagen inloggegevens na een restore op een andere host niet ontsleuteld worden.
