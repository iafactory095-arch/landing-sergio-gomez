import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"
import type { ServiceDetail as ServiceDetailType } from "@/lib/services"
import { WHATSAPP_URL } from "@/lib/contact"
import { Reveal } from "@/components/reveal"

export function ServiceDetailView({ service }: { service: ServiceDetailType }) {
  return (
    <article>
      <section className="border-b border-border bg-background pt-[72px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
          <Reveal from="left" className="order-2 lg:order-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Volver al inicio
            </Link>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-primary">{service.tag}</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-xl leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-ring mt-9 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-medium text-white shadow-md shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/40"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Agenda tu valoración
            </a>
          </Reveal>

          <Reveal from="right" delay={120} className="order-1 lg:order-2">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src={service.heroImage || "/placeholder.svg"}
                alt={service.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/30 py-20">
        <div className="absolute inset-x-0 top-0 h-56 bg-dot-grid text-primary/[0.07]" aria-hidden="true" />

        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-pretty text-xl leading-relaxed text-foreground/85">{service.intro}</p>
          </Reveal>

          <div className="mt-14 divide-y divide-border border-t border-border">
            {service.highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group grid grid-cols-1 gap-2 py-8 transition-colors sm:grid-cols-[16rem_1fr] sm:gap-10">
                  <h3 className="font-serif text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl">
            {service.closingTitle}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{service.closingCopy}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-medium text-white shadow-md shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/40"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Agenda tu valoración
          </a>
        </Reveal>
      </section>
    </article>
  )
}
