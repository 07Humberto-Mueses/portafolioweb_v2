
import ProfessionalSection from '@/components/organisms/ProfessionalSection'
import { proyectos } from '@/data/experienciaProfesional/proyectos'

export default function page() {
  return (
    <div className='w-full space-y-6 px-2 sm:px-6 md:px-16 py-4 sm:py-6'>
      {proyectos.map((proyecto) => (
        <ProfessionalSection
          key={proyecto.titulo}
          titulo={proyecto.titulo}
          imagen={proyecto.imagen || []}
          tecnologias={proyecto.tecnologias || []}
          repositorio={proyecto.repositorio || ''}
          detalles={proyecto.detalles?.map(detail => 
            Object.fromEntries(Object.entries(detail).filter(([, v]) => v !== undefined))
          ) || []}
        />
      ))}
    </div>
  )
}
