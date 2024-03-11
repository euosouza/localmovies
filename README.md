# Localmovies
Localmovies, um software de gerenciamento de locação de filmes desenvolvido para facilitar o controle e organização das locações.

## Installation
Clone repositório - git clone https://github.com/kutia-software-company/vue3-starter.
Instalar dependências do projeto — npm install.
Rodar app — npm run dev

## Tecnologias
- Vue 3
- Tailwind
- Typescript
- Pinia (gerenciamento de estado do app)
- VueUse (armazenamento localstorage)

## APIs utilizadas:

API de filmes: https://www.omdbapi.com/
API de CEP: https://viacep.com.br/

## Funcionalidades:

Usuário:
 - Preciso realizar um cadastro de um usuário;
 - Preciso editar as informações de um usuário já cadastrado;
 - Preciso listar todos os usuários;
 - Preciso ter a opção de desativar um usuário(soft delete)
 - Usuário precisa logar e deslogar da aplicação

Cliente:
 - Preciso realizar um cadastro de um cliente;
 - Preciso editar as informações de um cliente já cadastrado;
 - Preciso listar todos os cliente;
 - Preciso ter a opção de desativar um cliente(soft delete)

Locação:
 - Preciso realizar um cadastro de uma nova locação;
 - Preciso listar todas as locação;

## Propriedades das entidades:

Usuário: { id, name, doc, password, status } todos obrigatórios;
Cliente: { id, name, surname, cpf, contacts: { email, phone }, address: { zipCode, publicPlace, neighborhood, city, state }};
Locação: { customers, movies, rentDate, deliveryDate, user, status }
Filmes: { title, year, runtime, genre, director, plot, language, poster }

Observações:
 - Status do usuário de ser ativo ou inativo
 - Status da locação de ser alugado ou entregue

## Regras de negócios:

- Lista de filmes deve possuir busca por nome, filtros por ano e listar APENAS filmes
- Lista de clientes deve possuir busca por nome e documento e filtro por status
- Lista de locações deve possuir busca por cliente e filtro de data de locação e de entrega
- Caso não tenha retorno do CEP informado, devemos deixar o usuario editar manualmente os campos
- Toda alteração em qualquer área (usuário, cliente e locação) deve exibir um feedback visual (modal ou alert toggle) de sucesso ou falha;
- Usuários logados devem permanecer logados ao revisitar a aplicação
- Usuários com status desativado não devem logar na aplicação
- Clientes com uma locação em status alugado não podem realizar outra locação

## Armazenamento das informações:

- Usuários, clientes e locações devem ficar armazenados no local storage do navegador


