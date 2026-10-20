---
title: Sicurezza e accesso
description: Modalità di autenticazione, chiavi API, proxy fidati, reti locali e content security policy.
---

La sezione **Security** di **Settings > General** controlla chi può usare ABM e come.

## Autenticazione

| Impostazione | Predefinito | Scelte |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Lascia vuota la password per mantenere quella attuale |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | vuoto | Intervalli CIDR aggiuntivi i cui client saltano l'accesso |
| CORS Allowed Domains | vuoto | Altre origini a cui è permesso chiamare l'API da un browser. Richiede un riavvio |

Le due modalità di **Authentication Required** che userai:

- **Enabled**: accedono tutti, anche dalla tua LAN.
- **Disabled for Local Addresses** (salvata come `local_disabled`): una richiesta da un indirizzo locale salta l'accesso. Loopback, gli intervalli privati, link-local e IPv6 unique-local contano come locali. **Local Networks** ne aggiunge altri e non li sostituisce mai.

Su un'installazione nuova, le richieste vengono rifiutate finché non finisci la configurazione iniziale.

## Reverse proxy

Dietro un proxy, imposta `TRUSTED_PROXIES` così ABM sa a quali header di inoltro credere. Una richiesta con header di inoltro che arriva da un indirizzo fuori da quell'elenco non è mai locale e deve fare l'accesso. È voluto. Vedi [Reverse proxy](/it/guides/reverse-proxy/).

Un proxy che non invia header di inoltro sembra un client locale. Se ne usi uno così, imposta Authentication Required su Enabled.

## Conferma della password

Alcune modifiche ti richiedono di nuovo la password attuale: salvare le impostazioni di Security e mostrare o rigenerare la chiave API. Una password sbagliata conta come accesso fallito nel log di sicurezza. Se non è ancora impostata una password, non ne viene chiesta nessuna.

## Chiave API

La chiave non viene mai mostrata finché non confermi la password. **Regenerate API Key** ne crea una nuova, la mostra una volta sola e invalida subito quella vecchia. La chiave non si può scrivere a mano. Se la chiave salvata non si riesce a decifrare (la chiave segreta dell'app è cambiata), rigenerala.

Inviala come `X-Api-Key` o come parametro `apikey`. Una chiave da un indirizzo della LAN conta come richiesta con chiave. Vedi [API](/it/system/api/).

## Scritture dal browser

Una richiesta del browser che modifica qualcosa viene rifiutata con `cross_origin_rejected` se la sua origine non corrisponde all'indirizzo da cui raggiungi ABM, all'host inoltrato da un proxy fidato o a un dominio CORS consentito. Le richieste con chiave API non sono toccate.

## Content security policy

ABM invia un header Content-Security-Policy a meno che `SECURITY_HEADERS_CSP_ENABLED=false`. Limita l'interfaccia agli script e all'API di ABM, e le immagini ad ABM o HTTPS. Le copertine servite via HTTP semplice vengono bloccate, e ABM non può essere mostrato in un iframe in nessun caso. Le pagine della documentazione API hanno una policy più permissiva così possono caricare da una CDN.

## Accessi falliti

Non c'è un blocco dell'account. I tentativi falliti vengono registrati, raggruppati per indirizzo nel registro attività, e scritti riga per riga nel log di sicurezza per strumenti come fail2ban.

## Segreti

Password e chiavi che ABM salva per indexer, client e connessioni sono cifrate con una chiave segreta dell'app. Imposta `APP_SECRET` per tenere la chiave fuori dal disco di configurazione. Se non c'è né l'una né l'altro, ABM genera `/config/app_secret`. Le password dei proxy e delle destinazioni di esportazione sono salvate in chiaro.
