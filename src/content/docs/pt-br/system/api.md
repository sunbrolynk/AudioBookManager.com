---
title: API
description: Autenticação, páginas de documentação e limites.
---

O ABM tem uma API REST em `/api`. A referência interativa fica em `/api/docs` (Swagger) e `/api/redoc`, e o schema em `/api/openapi.json`. Defina `DOCS_ENABLED=false` para remover os três. As páginas de documentação carregam recursos de uma CDN, então só aparecem completas com acesso à internet.

## Autenticação

- **Chave de API**: envie `X-Api-Key: <key>` ou `?apikey=<key>`. Você encontra ou gera uma nova em **Settings > General > Security**. Veja [Segurança](/pt-br/settings/security/).
- **Bearer token** obtido ao fazer login.
- Uma credencial que você apresenta tem prioridade sobre uma liberação, então uma requisição com chave vinda da LAN conta como requisição de API.

## Convenções

- Os erros voltam como `{"detail": ...}`.
- Segredos nunca são devolvidos. A resposta diz se um está definido.
- Uma requisição do navegador que altera estado precisa de uma origem que bata. Scripts que usam uma chave estão isentos.
- Os corpos de requisição têm limite de 10 MiB (`MAX_REQUEST_BODY_BYTES`). A restauração de backup e o envio de capa têm limites maiores. Acima do limite, a resposta é HTTP 413.
- Erros de validação nunca repetem o que você enviou.

## Quedas da fonte de metadados

Uma requisição que precisa da fonte de metadados e não recebe resposta falha com um `detail` que cita a fonte e o motivo, nunca com um resultado vazio. Uma busca que você está esperando desiste depois de cerca de 10 segundos quando o Libex limita a taxa.

Se você conhece o Sonarr: a API não é compatível com a v3. O Prowlarr pode sincronizar indexadores com o ABM pela conexão Prowlarr dele.
