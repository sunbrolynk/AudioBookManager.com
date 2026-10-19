---
title: Elegir una fuente de metadatos
description: Integrada, alojada o tu propio servidor Libex.
---

:::caution[Llega en la próxima versión]
La elección de fuente todavía no está en ninguna versión publicada. Las versiones publicadas usan la instancia pública de Libex en libexdb.com y no tienen ningún ajuste para esto.
:::

En la próxima versión, **Settings > Metadata > Source** tiene un ajuste **Metadata Source** con tres opciones.

| Opción | Qué significa |
|---|---|
| Built-in (por defecto) | Libex se ejecuta dentro de ABM. Antes hay que elegir una conexión de salida. |
| Hosted (libexdb.com) | ABM consulta la instancia pública de Libex. |
| Self-hosted | ABM consulta un servidor Libex que tú le indicas. Escribe su **Server URL**, por ejemplo `http://192.168.1.20:8000`. |

**Test** comprueba la fuente seleccionada sin guardar. **Status** dice si está lista. Una opción que no has guardado muestra "Not in use yet - save to switch" hasta que guardes.

## Built-in y la conexión de salida

Built-in habla con Audible desde tu máquina, así que usa **Settings > General > Proxy & VPN**. Esa página decide la ruta: un proxy, el túnel WireGuard integrado, tu propio contenedor VPN o una conexión directa que aceptas expresamente. Si no hay ninguna elegida, las búsquedas automáticas se bloquean y lo dicen. Una ruta elegida que está caída también bloquea las búsquedas. Nunca recurre a tu propia dirección. Directa muestra un aviso de que Audible ve tu dirección IP y los libros que consulta ABM.

## Hosted y Self-hosted

Con estas dos, ABM consulta un servidor Libex y es el servidor el que habla con Audible. Una URL autoalojada se comprueba antes de guardarse, y se rechaza si está vacía o no es segura. Un servidor caído se notifica como que la fuente de metadatos no está disponible, con su nombre.

## Cuál elegir

- Quieres que funcione sin más y no te importa que Audible vea tu dirección: Built-in con conexión directa, o Hosted.
- Te importa no exponer tu IP a Audible: Built-in a través de una VPN o un proxy, o Hosted.
- Ya tienes un servidor Libex: Self-hosted.
