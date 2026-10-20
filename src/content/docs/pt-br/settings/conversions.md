---
title: Configurações de conversão
description: Padrões, opções de codec, capítulos, metadados, lixeira e ffmpeg.
---

**Settings > Conversions** define os padrões das [Conversões](/pt-br/using/conversions/). Qualquer trabalho pode mudar esses padrões.

## Geral

| Configuração | Padrão | Efeito |
|---|---|---|
| Enable Conversions | ligado | Desligado, criar, enfileirar em lote ou tentar de novo uma conversão é recusado com HTTP 409, um job que já está na fila falha com uma mensagem avisando, e **Auto-Reformat on Import** não enfileira nada |
| Conversion Folder | vazio | Espaço de trabalho temporário. Vazio usa a pasta temporária do sistema |
| Concurrent Conversions | 2 | 1 a 4. Mantenha esse valor vezes **Threads Per Job** igual ou abaixo do número de núcleos. A página avisa quando passa |
| Threads Per Job | Auto | Threads do FFmpeg por job, na visão avançada. Auto deixa dois núcleos para o ABM e divide o resto entre os jobs rodando ao mesmo tempo, então 8 núcleos e 2 jobs simultâneos dão 3 threads cada um. Ou escolha um número fixo |
| Process Priority | Normal | Low deixa o resto do sistema respondendo. High termina mais rápido |

## Padrões de qualidade de áudio

| Configuração | Padrão |
|---|---|
| Default Output Format | M4B (também MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, ou Copy para não recodificar) |
| Default Sample Rate | Auto, que não passa nenhuma taxa e deixa o FFmpeg decidir. Ou 22050, 44100 ou 48000 Hz, que reamostra. O Opus só aceita certas taxas, então 22050 vira 24000 e 44100 vira 48000 (o log avisa) |
| Default Channels | Auto, que mantém o layout da fonte. Mono mistura em um canal só, para arquivos menores. Stereo força dois |

As duas listas de taxa e canais só aceitam o que a página oferece. Um valor salvo inválido é carregado como Auto.

## Opções de codec

| Formato | Codificador | Opções |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC por padrão) e AAC VBR, qualidade de 1 a 5. O bitrate vale quando o VBR está desligado. AAC-LC é o único perfil, porque o codificador não faz HE-AAC. Um perfil HE salvo é carregado como AAC-LC |
| MP3 | LAME | Qualidade VBR de 0 a 9 (4 por padrão) e Joint Stereo (ligado). O bitrate vale quando o VBR está desligado |
| Opus | libopus | Bitrate variável (ligado) e Application: Audio (padrão), VoIP ou Low Delay |
| FLAC | FLAC | Nível de compressão de 0 a 12 (5 por padrão). O bitrate é ignorado |

Um bitrate **Copy** pula a recodificação e todas as opções de codec.

## Tratamento de capítulos

| Configuração | Padrão | Efeito |
|---|---|---|
| Default Chapter Behavior | Auto | Preserva se existirem, gera se não existirem. Outras opções: só preservar, sempre gerar, nenhum |
| Chapter Naming Format | `Chapter {n}` | Dá nome aos capítulos que o ABM precisa inventar. `{n}` é o número e `{title}` o nome do arquivo de origem. Os títulos de capítulo que vêm dos arquivos ou do Libex são mantidos |
| Silence Detection | desligado | Para um arquivo sem capítulos, o ABM cria capítulos nas pausas mais longas do áudio. É usado por Split Chapters e por Ensure Chapters em um arquivo único quando o Libex não tem capítulos. Desligado, dividir um arquivo assim falha |
| Target Chapter Length | 600 s | Aparece quando Silence Detection está ligado, a partir de 60 s. Cada capítulo termina na pausa mais longa dentro de metade desse tamanho para cada lado, ou nesse tamanho se não houver pausa. Um final curto é juntado ao último capítulo, e os capítulos cobrem o arquivo todo |
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
| Retention Period | 7 dias | Itens mais antigos que isso são apagados pela tarefa de limpeza da lixeira. 0 os mantém para sempre |
| Auto-Empty When Bin Is Large | desligado | Liga o limite logo abaixo |
| Auto-Empty Threshold | 10 GB | Depois de uma conversão, se a lixeira tiver mais que isso, os itens mais antigos são apagados |
| Delete Original | desligado | Padrão de cada trabalho, dá para mudar |
| Update Library Paths | ligado | Os registros dos livros acompanham os arquivos convertidos |
| Auto-Reformat on Import | desligado | Converte livros recém-importados que chegam em outro formato, usando os padrões acima |
| Backup Original Metadata | desligado | Antes de converter, grava um arquivo JSON em uma pasta `.metadata_backup` dentro da pasta do livro. Ele lista nome, formato e tamanho de cada arquivo original, mais as tags e capítulos embutidos nele |

## FFmpeg avançado

FFmpeg Path (vazio procura no PATH), Custom FFmpeg Arguments (adicionados ao fim de todo comando; argumentos ruins fazem as conversões falharem), Logging Level (error por padrão) e Keep FFmpeg Logs (desligado).
