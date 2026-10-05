import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function AboutDoctor() {
  return (
    <section id="quien-soy" className="py-20 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative">
        <Reveal from="left">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-700">
              Sobre el especialista
            </p>

            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-slate-900 sm:text-5xl">
              Sergio Andrés Gómez
            </h2>

            <p className="text-base text-slate-600">
              Especialista en <span className="font-semibold text-slate-900">Ortodoncia y Ortopedia Maxilar</span> ·{" "}
              <span className="font-semibold text-slate-900">Diseño de Sonrisa en Alta Estética</span>
            </p>

            <p className="text-pretty text-lg font-light leading-relaxed text-slate-600">
              Con amplia experiencia en el diagnóstico, planificación y tratamiento de maloclusiones dentarias y
              alteraciones óseas, el Dr. Gómez basa su práctica en una evaluación integral de la función y la
              estética, empleando desde técnicas convencionales hasta métodos avanzados, siempre en busca de una
              oclusión estable y una sonrisa armónica para cada paciente.
            </p>

            <p className="text-pretty text-lg font-light leading-relaxed text-slate-600">
              Su subespecialidad en diseño de sonrisa combina precisión clínica y criterio estético para lograr
              resultados personalizados, cuidando el color, la forma y las proporciones de cada diente.
            </p>

            <ul className="list-none">
              {[
                "Diagnóstico y planificación integral de maloclusiones",
                "Sistemas ortodónticos convencionales y de alta tecnología",
                "Diseño de sonrisa personalizado en alta estética",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 mb-4">
                  <svg
                    className="mt-0.5 size-5 shrink-0 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base font-light text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal from="right" delay={120}>
          <div className="w-full max-w-md mx-auto sticky top-32 h-fit transition-all duration-500 z-10">
            <Image
              src="/images/sergio4.jpeg"
              alt="Dr. Sergio Andrés Gómez, especialista en ortodoncia y diseño de sonrisa"
              width={400}
              height={500}
              className="w-full rounded-3xl shadow-2xl object-cover object-top aspect-[3/4] md:aspect-[4/5]"
              sizes="(min-width: 768px) 35vw, 90vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
