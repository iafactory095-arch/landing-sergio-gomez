import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceDetailView } from "@/components/service-detail"
import { SERVICES, getServiceBySlug } from "@/lib/services"

const siteUrl = 'https://drsergiogomez.com'

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: "Servicio no encontrado" }
  }

  const pageUrl = `${siteUrl}/servicios/${slug}`
  const ogImage = service.heroImage ? `${siteUrl}${service.heroImage}` : `${siteUrl}/og-image.jpg`

  return {
    title: service.title,
    description: service.summary,
    keywords: [
      service.title.toLowerCase(),
      'ortodoncia',
      'diseño de sonrisa',
      'estética dental',
      'Bucaramanga',
      'Medellín',
      'Dr. Sergio Andrés Gómez',
    ],
    openGraph: {
      title: `${service.title} | Dr. Sergio Andrés Gómez`,
      description: service.summary,
      url: pageUrl,
      siteName: 'Dr. Sergio Andrés Gómez',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${service.title} - Dr. Sergio Andrés Gómez`,
        },
      ],
      type: 'article',
      locale: 'es_CO',
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      authors: ['Dr. Sergio Andrés Gómez'],
      tags: ['ortodoncia', 'diseño de sonrisa', 'estética dental'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Dr. Sergio Andrés Gómez`,
      description: service.summary,
      images: [ogImage],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'es-CO': pageUrl,
        'es': pageUrl,
        'x-default': pageUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

function generateServiceSchema(service: typeof SERVICES[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Dr. Sergio Andrés Gómez',
      url: 'https://drsergiogomez.com',
      medicalSpecialty: 'Orthodontics',
    },
    serviceType: service.title,
    areaServed: ['Bucaramanga', 'Medellín', 'Santander', 'Colombia'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://wa.me/57XXXXXXXXXX',
      servicePhone: '+57-XXX-XXX-XXX',
      availableLanguage: ['Spanish'],
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'COP',
    },
    medicalSpecialty: 'Orthodontics',
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
        }}
      />
      <main>
        <SiteHeader />
        <ServiceDetailView service={service} />
        <SiteFooter />
      </main>
    </>
  )
}