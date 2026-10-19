---
title: Segurança e login
description: Modos de autenticação, chaves de API, proxies confiáveis, redes locais e a política de segurança de conteúdo.
---

A seção **Security** de **Settings > General** controla quem pode usar o ABM e como.

## Autenticação

| Configuração | Padrão | Opções |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Deixe a senha em branco para manter a atual |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | vazio | Faixas CIDR extras cujos clientes pulam o login |
| CORS Allowed Domains | vazio | Outras origens que podem chamar a API a partir de um navegador. Precisa reiniciar |

Os dois modos de **Authentication Required** que você vai usar:

- **Enabled**: todo mundo faz login, inclusive a sua LAN.
- **Disabled for Local Addresses** (guardado como `local_disabled`): uma requisição vinda de um endereço local pula o login. Loopback, as faixas privadas, link-local e IPv6 unique-local contam como locais. **Local Networks** adiciona outras e nunca substitui essas.

Numa instalação nova, as requisições são recusadas até a configuração inicial terminar.

## Proxies reversos

Atrás de um proxy, defina `TRUSTED_PROXIES` para o ABM saber em quais cabeçalhos de encaminhamento acreditar. Uma requisição com cabeçalhos de encaminhamento vinda de um endereço fora dessa lista nunca é local e precisa fazer login. Isso é de propósito. Veja [Proxy reverso](/pt-br/guides/reverse-proxy/).

Um proxy que não envia cabeçalhos de encaminhamento parece um cliente local. Se você usa um assim, coloque Authentication Required em Enabled.

## Confirmação de senha

Algumas alterações pedem a sua senha atual de novo: salvar as configurações de Security, mostrar ou gerar de novo a chave de API, e salvar ou apagar uma configuração do WireGuard. Uma senha errada conta como login que falhou no log de segurança. Se ainda não houver senha definida, nenhuma é pedida.

## Chave de API

A chave nunca aparece até você confirmar a sua senha. **Regenerate API Key** cria uma nova, mostra uma vez só e invalida a chave antiga na hora. A chave não pode ser digitada. Se a chave guardada não puder ser descriptografada (o segredo do app mudou), gere outra.

Envie como `X-Api-Key` ou como parâmetro `apikey`. Uma chave vinda de um endereço da LAN conta como requisição com chave. Veja [API](/pt-br/system/api/).

## Alterações pelo navegador

Uma requisição do navegador que altera alguma coisa é recusada com `cross_origin_rejected`, a não ser que a origem dela bata com o endereço pelo qual o ABM é acessado, com o host repassado por um proxy confiável ou com um domínio permitido no CORS. Requisições com chave de API não são afetadas.

## Política de segurança de conteúdo

O ABM envia um cabeçalho Content-Security-Policy, a não ser que `SECURITY_HEADERS_CSP_ENABLED=false`. Ele limita a interface aos scripts e à API do próprio ABM, e as imagens ao ABM ou a HTTPS. Capas servidas por HTTP simples são bloqueadas, e o ABM não pode ser exibido num iframe de jeito nenhum. As páginas de documentação da API recebem uma política mais solta para conseguirem carregar de uma CDN.

## Logins que falharam

Não existe bloqueio de conta. As tentativas que falharam vão para o log, são agrupadas por endereço no Activity Log e gravadas linha por linha no log de segurança para ferramentas como o fail2ban.

## Segredos

As senhas e chaves que o ABM guarda para indexadores, clientes e conexões são criptografadas com um segredo do app. Defina `APP_SECRET` para manter a chave fora do disco de configuração. Se nenhum dos dois existir, o ABM gera `/config/app_secret`. As senhas de proxy e de destinos de exportação são guardadas em texto simples.
