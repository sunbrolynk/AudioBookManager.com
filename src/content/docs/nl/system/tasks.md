---
title: Taken
description: Werk op de achtergrond, schema's en logs.
---

**System > Tasks** toont alles wat ABM op de achtergrond doet: bibliotheekscans, vernieuwingen, imports, zoekopdrachten, downloads, syncs, back-ups. Elke rij toont de toestand (wachtend, bezig, afgerond, mislukt), de voortgang, het resultaat en een logknop.

- Een taak die afgerond is met regels in de foutenlijst, staat op **Partial**. Klap hem open voor elk overgeslagen item en de reden.
- Een taak waarvoor nog een nieuwe poging komt, blijft op wachtend staan tot de pogingen op zijn. Het nummer van de poging staat erbij.
- **Clear completed tasks older than 24 hours** ruimt de lijst op. Oude taken worden ook automatisch opgeruimd (standaard na 30 dagen).
- Geplande runs die niks gedaan hebben, verschijnen hier maar niet in het [Activity Log](/nl/system/activity-log/).

## Valkuilen

- Conversies hebben een eigen wachtrij. Zie [Conversies](/nl/using/conversions/).
- De downloadrondes (het opnieuw proberen van openstaande grabs en het controleren van afgeronde downloads) komen alleen in de wachtrij zolang er minstens één downloadclient aanstaat, zodat de pagina niet vol lege runs komt te staan.
