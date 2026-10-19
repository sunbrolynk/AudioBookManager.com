---
title: Indexadores
description: Newznab, Torznab, MyAnonamouse e Prowlarr.
---

**Settings > Indexers** lista onde o ABM procura releases.

## Tipos

Newznab (usenet), Torznab (torrent), MyAnonamouse e uma conexão Prowlarr que sincroniza os indexadores do Prowlarr.

## Campos

| Campo | Vale para | Efeito |
|---|---|---|
| Name | todos | Nome |
| Enable RSS | todos | Inclui na sincronização RSS |
| Enable Automatic Search | todos | Usa nas buscas que o ABM inicia |
| Enable Interactive Search | todos | Usa quando você busca à mão |
| URL, API Path, API Key | Newznab, Torznab | Onde e como conectar. As credenciais vão no campo, nunca na URL |
| Categories | Newznab, Torznab | Em quais categorias buscar |
| Cookie (mam_id) | MyAnonamouse | Cookie de sessão |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only ou Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Amplia a busca |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Limites de release e metas de seed |
| Indexer Priority | todos | De 1 (mais alta) a 50 (mais baixa), padrão 25. Quando a mesma release vem de dois indexadores, o número menor ganha |
| Download Client | todos | Manda os downloads deste indexador para um cliente. (Any) usa qualquer um |
| Tags | todos | Usa este indexador só para itens com uma tag correspondente |

Uma chave de API ou cookie salvo nunca aparece de novo. Deixe o campo em branco na edição para manter. Mudar a URL exige digitar o segredo de novo, assim uma chave não vai parar num endereço novo por acidente.

## Opções

Estas valem para todos os indexadores, então siga as regras de cada indexador.

| Configuração | Padrão | Efeito |
|---|---|---|
| Minimum Age | 0 (minutos) | Ignora releases de usenet mais novas que isso |
| Retention | 0 (dias) | Ignora releases mais antigas que isso. 0 é sem limite |
| Maximum Size | 0 (MB) | 0 é sem limite |
| RSS Sync Interval | 15 (minutos) | Com que frequência o RSS é consultado |

A lista do MAM também pode alimentar as [Listas de importação](/pt-br/settings/import-lists/).

Se você conhece o Sonarr: é a mesma divisão entre RSS, busca automática e busca interativa por indexador. Não tem um "testar tudo" separado para categorias.
