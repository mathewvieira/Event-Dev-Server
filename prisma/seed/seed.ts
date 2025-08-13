import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.community.createMany({
    data: [
      {
        name: "Tech Innovators",
        description: "Comunidade focada em inovação tecnológica",
        logo_url: "https://example.com/logos/tech-innovators.png",
        phone_number: "11999990000",
        link_instagram: "https://instagram.com/techinnovators",
        link_linkedin: "https://linkedin.com/company/techinnovators",
        link_website: "https://techinnovators.com",
        link_github: "https://github.com/techinnovators",
        is_active: true,
        
      },
      {
        name: "Dev Masters",
        description: "Grupo de desenvolvedores experientes",
        logo_url: "https://example.com/logos/dev-masters.png",
        phone_number: "11988887777",
        link_instagram: "https://instagram.com/devmasters",
        link_linkedin: "https://linkedin.com/company/devmasters",
        link_website: "https://devmasters.com",
        link_github: "https://github.com/devmasters",
        is_active: true,
        
      },
      {
        name: "AI Pioneers",
        description: "Especialistas em Inteligência Artificial",
        logo_url: "https://example.com/logos/ai-pioneers.png",
        phone_number: null,
        link_instagram: "https://instagram.com/aipioneers",
        link_linkedin: null,
        link_website: "https://aipioneers.com",
        link_github: null,
        is_active: true,
        
      },
      {
        name: "Cloud Heroes",
        description: "Profissionais de Cloud Computing",
        logo_url: "https://example.com/logos/cloud-heroes.png",
        phone_number: "11977776666",
        link_instagram: null,
        link_linkedin: "https://linkedin.com/company/cloudheroes",
        link_website: "https://cloudheroes.com",
        link_github: "https://github.com/cloudheroes",
        is_active: true,
        
      },
      {
        name: "Frontend Ninjas",
        description: "Desenvolvedores frontend apaixonados por UI/UX",
        logo_url: "https://example.com/logos/frontend-ninjas.png",
        phone_number: "11966665555",
        link_instagram: "https://instagram.com/frontendninjas",
        link_linkedin: null,
        link_website: null,
        link_github: "https://github.com/frontendninjas",
        is_active: true,
        
      },
      {
        name: "Backend Warriors",
        description: "Comunidade de especialistas em backend",
        logo_url: "https://example.com/logos/backend-warriors.png",
        phone_number: "11955554444",
        link_instagram: "https://instagram.com/backendwarriors",
        link_linkedin: "https://linkedin.com/company/backendwarriors",
        link_website: null,
        link_github: null,
        is_active: true,
        
      },
      {
        name: "Mobile Coders",
        description: "Programadores mobile para Android e iOS",
        logo_url: "https://example.com/logos/mobile-coders.png",
        phone_number: null,
        link_instagram: "https://instagram.com/mobilecoders",
        link_linkedin: null,
        link_website: "https://mobilecoders.com",
        link_github: "https://github.com/mobilecoders",
        is_active: true,
        
      },
      {
        name: "Game Dev Club",
        description: "Criadores de jogos e entusiastas",
        logo_url: "https://example.com/logos/game-dev-club.png",
        phone_number: "11944443333",
        link_instagram: "https://instagram.com/gamedevclub",
        link_linkedin: null,
        link_website: null,
        link_github: null,
        is_active: true,
        
      },
      {
        name: "Data Science Hub",
        description: "Comunidade de cientistas de dados",
        logo_url: "https://example.com/logos/data-science-hub.png",
        phone_number: "11933332222",
        link_instagram: "https://instagram.com/datasciencehub",
        link_linkedin: "https://linkedin.com/company/datasciencehub",
        link_website: "https://datasciencehub.com",
        link_github: "https://github.com/datasciencehub",
        is_active: true,
        
      },
      {
        name: "CyberSec Squad",
        description: "Especialistas em segurança cibernética",
        logo_url: "https://example.com/logos/cybersec-squad.png",
        phone_number: null,
        link_instagram: null,
        link_linkedin: "https://linkedin.com/company/cybersecsquad",
        link_website: "https://cybersecsquad.com",
        link_github: "https://github.com/cybersecsquad",
        is_active: true,
        
      },
      {
        name: "Blockchain Builders",
        description: "Desenvolvedores blockchain e Web3",
        logo_url: "https://example.com/logos/blockchain-builders.png",
        phone_number: "11922221111",
        link_instagram: "https://instagram.com/blockchainbuilders",
        link_linkedin: "https://linkedin.com/company/blockchainbuilders",
        link_website: null,
        link_github: "https://github.com/blockchainbuilders",
        is_active: true,
        
      },
      {
        name: "Startup Founders",
        description: "Empreendedores e fundadores de startups",
        logo_url: "https://example.com/logos/startup-founders.png",
        phone_number: "11911110000",
        link_instagram: "https://instagram.com/startupfounders",
        link_linkedin: null,
        link_website: "https://startupfounders.com",
        link_github: null,
        is_active: true,
        
      },
      {
        name: "Open Source Alliance",
        description: "Colaboradores de projetos open source",
        logo_url: "https://example.com/logos/open-source-alliance.png",
        phone_number: null,
        link_instagram: null,
        link_linkedin: null,
        link_website: "https://opensourcealliance.com",
        link_github: "https://github.com/opensourcealliance",
        is_active: true,
        
      },
      {
        name: "IoT Creators",
        description: "Criadores e entusiastas de IoT",
        logo_url: "https://example.com/logos/iot-creators.png",
        phone_number: "11912345678",
        link_instagram: "https://instagram.com/iotcreators",
        link_linkedin: null,
        link_website: "https://iotcreators.com",
        link_github: null,
        is_active: true,
        
      },
      {
        name: "AR/VR Explorers",
        description: "Desenvolvedores de realidade aumentada e virtual",
        logo_url: "https://example.com/logos/ar-vr-explorers.png",
        phone_number: "11987654321",
        link_instagram: "https://instagram.com/arvrexplorers",
        link_linkedin: "https://linkedin.com/company/arvrexplorers",
        link_website: null,
        link_github: null,
        is_active: true,
        
      },
      {
        name: "Agile Leaders",
        description: "Líderes e coaches ágeis",
        logo_url: "https://example.com/logos/agile-leaders.png",
        phone_number: null,
        link_instagram: null,
        link_linkedin: "https://linkedin.com/company/agileleaders",
        link_website: "https://agileleaders.com",
        link_github: null,
        is_active: true,
        
      },
      {
        name: "Design Thinkers",
        description: "Especialistas em design thinking",
        logo_url: "https://example.com/logos/design-thinkers.png",
        phone_number: "11955556666",
        link_instagram: "https://instagram.com/designthinkers",
        link_linkedin: null,
        link_website: null,
        link_github: null,
        is_active: true,
        
      },
      {
        name: "Robotics Club",
        description: "Comunidade de robótica e automação",
        logo_url: "https://example.com/logos/robotics-club.png",
        phone_number: "11944445555",
        link_instagram: null,
        link_linkedin: null,
        link_website: "https://roboticsclub.com",
        link_github: "https://github.com/roboticsclub",
        is_active: true,
        
      },
      {
        name: "Quantum Computing Lab",
        description: "Pesquisadores de computação quântica",
        logo_url: "https://example.com/logos/quantum-computing-lab.png",
        phone_number: null,
        link_instagram: "https://instagram.com/quantumlab",
        link_linkedin: "https://linkedin.com/company/quantumlab",
        link_website: null,
        link_github: "https://github.com/quantumlab",
        is_active: true,
        
      },
      {
        name: "Clean Code Society",
        description: "Defensores do código limpo",
        logo_url: "https://example.com/logos/clean-code-society.png",
        phone_number: "11933334444",
        link_instagram: "https://instagram.com/cleancodesociety",
        link_linkedin: null,
        link_website: "https://cleancodesociety.com",
        link_github: "https://github.com/cleancodesociety",
        is_active: true,
        
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
