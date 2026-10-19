---
title: Início rápido
description: De uma instalação nova até o seu primeiro livro monitorado.
---

Este é o caminho mais curto entre um contêiner rodando e um livro sendo procurado. Instale o ABM primeiro: veja [Instalar o ABM](/pt-br/installation/).

## 1. Faça login

Na primeira visita, o ABM te guia na criação de um login. Até você fazer isso, ele recusa as requisições. Como o login funciona depois disso está em [Segurança e login](/pt-br/settings/security/).

## 2. Escolha como o ABM chega à internet

Em **Settings > General** tem uma seção **Proxy & VPN**. Se você pretende usar a fonte de metadados embutida, primeiro precisa escolher uma conexão. Veja [Escolhendo uma fonte de metadados](/pt-br/metadata/choosing-a-source/).

## 3. Adicione uma pasta raiz

Uma pasta raiz é onde o ABM guarda os livros. Adicione em **Settings > Media Management**, na seção **Root Folders**. Ela deve ser a mesma pasta que o seu player (o Audiobookshelf, por exemplo) lê.

## 4. Adicione um indexador e um cliente de download

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse ou Prowlarr. Veja [Indexadores](/pt-br/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet ou Blackhole. Veja [Clientes de download](/pt-br/settings/download-clients/).

Se o cliente roda em outro contêiner, confira se ele e o ABM enxergam a pasta de downloads no mesmo caminho, ou adicione um mapeamento de caminho remoto.

## 5. Defina um perfil de qualidade

**Settings > Profiles** guarda a escala de qualidade que o ABM usa para decidir o que baixar e o que conta como upgrade. Um dos perfis é o padrão. Comece com ele e ajuste depois. Veja [Perfis](/pt-br/settings/profiles/).

## 6. Traga ou adicione livros

- Já tem uma coleção? Use o [Library Import](/pt-br/library-import/).
- Começando do zero? Use **Library > Add New** e busque por título, autor ou série. Veja [Add New](/pt-br/using/add-new/).

Um livro que você adiciona fica como desejado até um arquivo dele ser importado. Os livros desejados aparecem em **Wanted > Missing** e são buscados automaticamente.

## 7. Veja o ABM trabalhando

**Activity > Queue** mostra o que está baixando. **Activity > History** mostra o que foi baixado e importado. Quando algo der errado, [Solução de problemas](/pt-br/troubleshooting/) e a página [Tarefas](/pt-br/system/tasks/) são os lugares para olhar.
