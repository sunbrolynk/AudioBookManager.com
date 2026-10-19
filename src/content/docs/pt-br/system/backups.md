---
title: Backups
description: Faça backup, exporte e restaure o ABM.
---

**System > Backups** cria e restaura backups. **Backup Now** cria um na hora. Agendamentos, retenção e destinos de exportação ficam em [General](/pt-br/settings/general/).

## O que vai num backup

Um arquivo criptografado com uma cópia consistente do banco de dados (`database.db`), as configurações (`settings.json`) e um manifesto. Inclua também `/config` nos seus próprios backups, por causa das capas e do arquivo de segredo do app.

## Restaurando

Escolha um da lista, ou envie um arquivo de backup (até 500 MiB). Antes, é salva uma cópia do banco de dados em uso. A restauração não pode ser desfeita.

Por padrão, uma restauração não traz de volta as **configurações de segurança** (modo de autenticação, credenciais, redes confiáveis) nem a **conexão de saída**. As atuais são mantidas e o resultado avisa disso. Marque a opção no envio para restaurar essas também. Isso quer dizer que um arquivo enviado nunca consegue desligar o login só por ser restaurado.

Se o backup foi feito numa versão mais antiga, reinicie o contêiner depois de restaurar para a migração rodar.

Um backup é recusado, sem nada ser alterado, se tiver entradas inesperadas, não for um banco SQLite válido ou for um backup antigo de antes da mudança para SQLite.

## Destinos de exportação

SFTP, SCP, FTPS, FTP, S3 ou um remote do rclone. Um destino marcado como **Auto** recebe cada backup automaticamente. Nomes de remotes do rclone podem usar letras, números, `_`, `.` e `-`.

## Pegadinhas

- A imagem Docker e o seu arquivo compose não vão no backup. Guarde o arquivo compose.
- Se você definiu `APP_SECRET`, faça backup dele separado. Sem ele, as credenciais guardadas não podem ser descriptografadas depois de uma restauração em outro host.
