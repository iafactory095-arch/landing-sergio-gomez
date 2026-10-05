import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = 'https://drsergiogomez.com'
const siteName = 'Dr. Sergio Andrés Gómez'
const defaultTitle = 'Dr. Sergio Andrés Gómez | Ortodoncia y Diseño de Sonrisa en Alta Estética'
const defaultDescription = 'Especialista en ortodoncia, ortopedia maxilar y diseño de sonrisa de alta estética en Bucaramanga y Medellín. Transformamos sonrisas con precisión clínica y criterio artístico.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Dr. Sergio Andrés Gómez',
  },
  description: defaultDescription,
  keywords: [
    'ortodoncia',
    'diseño de sonrisa',
    'ortopedia maxilar',
    'implantes dentales',
    'rehabilitación oral',
    'Invisalign',
    'brackets',
    'carillas dentales',
    'estética dental',
    'Bucaramanga',
    'Medellín',
    'Dr. Sergio Andrés Gómez',
  ],
  authors: [{ name: 'Dr. Sergio Andrés Gómez' }],
  creator: 'Dr. Sergio Andrés Gómez',
  publisher: 'Dr. Sergio Andrés Gómez',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Sergio Andrés Gómez - Ortodoncia y Diseño de Sonrisa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@drsergiogomez',
    creator: '@drsergiogomez',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'Health',
  classification: 'Medical Practice',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  userScalable: true,
  themeColor: '#2f6fed',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CO" className={`light bg-background ${fraunces.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Dr. Sergio Andrés Gómez',
              description: 'Especialista en ortodoncia, ortopedia maxilar y diseño de sonrisa de alta estética.',
              url: siteUrl,
              logo: `${siteUrl}/logo0.png`,
              image: `${siteUrl}/og-image.jpg`,
              telephone: '+57-XXX-XXX-XXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Consultorio Principal',
                addressLocality: 'Bucaramanga',
                addressRegion: 'Santander',
                addressCountry: 'CO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 7.1124946,
                longitude: -73.1141208,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '17:00',
                },
              ],
              priceRange: '$$$',
              medicalSpecialty: ['Orthodontics', 'Dentistry', 'Cosmetic Dentistry', 'Oral Surgery'],
              knowsAbout: [
                'Ortodoncia',
                'Ortopedia Maxilar',
                'Diseño de Sonrisa',
                'Invisalign',
                'Brackets',
                'Carillas Dentales',
                'Implantes Dentales',
                'Rehabilitación Oral',
              ],
              sameAs: [
                'https://instagram.com/drsergiogomez',
                'https://wa.me/57XXXXXXXXXX',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteName,
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${siteUrl}/servicios/{search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/logo0.png`,
              sameAs: [
                'https://instagram.com/drsergiogomez',
                'https://wa.me/57XXXXXXXXXX',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+57-XXX-XXX-XXX',
                contactType: 'customer service',
                availableLanguage: ['Spanish'],
              },
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}