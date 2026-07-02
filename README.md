# 📚 Blog de Computação - Antonio Roque

Um blog moderno desenvolvido em **React** com foco em conteúdos sobre tecnologia, desenvolvimento web, inteligência artificial e ciência de dados. Projeto desenvolvido como requisito da disciplina **Desenvolvimento de Software I** da UFRB.

## 🎯 Sobre o Projeto

Este projeto é uma aplicação de blog responsiva que demonstra o uso de:
- **React** para construção de componentes reutilizáveis
- **React Router** para navegação entre páginas
- **Context API** para gerenciamento de tema (claro/escuro)
- **Vite** para bundling rápido e eficiente
- **Integração com API externa** do GitHub

### Funcionalidades Principais

✨ **Funcionalidades Implementadas:**
- 📖 Visualização de artigos com paginação
- 🔍 Busca de artigos por palavras-chave, tags e título
- 🏷️ Filtro por categorias
- 💬 Sistema de comentários persistente (localStorage)
- 🌓 Tema claro/escuro com persistência
- 📱 Design responsivo e moderno
- 🔗 Integração com API do GitHub (repositórios em destaque)
- ♿ Código acessível com navegação semântica

## 🚀 Como Começar

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** instalados

### Instalação

1. **Clone ou baixe o projeto:**
```bash
cd meu-app5
```

2. **Instale as dependências:**
```bash
npm install
```

### Executar em Desenvolvimento

Para rodar a aplicação localmente com hot reload:

```bash
npm run dev
```

A aplicação abrirá em `http://localhost:5173` (ou próxima porta disponível).

### Build para Produção

Para criar uma build otimizada:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Prévia da Build

Para visualizar o build localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
meu-app5/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Layout.jsx       # Layout principal (header, footer, nav)
│   │   ├── PostCard.jsx     # Card de exibição de artigos
│   │   └── Sidebar.jsx      # Sidebar com categorias e API
│   ├── pages/               # Páginas da aplicação
│   │   ├── HomePage.jsx     # Página inicial com listagem
│   │   ├── PostPage.jsx     # Página individual do artigo
│   │   ├── CategoryPage.jsx # Página de artigos por categoria
│   │   ├── AboutPage.jsx    # Página "Sobre o autor"
│   │   └── NotFoundPage.jsx # Página 404
│   ├── context/
│   │   └── ThemeContext.jsx # Context para tema claro/escuro
│   ├── data/
│   │   └── posts.js         # Base de dados de artigos
│   ├── App.jsx              # Componente raiz com rotas
│   ├── App.css              # Estilos globais
│   ├── index.css            # Reset CSS e variáveis
│   └── main.jsx             # Ponto de entrada
├── public/                  # Arquivos estáticos
├── index.html               # HTML principal
├── vite.config.js           # Configuração do Vite
├── package.json             # Dependências do projeto
└── README.md               # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| React | 18.x | Biblioteca de UI |
| React Router | 6.x | Roteamento SPA |
| Vite | 8.x | Build tool e dev server |
| JavaScript | ES6+ | Linguagem de programação |

## 📝 Dados e Posts

Os artigos são armazenados em `src/data/posts.js` com a seguinte estrutura:

```javascript
{
  id: 1,
  slug: 'identificador-unico',
  title: 'Título do Artigo',
  image: 'URL da imagem',
  excerpt: 'Resumo do artigo',
  content: ['Parágrafo 1', 'Parágrafo 2', ...],
  category: 'Categoria do artigo',
  tags: ['tag1', 'tag2'],
  date: 'DD mês YYYY',
  author: 'Nome do autor'
}
```

## 💬 Sistema de Comentários

Os comentários são salvos localmente no `localStorage` do navegador com a chave `comments-{slug}`. Cada comentário possui:

```javascript
{
  id: timestamp,
  name: 'Nome do comentarista',
  message: 'Conteúdo do comentário'
}
```

## 🌓 Tema Claro/Escuro

O tema é gerenciado pela `ThemeContext` e persistido em `localStorage` com a chave `blog-theme`. Mude o tema clicando no botão na navbar.

## 🔗 Integração com API

A aplicação consome a **GitHub API** para exibir repositórios em destaque:
- Endpoint: `https://api.github.com/users/octocat/repos?per_page=3`
- Atualizado a cada carregamento da página inicial

## 📱 Responsividade

A aplicação é **totalmente responsiva** e funciona em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🚀 Deploy Online

### Opção 1: Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique "New Project" e selecione seu repositório
4. Vercel detectará automaticamente Vite + React
5. Clique "Deploy"

### Opção 2: Netlify

1. Faça push do código para GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Clique "New site from Git"
4. Configure build command: `npm run build`
5. Configure publish directory: `dist`

### Opção 3: GitHub Pages

Configure `vite.config.js`:
```javascript
export default {
  base: '/seu-nome-repo/',
}
```

Execute:
```bash
npm run build
npx gh-pages -d dist
```

## 🐛 Troubleshooting

### Erro: "react-router-dom not found"
```bash
npm install
```

### Porta 5173 em uso?
O Vite procurará automaticamente por outra porta disponível (5174, 5175, etc).

### Comentários não salvam?
Verifique se o localStorage está habilitado no seu navegador.

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 👨‍💻 Autor

**Antonio Roque**  
Estudante de Computação - UFRB  
Disciplina: Desenvolvimento de Software I

## 📄 Licença

Este projeto é fornecido como material educacional.

---

**Desenvolvido com ❤️ em React + Vite**
