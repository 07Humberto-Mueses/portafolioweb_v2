"use client";

import Image from "next/image";

type ProfessionalModelCardProps = {
    imagen: string;
}

export default function ProfessionalModelCard({ imagen }: ProfessionalModelCardProps) {
    return (
        <div className="flex flex-col items-center pt-2 sm:pt-3 z-10">
            <div className="relative 
                   w-[220px] h-40   /* móviles */
                   sm:w-[300px] sm:h-[200px] /* tablets */
                   md:w-[400px] md:h-[270px] /* escritorio */
                   shadow-lg rounded-lg overflow-hidden"
            >
                {imagen ? (
                    <Image src={imagen} alt="Vista en producción" fill className="object-cover object-center rounded-xl" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs sm:text-sm md:text-base">
                        Sin imagen
                    </div>
                )}
            </div>
        </div>
    )
}