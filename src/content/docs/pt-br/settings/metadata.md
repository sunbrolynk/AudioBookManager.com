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

## Chega em uma versão futura

Uma escolha de fonte de metadados e uma cópia local da biblioteca de metadados estão previstas para uma versão futura. Veja [Seus metadados, seu controle](/pt-br/metadata/control/).

## Pegadinhas

- A gravação de tags altera os arquivos de áudio. O Audiobookshelf vai ver eles como modificados.
- Se os metadados ou uma capa não puderem ser buscados durante a gravação de tags, a chamada devolve avisos em vez de falhar.
