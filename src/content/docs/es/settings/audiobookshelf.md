---
title: Conexión con Audiobookshelf
description: Conecta ABM a tu servidor de Audiobookshelf.
---

:::caution[Llega en una versión posterior]
La página de ajustes para esto todavía no está en ninguna versión publicada. La conexión ya se puede guardar, probar y quitar por la API, y nada más en ABM la usa todavía.
:::

Audiobookshelf (ABS) es el servidor donde escuchas. ABM se conecta con la URL del servidor y una clave de API creada para un usuario de ABS.

## Versión

ABM necesita ABS 2.37.0 o más reciente y está probado en 2.37.2. Un servidor más antiguo se rechaza. Uno más nuevo da un aviso, porque ABM no se ha probado en él.

## La cuenta

La clave de API pertenece a un usuario de ABS. ABM comprueba a ese usuario al guardar o probar.

- **Se rechaza hasta que se arregle:** el usuario debe ser admin o root, y tener el permiso Update, acceso a todas las bibliotecas, a todas las etiquetas y al contenido explícito.
- **Aviso, pero se guarda igual:** Upload está desactivado (ABM no puede gestionar las portadas) o Delete está desactivado (un libro que borras en ABM se queda en ABS hasta que lo actives).

## Cómo llega ABM a ABS

ABM siempre se conecta a ABS directamente. Nunca pasa por la VPN o el proxy que elegiste en [Network](/settings/network/). La URL del servidor se comprueba antes de guardarla, y una insegura se rechaza.

## La clave de API

La clave se guarda cifrada y no se vuelve a mostrar. Déjala en blanco al guardar o probar para conservar la guardada. Una clave guardada solo se envía a la dirección para la que se guardó, así que si cambias la URL, el ajuste de TLS o el paquete de CA, vuelve a introducir la clave.

## Verificar TLS

Los certificados se verifican por defecto. Si tu servidor usa un certificado de tu propia autoridad, indica la ruta de su paquete de CA en vez de desactivar la verificación.

## Test y Disconnect

**Test** comprueba un servidor sin guardarlo: la versión, los permisos del usuario y sus bibliotecas. Guardar una conexión activada ejecuta antes las mismas comprobaciones y se rechaza si falla una comprobación de error. Una conexión guardada desactivada no se comprueba. **Disconnect** quita la conexión guardada y su clave.

## System Status

Cuando una conexión está activada, [System > Status](/system/status/) tiene una fila AudioBookShelf con el resultado de la última comprobación. Se actualiza al guardar y con la comprobación de estado periódica, que se ejecuta cada 6 horas, así que no es una consulta en vivo cada vez que abres la página.

## Qué quita ABM

ABM solo quita el registro del libro en ABS. Nunca borra archivos de forma definitiva.
