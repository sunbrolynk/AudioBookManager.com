---
title: Perguntas frequentes
description: Respostas curtas para as primeiras perguntas que o pessoal faz.
---

## O ABM substitui o Audiobookshelf?

Não. O Audiobookshelf é o player e o ABM é o bibliotecário. Aponte os dois para a mesma pasta da biblioteca e deixe cada um fazer o seu trabalho.

## De onde vêm os metadados?

Do [Libex](https://libexdb.com), um serviço aberto de metadados com dados da Audible. O ABM atualiza esses dados num agendamento, e uma capa que você mesmo escolheu pode ser travada para que a atualização não mexa nela.

## Preciso de um banco de dados separado?

Não. O ABM guarda tudo em um único arquivo SQLite em `/config`. Não tem mais nada para rodar.

## Dá para acessar de fora da minha rede?

Sim, a partir da 0.17.0. Por padrão, tudo o que vem de fora da sua rede local precisa fazer login, e colocar **Authentication Required** em **Enabled** obriga todo mundo a fazer login, inclusive a sua própria LAN. Atrás do nginx, Traefik ou Caddy, defina `TRUSTED_PROXIES` com o endereço do proxy. As credenciais guardadas ficam criptografadas. Veja [Configuração](/pt-br/configuration/#proxy-reverso).

## Quais clientes de download funcionam?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet e Blackhole.

## O que aconteceu com o Readarr?

O Readarr cuidava de livros e audiolivros juntos, e já foi descontinuado. O ABM é só para audiolivros, construído sobre o design que os apps Servarr criaram.

## Dá para instalar sem Docker?

Ainda não. Por enquanto, o Docker é o único caminho. Instalações nativas para Linux, Windows e macOS, além de Kubernetes, Unraid e Proxmox, estão nos planos. Veja [Outras formas de instalar](/pt-br/installation/#outras-formas-de-instalar).

## Quanto custa?

Nada. É gratuito e de código aberto, sob a GPL-3.0. Se ele te poupar uma noite, tem um [Ko-fi](https://ko-fi.com/sunbrolynk).

## Posso editar o título, os autores ou a descrição de um livro?

Não. Esses dados vêm da fonte de metadados e o ABM não edita isso à mão. O que você controla é a capa (uma capa que você escolheu fica travada), quando as atualizações rodam, quais arquivos sidecar e tags de áudio são gravados, tags e tags automáticas, o monitoramento e o perfil de qualidade. Veja [Seus metadados, seu controle](/pt-br/metadata/control/).

## O ABM consegue gravar capítulos, descrições e tags onde o Audiobookshelf lê?

Ele grava `cover.jpg`, um `.opf`, `desc.txt` e `reader.txt`, e pode gravar tags dentro do áudio. A comparação de capítulos com a edição publicada e os arquivos `.cue` chegam na próxima versão. Veja [Arquivos sidecar](/pt-br/using/sidecars/).

## Posso converter meus arquivos?

Sim: converter, juntar, dividir e adicionar capítulos, numa fila. Veja [Conversões](/pt-br/using/conversions/).

## Posso importar a coleção que já tenho?

Sim, com o [Library Import](/pt-br/library-import/). Veja também [Trazendo uma biblioteca](/pt-br/guides/moving-a-library-in/).

## Tem layout para celular?

Tem, abaixo de 768px de largura. Veja [Uso no celular](/pt-br/phone/).

## O ABM pode usar mais de uma conta da Audible?

Pode. Cada conta tem a sua própria biblioteca. Veja [Audible](/pt-br/audible/).
