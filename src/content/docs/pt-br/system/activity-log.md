---
title: Log de atividades e eventos
description: O registro do que aconteceu e como ele se diferencia dos logs.
---

O ABM mantém três tipos de registro.

| Onde | O que é |
|---|---|
| **System > Events** e **System > Activity Log** | O log de atividades: uma lista, no banco de dados, das coisas que aconteceram. Events é a visão filtrada por gravidade. Activity Log (com o título Activity History) filtra por categoria, busca na mensagem e mostra o estado antes e depois |
| **System > Log Files** | Arquivos de log em texto, com todos os detalhes. Veja [Logs](/pt-br/system/logs/) |
| **Activity > History** | Só o histórico de downloads. Veja [Atividade](/pt-br/using/activity/) |

## O que é registrado

Tarefas em segundo plano concluídas (uma linha de resumo para cada), alterações manuais em clientes, indexadores, perfis, tags, notificações, pastas raiz e assim por diante, downloads iniciados (e quem iniciou), conversões, falhas de download da Audible, backups, logins e tentativas de login que falharam, e uma etapa de inicialização que falhou.

Categorias: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security e System.

## Privacidade

As entradas nunca contêm URLs, hosts, nomes de usuário, senhas, chaves, tokens ou o texto bruto de erro de um cliente ou serviço. Os objetos aparecem pelo nome que você deu a eles. Ao salvar configurações, o registro lista quais configurações mudaram, não os valores. Os logins guardam só o endereço IP. Tentativas de login que falharam vindas de um mesmo endereço em 15 minutos viram uma única linha, com a contagem de tentativas.

## Silencioso de propósito

Uma execução agendada que não teve nada para fazer não grava nada. Uma repetição da mesma falha não grava nada, mas a recuperação grava. Uma execução manual é sempre registrada.

## Retenção

**Activity Log Retention** em General apaga as entradas após 90 dias por padrão. Com 0 elas ficam. Os arquivos de log têm retenção própria (30 dias).

## Ver log

:::caution[Chega em uma versão futura]
Os links de ver log nas entradas ainda não estão em nenhuma versão lançada.
:::

As entradas têm um link para o log de onde vieram e abrem ele naquela linha. Se o log já não existir, a entrada mostra "Log no longer kept".
