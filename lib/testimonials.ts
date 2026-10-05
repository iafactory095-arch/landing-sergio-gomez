export type Testimonial = {
  name: string
  treatment: string
  quote: string
  photo: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Camila R.",
    treatment: "Diseño de sonrisa",
    quote:
      "Excelente atención de principio a fin. El Dr. Gómez me explicó cada paso y el resultado superó lo que imaginaba. Súper recomendado.",
    photo: "/images/testimonial-1.png",
    rating: 5,
  },
  {
    name: "Andrés M.",
    treatment: "Ortodoncia · Invisalign",
    quote:
      "Muy profesional y puntual en cada cita. Todo el proceso fue claro y sin dolor. Hoy tengo la sonrisa que siempre quise, gracias doctor.",
    photo: "/images/testimonial-2.png",
    rating: 5,
  },
  {
    name: "Valentina S.",
    treatment: "Diseño de sonrisa",
    quote:
      "Desde la primera consulta me sentí en buenas manos. El trato es cercano y el consultorio impecable. Sin duda el mejor especialista que he visitado.",
    photo: "/images/testimonial-3.png",
    rating: 5,
  },
  {
    name: "Juan D.",
    treatment: "Implantes dentales",
    quote:
      "Un trabajo excelente, muy detallado y natural. Se nota la experiencia y el criterio estético del Dr. Gómez. Totalmente recomendado.",
    photo: "/images/testimonial-4.png",
    rating: 5,
  },
]
