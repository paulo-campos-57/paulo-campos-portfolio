import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface Translations {
  // Header nav
  navHome: string;
  navProjects: string;
  navAbout: string;

  // Home section - hero
  heroTurning: string;
  heroCode: string;
  heroIntoReality: string;
  heroRole: string;

  // Projects section
  sectionProjects: string;
  projectCardCTA: string;

  // About section
  sectionAbout: string;
  aboutP1: string;
  aboutP2: string;
  aboutJobTitle: string;
  aboutJobCompany: string;
  aboutEduTitle: string;
  aboutEduSchool: string;
  aboutFindMeAt: string;
  downloadResume: string;

  // Project page
  projectReturnHome: string;
  projectNotFound: string;
  projectLoading: string;
  projectRole: string;
  projectBeginDate: string;
  projectCloseImage: string;
  projectAtEnterprise: string;

  // Projects data - descriptions
  projects: {
    id: number;
    description: string;
    fullDescription: string;
  }[];
}

const en: Translations = {
  navHome: "./home",
  navProjects: "./projects",
  navAbout: "./about",

  heroTurning: "Turning",
  heroCode: "code",
  heroIntoReality: "into reality",
  heroRole: "Full Stack Developer",

  sectionProjects: "./projects",
  projectCardCTA: "Visualize project _",

  sectionAbout: "./about",
  aboutP1: `Hello! I'm <strong>Paulo Campos</strong>, a fullstack developer focused on building robust and scalable solutions. My journey is driven by the curiosity to understand how things work under the hood.`,
  aboutP2: `With experience in the <span class="text-[#61DAFB]">React</span>, <span class="text-[#3776AB]"> Python</span> and <span class="text-[#339933]"> Node.js</span> ecosystems, I always strive for a balance between clean code and an impeccable user experience. When I'm not coding, I'm likely exploring new technologies or improving my Linux setup.`,
  aboutJobTitle: "Development Intern",
  aboutJobCompany: "Magnum Tires",
  aboutEduTitle: "Computer Science Student",
  aboutEduSchool: "CESAR School",
  aboutFindMeAt: "Find me at:",
  downloadResume: "Download my resume!",

  projectReturnHome: "[ return_home ]",
  projectNotFound: "./project_not_found",
  projectLoading: "./loading_commits...",
  projectRole: ". /role:",
  projectBeginDate: "./begin_date:",
  projectCloseImage: "[ close_x ]",
  projectAtEnterprise: "./at",

  projects: [
    {
      id: 1,
      description: "Interactive game that teaches mathematical concepts (Frontend).",
      fullDescription:
        "Frontend development of a gamified educational platform designed for mathematics instruction. The project focuses on accessibility and interactivity, featuring a classic game-inspired interface to facilitate the learning of logic and arithmetic concepts in an engaging way.",
    },
    {
      id: 2,
      description: "Interactive game that teaches mathematical concepts (Backend).",
      fullDescription:
        "Backend architecture for a gamified educational platform, developed as a Final Graduation Project at CESAR School. Built with Python and Flask using clean architecture principles, the API manages complex game loops including real-time in-memory session states, player inventory, ingredient mechanics, and progression tracking. The ecosystem is fully containerized with Docker, utilizes PostgreSQL for robust data persistence, ensures secure player management through JWT and bcrypt hashing, and maintains high reliability with automated testing via pytest.",
    },
    {
      id: 3,
      description: "Communication API with Google Gemini, focused on Cloud study.",
      fullDescription:
        "Backend API that integrates with Google Gemini to provide AI-powered responses focused on cloud computing topics. Developed as a learning project at CESAR School, the service is built with Node.js and Express, containerized with Docker, and uses GitHub Actions for CI/CD automation.",
    },
    {
      id: 4,
      description: "Interactive dashboard for the visualization of the stats of a Cat Café.",
      fullDescription:
        "A full-stack dashboard platform developed as a 5th-semester project at CESAR School for the startup Cattuccino. Built with a React frontend and a Python/Flask backend, the application provides business analysts and managers with data-driven insights into product financial performance and cross-channel digital marketing metrics. The entire ecosystem is fully containerized with Docker, leveraging Node.js dependencies and a MySQL database to ensure seamless deployment and reliable data management.",
    },
    {
      id: 5,
      description: "Interface for a machine learning model aimed at preventing diabetes cases.",
      fullDescription:
        "Repository dedicated to the EndoAI project, from the Projects 6 course, in the 6th semester at CESAR School. The developed project is an interface for a machine learning model primarily aimed at preventing diabetes cases, always encouraging the user to seek a diagnosis from a healthcare professional.",
    },
    {
      id: 6,
      description: "Full-stack real-time multiplayer arcade game using React, Express, and Socket.io.",
      fullDescription:
        "Gravity Pong is a full-stack, real-time arcade game featuring both single-player and multiplayer modes. The frontend is built with React, TypeScript, Vite, and TailwindCSS, including CRT scanline effects for a retro feel. The backend is an Express API with a custom 60Hz game engine using Socket.IO for real-time bidirectional communication, incorporating gravitational physics and bot AI. The project is fully tested with Jest.",
    },
  ],
};

const pt: Translations = {
  navHome: "./inicio",
  navProjects: "./projetos",
  navAbout: "./sobre",

  heroTurning: "Transformando",
  heroCode: "código",
  heroIntoReality: "em realidade",
  heroRole: "Desenvolvedor Full Stack",

  sectionProjects: "./projetos",
  projectCardCTA: "Visualizar projeto _",

  sectionAbout: "./sobre",
  aboutP1: `Olá! Eu sou <strong>Paulo Campos</strong>, um desenvolvedor fullstack focado em construir soluções robustas e escaláveis. Minha jornada é guiada pela curiosidade de entender como as coisas funcionam por baixo dos panos.`,
  aboutP2: `Com experiência nos ecossistemas de <span class="text-[#61DAFB]">React</span>, <span class="text-[#3776AB]"> Python</span> e <span class="text-[#339933]"> Node.js</span>, busco sempre o equilíbrio entre código limpo e uma experiência de usuário impecável. Quando não estou programando, provavelmente estou explorando novas tecnologias ou melhorando meu setup Linux.`,
  aboutJobTitle: "Estagiário de Desenvolvimento",
  aboutJobCompany: "Magnum Tires",
  aboutEduTitle: "Estudante de Ciência da Computação",
  aboutEduSchool: "CESAR School",
  aboutFindMeAt: "Me encontre em:",
  downloadResume: "Baixar meu currículo!",

  projectReturnHome: "[ voltar_inicio ]",
  projectNotFound: "./projeto_nao_encontrado",
  projectLoading: "./carregando_commits...",
  projectRole: ". /função:",
  projectBeginDate: "./data_inicio:",
  projectCloseImage: "[ fechar_x ]",
  projectAtEnterprise: "./em",

  projects: [
    {
      id: 1,
      description: "Jogo interativo que ensina conceitos matemáticos (Frontend).",
      fullDescription:
        "Desenvolvimento do frontend de uma plataforma educacional gamificada para o ensino de matemática. O projeto foca em acessibilidade e interatividade, com uma interface inspirada em jogos clássicos para facilitar o aprendizado de lógica e aritmética de forma envolvente.",
    },
    {
      id: 2,
      description: "Jogo interativo que ensina conceitos matemáticos (Backend).",
      fullDescription:
        "Arquitetura de backend para uma plataforma educacional gamificada, desenvolvida como Projeto de Conclusão de Curso na CESAR School. Construída com Python e Flask seguindo princípios de arquitetura limpa, a API gerencia loops de jogo complexos, incluindo estados de sessão em memória em tempo real, inventário do jogador, mecânicas de ingredientes e rastreamento de progresso. O ecossistema é totalmente conteinerizado com Docker, utiliza PostgreSQL para persistência robusta de dados, garante o gerenciamento seguro de jogadores com JWT e bcrypt, e mantém alta confiabilidade com testes automatizados via pytest.",
    },
    {
      id: 3,
      description: "API de comunicação com o Google Gemini, focada em estudos de Cloud.",
      fullDescription:
        "API de backend que integra com o Google Gemini para fornecer respostas com IA focadas em tópicos de computação em nuvem. Desenvolvida como projeto de aprendizagem na CESAR School, o serviço é construído com Node.js e Express, conteinerizado com Docker e utiliza GitHub Actions para automação de CI/CD.",
    },
    {
      id: 4,
      description: "Dashboard interativo para visualização das estatísticas de um Cat Café.",
      fullDescription:
        "Uma plataforma de dashboard full-stack desenvolvida como projeto do 5º semestre na CESAR School para a startup Cattuccino. Construída com frontend em React e backend em Python/Flask, a aplicação fornece a analistas de negócios e gerentes insights orientados a dados sobre o desempenho financeiro de produtos e métricas de marketing digital multicanal. Todo o ecossistema é totalmente conteinerizado com Docker, utiliza dependências Node.js e banco de dados MySQL para garantir implantação contínua e gerenciamento confiável de dados.",
    },
    {
      id: 5,
      description: "Interface para um modelo de machine learning voltado para a prevenção de casos de diabetes.",
      fullDescription:
        "Repositório destinado ao projeto EndoAI, da disciplina de Projetos 6, do 6° período no CESAR School. O projeto desenvolvido é uma interface para um modelo de machine learning que tem como principal diretriz a prevenção de casos de diabetes, sempre incentivando o usuário a buscar o diagnóstico de um profissional da saúde.",
    },
    {
      id: 6,
      description: "Jogo arcade full-stack multiplayer em tempo real usando React, Express e Socket.io.",
      fullDescription:
        "Gravity Pong é um jogo arcade full-stack em tempo real que possui modos single-player e multiplayer. O frontend foi construído com React, TypeScript, Vite e TailwindCSS, incluindo efeitos de tela CRT para uma estética retrô. O backend é uma API Express com um motor de jogo customizado a 60Hz utilizando Socket.IO para comunicação bidirecional em tempo real, incorporando física gravitacional e IA para o bot. O projeto possui testes automatizados com Jest.",
    },
  ],
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  const t = language === "en" ? en : pt;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
