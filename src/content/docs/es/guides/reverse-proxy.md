---
title: Proxy inverso
description: Poner ABM detrás de nginx, Traefik o Caddy sin romper el inicio de sesión.
---

:::caution[No recomendado]
No se recomienda poner ABM en internet, ni con un proxy inverso ni con un puerto redirigido, el mismo consejo que dan las aplicaciones de Servarr. Para entrar desde fuera, usa mejor una VPN como WireGuard o Tailscale. ABM está hecho para ser seguro detrás de un proxy, pero no hay ninguna garantía de seguridad una vez que es público, y el riesgo es tuyo. Si aun así lo haces, pon **Authentication Required** en **Enabled** y mantén ABM actualizado. Esta guía es para quienes lo hacen de todos modos.
:::

Importan tres ajustes. Si los configuras bien, el inicio de sesión, el websocket y los guardados funcionan.

## 1. Dile a ABM quién es el proxy

Pon en `TRUSTED_PROXIES` la dirección del proxy, lo más acotada posible:

```
TRUSTED_PROXIES=172.20.0.5
```

Un proxy en el mismo host necesita `127.0.0.1`. Así ABM se fía de la dirección del cliente que tu proxy reenvía en `X-Forwarded-For` o `X-Real-IP`. Sin esto, cualquier petición con cabeceras de reenvío tiene que iniciar sesión. Es a propósito.

## Cómo se lee la dirección del cliente

`X-Forwarded-For` se lee de derecha a izquierda. Cada proxy añade la dirección que vio, así que la entrada de más a la izquierda es lo que envió el propio cliente y nunca es de fiar. ABM salta las entradas que están en `TRUSTED_PROXIES` y toma como cliente la primera que no está. Por eso `TRUSTED_PROXIES` tiene que ser estrecho: cualquier cosa dentro del rango puede añadir una entrada a la cadena. `X-Forwarded-Host` tampoco se acepta si no viene de una dirección de `TRUSTED_PROXIES`.

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

## Configuraciones de ejemplo

Cada una deja pasar todas las rutas, incluida `/initialize.json`, y se encarga del websocket. Pon tu propio dominio y el nombre de tu contenedor, y fija `TRUSTED_PROXIES` a la dirección del proxy.

### nginx

```
server {
    listen 443 ssl;
    server_name abm.example.com;

    location / {
        proxy_pass http://172.20.0.2:5173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}
```

### Nginx Proxy Manager

```
Scheme:               http
Forward Hostname/IP:  audiobook-manager
Forward Port:         5173
Websockets Support:   on
```

### Traefik

```
labels:
  - traefik.enable=true
  - traefik.http.routers.abm.rule=Host(`abm.example.com`)
  - traefik.http.routers.abm.entrypoints=websecure
  - traefik.http.routers.abm.tls.certresolver=letsencrypt
  - traefik.http.services.abm.loadbalancer.server.port=5173
```

Traefik passes websockets without any extra setting.

### Caddy

```
abm.example.com {
    reverse_proxy audiobook-manager:5173
}
```

Caddy passes websockets and the original `Host` on its own.

## Subcarpeta y dominio

Para servirlo bajo `/abm`, pon **URL Base** en General a `/abm` y reinicia. Pon tu dirección pública en **Application URL**.

Si los guardados fallan con `cross_origin_rejected`, el origen del navegador no coincide. Arregla primero la cabecera Host. Si no basta, añade tu dominio en **CORS Allowed Domains** en Security y reinicia.

## Tamaño del cuerpo

Si las subidas grandes fallan con 413, revisa el límite del propio proxy además de `MAX_REQUEST_BODY_BYTES`.

## Qué dice el registro

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": añádelo.
- "... is in TRUSTED_PROXIES but didn't name a client address": haz que el proxy envíe `X-Forwarded-For` o `X-Real-IP`.

## Solución de problemas

Una página en blanco, o un mensaje «Could not load» que dice que el proxy inverso debe pasar `/initialize.json` (se avisa desde la 0.19.1), significa que el proxy no está pasando `/initialize.json` a ABM. Pásalo, junto con las demás rutas de arriba. Si las actualizaciones en vivo nunca conectan, normalmente es que la actualización a websocket o la cabecera `Sec-WebSocket-Protocol` no llega.

Consulta también [Seguridad e inicio de sesión](/es/settings/security/).
