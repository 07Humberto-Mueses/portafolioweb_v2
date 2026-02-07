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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-4 mr-18 ml-18 inset-0 z-10">
            {variant == "derecha" ? (
                <>
                    <div className="m-2 text-right">
                        <h2 className="maven-pro font-bold bold text-xl text-[#28251F] dark:text-[#C6C7C0]">{title}</h2>
                        <p className="maven-pro text-base text-[#28251F] dark:text-[#C6C7C0]">{description}</p>
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
                    <div className="m-2 text-light">
                        <h2 className="maven-pro font-bold bold text-xl text-[#28251F] dark:text-[#C6C7C0]">{title}</h2>
                        <p className="maven-pro text-base text-[#28251F] dark:text-[#C6C7C0]">{description}</p>
                    </div>
                </>
            )
            }
        </div>
    )
}