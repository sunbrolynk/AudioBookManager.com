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
- `POST /api/tasks` só coloca na fila o `backup_export`. Qualquer outro tipo de tarefa recebe HTTP 403, e configurações que não servem para o `backup_export` recebem HTTP 422. Importações manuais passam pelos endpoints de `/api/manual-import/` e as varreduras da biblioteca por `POST /api/library/scan`.
- O Library Import guarda no servidor as correspondências do Libex de cada linha. Um salvamento da sessão (`PUT /api/library-import/session/{id}` ou `PATCH /api/library-import/session/{id}/choices`) com uma linha que envia `libex_matches` é recusado com HTTP 422 que nomeia o campo, então deixe ele de fora das linhas que você salva de volta. `POST /api/library-import/retry-match` aceita um `session_id` opcional e guarda nessa sessão as correspondências que encontrar.
- `GET /api/metadata/search` devolve todos os resultados quando você omite `limit`. Com `limit` (de 1 a 50) devolve no máximo essa quantidade.

## Quedas da fonte de metadados

Uma requisição que precisa da fonte de metadados e não recebe resposta falha com um `detail` que cita a fonte e o motivo, nunca com um resultado vazio. Uma busca que você está esperando desiste depois de cerca de 10 segundos quando o Libex limita a taxa.

Se você conhece o Sonarr: a API não é compatível com a v3. O Prowlarr pode sincronizar indexadores com o ABM pela conexão Prowlarr dele.
