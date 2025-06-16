# EventDev Communities

## Como executar o projeto?

### Iniciando

Faça uma cópia do arquivo `.env.example` e renomeie para `.env`.

### P/ Subir os Serviços

`docker compose up -d --build`

### P/ Acessar

API: <http://localhost:5122>.

pgAdmin: <http://localhost:5514>.

### P/ Parar os Serviços

`docker compose down`

(Cuidado!) Execute esse comando caso também queira excluir os Volumes: `docker compose down -v`

Comandos Úteis:

```bash
docker compose exec -it app bash

docker compose exec -it db bash

npx prisma db pull

npx prisma db seed

npx prisma migrate
```

```bash
docker compose exec app npm run make:sql

docker compose exec app npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql

docker compose exec app npx prisma migrate resolve --applied 0_init

npx prisma migrate dev --name "nome_da_nova_mudanca"
```
