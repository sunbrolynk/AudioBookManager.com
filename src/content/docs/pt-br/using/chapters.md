---
title: Capítulos
description: Compare os capítulos embutidos de um livro com o Libex e corrija.
---

:::caution[Chega em uma versão futura]
Tudo nesta página, menos os padrões de conversão, ainda não está em nenhuma versão lançada.
:::

A página de detalhes de um livro mostra os capítulos que o Libex tem ao lado dos capítulos realmente embutidos nos seus arquivos. O Libex é a referência. A pergunta que essa visualização responde é se os seus arquivos têm o que o Libex diz que deveriam ter.

## Lendo a comparação

Cada capítulo do Libex ganha um selo, um ícone mais uma palavra:

- **Matches**: um capítulo embutido começa a até 2 segundos de distância e o título é o mesmo, ignorando maiúsculas, acentos e pontuação nas pontas. "Chapter 1" e "Chapter One" são títulos diferentes.
- **Differs**: o título é diferente, ou o título existe ali perto, mas começa a mais de 2 segundos de distância.
- **Missing**: nenhum capítulo embutido faz par com ele.
- **Extra**: um capítulo embutido que não faz par com nenhum capítulo do Libex.

Livros em vários arquivos são colocados em sequência numa linha do tempo só, na ordem dos nomes dos arquivos. Um capítulo que continua de um arquivo para outro como "(cont.)" aparece como um capítulo só. Se o Libex não estiver acessível, você vê a lista embutida e uma linha explicando o porquê. A página nunca dá erro.

## Edição errada

Os tempos do Libex só servem para a edição que eles descrevem. Se a duração do seu áudio for diferente da do Libex em mais de 15 segundos ou 0,5 por cento, o que for maior, aparece um aviso e tanto **Update** quanto **Create .cue** ficam bloqueados. Não tem como forçar.

## Atualizar os capítulos embutidos

Substitui os capítulos de cada arquivo de áudio pelos do Libex. Roda como um trabalho de capítulos na [fila de conversões](/pt-br/using/conversions/), sem recodificar. Só é oferecido quando a comparação diz "differs" ou "no embedded chapters".

- Cada arquivo é regravado num arquivo temporário, verificado e então colocado no lugar. A verificação exige que ele possa ser lido, não seja mais curto que o original em mais de 0,5 segundo ou 1 por cento, use o mesmo codec e tenha exatamente o número de capítulos pedido. Se a verificação falhar, o original fica.
- Se um trabalho parar no meio, os arquivos já regravados continuam regravados. O erro diz "N of M files already updated". Rode o Update de novo depois de corrigir a causa.
- Recusado logo de cara: outra conversão do livro está rodando, sem ASIN ou sem capítulos no Libex, edição errada, um arquivo que não pode ser lido, ou nada para atualizar.

## Criar .cue

Grava na pasta do livro uma cue sheet com os capítulos do Libex, com o nome do primeiro arquivo de áudio. Sobrescreve um arquivo que já exista com esse nome. Veja [Arquivos sidecar](/pt-br/using/sidecars/).

## Pegadinhas

- Arquivos MP3 VBR sem cabeçalho de duração têm uma duração estimada. Uma edição certa pode parecer alguns segundos fora.
- Um arquivo regravado parece alterado para o Audiobookshelf e é varrido de novo.
- Títulos de capítulo com `=`, `;`, `#` ou barra invertida podem ser gravados errado até sair uma correção.

## O comportamento padrão de capítulos nas conversões

Separado do que está acima: **Settings > Conversions > Chapter Handling** decide o que uma conversão faz com os capítulos. Veja [Configurações de conversão](/pt-br/settings/conversions/).
