---
title: Loggar
description: Loggfiler, nivåer, lagringstid och rotation.
---

**System > Log Files** listar ABM:s textloggar. Öppna en för att läsa den, ladda ner den, radera den, eller rensa alla. Loggar dyker upp när operationer körs.

- Uppgifter och konverteringar skriver sin egen logg. Sidan Tasks länkar till var och en.
- Huvudloggen är `app.log`. Den roteras vid uppstart, minst en gång i timmen och vid 10 MiB. Gamla filer sparas enligt **Log File Retention** (30 dagar som standard).
- En separat säkerhetslogg har en rad per inloggningsförsök för fail2ban och liknande verktyg.
- Nivåerna ställs in under **Settings > General > Logging**.

## Läsa ett problem

Börja med loggknappen på den misslyckade uppgiften. Den visar operationen från startraden till slutblocket. Hemligheter är bortrensade ur texten, men kolla ändå innan du klistrar in en logg offentligt.

## Fallgropar

- SQL Logging och nivån Debug är pratiga. Stäng av dem när du är klar.
- Att radera en logg lämnar kvar aktivitetsposter som länkar till den. De visar "Log no longer kept".
