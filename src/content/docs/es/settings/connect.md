---
title: Connect (notificaciones)
description: Notificaciones, servidores multimedia y scripts personalizados.
---

**Settings > Connect** envía eventos a otros sitios. Se llama Connect, como en Sonarr.

## Agentes

**Agentes de notificación**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook y Apprise. **Servidores multimedia**: Jellyfin y Emby. **Otros**: Custom Script. Audiobookshelf no es un agente de Connect.

## Eventos

Cada conexión elige qué eventos la disparan.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Por conexión

| Campo | Efecto |
|---|---|
| Name, Enable | Nombre y activado/desactivado |
| Include covers | Adjunta la portada del libro cuando el agente lo permite |
| Tags | Se dispara solo para elementos con una etiqueta que coincida |
| Conditions | Reglas combinadas con Y sobre campos como el autor o el tamaño. Una condición mal escrita deja pasar el aviso en lugar de silenciarlo |
| Priority | Donde el agente lo admite |

**Test** envía un mensaje de prueba. **Test All** prueba todas las conexiones.

## Mensajes personalizados

Un mensaje personalizado reescribe el texto de un evento. Elige un **Format**, una **Cover** (Auto usa la portada del libro, None, o una Custom URL), escribe el **Title** y el cuerpo, y haz clic en una variable para insertarla. La plantilla por defecto de cada evento es un punto de partida. La vista previa muestra el resultado, y puedes enviar una prueba a través de una conexión.

## Detalles a tener en cuenta

- Los secretos, como los tokens, se guardan cifrados, aparecen en blanco al editar y se conservan si los dejas en blanco. Si cambias el destino, tienes que volver a escribirlos.
- Un aviso de tarea fallida por una caída de metadatos se envía una vez por caída, no una vez por fallo, y una ejecución programada nunca lo envía.
- Las cabeceras del webhook son un objeto JSON y se guardan como secreto.
