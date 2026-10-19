---
title: Feilsøking
description: Løsninger på problemene du mest sannsynlig støter på.
---

## Filer etter en avbrutt import (.abmstage)

En import legger først hver fil klar ved siden av det endelige navnet, og bytter dem inn når alle har kommet. Hvis noe feiler, legger ABM tilbake det den flyttet. Hvis den ikke får lagt tilbake en del, blir den delen liggende i mappen til boka som en skjult fil som slutter på `.abmstage`. Den kan være den eneste kopien, så ABM beholder den, og feilmeldingen oppgir navnet.

Så lenge det ligger en `.abmstage`-fil i mappen til en bok, stopper importer til den mappen med:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Slik henter du dem tilbake:

1. Finn `.abmstage`-fila som står i feilmeldingen.
2. Flytt den tilbake til nedlastingen, eller inn i mappen til boka under det ekte navnet. Eller slett den hvis du ikke trenger den.
3. Prøv importen på nytt.

## Alle blir bedt om å logge inn bak en omvendt proxy

Uten `TRUSTED_PROXIES` blir en forespørsel med videresendingsheadere aldri behandlet som lokal, så den må logge inn. Det er med vilje.

1. Sett `TRUSTED_PROXIES` til adressen til proxyen din, for eksempel `172.20.0.5`. En proxy på samme vert trenger `127.0.0.1`.
2. Få proxyen til å sende `X-Forwarded-For` eller `X-Real-IP`. nginx proxy manager, Traefik og Caddy gjør det som standard.
3. Start ABM på nytt.

Apploggen sier hva det er:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": legg proxyen til i `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": sett opp proxyen til å sende `X-Forwarded-For` eller `X-Real-IP`.

Det motsatte tilfellet: en proxy som ikke sender videresendingsheadere, ser ut som en lokal klient, så alt som går gjennom den, slipper innlogging. Sett Authentication Required til Enabled.

## Endringer blir avvist fra nettleseren

Sjekk at proxyen sender den opprinnelige `Host`-headeren videre, eller sender `X-Forwarded-Host`. Se [Konfigurasjon](/nb/configuration/#omvendt-proxy).

## Cover forsvinner, eller siden oppfører seg rart bak en proxy

Content-Security-Policy-headeren tillater bare coverbilder over HTTPS. Sjekk nettleserkonsollen for brudd. Server cover over HTTPS, eller sett `SECURITY_HEADERS_CSP_ENABLED=false`.

## En stor forespørsel gir 413

Øk `MAX_REQUEST_BODY_BYTES`. En omvendt proxy kan også ha en lavere grense og svare 413 selv.

## Metadatakilden er utilgjengelig

Å legge til, søke, oppdatere og Discover trenger metadatakilden. Meldingen oppgir den, for eksempel "The metadata source is unavailable". Årsaker: kilden er nede eller begrenser antall forespørsler, eller den utgående tilkoblingen din blokkerer den.

1. Sjekk **Settings > General > Proxy & VPN**, og at ruta er oppe.
2. Prøv igjen etter et minutt. En kilde som begrenser forespørsler, svarer 503 med et hint om å prøve igjen om 30 sekunder.
3. Du kan fortsatt legge til og importere bøker for hånd i mellomtiden.

Bakgrunnsoppgaver som treffer et brudd, feiler med grunnen og sender ett varsel per brudd.

## En oppdatering endret detaljene til en bok

Tittel, beskrivelse, forfattere, opplesere og lignende felt kommer fra metadatakilden, og en oppdatering bruker det kilden sier nå. ABM har ingen måte å redigere dem for hånd på. Det du styrer, er coveret (kan låses), hvilke filer som skrives, tagger, og om oppdateringer skriver sidefiler og tagger. Se [Dine metadata, din kontroll](/nb/metadata/control/).

## En bok viser Missing Files

Boka er lastet ned, men filene er ikke der ABM ser etter dem. Sjekk monteringen og rettighetene, og kjør så **Refresh & Scan**. En skanning lar en bok være i fred når mappen ikke kan leses, og oppgaven vises som Partial med grunnen.

## Importer stopper med "Files left by an interrupted import"

Se `.abmstage`-delen over.

## Nedlastinger blir ferdige, men blir aldri importert

Legg til en remote path mapping, eller sørg for at ABM og klienten ser mappen på samme sti. En undermappe som ikke kan leses, blokkerer hele nedlastingen til rettighetene er fikset. Se [Nedlastingsklienter](/nb/settings/download-clients/).

## Docker når ikke metadatakilden eller indeksererne

Sjekk DNS og innstillingen for utgående tilkobling før alt annet. I Docker virker en direkte tilkobling bare hvis containeren kommer seg ut på internett.

## Står du fortsatt fast?

Spør i [ABM-Discorden](https://discord.gg/qeJRrM6AZ), [opprett en issue](https://github.com/sunbrolynk/AudioBook-Manager/issues), eller send en e-post til [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
