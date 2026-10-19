---
title: Listas de importação
description: Traga livros desejados do MyAnonamouse ou de um feed RSS.
---

**Settings > Import Lists** adiciona livros automaticamente a partir de fontes externas.

## Fontes

- **MAM**: uma lista de desejos do MyAnonamouse, usando um **MAM Session ID**.
- **RSS**: um **RSS Link** que você informa, com um **Website URL** opcional. O site precisa ser http ou https.

## Em cada lista

| Campo | Efeito |
|---|---|
| Name | Nome |
| Monitor | Se os livros que ela adiciona ficam Monitored ou Unmonitored |
| Root Folder | Para onde eles vão |
| Quality Profile | Um perfil, ou Inherit (usar o padrão) |
| Tags | Aplicadas a tudo o que a lista adiciona |

**Sync Now** roda as listas na hora.

## Opções

| Configuração | Padrão | Efeito |
|---|---|---|
| RSS Sync Interval | 12 (horas) | Com que frequência as listas sincronizam. 0 desliga a sincronização |
| Clean Library Level | Disabled | O que acontece com um livro quando ele sai da lista |

Opções do Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. A última apaga arquivos. Só escolha se for isso mesmo que você quer.

## Exclusões

**Import List Exclusions** bloqueia um livro por **ASIN**, **Title** e **Year**, para que uma lista nunca adicione ele de novo. Use **Lookup ASIN** para preencher.

## Pegadinhas

- Um link RSS ou session ID salvo nunca aparece de novo. Mudar o endereço exige digitar o segredo de novo.
- As listas disparam as notificações On Import List Synced e On Import List New Items. Veja [Connect](/pt-br/settings/connect/).
