import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.community.createMany({
    data: [
      {
        nome: "Tech Innovators",
        descricao: "Comunidade focada em inovação tecnológica",
        logo_url: "https://example.com/logos/tech-innovators.png",
        telefone: "11999990000",
        link_instagram: "https://instagram.com/techinnovators",
        link_linkedin: "https://linkedin.com/company/techinnovators",
        link_website: "https://techinnovators.com",
        link_github: "https://github.com/techinnovators",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Dev Masters",
        descricao: "Grupo de desenvolvedores experientes",
        logo_url: "https://example.com/logos/dev-masters.png",
        telefone: "11988887777",
        link_instagram: "https://instagram.com/devmasters",
        link_linkedin: "https://linkedin.com/company/devmasters",
        link_website: "https://devmasters.com",
        link_github: "https://github.com/devmasters",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "AI Pioneers",
        descricao: "Especialistas em Inteligência Artificial",
        logo_url: "https://example.com/logos/ai-pioneers.png",
        telefone: null,
        link_instagram: "https://instagram.com/aipioneers",
        link_linkedin: null,
        link_website: "https://aipioneers.com",
        link_github: null,
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Cloud Heroes",
        descricao: "Profissionais de Cloud Computing",
        logo_url: "https://example.com/logos/cloud-heroes.png",
        telefone: "11977776666",
        link_instagram: null,
        link_linkedin: "https://linkedin.com/company/cloudheroes",
        link_website: "https://cloudheroes.com",
        link_github: "https://github.com/cloudheroes",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Frontend Ninjas",
        descricao: "Desenvolvedores frontend apaixonados por UI/UX",
        logo_url: "https://example.com/logos/frontend-ninjas.png",
        telefone: "11966665555",
        link_instagram: "https://instagram.com/frontendninjas",
        link_linkedin: null,
        link_website: null,
        link_github: "https://github.com/frontendninjas",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Backend Warriors",
        descricao: "Comunidade de especialistas em backend",
        logo_url: "https://example.com/logos/backend-warriors.png",
        telefone: "11955554444",
        link_instagram: "https://instagram.com/backendwarriors",
        link_linkedin: "https://linkedin.com/company/backendwarriors",
        link_website: null,
        link_github: null,
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Mobile Coders",
        descricao: "Programadores mobile para Android e iOS",
        logo_url: "https://example.com/logos/mobile-coders.png",
        telefone: null,
        link_instagram: "https://instagram.com/mobilecoders",
        link_linkedin: null,
        link_website: "https://mobilecoders.com",
        link_github: "https://github.com/mobilecoders",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Game Dev Club",
        descricao: "Criadores de jogos e entusiastas",
        logo_url: "https://example.com/logos/game-dev-club.png",
        telefone: "11944443333",
        link_instagram: "https://instagram.com/gamedevclub",
        link_linkedin: null,
        link_website: null,
        link_github: null,
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Data Science Hub",
        descricao: "Comunidade de cientistas de dados",
        logo_url: "https://example.com/logos/data-science-hub.png",
        telefone: "11933332222",
        link_instagram: "https://instagram.com/datasciencehub",
        link_linkedin: "https://linkedin.com/company/datasciencehub",
        link_website: "https://datasciencehub.com",
        link_github: "https://github.com/datasciencehub",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "CyberSec Squad",
        descricao: "Especialistas em segurança cibernética",
        logo_url: "https://example.com/logos/cybersec-squad.png",
        telefone: null,
        link_instagram: null,
        link_linkedin: "https://linkedin.com/company/cybersecsquad",
        link_website: "https://cybersecsquad.com",
        link_github: "https://github.com/cybersecsquad",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Blockchain Builders",
        descricao: "Desenvolvedores blockchain e Web3",
        logo_url: "https://example.com/logos/blockchain-builders.png",
        telefone: "11922221111",
        link_instagram: "https://instagram.com/blockchainbuilders",
        link_linkedin: "https://linkedin.com/company/blockchainbuilders",
        link_website: null,
        link_github: "https://github.com/blockchainbuilders",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Startup Founders",
        descricao: "Empreendedores e fundadores de startups",
        logo_url: "https://example.com/logos/startup-founders.png",
        telefone: "11911110000",
        link_instagram: "https://instagram.com/startupfounders",
        link_linkedin: null,
        link_website: "https://startupfounders.com",
        link_github: null,
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Open Source Alliance",
        descricao: "Colaboradores de projetos open source",
        logo_url: "https://example.com/logos/open-source-alliance.png",
        telefone: null,
        link_instagram: null,
        link_linkedin: null,
        link_website: "https://opensourcealliance.com",
        link_github: "https://github.com/opensourcealliance",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "IoT Creators",
        descricao: "Criadores e entusiastas de IoT",
        logo_url: "https://example.com/logos/iot-creators.png",
        telefone: "11912345678",
        link_instagram: "https://instagram.com/iotcreators",
        link_linkedin: null,
        link_website: "https://iotcreators.com",
        link_github: null,
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "AR/VR Explorers",
        descricao: "Desenvolvedores de realidade aumentada e virtual",
        logo_url: "https://example.com/logos/ar-vr-explorers.png",
        telefone: "11987654321",
        link_instagram: "https://instagram.com/arvrexplorers",
        link_linkedin: "https://linkedin.com/company/arvrexplorers",
        link_website: null,
        link_github: null,
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Agile Leaders",
        descricao: "Líderes e coaches ágeis",
        logo_url: "https://example.com/logos/agile-leaders.png",
        telefone: null,
        link_instagram: null,
        link_linkedin: "https://linkedin.com/company/agileleaders",
        link_website: "https://agileleaders.com",
        link_github: null,
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Design Thinkers",
        descricao: "Especialistas em design thinking",
        logo_url: "https://example.com/logos/design-thinkers.png",
        telefone: "11955556666",
        link_instagram: "https://instagram.com/designthinkers",
        link_linkedin: null,
        link_website: null,
        link_github: null,
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Robotics Club",
        descricao: "Comunidade de robótica e automação",
        logo_url: "https://example.com/logos/robotics-club.png",
        telefone: "11944445555",
        link_instagram: null,
        link_linkedin: null,
        link_website: "https://roboticsclub.com",
        link_github: "https://github.com/roboticsclub",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Quantum Computing Lab",
        descricao: "Pesquisadores de computação quântica",
        logo_url: "https://example.com/logos/quantum-computing-lab.png",
        telefone: null,
        link_instagram: "https://instagram.com/quantumlab",
        link_linkedin: "https://linkedin.com/company/quantumlab",
        link_website: null,
        link_github: "https://github.com/quantumlab",
        ativo: true,
        atualizado_em: new Date()
      },
      {
        nome: "Clean Code Society",
        descricao: "Defensores do código limpo",
        logo_url: "https://example.com/logos/clean-code-society.png",
        telefone: "11933334444",
        link_instagram: "https://instagram.com/cleancodesociety",
        link_linkedin: null,
        link_website: "https://cleancodesociety.com",
        link_github: "https://github.com/cleancodesociety",
        ativo: true,
        atualizado_em: new Date()
      }
    ]
  });

  console.log("✅ Seed de communities criada com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
