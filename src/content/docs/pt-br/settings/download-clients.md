---
title: Clientes de download
description: Clientes suportados, tratamento de downloads concluídos e mapeamentos de caminho remoto.
---

**Settings > Download Clients** conecta o programa que faz os downloads.

## Clientes suportados

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet e Blackhole (uma pasta monitorada). Essa é a lista completa.

## Campos

Os campos que aparecem dependem do cliente.

| Campo | Efeito |
|---|---|
| Name | Nome |
| Host, Port, URL Base | Onde o cliente escuta |
| Use SSL, Verify TLS certificate | HTTPS e se o certificado é verificado |
| Username, Password, API Key | Credenciais. Um segredo salvo nunca é mostrado |
| Category | Categoria ou rótulo que o ABM coloca nos downloads dele, por exemplo `audiobooks` |
| Watch Folder, Directory | Blackhole: onde soltar os arquivos e onde aparecem os arquivos concluídos |
| Client Priority | Qual cliente ganha quando mais de um serve |
| Remove from Client, Also Delete Files, Remove Failed | O que o ABM remove do cliente depois da importação ou de uma falha |
| Queue Page Remove Action | O que remover uma linha na página Queue faz: só dispensar no ABM, remover do cliente e manter os arquivos, ou remover e apagar os arquivos |

**Test** verifica a conexão. Um cliente desativado não é um cliente com problema. Um cliente que está falhando é tentado de novo com intervalos crescentes.

## Tratamento de downloads concluídos

| Configuração | Padrão | Efeito |
|---|---|---|
| Enable | ligado | Importa os downloads concluídos automaticamente |
| Redownload Failed | ligado | Coloca uma release que falhou na blocklist e busca de novo |
| Redownload Failed from Interactive Search | ligado | O mesmo, para releases que você escolheu à mão |

Se as importações usam hardlink ou cópia é definido por **Use Hardlinks instead of Copy** em [Media Management](/pt-br/settings/media-management/). Se a pasta do cliente não estiver no mesmo caminho que o ABM enxerga, adicione um mapeamento de caminho remoto.

## Mapeamentos de caminho remoto

Quando o cliente informa `/downloads/audiobooks` e o ABM enxerga isso como `/data/audiobooks`, adicione um mapeamento.

| Campo | Efeito |
|---|---|
| Host | O host do cliente a que o mapeamento se refere |
| Remote Path | O caminho do jeito que o cliente informa |
| Local Path | A mesma pasta do jeito que o ABM enxerga |

## Pegadinhas

- Uma subpasta sem permissão de leitura num download concluído para completamente a importação desse download. Nada é removido do cliente, e ele é tentado de novo mais tarde.
- Docker: quando der, monte a pasta de downloads no mesmo caminho nos dois contêineres. Os mapeamentos são o plano B.
