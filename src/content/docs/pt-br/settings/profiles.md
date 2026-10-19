---
title: Perfis
description: Perfis de qualidade, perfis de atraso e perfis de release.
---

**Settings > Profiles** é uma página só, com três seções. Elas respondem a três perguntas diferentes sobre uma release.

## Perfis de qualidade

Um perfil de qualidade é uma escala de formatos, do pior embaixo ao melhor em cima. Cada degrau é um formato (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) em arquivo único ou em vários arquivos. Os degraus podem ser agrupados para valerem a mesma coisa, e um degrau pode ser desligado.

| Configuração | Significado |
|---|---|
| Upgrades Allowed | Se estiver desligado, o ABM não substitui um livro depois que já tem um |
| Upgrade Until | O cutoff. Quando essa qualidade é alcançada, o ABM para de fazer upgrade |
| Grab off-ladder formats | Baixa um formato que não está na lista em vez de pular o livro |
| Default profile | O perfil usado quando nada mais específico se aplica |

Um dos perfis é o padrão. Um livro usa, nesta ordem, o próprio perfil, o perfil da série principal, o perfil do autor principal e, por fim, o padrão. Um perfil em uso não pode ser apagado.

Uma cópia nova só substitui o que você tem se o perfil permitir upgrades, o degrau novo estiver na escala e ativado, o livro estiver abaixo do cutoff e o degrau novo ficar estritamente acima.

Se você conhece o Sonarr: é um perfil de qualidade em que as qualidades são formatos de áudio e organização dos arquivos, e não resolução. Custom formats não existem. Os [perfis de release](#perfis-de-release) cobrem um terreno parecido.

Não existem faixas de bitrate nem de tamanho: qualidade quer dizer só formato e organização dos arquivos. Para um release, o ABM pega o formato do indexador ou do título e deduz a organização pelo título (um M4B sem números de parte ou de faixa conta como arquivo único), e depois confere de novo quando os arquivos são importados. A **Preferred Quality** das [configurações da Audible](/pt-br/settings/audible/) é outra coisa: é a qualidade em que os downloads da Audible chegam.

## Perfis de atraso

Um perfil de atraso segura uma release antes de baixar, para dar tempo de uma release melhor aparecer.

| Configuração | Significado |
|---|---|
| Enable Usenet / Enable Torrent | Permite downloads por aquele protocolo |
| Usenet Delay / Torrent Delay | Minutos de espera antes de baixar uma release daquele protocolo |
| Preferred Protocol | Qual preferir quando os dois encontram algo |
| Bypass if Highest Quality | Pula a espera quando uma release já atende ao cutoff do perfil |
| Tags | O perfil só vale para itens com uma tag correspondente |

Os perfis de atraso aparecem como tabela, como no Sonarr.

## Perfis de release

Um perfil de release adiciona regras além da qualidade.

| Campo | Significado |
|---|---|
| Enable Profile | Ligado ou desligado |
| Must Contain | A release precisa ter pelo menos um dos termos (sem diferenciar maiúsculas) |
| Must Not Contain | Uma release com qualquer um desses termos é rejeitada |
| Preferred | Termos que aumentam ou diminuem a pontuação de uma release. Escreva `/regex/` para usar uma expressão regular |
| Narration language | Restringe a um idioma |
| Indexer | Aplica a um indexador, ou a qualquer um |
| Tags | Aplica só a itens com uma tag correspondente |

Os perfis de release aparecem como tabela.

## Pegadinhas

- Os perfis nunca apagam arquivos. Eles decidem o que baixar e o que conta como upgrade.
- Tags num perfil de atraso ou de release limitam ele aos livros que têm uma dessas tags.
