"use client";

import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { CloseIcon } from '../icons/Icons';
import ModelCard from '../molecules/ModelCard';
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
    galeria: string[];
    descripcion: TranslatedField;
    proposito: TranslatedField;
    funcionamiento: TranslatedField;
    tecnologias: string[];
  };
};

export default function ProjectModal({ isOpen, onClose, data }: ProjectModalProps) {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const translate = {
    generalDescription: { ES: "Descripción General", EN: "General Description" },
    purpose: { ES: "Propósito", EN: "Purpose" },
    functionality: { ES: "Funcionamiento", EN: "Functionality" },
    technologies: { ES: "Tecnologías", EN: "Technologies" },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#C6C7C0]/90 dark:bg-[#131313]/90 z-50">
      <div className="relative maven-pro bg-[#FFFFFF] dark:bg-[#000000] rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-4xl mx-2 sm:mx-4">
        <div className="absolute top-2 right-2">
          <Button bgColor="" onClick={onClose} icon={CloseIcon} />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-1/2">
            <ModelCard imagen={data.galeria} />
          </div>

          <div className="flex-1 text-[#28251F] dark:text-[#FFFFFF]">
            <h1 className="text-lg sm:text-xl md:text-2xl text-center font-bold mb-3 sm:mb-4">
              {data.titulo[lang]}
            </h1>

            <Text className="font-bold" size="text-sm sm:text-base">
              {translate.generalDescription[lang]}
            </Text>
            <Text size="text-xs sm:text-sm">{data.descripcion[lang]}</Text>

            <Text className="font-bold" size="text-sm sm:text-base">
              {translate.purpose[lang]}
            </Text>
            <Text size="text-xs sm:text-sm">{data.proposito[lang]}</Text>

            <Text className="font-bold" size="text-sm sm:text-base">
              {translate.functionality[lang]}
            </Text>
            <Text size="text-xs sm:text-sm">{data.funcionamiento[lang]}</Text>

            <Text className="font-bold mt-4" size="text-sm sm:text-base">
              {translate.technologies[lang]}
            </Text>
            <ul className="inline-flex flex-wrap gap-2">
              {data.tecnologias.map((tec, idx) => (
                <Text key={idx} size="text-sm sm:text-base">
                  {tec}
                </Text>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
