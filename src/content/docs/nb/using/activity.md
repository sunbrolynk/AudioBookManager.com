---
title: Aktivitet
description: Køen, historikken og blokkeringslista.
---

## Kø (Queue)

Det nedlastingsklientene dine jobber med. Handlingene på en rad er blant annet **Grab now**, **Import Now**, **Manual Import** og **Retry Now**, og **Configure remote path mapping** når en ferdig nedlasting ligger på en sti ABM ikke ser.

Å fjerne en rad fra køen følger **Queue Page Remove Action** i innstillingene til nedlastingsklienten: bare avvis i ABM, fjern fra klienten og behold filene, eller fjern fra klienten og slett filene. Se [Nedlastingsklienter](/nb/settings/download-clients/).

## Historikk (History)

Hentinger, importer, feil og oppgraderinger. En henting som feilet, sier hvilke klienter som ble prøvd.

## Blokkeringsliste (Blocklist)

Utgivelser ABM ikke henter igjen, som regel fordi de feilet. **Remove from Blocklist** slipper en inn igjen. **Redownload Failed** i nedlastingshåndteringen legger en utgivelse som feilet hit, og søker igjen.

## Ikke det samme som Events

Disse sidene handler om nedlastinger. Oversikten for hele systemet over hva som har skjedd i ABM, er [Aktivitetsloggen](/nb/system/activity-log/).
