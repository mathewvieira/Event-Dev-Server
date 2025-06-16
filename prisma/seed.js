import { faker } from '@faker-js/faker/locale/pt_BR'
import { hashSync } from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando o processo de seeding...')

  console.log('Limpando dados existentes...')
  await prisma.post.deleteMany()
  await prisma.evento.deleteMany()
  await prisma.usuario.deleteMany()
  await prisma.comunidade.deleteMany()

  const dateNow = new Date().toISOString()

  console.log('Criando comunidade principal...')
  const devCommunity = await prisma.comunidade.create({
    data: {
      nome: 'Comunidade Dev Power',
      descricao: 'Uma comunidade para desenvolvedores de todos os níveis.',
      logo_url: faker.image.avatar(),
      link_github: 'https://github.com/exemplo',
      criado_em: dateNow
    }
  })

  for (let index = 1; index <= 50; index++) {
    await prisma.comunidade.create({
      data: {
        nome: faker.company.name(),
        descricao: faker.lorem.sentence(),
        logo_url: faker.image.avatar(),
        link_github: faker.internet.url(),
        criado_em: dateNow
      }
    })
  }

  console.log('Criando usuários...')
  await prisma.usuario.create({
    data: {
      email: 'admin@exemplo.com',
      senha: hashSync('senha123', 10),
      funcao: 'admin',
      usuario_root: true,
      id_comunidade: null,
      criado_em: dateNow
    }
  })

  await prisma.usuario.create({
    data: {
      email: 'membro@exemplo.com',
      senha: hashSync('senha456', 10),
      funcao: 'membro',
      usuario_root: false,
      criado_em: dateNow,

      comunidade: {
        connect: {
          id: devCommunity.id
        }
      }
    }
  })

  console.log('Criando posts...')
  await prisma.post.createMany({
    data: [
      {
        id_comunidade: devCommunity.id,
        texto: faker.lorem.paragraph(),
        criado_em: dateNow
      },
      {
        id_comunidade: devCommunity.id,
        texto: 'Bem-vindos à nova comunidade! Participe dos nossos eventos.',
        criado_em: dateNow
      }
    ]
  })

  console.log('Criando um evento...')
  await prisma.evento.create({
    data: {
      titulo: 'Meetup de Lançamento',
      capa_url: faker.image.urlLoremFlickr({ category: 'business' }),
      descricao: 'Venha conhecer a nossa comunidade e fazer networking!',
      data_hora_inicial: faker.date.future(),
      data_hora_final: faker.date.future(),
      endereco: faker.location.streetAddress(),
      cidade: faker.location.city(),
      estado: faker.location.state({ abbreviated: true }),
      cep: faker.location.zipCode(),
      evento_online: false,
      criado_em: dateNow,

      comunidade: {
        connect: {
          id: devCommunity.id
        }
      }
    }
  })

  console.log('Seeding concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('Erro durante o seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
