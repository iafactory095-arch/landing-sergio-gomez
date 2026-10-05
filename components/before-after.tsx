"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SmileCompareSlider } from "@/components/smile-compare-slider"
import { ImageGallery } from "@/components/image-gallery"
import { Reveal } from "@/components/reveal"
import { RESULTS } from "@/lib/results"

export function BeforeAfter() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? RESULTS.length - 1 : i - 1))
  const next = () => setIndex((i) => (i + 1) % RESULTS.length)
  const goTo = (i: number) => setIndex((i + RESULTS.length) % RESULTS.length)

  const current = RESULTS[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      {/* 1) Galería de Casos — fondo blanco */}
      <section id="resultados" className="relative bg-white py-20 lg:py-24 border-t border-border/50">
        <div className="w-full overflow-hidden">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Resultados reales</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl">
              Galería de Resultados
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Explora nuestros casos reales. Haz clic en cualquier imagen para ampliarla y ver el resultado de
              cada tratamiento en detalle.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-16">
            <ImageGallery />
          </Reveal>
        </div>
      </section>

      {/* 2) Comparador Antes y Después — fondo gris claro */}
      <section className="relative bg-gray-50 py-20 lg:py-24 border-t border-border/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="mx-auto text-center">
            <p className="mb-2 text-sm font-semibold tracking-wider text-blue-500 uppercase">
              ANÁLISIS AL DETALLE
            </p>
            <h2 className="text-3xl font-serif text-slate-900 md:text-4xl">Transformaciones en primer plano</h2>
          </Reveal>

          <Reveal delay={150} className="mt-12">
            <div className="relative rounded-xl border border-border bg-background">
              <SmileCompareSlider
                key={current.id}
                beforeSrc={current.before}
                afterSrc={current.after}
                altBefore={current.altBefore}
                altAfter={current.altAfter}
              />

              <button
                type="button"
                onClick={prev}
                aria-label="Caso anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 p-2 text-foreground shadow-md backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Caso siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 p-2 text-foreground shadow-md backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={300} className="mt-8 text-center">
            <p className="font-serif text-lg text-foreground">{current.title}</p>
            <p className="mt-1 text-pretty text-sm text-muted-foreground">{current.description}</p>
          </Reveal>

          <Reveal delay={450} className="mt-6 flex items-center justify-center gap-2">
            {RESULTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir al caso ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
