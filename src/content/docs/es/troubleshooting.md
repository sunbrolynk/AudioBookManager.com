---
title: Solución de problemas
description: Arreglos para los problemas con los que es más probable que te encuentres.
---

## Archivos que deja una importación interrumpida (.abmstage)

Una importación primero prepara cada archivo junto a su nombre final y luego los cambia de sitio cuando han llegado todos. Si algo falla, ABM devuelve a su sitio lo que movió. Si no puede devolver alguna parte, esa parte se queda en la carpeta del libro como un archivo oculto que termina en `.abmstage`. Puede ser la única copia, así que ABM la conserva y el error la nombra.

Mientras haya algún archivo `.abmstage` en la carpeta de un libro, las importaciones a esa carpeta se detienen con:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Para recuperarlo:

1. Busca el archivo `.abmstage` que nombra el error.
2. Muévelo de vuelta a la descarga, o a la carpeta del libro con su nombre real. O bórralo si no lo necesitas.
3. Vuelve a intentar la importación.

## A todo el mundo le pide iniciar sesión detrás de un proxy inverso

Sin `TRUSTED_PROXIES`, una petición que lleva cabeceras de reenvío nunca se trata como local, así que tiene que iniciar sesión. Es a propósito.

1. Pon en `TRUSTED_PROXIES` la dirección de tu proxy, por ejemplo `172.20.0.5`. Un proxy en el mismo host necesita `127.0.0.1`.
2. Haz que el proxy envíe `X-Forwarded-For` o `X-Real-IP`. nginx proxy manager, Traefik y Caddy lo hacen por defecto.
3. Reinicia ABM.

El registro de la aplicación te dice cuál es el caso:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": añade el proxy a `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": configura el proxy para que envíe `X-Forwarded-For` o `X-Real-IP`.

El caso contrario: un proxy que no envía cabeceras de reenvío parece un cliente local, así que todo lo que pasa por él se salta el inicio de sesión. Pon Authentication Required en Enabled.

## El navegador rechaza los cambios

Asegúrate de que el proxy deja pasar la cabecera `Host` original o envía `X-Forwarded-Host`. Consulta [Configuración](/es/configuration/#proxy-inverso).

## Las portadas desaparecen o la página falla detrás de un proxy

La cabecera Content-Security-Policy solo permite portadas por HTTPS. Mira en la consola del navegador si hay infracciones. Sirve las portadas por HTTPS o pon `SECURITY_HEADERS_CSP_ENABLED=false`.

## Una petición grande devuelve 413

Sube `MAX_REQUEST_BODY_BYTES`. Un proxy inverso también puede imponer un límite más bajo y responder 413 por su cuenta.

## La fuente de metadatos no está disponible

Añadir, buscar, actualizar y Discover necesitan la fuente de metadatos. El mensaje la nombra, por ejemplo "The metadata source is unavailable". Causas: la fuente está caída o limitando peticiones, o tu conexión de salida la está bloqueando.

1. Revisa **Settings > General > Proxy & VPN** y que la ruta esté activa.
2. Vuelve a intentarlo en un minuto. Una fuente que limita peticiones responde 503 con una indicación de reintentar en 30 segundos.
3. Mientras tanto, puedes seguir añadiendo e importando libros a mano.

Las tareas en segundo plano que se topan con una caída fallan con el motivo y envían una notificación por caída.

## Una actualización cambió los datos de un libro

El título, la descripción, los autores, los narradores y campos parecidos vienen de la fuente de metadatos, y una actualización aplica lo que diga en ese momento. ABM no tiene forma de editarlos a mano. Lo que controlas tú es la portada (se puede bloquear), qué archivos se escriben, las etiquetas y si las actualizaciones escriben archivos auxiliares y etiquetas. Consulta [Tus metadatos, bajo tu control](/es/metadata/control/).

## Un libro aparece como Missing Files

El libro se descargó, pero sus archivos no están donde ABM los busca. Revisa el montaje y los permisos, y luego ejecuta **Refresh & Scan**. Un escaneo no toca un libro cuando no puede leer su carpeta, y la tarea aparece como Partial con el motivo.

## Las importaciones se detienen con "Files left by an interrupted import"

Consulta la sección sobre `.abmstage` de arriba.

## Las descargas terminan pero nunca se importan

Añade un mapeo de rutas remotas, o haz que ABM y el cliente vean la carpeta en la misma ruta. Una subcarpeta que no se puede leer bloquea toda la descarga hasta que se arreglen sus permisos. Consulta [Clientes de descarga](/es/settings/download-clients/).

## Docker no llega a la fuente de metadatos ni a los indexadores

Antes que nada, revisa el DNS y el ajuste de conexión de salida. En Docker, una conexión directa solo funciona si el contenedor puede llegar a internet.

## Si sigues atascado

Pregunta en el [Discord de ABM](https://discord.gg/qeJRrM6AZ), [abre una incidencia](https://github.com/sunbrolynk/AudioBook-Manager/issues) o escribe a [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
