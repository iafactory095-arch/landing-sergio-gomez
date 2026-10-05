import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'

const siteUrl = 'https://drsergiogomez.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          'es-CO': siteUrl,
          'es': siteUrl,
          'x-default': siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/#resultados`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#quien-soy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#testimonios`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/#sedes`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/#contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  const servicePages = SERVICES.map((service) => ({
    url: `${siteUrl}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
    alternates: {
      languages: {
        'es-CO': `${siteUrl}/servicios/${service.slug}`,
        'es': `${siteUrl}/servicios/${service.slug}`,
        'x-default': `${siteUrl}/servicios/${service.slug}`,
      },
    },
  }))

  return [...staticPages, ...servicePages]
}