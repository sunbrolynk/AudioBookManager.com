---
title: Tags
description: Tags e regras de tags automáticas.
---

**Settings > Tags** gerencia as tags e o **Auto Tagging**.

## Tags

Uma tag é uma palavra só: minúscula, sem espaços, sem vírgulas, com até 100 caracteres. Digitar `Sci-Fi` gera `sci-fi`. As tags vão em livros, autores e séries, e são usadas por indexadores, perfis de atraso e de release, listas de importação, agentes do Connect e o feed do calendário.

Se você conhece o Sonarr: as tags funcionam do mesmo jeito. Um perfil com uma tag só vale para as coisas que têm essa tag.

## Tags automáticas

Uma tag automática é uma regra que aplica tags aos livros que atendem a ela.

| Campo | Efeito |
|---|---|
| Name | Nome |
| Enable | Ligado ou desligado |
| Remove Tags Automatically | Quando um livro deixa de atender, tira as tags |
| Tags | O que aplicar |
| Conditions | O que um livro precisa atender. Cada condição pode ser negada ou obrigatória |

Tipos de condição: Genre, Monitored, Language, Root Folder, Status, Tag, Year (intervalo), Series Type, Author (contém), Narrator (contém), Runtime em minutos (intervalo) e Rating (intervalo).

**Apply** roda as regras selecionadas agora. As regras também rodam quando os livros mudam.

## Pegadinhas

- Uma regra que aponta para uma tag ou pasta raiz apagada é pulada por inteiro, nos dois sentidos, então uma regra quebrada nunca coloca tag errada nem tira tags.
- Remove Tags Automatically só remove as tags que essa regra adicionaria.
