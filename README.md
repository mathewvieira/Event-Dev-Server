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
