# Páginas de captura por categoria/persona

Esta pasta é o espaço reservado para as landing pages de teste de persona, uma por categoria.

Estrutura prevista (documentada no briefing de execução):

```
categorias/
  brasileiros-eua/
    persona-a.html   (ex: dono de negócio étnico buscando clientes locais)
    persona-b.html   (ex: prestador de serviço autônomo)
    persona-c.html   (ex: comércio/varejo buscando visibilidade regional)
```

Cada persona reaproveita o design system em `../assets/css/style.css` e o mesmo
mecanismo de captura (`../assets/js/main.js` → formulário → WhatsApp), trocando
apenas headline, prova social e o campo `data-origem` do formulário para
diferenciar a origem do lead no rastreamento.

Nenhuma página de categoria foi criada ainda — escopo desta etapa foi apenas a
base institucional do site. Ver briefing completo para o plano de execução.
