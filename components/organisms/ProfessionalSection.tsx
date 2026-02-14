"use client";

import { useState } from "react";
import ProfessionalCard from "../molecules/ProfessionalCard";
import Description from "../atoms/Description";
import { MoreIcon } from "../icons/Icons";
import Button from "../atoms/Button";
import ProfessionalModal from "./ProfessionalModal";
import { useLanguage } from "@/context/LanguageContext";

type ProfessionalSectionProps = {
    titulo: string;
    imagen: string[];
    tecnologias: string[];
    repositorio: string;
    detalles: Record<string, { ES: string; EN: string}>[];
}

export default function ProfessionalSection({ titulo, imagen, tecnologias, repositorio, detalles }: ProfessionalSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
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
        "repository": {
            "ES": "Repositorio",
            "EN": "Repository"
        }
    }

    const modalData = { 
        titulo: { ES: titulo, EN: titulo }, 
        imagen, 
        tecnologias, 
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
                        title={translate.repository[lang]}
                        details={repositorio}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        bgColor=""
                        icon={MoreIcon}
                        onClick={() => setIsOpen(true)}
                    />
                    <div className="w-1 h-45 bg-[#FFFFFF]"></div>
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
                        title="Repositorio"
                        details={repositorio}
                    />
                    <Button
                        bgColor=""
                        icon={MoreIcon}
                        onClick={() => setIsOpen(true)}
                    />
                </div>
                <div className="w-full h-1 bg-[#FFFFFF] dark:bg-[#C6C7C0] rounded-md"></div>
            </div>

            <ProfessionalModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                data={modalData}
            />
        </div>
    )
}