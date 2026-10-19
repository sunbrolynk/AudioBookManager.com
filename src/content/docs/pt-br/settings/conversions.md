---
title: Configurações de conversão
description: Padrões, opções de codec, capítulos, metadados, lixeira e ffmpeg.
---

**Settings > Conversions** define os padrões das [Conversões](/pt-br/using/conversions/). Qualquer trabalho pode mudar esses padrões.

## Geral

| Configuração | Padrão | Efeito |
|---|---|---|
| Enable Conversions | ligado | Desliga a conversão na página Conversions. **Auto-Reformat on Import** é separado |
| Conversion Folder | vazio | Espaço de trabalho temporário. Vazio usa a pasta temporária do sistema |
| Concurrent Conversions | 2 | De 1 a 4. Mantenha este valor vezes **Threads Per Job** (em **Advanced FFmpeg**, no fim desta página) no máximo igual ao número de núcleos. A página avisa quando passa disso |
| Process Priority | Normal | Low deixa o resto do sistema respondendo. High termina mais rápido |

## Padrões de qualidade de áudio

| Configuração | Padrão |
|---|---|
| Default Output Format | M4B (também MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, ou Copy para não recodificar) |
| Default Sample Rate | Auto, que segue a origem. Ou 22050, 44100 ou 48000 Hz |
| Default Channels | Auto, que segue a origem. Ou Mono ou Stereo |

## Opções de codec

| Formato | Codificador | Opções |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC por padrão) e AAC VBR, qualidade de 1 a 5. O bitrate vale quando o VBR está desligado. HE-AAC e HE-AACv2 aparecem na lista, mas por enquanto codificam como AAC-LC |
| MP3 | LAME | Qualidade VBR de 0 a 9 (4 por padrão) e Joint Stereo (ligado). O bitrate vale quando o VBR está desligado |
| Opus | libopus | Bitrate variável (ligado) e Application: Audio (padrão), VoIP ou Low Delay |
| FLAC | FLAC | Nível de compressão de 0 a 12 (5 por padrão). O bitrate é ignorado |

Um bitrate **Copy** pula a recodificação e todas as opções de codec.

## Tratamento de capítulos

| Configuração | Padrão | Efeito |
|---|---|---|
| Default Chapter Behavior | Auto | Preserva se existirem, gera se não existirem. Outras opções: só preservar, sempre gerar, nenhum |
| Chapter Naming Format | `Chapter {n}` | Dá nome aos capítulos que o ABM precisa inventar. `{n}` é o número e `{title}` o nome do arquivo de origem. Os títulos de capítulo que vêm dos arquivos ou do Libex são mantidos |
| Silence Detection | desligado | Experimental. Só é usado ao dividir um livro que não tem capítulos: o ABM divide nos silêncios. Desligado, essa divisão falha |
| Minimum Chapter Length | 60 s | O capítulo mais curto que a detecção de silêncio cria |
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
| Retention Period | 7 dias | Define a validade mostrada nos itens da lixeira. Por enquanto nada apaga os itens nessa data |
| Auto-Empty on Low Disk Space | desligado | Liga o limite logo abaixo |
| Auto-Empty Threshold | 10 | Depois de uma conversão, se a lixeira tiver mais do que esse número de GB, os itens mais antigos são apagados. A página mostra como porcentagem, mas o valor é lido como GB |
| Delete Original | desligado | Padrão de cada trabalho, dá para mudar |
| Update Library Paths | ligado | Os registros dos livros acompanham os arquivos convertidos |
| Auto-Reformat on Import | desligado | Converte livros recém-importados que chegam em outro formato, usando os padrões acima |
| Backup Original Metadata | desligado | Antes de converter, salva um registro dos arquivos originais (nomes, formatos, tamanhos) em `.metadata_backup/`, ao lado deles. Não salva as tags de áudio |

## FFmpeg avançado

FFmpeg Path (vazio procura no PATH), Threads Per Job (0 escolhe automaticamente: número de CPUs menos 2), Custom FFmpeg Arguments (adicionados ao fim de todo comando; argumentos ruins fazem as conversões falharem), Logging Level (error por padrão) e Keep FFmpeg Logs (desligado).
