"use client";

import { useState } from "react";
import Button from "../atoms/Button";
import { Next, Previous, EyeIcon } from "../icons/Icons";
import Image from "next/image";
import ProjectModal from "../organisms/ProjectModal";

type ProjectCardProps = {
    imagen: string[];
    data: any[];
}

export default function ProjectCard({ imagen, data }: ProjectCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % imagen.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + imagen.length) % imagen.length);
    };

    return (
        <div className="relative w-full max-w-xs mx-auto inset-0">
            <div className="relative group w-full h-52 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={imagen[currentIndex]}
                    alt={`Imagen ${currentIndex + 1}`}
                    fill
                    className="object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-95"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <Button
                        bgColor=""
                        icon={EyeIcon}
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-16">
                <Button
                    bgColor=""
                    icon={Previous}
                    onClick={handlePrevious}
                />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-16">
                <Button
                    bgColor=""
                    icon={Next}
                    onClick={handleNext}
                />
            </div>
            <ProjectModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                data={data[currentIndex]}
            />
        </div>
    )
}