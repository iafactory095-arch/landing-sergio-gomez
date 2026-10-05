"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TESTIMONIALS } from "@/lib/testimonials"
import { Reveal } from "@/components/reveal"

const AUTOPLAY_MS = 6000

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(interval)
  }, [paused])

  const goTo = (i: number) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section id="testimonios" className="relative overflow-hidden bg-gray-50 py-24 border-t border-border/50">
      <div className="absolute inset-x-0 bottom-0 h-72 bg-dot-grid text-primary/[0.06]" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-medium tracking-wider uppercase text-teal-600">Voces que inspiran confianza</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Historias reales de quienes ya vivieron su transformación de sonrisa.
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mt-16"
        >
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative overflow-hidden bg-white rounded-3xl shadow-2xl shadow-blue-900/5 p-10 md:p-16"
          >
            <svg
              className="absolute -top-4 -left-2 text-[12rem] text-blue-500 opacity-5 select-none"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.046 2.242c-.7.004-1.402.02-2.102.054A7.007 7.007 0 004.95 14.95c0 3.913 3.17 7.09 7.09 7.09h.06a7.035 7.035 0 001.95-2.74A11.654 11.654 0 0019.05 22c.05-1.602.046-3.204-.006-4.807a5.023 5.023 0 01-3.713-3.713c-.048-.145.007-.289.142-.352.145-.065.304-.007.352.142.28 1.063.636 2.082 1.091 3.051.464-.14.943-.35 1.436-.636a7.047 7.047 0 01-1.335-2.634c-.19-.618.215-1.258.86-1.258h.071c.727.003 1.447.152 2.114.437l-.002-.002c-.27-1.55-.9-2.96-1.85-4.12-.24-.31-.6-.55-1.03-.62-.432-.073-.652-.547-.526-1.004.141-.517.83-.738 1.255-.46.835.524 1.496 1.19 2.04 1.97.27-.001 1.745.001 2.217-.002.427-.002.747-.29.749-.717a.749.749 0 00-.749-.748c-1.28.002-2.77-.002-3.26-.002-.253 0-.459-.202-.46-.454 0-.252.207-.46.46-.46.3-.001.295-.001.295-.001zm-7.14 7.57c-.253 0-.46-.202-.46-.454 0-.252.208-.46.46-.46.253 0 .46.202.46.454 0 .252-.207.46-.46.46zm-2.93 5.086c.253 0 .46.202.46.454 0 .252-.207.46-.46.46-.253 0-.46-.202-.46-.454 0-.252.208-.46.46-.46zm0 3.286c.253 0 .46.202.46.454 0 .252-.207.46-.46.46-.253 0-.46-.202-.46-.454 0-.252.208-.46.46-.46zm3.93-6.272c.253 0 .46.202.46.454 0 .252-.207.46-.46.46-.253 0-.46-.202-.46-.454 0-.252.208-.46.46-.46z" />
            </svg>

            <div
              key={index}
              className="relative z-10 flex flex-col items-center gap-8"
            >
              <p className="text-xl font-light italic text-slate-700 leading-relaxed text-center md:text-2xl">
                &ldquo;{TESTIMONIALS[index].quote}&rdquo;
              </p>

              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={`size-4 ${
                      starIndex < Math.round(TESTIMONIALS[index].rating) ? "fill-accent text-accent" : "fill-muted-foreground/30 text-muted-foreground/30"
                    } animate-in zoom-in duration-300 fill-mode-both`}
                    style={{ animationDelay: `${starIndex * 80}ms` }}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .587l3.668 7.568 8.447 1.151-6.353 6.817 1.5 6.716L12 17.718l-6.762 3.818 1.5-6.716L3.885 9.306z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-transparent transition-all duration-300">
                  <Image
                    src={TESTIMONIALS[index].photo || "/placeholder.svg"}
                    alt={`Foto de ${TESTIMONIALS[index].name}`}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="text-left">
                  <p className="font-serif text-lg text-foreground">{TESTIMONIALS[index].name}</p>
                  <p className="text-sm text-muted-foreground">{TESTIMONIALS[index].treatment}</p>
                </div>
              </div>
            </div>
          </div>

          <div key={index} className="mx-auto mt-8 h-1 w-24 overflow-hidden rounded-full bg-border">
            <div
              className="h-full origin-left bg-primary"
              style={{
                animation: paused ? "none" : `underline-grow ${AUTOPLAY_MS}ms linear forwards`,
              }}
            />
          </div>
        </Reveal>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Testimonio anterior"
          className="absolute left-0 top-1/2 hidden -translate-x-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg p-3 text-slate-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-teal-500 hover:text-white hover:shadow-teal-500/20 sm:flex sm:-translate-x-10"
        >
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Siguiente testimonio"
          className="absolute right-0 top-1/2 hidden translate-x-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg p-3 text-slate-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-teal-500 hover:text-white hover:shadow-teal-500/20 sm:flex sm:translate-x-10"
        >
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>

        <div className="mt-12 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir al testimonio de ${t.name}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}