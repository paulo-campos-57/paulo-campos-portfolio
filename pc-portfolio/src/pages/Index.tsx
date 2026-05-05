import * as React from "react";
import Header from "../components/Header";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";

export default function Index() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  const stack = [
    { id: 1, name: "React", logo: "/icons/react.svg" },
    { id: 2, name: "Javascript", logo: "/icons/javascript.svg" },
    { id: 3, name: "Python", logo: "/icons/python.svg" },
    { id: 4, name: "Django", logo: "/icons/django.svg" },
    { id: 5, name: "Flask", logo: "/icons/flask.svg" },
    { id: 6, name: "TypeScript", logo: "/icons/typescript.svg" },
    { id: 7, name: "Node.js", logo: "/icons/nodedotjs.svg" },
    { id: 8, name: "Express", logo: "/icons/express.svg" },
    { id: 9, name: "Docker", logo: "/icons/docker.svg" },
    { id: 10, name: "Github", logo: "/icons/github.svg" },
    { id: 11, name: "Tailwind CSS", logo: "/icons/tailwindcss.svg" },
    { id: 12, name: "HTML", logo: "/icons/html5.svg" },
    { id: 13, name: "CSS", logo: "/icons/css.svg" },
    { id: 14, name: "Linux", logo: "/icons/linux.svg" },
    { id: 15, name: "PostgreSQL", logo: "/icons/postgresql.svg" },
    { id: 16, name: "MySql", logo: "/icons/mysql.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Tapiocaria - Frontend",
      description:
        "Jogo interativo que ensina conceitos matemáticos (Frontend).",
      image: "projects/tapiocaria-front.png",
      link: "#",
    },
    {
      id: 2,
      title: "Tapiocaria - Backend",
      description:
        "Jogo interativo que ensina conceitos matemáticos (Backend).",
      image: "projects/tapiocaria-back.png",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Minimalista",
      description: "Design clean focado em performance.",
      image: "projects/portfolio-minimalista.png",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen w-full bg-gray-800 flex flex-col">
      <Header />

      {/*Section Home*/}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center gap-12 p-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-white text-4xl text-center leading-tight font-bold">
              Paulo Campos
            </h1>
            <p className="text-gray-400 text-lg text-center font-semibold">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-xs md:max-w-2xl lg:max-w-4xl"
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
            className="w-full"
          >
            <CarouselContent>
              {stack.map((tech) => (
                <CarouselItem
                  key={tech.id}
                  className="basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="p-2">
                    <div className="flex aspect-square items-center justify-center rounded-xl p-4 transition-transform hover:scale-110">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        title={tech.name}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent pointer-events-none" />
      </section>

      {/*Section Projects*/}
      <section
        id="projects"
        className="min-h-screen bg-gray-950 p-8 flex flex-col items-center relative"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl w-full"
        >
          <motion.h2
            variants={itemVariants}
            className="text-white text-3xl font-bold mb-12 border-l-4 border-blue-500 pl-4"
          >
            ./projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="h-3/5 w-full overflow-hidden bg-gray-800/50 flex items-center justify-center p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>

                <div className="p-6 flex flex-col gap-2 h-2/5">
                  <h3 className="text-white text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 text-blue-500 text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver projeto _
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/*Section About*/}
      <section
        id="about"
        className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-8 relative"
      >
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-gray-950 via-gray-950/20 to-transparent pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-5xl w-full z-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-white text-3xl font-bold mb-12 border-l-4 border-blue-500 pl-4"
          >
            ./about
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={itemVariants}
              className="relative group max-w-sm mx-auto md:mx-0"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative flex flex-col items-center">
                <div className="bg-gray-900 rounded-t-2xl overflow-hidden aspect-square w-full">
                  <img
                    src="/profile/profile.jpeg"
                    alt="Paulo Campos"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <a
                  href="/resume.pdf"
                  download
                  className="w-full bg-gray-900/80 hover:bg-gray-700 text-white py-3 rounded-b-2xl border-t border-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-semibold group/btn"
                >
                  Download my resume!
                  <span className="text-blue-500 group-hover/btn:translate-y-1 transition-transform tracking-widest font-black">↓</span>
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm{" "}
                <span className="text-white font-bold">Paulo Campos</span>, a
                fullstack developer focused on building robust and scalable
                solutions. My journey is driven by the curiosity to understand
                how things work under the hood.
              </p>

              <p className="text-gray-400 leading-relaxed">
                With experience in the{" "}
                <span className="text-[#61DAFB]">React</span>,
                <span className="text-[#3776AB]"> Python</span> and
                <span className="text-[#339933]"> Node.js</span> ecosystems, I
                always strive for a balance between clean code and an impeccable
                user experience. When I'm not coding, I'm likely exploring new
                technologies or improving my Linux setup.
              </p>

              <div className="flex flex-wrap gap-8 mt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold text-2xl tracking-tight leading-none">
                    Development <br /> Intern
                  </span>
                  <span className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">
                    Magnum Tires
                  </span>
                </div>

                <div className="hidden md:block w-[1px] bg-gray-700 self-stretch"></div>

                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold text-2xl tracking-tight leading-none">
                    Computer Science <br /> Student
                  </span>
                  <span className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">
                    CESAR School
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <span className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
                  Find me at:
                </span>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/paulo-campos-57"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group text-sm font-medium"
                  >
                    Github{" "}
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      _
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/paulo-m-campos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0077B5] transition-colors flex items-center gap-1 group text-sm font-medium"
                  >
                    Linkedin{" "}
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      _
                    </span>
                  </a>
                  <a
                    href="https://wa.me/5581999511478?text=Olá%20Paulo,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#25D366] transition-colors flex items-center gap-1 group text-sm font-medium"
                  >
                    WhatsApp{" "}
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      _
                    </span>
                  </a>
                  <a
                    href="mailto:paulo.m.campos6601@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Paulo%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20mais%20informações."
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group text-sm font-medium"
                  >
                    Gmail{" "}
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      _
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
