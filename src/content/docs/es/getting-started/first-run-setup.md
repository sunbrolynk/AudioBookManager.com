---
title: Configuración inicial
description: El asistente de configuración de una instalación nueva, paso a paso.
---

:::caution[Llega en una versión posterior]
El asistente de configuración todavía no está en ninguna versión publicada. Las versiones publicadas solo piden un usuario en la primera visita.
:::

En una instalación nueva, la primera visita abre un asistente de configuración en lugar de la página de inicio de sesión. Te guía por todo lo que ABM necesita, un paso cada vez. Solo aparece mientras no exista ninguna cuenta. Todas las opciones se pueden cambiar después en **Settings**.

Arriba hay una cadena de ocho eslabones. Cada eslabón es un paso, y la cadena te dice dónde estás:

- **Done**: el paso está terminado.
- **Current step**: el paso que ves en pantalla.
- **Not started**: un paso al que todavía no has llegado.
- **Later**: un paso que has pasado sin terminarlo. Queda pendiente y puedes terminarlo desde **Settings** cuando quieras.

**Back** vuelve al paso anterior. **Continue** guarda el paso y sigue. Tres pasos, Audible, Download client e Indexer, tienen además **Skip for now**.

## 1. Cuenta (Account)

Crea tu usuario y te inicia sesión. Eliges un nombre de usuario y una contraseña de al menos 8 caracteres, y escribes la contraseña dos veces.

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms usa una página de inicio de sesión. Basic (Browser Popup) usa el aviso de inicio de sesión del propio navegador |
| Authentication required | Everywhere | Everywhere pide iniciar sesión desde cualquier dirección. Skip on local network deja entrar sin iniciar sesión a los dispositivos de tu red doméstica o de oficina |

Son los mismos ajustes que en [Seguridad e inicio de sesión](/es/settings/security/). La cuenta se crea al pulsar **Continue**. Una vez creada, este paso solo la confirma.

## 2. Red (Network)

Network es el interruptor general. Nada de lo que ABM envía sale de tu equipo hasta que eliges una ruta aquí, así que los pasos Metadata y Audible dependen de él. Este paso no se puede saltar, y **Continue** sigue desactivado hasta que la ruta está completa.

| Opción | Qué le das a ABM |
|---|---|
| Proxy | El tipo, el nombre de host y el puerto del proxy, y opcionalmente un usuario y una contraseña. SOCKS4 no es compatible |
| WireGuard | Un `.conf` de tu proveedor de VPN, pegado o arrastrado. Si ya hay un túnel guardado, se usa ese |
| Own VPN container | Nada que escribir. Marcas una casilla que dice que todo el tráfico de ABM ya sale por un contenedor de VPN o proxy. ABM no puede comprobarlo |
| Direct | Nada que escribir. Marcas una casilla que dice que todos los servicios con los que ABM contacta verán tu propia dirección IP |

**Continue** guarda la ruta y luego muestra la comprobación **Public IP**, para que veas que la ruta funciona antes de que nada salga a internet. **Change route** te deja elegir otra. Son los mismos ajustes que [Network](/es/settings/network/).

## 3. Metadatos (Metadata)

Elige dónde busca ABM los libros. Va antes que tus carpetas porque el primer escaneo de carpetas compara tus libros con esta fuente.

| Opción | Qué significa |
|---|---|
| Built-in | Libex se ejecuta dentro de ABM. Sin cuenta y sin servicio extra. Usa la ruta del paso Network |
| Hosted | ABM consulta la instancia pública de Libex en libexdb.com |
| Self-hosted | ABM consulta tu propio servidor Libex. Escribe su **Server URL**. **Test** lo comprueba sin guardar |

También hay una casilla **Local Storage**. Guarda un registro local, permanente y cifrado de cada libro que ABM consulta, busca, añade, importa o ve en Discover, y funciona con las tres fuentes. Una vez activada, solo se puede desactivar en **Settings > Metadata**.

**Continue** guarda la fuente y activa Local Storage si la marcaste. Si la fuente elegida todavía no puede salir, por ejemplo Built-in sin ruta elegida, el paso dice por qué. Consulta [Elegir una fuente de metadatos](/es/metadata/choosing-a-source/).

## 4. Audible (opcional)

Inicia sesión en tu cuenta de Audible para que ABM pueda leer tu biblioteca. Pasa por la ruta que elegiste en el paso Network. Si no hay ruta elegida, o el tráfico de Audible está bloqueado en ella, el paso lo dice y **Back to Network** te lleva de vuelta. El inicio de sesión es el mismo que en [Audible](/es/audible/). Cuando has iniciado sesión, el paso muestra la cuenta y **Continue** queda disponible.

Puedes usar **Skip for now** y conectar Audible más tarde en **Settings > Audible**.

## 5. Carpeta raíz (Root folder)

Una carpeta raíz es donde ABM guarda tus libros. Elige la carpeta donde viven tus audiolibros, o donde deben ir los nuevos. Debería ser la misma carpeta que lee tu reproductor (Audiobookshelf, por ejemplo). Puedes explorar las carpetas del servidor y crear una nueva desde el navegador. La primera carpeta raíz que añades pasa a ser la predeterminada. Este paso no se puede saltar. Más adelante puedes añadir más raíces en **Settings > Media Management**.

## 6. Cliente de descargas (opcional)

Elige uno de los clientes compatibles, Usenet o torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet o Blackhole. Rellena sus datos, pulsa **Test** y luego **Save**. El cliente se añade ahí mismo, en el paso. Puedes añadir otro, y **Refresh** recarga la lista. El paso cuenta como hecho en cuanto hay un cliente guardado.

Puedes usar **Skip for now** y añadir un cliente más tarde en **Settings > Download Clients**. Consulta [Clientes de descarga](/es/settings/download-clients/).

## 7. Indexador (opcional)

Elige un tipo de indexador o un preajuste, rellénalo y pulsa **Test** y **Save**, igual que con el cliente de descargas. El paso cuenta como hecho en cuanto hay un indexador guardado. Puedes usar **Skip for now** y añadir indexadores más tarde en **Settings > Indexers**. Consulta [Indexadores](/es/settings/indexers/).

## 8. Final (Finish)

Un resumen lista cada paso con lo que se configuró: tu ruta de Network (y la Public IP, si se comprobó), la fuente de metadatos, la cuenta de Audible, la carpeta raíz, y el cliente y el indexador que añadiste. Cada paso que dejaste para más tarde aparece como pendiente. Si no queda nada pendiente, el resumen dice que todos los eslabones están encendidos. **Go to Library** cierra el asistente.

Todo lo que te saltaste está en **Settings** cuando lo quieras. Lo siguiente que tiene sentido es un perfil de calidad y tus libros: consulta [Inicio rápido](/es/getting-started/quick-start/).
