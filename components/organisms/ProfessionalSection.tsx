"use client";

import { useState } from "react";
import ProfessionalCard from "../molecules/ProfessionalCard";
import Description from "../atoms/Description";
import { MoreIcon } from "../icons/Icons";
import Button from "../atoms/Button";
import ProfessionalModal from "./ProfessionalModal";

type ProfessionalSectionProps = {
    titulo: string;
    imagen: string[];
    tecnologias: string[];
    repositorio: string;
    detalles: Record<string, string>[];
}

export default function ProfessionalSection({ titulo, imagen, tecnologias, repositorio, detalles }: ProfessionalSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-between px-28 py-6">
            <ProfessionalCard
                imagen={imagen && imagen.length > 0 ? imagen[0] : undefined}
            />
            <div className="flex flex-row text-left gap-6 flex-1 px-4">
                <Description
                    title="Titulo"
                    details={titulo}
                />
                <Description
                    title="Tecnologias"
                    details={tecnologias.join(" | ")}
                />
                <Description
                    title="Repositorio"
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
            <ProfessionalModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                data={{
                    titulo,
                    imagen,
                    tecnologias,
                    repositorio,
                    detalles
                }}
            />
        </div>
    )
}