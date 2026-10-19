---
title: Uppgifter
description: Bakgrundsarbete, scheman och loggar.
---

**System > Tasks** listar allt som ABM gör i bakgrunden: biblioteksskanningar, uppdateringar, importer, sökningar, nedladdningar, synkar, säkerhetskopior. Varje rad visar sitt tillstånd (väntar, körs, klar, misslyckad), förlopp, resultat och en loggknapp.

- En uppgift som blev klar men har poster i sin fellista visas som **Partial**. Fäll ut den för att se varje överhoppad post och orsaken.
- En uppgift som har ett nytt försök på väg står kvar som väntande tills försöken tar slut. Försöksnumret visas.
- **Clear completed tasks older than 24 hours** städar listan. Gamla uppgifter rensas också automatiskt (30 dagar som standard).
- Schemalagda körningar som inte gjorde något syns här men inte i [Activity Log](/sv/system/activity-log/).

## Fallgropar

- Konverteringar är en separat kö. Se [Konverteringar](/sv/using/conversions/).
- Nedladdningssvepen (nytt försök för väntande hämtningar och kontroll av färdiga nedladdningar) köas bara så länge minst en nedladdningsklient är aktiverad, så att sidan inte fylls med tomma körningar.
