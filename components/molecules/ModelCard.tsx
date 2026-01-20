"use client";

import { useState } from "react";
import Image from "next/image";

type ModelCardProps = {
    imagen: string[];
}

export default function ModelCard({ imagen }: ModelCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex flex-col items-center z-10">
            <div className="relative w-[350px] h-[370px] shadow-lg rounded-lg overflow-hidden">
                <Image
                    src={imagen[currentIndex]}
                    alt="Model"
                    fill
                    className="object-cover object-center rounded-lg"
                />
            </div>
            <div className="flex gap-3 mt-2">
                {imagen.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition ${currentIndex === idx
                                ? "bg-[#28251F] dark:bg-[#C6C7C0] scale-110"
                                : "bg-[#28251f81] dark:bg-[#c6c7c083]"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}