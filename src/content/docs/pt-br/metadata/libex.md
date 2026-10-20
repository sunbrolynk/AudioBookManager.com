---
title: Libex
description: De onde vêm os dados dos livros do ABM.
---

O ABM pega os dados de livros, autores, séries e capítulos do **Libex**, um serviço aberto de metadados da Audible que é um projeto separado. O Libex é a fonte. O que importa para você é o que o ABM faz com os dados depois que recebe, e o quanto disso fica sob o seu controle. É disso que trata o resto desta seção.

Libex: [Código-fonte](https://github.com/LibexHQ/Libex) · [Referência da API](https://libexdb.com/redoc)

O ABM consulta a instância pública do Libex em libexdb.com. Uma escolha de fonte está prevista para uma versão futura.

Quando o Libex não está acessível, o ABM avisa e diz o nome da fonte. Você ainda pode adicionar e importar livros à mão. Veja [Solução de problemas](/pt-br/troubleshooting/#a-fonte-de-metadados-está-indisponível).
