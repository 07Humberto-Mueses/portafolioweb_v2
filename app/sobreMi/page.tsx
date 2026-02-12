import Text from '@/components/atoms/Text'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-4 sm:px-8 md:px-10 py-4 sm:py-6'>
      <div className='md:w-1/2 flex flex-col items-center'>
        <div className='relative'>
          <div className='rounded-full border-15 border-[#C6C7C0]'>
            <div className='rounded-full border-15 border-[#D9D9D9]'>
              <Image
                src="/Avatar.png"
                alt="Avatar"
                width={230}
                height={230}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className='mt-4 text-center'>
          <h1 className="text-[#E45F11] irish-grover-regular text-xl sm:text-xl md:text-4xl drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]">
            INGENIERO INFORMÁTICO
          </h1>
          <h2 className="text-lg sm:text-lg md:text-2xl text-[#E45F11] drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]">
            Corporación Universitaria Autónoma de Nariño
          </h2>
        </div>
      </div>
      <div className='md:w-1/2 text-center md:text-left mt-6 md:mt-0'>
        <Text>
          Soy Humberto Mueses, ingeniero informático con interés creciente en el desarrollo de aplicaciones web, especialmente en el área de backend y bases de datos. Aunque también tengo experiencia en el desarrollo frontend, mi enfoque está en construir soluciones eficientes, automatizadas y escalables que optimicen procesos repetitivos.
          Este proyecto refleja mi compromiso con el aprendizaje continuo y la comprensión profunda de cada etapa del desarrollo.
          Me motiva la satisfacción de un trabajo bien hecho, con potencial para crecer y adaptarse rápidamente. Aunque algunos desafíos pueden surgir, siempre busco resolverlos con rapidez y entenderlos a fondo para que no se conviertan en obstáculos futuros. Este espacio es una vitrina de lo que soy capaz de construir y una invitación a colaborar en proyectos que generen impacto real.
        </Text>
      </div>
      
    </div>
  )
}
