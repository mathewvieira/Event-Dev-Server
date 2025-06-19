import { faker } from '@faker-js/faker/locale/pt_BR'
import { hashSync } from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TEXTOS_POSTS = [
  'Neste artigo, exploramos as cinco dicas mais valiosas para quem está começando na carreira de desenvolvedor. Prepare-se para acelerar seu aprendizado.',
  'A performance é crucial para a experiência do usuário. Detalhamos técnicas avançadas para otimizar seu aplicativo. Não perca!',
  'Docker revolucionou o deploy de aplicações. Este guia prático te levará do básico ao deploy de um container.',
  'A Inteligência Artificial está ao nosso redor. Desmistificamos conceitos complexos e mostramos exemplos práticos.',
  'Proteger suas APIs é mais do que uma boa prática, é uma necessidade. Abordamos os principais riscos e estratégias.',
  'O mercado de tecnologia está em constante evolução. Analisamos as tendências e as áreas de maior crescimento.',
  'Cansado de múltiplas requisições? Descubra como GraphQL pode simplificar suas interações com a API e otimizar.',
  'Ser um desenvolvedor produtivo vai além de codificar. Compartilhamos ferramentas, técnicas e hábitos para eficiência.',
  'Git é a ferramenta essencial para controle de versão. Este tutorial cobre os comandos básicos e avançados.',
  'Interessado em entrar para a área de UX/UI Design? Detalhamos os primeiros passos e como construir um portfólio.',
];

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

  console.log('Criando posts...');
  const todasComunidades = await prisma.comunidade.findMany({ select: { id: true } });
  const todasComunidadeIds = todasComunidades.map(c => c.id);

  if (todasComunidadeIds.length === 0) {
      console.warn('Nenhuma comunidade encontrada para vincular posts. Ignorando seeding de posts.');
  } else {
      let postPrincipalTexto = 'Bem-vindos à nova comunidade! Participe dos nossos eventos e contribua com seus conhecimentos. Juntos, fazemos a diferença na comunidade de desenvolvimento.';
      if (postPrincipalTexto.length > 255) {
        postPrincipalTexto = postPrincipalTexto.substring(0, 252) + '...';
      }

      await prisma.post.create({
          data: {
              id_comunidade: devCommunity.id,
              texto: postPrincipalTexto,
              criado_em: dateNow,
              atualizado_em: dateNow,
          }
      });


      for (let index = 0; index < 20; index++) {
          const randomCommunityId = faker.helpers.arrayElement(todasComunidadeIds);

          let postTextoAleatorio = faker.helpers.arrayElement(TEXTOS_POSTS);
          if (postTextoAleatorio.length > 255) {
            postTextoAleatorio = postTextoAleatorio.substring(0, 252) + '...';
          }

          await prisma.post.create({
              data: {
                  id_comunidade: randomCommunityId,
                  texto: postTextoAleatorio,
                  criado_em: dateNow,
                  atualizado_em: dateNow,
              }
          });
      }
  }
  console.log('Posts criados com sucesso!');

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
