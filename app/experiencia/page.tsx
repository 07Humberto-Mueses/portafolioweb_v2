"use client";
import ProfessionalSection from '@/components/organisms/ProfessionalSection'
import { proyectos } from '@/data/experienciaProfesional/proyectos'
import { useLanguage } from '@/context/LanguageContext'

export default function page() {
  const { lang } = useLanguage()
  return (
    <div className='w-full max-w-[100vw] overflow-x-hidden space-y-12 py-4 sm:py-10'>
      {proyectos.map((proyecto, index) => (
        <ProfessionalSection
          key={index}
          titulo={proyecto.titulo[lang]}
          imagen={proyecto.imagen || []}
          tecnologias={proyecto.tecnologias || []}
          repositorio={proyecto.repositorio || ''}
          detalles={proyecto.detalles || []}
        />
      ))}
    </div>
  )
}