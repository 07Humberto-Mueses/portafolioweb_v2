"use client";

import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { CloseIcon, Next, Previous } from '../icons/Icons';
import ProfessionalModelCard from '../molecules/ProfessionalModelCard';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

type TranslatedField = {
  ES: string;
  EN: string;
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: {
    titulo: TranslatedField;
    imagen: string[];
    tecnologias: string[];
    repositorio: string;
    detalles: Record<string, TranslatedField>[];
  };
};

export default function ProfessionalModal({ isOpen, onClose, data }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const currentDetalleObj = data.detalles?.[0] ?? {};
  const detalleEntries = Object.entries(currentDetalleObj);
  const [img, desc] = detalleEntries[currentIndex] || ["", { ES: "", EN: "" }];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? detalleEntries.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === detalleEntries.length - 1 ? 0 : prev + 1));
  };

  const prevIndex = (currentIndex - 1 + detalleEntries.length) % detalleEntries.length;
  const nextIndex = (currentIndex + 1) % detalleEntries.length;

  const translations = {
    description: { ES: "Descripción", EN: "Description" },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#C6C7C0]/90 dark:bg-[#131313]/90 z-50">
      <div className="relative maven-pro bg-[#FFFFFF] dark:bg-[#000000] rounded-xl shadow-xl p-4 sm:p-6 max-w-4xl w-full">
        <div className="absolute top-2 right-2">
          <Button bgColor="" onClick={onClose} icon={CloseIcon} />
        </div>

        <div className="hidden md:flex items-center gap-6">
          {detalleEntries.length > 1 && (
            <div className="cursor-pointer transition-transform hover:scale-105" onClick={goPrev}>
              <div className="relative w-32 h-48 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={detalleEntries[prevIndex][0]}
                  alt="Imagen previa"
                  fill
                  className="object-cover blur-xs opacity-70"
                />
              </div>
            </div>
          )}

          <div className="flex-1 flex flex-col gap-4">
            <ProfessionalModelCard imagen={img} />
            <div className="px-4 text-center">
              <h1 className="text-[#28251F] dark:text-[#FFFFFF] text-xl font-bold mb-3">
                {translations.description[lang]}
              </h1>
              <Text size="text-xs sm:text-sm md:text-base" className="text-[#28251F] dark:text-[#FFFFFF]">
                {desc[lang]}
              </Text>
            </div>
          </div>

          {detalleEntries.length > 1 && (
            <div className="cursor-pointer transition-transform hover:scale-105" onClick={goNext}>
              <div className="relative w-32 h-48 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={detalleEntries[nextIndex][0]}
                  alt="Imagen siguiente"
                  fill
                  className="object-cover blur-xs opacity-70"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col md:hidden items-center gap-4">
          <ProfessionalModelCard imagen={detalleEntries[currentIndex][0]} />
          <div className="px-4 text-center">
            <h1 className="text-[#28251F] dark:text-[#FFFFFF] text-lg font-bold mb-2">
              {translations.description[lang]}
            </h1>
            <Text className="dark:text-[#FFFFFF] text-[#28251F]" size="text-xs">
              {desc[lang]}
            </Text>
          </div>
          {detalleEntries.length > 1 && (
            <div className="flex gap-6 mt-2">
              <button onClick={goPrev}>{Previous}</button>
              <button onClick={goNext}>{Next}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
