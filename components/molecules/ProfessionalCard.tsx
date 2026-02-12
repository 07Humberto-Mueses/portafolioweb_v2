"use client";

import Image from "next/image";

type ProfesionalCardProps = {
    imagen?: string;
}

export default function ProfessionalCard({ imagen }: ProfesionalCardProps) {
    return (
        <div className="bg-[#D9D9D9] dark:bg-[#000000] rounded-xl shadow-lg p-3 sm:p-4 flex items-center justify-center">
            <div className="relative 
                   w-[180px] h-[140px]   /* móviles */
                   sm:w-[220px] sm:h-40 /* tablets */
                   md:w-[250px] md:h-[180px] /* escritorio */
                   overflow-hidden rounded-xl m-2 sm:m-4">
                {imagen ? (
                    <Image
                        src={imagen}
                        alt="Imagen Experiencia Profesional"
                        fill
                        className="object-cover object-center"
                    />
                ) : (
                    <div className="maven-pro w-full h-full flex items-center justify-center text-gray-500 text-xs sm:text-sm md:text-base">
                        Sin imagen
                    </div>
                )}
            </div>
        </div>
    )
}