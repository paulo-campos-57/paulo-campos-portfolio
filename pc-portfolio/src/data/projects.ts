export const projects = [
    {
        id: 1,
        title: "Tapiocaria - Frontend",
        enterprise: "CESAR School",
        description:
            "Interactive game that teaches mathematical concepts (Frontend).",
        fullDescription: "Frontend development of a gamified educational platform designed for mathematics instruction. The project focuses on accessibility and interactivity, featuring a classic game-inspired interface to facilitate the learning of logic and arithmetic concepts in an engaging way.",
        image: "/projects/tapiocaria-front.png",
        gallery: ["/projects/tapiocaria-front.png", "/projects/tapiocaria-front/tapiocaria-front1.png", "/projects/tapiocaria-front/tapiocaria-front2.png", "/projects/tapiocaria-front/tapiocaria-front3.png", "/projects/tapiocaria-front/tapiocaria-front4.png"],
        role: "Frontend Developer",
        commits: "53",
        date: "2024",
        stack: ["React", "TypeScript", "TailwindCSS"],
        githubLink: "https://github.com/paulo-campos-57/Projeto-TCC-FrontEnd",
        repoName: "Projeto-TCC-FrontEnd",
    },
    {
        id: 2,
        title: "Tapiocaria - Backend",
        enterprise: "CESAR School",
        description:
            "Jogo interativo que ensina conceitos matemáticos (Backend).",
        fullDescription: "Backend architecture for a gamified educational platform, developed as a Final Graduation Project at CESAR School. Built with Python and Flask using clean architecture principles, the API manages complex game loops including real-time in-memory session states, player inventory, ingredient mechanics, and progression tracking. The ecosystem is fully containerized with Docker, utilizes PostgreSQL for robust data persistence, ensures secure player management through JWT and bcrypt hashing, and maintains high reliability with automated testing via pytest.",
        image: "/projects/tapiocaria-back.png",
        gallery: ["/projects/tapiocaria-back.png", "/projects/tapiocaria-back/tapiocaria-back1.png", "/projects/tapiocaria-back/tapiocaria-back2.png", "/projects/tapiocaria-back/tapiocaria-back3.png", "/projects/tapiocaria-back/tapiocaria-back4.png"],
        role: "Backend Developer",
        commits: "120",
        date: "2024",
        stack: ["Python", "Flask", "PostgreSQL", "Docker"],
        githubLink: "https://github.com/paulo-campos-57/Projeto-TCC-BackEnd",
        repoName: "Projeto-TCC-BackEnd"
    },
    {
        id: 3,
        title: "CloudIA - Backend",
        enterprise: "CESAR School",
        description: "Communication API with Google Gemini, focused on Cloud study",
        image: "/projects/cloudia-backend.png",
        gallery: ["/projects/cloudia-backend.png", "/projects/cloudia-backend/cloudia-backend1.png", "/projects/cloudia-backend/cloudia-backend2.png", "/projects/cloudia-backend/cloudia-backend3.png", "/projects/cloudia-backend/cloudia-backend4.png"],
        role: "Backend Developer",
        commits: "85",
        date: "2024",
        stack: ["NodeJs", "Docker", "express", "Github Actions"],
        githubLink: "https://github.com/paulo-campos-57/CloudIA",
        repoName: "CloudIA"
    },
    {
        id: 4,
        title: "Cattuccino Dashboard",
        enterprise: "CESAR School",
        description:
            "Interactive dashboard for the visualization of the stats of a Cat Café",
        fullDescription: "A full-stack dashboard platform developed as a 5th-semester project at CESAR School for the startup Cattuccino. Built with a React frontend and a Python/Flask backend, the application provides business analysts and managers with data-driven insights into product financial performance and cross-channel digital marketing metrics. The entire ecosystem is fully containerized with Docker, leveraging Node.js dependencies and a MySQL database to ensure seamless deployment and reliable data management.",
        image: "/projects/cattuccino.jpeg",
        gallery: ["/projects/cattuccino.jpeg", "/projects/cattuccino/cattuccino1.jpeg", "/projects/cattuccino/cattuccino2.jpeg", "/projects/cattuccino/cattuccino3.jpeg", "/projects/cattuccino/cattuccino4.jpeg"],
        role: "FullStack Developer",
        commits: "114",
        date: "2024",
        stack: ["Python", "Flask", "React", "Javascript", "CSS", "Docker", "MySQL"],
        githubLink: "https://github.com/MatheusGom/Cattuccino_P5",
        repoName: "Cattuccino_P5"
    },
];