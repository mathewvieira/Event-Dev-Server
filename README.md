## Sequencia de comandos para entrar em modo de desenvolvimento

## Requisitos
> Node v22.X /
> Docker

### copiar o .env.example para um arquivo .env

```bash
git clone https://github.com/mathewvieira/Event-Dev-Server.git

git checkout <branch>

npm install

docker-compose up -d

npx prisma migrate dev

npx prisma db pull

npx prisma db seed

npm run start:dev
```
