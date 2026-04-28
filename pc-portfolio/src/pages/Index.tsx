import * as React from "react";
import Header from "../components/Header";
import Autoplay from "embla-carousel-autoplay";
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

  return (
    <div className="min-h-screen w-full bg-gray-800 flex flex-col overflow-hidden">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center gap-12 p-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-white text-4xl text-center leading-tight font-bold">
              Paulo Campos
            </h1>
            <p className="text-gray-400 text-lg text-center font-semibold">
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className="w-full max-w-xs md:max-w-2xl lg:max-w-4xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
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
        </div>
      </div>
    </div>
  );
}
