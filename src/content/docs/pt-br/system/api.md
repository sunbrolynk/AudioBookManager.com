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
- O Library Import guarda no servidor as correspondências do Libex de cada linha. Um salvamento da sessão (`PUT /api/library-import/session/{id}` ou `PATCH /api/library-import/session/{id}/choices`) com uma linha que envia `libex_matches` é recusado com HTTP 422 que nomeia o campo, então deixe ele de fora das linhas que você salva de volta. Um salvamento, ou um Adicionar, cujas linhas apontam uma pasta ou arquivo (incluindo os `audio_files` de uma linha) que a própria varredura da sessão não encontrou é recusado com HTTP 422 que nomeia os caminhos. A prévia dos arquivos extras de uma linha (`POST /api/library-import/session/{id}/extras`), as prévias de capa dela e `POST /api/library-import/session/{id}/file-tags` respondem HTTP 422 "Outside the folder this session scanned" quando a linha ou um arquivo sai da pasta escaneada por um link. `POST /api/library-import/retry-match` aceita um `session_id` opcional e guarda nessa sessão as correspondências que encontrar.
- `GET /api/metadata/search` devolve uma página de até 50 resultados. `page` (de 0 a 9) escolhe a página, e a resposta traz `page` e `has_more`, que diz se uma página seguinte pode ter mais. Uma busca por ASIN só tem a página 0. `search_type=phrase` devolve as melhores correspondências do Libex para a busca, também só na página 0 e com `has_more` false. Uma página pode vir curta e ainda ter `has_more` true, porque o Libex deixa de fora livros que não consegue ler, então continue buscando páginas até `has_more` ser false. `limit` (de 1 a 50) corta uma página.
- `POST /api/manual-import/execute` e `/execute-to-book` conferem cada linha de arquivo com um esquema fixo. Uma chave desconhecida, um `source_path` relativo ou uma lista `files` vazia é recusado com HTTP 422. Cada origem precisa ser um arquivo de áudio que não esteja numa pasta do sistema, direto numa pasta de nível superior como `/tmp` ou `/mnt`, nem numa das pastas do próprio ABM (configuração, banco de dados, backups, logs, capas, lixeira, pasta temporária e as pastas com o certificado e a chave SSL), seguindo links simbólicos. Um arquivo recusado recebe HTTP 400 com o caminho dele (`Can't import <path>: the file <reason>.`) e nada entra na fila.
- `POST /api/manual-import/execute` e `/execute-to-book` nomeiam cada arquivo pelo [Book Naming](/pt-br/settings/media-management/#book-naming) quando a importação roda, e ignoram qualquer `destination_filename` que venha numa linha de arquivo.
- `POST /api/manual-import/check-conflicts` recebe um `book_id` e os `source_paths` que você quer importar, e responde em `destination_filenames` com o nome que cada arquivo vai receber, por caminho de origem. `clashed` lista os arquivos de origem que pegam um nome do formato porque o nome deles entraria em conflito. `audio_conflicts` e `own_conflicts` listam os nomes que já estão na pasta do livro, sem diferenciar maiúsculas de minúsculas.

## Quedas da fonte de metadados

Uma requisição que precisa da fonte de metadados e não recebe resposta falha com um `detail` que cita a fonte e o motivo, nunca com um resultado vazio. Uma busca que você está esperando desiste depois de cerca de 10 segundos quando o Libex limita a taxa.

Se você conhece o Sonarr: a API não é compatível com a v3. O Prowlarr pode sincronizar indexadores com o ABM pela conexão Prowlarr dele.
