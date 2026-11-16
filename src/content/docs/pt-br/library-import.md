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

## Lendo a lista

- O resumo mostra quantas pastas foram encontradas e quantas estão prontas. A barra do topo tem **Sort** (Folder name, Status, Title, Author, Series, Files) e **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Cada filtro mostra a sua contagem, e as contagens batem com o resumo. Uma correspondência que você confirmou se chama Ready. A ordenação e o filtro ficam lembrados neste dispositivo. Eles não ficam no endereço da página, então um link com `?sort=` ou `?filter=` não leva os dois junto.
- Cada linha mostra a capa, o título, o autor e a série, e o quanto a correspondência é confiável em porcentagem, como "95% match". Os detalhes da pasta têm **Find a match** ou **Change match** para buscar à mão.
- Quando os arquivos não têm ASIN nem duração para confirmar a edição, os detalhes da pasta avisam.
- **Rescan** pega as pastas adicionadas depois da varredura e mantém as suas escolhas.

Um ASIN encontrado num comentário ou numa descrição é só uma pista. Ele só conta como correspondência quando o título também bate com o nome da pasta. Só a tag ASIN dedicada vale sozinha.

## Juntar, dividir e adicionar

- Junte linhas que são um único livro espalhado em várias pastas. Separe de novo pelos detalhes da pasta.
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

Uma linha também pode ser respondida com **keep library** (recusar uma cópia de um livro que a biblioteca já tem) ou **remove empty** (recusar uma pasta sem áudio, que ainda guarda arte e sidecars). Isso limpa só o que pertence à linha. Qualquer coisa que tenha áudio é recusada. Os arquivos vão para a lixeira quando há uma configurada, e o log da tarefa lista cada caminho removido.

## Capa e arquivos extras por pasta

O inspetor mostra a capa da própria pasta ao lado da capa da edição que teve correspondência, cada uma com o tamanho em pixels. Um clique escolhe a outra. Logo abaixo, **Extra files** lista todos os outros arquivos com o nome do interruptor de Media Management que cada um segue. Um ponto marca uma escolha diferente das configurações, e **Apply this cover and these file choices to the N other selected** copia as escolhas de uma pasta para as demais. Uma linha que adiciona arquivos a um livro que já está na biblioteca não tem seletor.

Veja também [Trazendo uma biblioteca](/pt-br/guides/moving-a-library-in/) e [Media Management](/pt-br/settings/media-management/).
