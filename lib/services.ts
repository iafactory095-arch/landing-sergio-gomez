export type ServiceDetail = {
  slug: string
  navLabel: string
  tag: string
  title: string
  heroImage: string
  summary: string
  intro: string
  highlights: { title: string; description: string }[]
  closingTitle: string
  closingCopy: string
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "diseno-de-sonrisa",
    navLabel: "Diseño de Sonrisa",
    tag: "Subespecialidad",
    title: "Diseño de Sonrisa en Alta Estética",
    heroImage: "/images/servicios.jpeg",
    summary: "Sonrisas diseñadas a la medida de cada rostro, con criterio clínico y sensibilidad estética.",
    intro:
      "Cada sonrisa se diseña a partir de un análisis facial y dental personalizado, seleccionando el enfoque que mejor se adapte a tus rasgos, proporciones y expectativas. El resultado es una sonrisa que se siente propia, no impuesta.",
    highlights: [
      {
        title: "Lentes cerámicos y resina",
        description:
          "Carillas de mínimo espesor que corrigen forma, color y alineación sin sacrificar estructura dental sana.",
      },
      {
        title: "Diseño monocromático",
        description: "Un tono uniforme y luminoso para una estética depurada, ideal para sonrisas de alto impacto.",
      },
      {
        title: "Diseño natural biomimético",
        description:
          "Réplica de las texturas y translucidez del esmalte natural, para un resultado indistinguible de una sonrisa propia.",
      },
    ],
    closingTitle: "Diseña la sonrisa que quieres mostrar",
    closingCopy: "Agenda una valoración y descubre qué enfoque de diseño se adapta mejor a tu rostro.",
  },
  {
    slug: "ortodoncia",
    navLabel: "Ortodoncia",
    tag: "Especialidad principal",
    title: "Ortodoncia y Ortopedia Maxilar",
    heroImage: "/images/ortodoncia.jpeg",
    summary: "Sistemas de ortodoncia adaptados a cada estilo de vida, con seguimiento especializado.",
    intro:
      "El Dr. Sergio Andrés Gómez es especialista en ortodoncia y ortopedia maxilar, con un enfoque que combina la función y la estética. Cada tratamiento se planea considerando el crecimiento óseo, la mordida y el resultado estético final.",
    highlights: [
      { title: "Convencional", description: "Brackets metálicos tradicionales, eficaces y de bajo costo." },
      { title: "Autoligado", description: "Menor fricción y citas más cortas, con desplazamientos más cómodos." },
      { title: "Zafiro", description: "Brackets estéticos y transparentes que se camuflan con el diente." },
      { title: "FlowJack", description: "Sistema de baja fricción para movimientos dentales más eficientes." },
      { title: "Invisalign", description: "Alineadores transparentes y removibles, prácticamente imperceptibles." },
    ],
    closingTitle: "Encuentra el sistema ideal para ti",
    closingCopy: "Cada boca es distinta. Agenda tu valoración y te recomendaremos el sistema más adecuado.",
  },
  {
    slug: "implantes",
    navLabel: "Implantes",
    tag: "Servicio complementario",
    title: "Implantes Dentales",
    heroImage: "/images/hombre_modelo2.jpeg",
    summary: "Reemplazo de piezas dentales con resultados funcionales y estéticos duraderos.",
    intro:
      "Los implantes dentales devuelven la función masticatoria y la estética de tu sonrisa, integrándose de forma permanente con el hueso maxilar. Un proceso planeado con precisión, desde la valoración inicial hasta la rehabilitación final.",
    highlights: [
      {
        title: "Valoración personalizada",
        description: "Estudio óseo y de tejidos para definir el plan de tratamiento más adecuado.",
      },
      {
        title: "Colocación guiada",
        description: "Procedimiento preciso que prioriza tu comodidad y los tiempos de cicatrización.",
      },
      {
        title: "Rehabilitación estética",
        description: "Corona final diseñada para integrarse de forma natural con el resto de tu sonrisa.",
      },
    ],
    closingTitle: "Recupera una sonrisa completa",
    closingCopy: "Agenda una valoración para conocer si eres candidato a un implante dental.",
  },
  {
    slug: "rehabilitacion-oral",
    navLabel: "Rehabilitación Oral",
    tag: "Servicio complementario",
    title: "Rehabilitación Oral",
    heroImage: "/images/rehabilitacion.jpeg",
    summary: "Tratamientos integrales para restaurar función, salud y estética de toda la boca.",
    intro:
      "La rehabilitación oral aborda de forma integral los casos que requieren restaurar múltiples piezas dentales, combinando distintas disciplinas para lograr una boca funcional, sana y estéticamente armónica.",
    highlights: [
      {
        title: "Diagnóstico integral",
        description: "Evaluación completa de la mordida, encías y piezas dentales antes de iniciar el tratamiento.",
      },
      {
        title: "Plan multidisciplinario",
        description: "Combinación de ortodoncia, diseño de sonrisa e implantes según cada caso.",
      },
      {
        title: "Seguimiento a largo plazo",
        description: "Controles periódicos para garantizar la durabilidad de los resultados.",
      },
    ],
    closingTitle: "Recupera el equilibrio de tu sonrisa",
    closingCopy: "Agenda tu valoración y recibe un plan de rehabilitación hecho a tu medida.",
  },
]

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug)
}
