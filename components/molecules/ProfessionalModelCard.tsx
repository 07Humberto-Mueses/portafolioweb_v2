"use client";

import Image from "next/image";

type ModelCardProps = {
    imagen: string;
}

export default function ProfessionalModelCard({ imagen }: ModelCardProps) {
    return (
        <div className="flex flex-col items-center pt-3 z-10">
            <div className="relative w-[400px] h-[270px] shadow-lg rounded-lg overflow-hidden">
                {imagen ? (
                    <Image src={imagen} alt="Vista en producción" fill className="object-cover object-center rounded-xl" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Sin imagen
                    </div>
                )}
            </div>
        </div>
    )
}