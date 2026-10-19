---
title: Proxy reverso
description: Colocando o ABM atrás do nginx, Traefik ou Caddy sem quebrar o login.
---

Três configurações importam. Acerte essas e o login, o websocket e o salvamento funcionam.

## 1. Diga ao ABM quem é o proxy

Defina `TRUSTED_PROXIES` com o endereço do proxy, o mais restrito que der:

```
TRUSTED_PROXIES=172.20.0.5
```

Um proxy no mesmo host precisa de `127.0.0.1`. Aí o ABM confia no endereço do cliente que o seu proxy repassa em `X-Forwarded-For` ou `X-Real-IP`. Sem isso, qualquer requisição com cabeçalhos de encaminhamento precisa fazer login. Isso é de propósito.

## 2. Repasse os cabeçalhos

Repasse o `Host` original, ou envie `X-Forwarded-Host`. No nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

O Traefik e o Caddy enviam cabeçalhos de encaminhamento por padrão. O ABM usa um websocket para as atualizações ao vivo, então o proxy precisa repassar as requisições de upgrade.

## 3. Decida quem faz login

- **Authentication Required: Enabled** obriga todo mundo a fazer login. É o mais seguro se o proxy for público.
- **Disabled for Local Addresses** pula o login para os clientes que o ABM considera locais. Por um proxy confiável, isso quer dizer o cliente que o proxy indica.
- Um proxy que não envia cabeçalhos de encaminhamento faz tudo parecer local. Escolha Enabled.

## Subpasta e domínio

Para servir em `/abm`, defina **URL Base** em General como `/abm` e reinicie. Coloque o seu endereço público em **Application URL**.

Se o salvamento falhar com `cross_origin_rejected`, a origem do navegador não está batendo. Corrija o cabeçalho Host primeiro. Se não resolver, adicione o seu domínio em **CORS Allowed Domains** em Security e reinicie.

## Tamanho do corpo

Se envios grandes falharem com 413, confira o limite do próprio proxy, além de `MAX_REQUEST_BODY_BYTES`.

## O que o log diz

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": adicione o proxy.
- "... is in TRUSTED_PROXIES but didn't name a client address": faça o proxy enviar `X-Forwarded-For` ou `X-Real-IP`.

Veja também [Segurança e login](/pt-br/settings/security/).
