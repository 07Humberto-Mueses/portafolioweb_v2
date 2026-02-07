
import ProfessionalSection from '@/components/organisms/ProfessionalSection'
import { proyectos } from '@/data/experienciaProfesional/proyectos'

export default function page() {
  return (
    <div>
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
