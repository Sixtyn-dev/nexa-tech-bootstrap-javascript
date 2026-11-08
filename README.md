# Nexa Tech — Loja de Tecnologia

Protótipo acadêmico de loja virtual de celulares, notebooks e acessórios. Desenvolvido com **HTML5, CSS3, JavaScript (ES6) e Bootstrap 5.3**.

## Acessar o site
Após publicar no GitHub Pages, inserir o endereço real: `https://SEU-USUARIO.github.io/nexa-tech/`.

## Telas e navegação
1. `index.html` — página inicial e categorias.
2. `celulares.html` — catálogo de celulares.
3. `notebooks.html` — catálogo de notebooks.
4. `acessorios.html` — catálogo de acessórios.
5. `produto.html` — detalhes de produto.
6. `contato.html` — formulário e atendimento.

As seis telas estão conectadas pelo menu responsivo, links de categoria, detalhes e contato.

## Tecnologias utilizadas
- **HTML5:** estrutura semântica e formulários.
- **CSS3:** identidade visual, Grid/Flexbox, ajustes responsivos e estados de foco.
- **Bootstrap 5.3:** navbar colapsável para celular, offcanvas do carrinho, botões, badges, listas e toast. Carregado por CDN.
- **JavaScript ES6:** busca instantânea nos catálogos, carrinho com `localStorage`, atualização de quantidades, remoção de itens, notificações e validação do formulário.

## Conceitos aplicados
### Usabilidade e UX
Menu consistente; categorias organizadas; busca imediata; fluxo início → categoria → produto → contato; carrinho acessível em todas as telas; feedback visual após ações.

### Acessibilidade
Idioma `pt-BR`; HTML semântico; link “Pular para o conteúdo”; rótulos associados aos campos; textos alternativos; `aria-label`, `aria-live` e `aria-current`; foco de teclado visível; botões com nomes claros.

### Responsividade
Bootstrap com breakpoints e navbar colapsável, CSS Grid/Flexbox e media queries; imagens limitadas ao contêiner; cartões reorganizados em telas menores.

## Divisão de tarefas — grupo de três integrantes
| Integrante | Telas / responsabilidades |
|---|---|
| Mohammed Samer | `index.html` e `celulares.html`; estrutura inicial e catálogo de celulares |
| Joao Franscisco Anciutti | `notebooks.html` e `acessorios.html`; catálogos e imagens |
| Israel Lima | `produto.html` e `contato.html`; detalhes e formulário |

**Trabalho conjunto:** integração do Bootstrap e JavaScript, testes de responsividade/acessibilidade, revisão e publicação. Cada integrante deve realizar commits usando sua própria conta GitHub, para comprovar a participação.

## Como executar
Abra `index.html` no navegador com conexão à internet (necessária para carregar Bootstrap pela CDN). O carrinho usa armazenamento local do navegador.

## Publicar no GitHub Pages
1. Crie um repositório chamado `nexa-tech`.
2. Envie todos os arquivos e pastas mantendo a estrutura.
3. Cada integrante realiza commits com sua própria conta.
4. Acesse **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
6. Salve e aguarde o endereço ser publicado.
7. Substitua o link de exemplo acima pelo endereço real.

## Observação acadêmica
Produtos, preços, e-mails e atendimento são fictícios. O formulário apenas valida os dados no navegador; não envia mensagens. O carrinho é demonstrativo e não realiza pagamentos.
