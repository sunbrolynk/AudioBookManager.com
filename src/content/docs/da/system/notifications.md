---
title: Notifikationer
description: Klokken i headeren og panelet under den.
---

Klokken i headeren på computeren er der, hvor ABM fortæller dig, hvad der er sket, og hvad der kræver dig. Klik på den for at åbne notifikationspanelet. Der er endnu ingen klokke på telefonen.

## Klokken

- Et tal på klokken er, hvor mange notifikationer der er ulæste. Over 99 vises 99+. Når en ulæst er en fejl, bliver tallet rødt.
- En ring rundt om klokken er arbejde i gang. Når ABM ved, hvor langt det er nået, fyldes ringen til gennemsnittet af de kørende elementer. Når det ikke ved det, drejer ringen bare rundt.
- En ny notifikation får klokken til at blinke kort i farven for sit niveau. Er reduceret bevægelse slået til i dit system, springes blinket over.
- Mister browseren sin liveforbindelse til ABM i mere end 10 sekunder, bliver klokken til en overstreget klokke med en stiplet ring. Den kommer tilbage, når forbindelsen er tilbage.

Klokkens tilgængelige navn læser det samme op: antallet af ulæste, hvor mange elementer der kører og deres procent, og om den er offline.

## Panelet

Oppefra og ned:

- **Needs attention** vises kun, når noget er åbent. Det er ting, der bliver, indtil de er løst, som en bog, hvis download mislykkedes, eller en ny ABM-version. Hver har én knap: **Search again** sætter en søgning efter bogen i kø, og **What's new** åbner siden Updates. Andre åbner den side, de handler om, eller opgaven, hvis den kan genoptages. **x** på en række afviser den.
- **Running** viser arbejde, der kører lige nu: opgaver, downloads og konverteringer, med fremdrift og resterende tid, hvor det kendes. Klik på en række for at gå dertil.
- **Recent** viser de nyeste notifikationer først, med antallet af ulæste. Et klik åbner det, den handler om, og markerer den som læst. En række har også knapper til at markere den som læst eller ulæst og til at slette den.
- **Load older** viser mere af historikken. Når der ikke er noget ældre, siger panelet det.

Når alle tre er tomme, siger panelet, at du er ajour.

Sidefoden har **Mark all read** og et link til [aktivitetsloggen](/da/system/activity-log/). Menuen ved siden af panelets titel har **Clear all**, som spørger først. Den fjerner alle notifikationer undtagen dem, der stadig kræver opmærksomhed. De bliver, indtil du løser eller afviser dem.

## Hvad der ikke registreres

En notifikation kan komme fra en baggrundsopgave, en download eller en konvertering, eller fra noget, du gjorde i browseren, som mislykkedes. Panelets egne kontroller er undtagelsen. Mislykkes det at markere som læst, slette, afvise, rydde eller indlæse ældre, viser panelet fejlen ved siden af den kontrol og tilføjer ingen notifikation om det. Ellers ville en ødelagt indbakke fylde indbakken.

## Resultater ved kontrollen

Handlinger på Library, Book Detail, Calendar, Authors og Series og cover-handlingerne viser deres resultat som en kort linje ved den kontrol, du brugte. En almindelig succeslinje forsvinder af sig selv efter et par sekunder. En fejl eller en advarsel bliver, til din næste handling på den kontrol. Fejl registreres også i klokken, så du kan finde dem, efter linjen er væk.

En bog, forfatter eller serie, der gemmes, men hvis catalog fill ikke starter, registrerer advarslen "Catalog fill not started". En add all, hvor nogle bøger mislykkes, registrerer "Some books were not added" med årsagerne.

## Opbevaring

Gamle notifikationer fjernes af den daglige logoprydning, som standard efter **30 dage**. Indstil det med **Notifications Retention** på siden [General](/da/settings/general/), eller `inbox_retention_days` i [API](/da/system/api/). 0 beholder dem for altid. Notifikationer, der stadig kræver opmærksomhed, fjernes ikke, før du løser dem. Oprydningen kører én gang om dagen på oprydningstidspunktet (som standard 03:00) og gør ingenting, når **Automatic Cleanup** er slået fra. Noten nederst i panelet viser det aktuelle antal dage og er skjult, når opbevaringen er 0.

## Forskellen fra aktivitetsloggen

Notifikationer er det, du får at vide, og du kan rydde dem. [Aktivitetsloggen](/da/system/activity-log/) er den permanente registrering af, hvad der er sket, og at rydde klokken rører den ikke.
