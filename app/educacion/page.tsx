"use client";
import Educacion from '@/components/molecules/Educacion'
import { formacion } from '@/data/educacion/formacion'
import { useLanguage } from '@/context/LanguageContext'

export default function page() {
  const { lang } = useLanguage();
  return (
    <div className='space-y-4 sm:space-y-6 px-4 sm:px-8 md:px-16 py-4 sm:py-6'>
      {formacion.map((item, index) => (
        <Educacion
          key={index}
          name={item.name[lang]}
          institucion={item.institucion[lang]}
          lugar={item.lugar[lang]}
          duracion={item.duracion[lang]}
          indicador={item.indicador?.[lang]}
          calificacion={item.calificacion?.[lang]}
        />
      ))}
    </div>
  )
}
