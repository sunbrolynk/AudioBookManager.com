---
title: Registro de actividad y eventos
description: El registro de lo que ha pasado, y en qué se diferencia de los registros de texto.
---

ABM guarda tres tipos de registro.

| Dónde | Qué es |
|---|---|
| **System > Events** y **System > Activity Log** | El registro de actividad: una lista en la base de datos de las cosas que han pasado. Events es la vista filtrada por gravedad. Activity Log (con el título Activity History) filtra por categoría, busca en el mensaje y muestra el estado de antes y de después |
| **System > Log Files** | Archivos de registro de texto con todo el detalle. Consulta [Registros](/es/system/logs/) |
| **Activity > History** | Solo el historial de descargas. Consulta [Actividad](/es/using/activity/) |

## Qué se registra

Las tareas en segundo plano terminadas (una fila de resumen cada una), los cambios manuales en clientes, indexadores, perfiles, etiquetas, notificaciones, carpetas raíz y demás, las descargas (y quién las inició), las conversiones, los fallos de descarga de Audible, las copias de seguridad, los inicios de sesión y los fallidos, y cualquier paso del arranque que haya fallado.

Categorías: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security y System.

## Privacidad

Las entradas nunca contienen URL, hosts, nombres de usuario, contraseñas, claves, tokens ni el texto de error en bruto de un cliente o servicio. Los objetos aparecen con el nombre que les pusiste. Al guardar ajustes se indica qué ajustes cambiaron, no sus valores. Los inicios de sesión solo guardan la dirección IP. Los inicios de sesión fallidos desde una misma dirección en 15 minutos se agrupan en una sola fila con el número de intentos.

## Silencioso a propósito

Una ejecución programada que no tuvo nada que hacer no escribe nada. Repetir el mismo fallo no escribe nada, pero la recuperación sí. Una ejecución manual siempre se registra.

## Retención

**Activity Log Retention** en General borra las entradas a los 90 días por defecto. 0 las conserva. Los archivos de registro tienen su propia retención (30 días), así que el enlace de una entrada a un registro puede durar más que el propio registro.

## Ver el registro

:::caution[Llega en la próxima versión]
Los enlaces para ver el registro desde las entradas todavía no están en ninguna versión publicada.
:::

Las entradas enlazan al registro del que salieron y lo abren en esa línea. Si el registro ya no existe, la entrada dice "Log no longer kept".
