---
title: Seus metadados, seu controle
description: O que uma atualização muda, o que você controla e os arquivos e tags que o ABM grava para o seu player.
---

O ABM mantém um registro dos metadados da sua biblioteca no próprio banco de dados e grava esses dados de volta onde o seu player consegue usar. Esta página explica o que fica sob o seu controle e o que uma atualização vai mexer.

## O que uma atualização muda

Uma atualização (o **Refresh & Scan** de um livro, a atualização de um autor, a atualização de uma série) consulta a fonte de metadados de novo e aplica o que vier. Campos que ela sobrescreve quando a fonte tem um valor: título, subtítulo, ano e data de lançamento, avaliação, duração, idioma, editora, descrição, autores, narradores, gêneros e a capa.

Um campo que a fonte devolve vazio fica como está.

## O que você controla

- **Uma capa que você escolheu.** Ela fica travada. Veja [A trava de capa](/pt-br/metadata/cover-lock/).
- **Tags, tags automáticas, monitoramento, escolhas de perfil de qualidade e os próprios arquivos.** Uma atualização não mexe neles.
- **Um livro cujos arquivos não podem ser lidos.** Ele não é mexido de jeito nenhum, e a página Tasks mostra o porquê.

Detalhes do livro como o título, os autores e a descrição vêm da fonte. O ABM não oferece edição manual deles, e isso não está nos planos. O que você controla é como eles são guardados e onde são gravados.

## O diálogo de edição

O diálogo de edição muda monitoramento, perfil de qualidade, caminho e tags, e permite gravar arquivos sidecar e tags de áudio no mesmo passo, para um livro ou para uma seleção inteira de séries e autores. Veja [Biblioteca](/pt-br/using/library/#o-diálogo-de-edição).

## Sidecars que o seu player lê

O ABM grava `cover.jpg`, um `.opf`, `desc.txt` e `reader.txt` ao lado do áudio. O Audiobookshelf lê o OPF, a capa e os arquivos de texto, então o player mostra o que você escolheu no ABM. Veja [Arquivos sidecar](/pt-br/using/sidecars/).

## Tags gravadas no áudio

O ABM pode gravar título, artista, artista do álbum, álbum, gênero, ano, comentário, narrador e capa embutida dentro dos próprios arquivos de áudio, assim os dados viajam junto com o arquivo. Vem desligado por padrão. Escolha os campos em **Settings > Metadata**. Veja [Configurações de metadados](/pt-br/settings/metadata/).

## Capítulos

Comparar os capítulos embutidos nos seus arquivos com os da edição publicada, e gravar os capítulos publicados nos arquivos, está previsto para uma versão futura. Veja [Capítulos](/pt-br/using/chapters/).

## Série e posição

Um livro carrega a sua série e posição. O ABM acompanha as séries como catálogos, para mostrar quais livros você tem e adicionar os que faltam. Veja [Acompanhamento de séries](/pt-br/using/series-tracking/).

## Tags e tags automáticas

As tags são suas. As tags automáticas aplicam tags por regras (gênero, narrador, avaliação, duração e mais) e podem tirar a tag quando um livro deixa de atender. As tags então orientam perfis, notificações, indexadores, listas de importação e o feed do calendário. Veja [Tags](/pt-br/settings/tags/).

## Um registro local que cresce

Tudo o que o ABM aprende sobre um livro fica no próprio banco SQLite do ABM em `/config`, inclusive livros que você remover depois. Faça backup dessa pasta e o registro está salvo. Depois que um livro entra, os metadados não dependem de a fonte estar acessível.

:::caution[Chega em uma versão futura]
Uma **Local Metadata Library** própria está prevista: uma cópia opcional de tudo que o ABM já consultou, mantida mesmo depois que um livro sai da sua biblioteca, com backups agendados próprios e um download em SQLite.
:::

## Agendamentos de atualização

- O Discover tem o próprio agendamento. Veja [Configurações do Discover](/pt-br/settings/discover/).
- A biblioteca da Audible tem o próprio agendamento de sincronização. Veja [Configurações da Audible](/pt-br/settings/audible/).
- Uma varredura da biblioteca pode rodar a cada N horas e quando arquivos mudam. Veja [Media Management](/pt-br/settings/media-management/).
- A gravação de sidecars e tags na atualização é controlada por **Create on Refresh** e **Write Tags on Refresh**.
