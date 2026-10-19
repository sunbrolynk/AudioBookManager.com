---
title: Bibliotek
description: Bøger, forfattere og serier, og hvordan ABM holder styr på deres status.
---

Menuen **Library** har tre lister: **Books**, **Series** og **Authors**. **Add New** og **Library Import** fylder ting i dem. **Audible Library** og **Conversions** har deres egne sider.

## Bøger

Hver bog er en oversigtsrække, en plakat eller en tabellinje (visningsskiftet ligger i værktøjslinjen). En bog har en status:

- **Wanted**: overvåget, ingen filer endnu. ABM søger efter den.
- **Downloaded**: filerne ligger på disken.
- **Missing Files**: bogen er hentet, men dens filer ligger ikke længere der, hvor ABM forventer dem.
- **Unmonitored**: ABM lader den være.

Åbn en bog for at se dens detaljeside: filer, metadata, historik, den kvalitet, ABM har målt, og handlinger som Refresh & Scan og redigeringsdialogen (se nedenfor). Se [Sidecar-filer](/da/using/sidecars/).

Kender du Sonarr: en bog er en episode, en serie er sæson og serie i ét, og en forfatter er en måde at gruppere begge på. Forskellen er, at én bog kan høre til flere serier, og ABM bruger den primære (den laveste position), når den skal vælge.

## Serier

**Library > Series** viser alle serier med antal ejede, ønskede og med manglende filer, som Overview eller Posters. En serieside viser hele kataloget, også bøger, du ikke ejer. Filtrér den til All, In Library eller Not in Library. **Add Remaining** eller **Select to Add** henter de manglende bøger ind som ønskede, og **Refresh Series** henter kataloget igen. **Monitor New Books** (All eller None) afgør, om bøger, der udkommer senere, bliver tilføjet som ønskede. Se [Følg serier](/da/using/series-tracking/).

## Forfattere

**Library > Authors** viser forfattere, som Overview eller Posters. En forfatterside viser deres katalog grupperet efter serie, med antal hentede og i alt for hver serie, plus deres kvalitetsprofil, genrer og bedømmelse. **Refresh Catalog** henter det igen, og **Search Author** søger efter deres ønskede bøger. **Monitor New Books** virker på samme måde som for en serie, og en forfatter starter på None.

Sletning af en serie eller forfatter bliver afvist, så længe den stadig har bøger i biblioteket. Fjern bøgerne først.

## Arv af kvalitetsprofil

En bogs kvalitetsprofil kommer, i denne rækkefølge, fra: dens egen tilsidesættelse, dens primære serie, dens primære forfatter og til sidst standardprofilen. Se [Profiler](/da/settings/profiles/).

## Redigeringsdialogen

Redigeringsdialogen på en bog ændrer ABM's egne indstillinger for den, ikke dens metadata:

- **Monitored**
- **Quality Profile** (No Change, når du redigerer flere)
- **Path** for én bog (med en knap til at beregne den igen), eller **Root Folder** for en markering
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt og en OPF (afkrydsningsfeltet hedder "metadata.opf"; filen er opkaldt efter bogens første lydfil, fx `Dune.opf`, eller `title.opf`, når der ikke er nogen lyd)
- **Write to Audio Files**: skriv metadata-tags

Den samme dialog åbner for serier og forfattere og gælder for hver af deres bøger. Skrivemulighederne kører, når du gemmer.

## Tags

Bøger, forfattere og serier kan have tags. Tags styrer indeksere, notifikationer, importlister og profiler og filtrerer kalenderfeedet. Se [Tags](/da/settings/tags/).

## Markering

Markér rækker for at handle på flere ad gangen: overvåg, søg, tag, omdøb, slet. På en telefon, se [Brug på telefonen](/da/phone/).
