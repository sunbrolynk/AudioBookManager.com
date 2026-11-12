---
title: Conexión con Audiobookshelf
description: Conecta ABM a tu servidor de Audiobookshelf.
---

Audiobookshelf (ABS) es el servidor donde escuchas. Conecta ABM en **Settings > Audiobookshelf**, tanto en el ordenador como en el móvil. Das la dirección del servidor y una clave de API creada para un usuario de ABS.

## Conexión

- **Enable:** Deja que ABM use el servidor. Al guardar con esto activado, ABM comprueba primero el servidor y se niega a guardar si falla una comprobación de nivel error. La página te muestra los motivos. Una conexión guardada desactivada no se comprueba.
- **Server address:** Donde responde tu servidor ABS, por ejemplo `http://192.168.1.20:13378`. Si ABS corre en la misma máquina que ABM, usa la dirección LAN de esa máquina, o el nombre o la IP del contenedor si ambos corren en Docker.
- **API key:** Una clave de API de un usuario admin en ABS.
- **Verify TLS certificate:** Activado por defecto. Si tu servidor usa un certificado de tu propia autoridad, indica la ruta de su paquete CA en **CA bundle path** en vez de desactivar la verificación. Deja la ruta vacía para usar los certificados del sistema.
- **Test:** Ejecuta las comprobaciones con lo que hay en pantalla, sin guardar nada.
- **Disconnect:** Te pide confirmación y luego elimina la dirección y la clave guardadas.

## Cómo llega ABM a ABS

ABM siempre se conecta a ABS directamente. Nunca pasa por la VPN o el proxy que elegiste en [Network](/settings/network/). La dirección se comprueba antes de guardarla y una insegura se rechaza. Se rechaza una dirección que apunte a la máquina donde corre ABM, una dirección link-local y una dirección de metadatos de la nube, igual que un nombre que se resuelva a una de ellas. Tus propias direcciones LAN están bien, por eso un ABS en la misma máquina necesita la dirección LAN de la máquina o el nombre o la IP de su contenedor.

## La clave de API

La clave se guarda cifrada y no se vuelve a mostrar. Déjala en blanco al guardar o probar para conservar la guardada. Una clave guardada solo se envía a la dirección para la que se guardó, así que si cambias la dirección, Verify TLS o el paquete CA, vuelve a introducirla. Si ABM ya no puede leer la clave guardada (la clave de cifrado se perdió o cambió), la página te dice que la introduzcas de nuevo, incluso con la conexión desactivada.

## Qué se comprueba

**Versión.** ABM necesita ABS 2.37.0 o posterior y está probado en 2.37.2. Un servidor más antiguo, o que no informa de una versión que ABM entienda, falla con un error. Uno más nuevo da una advertencia, porque ABM no se ha probado en él.

**La cuenta.** La clave de API pertenece a un usuario de ABS, y ABM comprueba a ese usuario.

- **Error hasta que se arregle:** el usuario debe ser admin o root, y tener el permiso Update, acceso a todas las bibliotecas, a todas las etiquetas y al contenido explícito.
- **Advertencia, se guarda igualmente:** Upload está desactivado (ABM no puede ser dueño de las portadas), o Delete está desactivado (un libro que borras en ABM sigue en ABS hasta que lo actives).

## Estado

La sección Status muestra el resultado de la última comprobación (Not connected, OK, Warning o Error), la versión del servidor, el usuario al que pertenece la clave, cuándo comprobó ABM por última vez y las comprobaciones en sí. Una comprobación fallida muestra su motivo, y las superadas se cuentan.

[System > Status](/system/status/) también tiene una fila de Audiobookshelf cuando hay una conexión activada. Se actualiza al guardar y con la comprobación de salud periódica, que corre cada 6 horas, así que no es una sonda en vivo cada vez que abres la página. Una clave guardada que ABM ya no puede leer aparece como error hasta que la introduces de nuevo. Una conexión aún sin comprobar aparece como advertencia. Una conexión desactivada se queda callada ahí.

## Qué elimina ABM

ABM solo elimina el registro del elemento en ABS. Nunca borra archivos de forma definitiva.
