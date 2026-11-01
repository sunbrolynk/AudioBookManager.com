---
title: Proxy reverso
description: Colocando o ABM atrás do nginx, Traefik ou Caddy sem quebrar o login.
---

:::caution[Não recomendado]
Colocar o ABM na internet, por um proxy reverso ou por uma porta encaminhada, não é recomendado, o mesmo conselho que os apps Servarr dão. Para acessar de fora, use uma VPN como WireGuard ou Tailscale. O ABM foi feito para ser seguro atrás de um proxy, mas não tem garantia de segurança depois que ele fica público, e o risco é seu. Se fizer mesmo assim, coloque **Authentication Required** em **Enabled** e mantenha o ABM atualizado. Este guia é para quem faz mesmo assim.
:::

Três configurações importam. Acerte essas e o login, o websocket e o salvamento funcionam.

## 1. Diga ao ABM quem é o proxy

Defina `TRUSTED_PROXIES` com o endereço do proxy, o mais restrito que der:

```
TRUSTED_PROXIES=172.20.0.5
```

Um proxy no mesmo host precisa de `127.0.0.1`. Aí o ABM confia no endereço do cliente que o seu proxy repassa em `X-Forwarded-For` ou `X-Real-IP`. Sem isso, qualquer requisição com cabeçalhos de encaminhamento precisa fazer login. Isso é de propósito.

## Como o endereço do cliente é lido

`X-Forwarded-For` é lido da direita para a esquerda. Cada proxy acrescenta o endereço que viu, então a entrada mais à esquerda é o que o próprio cliente enviou e nunca é confiável. O ABM pula as entradas que estão em `TRUSTED_PROXIES` e toma como cliente a primeira que não está. Por isso `TRUSTED_PROXIES` precisa ser estreito: qualquer coisa dentro da faixa pode acrescentar uma entrada à cadeia. `X-Forwarded-Host` também só é aceito se vier de um endereço em `TRUSTED_PROXIES`.

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

## Configurações de exemplo

Cada uma deixa passar todos os caminhos, inclusive `/initialize.json`, e cuida do websocket. Troque pelo seu domínio e pelo nome do seu contêiner, e defina `TRUSTED_PROXIES` com o endereço do proxy.

### nginx

```
server {
    listen 443 ssl;
    server_name abm.example.com;

    location / {
        proxy_pass http://172.20.0.2:5173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}
```

### Nginx Proxy Manager

```
Scheme:               http
Forward Hostname/IP:  audiobook-manager
Forward Port:         5173
Websockets Support:   on
```

### Traefik

```
labels:
  - traefik.enable=true
  - traefik.http.routers.abm.rule=Host(`abm.example.com`)
  - traefik.http.routers.abm.entrypoints=websecure
  - traefik.http.routers.abm.tls.certresolver=letsencrypt
  - traefik.http.services.abm.loadbalancer.server.port=5173
```

Traefik passes websockets without any extra setting.

### Caddy

```
abm.example.com {
    reverse_proxy audiobook-manager:5173
}
```

Caddy passes websockets and the original `Host` on its own.

## Subpasta e domínio

Para servir em `/abm`, defina **URL Base** em General como `/abm` e reinicie. Coloque o seu endereço público em **Application URL**.

Se o salvamento falhar com `cross_origin_rejected`, a origem do navegador não está batendo. Corrija o cabeçalho Host primeiro. Se não resolver, adicione o seu domínio em **CORS Allowed Domains** em Security e reinicie.

## Tamanho do corpo

Se envios grandes falharem com 413, confira o limite do próprio proxy, além de `MAX_REQUEST_BODY_BYTES`.

## O que o log diz

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": adicione o proxy.
- "... is in TRUSTED_PROXIES but didn't name a client address": faça o proxy enviar `X-Forwarded-For` ou `X-Real-IP`.

## Solução de problemas

Uma página em branco, ou uma mensagem "Could not load" dizendo que o proxy reverso precisa passar `/initialize.json` (avisado desde a 0.19.1), significa que o proxy não está repassando `/initialize.json` ao ABM. Repasse, junto com os outros caminhos acima. Atualizações ao vivo que nunca conectam geralmente indicam que o upgrade de websocket ou o cabeçalho `Sec-WebSocket-Protocol` não está passando.

Veja também [Segurança e login](/pt-br/settings/security/).
