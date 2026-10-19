---
title: Logs
description: Arquivos de log, níveis, retenção e rotação.
---

**System > Log Files** lista os logs em texto do ABM. Abra um para ler, baixar ou apagar, ou limpe todos. Os logs aparecem conforme as operações rodam.

- Tarefas e conversões gravam o próprio log. A página Tasks tem um link para cada um.
- O log principal é o `app.log`. Ele é rotacionado na inicialização, pelo menos a cada hora e ao chegar a 10 MiB. Os arquivos antigos ficam guardados por **Log File Retention** (30 dias por padrão).
- Um log de segurança separado tem uma linha por tentativa de login, para o fail2ban e ferramentas parecidas.
- Os níveis são definidos em **Settings > General > Logging**.

## Investigando um problema

Comece pelo botão de log da tarefa que falhou. Ele mostra a operação da linha de início até o bloco de fim. O texto vem com os segredos ocultados, mas confira antes de colar um log em público.

## Pegadinhas

- O SQL Logging e o nível Debug são bem verbosos. Desligue quando terminar.
- Apagar um log deixa as entradas de atividade que apontam para ele. Elas mostram "Log no longer kept".
