## Comando usados neste repositório

### Instalação do typescript
```
 yarn add typescript -D
```

### Inicialização da instância typescript
```
yarn tsc --init
```

### Executa o script node e verifica alterações
```
yarn add ts-node-dev -D
```
### Script para execução e transpilação
```json
"scripts": {
  "start": "tsnd --transpile-only --ignore-watch node_modules -- respawn src/server.ts"
},
```
### Dependências
```
yarn add express
yarn add @types/express -D
```

- Request Body: Dados para a criação ou atualização de um registro
```
{
	"nome": "Nicolas",
	"idade": "22"
}
```
`body` é acessado em `request.body`

- Route Params: Identificar qual recurso eu quero atualizar ou deletar
```
http://localhost:3333/users/:id
```
`:id` é acessado em `request.params`

- Query Params: Paginação, filtros, ordenação
```
http://localhost:3333/users/:id?page=1&sort=name
```
`?page=1&sort=name` é acessado em `request.query`

### Instalação do query builder para sqlite3
```
yarn add knex sqlite3
```

### Comandos de criação e remoção da tabela:
```json
"scripts": {
  "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
  "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback",
}
```

### Acesso em endereços diferentes:
```
yarn add cors
yarn add @types/cors -D
```