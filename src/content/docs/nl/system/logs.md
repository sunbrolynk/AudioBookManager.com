---
title: Logs
description: Logbestanden, niveaus, bewaartermijn en rotatie.
---

**System > Log Files** toont de tekstlogs van ABM. Open er een om hem te lezen, te downloaden of te verwijderen, of wis ze allemaal. Logs verschijnen zodra er operaties draaien.

- Taken en conversies schrijven hun eigen log. De pagina Tasks linkt naar elk daarvan.
- Het hoofdlog is `app.log`. Dat roteert bij het opstarten, minstens elk uur en bij 10 MiB. Oude bestanden worden bewaard volgens **Log File Retention** (standaard 30 dagen).
- Een apart beveiligingslog bevat één regel per inlogpoging, voor fail2ban en vergelijkbare tools.
- Niveaus stel je in onder **Settings > General > Logging**.

## Een probleem uitpluizen

Begin bij de logknop van de mislukte taak. Die toont de operatie van de beginregel tot het afsluitende blok. Geheimen worden uit de tekst gehaald, maar kijk het toch even na voordat je een log publiek plakt.

## Valkuilen

- SQL Logging en het niveau Debug zijn heel uitgebreid. Zet ze uit als je klaar bent.
- Verwijder je een log, dan blijven de activiteitsregels die ernaar linken staan. Daar staat dan "Log no longer kept".
