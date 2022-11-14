
# Api de login com refresh token

Projeto desenvolvido par afins estudantis, visando a criação de um sistema de login e refresh token.


## Documentação da API

<br>

#### Criando um novo usuário

<br>

```http
  POST /register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |
| `userName` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |
| `telefone` | `string` | **Obrigatório**. |
| `cpf` | `string` | **Obrigatório**. |
   
<br>

#### Login


```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userName`      | `string` | **Obrigatório**.  |
| `password`      | `string` | **Obrigatório**.  |

<br>

#### Lista de usuários

```http
  GET /User/list
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Autorization`      | `bearer` | **Obrigatório**.  |

<br>

```http
  POST /refresh-token
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `refreshtoken`      | `string` | **Obrigatório**.  |

<br>

## Stack utilizada

- `NodeJs`

<br>

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jonathannrocha/api-login-refresh-token
```

Entre no diretório do projeto

```bash
  cd api-login-refresh-token
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```
<br>

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
