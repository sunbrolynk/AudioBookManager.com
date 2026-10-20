---
title: Tilføj ny
description: Søg efter en bog, og tilføj den som ønsket.
---

**Library > Add New** søger i Libex efter bøger og tilføjer dem, du vælger. Søgningen matcher titel, forfatter, serie eller en ASIN.

## Hvad tilføjelse gør

En tilføjet bog bliver **Wanted** i den rodmappe og kvalitetsprofil, du har valgt, og ABM begynder at søge efter den ud fra overvågningsindstillingen. Om en bog allerede er i biblioteket, bliver kun afgjort ud fra ASIN. En anden udgave af samme titel er en anden ASIN.

## Søgning efter forfatter og serie

Søgningen har tilstande for Title, Author, Series, Books by author, Books in series og ASIN. Author og Series finder forfattere og serier selv; Books by author og Books in series finder bøger. Når du tilføjer en forfatter eller serie, bygges kataloget op, og bøgerne tilføjes som ønskede efter **Monitor**:

| Monitor | Tilføjer |
|---|---|
| All | Hver eneste bog, også dem, der ikke er udkommet endnu |
| Future | Kun bøger, der udkommer fra nu af |
| Missing (standard) | Bøger, du ikke ejer |
| None | Kun kataloget |

Du vælger også rodmappen, kvalitetsprofilen, og om bøger, der dukker op senere, også skal tilføjes. Det er slået til som standard for en serie og fra for en forfatter. En forfatter eller serie, der allerede er i dit bibliotek, viser "In Library" med handlingen **Add missing books**.

Tilføjelsen kører som en baggrundsopgave med en toast, der viser fremskridtet.

## Hvis søgningen ikke giver noget

En søgning, der ikke får svar fra metadatakilden, fejler med en fejlbesked i stedet for en tom liste. Se [Fejlfinding](/da/troubleshooting/#metadatakilden-er-ikke-tilgængelig).
