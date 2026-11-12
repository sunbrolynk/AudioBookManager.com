---
title: Conexão com o Audiobookshelf
description: Conecte o ABM ao seu servidor Audiobookshelf.
---

:::caution[Chega em uma versão futura]
A página de configurações para isso ainda não está em nenhuma versão publicada. A conexão já pode ser salva, testada e removida pela API, e mais nada no ABM a usa ainda.
:::

O Audiobookshelf (ABS) é o servidor onde você escuta. O ABM se conecta a ele com a URL do servidor e uma chave de API criada para um usuário do ABS.

## Versão

O ABM precisa do ABS 2.37.0 ou mais novo e foi testado na 2.37.2. Um servidor mais antigo é recusado. Um mais novo recebe um aviso, porque o ABM não foi testado nele.

## A conta

A chave de API pertence a um usuário do ABS. O ABM verifica esse usuário quando você salva ou testa.

- **Recusado até corrigir:** o usuário precisa ser admin ou root e ter a permissão Update, acesso a todas as bibliotecas, a todas as tags e a conteúdo explícito.
- **Aviso, mas salva mesmo assim:** Upload está desligado (o ABM não pode cuidar das capas) ou Delete está desligado (um livro que você apaga no ABM continua no ABS até você ligar).

## Como o ABM chega ao ABS

O ABM sempre se conecta ao ABS diretamente. Ele nunca passa pela VPN ou pelo proxy que você escolheu em [Network](/settings/network/). A URL do servidor é verificada antes de salvar, e uma insegura é recusada. Um endereço que aponta de volta para a máquina onde o ABM roda, um endereço link-local e um endereço de metadados de nuvem são recusados, assim como um nome que resolve para algum deles. Seus próprios endereços de LAN são aceitos.

## A chave de API

A chave é guardada criptografada e nunca mais é mostrada. Deixe em branco ao salvar ou testar para manter a salva. Uma chave salva só é enviada ao endereço para o qual foi salva, então se você mudar a URL, a configuração de TLS ou o pacote de CA, digite a chave de novo.

## Verificar TLS

Os certificados são verificados por padrão. Se o seu servidor usa um certificado da sua própria autoridade, informe o caminho do pacote de CA dela em vez de desligar a verificação.

## Test e Disconnect

**Test** verifica um servidor sem salvar: a versão, as permissões do usuário e as bibliotecas dele. Salvar uma conexão ligada roda antes as mesmas verificações e é recusado se uma verificação de erro falhar. Uma conexão salva desligada não é verificada. **Disconnect** remove a conexão salva e a chave dela.

## System Status

Quando uma conexão está ligada, [System > Status](/system/status/) tem uma linha AudioBookShelf com o resultado da última verificação. Ela é atualizada ao salvar e pela verificação de saúde periódica, que roda a cada 6 horas, então não é uma consulta ao vivo toda vez que você abre a página. Uma chave salva que o ABM não consegue mais ler (a chave de criptografia foi perdida ou mudou) aparece como erro até você digitá-la de novo. Uma conexão que ainda não foi verificada aparece como aviso.

## O que o ABM remove

O ABM só remove o registro do item no ABS. Nunca apaga arquivos de forma definitiva.
