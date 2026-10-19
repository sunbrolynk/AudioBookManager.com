---
title: Biblioteca
description: Livros, autores e séries, e como o ABM acompanha o status deles.
---

O menu **Library** tem três listas: **Books**, **Series** e **Authors**. **Add New** e **Library Import** colocam coisas nelas. **Audible Library** e **Conversions** têm páginas próprias.

## Livros

Cada livro é uma linha, um pôster ou uma linha de tabela (a troca de visualização fica na barra de ferramentas). Um livro tem um status:

- **Wanted**: monitorado, ainda sem arquivos. O ABM procura por ele.
- **Downloaded**: os arquivos estão no disco.
- **Missing Files**: o livro foi baixado, mas os arquivos não estão mais onde o ABM espera.
- **Unmonitored**: o ABM não mexe nele.

Abra um livro para ver a página de detalhes: arquivos, metadados, histórico, a qualidade que o ABM mediu e ações como Refresh & Scan e o diálogo de edição (veja abaixo). Veja [Arquivos sidecar](/pt-br/using/sidecars/).

Se você conhece o Sonarr: um livro é um episódio, uma série é temporada e programa numa coisa só, e um autor é um jeito de agrupar os dois. A diferença é que um livro pode estar em várias séries, e o ABM usa a principal (a de menor posição) quando precisa escolher.

## Séries e autores

As listas Series e Authors mostram as contagens de livros que você tem, desejados e com arquivos faltando. Abra um para ver o catálogo, que inclui livros que você não tem. Dali você pode adicionar os livros que faltam. Veja [Acompanhamento de séries](/pt-br/using/series-tracking/).

Apagar uma série ou um autor é recusado enquanto ainda houver livros dele na biblioteca. Remova os livros primeiro.

## Herança do perfil de qualidade

O perfil de qualidade de um livro vem, nesta ordem: da substituição do próprio livro, da série principal, do autor principal e, por fim, do perfil padrão. Veja [Perfis](/pt-br/settings/profiles/).

## O diálogo de edição

O diálogo de edição de um livro muda as configurações do próprio ABM para ele, não os metadados:

- **Monitored**
- **Quality Profile** (No Change ao editar vários)
- **Path**, para um livro (com um botão para recalcular), ou **Root Folder** para uma seleção
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt e um OPF (a caixa de seleção diz "metadata.opf"; o arquivo leva o nome do primeiro arquivo de áudio do livro, por exemplo `Dune.opf`, ou `title.opf` quando não tem áudio)
- **Write to Audio Files**: grava as tags de metadados

O mesmo diálogo abre para séries e autores e vale para cada um dos livros deles. As opções de gravação rodam quando você salva.

## Tags

Livros, autores e séries podem ter tags. As tags orientam indexadores, notificações, listas de importação e perfis, e filtram o feed do calendário. Veja [Tags](/pt-br/settings/tags/).

## Seleção

Selecione linhas para agir em várias de uma vez: monitorar, buscar, colocar tag, renomear, apagar. No celular, veja [Uso no celular](/pt-br/phone/).
