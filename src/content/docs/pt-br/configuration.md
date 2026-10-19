---
title: Variáveis de ambiente
description: Variáveis de ambiente, redes locais e o básico de proxy reverso.
---

A maioria das configurações fica na interface web, em **Settings**. Estas aqui são definidas no ambiente.

## Variáveis de ambiente

| Variável | Padrão | O que faz |
|---|---|---|
| `PORT` | `5173` | Porta da interface web. |
| `TIMEZONE` | `UTC` | Seu fuso horário local, por exemplo `America/New_York`. |
| `LOCAL_NETWORKS` | vazio | Redes CIDR extras que pulam o login. Separadas por vírgula. |
| `TRUSTED_PROXIES` | vazio | Redes CIDR dos proxies reversos em que o ABM confia para definir `X-Forwarded-For` e `X-Real-IP`. |
| `APP_SECRET` | automático | Raiz de criptografia das credenciais guardadas. Quando não está definida, é gerada em `/config/app_secret` na primeira execução. Defina para manter a chave fora do disco de configuração. |
| `DOCS_ENABLED` | `true` | Serve a documentação da API em `/api/docs`, `/api/redoc` e `/api/openapi.json`. `false` remove tudo isso. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Envia um cabeçalho Content-Security-Policy que limita a interface aos scripts, estilos e API do próprio ABM, mais imagens de capa via HTTPS. `false` remove o cabeçalho. Embutir o ABM em frames continua bloqueado de qualquer jeito. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Maior corpo de requisição que um endpoint aceita (10 MiB). Acima disso, a resposta é HTTP 413. A restauração de backup e o envio de capa têm limites próprios. |

## Redes locais

Loopback, as faixas privadas (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), endereços link-local e IPv6 unique-local já contam como locais. Com **Authentication Required** no modo de endereços locais, uma requisição vinda de um deles pula o login. Para adicionar outras, liste assim:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Proxy reverso

Atrás do nginx, Traefik ou parecido, defina `TRUSTED_PROXIES` com o endereço do proxy:

```
TRUSTED_PROXIES=172.20.0.5
```

- Deixe o mais restrito possível. Use o endereço do próprio proxy, não uma sub-rede inteira do Docker.
- Um proxy no mesmo host precisa de `TRUSTED_PROXIES=127.0.0.1`.
- Só o cliente que o proxy indica em `X-Forwarded-For` ou `X-Real-IP` conta como cliente.
- Repasse o cabeçalho `Host` original (nginx: `proxy_set_header Host $host;`) ou envie `X-Forwarded-Host`. Uma requisição do navegador que altera alguma coisa é recusada, a não ser que a origem dela bata com o endereço pelo qual o ABM é acessado ou com um domínio dos domínios permitidos no CORS.
- Um proxy que não envia cabeçalhos de encaminhamento parece um cliente local. Se você usa um assim, coloque Authentication Required em Enabled.

Se o login estiver sendo pedido quando não deveria, veja [Solução de problemas](/pt-br/troubleshooting/).

## Mais

- Modos de login, chaves de API e a política de segurança de conteúdo: [Segurança e login](/pt-br/settings/security/).
- Um passo a passo completo de proxy: [Proxy reverso](/pt-br/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (padrão 500 MiB) limita o envio de arquivos para restaurar backup.
- Todo o resto fica em **Settings** no app. Veja [Visão geral das configurações](/pt-br/settings/media-management/).
