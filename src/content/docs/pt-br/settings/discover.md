---
title: Configurações do Discover
description: Agendamento de atualização e limites de leitura dos catálogos do Discover.
---

**Settings > Discover** controla como os catálogos do [Discover](/pt-br/using/discover/) são preenchidos.

## Atualização e status dos catálogos

Cada catálogo (New Releases, Coming Soon, Audible Best, Recommended) tem os próprios botões **Refresh** e **Clear**, e a página mostra o quanto cada um está cheio.

## Agendamento

| Configuração | Efeito |
|---|---|
| Auto Refresh | Atualiza os catálogos num agendamento |
| Frequency | Daily, Weekly ou Monthly, com dia e hora |
| Refresh on Startup | Preenche qualquer catálogo vazio quando o ABM inicia |
| Use CRON Expression | Substitui as opções simples |

## Leitura das páginas (Scraping)

| Configuração | Intervalo | Efeito |
|---|---|---|
| Pages to Scrape | 1 a 50 | Páginas da Audible lidas por catálogo |
| Max ASINs per Refresh | 100 a 5000 | Livros buscados no Libex por atualização |
| Batch Size | 10 a 900 | ASINs por requisição ao Libex. Maior é mais rápido e pode falhar em alguns sistemas |

Os padrões ficam no app e não estão repetidos aqui. Abra a página para ver.

## Pegadinhas

As atualizações são puladas quando o Libex não está acessível, e isso é registrado uma vez no log.
