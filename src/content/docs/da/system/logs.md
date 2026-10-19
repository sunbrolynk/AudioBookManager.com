---
title: Logs
description: Logfiler, niveauer, opbevaring og rotation.
---

**System > Log Files** viser ABM's tekstlogs. Åbn en for at læse den, hente den, slette den, eller ryd dem allesammen. Logs dukker op, efterhånden som operationer kører.

- Opgaver og konverteringer skriver deres egen log. Siden Tasks linker til hver af dem.
- Hovedloggen er `app.log`. Den bliver rullet ved opstart, mindst hver time og ved 10 MiB. Gamle filer bliver gemt i **Log File Retention** (30 dage som standard).
- En separat sikkerhedslog har én linje pr. loginforsøg til fail2ban og lignende værktøjer.
- Niveauer sættes under **Settings > General > Logging**.

## Sådan læser du et problem

Start fra den fejlede opgaves log-knap. Den viser operationen fra dens startlinje til dens slutblok. Hemmeligheder er fjernet fra teksten, men tjek alligevel, før du indsætter en log offentligt.

## Faldgruber

- SQL Logging og Debug-niveauerne er meget snakkesalige. Slå dem fra, når du er færdig.
- Sletter du en log, bliver aktivitetsposter, der linker til den, liggende. De siger "Log no longer kept".
