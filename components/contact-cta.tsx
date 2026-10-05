import { ArrowUpRight, MessageCircle } from "lucide-react"
import { InstagramIcon } from "@/components/icons/instagram-icon"
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/contact"
import { Reveal } from "@/components/reveal"

const CHANNELS = [
  {
    name: "WhatsApp",
    description: "Respuesta directa y personalizada para agendar tu valoración inicial.",
    cta: "Escribir por WhatsApp",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    iconBg: "bg-green-100 text-green-600",
    cardBg: "bg-green-50/50",
    ctaClass: "text-green-600 font-semibold",
    iconClass: "text-green-600",
  },
  {
    name: "Instagram",
    description: "Casos reales de antes y después, y el detrás de cámaras del consultorio.",
    cta: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    iconBg: "bg-rose-100 text-rose-500",
    cardBg: "bg-rose-50/50",
    ctaClass: "text-rose-500 font-semibold",
    iconClass: "text-rose-500",
  },
]

export function ContactCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-background py-24 border-t border-border/50">
      <div className="absolute inset-x-0 bottom-0 h-56 bg-dot-grid text-primary/[0.06]" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-700">Hablemos</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-balance text-slate-900 md:text-5xl">
            Inicia tu diseño de sonrisa hoy
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Agenda tu valoración con el Dr. Sergio Andrés Gómez.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.name} delay={i * 120}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex h-full flex-col justify-between rounded-3xl ${channel.cardBg} p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                aria-label={channel.name === "WhatsApp" ? "Escribir por WhatsApp" : "Ver Instagram"}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex size-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${channel.iconBg}`}
                    >
                      <channel.icon className="size-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className={`size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${channel.iconClass}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-foreground">{channel.name}</h3>
                  <p className="mt-2 text-pretty text-base leading-relaxed text-foreground/70">
                    {channel.description}
                  </p>
                </div>
                <p className={`mt-6 text-base ${channel.ctaClass}`}>{channel.cta}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
