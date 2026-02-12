"use client";

import ProjectCard from "../molecules/ProjectCard";

type ProyectSectionProps = {
    variant?: string;
    images: string[];
    title: string;
    description: string;
    data: any[];
}

export default function ProjectSection({ variant, images, title, description, data }: ProyectSectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col md:hidden w-full gap-4">
                <ProjectCard imagen={images} data={data} />
                <div className="maven-pro text-center px-2">
                    <h2 className="font-bold text-lg sm:text-xl">{title}</h2>
                    <p className="text-sm sm:text-base">{description}</p>
                </div>
            </div>

            <div className="hidden md:contents">
                {variant == "derecha" ? (
                    <>
                        <div className="maven-pro m-2 text-right md:text-right">
                            <h2 className="font-bold text-lg sm:text-xl md:text-2xl">{title}</h2>
                            <p className="text-sm sm:text-base md:text-lg">{description}</p>
                        </div>
                        <div>
                            <ProjectCard
                                imagen={images}
                                data={data}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <ProjectCard
                                imagen={images}
                                data={data}
                            />
                        </div>
                        <div className="maven-pro m-2 text-light md:text-left">
                            <h2 className="font-bold text-lg sm:text-xl md:text-2xl">{title}</h2>
                            <p className="text-sm sm:text-base md:text-lg">{description}</p>
                        </div>
                    </>
                )
                }
            </div>
        </div>
    )
}