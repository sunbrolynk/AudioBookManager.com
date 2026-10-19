---
title: Configurações de conversão
description: Padrões, opções de codec, capítulos, metadados, lixeira e ffmpeg.
---

**Settings > Conversions** define os padrões das [Conversões](/pt-br/using/conversions/). Qualquer trabalho pode mudar esses padrões.

## Geral

| Configuração | Padrão | Efeito |
|---|---|---|
| Enable Conversions | ligado | Interruptor geral |
| Conversion Folder | vazio | Espaço de trabalho temporário. Vazio usa a pasta temporária do sistema |
| Concurrent Conversions | 2 | De 1 a 4 na interface. Mantenha simultaneidade vezes threads abaixo do número de núcleos |
| Process Priority | Normal | Low deixa o resto do sistema respondendo. High termina mais rápido |

## Padrões de qualidade de áudio

| Configuração | Padrão |
|---|---|
| Default Output Format | M4B (também MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, ou Copy para não recodificar) |
| Default Sample Rate | Auto, que segue a origem |
| Default Channels | Auto, que segue a origem |

## Opções de codec

AAC Profile (AAC-LC por padrão, HE-AAC, HE-AACv2) e AAC VBR; qualidade VBR e joint stereo do MP3; nível de compressão do FLAC (5 por padrão); bitrate variável do Opus (ligado) e tipo de aplicação (Audio por padrão; também existem VoIP e Low Delay).

## Tratamento de capítulos

| Configuração | Padrão | Efeito |
|---|---|---|
| Default Chapter Behavior | Auto | Preserva se existirem, gera se não existirem. Outras opções: só preservar, sempre gerar, nenhum |
| Chapter Naming Format | `Chapter {n}` | Modelo para os nomes gerados |
| Silence Detection | desligado | Experimental. Tenta encontrar capítulos pelos silêncios |
| Minimum Chapter Length | 60 s | Para capítulos detectados |
| Chapter Image Handling | Keep in file | Ou remover, ou extrair para uma pasta |

## Tratamento de metadados

| Configuração | Padrão |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | ligado (só JPEG, para o Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Gerenciamento de arquivos

| Configuração | Padrão | Efeito |
|---|---|---|
| Enable Recycle Bin | ligado | Os originais vão para a lixeira em vez de serem apagados |
| Recycle Bin Path | vazio | Vazio usa `/config/recycle/conversions` |
| Retention Period | 7 dias | 0 desativa a limpeza automática |
| Auto-Empty on Low Disk Space | desligado | Esvazia a lixeira quando o espaço fica abaixo do limite |
| Auto-Empty Threshold | 10 (%) | Nível de espaço livre |
| Delete Original | desligado | Padrão de cada trabalho, dá para mudar |
| Update Library Paths | ligado | Os registros dos livros acompanham os arquivos convertidos |
| Auto-Reformat on Import | desligado | Converte livros recém-importados que chegam em outro formato, usando os padrões acima |
| Backup Original Metadata | desligado | Salva antes as tags originais num sidecar `.json` |

## FFmpeg avançado

FFmpeg Path (vazio procura no PATH), Threads Per Job (0 escolhe automaticamente: número de CPUs menos 2), Custom FFmpeg Arguments (adicionados ao fim de todo comando; argumentos ruins fazem as conversões falharem), Logging Level (error por padrão) e Keep FFmpeg Logs (desligado).
