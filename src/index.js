import dotenv from 'dotenv'
import express, { json } from 'express'
import { PrismaClient } from '@prisma/client'

dotenv.config()

async function findMany() {
  const comunidades = await prisma.comunidade.findMany()
  console.log(comunidades)
}

const PORT = process.env.NODE_PORT

const prisma = new PrismaClient()
const app = express()
app.use(json())

app.get('/', (_req, res) => {
  res.send('Hello World!!')
})

app.listen(PORT, async () => {
  console.log(`(🏃) Running... (http://localhost:${PORT})`)
  try {
    console.log('(💯) Conexão estabelecida!')
    await findMany()
  } catch (err) {
    console.log('Erro ao se conectar com o banco', err)
  } finally {
    await prisma.$disconnect()
  }
})
