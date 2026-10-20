---
title: Adicionar novo
description: Busque um livro e adicione como desejado.
---

**Library > Add New** busca livros no Libex e adiciona os que você escolher. A busca encontra por título, autor, série ou ASIN.

## O que adicionar faz

Um livro adicionado vira **Wanted** na pasta raiz e no perfil de qualidade que você escolheu, e o ABM começa a procurar por ele de acordo com a configuração de monitoramento. Um livro que já está na biblioteca é detectado só pelo ASIN. Uma edição diferente do mesmo título é um ASIN diferente.

## Busca por autor e por série

A busca tem modos para Title, Author, Series, Books by author, Books in series e ASIN. Author e Series encontram autores e séries em si; Books by author e Books in series encontram livros. Adicionar um autor ou uma série monta o catálogo dele e adiciona os livros como procurados conforme **Monitor**:

| Monitor | Adiciona |
|---|---|
| All | Todos os livros, inclusive os que ainda não saíram |
| Future | Só os livros lançados daqui para frente |
| Missing (padrão) | Os livros que você não tem |
| None | Só o catálogo |

Você também escolhe a pasta raiz, o perfil de qualidade e se os livros que aparecerem depois também entram. Isso vem ligado por padrão para uma série e desligado para um autor. Um autor ou série que já está na sua biblioteca mostra "In Library", com a ação **Add missing books**.

A adição roda como tarefa em segundo plano, com uma notificação de progresso.

## Se a busca não trouxer nada

Uma busca que não recebe resposta da fonte de metadados falha com um erro em vez de mostrar uma lista vazia. Veja [Solução de problemas](/pt-br/troubleshooting/#a-fonte-de-metadados-está-indisponível).
