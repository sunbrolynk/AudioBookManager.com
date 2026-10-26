---
title: Geral
description: Host, segurança, proxy, logs e backups.
---

**Settings > General** tem seções para Host, Security, Proxy, Logging e Backups. Security tem [uma página própria](/pt-br/settings/security/).

## Host

| Configuração | Padrão | Efeito |
|---|---|---|
| Bind Address | `*` | Endereço em que o ABM escuta. Precisa reiniciar |
| Port Number | 5173 | Precisa reiniciar |
| URL Base | vazio | Um prefixo de caminho, para subpastas de proxy reverso como `/audiobook-manager`. Precisa reiniciar |
| Instance Name | Audiobook Manager | Aparece na aba e é usado como nome do app no syslog |
| Application URL | vazio | O endereço externo, incluindo `http(s)://`, porta e URL base |
| Enable SSL | desligado | O próprio ABM serve HTTPS. Pede um caminho de certificado e um caminho de chave. Precisa reiniciar |

No Docker, o que importa na prática são a variável de ambiente `PORT` e o mapeamento de porta do compose. Veja [Variáveis de ambiente](/pt-br/configuration/).

## Proxy

Como o ABM chega à internet para buscar metadados, capas e páginas da Audible.

| Configuração | Padrão | Efeito |
|---|---|---|
| Use Proxy | desligado | Passa as requisições externas por um proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS5 ou SOCKS5H |
| Hostname, Port | vazio | Endereço do proxy |
| Username, Password | vazio | Opcional |
| Test Connection | | Verifica o proxy |

A seção também mostra o seu IP de saída como os serviços externos o veem. Uma escolha de conexão, incluindo uma VPN embutida, está prevista para uma versão futura.

## Logs (Logging)

| Configuração | Padrão |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 dias, 0 mantém para sempre |
| Activity Log Retention | 90 dias, 0 mantém para sempre |
| Book History Retention | 0 (manter) |
| Automatic Cleanup | ligado |
| Cleanup Time | 03:00 |
| SQL Logging | desligado. Muito verboso |
| Parser Log Level, Matcher Log Level | Info. Volume alto em Debug |

Veja [Logs](/pt-br/system/logs/) e o [Log de atividades](/pt-br/system/activity-log/).

## Backups

| Configuração | Padrão | Efeito |
|---|---|---|
| Backup Folder | `/config/backups` | Para onde vão os backups |
| Automatic Backups | desligado | Backups agendados |
| Schedule Frequency | Daily | Daily, Weekly ou Monthly, com dia e hora. Ou Use Cron Expression |
| Backup Retention | 28 dias | 0 mantém para sempre |
| Auto-Export on Backup | ligado | Depois de cada backup, envia ele para os destinos de exportação marcados como Auto |
| Export Targets | nenhum | Destinos remotos: SFTP, SCP, FTPS, FTP, S3 ou rclone |

Veja [Backups](/pt-br/system/backups/).
