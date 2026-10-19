---
title: Metadados
description: Quais arquivos sidecar e tags de áudio o ABM grava, e quando.
---

**Settings > Metadata** decide o que o ABM grava na pasta de um livro e nos arquivos dele. Como esses arquivos são usados está em [Arquivos sidecar](/pt-br/using/sidecars/).

## Criação de arquivos de metadados

| Configuração | Padrão | Efeito |
|---|---|---|
| Create on Book Add | desligado | Grava os arquivos quando um livro é adicionado como desejado |
| Create on Import | ligado | Grava os arquivos quando um audiolivro é importado |
| Create on Refresh | desligado | Cria ou atualiza os arquivos quando os metadados são atualizados |
| Overwrite Existing | desligado | Substitui os arquivos que já estão na pasta |

Arquivos a criar: `cover.jpg` (ligado), `title.opf` (ligado, compatível com o Audiobookshelf), `desc.txt` (ligado) e `reader.txt` (ligado).

## Gravação de tags nos arquivos de áudio

Usa o ffmpeg para gravar tags dentro do próprio áudio.

| Configuração | Padrão |
|---|---|
| Write Audio Tags | desligado |
| Write Tags on Import | ligado, quando a gravação de tags está ligada |
| Write Tags on Refresh | desligado |

Campos de tag, todos ligados por padrão: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) e Cover Art.

## Chega na próxima versão

A página é reorganizada em seções e ganha uma seção **Source**, com a opção **Metadata Source**, **Test** e **Status**. Veja [Escolhendo uma fonte de metadados](/pt-br/metadata/choosing-a-source/).

Ela também ganha uma seção **Local Metadata Library** (opcional, mostrada como uma prévia que ainda não está conectada) com download da biblioteca em SQLite e backups agendados próprios. Os backups seguem as opções de backup de General e por padrão são semanais às 04:00, guardados por 28 dias.

## Pegadinhas

- A gravação de tags altera os arquivos de áudio. O Audiobookshelf vai ver eles como modificados.
- Se os metadados ou uma capa não puderem ser buscados durante a gravação de tags, a chamada devolve avisos em vez de falhar.
