---
title: Variables de entorno
description: Variables de entorno, redes locales y lo básico del proxy inverso.
---

La mayoría de los ajustes están en la interfaz web, en **Settings**. Estos se definen en el entorno.

## Variables de entorno

| Variable | Por defecto | Qué hace |
|---|---|---|
| `PORT` | `5173` | Puerto de la interfaz web. |
| `TIMEZONE` | `UTC` | Tu zona horaria local, por ejemplo `America/New_York`. |
| `LOCAL_NETWORKS` | vacío | Redes CIDR adicionales que no necesitan iniciar sesión. Separadas por comas. |
| `TRUSTED_PROXIES` | vacío | Redes CIDR de los proxies inversos en los que se confía para fijar `X-Forwarded-For` y `X-Real-IP`. |
| `APP_SECRET` | automático | Raíz de cifrado de las credenciales guardadas. Si no está definida, se genera en `/config/app_secret` en el primer arranque. Defínela para que la clave no esté en el disco de configuración. |
| `DOCS_ENABLED` | `true` | Sirve la documentación de la API en `/api/docs`, `/api/redoc` y `/api/openapi.json`. Con `false` desaparece. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Envía una cabecera Content-Security-Policy que limita la interfaz a los scripts, estilos y API del propio ABM, más las portadas por HTTPS. Con `false` no se envía. Incrustar la página en un marco sigue bloqueado en ambos casos. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Tamaño máximo del cuerpo de una petición que acepta un endpoint (10 MiB). Si es mayor, responde HTTP 413. La restauración de copias de seguridad y la subida de portadas tienen sus propios límites. |

## Redes locales

La dirección de loopback, los rangos privados (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), las direcciones de enlace local y las IPv6 de ámbito local único ya cuentan como locales. Con **Authentication Required** en el modo de direcciones locales, una petición desde cualquiera de ellas no necesita iniciar sesión. Para añadir más, enuméralas:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Proxy inverso

Detrás de nginx, Traefik o similar, pon en `TRUSTED_PROXIES` la dirección del proxy:

```
TRUSTED_PROXIES=172.20.0.5
```

- Hazlo lo más acotado posible. Usa la dirección del propio proxy, no una subred amplia de Docker.
- Un proxy en el mismo host necesita `TRUSTED_PROXIES=127.0.0.1`.
- Solo cuenta como cliente el que el proxy indica en `X-Forwarded-For` o `X-Real-IP`.
- Deja pasar la cabecera `Host` original (en nginx: `proxy_set_header Host $host;`) o envía `X-Forwarded-Host`. Una petición del navegador que cambia algo se rechaza salvo que su origen coincida con la dirección con la que se accede a ABM o con un dominio de los dominios permitidos de CORS.
- Un proxy que no envía cabeceras de reenvío parece un cliente local. Si usas uno así, pon Authentication Required en Enabled.

Si te pide iniciar sesión cuando no debería, consulta [Solución de problemas](/es/troubleshooting/).

## Más

- Modos de inicio de sesión, claves de API y la política de seguridad de contenido: [Seguridad e inicio de sesión](/es/settings/security/).
- Una guía completa del proxy: [Proxy inverso](/es/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (por defecto 500 MiB) limita las subidas para restaurar copias de seguridad.
- Todo lo demás está en **Settings** dentro de la aplicación. Consulta [Resumen de ajustes](/es/settings/media-management/).
