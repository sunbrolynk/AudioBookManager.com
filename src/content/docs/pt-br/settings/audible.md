---
title: Configurações da Audible
description: Contas, agendamento de sincronização, downloads e diagnóstico.
---

**Settings > Audible** é onde as contas são conectadas e onde a sincronização e os downloads são ajustados. Como o recurso funciona está na página [Audible](/pt-br/audible/).

## Contas

Para conectar uma conta você precisa de um **Marketplace**, um **Display Name** e a **Redirect URL** que a Amazon devolve depois que você faz login. Cada conta tem a sua própria biblioteca. Se uma conta precisar entrar de novo, faça login na mesma conta em vez de apagar. Apagar remove a biblioteca dela e tira o dispositivo dela da Audible.

## Agendamento

| Configuração | Efeito |
|---|---|
| Auto Sync | Sincroniza a biblioteca num agendamento |
| Sync on Account Add | Sincroniza assim que uma conta é conectada |
| Frequency | Daily, Weekly ou Monthly. Weekly adiciona Day of Week. Monthly adiciona Day of Month (1-28). |
| Time | Hora e minuto |
| Use CRON Expression | Uma expressão cron personalizada substitui as opções acima |

## Configurações de download (Download Settings)

| Configuração | Padrão | Efeito |
|---|---|---|
| Auto Add to Library | ligado | Os livros baixados são adicionados à biblioteca do ABM |
| Concurrent Downloads | 2 | De 1 a 5. Mais é mais rápido e pode bater nos limites de requisições da Audible. |
| Preferred Quality | High Quality | High, Normal ou Low |
| Delete Encrypted Files | ligado | Remove o arquivo AAXC criptografado depois de ele ser descriptografado para M4B |
| Temp Download Path | vazio | Vazio usa a pasta temporária do sistema |

Falhas de download são tentadas de novo sozinhas algumas vezes, com um intervalo que vai aumentando, e uma queda que dura mais que isso coloca a tarefa de volta na fila por até seis horas. Uma licença negada, um livro que não é seu ou uma falha de descriptografia falham uma vez só.

## Diagnóstico de conexão (Connection Diagnostics)

Escolha uma conta e rode o diagnóstico. Ele testa o FFmpeg, as credenciais, a conexão com a API e a capacidade de download, e mostra o seu IP de saída do jeito que a Audible vê.
