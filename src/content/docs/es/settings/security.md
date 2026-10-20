---
title: Seguridad e inicio de sesión
description: Modos de autenticación, claves de API, proxies de confianza, redes locales y la política de seguridad de contenido.
---

La sección **Security** de **Settings > General** controla quién puede usar ABM y cómo.

## Autenticación

| Ajuste | Por defecto | Opciones |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Deja la contraseña en blanco para conservar la actual |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | vacío | Rangos CIDR adicionales cuyos clientes no necesitan iniciar sesión |
| CORS Allowed Domains | vacío | Otros orígenes a los que se permite llamar a la API desde un navegador. Requiere reiniciar |

Los dos modos de **Authentication Required** que vas a usar:

- **Enabled**: todo el mundo inicia sesión, incluida tu LAN.
- **Disabled for Local Addresses** (guardado como `local_disabled`): una petición desde una dirección local no necesita iniciar sesión. Cuentan como locales la de loopback, los rangos privados, las de enlace local y las IPv6 de ámbito local único. **Local Networks** añade más y nunca las sustituye.

En una instalación nueva, las peticiones se rechazan hasta que termina la configuración inicial.

## Proxies inversos

Detrás de un proxy, define `TRUSTED_PROXIES` para que ABM sepa de qué cabeceras de reenvío fiarse. Una petición con cabeceras de reenvío desde una dirección que no está en esa lista nunca es local y tiene que iniciar sesión. Es a propósito. Consulta [Proxy inverso](/es/guides/reverse-proxy/).

Un proxy que no envía cabeceras de reenvío parece un cliente local. Si usas uno así, pon Authentication Required en Enabled.

## Confirmación de contraseña

Algunos cambios te piden otra vez tu contraseña actual: guardar los ajustes de Security y mostrar o regenerar la clave de API. Una contraseña incorrecta cuenta como un inicio de sesión fallido en el registro de seguridad. Si aún no hay contraseña, no se pide ninguna.

## Clave de API

La clave nunca se muestra hasta que confirmas tu contraseña. **Regenerate API Key** crea una nueva, la muestra una sola vez e invalida la antigua al momento. La clave no se puede escribir a mano. Si la clave guardada no se puede descifrar (cambió el secreto de la aplicación), regenérala.

Envíala como `X-Api-Key` o como parámetro `apikey`. Una clave desde una dirección de la LAN cuenta como petición con clave. Consulta [API](/es/system/api/).

## Escrituras desde el navegador

Una petición del navegador que cambia algo se rechaza con `cross_origin_rejected` salvo que su origen coincida con la dirección con la que se accede a ABM, con el host reenviado por un proxy de confianza o con un dominio permitido de CORS. Las peticiones con clave de API no se ven afectadas.

## Política de seguridad de contenido

ABM envía una cabecera Content-Security-Policy salvo que pongas `SECURITY_HEADERS_CSP_ENABLED=false`. Limita la interfaz a los scripts y la API del propio ABM, y las imágenes a ABM o a HTTPS. Las portadas servidas por HTTP sin cifrar se bloquean, y ABM no se puede mostrar dentro de un iframe en ningún caso. Las páginas de documentación de la API tienen una política más permisiva para poder cargar desde una CDN.

## Inicios de sesión fallidos

No hay bloqueo de cuenta. Los intentos fallidos se registran, se agrupan por dirección en el registro de actividad y se escriben línea a línea en el registro de seguridad para herramientas como fail2ban.

## Secretos

Las contraseñas y claves que ABM guarda para indexadores, clientes y conexiones se cifran con un secreto de la aplicación. Define `APP_SECRET` para que la clave no esté en el disco de configuración. Si no existe ninguno de los dos, ABM genera `/config/app_secret`. Las contraseñas del proxy y de los destinos de exportación se guardan en texto plano.
