import { Clock, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"

const LOCATIONS = [
  {
    name: "Bucaramanga (Consultorio principal)",
    badge: "Sede principal",
    detail: "Agenda tu valoración inicial para diseño de sonrisa y ortodoncia.",
    hours: "Lunes a viernes · Con cita previa",
    mapsQuery: "Consultorio Dr. Sergio Andrés Gómez ortodoncia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.5582547586607!2d-73.114120849753!3d7.11249464370108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683fdd70782d3d%3A0x3868bf73943f08f0!2zU29ucmHDrXI!5e0!3m2!1ses-419!2sco!4v1789752895897!5m2!1ses-419!2sco",
  },
  {
    name: "Medellín",
    badge: "Segunda sede",
    detail: "Torre Intermédica — atención para pacientes en Medellín.",
    hours: "Agenda disponible por días",
    mapsQuery: "Torre Intermédica Medellín",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4352626270593!2d-75.57297738870388!3d6.206175526742066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468281c530cca9%3A0x368d661054cea444!2sInterm%C3%A9dica%20Centro%20de%20Especialistas!5e0!3m2!1ses-419!2sco!4v1789753094074!5m2!1ses-419!2sco",
  },
]

export function Locations() {
  return (
    <section id="sedes" className="relative overflow-hidden bg-secondary/30 py-24 border-t border-border/50">
      <div className="absolute inset-x-0 top-0 h-56 bg-dot-grid text-primary/[0.07]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">Dónde encontrarnos</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl">
            Sedes
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {LOCATIONS.map((location, i) => (
            <Reveal key={location.name} delay={i * 120}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col gap-5 border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                    {location.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-foreground">{location.name}</h3>
                  <p className="mt-2 text-pretty text-base leading-relaxed text-foreground/70">{location.detail}</p>
                </div>

                <div className="mt-auto border-t border-border pt-5">
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="size-4 shrink-0" aria-hidden="true" />
                    {location.hours}
                  </div>
                  <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-56">
                    <iframe
                      src={location.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={`Mapa de ${location.name}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      allowFullScreen
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
