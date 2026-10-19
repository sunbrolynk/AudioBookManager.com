---
title: Conversões
description: Converta, junte, divida e adicione capítulos a arquivos de áudio, com uma fila que dá para pausar.
---

**Library > Conversions** roda trabalhos do ffmpeg na sua biblioteca. São quatro tipos:

| Trabalho | O que faz |
|---|---|
| Convert Format | Recodifica para M4B, MP3, M4A, FLAC ou Opus |
| Merge Parts | Junta vários arquivos em um só, com capítulos |
| Split Chapters | Divide um arquivo em um arquivo por capítulo |
| Ensure Chapters | Adiciona ou corrige marcadores de capítulo sem recodificar |

Os padrões de todos os trabalhos vêm das [configurações de conversão](/pt-br/settings/conversions/). Cada trabalho pode mudar esses padrões.

## A fila

Os trabalhos esperam numa fila e rodam até **Concurrent Conversions** por vez (2 por padrão). Os trabalhos concluídos vão para o History, que você pode limpar.

A saída é gravada numa pasta de trabalho privada e só é colocada na biblioteca quando termina. Cada arquivo entra com um nome temporário e é renomeado no lugar, então um livro gravado pela metade nunca aparece. Uma verificação de espaço livre roda antes de o trabalho começar e de novo antes de colocar o resultado. Os arquivos de origem nunca são sobrescritos.

Converter um arquivo para o formato em que ele já está é recusado, porque sobrescreveria o original.

## Depois de uma conversão

O ABM atualiza os registros de arquivo, o tamanho e a qualidade do livro, então um livro convertido mostra a qualidade nova. Se **Delete Original** estiver ligado, os arquivos antigos vão para a lixeira de conversões, quando ela está ativada.

Se colocar o resultado no lugar falhar (a pasta da biblioteca está cheia, por exemplo), o trabalho falha e a saída pronta fica guardada na pasta de trabalho. O erro diz qual é a pasta. **Retry** começa o trabalho do zero e descarta essa saída guardada, então pergunta antes. **Clear history** mantém os trabalhos que ainda têm saída não colocada.

## Pausar e retomar

:::caution[Chega na próxima versão]
A pausa ainda não está em nenhuma versão lançada.
:::

Dois tipos de pausa, e nenhum cancela nada:

- **Pause** num trabalho em execução suspende os processos do ffmpeg dele onde estão. Resume continua do mesmo ponto.
- **Pause queue** (no topo da fila, ou na barra superior no celular) impede que novos trabalhos comecem e suspende todos os que estão rodando.

Um trabalho que você mesmo pausou continua pausado quando a fila é retomada, e também depois de reiniciar. Um trabalho que estava rodando quando o ABM parou volta pausado e não começa sozinho. Resume continua da última parte concluída em junções, divisões e conversões de vários arquivos. Uma conversão de arquivo único começa aquele arquivo de novo.

O limite de 6 horas por execução conta só o tempo fora de pausa. Se o estado salvo da fila não puder ser lido na inicialização, a fila começa pausada e avisa. Aperte Resume queue para regravar o estado.

Se você conhece o Sonarr: não tem nada parecido nos arrs. Pense nisso como uma pequena fila de codificação que por acaso mora dentro do gerenciador.

## Pegadinhas

- Concurrent Conversions vezes Threads Per Job não deve passar do número de núcleos da sua CPU.
- Um arquivo convertido tem tamanho e data de modificação novos, então o Audiobookshelf vai varrer ele de novo.
- Converter um arquivo com hardlink para um torrent em seed cria um arquivo novo. A cópia em seed fica com os bytes antigos.
