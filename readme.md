# PokeCardApi

<details>
<summary>Instalação</summary>

## Instalação

Para iniciar a aplicação, siga as etapas abaixo, dependendo se você está usando Docker ou não.


### Com Docker (Recomendado)

Se você deseja executar a aplicação com Docker, siga as etapas abaixo:


1. No diretório raiz do projeto, execute o seguinte comando para construir e iniciar os contêineres Docker em segundo plano:

  ```bash
  docker-compose up -d 
  ```
2. Após os contêineres estarem em execução. Execute o seguinte comando para entrar no contêiner:

  ```bash
  docker-compose exec app sh
  ```
3. Você precisará popular o banco de dados dentro do contêiner gerado Execute o seguinte comando dentro do contêiner::

  ```bash
  npm run seed
  ```
  
### Sem o Docker

Se você preferir executar a aplicação sem Docker, siga estas etapas:

1. No diretório raiz do projeto, execute o seguinte comando para instalar as dependências do projeto:
  ```bash
  npm install
  ```
2. Em seguida, execute o seguinte comando para criar o banco de dados e popular com dados iniciais:

  ```bash
  npm run createdb
  ```
3. Finalmente, inicie o servidor com o seguinte comando:
  ```bash
  npm start
  ```

</details>

## Tecnologias Utilizadas

- Node.js
- Express
- SQL (Banco de Dados)
- TypeScript
- Docker (para containerização)

## Visão Geral

Este projeto oferece uma API construída com Node.js e Express para gerenciar um banco de dados SQL. A aplicação inclui recursos para registro e autenticação de usuários, gerenciamento de cartas e decks. A seguir, você encontrará informações detalhadas sobre as rotas disponíveis e como utilizá-las.

## Uso

Este README contém informações detalhadas sobre as rotas da aplicação e como usá-las. Cada seção individual descreve uma rota específica, incluindo o método HTTP, a URL, o corpo da solicitação, a resposta e exemplos de uso. Consulte as seções a seguir para obter informações completas.

- [Rota de Login](#rota-de-login)
- [Rota de Registro](#rota-de-registro)
- [Rota de Pegar Cartas](#rota-de-pegar-cartas)
- [Rota de Deletar Carta](#rota-de-deletar-carta)
- [Rota de Ganhar Carta](#rota-de-ganhar-carta)
- [Rota de Pegar Decks](#rota-de-pegar-decks)
- [Rota de Pegar Deck](#rota-de-pegar-deck)
- [Rota de Deletar Deck](#rota-de-deletar-deck)
- [Rota de Criar Deck](#rota-de-criar-deck)


## Rota de Login

### Descrição

A Rota de Login permite que os usuários registrados acessem suas contas fornecendo suas credenciais de usuário.

- **Método HTTP:** POST
- **URL:** `/login/`

### Corpo da Solicitação (Request Body)

```json
{
  "userName": "seu-nome-de-usuário",
  "password": "sua-senha-secreta"
}
```
### Exemplo de Resposta (Response)

- **Status:** 200 (OK)
## Rota de Registro

### Descrição

A Rota de Registro permite que novos usuários se cadastrem na aplicação fornecendo informações como nome de usuário e senha.

- **Método HTTP:** POST
- **URL:** `/login/register/`


### Corpo da Solicitação (Request Body)

```json
{
  "userName": "novo-nome-de-usuário",
  "password": "nova-senha-secreta"
}
```
### Exemplo de Resposta (Response)

- **Status:** 201 (Created)
## Rota de Pegar Cartas

### Descrição

A Rota de Pegar Cartas permite que você obtenha as cartas associadas a um usuário específico com base no `userId`.

- **Método HTTP:** GET
- **URL:** `/card/:userId`



### Exemplo de Uso

A Rota de Pegar Cartas é usada para recuperar as cartas pertencentes a um usuário com base em seu `userId`. Aqui está um exemplo de uso:

**Solicitação:**

```http
GET /card/123 HTTP/1.1
Host: http://localhost:3001
```

<details>
<summary>Exemplo de Resposta</summary>

- **Status:** 200 (OK)
```json
[
  {
    "id": 1,
    "name": "bulbasaur",
    "attack": 50,
    "hp": 100,
    "spriteOnBoard": "sprite1-board.png",
    "spriteOnCard": "sprite1-card.png",
    "types": "grass_poison"
  },
  {
    "id": 2,
    "name": "charmander",
    "attack": 80,
    "hp": 80,
    "spriteOnBoard": "sprite1-board.png",
    "spriteOnCard": "sprite1-card.png",
    "types": "fire"
  },
  {
    "id": 3,
    "name": "squitle",
    "attack": 40,
    "hp": 140,
    "spriteOnBoard": "sprite1-board.png",
    "spriteOnCard": "sprite1-card.png",
    "types": "water"
  },
  {
    "id": 4,
    "name": "pikachu",
    "attack": 60,
    "hp": 100,
    "spriteOnBoard": "sprite1-board.png",
    "spriteOnCard": "sprite1-card.png",
    "types": "electric"
  },
  {
    "id": 5,
    "name": "pidgey",
    "attack": 50,
    "hp": 100,
    "spriteOnBoard": "sprite1-board.png",
    "spriteOnCard": "sprite1-card.png",
    "types": "normal_flying"
  },
  {
    "id": 6,
    "name": "ratata",
    "attack": 50,
    "hp": 100,
    "spriteOnBoard": "sprite1-board.png",
    "spriteOnCard": "sprite1-card.png",
    "types": "normal"
  },
  {
    "id": 9,
    "name": "squitle",
    "attack": 40,
    "hp": 140,
    "spriteOnBoard": "sprite1-board.png",
    "spriteOnCard": "sprite1-card.png",
    "types": "water"
  }
]
```
 </details>


## Rota de Deletar Carta

### Descrição

A Rota de Deletar Carta permite que você exclua uma carta específica pertencente a um usuário com base no `userId` e `cardId`.

- **Método HTTP:** DELETE
- **URL:** `/card/:userId/:cardId`

### Exemplo de Resposta (Response)

- **Status:** 200 (OK)

### Exemplo de Uso

A Rota de Deletar Carta é usada para excluir uma carta específica de um usuário. Você deve especificar o `userId` e o `cardId` na URL para identificar a carta que deseja excluir. Aqui está um exemplo de uso:

**Solicitação:**

```http
DELETE /card/123/456 HTTP/1.1
Host: http://localhost:3001
```
## Rota de Ganhar Carta

### Descrição

A Rota de Ganhar Carta permite que você registre uma nova carta que um usuário ganhou em sua coleção.

- **Método HTTP:** POST
- **URL:** `/:userId`

### Corpo da Solicitação (Request Body)

```json
{
  "name": "Nome da Carta",
  "Attack": 10,
  "Hp": 20,
  "spriteOnBoard": "caminho-da-imagem",
  "spriteOnCard": "caminho-da-imagem",
  "types": "Tipo da Carta"
}
```
### Exemplo de Resposta (Response)

- **Status:** 200 (Created)

**Solicitação:**
```http
POST /card/123 HTTP/1.1
Host: http://localhost:3001
```

## Rota de Pegar Decks

### Descrição

A Rota de Pegar Decks permite que você obtenha todos os decks associados a um usuário com base no `userId`.

- **Método HTTP:** GET
- **URL:** `/deck/:userId`

<details>
<summary>Exemplo de Resposta</summary>


- **Status:** 200 (OK)

```json
[
  {
    "deck": {
      "id": 1,
      "name": "test"
    },
    "cards": [
      {
        "id": 1,
        "name": "bulbasaur",
        "attack": 50,
        "hp": 100,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "grass_poison"
      },
      {
        "id": 2,
        "name": "charmander",
        "attack": 80,
        "hp": 80,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "fire"
      },
      {
        "id": 3,
        "name": "squitle",
        "attack": 40,
        "hp": 140,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "water"
      },
      {
        "id": 4,
        "name": "pikachu",
        "attack": 60,
        "hp": 100,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "electric"
      },
      {
        "id": 5,
        "name": "pidgey",
        "attack": 50,
        "hp": 100,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "normal_flying"
      },
      {
        "id": 6,
        "name": "ratata",
        "attack": 50,
        "hp": 100,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "normal"
      }
    ]
  },
  {
    "deck": {
      "id": 2,
      "name": "a"
    },
    "cards": [
      {
        "id": 1,
        "name": "bulbasaur",
        "attack": 50,
        "hp": 100,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "grass_poison"
      },
      {
        "id": 2,
        "name": "charmander",
        "attack": 80,
        "hp": 80,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "fire"
      },
      {
        "id": 3,
        "name": "squitle",
        "attack": 40,
        "hp": 140,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "water"
      },
      {
        "id": 4,
        "name": "pikachu",
        "attack": 60,
        "hp": 100,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "electric"
      },
      {
        "id": 5,
        "name": "pidgey",
        "attack": 50,
        "hp": 100,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "normal_flying"
      },
      {
        "id": 6,
        "name": "ratata",
        "attack": 50,
        "hp": 100,
        "spriteOnBoard": "sprite1-board.png",
        "spriteOnCard": "sprite1-card.png",
        "types": "normal"
      }
    ]
  }
]
```
</details>


### Exemplo de Uso

A Rota de Pegar Decks é usada para recuperar todos os decks pertencentes a um usuário com base em seu `userId`. Aqui está um exemplo de uso:

**Solicitação:**

```http
GET /deck/123 HTTP/1.1
Host: http://localhost:3001
```
## Rota de Pegar Deck

### Descrição

A Rota de Pegar Deck permite que você obtenha as cartas que estão associadas a um deck específico pertencente a um usuário com base no `userId` e `deckId`.

- **Método HTTP:** GET
- **URL:** `/deck/:userId/:deckId`

<details> 
<summary>Exemplo de Resposta</summary>

- **Status:** 200 (OK)
```json
{
  "deck": {
    "id": 1,
    "name": "test"
  },
  "cards": [
    {
      "id": 1,
      "name": "bulbasaur",
      "attack": 50,
      "hp": 100,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "grass_poison"
    },
    {
      "id": 2,
      "name": "charmander",
      "attack": 80,
      "hp": 80,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "fire"
    },
    {
      "id": 3,
      "name": "squitle",
      "attack": 40,
      "hp": 140,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "water"
    },
    {
      "id": 4,
      "name": "pikachu",
      "attack": 60,
      "hp": 100,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "electric"
    },
    {
      "id": 5,
      "name": "pidgey",
      "attack": 50,
      "hp": 100,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "normal_flying"
    },
    {
      "id": 6,
      "name": "ratata",
      "attack": 50,
      "hp": 100,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "normal"
    }
  ]
}
```
</details>

### Exemplo de Uso

A Rota de Pegar Deck é usada para recuperar as cartas que estão associadas a um deck específico pertencente a um usuário. Você deve especificar o `userId` e o `deckId` na URL para identificar o deck desejado. Aqui está um exemplo de uso:

**Solicitação:**

```http
GET /deck/123/456 HTTP/1.1
Host: http://localhost:3001
```
## Rota de Deletar Deck

### Descrição

A Rota de Deletar Deck permite que você exclua um deck específico pertencente a um usuário com base no `userId` e `deckId`.

- **Método HTTP:** DELETE
- **URL:** `/deck/:userId/:deckId`

### Exemplo de Resposta (Response)

- **Status:** 200 (OK)

### Exemplo de Uso

A Rota de Deletar Deck é usada para excluir um deck específico de um usuário. Você deve especificar o `userId` e o `deckId` na URL para identificar o deck que deseja excluir. Aqui está um exemplo de uso:

**Solicitação:**

```http
DELETE /deck/123/456 HTTP/1.1
Host: http://localhost:3001
```
### Exemplo de Resposta (Response)

- **Status:** 200 (OK)

## Rota de Criar Deck

### Descrição

A Rota de Criar Deck permite que um usuário crie um novo deck em sua coleção.

### Corpo da Solicitação (Request Body)

```json
{
  "name": "Nome do Deck",
  "cards": [
    {
      "id": 1,
      "name": "Nome da Carta",
      "hp": 20,
      "attack": 10,
      "spriteOnBoard": "caminho-da-imagem",
      "spriteOnCard": "caminho-da-imagem",
      "types": "Tipo da Carta"
    },
    // Outras cartas do deck
  ]
}
```
## Exemplo de Resposta (Response)

- **Status:** 201 (Created)

### Exemplo de Uso

A Rota de Criar Deck é usada para adicionar um novo deck à coleção de um usuário. Você deve especificar o userId na URL e fornecer os detalhes do novo deck no corpo da solicitação, incluindo as cartas que farão parte do deck. Aqui está um exemplo de uso:

#### Solicitação

```http
POST /deck/123 HTTP/1.1
Host: http://localhost:3001
```

### Corpo da Solicitação (Request Body)

```json
{
  "name":"initialDeck",
  "cards": [
    {
      "id": 1,
      "name": "bulbasaur",
      "attack": 50,
      "hp": 100,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "grass_poison"
    },
    {
      "id": 2,
      "name": "charmander",
      "attack": 80,
      "hp": 80,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "fire"
    },
    {
      "id": 3,
      "name": "squitle",
      "attack": 40,
      "hp": 140,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "water"
    },
    {
      "id": 4,
      "name": "pikachu",
      "attack": 60,
      "hp": 100,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "electric"
    },
    {
      "id": 5,
      "name": "pidgey",
      "attack": 50,
      "hp": 100,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "normal_flying"
    },
    {
      "id": 6,
      "name": "ratata",
      "attack": 50,
      "hp": 100,
      "spriteOnBoard": "sprite1-board.png",
      "spriteOnCard": "sprite1-card.png",
      "types": "normal"
    }
  ]
}
```