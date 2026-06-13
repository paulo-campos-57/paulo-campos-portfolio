import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "../data/projects";
import { useGithubCommits } from "@/hooks/useGithubCommits";
import { useLanguage } from "@/context/LanguageContext";

export default function Project() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const { t } = useLanguage();

    const [activeImage, setActiveImage] = useState<string | null>(null);

    const project = projects.find((p) => p.id === Number(projectId));

    const repoOwner = project?.githubLink?.split("github.com/")[1]?.split("/")[0] || "paulo-campos-57";

    const totalCommits = useGithubCommits(repoOwner, project?.repoName);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center font-mono">
                <p className="text-xl">{t.projectNotFound}</p>
                <button
                    className="mt-4 text-blue-500 hover:underline"
                    onClick={() => navigate("/")}
                >
                    {t.projectReturnHome}
                </button>
            </div>
        );
    }

    const getImgUrl = (index: number) => project.gallery?.[index] || project.image;

    return (
        <div className="min-h-screen w-full bg-black flex flex-col font-sans">
            <Header />

            <div className="flex-1 max-w-6xl mx-auto w-full px-6 pt-32 pb-12">
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8">
                    <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
                        ./{project.title}
                    </h1>
                    <span className="text-gray-400 text-xl font-mono">
                        {t.projectAtEnterprise} {project.enterprise || "Personal"}
                    </span>
                    <button
                        className="mt-4 text-blue-500 hover:underline"
                        onClick={() => navigate("/")}
                    >
                        {t.projectReturnHome}
                    </button>
                </div>

                <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[300px] md:h-[500px] mb-12">
                    <div
                        className="col-span-1 bg-gray-800 rounded-2xl overflow-hidden hidden md:block cursor-pointer"
                        onClick={() => setActiveImage(getImgUrl(1))}
                    >
                        <img src={getImgUrl(1)} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                    <div
                        className="col-span-4 md:col-span-2 row-span-2 bg-gray-700 rounded-3xl overflow-hidden border-4 border-gray-600 cursor-pointer"
                        onClick={() => setActiveImage(project.image)}
                    >
                        <img src={project.image} className="w-full h-full object-cover hover:scale-[1.02] transition-transform" />
                    </div>
                    <div
                        className="col-span-1 bg-gray-800 rounded-2xl overflow-hidden hidden md:block cursor-pointer"
                        onClick={() => setActiveImage(getImgUrl(2))}
                    >
                        <img src={getImgUrl(2)} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                    <div
                        className="col-span-1 bg-gray-800 rounded-2xl overflow-hidden hidden md:block cursor-pointer"
                        onClick={() => setActiveImage(getImgUrl(3))}
                    >
                        <img src={getImgUrl(3)} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                    <div
                        className="col-span-1 bg-gray-800 rounded-2xl overflow-hidden hidden md:block cursor-pointer"
                        onClick={() => setActiveImage(getImgUrl(4))}
                    >
                        <img src={getImgUrl(4)} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
                    <div className="flex-1">
                        <p className="text-gray-300 text-lg leading-relaxed text-justify">
                            {t.projects.find((p) => p.id === project.id)?.fullDescription || project.fullDescription}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[250px] font-mono">
                        <div className="flex flex-col">
                            <span className="text-white text-3xl font-bold italic">
                                {t.projectRole} <span className="font-normal not-italic">{project.role || "Developer"}</span>
                            </span>
                        </div>

                        <div className="flex items-center justify-between group">
                            <div className="flex flex-col">
                                {totalCommits === null ? (
                                    <span className="text-gray-400 text-2xl font-bold italic animate-pulse">
                                        {t.projectLoading}
                                    </span>
                                ) : (
                                    <span className="text-white text-3xl font-bold italic">
                                        {totalCommits} commits
                                    </span>
                                )}

                                <span className="text-gray-400 text-xl font-mono">
                                    {t.projectBeginDate} {project.date || "2024"}
                                </span>
                            </div>

                            <Link to={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Barra de Stack Horizontal */}
                <div className="w-full bg-gray-600/30 backdrop-blur-sm rounded-2xl p-3 flex flex-wrap justify-center items-center gap-4 border border-gray-700">
                    {project.stack?.map((stackName, index) => {
                        const iconName = stackName.toLowerCase().replace(".", "dot").replace(" ", "");

                        return (
                            <div key={index} className="bg-white rounded-lg px-4 py-1 flex items-center gap-3 shadow-md transition-transform hover:scale-105">
                                <img
                                    src={`/icons/${iconName}.svg`}
                                    alt={stackName}
                                    className="w-5 h-5 object-contain"
                                />
                                <span className="text-black font-bold text-sm uppercase tracking-wider">
                                    {stackName}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />

            {activeImage && (
                <div
                    className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-opacity cursor-zoom-out"
                    onClick={() => setActiveImage(null)}
                >
                    <div className="w-full flex justify-end p-4 h-16 items-center shrink-0">
                        <button
                            className="text-white text-base font-mono hover:text-gray-300 transition-colors bg-neutral-900/80 border border-neutral-800 px-4 py-2 rounded-md z-50"
                            onClick={() => setActiveImage(null)}
                        >
                            {t.projectCloseImage}
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center p-4 min-h-0 w-full">
                        <img
                            src={activeImage}
                            alt="Destaque do projeto"
                            className="max-w-full max-h-full rounded-xl object-contain shadow-2xl border border-neutral-900 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}