import { MessageCircle } from "lucide-react"
import { InstagramIcon } from "@/components/icons/instagram-icon"
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact"
import { Reveal } from "@/components/reveal"

export function SiteFooter() {
  return (
    <footer className="bg-slate-200 border-t border-slate-300 pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div>
            <p className="font-serif text-2xl text-slate-900">Dr. Sergio Andrés Gómez</p>
            <p className="mt-2 text-sm text-slate-500 max-w-md text-center md:text-left">
              Especialista en Ortodoncia y Ortopedia Maxilar · Diseño de Sonrisa en Alta Estética
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp"
              className="flex size-12 items-center justify-center rounded-full bg-slate-50 p-2.5 text-slate-400 transition-all duration-300 hover:bg-green-100 hover:text-green-600"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Instagram"
              className="flex size-12 items-center justify-center rounded-full bg-slate-50 p-2.5 text-slate-400 transition-all duration-300 hover:bg-rose-100 hover:text-rose-500"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} Dr. Sergio Andrés Gómez. Todos los derechos reservados.
            </p>
            <p className="text-slate-400">
              Diseñado con precisión clinica y estética dental.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
