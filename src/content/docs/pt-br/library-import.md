---
title: Importação da biblioteca
description: Traga uma coleção que você já tem para o ABM com o Import Workbench.
---

O Library Import varre uma pasta de audiolivros, associa cada pasta a metadados e adiciona os livros à sua biblioteca. **Library > Library Import** abre "Import audiobooks you already have", onde você escolhe uma pasta para varrer. Quando a varredura começa, o ABM vai para a página de correspondências, com o título **Match Audiobooks**, onde você confere as correspondências e adiciona os livros.

## O fluxo

1. Varra uma pasta. Cada pasta com áudio vira uma linha.
2. Confira as correspondências. Corrija as que precisarem.
3. Marque as linhas que você quer e depois adicione à biblioteca ou exclua.

Toda opção é uma substituição opcional de um padrão definido em Media Management.

## Quando uma correspondência é aceita

O escaneamento só aceita uma correspondência quando os arquivos a confirmam:

- o ASIN nas tags dos próprios arquivos encontra o livro, ou
- a duração do livro fica a até três minutos da dos arquivos, e a posição na série ou o título bate com eles.

Um autor ou uma posição na série que contradiz os arquivos descarta um livro. Se os arquivos combinam igualmente bem com dois livros ou gravações diferentes, nenhum é aceito.

A duração dos arquivos só conta quando deu para ler cada arquivo do livro. Se um não puder ser medido, a linha fica sem duração: só o ASIN dela pode confirmar uma correspondência e, se não, o livro espera em **Needs a look**.

Pela duração, só é aceita uma edição em inglês, ou uma cuja ficha não informa idioma. Uma edição em outro idioma só é aceita quando o próprio ASIN dos arquivos a encontra. Um livro respondido pelo [armazenamento local](/pt-br/settings/metadata/) em vez de uma consulta ao vivo nunca é aceito sem você.

Quando uma das consultas de uma linha falha, só uma correspondência por ASIN é aceita. Um livro achado só pela busca do autor só é sugerido quando a duração dele bate com a dos arquivos, então um livro sem ficha aparece como **Unmatched** em vez de sugerir outro livro do autor.

Qualquer outra correspondência continua sendo sugerida, mas a linha conta em **Needs a look**, começa desmarcada e **Select All** a deixa de fora até você confirmar essa correspondência ou escolher outra. Uma correspondência aceita com um livro que você já tem na biblioteca conta em **In library**. Uma linha **Needs a look** cuja sugestão é um livro da biblioteca só faz a pergunta sobre a biblioteca quando você confirma essa correspondência. Até lá, se você marcá-la, ela bloqueia o Add como uma linha que ainda precisa de uma decisão.

Um livro em vários arquivos soltos que dividem a pasta com outros livros, como uma pasta de autor ou a pasta que você escaneia, é uma linha só com todas as partes. Arquivos que diferem por um número de livro ou de volume continuam como linhas separadas. As partes são agrupadas por formato: um arquivo com o livro inteiro ao lado é uma linha à parte, dois formatos do mesmo livro numa pasta compartilhada são linhas separadas, e uma taxa de bits no nome do arquivo, como `128kbps`, não é número de parte.

Uma tag escrita como `Title: Series, Book 2` é lida como o título, a série e a posição.

Uma posição na série escrita como intervalo, como `1-3`, combina com qualquer posição dentro dele. Dois números escritos de qualquer outro jeito, como `1, 3`, contam como nenhuma posição.

Uma tag de título, álbum, série, parte da série, artista, artista do álbum, compositor ou narrador com mais de 500 caracteres é ignorada.

**Recent Import Sessions** na página Library Import mostra, para cada escaneamento, quantas linhas têm correspondência, contando livros que já estão na biblioteca, e quantas estão pendentes, contando linhas em que você ainda precisa escolher uma correspondência.

## Lendo a lista

- O resumo mostra quantas pastas foram encontradas e quantas estão prontas. A barra do topo tem **Sort** (Folder name, Status, Title, Author, Series, Files) e **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Cada filtro mostra a sua contagem, e as contagens batem com o resumo. Uma correspondência que você confirmou se chama Ready. A ordenação e o filtro ficam lembrados neste dispositivo. Eles não ficam no endereço da página, então um link com `?sort=` ou `?filter=` não leva os dois junto.
- Cada linha mostra a capa, o título, o autor e a série, e o quanto a correspondência é confiável em porcentagem, como "95% match". Os detalhes da pasta têm **Find a match** ou **Change match** para buscar à mão.
- Quando os arquivos não têm ASIN nem duração para confirmar a edição, os detalhes da pasta avisam.
- **Rescan** pega as pastas adicionadas depois da varredura e mantém as suas escolhas.

Um ASIN encontrado num comentário ou numa descrição é só uma pista. Ele só conta como correspondência quando o título também bate com o nome da pasta. Só a tag ASIN dedicada vale sozinha.

## Juntar, dividir e adicionar

- Junte linhas que são um único livro espalhado em várias pastas. Separe de novo pelos detalhes da pasta. A correspondência da linha juntada é só uma sugestão: ela conta em **Needs a look** e começa desmarcada até você confirmar ou escolher outra. A duração dela é o total das partes só quando cada parte tem uma, e ela mantém um ASIN só quando todas as partes dão o mesmo. Uma consulta que termina depois que você junta ou divide a linha dela também é só uma sugestão.
- **Confirm match** nos detalhes de uma linha marca uma linha **Needs a look**, e **Undo confirmation** desfaz essa marcação também.
- Adicionar fica bloqueado com o motivo mostrado acima do botão, como "Select at least one folder" ou "2 selected rows still need a decision".
- Tudo o que removeria ou substituiria arquivos pergunta antes.
- Sair da página salva as edições pendentes.

## Copiar, mover ou hardlink

**Settings > Media Management > Importing** define o padrão do Library Import: copiar (o padrão), mover ou hardlink. Você pode escolher outro em cada importação.

Um livro com hardlink não ocupa espaço extra em disco e o original fica onde está. O hardlink precisa que a pasta raiz padrão tenha suporte e que isso seja verificado antes. Se não, a opção aparece desativada, com o motivo. Um arquivo que não dá para linkar, como um que está em outro disco, é copiado e nunca movido. A importação concluída diz quantos foram copiados.

## Arquivos extras

**Import Extra Files** (ligado por padrão) traz junto a capa, as notas e outros arquivos que não são áudio. Vale para o Library Import, o Manual Import e os downloads concluídos. Com **Show Advanced**, **Preferred Cover** escolhe a capa da Audible que teve correspondência (o padrão) ou a da própria pasta.

## Valores longos

Um narrador, título ou caminho cortado com reticências abre inteiro quando você toca ou clica nele. Toque ou clique de novo para fechar. Com mouse, passar o cursor por cima também mostra o valor inteiro. Pelo teclado, coloque o foco nele e aperte Enter ou Espaço.

## Respostas além de importar

Uma linha também pode ser respondida com **keep library** (recusar uma cópia de um livro que a biblioteca já tem) ou **remove empty** (recusar uma pasta sem áudio, que ainda guarda arte e sidecars). Isso limpa só o que pertence à linha. Qualquer coisa que tenha áudio é recusada. Os arquivos vão para a lixeira quando há uma configurada, e o log da tarefa lista cada caminho removido. Uma decisão **keep library** vale só para o livro da biblioteca a que se referia: se você escolher uma correspondência que pergunta outra coisa ou sobre outro livro da biblioteca, a linha pergunta de novo. A importação confere de novo quando roda, e nada é removido se a cópia da biblioteca não tiver arquivos até lá ("Your library has no copy of this book to keep") ou se a pasta tiver arquivos de um livro da sua biblioteca ("This folder holds files of a book in your library").

## Capa e arquivos extras por pasta

O inspetor mostra a capa da própria pasta ao lado da capa da edição que teve correspondência, cada uma com o tamanho em pixels. Um clique escolhe a outra. Logo abaixo, **Extra files** lista todos os outros arquivos com o nome do interruptor de Media Management que cada um segue. Um ponto marca uma escolha diferente das configurações, e **Apply this cover and these file choices to the N other selected** copia as escolhas de uma pasta para as demais. Uma linha que adiciona arquivos a um livro que já está na biblioteca não tem seletor.

Veja também [Trazendo uma biblioteca](/pt-br/guides/moving-a-library-in/) e [Media Management](/pt-br/settings/media-management/).
