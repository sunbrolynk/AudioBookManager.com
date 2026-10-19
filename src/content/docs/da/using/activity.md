---
title: Aktivitet
description: Køen, historikken og blokeringslisten.
---

## Kø (Queue)

Det, dine downloadklienter arbejder på. Handlingerne på en række omfatter **Grab now**, **Import Now**, **Manual Import** og **Retry Now**, og **Configure remote path mapping**, når en færdig download ligger på en sti, ABM ikke kan se.

Når du fjerner en række fra køen, følger det **Queue Page Remove Action** i downloadklientens indstillinger: afvis kun i ABM, fjern fra klienten og behold filerne, eller fjern fra klienten og slet filerne. Se [Downloadklienter](/da/settings/download-clients/).

## Historik (History)

Hentninger, importer, fejl og opgraderinger. En mislykket hentning fortæller, hvilke klienter der blev prøvet.

## Blokeringsliste (Blocklist)

Udgivelser, ABM ikke henter igen, som regel fordi de fejlede. **Remove from Blocklist** lukker en ind igen. **Redownload Failed** i downloadhåndteringen tilføjer en mislykket udgivelse her og søger igen.

## Ikke det samme som Events

De her sider handler om downloads. Den samlede oversigt over, hvad der er sket i ABM, er [aktivitetsloggen](/da/system/activity-log/).
