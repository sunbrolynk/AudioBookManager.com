---
title: Gerenciamento de mídia
description: Pastas raiz, importação, arquivos extras, lixeira, varreduras, upgrades e permissões.
---

**Settings > Media Management** controla onde os livros ficam e como os arquivos entram. As configurações marcadas como avançadas aparecem com **Show Advanced**.

## Pastas raiz (Root Folders)

Uma pasta raiz é um diretório em que o ABM gerencia livros. Adicione uma com **Add Root Folder**, que abre um navegador de pastas onde também dá para digitar o caminho. O ABM também consegue listar as pastas não mapeadas dentro de uma raiz e importar elas. O espaço livre e o suporte a hardlink de uma raiz são verificados quando ela é adicionada. Remover uma raiz pergunta o que fazer: **Remove from ABM only** (o padrão) esquece os livros dentro dela e deixa os arquivos, e **Delete the books and their files** apaga de vez tudo o que está no caminho, sem passar pela lixeira. Uma raiz com livros pede que você digite para confirmar.

A pasta raiz padrão é para onde vão os livros novos e é ela que decide se o hardlink é oferecido no Library Import.

## Pastas (Folders)

| Configuração | Padrão | Efeito |
|---|---|---|
| Create Empty Book Folders | desligado | Cria as pastas de livro que faltam ao adicionar, ao trocar a pasta raiz e durante uma varredura do disco. É ignorado enquanto **Delete empty folders** estiver ligado, para não criar uma pasta só para ela ser removida. |
| Delete empty folders | desligado | Apaga pastas de livro vazias durante uma varredura do disco e quando arquivos de livro são apagados |

## Importação (Importing)

| Configuração | Padrão | Efeito |
|---|---|---|
| Skip Free Space Check | desligado | Para quando o ABM não consegue detectar o espaço livre de uma raiz |
| Minimum Free Space | 100 (MB) | Uma importação que deixaria menos que isso é recusada |
| Use Hardlinks instead of Copy | ligado | Para downloads concluídos: hardlink em vez de cópia, assim o seed não dobra o espaço usado. Precisa ser o mesmo volume. |
| Library Import | Copy | O padrão do [Library Import](/pt-br/library-import/): copiar, hardlink ou mover. O hardlink fica desativado até a raiz padrão ter sido verificada e ter suporte. |
| Import Extra Files | ligado | Interruptor geral para trazer junto os arquivos que não são áudio. Vale para o Library Import, o Manual Import e os downloads concluídos |
| Extra File Extensions (avançado) | vazio | Mais tipos de arquivo para trazer junto, mantidos com o próprio nome, por exemplo `srt, lrc`. Com ou sem o ponto, separados por vírgulas ou espaços. Tipos bloqueados, como executáveis e downloads incompletos, não podem ser salvos. Fica desativado enquanto **Import Extra Files** estiver desligado |
| Preferred Cover (avançado) | Matched | A capa da edição que teve correspondência, ou a melhor imagem da pasta, quando existem as duas |

**Import Extra Files** traz os outros arquivos de um livro junto com o áudio. Cinco interruptores escolhem quais tipos vêm junto, e um arquivo que bate com **Extra File Extensions** vem junto mesmo quando o tipo dele está desligado:

| Interruptor | Padrão | O que cobre |
|---|---|---|
| Cover art | ligado | Capa mais digitalizações da contracapa e do encarte |
| Book info files | ligado | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | desligado | PDFs que vêm com um livro |
| Chapters, transcripts and playlists | ligado | .cue, listas de capítulos, legendas, letras, playlists. Os nomes de arquivo dentro deles são reescritos para o áudio renomeado. |
| Audible originals and ebooks | desligado | .aax/.aaxc, vouchers, epub e parecidos |

Downloads parciais e executáveis nunca são importados. O `metadata.json` do próprio ABM é sempre tratado pelo ABM.

O hardlink aqui não é a mesma coisa que **Use Hardlinks instead of Copy**. Aquele é para downloads. O padrão do Library Import é só o que o diálogo Add to Library deixa pré-selecionado.

## Gerenciamento de arquivos (File Management)

| Configuração | Padrão | Efeito |
|---|---|---|
| Unmonitor Deleted Books | desligado | Um livro apagado do disco deixa de ser monitorado |
| Change File Date | None | Muda as datas dos arquivos na importação e na nova varredura |
| Enable Recycling Bin | ligado | Arquivos de livro apagados vão para uma lixeira em vez de serem apagados |
| Recycling Bin | vazio | Onde fica a lixeira. Vazio usa o padrão do ABM (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (dias) | 0 desativa a limpeza automática |
| Library Scan Interval | 0 (desligado) | Horas entre as varreduras automáticas |
| Watch for Changes | desligado | Varre quando arquivos são adicionados, removidos ou alterados |
| Cover Cache Workers | 4 | Quantas capas são baixadas ao mesmo tempo ao guardar a arte em cache, de 1 a 16 |

## Upgrades de qualidade (Quality Upgrades)

| Configuração | Padrão | Efeito |
|---|---|---|
| Automatic Upgrade Search | ligado | De tempos em tempos procura releases melhores dos livros baixados que ainda estão abaixo do cutoff. Uma cópia só substitui a sua quando é um upgrade de verdade. |
| Upgrade Search Interval | 24 (horas) | Com que frequência roda |

## Permissões (Permissions, avançado)

| Configuração | Padrão | Efeito |
|---|---|---|
| Set Permissions | desligado | Roda chmod na importação e ao renomear |
| chmod Folder | 755 | Modo octal para pastas e arquivos, sem os bits de execução nos arquivos |
| chown Group | vazio | Nome do grupo ou gid. Use um gid em sistemas de arquivos remotos |

## Pegadinhas

- Se a lixeira estiver ativada mas a pasta dela não estiver disponível, as exclusões que dependem dela falham em vez de apagar de vez.
- Hardlinks só funcionam dentro de um mesmo sistema de arquivos. Arquivos que não dá para linkar são copiados, nunca movidos, e entram na contagem do resultado da importação.

Se você conhece o Sonarr: é o Media Management do Sonarr sem os formatos de nome. Os nomes das pastas são escolhidos pelo ABM. A renomeação em massa fica em Library, Series e Authors como **Rename Files**.
