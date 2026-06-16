<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=react,typescript,vite,tailwind" /><br>
    Paulo Campos — Portfolio 🇺🇸
  </h1>
  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=flat&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=flat&logo=framer&logoColor=white" />
    <img src="https://img.shields.io/badge/shadcn%2Fui-enabled-000000?style=flat&logo=shadcnui&logoColor=white" />
  </p>
</div>

This repository contains the source code of <a href="https://github.com/paulo-campos-57" target="_blank">Paulo Campos</a>'s personal developer portfolio — a responsive, bilingual (EN/PT) single-page application built with React and TypeScript.

---

## Project Structure

```
pc-portfolio/
├── public/
│   ├── icons/                # Tech stack SVG icons
│   ├── profile/              # Profile photo
│   ├── projects/             # Project screenshots and gallery images
│   │   ├── gravity-defender/ # Gallery for Gravity Defender
│   │   └── endoAI/           # Gallery for EndoAI
│   └── resume.pdf            # Downloadable résumé
│
├── src/
│   ├── components/           # Shared UI components
│   │   ├── Header.tsx        # Responsive header with nav & language toggle
│   │   ├── Footer.tsx        # Footer
│   │   └── ui/               # shadcn/ui base components (Carousel, etc.)
│   ├── context/
│   │   └── LanguageContext.tsx # i18n — EN/PT translations & toggle
│   ├── data/
│   │   └── projects.ts       # Centralized project data (metadata, gallery, stack)
│   ├── hooks/
│   │   └── useGithubCommits.ts # Fetches live commit count from GitHub API
│   ├── pages/
│   │   ├── Index.tsx         # Home page (hero, projects grid, about)
│   │   └── Project.tsx       # Individual project detail page
│   ├── lib/
│   │   └── utils.ts          # Tailwind class utilities (cn)
│   ├── App.tsx               # Router setup
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles & Geist font
│
├── components.json           # shadcn/ui configuration
├── tailwind.config.js        # Tailwind configuration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Static typing |
| [Vite](https://vitejs.dev/) | 8.x | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations & transitions |
| [shadcn/ui](https://ui.shadcn.com/) | 4.x | Accessible component library |
| [Radix UI](https://www.radix-ui.com/) | 1.x | Headless UI primitives |
| [Embla Carousel](https://www.embla-carousel.com/) | 8.x | Autoplay tech stack carousel |
| [React Router](https://reactrouter.com/) | 7.x | Client-side routing |
| [Lucide React](https://lucide.dev/) | 1.x | Icon set |
| [Geist Font](https://vercel.com/font) | — | Typography |
| [Prettier](https://prettier.io/) | 3.x | Code formatter |
| [ESLint](https://eslint.org/) | 9.x | Linter |

---

## Features

- **Bilingual (EN / PT)** — full language toggle powered by a custom `LanguageContext`
- **Live GitHub commit count** — fetched in real-time via the GitHub REST API for each project
- **Responsive** — fully adapted for mobile, tablet and desktop
- **Project gallery** — lightbox with multi-image support per project
- **Animated UI** — scroll-triggered and entrance animations via Framer Motion
- **Downloadable résumé** — served directly from the `public/` directory

---

## Requirements

- **Node.js** 20+ (LTS recommended)
- **pnpm** 9+ (or npm / yarn)

---

## How to Run

### <img src="https://skillicons.dev/icons?i=github" height="20" style="vertical-align: middle;" /> 1. Clone the repository

```bash
git clone https://github.com/paulo-campos-57/paulo-campos-portfolio.git
cd paulo-campos-portfolio/pc-portfolio
```

### 📦 2. Install dependencies

```bash
pnpm install
```

### ▶️ 3. Start the development server

```bash
pnpm dev
```

The app will be available at **http://localhost:5173**.

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server with HMR |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format all source files with Prettier |
| `pnpm format:check` | Check formatting without writing |

---

## Adding a New Project

1. Add images to `public/projects/<project-name>/`
2. Register the project entry in `src/data/projects.ts`
3. Add EN and PT translations (description + fullDescription) in `src/context/LanguageContext.tsx`
4. Add the project card to the `projects` array in `src/pages/Index.tsx`

---

<br>

---

<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=react,typescript,vite,tailwind" /><br>
    Paulo Campos — Portfólio 🇧🇷
  </h1>
  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=flat&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=flat&logo=framer&logoColor=white" />
    <img src="https://img.shields.io/badge/shadcn%2Fui-enabled-000000?style=flat&logo=shadcnui&logoColor=white" />
  </p>
</div>

Este repositório contém o código-fonte do portfólio pessoal de <a href="https://github.com/paulo-campos-57" target="_blank">Paulo Campos</a> — uma single-page application responsiva e bilíngue (EN/PT) construída com React e TypeScript.

---

## Estrutura do Projeto

```
pc-portfolio/
├── public/
│   ├── icons/                # Ícones SVG das tecnologias
│   ├── profile/              # Foto de perfil
│   ├── projects/             # Screenshots e galeria dos projetos
│   │   ├── gravity-defender/ # Galeria do Gravity Defender
│   │   └── endoAI/           # Galeria do EndoAI
│   └── resume.pdf            # Currículo para download
│
├── src/
│   ├── components/           # Componentes de UI reutilizáveis
│   │   ├── Header.tsx        # Header responsivo com nav e toggle de idioma
│   │   ├── Footer.tsx        # Rodapé
│   │   └── ui/               # Componentes base do shadcn/ui (Carousel, etc.)
│   ├── context/
│   │   └── LanguageContext.tsx # i18n — traduções EN/PT e toggle
│   ├── data/
│   │   └── projects.ts       # Dados centralizados dos projetos (metadados, galeria, stack)
│   ├── hooks/
│   │   └── useGithubCommits.ts # Busca contagem de commits em tempo real via GitHub API
│   ├── pages/
│   │   ├── Index.tsx         # Página inicial (hero, grid de projetos, sobre)
│   │   └── Project.tsx       # Página de detalhes de cada projeto
│   ├── lib/
│   │   └── utils.ts          # Utilitários Tailwind (cn)
│   ├── App.tsx               # Configuração do Router
│   ├── main.tsx              # Entry point do React
│   └── index.css             # Estilos globais e fonte Geist
│
├── components.json           # Configuração do shadcn/ui
├── tailwind.config.js        # Configuração do Tailwind
├── vite.config.ts            # Configuração do Vite
├── tsconfig.json             # Configuração do TypeScript
└── package.json
```

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Tipagem estática |
| [Vite](https://vitejs.dev/) | 8.x | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Estilização utilitária |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animações e transições |
| [shadcn/ui](https://ui.shadcn.com/) | 4.x | Biblioteca de componentes acessíveis |
| [Radix UI](https://www.radix-ui.com/) | 1.x | Primitivos de UI headless |
| [Embla Carousel](https://www.embla-carousel.com/) | 8.x | Carrossel autoplay das tecnologias |
| [React Router](https://reactrouter.com/) | 7.x | Roteamento client-side |
| [Lucide React](https://lucide.dev/) | 1.x | Biblioteca de ícones |
| [Geist Font](https://vercel.com/font) | — | Tipografia |
| [Prettier](https://prettier.io/) | 3.x | Formatador de código |
| [ESLint](https://eslint.org/) | 9.x | Linter |

---

## Funcionalidades

- **Bilíngue (EN / PT)** — troca de idioma completa via `LanguageContext` personalizado
- **Contagem de commits em tempo real** — buscada via GitHub REST API para cada projeto
- **Responsivo** — totalmente adaptado para mobile, tablet e desktop
- **Galeria de projetos** — lightbox com suporte a múltiplas imagens por projeto
- **UI animada** — animações de entrada e scroll via Framer Motion
- **Currículo para download** — servido diretamente da pasta `public/`

---

## Requisitos

- **Node.js** 20+ (LTS recomendado)
- **pnpm** 9+ (ou npm / yarn)

---

## Como Executar

### <img src="https://skillicons.dev/icons?i=github" height="20" style="vertical-align: middle;" /> 1. Clone o repositório

```bash
git clone https://github.com/paulo-campos-57/paulo-campos-portfolio.git
cd paulo-campos-portfolio/pc-portfolio
```

### 📦 2. Instale as dependências

```bash
pnpm install
```

### ▶️ 3. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em **http://localhost:5173**.

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento com HMR |
| `pnpm build` | Verifica tipos e gera o build de produção |
| `pnpm preview` | Pré-visualiza o build de produção localmente |
| `pnpm lint` | Executa o ESLint |
| `pnpm format` | Formata todos os arquivos com Prettier |
| `pnpm format:check` | Verifica formatação sem sobrescrever |

---

## Adicionando um Novo Projeto

1. Adicione as imagens em `public/projects/<nome-do-projeto>/`
2. Cadastre o projeto em `src/data/projects.ts`
3. Adicione as traduções EN e PT (description + fullDescription) em `src/context/LanguageContext.tsx`
4. Inclua o card do projeto no array `projects` de `src/pages/Index.tsx`
