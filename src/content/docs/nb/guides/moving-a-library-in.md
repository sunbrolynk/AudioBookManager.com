---
title: Flytte inn et bibliotek
description: Få en eksisterende samling trygt inn i ABM.
---

## Før du starter

1. Ta sikkerhetskopi av samlingen. Library Import kopierer som standard, men planlegg for feil.
2. Sett opp en rotmappe og en kvalitetsprofil, og sjekk at metadatakilden er tilgjengelig.
3. Bestem deg for kopiering, flytting eller hardlenke. Kopiering er tryggest. Hardlenker sparer plass hvis biblioteket ligger på samme filsystem som kilden. Se [Mediehåndtering](/nb/settings/media-management/).

## Trinnene

1. **Library > Library Import**, skann mappen.
2. Les gjennom lista. Treff viser en prosent. Fiks rader med **Needs attention** og **Unmatched** med **Find a match**, eller slå sammen rader som er én bok fordelt på flere mapper.
3. Sjekk cover og ekstrafiler per mappe bare hvis du vil overstyre standardene.
4. Velg radene og legg dem til. Det holder med to klikk hvis du godtar standardene.
5. Følg med på oppgaven. Sammendraget sier hvor mange filer som ble kopiert i stedet for hardlenket, og hva som feilet.

## Hvis du vil at ABM skal styre kildemappen

Legg den til som rotmappe i stedet, og la ABM skanne den. Da blir filene liggende der de er, og bøkene får status ut fra det som ligger på disken.

## Fallgruver

- En bok som allerede er i biblioteket, vises som det. Avslå duplikatet med svaret som beholder biblioteket i stedet for å importere den to ganger.
- Avslår du en mappe uten lyd, fjernes bare det den raden eier, og det havner i papirkurven hvis den er slått på.
- En ASIN som står i en beskrivelse, er et hint og ikke et treff, med mindre tittelen også stemmer.
- Etter importen bør du oppdatere for å hente inn ferske metadata, og slå på skriving av sidefiler hvis du vil at Audiobookshelf skal se valgene ABM har gjort. Se [Sidefiler](/nb/using/sidecars/).
