import Educacion from '@/components/molecules/Educacion'
import { formacion } from '@/data/educacion/formacion'

export default function page() {
  return (
    <div className='space-y-6 px-8 py-4'>
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
