import ProjectSection from '@/components/organisms/ProjectSection'
import { proyectosBasico } from "@/data/proyectos/basico";
import { proyectoFramework } from '@/data/proyectos/framework';
import { proyectoApis } from '@/data/proyectos/apis';

export default function page() {
  return (
    <div className='space-y-12 px-4 sm:px-8 md:px-16 py-6 sm:py-10 inset-0 z-10'>
      <ProjectSection
        variant='derecha'
        images={proyectosBasico.map((p) => p.imagen[0])}
        data={proyectosBasico}
        title='Fundamentos del desarrollo web'
        description='Estos proyectos fueron mis primeras experiencias creando interfaces y funcionalidades desde cero. En ellos construí bases con HTML y JavaScript puro, comprendiendo el DOM, estilos, eventos y lógica del cliente. Reflejan mi evolución inicial y mi capacidad para transformar ideas simples en soluciones claras y funcionales.'
      />
      <ProjectSection
        images={proyectoFramework.map((p) => p.imagen[0])}
        data={proyectoFramework}
        title='Desarrollo Moderno con Frameworks y Arquitectura Escalable'
        description='En esta sección presento proyectos donde integré herramientas modernas del ecosistema web, aplicando buenas prácticas como componentes reutilizables, enrutamiento, optimización y manejo de estado. Trabajé con Next.js, Astro, Vite y Tailwind, construyendo estructuras escalables y profesionales que reflejan mi evolución hacia un desarrollo sólido, modular y eficiente.'
      />
      <ProjectSection
        variant='derecha'
        images={proyectoApis.map((p) => p.imagen[0])}
        data={proyectoApis}
        title='Conexión con APIs y Funcionalidades Dinámicas'
        description='Estos proyectos muestran mi habilidad para integrar servicios externos y trabajar con datos en tiempo real. Implementé llamadas a APIs con fetch, validación de respuestas y creación de interfaces dinámicas. Reflejan mi capacidad para desarrollar aplicaciones conectadas, interactivas y funcionales.'
      />
    </div>
  )
}
