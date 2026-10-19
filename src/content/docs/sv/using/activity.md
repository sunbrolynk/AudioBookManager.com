---
title: Aktivitet
description: Kön, historiken och blocklistan.
---

## Kö (Queue)

Vad dina nedladdningsklienter jobbar med. Radåtgärderna är bland annat **Grab now**, **Import Now**, **Manual Import** och **Retry Now**, och **Configure remote path mapping** när en färdig nedladdning ligger på en sökväg som ABM inte kan se.

Att ta bort en rad från kön följer **Queue Page Remove Action** i nedladdningsklientens inställningar: avfärda bara i ABM, ta bort från klienten och behåll filerna, eller ta bort från klienten och radera filerna. Se [Nedladdningsklienter](/sv/settings/download-clients/).

## Historik (History)

Hämtningar, importer, misslyckanden och uppgraderingar. En misslyckad hämtning säger vilka klienter som prövades.

## Blocklista (Blocklist)

Releaser som ABM inte hämtar igen, oftast för att de misslyckades. **Remove from Blocklist** släpper in en igen. **Redownload Failed** under hantering av nedladdningar lägger en misslyckad release här och söker igen.

## Inte samma sak som Events

De här sidorna handlar om nedladdningar. Det systemomfattande registret över vad som har hänt i ABM är [Activity Log](/sv/system/activity-log/).
