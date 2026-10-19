---
title: Logger
description: Loggfiler, nivåer, oppbevaring og rotasjon.
---

**System > Log Files** viser tekstloggene til ABM. Åpne en for å lese den, laste den ned, slette den, eller tøm alle. Logger dukker opp etter hvert som operasjoner kjører.

- Oppgaver og konverteringer skriver sin egen logg. Tasks-siden lenker til hver av dem.
- Hovedloggen er `app.log`. Den roteres ved oppstart, minst hver time og ved 10 MiB. Gamle filer beholdes i **Log File Retention** (30 dager som standard).
- En egen sikkerhetslogg har én linje per innloggingsforsøk, for fail2ban og lignende verktøy.
- Nivåene settes under **Settings > General > Logging**.

## Lese et problem

Start fra loggknappen på oppgaven som feilet. Den viser operasjonen fra startlinja til sluttblokken. Hemmeligheter er fjernet fra teksten, men sjekk likevel før du limer inn en logg offentlig.

## Fallgruver

- SQL Logging og Debug-nivåene er pratsomme. Slå dem av når du er ferdig.
- Sletter du en logg, blir aktivitetsoppføringer som lenker til den, liggende. Der står det "Log no longer kept".
