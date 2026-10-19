---
title: A trava de capa
description: Por que uma capa que você escolheu não é substituída na atualização.
---

Quando você mesmo define a capa de um livro, enviando uma imagem, colando uma URL ou escolhendo um resultado na busca de capas, o ABM guarda essa capa e **trava** ela. Nenhuma atualização de metadados substitui uma capa travada.

## Como saber

Uma capa travada é servida pelo armazenamento do próprio ABM, não por um endereço da Audible. É assim que o ABM diferencia uma capa personalizada de uma automática.

## O que isso afeta

- A atualização de metadados mantém a capa, mesmo que o Libex tenha uma nova.
- A gravação do `cover.jpg` e a arte embutida usam a capa que você escolheu.
- O Library Import pode escolher a capa de cada livro. Veja [Importação da biblioteca](/pt-br/library-import/).

## Desfazendo

A capa do livro pode voltar para a automática, o que destrava ela. Depois disso, uma atualização pode substituir a capa de novo.

## Pegadinhas

- A trava vale só para a capa. Título, autor e o resto continuam sendo atualizados.
- As capas são baixadas pela sua conexão de saída. Se nenhuma estiver escolhida, capas novas não são baixadas, e as capas em cache continuam sendo servidas.
