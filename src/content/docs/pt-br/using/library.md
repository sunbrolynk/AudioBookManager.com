---
title: Biblioteca
description: Livros, autores e séries, e como o ABM acompanha o status deles.
---

O menu **Library** tem três listas: **Books**, **Series** e **Authors**. **Add New** e **Library Import** colocam coisas nelas. **Audible Library** e **Conversions** têm páginas próprias.

## Livros

Cada livro é uma linha de visão geral, um pôster ou uma linha de tabela (a troca de visualização fica na barra de ferramentas). Um livro tem um status:

- **Wanted**: monitorado, ainda sem arquivos. O ABM procura por ele.
- **Downloaded**: os arquivos estão no disco.
- **Missing Files**: o livro foi baixado, mas os arquivos não estão mais onde o ABM espera.
- **Unmonitored**: o ABM não mexe nele.

Abra um livro para ver a página de detalhes: arquivos, metadados, histórico, a qualidade que o ABM mediu e ações como Refresh & Scan e o diálogo de edição (veja abaixo). Veja [Arquivos sidecar](/pt-br/using/sidecars/).

A página de detalhes também pode gravar um único arquivo (OPF, NFO ou metadata.json), as tags de áudio, a capa incorporada ou **Write All**. No celular, tudo isso fica na folha Actions, em **Write to folder and files**.

Quando a barra de ferramentas de uma página fica estreita demais no desktop, os botões que não cabem vão para um menu **More** no fim do grupo. Ordenar, filtrar e as visualizações sempre ficam na barra.

Se você conhece o Sonarr: um livro é um episódio, uma série é temporada e programa numa coisa só, e um autor é um jeito de agrupar os dois. A diferença é que um livro pode estar em várias séries, e o ABM usa a principal (a de menor posição) quando precisa escolher.

## Séries

**Library > Series** lista todas as séries com as contagens de livros que você tem, desejados e com arquivos faltando, em Overview ou Posters. A página de uma série mostra o catálogo inteiro, incluindo os livros que você não tem. Filtre por All, In Library ou Not in Library. **Add Remaining** ou **Select to Add** traz os livros que faltam como desejados, e **Refresh Series** puxa o catálogo de novo. **Monitor New Books** (All ou None) decide se os livros que saírem depois entram como desejados. Veja [Acompanhamento de séries](/pt-br/using/series-tracking/).

## Autores

**Library > Authors** lista os autores, em Overview ou Posters. A página de um autor mostra o catálogo dele agrupado por série, com as contagens de baixados e do total de cada série, além do perfil de qualidade, gêneros e avaliação. **Refresh Catalog** puxa o catálogo de novo e **Search Author** procura os livros desejados dele. **Monitor New Books** funciona igual ao de uma série, e um autor começa em None.

Apagar uma série ou um autor é recusado enquanto ainda houver livros dele na biblioteca. Remova os livros primeiro.

## Herança do perfil de qualidade

O perfil de qualidade de um livro vem, nesta ordem: da substituição do próprio livro, da série principal, do autor principal e, por fim, do perfil padrão. Veja [Perfis](/pt-br/settings/profiles/).

## O diálogo de edição

O diálogo de edição de um livro muda as configurações do próprio ABM para ele, não os metadados:

- **Monitored**
- **Quality Profile** (No Change ao editar vários)
- **Path**, para um livro (com um botão para recalcular), ou **Root Folder** para uma seleção
- **Tags**
- **Audiobookshelf**: a caixa **Write All** marca todas as caixas abaixo, então um único salvamento grava todos os arquivos que o Audiobookshelf lê
- **Write to Directories**: cover.jpg, desc.txt, reader.txt, um OPF, um NFO e metadata.json. O OPF e o NFO têm o nome do primeiro arquivo de áudio do livro (por exemplo `Dune.opf`), ou o nome do livro se não houver áudio
- **Write to Audio Files**: **Write audio tags** e **Embed cover art**, que grava a capa nos arquivos de áudio

O mesmo diálogo abre para séries e autores e vale para cada um dos livros deles. As opções de gravação rodam quando você salva. Para cada livro, os arquivos da pasta são gravados primeiro, depois as tags, depois a capa incorporada. Um arquivo para o qual o livro não tem nada (sem descrição, sem narrador, sem capa) é pulado e não conta como erro. Com um livro ou uma seleção de livros, você vê um aviso ao salvar. Com uma série ou um autor, ele é pulado em silêncio.

## Tags

Livros, autores e séries podem ter tags. As tags orientam indexadores, notificações, listas de importação e perfis, e filtram o feed do calendário. Veja [Tags](/pt-br/settings/tags/).

## Seleção

Selecione linhas para agir em várias de uma vez: monitorar, buscar, colocar tag, renomear, apagar. No celular, veja [Uso no celular](/pt-br/phone/).
