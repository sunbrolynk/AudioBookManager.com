---
title: Conexão com o Audiobookshelf
description: Conecte o ABM ao seu servidor Audiobookshelf.
---

O Audiobookshelf (ABS) é o servidor onde você ouve. Conecte o ABM em **Settings > Audiobookshelf**, no computador e no celular. Você informa o endereço do servidor e uma chave de API criada para um usuário do ABS.

## Conexão

- **Enable:** Deixa o ABM usar o servidor. Ao salvar com isto ligado, o ABM verifica o servidor primeiro e se recusa a salvar se uma verificação de nível erro falhar. A página mostra os motivos. Uma conexão salva desligada não é verificada.
- **Server address:** Onde o seu servidor ABS responde, por exemplo `http://192.168.1.20:13378`. Se o ABS roda na mesma máquina do ABM, use o endereço LAN dessa máquina, ou o nome ou o IP do contêiner se os dois rodam no Docker.
- **API key:** Uma chave de API de um usuário admin no ABS.
- **Verify TLS certificate:** Ligado por padrão. Se o seu servidor usa um certificado da sua própria autoridade, informe o caminho do pacote CA dele em **CA bundle path** em vez de desligar a verificação. Deixe o caminho em branco para usar os certificados do sistema.
- **Test:** Roda as verificações com o que está na tela, sem salvar nada.
- **Disconnect:** Pede confirmação e depois remove o endereço e a chave salvos.

## Como o ABM alcança o ABS

O ABM sempre se conecta ao ABS diretamente. Nunca passa pela VPN ou pelo proxy que você escolheu em [Network](/settings/network/). O endereço é verificado antes de salvar, e um inseguro é recusado. Um endereço que aponta de volta para a máquina onde o ABM roda, um endereço link-local e um endereço de metadados de nuvem são recusados, assim como um nome que resolve para um deles. Os seus endereços LAN estão liberados, por isso um ABS na mesma máquina precisa do endereço LAN da máquina ou do nome ou IP do contêiner.

## A chave de API

A chave é guardada criptografada e nunca mais é mostrada. Deixe em branco ao salvar ou testar para manter a salva. Uma chave salva só é enviada ao endereço para o qual foi salva, então se você mudar o endereço, o Verify TLS ou o pacote CA, informe a chave de novo. Se o ABM não consegue mais ler a chave salva (a chave de criptografia foi perdida ou mudou), esta página mostra o mesmo aviso das outras páginas de configurações e diz para você informá-la de novo, mesmo com a conexão desligada.

## O que é verificado

**Versão.** O ABM precisa do ABS 2.37.0 ou mais novo e é testado no 2.37.2. Um servidor mais antigo, ou que não informa uma versão que o ABM entenda, falha com erro. Um mais novo gera um aviso, porque o ABM não foi testado nele.

**A conta.** A chave de API pertence a um usuário do ABS, e o ABM verifica esse usuário.

- **Erro até corrigir:** o usuário precisa ser admin ou root e ter a permissão Update, acesso a todas as bibliotecas, a todas as tags e a conteúdo explícito.
- **Aviso, salva mesmo assim:** Upload está desligado (o ABM não pode ser dono das capas), ou Delete está desligado (um livro que você apaga no ABM continua no ABS até você ligar).

## Status

A seção Status mostra o resultado da última verificação (Not connected, OK, Warning ou Error), a versão do servidor, o usuário dono da chave, quando o ABM verificou pela última vez e as próprias verificações. Uma verificação que falhou mostra o motivo, e as aprovadas são contadas.

[System > Status](/system/status/) também tem uma linha Audiobookshelf quando uma conexão está ligada. Ela é atualizada ao salvar e pela verificação de saúde periódica, que roda a cada 6 horas, então não é uma sondagem ao vivo toda vez que você abre a página. Uma conexão desligada fica quieta ali, mesmo que a chave salva não possa ser lida. Com a conexão ligada, uma chave salva que o ABM não consegue mais ler aparece como erro até você informá-la de novo, e uma conexão ainda não verificada aparece como aviso.

## O que o ABM remove

O ABM só remove o registro do item no ABS. Nunca apaga arquivos de vez.
