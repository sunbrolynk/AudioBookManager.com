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
| Library Scan Interval | 24 | Horas entre as varreduras automáticas |
| Watch for Changes | ligado | Varre quando arquivos são adicionados, removidos ou alterados |
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

## Book Naming

Book Naming define como eu nomeio arquivos e pastas. Ele é salvo com o único Save da página, junto com o resto de Media Management. Tem Rename Books, Replace Illegal Characters, Colon Replacement (com uma opção personalizada) e formatos para Standard Book, Author Folder, Series Folder, Standalone Folder e Book Folder. Cada formato mostra um exemplo ao vivo, e uma lista de tokens mostra todos os que você pode usar.

Library, Series e Authors também têm uma ação **Organize** nos livros selecionados, e a página de um livro também. Ela abre primeiro uma prévia de cada mudança, e nada se move até você confirmar. Depois o Organize move e renomeia: move a pasta de cada livro para onde as configurações de nomes a colocam e renomeia seus arquivos. Roda como uma tarefa que você pode acompanhar, cancelar e, depois de uma reinicialização, retomar de onde parou. Só um Organize roda por vez. Não há desfazer, então confira bem a prévia. A renomeação em massa continua em Library, Series e Authors como **Rename Files**.

Se um Organize for interrompido, a próxima execução continua de onde parou. Um livro que a execução interrompida já tinha movido ou renomeado no disco é encontrado no novo local e seus registros são atualizados, então nada é movido duas vezes. A prévia mostra esse livro como já movido ou já renomeado, e o resultado o conta como reconciliado (reconciled). Um livro só é reconciliado quando consigo provar que a pasta é dele: os arquivos precisam bater com o que tenho registrado e nenhum outro livro pode reivindicar a pasta. Caso contrário, o livro é ignorado, com o motivo. Continua não havendo desfazer.

A prévia lista só os livros que mudariam. Marque **Show all selected books** para ver os outros também. Ela carrega em páginas, então use **Load more** para continuar numa seleção grande. O título da prévia conta quantos livros vão mudar e quantos serão ignorados.

Na página de um livro cuja pasta não está onde as configurações de nomes a colocariam, aparece um aviso, com a pasta para onde ele iria e um botão Organize.

Quando a nova pasta de um livro ficaria dentro da pasta em que ele está agora, o Organize cria a subpasta ali e move para ela só os arquivos do próprio livro: o áudio, mais a capa, os capítulos e outros arquivos auxiliares que guardo para ele. O resto da pasta fica onde estava. A prévia diz "Moves into a subfolder" e lista o que fica, e a janela de resultado lista os arquivos deixados no lugar. Se uma movimentação falhar no meio, os arquivos já movidos voltam. Mover a pasta de um livro para uma subpasta dela mesma pela janela de edição funciona do mesmo jeito.

O Library Import segue as mesmas configurações de nomes, inclusive ao adicionar um livro que já está numa pasta raiz ou ao mover arquivos para um livro que eu já tenho. Com Rename Books desligado, cada arquivo mantém o nome com que veio. Um arquivo cujo nome colidiria com outro do lote, ou com um que já está na pasta do livro (sem diferenciar maiúsculas), recebe o nome do formato, e a importação anota quais arquivos tiveram isso. Com Rename Books ligado, arquivos que ficariam com o mesmo nome são numerados pela posição, e assim o Manual Import nunca pula nenhum.

O layout padrão é `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Um livro avulso não tem pasta de série nem volume: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Um livro de série sem posição também começa pelo ano. Um ano desconhecido é omitido, nunca escrito como `(Unknown)`.

Se você conhece o Sonarr: é o Media Management do Sonarr, com os formatos de nome incluídos.
