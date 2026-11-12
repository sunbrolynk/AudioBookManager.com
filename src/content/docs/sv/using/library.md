---
title: Bibliotek
description: Böcker, författare och serier, och hur ABM håller koll på deras status.
---

Menyn **Library** har tre listor: **Books**, **Series** och **Authors**. **Add New** och **Library Import** fyller dem. **Audible Library** och **Conversions** har egna sidor.

## Böcker

Varje bok är en översiktsrad, en affisch eller en tabellrad (vyväxlaren finns i verktygsfältet). En bok har en status:

- **Wanted**: bevakad, inga filer än. ABM söker efter den.
- **Downloaded**: filerna finns på disken.
- **Missing Files**: boken har laddats ner, men filerna ligger inte längre där ABM väntar sig.
- **Unmonitored**: ABM låter den vara.

Öppna en bok för att se dess detaljsida: filer, metadata, historik, kvaliteten som ABM har mätt, och åtgärder som Refresh & Scan och redigeringsdialogen (se nedan). Se [Sidecar-filer](/sv/using/sidecars/).

Detaljsidan kan också skriva en enskild fil (OPF, NFO eller metadata.json), ljudtaggarna, det inbäddade omslaget eller **Write All**. På mobilen finns de i Actions-bladet under **Write to folder and files**.

När en sidas verktygsfält är för smalt på datorn flyttas knapparna som inte får plats till en **More**-meny i slutet av gruppen. Sortering, filter och vyer ligger alltid kvar i fältet.

Om du kan Sonarr: en bok är ett avsnitt, en serie är säsong och serie i ett, och en författare är ett sätt att gruppera båda. Skillnaden är att en bok kan höra till flera serier, och ABM använder den primära (den lägsta platsen) när den måste välja.

## Serier

**Library > Series** listar alla serier med antal ägda, önskade och med saknade filer, som Overview eller Posters. En seriesida visar hela katalogen, även böcker du inte äger. Filtrera den på All, In Library eller Not in Library. **Add Remaining** eller **Select to Add** tar in de saknade böckerna som önskade, och **Refresh Series** hämtar katalogen igen. **Monitor New Books** (All eller None) avgör om böcker som kommer ut senare läggs till som önskade. Se [Seriebevakning](/sv/using/series-tracking/).

## Författare

**Library > Authors** listar författare, som Overview eller Posters. En författarsida visar författarens katalog grupperad per serie, med antal nedladdade och totalt för varje serie, plus kvalitetsprofil, genrer och betyg. **Refresh Catalog** hämtar den igen och **Search Author** söker efter författarens önskade böcker. **Monitor New Books** fungerar likadant som för en serie, och en författare börjar på None.

Att ta bort en serie eller författare vägras så länge den fortfarande har böcker i biblioteket. Ta bort böckerna först.

## Arv av kvalitetsprofil

En boks kvalitetsprofil kommer, i den här ordningen, från: dess egen åsidosättning, dess primära serie, dess primära författare och sist standardprofilen. Se [Profiler](/sv/settings/profiles/).

## Redigeringsdialogen

Redigeringsdialogen på en bok ändrar ABM:s egna inställningar för den, inte dess metadata:

- **Monitored**
- **Quality Profile** (No Change när du redigerar flera)
- **Path**, för en bok (med en knapp för att räkna om den), eller **Root Folder** för ett urval
- **Tags**
- **Audiobookshelf**: rutan **Write All** kryssar i alla rutor nedan, så en enda sparning skriver alla filer som Audiobookshelf läser
- **Write to Directories**: cover.jpg, desc.txt, reader.txt, en OPF, en NFO och metadata.json. OPF och NFO får namn efter bokens första ljudfil (till exempel `Dune.opf`), eller efter boken om det inte finns något ljud
- **Write to Audio Files**: **Write audio tags** och **Embed cover art**, som skriver omslaget i ljudfilerna

Samma dialog öppnas för serier och författare och gäller då för var och en av deras böcker. Skrivalternativen körs när du sparar. För varje bok skrivs först mappfilerna, sedan taggarna, sedan det inbäddade omslaget. En fil som boken inte har något till (ingen beskrivning, ingen uppläsare, inget omslag) hoppas över och räknas inte som ett fel. För en bok eller ett urval av böcker ser du en varning när du sparar. För en serie eller en författare hoppas den över tyst. För en serie eller en författare listar uppgiftens logg varje överhoppad eller misslyckad filskrivning.

## Taggar

Böcker, författare och serier kan ha taggar. Taggar styr indexerare, notiser, importlistor och profiler, och filtrerar kalenderflödet. Se [Taggar](/sv/settings/tags/).

## Markering

Markera rader för att göra något med flera på en gång: bevaka, söka, tagga, döpa om, ta bort. På mobilen, se [Använda mobilen](/sv/phone/).
