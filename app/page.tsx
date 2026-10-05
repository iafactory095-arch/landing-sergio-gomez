import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { BeforeAfter } from '@/components/before-after'
import { AboutDoctor } from '@/components/about-doctor'
import { Testimonials } from '@/components/testimonials'
import { Locations } from '@/components/locations'
import { ContactCTA } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Dr. Sergio Andrés Gómez | Ortodoncia y Diseño de Sonrisa en Alta Estética',
  description: 'Especialista en ortodoncia, ortopedia maxilar y diseño de sonrisa de alta estética en Bucaramanga y Medellín. Transformamos sonrisas con precisión clínica y criterio artístico. Agenda tu valoración.',
  keywords: [
    'ortodoncia Bucaramanga',
    'diseño de sonrisa Medellín',
    'ortodoncia invisible Invisalign',
    'brackets estéticos',
    'carillas dentales',
    'implantes dentales',
    'rehabilitación oral',
  ],
  openGraph: {
    title: 'Dr. Sergio Andrés Gómez | Ortodoncia y Diseño de Sonrisa',
    description: 'Especialista en ortodoncia, ortopedia maxilar y diseño de sonrisa de alta estética.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Sergio Andrés Gómez - Especialista en Ortodoncia y Diseño de Sonrisa',
      },
    ],
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sergio Andrés Gómez | Ortodoncia y Diseño de Sonrisa',
    description: 'Especialista en ortodoncia, ortopedia maxilar y diseño de sonrisa de alta estética.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://drsergiogomez.com/',
    languages: {
      'es-CO': 'https://drsergiogomez.com/',
      'es': 'https://drsergiogomez.com/',
      'x-default': 'https://drsergiogomez.com/',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <BeforeAfter />
      <AboutDoctor />
      <Testimonials />
      <Locations />
      <ContactCTA />
      <SiteFooter />
    </main>
  )
}