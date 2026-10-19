---
title: Oppgaver
description: Bakgrunnsarbeid, tidsplaner og logger.
---

**System > Tasks** viser alt ABM gjør i bakgrunnen: bibliotekskanninger, oppdateringer, importer, søk, nedlastinger, synkroniseringer, sikkerhetskopier. Hver rad viser tilstanden (venter, kjører, fullført, feilet), fremdrift, resultat og en loggknapp.

- En oppgave som ble fullført med oppføringer i feillista, vises som **Partial**. Utvid den for å se hvert element som ble hoppet over, og hvorfor.
- En oppgave med et nytt forsøk på vei blir stående som ventende til forsøkene er brukt opp. Forsøksnummeret vises.
- **Clear completed tasks older than 24 hours** rydder i lista. Gamle oppgaver ryddes også automatisk (30 dager som standard).
- Planlagte kjøringer som ikke gjorde noe, vises her, men ikke i [Aktivitetsloggen](/nb/system/activity-log/).

## Fallgruver

- Konverteringer har sin egen kø. Se [Konverteringer](/nb/using/conversions/).
- Nedlastingsrundene (nytt forsøk på ventende hentinger og sjekk av fullførte nedlastinger) legges bare i kø så lenge minst én nedlastingsklient er slått på, så siden ikke fylles opp med tomme kjøringer.
