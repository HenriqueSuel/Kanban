<h1 align="center">Kanban Back end</h1>

## Descrição do Projeto
<p align="center">Apis do Kanban</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Instalação

```bash
# Clone este repositório
$ git clone <https://github.com/HenriqueSuel/Kanban>

# Acesse a pasta do projeto no terminal/cmd
$ cd kanban

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:5000 - acesse <http://localhost:5000>
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/pt-BR/)
- [TypeScript](https://www.typescriptlang.org/)

### ⚠️ Testes

<img width="688" alt="Captura de Tela 2023-01-31 às 18 30 11" src="https://user-images.githubusercontent.com/22986830/215887680-1aec66e1-7ae1-4e04-b8de-3da2628b7a5a.png">

### 😎 Endpoints

```bash
(POST)      http://localhost:5000/login/

(GET)       http://localhost:5000/cards/
(POST)      http://localhost:5000/cards/
(PUT)       http://localhost:5000/cards/{id}
(DELETE)    http://localhost:5000/cards/{id}
```

