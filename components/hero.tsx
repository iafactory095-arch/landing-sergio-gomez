"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { InstagramIcon } from "@/components/icons/instagram-icon"
import { LogoMark } from "@/components/logo-mark"
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/contact"

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden flex flex-col justify-start pt-40 md:pt-48 px-4 bg-gradient-to-b from-blue-700 via-blue-400 to-slate-50">
      <div className="relative z-20 flex flex-col items-center w-full max-w-5xl mx-auto pointer-events-auto mt-4 flex-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center max-w-4xl leading-snug font-medium">
          Diseñamos sonrisas que <span className="text-cyan-50 italic font-light drop-shadow-lg whitespace-nowrap">hablan por ti</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 text-center mt-6 max-w-2xl">
          Ortodoncia y diseño de sonrisa de alta estética. Transformamos tu sonrisa con precisión clínica y criterio artístico.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white hover:bg-green-600 rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-green-500/40 transition-all flex items-center gap-2"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Agenda tu valoración
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-500 text-white hover:bg-rose-600 rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-rose-500/40 transition-all flex items-center gap-2"
          >
            <InstagramIcon className="size-4" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
        <div className="flex justify-center mt-8 md:mt-10">
          <img
            src="/images/logo0.png"
            alt="Logo central"
            className="w-60 md:w-80 lg:w-96 h-auto object-contain mx-auto opacity-90"
          />
        </div>
        <div className="mt-auto" />
        <p className="text-xs font-medium uppercase tracking-wide text-cyan-100 mb-2">Especialista en Estética Dental</p>
      </div>


    </section>
  )
}