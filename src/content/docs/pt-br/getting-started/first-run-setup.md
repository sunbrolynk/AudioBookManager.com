---
title: Primeira configuração
description: O assistente de configuração de uma instalação nova, passo a passo.
---

:::caution[Chega em uma versão futura]
O assistente de configuração ainda não está em nenhuma versão lançada. As versões lançadas só pedem um login na primeira visita.
:::

Numa instalação nova, a primeira visita abre um assistente de configuração no lugar da página de login. Ele te guia por tudo o que o ABM precisa, um passo de cada vez. Só aparece enquanto não existe nenhuma conta. Toda escolha pode ser mudada depois em **Settings**.

No topo há uma corrente de oito elos. Cada elo é um passo, e a corrente mostra onde você está:

- **Done**: o passo está concluído.
- **Current step**: o passo que está na tela.
- **Not started**: um passo que você ainda não alcançou.
- **Later**: um passo que você passou sem concluir. Ele fica esperando, e você pode terminá-lo em **Settings** quando quiser.

**Back** volta ao passo anterior. **Continue** salva o passo e segue. Três passos, Audible, Download client e Indexer, também têm **Skip for now**.

## 1. Conta (Account)

Cria o seu login e já te conecta. Você escolhe um nome de usuário e uma senha de pelo menos 8 caracteres, e digita a senha duas vezes.

| Configuração | Padrão | Efeito |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms usa uma página de login. Basic (Browser Popup) usa o aviso de login do próprio navegador |
| Authentication required | Everywhere | Everywhere pede login de qualquer endereço. Skip on local network deixa entrar sem login os dispositivos da sua rede doméstica ou do escritório |

São as mesmas configurações de [Segurança e login](/pt-br/settings/security/). A conta é criada quando você aperta **Continue**. Depois que ela existe, este passo só a confirma.

## 2. Rede (Network)

Network é a chave geral. Nada do que o ABM envia sai da sua máquina até você escolher uma rota aqui, então os passos Metadata e Audible dependem dele. Este passo não pode ser pulado, e **Continue** fica desligado até a rota estar completa.

| Escolha | O que você dá ao ABM |
|---|---|
| Proxy | O tipo, o nome do host e a porta do proxy, e opcionalmente usuário e senha. SOCKS4 não é suportado |
| WireGuard | Um `.conf` do seu provedor de VPN, colado ou arrastado. Se já houver um túnel salvo, ele é usado |
| Own VPN container | Nada a preencher. Você marca uma caixa dizendo que todo o tráfego do ABM já sai por um contêiner de VPN ou proxy. O ABM não consegue conferir isso |
| Direct | Nada a preencher. Você marca uma caixa dizendo que todo serviço que o ABM contata vai ver o seu próprio endereço IP |

**Continue** salva a rota e depois mostra a verificação **Public IP**, para você ver que a rota funciona antes de qualquer coisa ir para a internet. **Change route** deixa você escolher de novo. São as mesmas configurações de [Network](/pt-br/settings/network/).

## 3. Metadados (Metadata)

Escolha onde o ABM procura os livros. Isso vem antes das suas pastas porque a primeira varredura de pasta compara seus livros com essa fonte.

| Escolha | O que significa |
|---|---|
| Built-in | O Libex roda dentro do ABM. Sem conta e sem serviço extra. Usa a rota do passo Network |
| Hosted | O ABM consulta a instância pública do Libex em libexdb.com |
| Self-hosted | O ABM consulta o seu próprio servidor Libex. Informe o **Server URL** dele. **Test** confere sem salvar |

Também há uma caixa **Local Storage**. Ela mantém um registro local, permanente e criptografado de cada livro que o ABM consulta, pesquisa, adiciona, importa ou vê no Discover, e funciona com as três fontes. Depois de ligada, só dá para desligar em **Settings > Metadata**.

**Continue** salva a fonte e liga o Local Storage se você marcou. Se a fonte escolhida ainda não consegue sair, por exemplo Built-in sem rota escolhida, o passo diz por quê. Veja [Escolhendo uma fonte de metadados](/pt-br/metadata/choosing-a-source/).

## 4. Audible (opcional)

Conecta a sua conta do Audible para o ABM ler a sua biblioteca. Passa pela rota que você escolheu no passo Network. Se nenhuma rota foi escolhida, ou o tráfego do Audible está bloqueado nela, o passo avisa e **Back to Network** te leva de volta. O login em si é o mesmo de [Audible](/pt-br/audible/). Depois de conectado, o passo mostra a conta e **Continue** fica disponível.

Você pode usar **Skip for now** e conectar o Audible depois em **Settings > Audible**.

## 5. Pasta raiz (Root folder)

Uma pasta raiz é onde o ABM guarda os seus livros. Escolha a pasta onde os seus audiolivros ficam, ou para onde os novos devem ir. Ela deve ser a mesma pasta que o seu player (o Audiobookshelf, por exemplo) lê. Você pode navegar pelas pastas do servidor e criar uma nova pelo navegador. A primeira pasta raiz que você adiciona vira a padrão. Este passo não pode ser pulado. Você pode adicionar mais raízes depois em **Settings > Media Management**.

## 6. Cliente de download (opcional)

Escolha um dos clientes suportados, Usenet ou torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet ou Blackhole. Preencha os dados dele, aperte **Test** e depois **Save**. O cliente é adicionado ali mesmo, no passo. Você pode adicionar outro, e **Refresh** recarrega a lista. O passo conta como feito assim que um cliente é salvo.

Você pode usar **Skip for now** e adicionar um cliente depois em **Settings > Download Clients**. Veja [Clientes de download](/pt-br/settings/download-clients/).

## 7. Indexador (opcional)

Escolha um tipo de indexador ou uma predefinição, preencha, depois **Test** e **Save**, do mesmo jeito que no cliente de download. O passo conta como feito assim que um indexador é salvo. Você pode usar **Skip for now** e adicionar indexadores depois em **Settings > Indexers**. Veja [Indexadores](/pt-br/settings/indexers/).

## 8. Fim (Finish)

Um resumo lista cada passo com o que foi configurado: a sua rota de Network (e o Public IP, se foi verificado), a fonte de metadados, a conta do Audible, a pasta raiz, e o cliente e o indexador que você adicionou. Todo passo que você deixou para depois aparece como esperando. Se nada está esperando, o resumo diz que todos os elos estão acesos. **Go to Library** fecha o assistente.

Tudo o que você pulou está em **Settings** quando quiser. As próximas coisas que fazem sentido são um perfil de qualidade e os seus livros: veja [Início rápido](/pt-br/getting-started/quick-start/).
