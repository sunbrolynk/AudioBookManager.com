---
title: Sicherheit und Anmeldung
description: Authentifizierungsmodi, API-Keys, vertrauenswürdige Proxys, lokale Netzwerke und die Content Security Policy.
---

Der Abschnitt **Security** unter **Settings > General** legt fest, wer ABM nutzen darf und wie.

## Authentifizierung

| Einstellung | Standard | Optionen |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Lass das Passwort leer, um das aktuelle zu behalten |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | leer | Zusätzliche CIDR-Bereiche, deren Clients ohne Anmeldung durchkommen |
| CORS Allowed Domains | leer | Andere Origins, die die API aus einem Browser aufrufen dürfen. Braucht einen Neustart |

Die zwei Modi von **Authentication Required**, die du nutzen wirst:

- **Enabled**: Jeder meldet sich an, auch aus deinem LAN.
- **Disabled for Local Addresses** (gespeichert als `local_disabled`): Eine Anfrage von einer lokalen Adresse kommt ohne Anmeldung durch. Loopback, die privaten Bereiche, Link-Local und IPv6 Unique-Local gelten als lokal. **Local Networks** fügt weitere hinzu und ersetzt diese nie.

Bei einer frischen Installation werden Anfragen abgelehnt, bis die Einrichtung abgeschlossen ist.

## Reverse Proxys

Hinter einem Proxy setzt du `TRUSTED_PROXIES`, damit ABM weiß, welchen Forwarding-Headern es glauben soll. Eine Anfrage mit Forwarding-Headern von einer Adresse, die nicht auf dieser Liste steht, ist nie lokal und muss sich anmelden. Das ist Absicht. Siehe [Reverse Proxy](/de/guides/reverse-proxy/).

Ein Proxy, der keine Forwarding-Header schickt, sieht aus wie ein lokaler Client. Wenn du so einen betreibst, stell Authentication Required auf Enabled.

## Passwortbestätigung

Manche Änderungen fragen noch einmal nach deinem aktuellen Passwort: das Speichern der Security-Einstellungen und das Anzeigen oder Erneuern des API-Keys. Ein falsches Passwort zählt im Security-Log als fehlgeschlagene Anmeldung. Ist noch kein Passwort gesetzt, wird keins gefragt.

## API-Key

Der Key wird erst angezeigt, wenn du dein Passwort bestätigst. **Regenerate API Key** erzeugt einen neuen, zeigt ihn einmal an und macht den alten sofort ungültig. Eintippen lässt sich der Key nicht. Lässt sich der gespeicherte Key nicht entschlüsseln (weil sich das App-Secret geändert hat), erneuer ihn.

Schick ihn als `X-Api-Key` oder als Parameter `apikey`. Ein Key von einer LAN-Adresse zählt als Anfrage mit Key. Siehe [API](/de/system/api/).

## Schreibzugriffe aus dem Browser

Eine Browser-Anfrage, die etwas ändert, wird mit `cross_origin_rejected` abgelehnt, außer ihr Origin passt zu der Adresse, unter der ABM erreicht wird, zum weitergeleiteten Host eines vertrauenswürdigen Proxys oder zu einer erlaubten CORS-Domain. Anfragen mit API-Key sind davon nicht betroffen.

## Content Security Policy

ABM schickt einen Content-Security-Policy-Header, außer `SECURITY_HEADERS_CSP_ENABLED=false` ist gesetzt. Er beschränkt die Oberfläche auf ABMs eigene Skripte und API und Bilder auf ABM oder HTTPS. Cover über reines HTTP werden blockiert, und ABM lässt sich so oder so nicht in einem iframe anzeigen. Die Seiten der API-Doku bekommen eine lockerere Policy, damit sie von einem CDN laden können.

## Fehlgeschlagene Anmeldungen

Es gibt keine Sperre. Fehlgeschlagene Versuche werden geloggt, im Aktivitätsprotokoll pro Adresse zusammengefasst und Zeile für Zeile ins Security-Log geschrieben, für Tools wie fail2ban.

## Secrets

Passwörter und Keys, die ABM für Indexer, Clients und Verbindungen speichert, werden mit einem App-Secret verschlüsselt. Setz `APP_SECRET`, wenn der Schlüssel nicht auf der Config-Platte liegen soll. Gibt es keins von beiden, generiert ABM `/config/app_secret`. Passwörter für Proxys und Exportziele werden im Klartext gespeichert.
