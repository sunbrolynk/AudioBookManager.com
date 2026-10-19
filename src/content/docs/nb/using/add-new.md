---
title: Legg til ny
description: Søk etter en bok og legg den til som ønsket.
---

**Library > Add New** søker i Libex etter bøker og legger til dem du velger. Søket matcher tittel, forfatter, serie eller en ASIN.

## Hva det gjør å legge til

En bok du legger til, blir **Wanted** i rotmappen og kvalitetsprofilen du valgte, og ABM begynner å søke etter den ut fra overvåkingsinnstillingen. At en bok allerede er i biblioteket, oppdages bare på ASIN. En annen utgave av den samme tittelen har en annen ASIN.

## Søk etter forfatter og serie

:::caution[Kommer i neste versjon]
Søkemodusene Author og Series er ikke med i en utgitt versjon ennå.
:::

Søket får to moduser som finner selve forfatterne og seriene. De eldre bokmodusene får nye navn: "Books by author" og "Books in series". Legger du til en forfatter eller serie, bygges katalogen, og bøkene legges til som ønsket ut fra **Monitor**:

| Monitor | Legger til |
|---|---|
| All | Alle bøker, også de som ikke er utgitt ennå |
| Future | Bare bøker som kommer ut fra nå av |
| Missing (standard) | Bøker du ikke har |
| None | Bare katalogen |

Du velger også rotmappe, kvalitetsprofil, og om bøker som dukker opp senere, også skal legges til. Det er på som standard for en serie og av for en forfatter. En forfatter eller serie som allerede er i biblioteket ditt, viser "In Library" med handlingen **Add missing books**.

Selve tilleggingen kjører som en bakgrunnsoppgave med en fremdriftsmelding.

## Hvis søket ikke gir noe

Et søk som ikke får svar fra metadatakilden, feiler med en feilmelding i stedet for en tom liste. Se [Feilsøking](/nb/troubleshooting/#metadatakilden-er-utilgjengelig).
