import Text from '@/components/atoms/Text'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='bg-[#C6C7C0] dark:bg-[#131313] flex flex-row md:flex-row items-center justify-between gap-10 px-10 py-2'>
      <div className='md:w-1/2 text-left'>
        <Text>
          Soy Humberto Mueses, ingeniero informático con interés creciente en el desarrollo de aplicaciones web, especialmente en el área de backend y bases de datos. Aunque también tengo experiencia en el desarrollo frontend, mi enfoque está en construir soluciones eficientes, automatizadas y escalables que optimicen procesos repetitivos.
          Este proyecto refleja mi compromiso con el aprendizaje continuo y la comprensión profunda de cada etapa del desarrollo.
          Me motiva la satisfacción de un trabajo bien hecho, con potencial para crecer y adaptarse rápidamente. Aunque algunos desafíos pueden surgir, siempre busco resolverlos con rapidez y entenderlos a fondo para que no se conviertan en obstáculos futuros. Este espacio es una vitrina de lo que soy capaz de construir y una invitación a colaborar en proyectos que generen impacto real.
        </Text>
      </div>
      <div className='md:w-1/2 flex flex-col items-center'>
        <div className='relative'>
          <div className='rounded-full border-15 border-[#C6C7C0]'>
            <div className='rounded-full border-15 border-[#D9D9D9]'>
              <Image
                src="/Avatar.png"
                alt="Avatar"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className='mt-6 text-center'>
          <h1 className="text-[#E45F11] irish-grover-regular text-2xl md:text-4xl">
            INGENIERO INFORMÁTICO
          </h1>
          <h2 className="text-xl md:text-3xl text-[#E45F11]">
            Corporación Universitaria Autónoma de Nariño
          </h2>
        </div>
      </div>
    </div>
  )
}
