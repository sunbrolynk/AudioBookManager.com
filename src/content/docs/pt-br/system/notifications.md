---
title: Notificações
description: O sino no cabeçalho e o painel embaixo dele.
---

O sino no cabeçalho do desktop é onde o ABM te conta o que aconteceu e o que precisa de você. Clique nele para abrir o painel de notificações. Ainda não há sino no celular.

## O sino

- Um número no sino é a quantidade de notificações não lidas. Passando de 99, aparece 99+. Quando alguma não lida é um erro, o número fica vermelho.
- Um anel em volta do sino é trabalho em andamento. Quando o ABM sabe o quanto já andou, o anel enche até a média dos itens em execução. Quando não sabe, o anel só gira.
- Uma notificação nova faz o sino piscar rapidamente na cor do seu nível. Com movimento reduzido ligado no seu sistema, esse piscar é pulado.
- Se o navegador perde a conexão ao vivo com o ABM por mais de 10 segundos, o sino vira um sino riscado com um anel tracejado. Ele volta quando a conexão volta.

O nome acessível do sino lê as mesmas coisas: a contagem de não lidas, quantos itens estão rodando e a porcentagem deles, e se está offline.

## O painel

De cima para baixo:

- **Needs attention** só aparece quando há algo em aberto. São coisas que ficam até serem resolvidas, como um livro cujo download falhou ou uma versão nova do ABM. Cada uma tem um botão: **Search again** enfileira uma busca para esse livro e **What's new** abre a página Updates. Outras abrem a página a que se referem, ou a tarefa quando ela pode ser retomada. O **x** de uma linha a dispensa.
- **Running** lista o trabalho em andamento agora: tarefas, downloads e conversões, com progresso e tempo restante quando conhecidos. Clique numa linha para ir até ela.
- **Recent** mostra as notificações mais novas primeiro, com a contagem de não lidas. Clicar em uma abre aquilo a que ela se refere e a marca como lida. Uma linha também tem botões para marcá-la como lida ou não lida e para excluí-la.
- **Load older** mostra mais do histórico. Quando não há nada mais antigo, o painel avisa.

Quando as três estão vazias, o painel diz que você está em dia.

O rodapé tem **Mark all read** e um link para o [Log de atividades](/pt-br/system/activity-log/). O menu ao lado do título do painel tem **Clear all**, que pergunta antes. Ele remove todas as notificações, menos as que ainda precisam de atenção. Essas ficam até você resolver ou dispensar.

## O que não é registrado

Uma notificação pode vir de uma tarefa em segundo plano, de um download ou de uma conversão, ou de algo que você fez no navegador e falhou. Os controles do próprio painel são a exceção. Se marcar como lida, excluir, dispensar, limpar ou carregar mais antigas falhar, o painel mostra o erro ao lado desse controle e não adiciona nenhuma notificação sobre isso. Senão, uma caixa de entrada quebrada encheria a caixa de entrada.

## Resultados no controle

As ações em Library, Book Detail, Calendar, Authors e Series e as ações de capa mostram o resultado como uma linha curta no controle que você usou. Uma linha de sucesso simples some sozinha depois de alguns segundos. Uma falha ou um aviso fica até a sua próxima ação nesse controle. As falhas também são registradas em Notificações, então você ainda as encontra depois que a linha some.

Um livro, autor ou série que é salvo mas cujo catalog fill não começa registra o aviso "Catalog fill not started". Um add all em que alguns livros falham registra "Some books were not added" com os motivos.

## Retenção

As notificações antigas são removidas pela limpeza diária de logs, por padrão depois de **30 dias**. Defina com **Notifications Retention** na página [General](/pt-br/settings/general/), ou `inbox_retention_days` na [API](/pt-br/system/api/). 0 mantém para sempre. As notificações que ainda precisam de atenção não são removidas até você resolver. A limpeza roda uma vez por dia no horário de limpeza (03:00 por padrão) e não faz nada quando **Automatic Cleanup** está desligado. A nota no pé do painel mostra o número atual de dias e some quando a retenção é 0.

## Como difere do Log de atividades

As notificações são o que te contam, e você pode limpá-las. O [Log de atividades](/pt-br/system/activity-log/) é o registro permanente do que aconteceu, e limpar Notificações não mexe nele.
