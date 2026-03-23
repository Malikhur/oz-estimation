import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTABanner from '@/components/ui/CTABanner';
import { serviceCategories } from '@/data/services';
import { serviceImages, heroImages } from '@/data/images';
import { HiArrowRight } from 'react-icons/hi2';

export const metadata = {
  title: 'Our Services — Comprehensive Construction Estimation Solutions',
  description: 'Explore our full range of construction cost estimation services: general estimation, MEP, structural trades, building envelope, interior finishes, 3D rendering & more. Accurate takeoffs delivered in 24-48 hours.',
  keywords: ['construction estimation services', 'MEP estimation', 'structural estimation', 'cost takeoff services', 'building estimation', 'quantity takeoff', '3D rendering'],
  alternates: { canonical: 'https://ozestimations.com/services' },
  openGraph: {
    title: 'Construction Estimation Services | OZ Estimation',
    description: '8 service categories, 34+ specialized estimation services. From residential to industrial — we cover every trade.',
    url: 'https://ozestimations.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[65vh] py-14 md:py-20 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImages.services} alt="Construction services" fill className="object-cover object-[center_35%]" sizes="100vw" quality={90} />
          <div className="absolute inset-0 bg-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">
              From residential takeoffs to complex commercial estimations, we cover every aspect of construction cost estimation with precision and reliability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Service Categories"
            subtitle="Browse our comprehensive range of estimation services organized by trade."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {serviceCategories.map((cat, i) => (
              <ServiceCard
                key={cat.slug}
                title={cat.title}
                description={cat.description}
                href={`/services/${cat.slug}`}
                image={serviceImages[cat.slug]}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed list */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Sub-Services"
            subtitle="A complete breakdown of every estimation service we offer."
          />
          <div className="space-y-8">
            {serviceCategories.map((cat, ci) => (
              <AnimatedSection key={cat.slug} delay={ci * 0.05}>
                <div className="bg-navy-light border border-white/5 rounded-2xl p-6 md:p-8">
                  <Link href={`/services/${cat.slug}`} className="text-gold font-bold text-xl hover:text-amber transition-colors mb-4 block">
                    {cat.title}
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cat.services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${cat.slug}/${s.slug}`}
                        className="text-slate-custom text-sm hover:text-white transition-colors flex items-center gap-2 py-1"
                      >
                        <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
