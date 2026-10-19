---
title: Arquivos sidecar
description: Os arquivos metadata.json, de capa, OPF, descrição e narrador que o ABM grava ao lado de um livro.
---

Um sidecar é um arquivo pequeno ao lado do áudio. O Audiobookshelf e outros players leem esses arquivos. O ABM grava estes:

| Arquivo | Conteúdo | Interruptor |
|---|---|---|
| `metadata.json` | O próprio arquivo de metadados do Audiobookshelf, mais um bloco `abm` que marca o arquivo como do ABM. O Audiobookshelf lê esse antes de qualquer outro | Nenhum, sempre é gravado |
| `cover.jpg` | A capa do livro. Não é gravado quando a pasta já tem um `cover.*` | cover.jpg |
| `.opf` | Metadados em formato OPF. Leva o nome do primeiro arquivo de áudio do livro (por exemplo `Dune.opf`), ou `title.opf` quando o livro não tem áudio | title.opf |
| `desc.txt` | A descrição, sem HTML. Não é gravado quando não tem descrição | desc.txt |
| `reader.txt` | Os narradores. Não é gravado quando não tem narrador | reader.txt |

Junto com a estrutura de pastas, esses são os arquivos que o Audiobookshelf lê para os detalhes de um livro, então ele vê o mesmo livro que o ABM.

## Quando eles são gravados

O `metadata.json` é gravado toda vez que um livro é adicionado, importado ou atualizado.

Os outros quatro têm cada um o seu interruptor em **Settings > Metadata > Files to Create**, todos ligados por padrão. Eles só são gravados quando o gatilho correspondente também está ligado: **Create on Book Add** (desligado), **Create on Import** (ligado, o que cobre downloads, Library Import e downloads da Audible) e **Create on Refresh** (desligado). **Overwrite Existing** vem desligado, então um arquivo que já está lá fica. Nada é gravado enquanto a pasta do livro não existe.

O **Write to Directories** do diálogo de edição também grava os quatro, para um livro ou uma seleção de séries e autores. Veja [Configurações de metadados](/pt-br/settings/metadata/).

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
