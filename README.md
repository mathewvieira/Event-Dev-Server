## Sequencia de comandos para entrar em modo de desenvolvimento

## Requisitos
> Node v22.X /
> Docker



```bash
git clone https://github.com/mathewvieira/Event-Dev-Server.git

git checkout <branch>
```
### copiar o .env.example para um arquivo .env
```bash
npm install

docker-compose up -d

npx prisma migrate dev

npx prisma db pull

npx prisma db seed

npm run start:dev
```
### e pronto, já estará com o banco de dados em um container docker, alimentado e pronto para consumo. e rotas prontas para serem testadas.
