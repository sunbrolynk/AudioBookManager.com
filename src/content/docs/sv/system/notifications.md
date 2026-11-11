---
title: Aviseringar
description: Klockan i sidhuvudet och panelen under den.
---

Klockan i sidhuvudet på datorn är där ABM berättar vad som hänt och vad som behöver dig. Klicka på den för att öppna aviseringspanelen. På mobilen finns ingen klocka än.

## Klockan

- Ett nummer på klockan är hur många aviseringar som är olästa. Över 99 visas 99+. När någon oläst är ett fel blir numret rött.
- En ring runt klockan är pågående arbete. När ABM vet hur långt det kommit fylls ringen till medelvärdet av de pågående posterna. När det inte vet snurrar ringen bara.
- En ny avisering får klockan att blinka till i färgen för sin nivå. Med minskad rörelse påslagen i ditt system hoppas det blinkandet över.
- Om webbläsaren tappar sin liveanslutning till ABM i mer än 10 sekunder blir klockan en överstruken klocka med en streckad ring. Den kommer tillbaka när anslutningen gör det.

Klockans tillgängliga namn läser upp samma saker: antalet olästa, hur många poster som körs och deras procent, och om den är offline.

## Panelen

Uppifrån och ned:

- **Needs attention** visas bara när något är öppet. Det är saker som blir kvar tills de är lösta, som en bok vars nedladdning misslyckades eller en ny ABM-version. Var och en har en knapp: **Search again** köar en sökning efter boken och **What's new** öppnar sidan Updates. Andra öppnar sidan de gäller, eller uppgiften när den kan återupptas. **x** på en rad avfärdar den.
- **Running** listar arbete som pågår just nu: uppgifter, nedladdningar och konverteringar, med förlopp och återstående tid där det är känt. Klicka på en rad för att gå dit.
- **Recent** visar de nyaste aviseringarna först, med antalet olästa. Ett klick öppnar det den gäller och markerar den som läst. En rad har också knappar för att markera den som läst eller oläst och för att ta bort den.
- **Load older** visar mer av historiken. När det inte finns något äldre säger panelen det.

När alla tre är tomma säger panelen att du är ikapp.

Sidfoten har **Mark all read** och en länk till [Activity Log](/sv/system/activity-log/). Menyn bredvid panelens rubrik har **Clear all**, som frågar först. Den tar bort alla aviseringar utom de som fortfarande behöver uppmärksamhet. De blir kvar tills du löser eller avfärdar dem.

## Vad som inte registreras

En avisering kan komma från en bakgrundsuppgift, en nedladdning eller en konvertering, eller från något du gjorde i webbläsaren som misslyckades. Panelens egna kontroller är undantaget. Om att markera som läst, ta bort, avfärda, rensa eller ladda äldre misslyckas visar panelen felet bredvid den kontrollen och lägger inte till någon avisering om det. Annars skulle en trasig inkorg fylla inkorgen.

## Resultat vid kontrollen

Åtgärder på Library, Book Detail, Calendar, Authors och Series och omslagsåtgärderna visar sitt resultat som en kort rad vid kontrollen du använde. En vanlig lyckad rad försvinner av sig själv efter ett par sekunder. Ett fel eller en varning blir kvar till din nästa åtgärd på den kontrollen. Fel registreras också i klockan, så du hittar dem när raden är borta.

En bok, författare eller serie som sparas men vars catalog fill inte startar registrerar varningen "Catalog fill not started". En add all där några böcker misslyckas registrerar "Some books were not added" med orsakerna.

## Lagringstid

Gamla aviseringar tas bort av den dagliga logrensningen, som standard efter **30 dagar**. Ställ in det med **Notifications Retention** på sidan [Allmänt](/sv/settings/general/), eller `inbox_retention_days` i [API](/sv/system/api/). 0 behåller dem för alltid. Aviseringar som fortfarande behöver uppmärksamhet tas inte bort förrän du löser dem. Rensningen körs en gång om dagen vid rensningstiden (03:00 som standard) och gör inget när **Automatic Cleanup** är av. Notisen längst ned i panelen visar aktuellt antal dagar och döljs när lagringstiden är 0.

## Skillnaden mot Activity Log

Aviseringar är det du får veta, och du kan rensa dem. [Activity Log](/sv/system/activity-log/) är den permanenta uppteckningen av vad som hänt, och att rensa klockan rör den inte.
