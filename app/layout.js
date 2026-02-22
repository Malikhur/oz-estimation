import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopLoader from '@/components/TopLoader';
import PageTransition from '@/components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://ozestimations.com'),
  title: {
    default: 'Oz Estimations | Professional Construction Cost Estimation Services',
    template: '%s | Oz Estimations',
  },
  description: 'Oz Estimations provides accurate, professional construction cost estimation services for residential, commercial, and industrial projects across the USA. Get precise takeoffs, detailed cost breakdowns, and reliable bid support within 24-48 hours.',
  keywords: [
    'construction estimation', 'cost estimation', 'takeoff services', 'construction bidding',
    'MEP estimation', 'residential estimation', 'commercial estimation', 'industrial estimation',
    'quantity takeoff', 'material takeoff', 'construction cost estimator', 'bid estimation',
    'structural estimation', 'roofing estimation', 'electrical estimation', 'plumbing estimation',
    'Xactimate estimation', 'construction estimating company', 'estimation services USA',
    'building cost calculator', 'contractor estimation services', 'subcontractor estimation',
  ],
  authors: [{ name: 'Oz Estimations', url: 'https://ozestimations.com' }],
  creator: 'Oz Estimations',
  publisher: 'Oz Estimations',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://ozestimations.com',
  },
  openGraph: {
    title: 'Oz Estimations | Professional Construction Cost Estimation Services',
    description: 'Accurate construction cost estimation for residential, commercial & industrial projects. 5,000+ projects estimated with 98% accuracy. Get a free quote today.',
    url: 'https://ozestimations.com',
    siteName: 'Oz Estimations',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Oz Estimations - Professional Construction Cost Estimation Services',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oz Estimations | Construction Cost Estimation',
    description: 'Professional construction cost estimation services across the USA. 98% accuracy, 24-hour turnaround.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Replace with real values when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'construction',
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://ozestimations.com/#organization',
    name: 'Oz Estimations',
    url: 'https://ozestimations.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ozestimations.com/icon.svg',
      width: 60,
      height: 60,
    },
    description: 'Professional construction cost estimation services for residential, commercial, and industrial projects across the USA.',
    foundingDate: '2015',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
    areaServed: { '@type': 'Country', name: 'United States' },
    serviceType: [
      'Construction Cost Estimation',
      'Quantity Takeoff Services',
      'Material Takeoff',
      'MEP Estimation',
      'Structural Estimation',
      'Xactimate Estimation',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-555-987-6543',
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Construction Ave, Suite 200',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      postalCode: '75001',
      addressCountry: 'US',
    },
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ozestimations.com/#localbusiness',
    name: 'Oz Estimations',
    image: 'https://ozestimations.com/opengraph-image',
    url: 'https://ozestimations.com',
    telephone: '+1-555-123-4567',
    email: 'info@ozestimations.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Construction Ave, Suite 200',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      postalCode: '75001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7767,
      longitude: -96.7970,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ozestimations.com/#website',
    url: 'https://ozestimations.com',
    name: 'Oz Estimations',
    publisher: { '@id': 'https://ozestimations.com/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ozestimations.com/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4A843" />
        <meta name="msapplication-TileColor" content="#0A1628" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className="antialiased bg-navy text-white font-sans min-h-screen flex flex-col">
        <TopLoader />
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
