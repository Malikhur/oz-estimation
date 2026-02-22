import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTABanner from '@/components/ui/CTABanner';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import AccordionItem from '@/components/ui/AccordionItem';
import { getCategoryBySlug, getAllCategoryParams } from '@/data/services';
import { serviceFaqs } from '@/data/faqs';
import { serviceImages, subServiceImages } from '@/data/images';
import { HiOutlineCheckCircle } from 'react-icons/hi2';

export async function generateStaticParams() {
  return getAllCategoryParams();
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.title} Services — Professional ${cat.title}`,
    description: `${cat.description} Get accurate ${cat.title.toLowerCase()} with detailed takeoffs, material lists, and cost breakdowns. Delivered in 24-48 hours by certified estimators.`,
    keywords: [
      cat.title.toLowerCase(),
      `${cat.title.toLowerCase()} services`,
      `${cat.title.toLowerCase()} cost`,
      'construction estimation',
      'takeoff services',
    ],
    alternates: { canonical: `https://ozestimations.com/services/${category}` },
    openGraph: {
      title: `${cat.title} | Oz Estimations`,
      description: cat.description,
      url: `https://ozestimations.com/services/${category}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const faqs = serviceFaqs[category] || [];

  const categoryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cat.title,
    description: cat.description,
    provider: {
      '@type': 'Organization',
      name: 'Oz Estimations',
      url: 'https://ozestimations.com',
    },
    areaServed: { '@type': 'Country', name: 'United States' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${cat.title} Services`,
      itemListElement: cat.services.map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          url: `https://ozestimations.com/services/${category}/${s.slug}`,
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozestimations.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ozestimations.com/services' },
      { '@type': 'ListItem', position: 3, name: cat.title, item: `https://ozestimations.com/services/${category}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={serviceImages[category] || serviceImages['general-estimation']} alt={cat.title} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/50 to-navy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {cat.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gold">{cat.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">{cat.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Long description + features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Overview</h2>
              <p className="text-slate-custom leading-relaxed mb-6">{cat.longDescription}</p>
              <p className="text-slate-custom leading-relaxed">
                Our team of expert estimators uses industry-leading software and methodologies to deliver accurate, detailed takeoffs that help you bid with confidence and complete projects on budget.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-navy-light border border-white/5 rounded-2xl p-6 md:p-8">
                <h3 className="text-white font-bold text-xl mb-6">What We Cover</h3>
                <ul className="space-y-3">
                  {cat.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <HiOutlineCheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-slate-custom text-sm md:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-16 md:py-24 bg-navy-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle={`Explore our specialized ${cat.title.toLowerCase()} offerings.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {cat.services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.description}
                href={`/services/${category}/${s.slug}`}
                image={subServiceImages[s.slug]}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Frequently Asked Questions" subtitle={`Common questions about ${cat.title.toLowerCase()}.`} />
            {faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>
      )}

      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
