# Lojinha - Trabalho Web 1

Este projeto é uma aplicação web simples para cadastro e exibição de produtos, desenvolvida como parte do Trabalho Web 1.

## Funcionalidades
- Cadastro de produtos com nome, imagem, preço e categoria
- Filtro de produtos por categoria
- Interface responsiva com tema claro/escuro
- Adição e remoção de produtos dinamicamente

## Estrutura de Pastas
```
├── src/
│   ├── pages/
│   │   └── pagina_main.html
│   ├── scripts/
│   │   └── script.js
│   └── styles/
│       ├── global.css
│       └── main.css
├── index.html
```

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (jQuery)

## Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/hext04d/web-1-pagina-basica.git
   ```
2. Abra o arquivo `index.html` em seu navegador.
3. Para testar funcionalidades dinâmicas, utilize um servidor local:
   ```bash
   cd web-1-pagina-basica
   python3 -m http.server 5000
   ```
   Acesse: [http://localhost:5000](http://localhost:5000)

## Observações
- O cadastro e exibição dos produtos são feitos inteiramente no front-end.
- O arquivo `pagina_main.html` é a principal interface de manipulação dos produtos.

## Autores
- Desenvolvido por Charlie e Yuri
