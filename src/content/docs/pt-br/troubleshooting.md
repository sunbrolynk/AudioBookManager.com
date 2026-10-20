---
title: Solução de problemas
description: Como resolver os problemas que você tem mais chance de encontrar.
---

## Arquivos deixados por uma importação interrompida (.abmstage)

Uma importação primeiro prepara cada arquivo ao lado do nome final e só troca todos de lugar depois que todos chegaram. Se algo falhar, o ABM devolve o que já tinha movido. Se não conseguir devolver uma parte, essa parte fica na pasta do livro como um arquivo oculto terminado em `.abmstage`. Ele pode ser a única cópia, então o ABM mantém o arquivo e o erro diz o nome dele.

Enquanto houver qualquer arquivo `.abmstage` na pasta de um livro, as importações para essa pasta param com:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Para recuperar:

1. Encontre o arquivo `.abmstage` citado no erro.
2. Mova ele de volta para o download, ou para a pasta do livro com o nome real. Ou apague, se você não precisar dele.
3. Tente a importação de novo.

## Todo mundo precisa fazer login atrás de um proxy reverso

Sem `TRUSTED_PROXIES`, uma requisição com cabeçalhos de encaminhamento nunca é tratada como local, então precisa fazer login. Isso é de propósito.

1. Defina `TRUSTED_PROXIES` com o endereço do seu proxy, por exemplo `172.20.0.5`. Um proxy no mesmo host precisa de `127.0.0.1`.
2. Faça o proxy enviar `X-Forwarded-For` ou `X-Real-IP`. O nginx proxy manager, o Traefik e o Caddy já fazem isso por padrão.
3. Reinicie o ABM.

O log do app diz qual é o caso:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": adicione o proxy em `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": configure o proxy para enviar `X-Forwarded-For` ou `X-Real-IP`.

O caso contrário: um proxy que não envia cabeçalhos de encaminhamento parece um cliente local, então tudo o que passa por ele pula o login. Coloque Authentication Required em Enabled.

## Alterações são recusadas pelo navegador

Confira se o proxy repassa o cabeçalho `Host` original ou envia `X-Forwarded-Host`. Veja [Configuração](/pt-br/configuration/#proxy-reverso).

## As capas somem, ou a página se comporta mal atrás de um proxy

O cabeçalho Content-Security-Policy só permite imagens de capa via HTTPS. Procure violações no console do navegador. Sirva as capas via HTTPS, ou defina `SECURITY_HEADERS_CSP_ENABLED=false`.

## Uma requisição grande retorna 413

Aumente `MAX_REQUEST_BODY_BYTES`. Um proxy reverso também pode impor um limite menor e responder 413 por conta própria.

## A fonte de metadados está indisponível

Adicionar, buscar, atualizar e o Discover precisam do Libex. Quando o ABM não recebe resposta, uma busca de livros falha com "Libex search failed" e uma busca de autores ou séries com "Libex could not be reached; try again shortly", em vez de mostrar uma lista vazia. Causas: o Libex está fora do ar, ou a conexão do ABM não chega até ele.

1. Veja a [página de status do ABM](https://status.audiobookmanager.com) e a [página de status do Libex](https://status.libexdb.com) para saber se está fora do ar para todo mundo.
2. Confira se o contêiner chega à internet e se o proxy em **Settings > General > Proxy** está certo, se você usa um.
3. Tente de novo depois de um minuto.
4. Enquanto isso, você ainda pode adicionar e importar livros à mão.

Uma tarefa em segundo plano que pega uma queda falha informando o motivo. Ela é repetida sozinha, até seis vezes ou por seis horas, o que vier primeiro.

## Uma atualização mudou os detalhes de um livro

Título, descrição, autores, narradores e campos parecidos vêm da fonte de metadados, e uma atualização aplica o que ela diz agora. O ABM não tem como editar isso à mão. O que você controla é a capa (que dá para travar), quais arquivos são gravados, as tags e se as atualizações gravam sidecars e tags. Veja [Seus metadados, seu controle](/pt-br/metadata/control/).

## Um livro aparece como Missing Files

O livro foi baixado, mas os arquivos não estão onde o ABM procura. Confira a montagem e as permissões, depois rode **Refresh & Scan**. Uma varredura não mexe num livro quando a pasta dele não pode ser lida, e a tarefa aparece como Partial, com o motivo.

## As importações param com "Files left by an interrupted import"

Veja a seção sobre `.abmstage` lá em cima.

## Os downloads terminam, mas nunca são importados

Adicione um mapeamento de caminho remoto, ou faça o ABM e o cliente enxergarem a pasta no mesmo caminho. Uma subpasta sem permissão de leitura bloqueia o download inteiro até as permissões serem corrigidas. Veja [Clientes de download](/pt-br/settings/download-clients/).

## O Docker não alcança a fonte de metadados nem os indexadores

Confira primeiro o DNS e a configuração de proxy. No Docker, o ABM só chega ao Libex e aos seus indexadores se o contêiner chegar à internet.

## Ainda travado

Pergunte no [Discord do ABM](https://discord.gg/qeJRrM6AZ), [abra uma issue](https://github.com/sunbrolynk/AudioBook-Manager/issues) ou mande um e-mail para [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
