---
title: Conexões (Connect)
description: Notificações, servidores de mídia e scripts personalizados.
---

**Settings > Connect** envia eventos para outros lugares. Se chama Connect, como no Sonarr.

## Agentes

**Agentes de notificação**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook e Apprise. **Servidores de mídia**: Jellyfin e Emby. **Outros**: Custom Script. O Audiobookshelf não é um agente do Connect.

## Eventos

Cada conexão escolhe quais eventos disparam ela.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Em cada conexão

| Campo | Efeito |
|---|---|
| Name, Enable | Nome e liga/desliga |
| Include covers | Anexa a capa do livro quando o agente permite |
| Tags | Dispara só para itens com uma tag correspondente |
| Conditions | Regras combinadas com E em campos como autor ou tamanho. Uma condição malformada deixa passar em vez de silenciar um alerta |
| Priority | Onde o agente suporta |

**Test** envia uma mensagem de teste. **Test All** testa todas as conexões.

## Mensagens personalizadas

Uma mensagem personalizada reescreve o texto de um evento. Escolha um **Format**, uma **Cover** (Auto usa a capa do livro, None, ou uma Custom URL), escreva o **Title** e o corpo, e clique numa variável para inserir. O modelo padrão de cada evento é um ponto de partida. A prévia mostra o resultado, e você pode mandar um teste por uma conexão.

## Pegadinhas

- Segredos como tokens são guardados criptografados, aparecem em branco na edição e são mantidos quando você deixa em branco. Mudar o destino exige digitar eles de novo.
- Um alerta de tarefa que falhou por causa de uma queda da fonte de metadados sai uma vez por queda, não uma vez por falha, e uma execução agendada nunca manda esse alerta.
- Os cabeçalhos do Webhook são um objeto JSON e são guardados como segredo.
