import Educacion from '@/components/molecules/Educacion'
import { formacion } from '@/data/educacion/formacion'

export default function page() {
  return (
    <div className='space-y-4 sm:space-y-6 px-4 sm:px-8 md:px-16 py-4 sm:py-6'>
      {formacion.map((item, index) => (
        <Educacion
          key={index}
          name={item.name}
          institucion={item.institucion}
          lugar={item.lugar}
          duracion={item.duracion}
          indicador={item.indicador}
          calificacion={item.calificacion}
        />
      ))}

    </div>
  )
}
