---
title: Aktivitetslog og hændelser
description: Oversigten over, hvad der er sket, og hvordan den adskiller sig fra Logs.
---

ABM holder tre slags optegnelser.

| Hvor | Hvad det er |
|---|---|
| **System > Events** og **System > Activity Log** | Aktivitetsloggen: en liste i databasen over ting, der er sket. Events er visningen filtreret efter alvorlighed. Activity Log (med titlen Activity History) filtrerer efter kategori, søger i beskeden og viser tilstanden før og efter |
| **System > Log Files** | Tekstlogfiler med alle detaljer. Se [Logs](/da/system/logs/) |
| **Activity > History** | Kun downloadhistorik. Se [Aktivitet](/da/using/activity/) |

## Hvad bliver registreret

Færdige baggrundsopgaver (én opsummerende række hver), manuelle ændringer af klienter, indeksere, profiler, tags, notifikationer, rodmapper og så videre, hentninger (hvem der startede dem), konverteringer, fejl ved Audible-downloads, backups, logins og mislykkede logins, og et opstartstrin, der fejlede.

Kategorier: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security og System.

## Privatliv

Poster indeholder aldrig URL'er, værter, brugernavne, adgangskoder, nøgler, tokens eller rå fejltekst fra en klient eller service. Objekter bliver nævnt med det navn, du har givet dem. Når indstillinger bliver gemt, står der, hvilke indstillinger der blev ændret, ikke deres værdier. Logins gemmer kun IP-adressen. Mislykkede logins fra samme adresse inden for 15 minutter bliver samlet i én række med et antal forsøg.

## Stille med vilje

En planlagt kørsel, der ikke havde noget at lave, skriver ingenting. En gentagelse af samme fejl skriver ingenting, men det gør en genopretning. En manuel kørsel bliver altid registreret.

## Opbevaring

**Activity Log Retention** i General sletter poster efter 90 dage som standard. 0 beholder dem. Logfiler har deres egen opbevaring (30 dage).

## Se loggen (View log)

:::caution[Kommer i en senere udgivelse]
View log-links fra poster er ikke med i en udgivet version endnu.
:::

Poster linker til den log, de kom fra, og åbner den på den linje. Er loggen væk, siger posten "Log no longer kept".
