---
title: Audible
description: Conecte contas da Audible, sincronize e espelhe sua biblioteca.
---

O ABM se conecta a uma ou mais contas da Audible e mantém uma cópia da biblioteca de cada conta na página **Audible Library**. Tudo o que você tem pode ser baixado, descriptografado para M4B e importado como qualquer outro livro. Com o espelhamento ligado, cada sincronização também adiciona ao ABM os livros que estão faltando e baixa esses livros.

## Contas

Adicione uma conta em **Settings > Audible**. Dá para conectar mais de uma. Cada conta tem a sua própria biblioteca.

Se um login parar de funcionar, a conta avisa que precisa entrar de novo, nas configurações e na página de saúde. Entre de novo na mesma conta. Ela mantém a biblioteca e fica com as novas credenciais. Não apague a conta para resolver isso: apagar remove a tabela da biblioteca dela e tira o dispositivo dela da Audible.

## Sincronização

A sincronização atualiza a biblioteca de cada conta a partir da Audible. A página de configurações da Audible mostra o progresso e o resultado, e quando algo falha ela mostra o erro real. Ela também roda num agendamento.

A página **Audible Library** lista tudo o que foi sincronizado. Filtre por All, Not in Library, Downloaded, Wanted ou Downloadable Only.

## Espelhar a biblioteca da Audible no ABM

:::caution[Chega na próxima versão]
Isso ainda não está em nenhuma versão lançada.
:::

O espelhamento faz a sua biblioteca do ABM acompanhar a sua biblioteca da Audible.

- Vem ligado por padrão.
- Adiciona suas compras e seus títulos gratuitos. Podcasts ficam de fora.
- Cada sincronização trata no máximo 25 títulos.
- Ao ligar, ele pede confirmação e mostra quantos títulos a próxima sincronização vai adicionar e baixar.
- Títulos do Plus Catalog e empréstimos ficam de fora, e nada entra na fila enquanto o disco da biblioteca estiver com pouco espaço.
- Um título cujo download continua falhando espera cada vez mais entre as tentativas: 1 hora, depois 6, depois 24.
- Ele também baixa os títulos que você quer e que ainda não têm arquivos.
- Títulos removidos da Audible continuam no ABM.

## Configurações

Agendamentos, comportamento de download e diagnóstico ficam nas [configurações da Audible](/pt-br/settings/audible/).
