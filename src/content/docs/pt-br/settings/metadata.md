---
title: Metadados
description: Quais arquivos sidecar e tags de áudio o ABM grava, e quando.
---

**Settings > Metadata** decide o que o ABM grava na pasta de um livro e nos arquivos dele. Como esses arquivos são usados está em [Arquivos sidecar](/pt-br/using/sidecars/).

## Fonte (Source)

**Metadata Source** é Built-in (padrão), Hosted (libexdb.com) ou Self-hosted, que pede uma **Server URL**. **Test** faz uma requisição de verdade à fonte escolhida sem salvar, **Status** diz se ela está pronta, e **Connection** mostra a rota por onde as consultas saem, com link para **Settings > Network**. A troca vale na hora para todas as consultas. Veja [Escolhendo uma fonte de metadados](/pt-br/metadata/choosing-a-source/).

## Criação de arquivos de metadados

| Configuração | Padrão | Efeito |
|---|---|---|
| Create on Book Add | desligado | Grava os arquivos quando um livro é adicionado como desejado |
| Create on Import | ligado | Grava os arquivos quando um audiolivro é importado |
| Create on Refresh | desligado | Cria ou atualiza os arquivos quando os metadados são atualizados |
| Overwrite Existing | desligado | Substitui os arquivos que já estão na pasta |

Arquivos a criar: `cover.jpg` (ligado), `title.opf` (ligado, compatível com o Audiobookshelf), `desc.txt` (ligado) e `reader.txt` (ligado).

## Gravação de tags nos arquivos de áudio

Grava as tags de áudio dentro dos próprios arquivos de áudio.

| Configuração | Padrão |
|---|---|
| Write Audio Tags | desligado |
| Write Audio Tags on Import | ligado, quando a gravação de tags está ligada |
| Write Audio Tags on Refresh | desligado |

Campos de tag, todos ligados por padrão: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) e Cover Art.

## Armazenamento local (Local Storage)

Com a fonte Built-in, aparecem as seções **Local Storage** e **Storage Backups**. Elas são uma prévia e ainda não estão conectadas. Veja [Seus metadados, seu controle](/pt-br/metadata/control/).

## Pegadinhas

- A gravação de tags altera os arquivos de áudio. O Audiobookshelf vai ver eles como modificados.
- Se os metadados ou uma capa não puderem ser buscados durante a gravação de tags, a chamada devolve avisos em vez de falhar.
- Quando uma capa não pôde ser incorporada porque a conexão a recusou, a página do livro e o diálogo de edição mostram um aviso em vez de um sucesso simples.
