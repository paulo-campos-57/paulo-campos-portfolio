import * as React from "react";
import Header from "../components/Header";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Index() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  const stack = [
    { id: 1, name: "React", logo: "/react.svg" },
    { id: 2, name: "Javascript", logo: "/javascript.svg" },
    { id: 3, name: "Python", logo: "/python.svg" },
    { id: 4, name: "Django", logo: "/django.svg" },
    { id: 5, name: "Flask", logo: "/flask.svg" },
    { id: 6, name: "TypeScript", logo: "/typescript.svg" },
    { id: 7, name: "Node.js", logo: "/nodedotjs.svg" },
    { id: 8, name: "Express", logo: "/express.svg" },
    { id: 9, name: "Docker", logo: "/docker.svg" },
    { id: 10, name: "Github", logo: "/github.svg" },
    { id: 11, name: "Tailwind CSS", logo: "/tailwindcss.svg" },
    { id: 12, name: "HTML", logo: "/html5.svg" },
    { id: 13, name: "CSS", logo: "/css.svg" },
    { id: 14, name: "Linux", logo: "/linux.svg" },
    { id: 15, name: "PostgreSQL", logo: "/postgresql.svg" },
    { id: 16, name: "MySql", logo: "/mysql.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen w-full bg-gray-800 flex flex-col">
      <Header />

      {/* --- SECTION HOME --- */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-12 p-4 relative">
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
                <CarouselItem key={tech.id} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
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

      {/* --- SECTION PROJECTS --- */}
      <section id="projects" className="min-h-screen bg-gray-950 p-8 flex flex-col items-center">
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
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="h-72 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-500 italic shadow-xl"
              >
                Project Card {i}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}