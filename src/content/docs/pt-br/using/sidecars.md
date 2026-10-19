---
title: Arquivos sidecar
description: Os arquivos de capa, OPF, descrição, narrador e cue que o ABM grava ao lado de um livro.
---

Um sidecar é um arquivo pequeno ao lado do áudio. O Audiobookshelf e outros players leem esses arquivos. O ABM pode gravar estes:

| Arquivo | Conteúdo |
|---|---|
| `cover.jpg` | A capa do livro |
| `.opf` | Metadados em formato OPF, que o Audiobookshelf lê. Leva o nome do primeiro arquivo de áudio do livro (por exemplo `Dune.opf`), ou `title.opf` quando o livro não tem áudio |
| `desc.txt` | A descrição |
| `reader.txt` | O narrador |
| `.cue` | Capítulos do Libex (chega na próxima versão) |

## Quando eles são gravados

Em **Settings > Metadata**, **Create on Book Add**, **Create on Import** e **Create on Refresh** escolhem quando. Por padrão, só a importação grava esses arquivos. **Overwrite Existing** vem desligado, então um arquivo que já está lá fica. Você também pode gravar pelo diálogo de edição, para um livro ou uma seleção de séries e autores. Veja [Configurações de metadados](/pt-br/settings/metadata/).

## A capa é especial

Uma capa que você mesmo escolheu fica travada. Veja [A trava de capa](/pt-br/metadata/cover-lock/).

## Na importação

A importação também traz os arquivos que não são áudio que o livro já tem, conforme **Media Management > Importing**. Quando a origem tem um `.opf`, uma descrição ou um arquivo de narrador, o ABM pega no máximo um de cada e chama de `desc.txt` e `reader.txt`. Um destino que já existe não é mexido, e uma capa nova nunca é gravada por cima de um `cover.*` existente.

## Hardlinks

Uma importação com hardlink deixa o original intacto. Quando o ABM grava qualquer um desses arquivos, ele grava um arquivo novo em vez de editar no lugar, então a origem de onde você importou mantém o conteúdo.

## Pegadinhas

- Um `metadata.json` é tratado pelo ABM quando tem o bloco do próprio ABM. O `metadata.json` de outra ferramenta segue o interruptor de arquivos de informação do livro (Book info files).
- Numa pasta compartilhada por vários livros, só os arquivos com o nome do áudio deste livro pertencem a ele.
- Apagar um livro remove os sidecars dele quando eles têm o nome dos arquivos daquele livro.
