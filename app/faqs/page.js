import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import AccordionItem from '@/components/ui/AccordionItem';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTABanner from '@/components/ui/CTABanner';
import { generalFaqs } from '@/data/faqs';
import { heroImages } from '@/data/images';

export const metadata = {
  title: 'Frequently Asked Questions — Construction Estimation FAQ',
  description: 'Find answers to common questions about our construction cost estimation services, processes, pricing, turnaround times, accuracy guarantees, and how we help contractors win more bids.',
  keywords: ['construction estimation FAQ', 'estimation questions', 'cost estimation help', 'how estimation works', 'estimation pricing'],
  alternates: { canonical: 'https://ozestimations.com/faqs' },
  openGraph: {
    title: 'FAQs | Oz Estimations',
    description: 'Get answers to common questions about construction cost estimation services, process, and pricing.',
    url: 'https://ozestimations.com/faqs',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFaqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImages.faqs} alt="FAQs" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/50 to-navy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-gold">Questions</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">
              Everything you need to know about our estimation services, process, and how we can help your construction projects succeed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="General Questions" subtitle="Common questions about our estimation services." />
          <div>
            {generalFaqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Still Have Questions?"
        subtitle="Our team is happy to help. Reach out and we'll get back to you within 24 hours."
        buttonText="Contact Us"
        buttonHref="/get-estimation"
      />
    </>
  );
}
