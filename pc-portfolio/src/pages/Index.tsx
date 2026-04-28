import Header from "../components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Index() {
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

        <div className="w-full max-w-xs md:max-w-xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {stack.map((tech) => (
                <CarouselItem key={tech.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="flex aspect-video items-center justify-center rounded-xl p-4">
                      <img src={tech.logo} alt={tech .name} className="h-full w-full object-contain" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-gray-600 hover:bg-gray-700" />
            <CarouselNext className="text-white border-gray-600 hover:bg-gray-700" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}