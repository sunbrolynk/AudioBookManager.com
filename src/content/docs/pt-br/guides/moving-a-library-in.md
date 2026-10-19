---
title: Trazendo uma biblioteca
description: Traga uma coleção que você já tem para o ABM com segurança.
---

## Antes de começar

1. Faça backup da coleção. O Library Import copia por padrão, mas conte com erros.
2. Configure uma pasta raiz e um perfil de qualidade, e confira se a fonte de metadados está acessível.
3. Decida entre copiar, mover ou hardlink. Copiar é o mais seguro. O hardlink economiza espaço se a biblioteca estiver no mesmo sistema de arquivos da origem. Veja [Media Management](/pt-br/settings/media-management/).

## Os passos

1. **Library > Library Import**, varra a pasta.
2. Leia a lista. As correspondências mostram uma porcentagem. Corrija as linhas **Needs attention** e **Unmatched** com **Find a match**, ou junte linhas que são um único livro espalhado em várias pastas.
3. Confira a capa e os arquivos extras de cada pasta só se quiser mudar os padrões.
4. Selecione as linhas e adicione. Continua em dois cliques se você aceitar os padrões.
5. Acompanhe a tarefa. O resumo diz quantos arquivos foram copiados em vez de receber hardlink e o que falhou.

## Se a sua coleção já está onde você quer

Adicionar a pasta como pasta raiz não adiciona nenhum livro sozinho. As varreduras do ABM só verificam livros que ele já conhece, então ele não vai pegar o que está lá dentro. Os livros ainda precisam entrar pelo Library Import: a contagem de **Unmapped Folders** da pasta raiz em **Settings > Media Management** abre o Library Import para essa raiz.

Importar coloca cada livro na estrutura Autor/Série/Livro do próprio ABM, dentro da pasta raiz padrão. Escolha hardlink para deixar os originais intactos sem gastar mais espaço.

## Pegadinhas

- Um livro que já está na biblioteca aparece marcado assim. Recuse a duplicata com a resposta keep library em vez de importar duas vezes.
- Recusar uma pasta sem áudio remove só o que pertence àquela linha e vai para a lixeira, se ela estiver ativada.
- Um ASIN encontrado numa descrição é uma pista, não uma correspondência, a não ser que o título também bata.
- Depois de importar, atualize para puxar os metadados atuais, e ligue a gravação de sidecars se quiser que o Audiobookshelf veja as escolhas do ABM. Veja [Arquivos sidecar](/pt-br/using/sidecars/).
