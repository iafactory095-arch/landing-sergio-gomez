"use client"

import Link from "next/link"
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react"
import { SERVICES } from "@/lib/services"
import { WHATSAPP_URL } from "@/lib/contact"
import { useState } from "react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-full px-6 py-3 z-50 shadow-lg transition-all backdrop-blur-lg bg-white/20 border border-white/30 flex justify-between items-center">
      <Link href="/" className="flex items-center" aria-label="Ir al inicio">
        <img
          src="/images/logo0.png"
          alt="Logo Dr. Sergio Gómez"
          className="h-10 w-auto object-contain"
        />
      </Link>

      <ul className="hidden md:flex items-center gap-8 font-medium text-black">
        <li>
          <a href="/#inicio" className="transition-colors hover:text-slate-600">
            Inicio
          </a>
        </li>

        <li
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            type="button"
            onClick={() => setServicesOpen((v) => !v)}
            aria-expanded={servicesOpen}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-slate-600"
          >
            Servicios
            <ChevronDown
              className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {servicesOpen && (
            <div className="animate-in fade-in slide-in-from-top-2 absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[110]">
              <ul className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 w-56 text-slate-800">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {service.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        <li>
          <a href="/#quien-soy" className="transition-colors hover:text-slate-600">
            Quién soy
          </a>
        </li>
        <li>
          <a href="/#contacto" className="transition-colors hover:text-slate-600">
            Contacto
          </a>
        </li>
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all md:inline-flex"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        <span>Agendar cita</span>
      </a>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-black md:hidden"
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="animate-in fade-in slide-in-from-top-2 absolute top-full left-0 right-0 z-[110] bg-white text-slate-900 shadow-2xl border border-slate-200 rounded-2xl p-6 mt-4 md:hidden">
          <ul className="flex flex-col gap-4 text-slate-800">
            <li>
              <a
                href="/#inicio"
                onClick={() => setOpen(false)}
                className="block hover:text-slate-600"
              >
                Inicio
              </a>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between text-slate-800 hover:text-slate-600"
              >
                Servicios
                <ChevronDown
                  className={`size-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <ul className="mt-3 flex flex-col gap-3 pl-4 border-l border-slate-200">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/servicios/${service.slug}`}
                        onClick={() => setOpen(false)}
                        className="block hover:text-slate-600"
                      >
                        {service.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <a
                href="/#quien-soy"
                onClick={() => setOpen(false)}
                className="block hover:text-slate-600"
              >
                Quién soy
              </a>
            </li>
            <li>
              <a
                href="/#contacto"
                onClick={() => setOpen(false)}
                className="block hover:text-slate-600"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
