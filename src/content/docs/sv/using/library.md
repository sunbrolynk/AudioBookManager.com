---
title: Bibliotek
description: Böcker, författare och serier, och hur ABM håller koll på deras status.
---

Menyn **Library** har tre listor: **Books**, **Series** och **Authors**. **Add New** och **Library Import** fyller dem. **Audible Library** och **Conversions** har egna sidor.

## Böcker

Varje bok är en rad, en affisch eller en tabellrad (vyväxlaren finns i verktygsfältet). En bok har en status:

- **Wanted**: bevakad, inga filer än. ABM söker efter den.
- **Downloaded**: filerna finns på disken.
- **Missing Files**: boken har laddats ner, men filerna ligger inte längre där ABM väntar sig.
- **Unmonitored**: ABM låter den vara.

Öppna en bok för att se dess detaljsida: filer, metadata, historik, kvaliteten som ABM har mätt, och åtgärder som Refresh & Scan och redigeringsdialogen (se nedan). Se [Sidecar-filer](/sv/using/sidecars/).

Om du kan Sonarr: en bok är ett avsnitt, en serie är säsong och serie i ett, och en författare är ett sätt att gruppera båda. Skillnaden är att en bok kan höra till flera serier, och ABM använder den primära (den lägsta platsen) när den måste välja.

## Serier och författare

Listorna Series och Authors visar antal ägda, önskade och med saknade filer. Öppna en för att se katalogen, som även innehåller böcker du inte äger. Därifrån kan du lägga till de saknade böckerna. Se [Seriebevakning](/sv/using/series-tracking/).

Att ta bort en serie eller författare vägras så länge den fortfarande har böcker i biblioteket. Ta bort böckerna först.

## Arv av kvalitetsprofil

En boks kvalitetsprofil kommer, i den här ordningen, från: dess egen åsidosättning, dess primära serie, dess primära författare och sist standardprofilen. Se [Profiler](/sv/settings/profiles/).

## Redigeringsdialogen

Redigeringsdialogen på en bok ändrar ABM:s egna inställningar för den, inte dess metadata:

- **Monitored**
- **Quality Profile** (No Change när du redigerar flera)
- **Path**, för en bok (med en knapp för att räkna om den), eller **Root Folder** för ett urval
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt och en OPF (kryssrutan säger "metadata.opf"; filen döps efter bokens första ljudfil, till exempel `Dune.opf`, eller `title.opf` när det inte finns något ljud)
- **Write to Audio Files**: skriv metadatataggar

Samma dialog öppnas för serier och författare och gäller då för var och en av deras böcker. Skrivalternativen körs när du sparar.

## Taggar

Böcker, författare och serier kan ha taggar. Taggar styr indexerare, notiser, importlistor och profiler, och filtrerar kalenderflödet. Se [Taggar](/sv/settings/tags/).

## Markering

Markera rader för att göra något med flera på en gång: bevaka, söka, tagga, döpa om, ta bort. På mobilen, se [Använda mobilen](/sv/phone/).
