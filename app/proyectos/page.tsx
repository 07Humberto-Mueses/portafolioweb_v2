"use client";
import ProjectSection from '@/components/organisms/ProjectSection'
import { proyectosBasico } from "@/data/proyectos/basico";
import { proyectoFramework } from '@/data/proyectos/framework';
import { proyectoApis } from '@/data/proyectos/apis';
import { useLanguage } from '@/context/LanguageContext';

export default function page() {
  const { lang } = useLanguage();

  const translate = {
    "fundamentals": {
      "ES": "Fundamentos del desarrollo web",
      "EN": "Fundamentals of Web Development"
    },
    "modernDevelopment": {
      "ES": "Desarrollo Moderno con Frameworks y Arquitectura Escalable",
      "EN": "Modern Development with Frameworks and Scalable Architecture"
    },
    "apiIntegration": {
      "ES": "Conexión con APIs y Funcionalidades Dinámicas",
      "EN": "API Integration and Dynamic Features"
    },
    "fundamentalsDesc": {
      "ES": "Estos proyectos fueron mis primeras experiencias creando interfaces y funcionalidades desde cero. En ellos construí bases con HTML y JavaScript puro, comprendiendo el DOM, estilos, eventos y lógica del cliente. Reflejan mi evolución inicial y mi capacidad para transformar ideas simples en soluciones claras y funcionales.",
      "EN": "These projects were my first experiences creating interfaces and functionalities from scratch. In them, I built foundations with pure HTML and JavaScript, understanding the DOM, styles, events, and client logic. They reflect my initial evolution and my ability to transform simple ideas into clear and functional solutions."
    },
    "modernDevelopmentDesc": {
      "ES": "En esta sección presento proyectos donde integré herramientas modernas del ecosistema web, aplicando buenas prácticas como componentes reutilizables, enrutamiento, optimización y manejo de estado. Trabajé con Next.js, Astro, Vite y Tailwind, construyendo estructuras escalables y profesionales que reflejan mi evolución hacia un desarrollo sólido, modular y eficiente.",
      "EN": "In this section, I present projects where I integrated modern tools from the web ecosystem, applying best practices such as reusable components, routing, optimization, and state management. I worked with Next.js, Astro, Vite, and Tailwind CSS to build scalable and professional structures that reflect my evolution toward solid, modular, and efficient development."
    },
    "apiIntegrationDesc": {
      "ES": "Estos proyectos muestran mi habilidad para integrar servicios externos y trabajar con datos en tiempo real. Implementé llamadas a APIs con fetch, validación de respuestas y creación de interfaces dinámicas. Reflejan mi capacidad para desarrollar aplicaciones conectadas, interactivas y funcionales.",
      "EN": "These projects show my ability to integrate external services and work with real-time data. I implemented API calls with fetch, response validation, and dynamic interface creation. They reflect my capacity to develop connected, interactive, and functional applications."
    }
  }

  return (
    <div className='space-y-12 px-4 sm:px-8 md:px-16 py-6 sm:py-10 inset-0 z-10'>
      <ProjectSection
        variant='derecha'
        images={proyectosBasico.map((p) => p.imagen[0])}
        data={proyectosBasico}
        title={translate.fundamentals[lang]}
        description={translate.fundamentalsDesc[lang]}
      />
      <ProjectSection
        images={proyectoFramework.map((p) => p.imagen[0])}
        data={proyectoFramework}
        title={translate.modernDevelopment[lang]}
        description={translate.modernDevelopmentDesc[lang]}
      />
      <ProjectSection
        variant='derecha'
        images={proyectoApis.map((p) => p.imagen[0])}
        data={proyectoApis}
        title={translate.apiIntegration[lang]}
        description={translate.apiIntegrationDesc[lang]}
      />
    </div>
  )
}
