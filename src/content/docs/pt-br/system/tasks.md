---
title: Tarefas
description: Trabalho em segundo plano, agendamentos e logs.
---

**System > Tasks** lista tudo o que o ABM faz em segundo plano: varreduras da biblioteca, atualizações, importações, buscas, downloads, sincronizações, backups. Cada linha mostra o estado (aguardando, rodando, concluída, falhou), o progresso, o resultado e um botão de log.

- Uma tarefa que terminou com entradas na lista de erros aparece como **Partial**. Expanda para ver cada item pulado e o motivo.
- Uma tarefa com nova tentativa prevista continua aguardando até as tentativas acabarem. O número da tentativa aparece.
- **Clear completed tasks older than 24 hours** dá uma limpada na lista. As tarefas antigas também são limpas automaticamente (30 dias por padrão).
- Execuções agendadas que não fizeram nada aparecem aqui, mas não no [Log de atividades](/pt-br/system/activity-log/).

## Pegadinhas

- As conversões são uma fila separada. Veja [Conversões](/pt-br/using/conversions/).
- As varreduras de download (nova tentativa de downloads pendentes e verificação de downloads concluídos) só entram na fila enquanto pelo menos um cliente de download estiver ativado, assim a página não enche de execuções vazias.
