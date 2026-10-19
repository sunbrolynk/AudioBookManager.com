---
title: Proxy inverso
description: Poner ABM detrás de nginx, Traefik o Caddy sin romper el inicio de sesión.
---

Importan tres ajustes. Si los configuras bien, el inicio de sesión, el websocket y los guardados funcionan.

## 1. Dile a ABM quién es el proxy

Pon en `TRUSTED_PROXIES` la dirección del proxy, lo más acotada posible:

```
TRUSTED_PROXIES=172.20.0.5
```

Un proxy en el mismo host necesita `127.0.0.1`. Así ABM se fía de la dirección del cliente que tu proxy reenvía en `X-Forwarded-For` o `X-Real-IP`. Sin esto, cualquier petición con cabeceras de reenvío tiene que iniciar sesión. Es a propósito.

## 2. Deja pasar las cabeceras

Reenvía el `Host` original o envía `X-Forwarded-Host`. En nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik y Caddy envían cabeceras de reenvío por defecto. ABM usa un websocket para las actualizaciones en directo, así que el proxy tiene que dejar pasar las peticiones de upgrade.

## 3. Decide quién inicia sesión

- **Authentication Required: Enabled** obliga a todo el mundo a iniciar sesión. Es lo más seguro si el proxy es público.
- **Disabled for Local Addresses** se salta el inicio de sesión para los clientes que ABM ve como locales. A través de un proxy de confianza, eso significa el cliente que indica el proxy.
- Un proxy que no envía cabeceras de reenvío hace que todo parezca local. Elige Enabled.

## Subcarpeta y dominio

Para servirlo bajo `/abm`, pon **URL Base** en General a `/abm` y reinicia. Pon tu dirección pública en **Application URL**.

Si los guardados fallan con `cross_origin_rejected`, el origen del navegador no coincide. Arregla primero la cabecera Host. Si no basta, añade tu dominio en **CORS Allowed Domains** en Security y reinicia.

## Tamaño del cuerpo

Si las subidas grandes fallan con 413, revisa el límite del propio proxy además de `MAX_REQUEST_BODY_BYTES`.

## Qué dice el registro

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": añádelo.
- "... is in TRUSTED_PROXIES but didn't name a client address": haz que el proxy envíe `X-Forwarded-For` o `X-Real-IP`.

Consulta también [Seguridad e inicio de sesión](/es/settings/security/).
