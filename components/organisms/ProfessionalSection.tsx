"use client";

import { useState } from "react";
import ProfessionalCard from "../molecules/ProfessionalCard";
import Description from "../atoms/Description";
import { GitHubExperienciaIcon, GitHubIcon, MoreIcon } from "../icons/Icons";
import Button from "../atoms/Button";
import ProfessionalModal from "./ProfessionalModal";
import { useLanguage } from "@/context/LanguageContext";
import RequestAccessForm from "./RequestAccesForm";

type ProfessionalSectionProps = {
    titulo: string;
    imagen: string[];
    tecnologias: string[];
    despliegue: string;
    repositorio: string;
    detalles: Record<string, { ES: string; EN: string }>[];
}

export default function ProfessionalSection({ titulo, imagen, tecnologias, despliegue, repositorio, detalles }: ProfessionalSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const { lang } = useLanguage();

    const translate = {
        "title": {
            "ES": "Titulo",
            "EN": "Title"
        },
        "technologies": {
            "ES": "Tecnologias",
            "EN": "Technologies"
        },
        "deploy": {
            "ES": "Despliegue",
            "EN": "Deployment"
        }
    }

    const modalData = {
        titulo: { ES: titulo, EN: titulo },
        imagen,
        tecnologias,
        despliegue,
        repositorio,
        detalles
    };

    return (
        <div className="fleflex flex-col md:flex-row md:items-center md:px-28 gap-6x items-center justify-between px-28 py-6">
            <div className="hidden md:flex items-center justify-between w-full">
                <ProfessionalCard
                    imagen={imagen && imagen.length > 0 ? imagen[0] : undefined}
                />
                <div className="flex flex-row text-left gap-6 flex-1 px-4">
                    <Description
                        title={translate.title[lang]}
                        details={titulo}
                    />
                    <Description
                        title={translate.technologies[lang]}
                        details={tecnologias.join(" | ")}
                    />
                    <Description
                        title={translate.deploy[lang]}
                        details={despliegue}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1 px-8">
                        <Button
                            bgColor=""
                            icon={GitHubExperienciaIcon}
                            onClick={() => setIsSecondOpen(true)}
                        />
                        <Button
                            bgColor=""
                            icon={MoreIcon}
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                    <div className="w-1 h-45 bg-[#000000] dark:bg-[#FFFFFF]"></div>
                </div>
            </div>

            <div className="flex flex-col md:hidden w-full gap-6">
                <div className="flex flex-col items-center gap-4 w-full">
                    <ProfessionalCard
                        imagen={imagen && imagen.length > 0 ? imagen[0] : undefined}
                    />
                    <Description
                        title="Titulo"
                        details={titulo}
                    />
                </div>
                <div className="flex flex-col items-center gap-4 w-full">
                    <Description
                        title="Tecnologias"
                        details={tecnologias.join(" | ")}
                    />
                    <Description
                        title={translate.deploy[lang]}
                        details={despliegue}
                    />
                    <div className="flex flex-row items-center gap-2 px-8">
                        <Button
                            bgColor=""
                            icon={GitHubExperienciaIcon}
                            onClick={() => setIsSecondOpen(true)}
                        />
                        <Button
                            bgColor=""
                            icon={MoreIcon}
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>
                <div className="w-full h-1 bg-[#000000] dark:bg-[#FFFFFF] rounded-md"></div>
            </div>

            <ProfessionalModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                data={modalData}
            />
            <RequestAccessForm
                isOpen={isSecondOpen}
                onClose={() => setIsSecondOpen(false)}
                data={modalData}
            />
        </div>
    )
}