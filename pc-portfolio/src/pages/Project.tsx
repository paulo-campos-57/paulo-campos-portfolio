import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "../data/projects";

export default function Project() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projects.find((p) => p.id === Number(projectId));

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
                <p>Project not found.</p>
                <div 
                    className="text-blue-500 ml-2 underline" onClick={() => navigate("/")}>
                    Go back
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-gray-950 flex flex-col">
            <Header />

            <main className="flex-1 max-w-5xl mx-auto w-full p-8 pt-24">
                {/* Título */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h1 className="text-5xl font-bold text-white mb-2 italic">
                            ./{project.title}
                        </h1>
                        <p className="text-xl text-blue-500 font-mono">
                            at {project.enterprise || "Personal Project"}
                        </p>
                    </div>
                    <div 
                        className="text-gray-500 hover:text-white transition-colors cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        [ voltar_ ]
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Imagem e stack */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Detalhes Laterais */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-4">
                                Sobre o projeto
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {project.description || project.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-4">
                                Tecnologias
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack?.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-900 border border-gray-800 text-blue-400 text-xs rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}