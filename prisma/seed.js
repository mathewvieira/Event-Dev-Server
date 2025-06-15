import { faker } from '@faker-js/faker/locale/pt_BR'
import { hashSync } from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TITULOS_EVENTOS = [
  'Hackathon de Inovação Aberta',
  'Workshop Intensivo de React Hooks',
  'Meetup de Python e Machine Learning',
  'Webinar: O Futuro da Inteligência Artificial',
  'Bootcamp de Segurança Web',
  'Conferência Anual de DevOps',
  'Ciclo de Palestras sobre Cloud Computing',
  'Design Thinking para Desenvolvedores',
  'Introdução ao Blockchain e Criptomoedas',
  'Maratona de Code Review',
  'Desafios de Front-end com Vue.js',
  'Introdução ao Teste Automatizado',
  'Masterclass em Microservices com Node.js',
  'Carreira em Tecnologia: Dicas e Tendências',
  'Networking para Desenvolvedores'
]

const DESCRICOES_EVENTOS = [
  'Explore novas tecnologias, crie soluções inovadoras e faça networking com os melhores da área. Prepare-se para dias de muito aprendizado e desafios!',
  'Aprenda as melhores práticas e técnicas para desenvolver aplicações web modernas e eficientes. Traga seu notebook e sua vontade de aprender.',
  'Discussões aprofundadas sobre os avanços recentes em inteligência artificial e suas aplicações práticas. Não perca a oportunidade de estar à frente.',
  'Imersão completa em tópicos cruciais para a segurança de aplicações web. Palestras e exercícios práticos para fortalecer suas habilidades de defesa.',
  'Encontro para compartilhar experiências e conhecimentos sobre as ferramentas e metodologias que estão revolucionando o desenvolvimento de software.',
  'Entenda como a computação em nuvem está transformando o cenário da tecnologia. Casos de uso, arquiteturas e as últimas novidades do mercado.',
  'Descubra como aplicar princípios de Design Thinking para criar produtos e soluções mais centradas no usuário. Ideal para desenvolvedores e designers.',
  'Uma jornada pelo universo das tecnologias descentralizadas. Entenda os conceitos básicos e as aplicações mais promissoras de Blockchain.',
  'Aumente a qualidade do seu código com sessões interativas de code review. Receba feedback construtivo e aprimore suas habilidades de programação.',
  'Desafios práticos para aprimorar suas habilidades em Front-end. Solucione problemas reais e mostre seu talento.'
]

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
  'Interessado em entrar para a área de UX/UI Design? Detalhamos os primeiros passos e como construir um portfólio.'
]

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
  'Interessado em entrar para a área de UX/UI Design? Detalhamos os primeiros passos e como construir um portfólio.'
]

const FUNCOES_USUARIO = ['membro', 'moderador', 'editor', 'colaborador']
const SENHAS_USUARIO_FAKE = ['senha123!', 'mudar456!', 'abcxyz789!', 'devtest@']

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
      criado_em: dateNow,
      atualizado_em: dateNow
    }
  })

  for (let index = 1; index <= 50; index++) {
    await prisma.comunidade.create({
      data: {
        nome: faker.company.name(),
        descricao: faker.lorem.sentence(),
        logo_url: faker.image.avatar(),
        link_github: faker.internet.url(),
        criado_em: dateNow,
        atualizado_em: dateNow
      }
    })
  }
  // Alterar os titulos lorem para reais e coerentes.
  console.log('Populando eventos...')
  const comunidades = await prisma.comunidade.findMany({
    select: { id: true }
  })
  const comunidadeIds = comunidades.map((c) => c.id)

  if (comunidadeIds.length === 0) {
    console.warn('Nenhuma comunidade encontrada. Criando um evento sem organizador_id.')
  }

  for (let index = 1; index <= 50; index++) {
    const dataHoraInicial = faker.date.soon({ days: 30 })
    const dataHoraFinal = faker.date.future({
      years: 1,
      refDate: dataHoraInicial
    })
    const organizadorComunidadeId = comunidadeIds.length > 0 ? faker.helpers.arrayElement(comunidadeIds) : null
    const isOnline = faker.datatype.boolean()

    let descricaoEvento = faker.helpers.arrayElement(DESCRICOES_EVENTOS)
    if (descricaoEvento.length > 255) {
      descricaoEvento = descricaoEvento.substring(0, 252) + '...'
    }

    let tituloEvento = faker.helpers.arrayElement(TITULOS_EVENTOS)
    if (tituloEvento.length > 255) {
      tituloEvento = tituloEvento.substring(0, 252) + '...'
    }

    await prisma.evento.create({
      data: {
        id_comunidade: organizadorComunidadeId,
        titulo: tituloEvento,
        capa_url: faker.image.urlLoremFlickr({ category: 'event' }),
        descricao: descricaoEvento,
        data_hora_inicial: dataHoraInicial.toISOString(),
        data_hora_final: dataHoraFinal.toISOString(),
        criado_em: dateNow,
        atualizado_em: dateNow,
        endereco: isOnline ? null : faker.location.streetAddress({ use: 'full' }),
        cidade: isOnline ? null : faker.location.city(),
        estado: isOnline ? null : faker.location.state({ abbreviated: true }),
        cep: isOnline ? null : faker.location.zipCode(),
        link: isOnline ? faker.internet.url() : null,
        evento_online: isOnline
      }
    })
  }

  console.log('Criando usuários...')
  const geralComunidades = await prisma.comunidade.findMany({ select: { id: true } })
  const geralComunidadeIds = geralComunidades.map((c) => c.id)

  await prisma.usuario.create({
    data: {
      email: 'admin@devpower.com',
      senha: hashSync('senha123DevPower!', 10),
      funcao: 'admin',
      usuario_root: true,
      id_comunidade: null,
      criado_em: dateNow,
      atualizado_em: dateNow,
      ativo: true
    }
  })

  await prisma.usuario.create({
    data: {
      email: 'membro@devpower.com',
      senha: hashSync('membro456!', 10),
      funcao: 'membro',
      usuario_root: false,
      criado_em: dateNow,
      atualizado_em: dateNow,
      ativo: true,
      comunidade: {
        connect: {
          id: devCommunity.id
        }
      }
    }
  })

  for (let i = 0; i < 20; i++) {
    const isMemberOfCommunity = faker.datatype.boolean()
    const randomCommunityId =
      geralComunidadeIds.length > 0 && isMemberOfCommunity ? faker.helpers.arrayElement(geralComunidadeIds) : null

    const firstName = faker.person.firstName().toLowerCase()
    const lastName = faker.person.lastName().toLowerCase()
    let email = faker.internet
      .email({ firstName: firstName, lastName: lastName, provider: 'example.com' })
      .toLowerCase()
    if (email.length > 255) email = email.substring(0, 252) + '...'

    let senhaGerada = faker.helpers.arrayElement(SENHAS_USUARIO_FAKE)
    let senhaHash = hashSync(senhaGerada, 10)
    if (senhaHash.length > 255) senhaHash = senhaHash.substring(0, 255)

    let funcaoUsuario = faker.helpers.arrayElement(FUNCOES_USUARIO)
    if (funcaoUsuario.length > 255) funcaoUsuario = funcaoUsuario.substring(0, 255)

    await prisma.usuario.create({
      data: {
        email: email,
        senha: senhaHash,
        funcao: funcaoUsuario,
        usuario_root: false,
        id_comunidade: randomCommunityId,
        criado_em: dateNow,
        atualizado_em: dateNow,
        ativo: faker.datatype.boolean()
      }
    })
  }
  console.log('Usuários criados com sucesso!')

  console.log('Criando posts...')
  const todasComunidades = await prisma.comunidade.findMany({ select: { id: true } })
  const todasComunidadeIds = todasComunidades.map((c) => c.id)

  if (todasComunidadeIds.length === 0) {
    console.warn('Nenhuma comunidade encontrada para vincular posts. Ignorando seeding de posts.')
  } else {
    let postPrincipalTexto =
      'Bem-vindos à nova comunidade! Participe dos nossos eventos e contribua com seus conhecimentos. Juntos, fazemos a diferença na comunidade de desenvolvimento.'
    if (postPrincipalTexto.length > 255) {
      postPrincipalTexto = postPrincipalTexto.substring(0, 252) + '...'
    }

    await prisma.post.create({
      data: {
        id_comunidade: devCommunity.id,
        texto: postPrincipalTexto,
        criado_em: dateNow,
        atualizado_em: dateNow
      }
    })

    for (let index = 0; index < 20; index++) {
      const randomCommunityId = faker.helpers.arrayElement(todasComunidadeIds)

      let postTextoAleatorio = faker.helpers.arrayElement(TEXTOS_POSTS)
      if (postTextoAleatorio.length > 255) {
        postTextoAleatorio = postTextoAleatorio.substring(0, 252) + '...'
      }

      await prisma.post.create({
        data: {
          id_comunidade: randomCommunityId,
          texto: postTextoAleatorio,
          criado_em: dateNow,
          atualizado_em: dateNow
        }
      })
    }
  }
  console.log('Posts criados com sucesso!')

  console.log('Criando um evento...')
  await prisma.evento.create({
    data: {
      id_comunidade: devCommunity.id,
      titulo: 'Meetup de Lançamento',
      capa_url: faker.image.urlLoremFlickr({ category: 'business' }),
      descricao: 'Venha conhecer a nossa comunidade e fazer networking!',
      data_hora_inicial: faker.date.future({ years: 1 }).toISOString(),
      data_hora_final: faker.date.future({ years: 1, refDate: faker.date.future() }).toISOString(),
      endereco: faker.location.streetAddress({ use: 'full' }),
      cidade: faker.location.city(),
      estado: faker.location.state({ abbreviated: true }),
      cep: faker.location.zipCode(),
      link: null,
      evento_online: false,
      criado_em: dateNow,
      atualizado_em: dateNow
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
