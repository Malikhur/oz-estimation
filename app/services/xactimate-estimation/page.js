import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTABanner from '@/components/ui/CTABanner';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import WorkProcess from '@/components/ui/WorkProcess';
import AccordionItem from '@/components/ui/AccordionItem';
import Button from '@/components/ui/Button';
import { xactimateService } from '@/data/services';
import { serviceFaqs } from '@/data/faqs';
import { serviceImages } from '@/data/images';
import { HiOutlineCheckCircle, HiArrowRight } from 'react-icons/hi2';

export const metadata = {
  title: 'Xactimate Estimation — Professional Insurance Claims Estimating',
  description: `${xactimateService.description} Certified Xactimate estimators delivering insurance-standard reports for property claims, restoration, and reconstruction projects.`,
  keywords: ['Xactimate estimation', 'insurance claims estimation', 'Xactimate reports', 'property damage estimation', 'restoration estimation'],
  alternates: { canonical: 'https://ozestimations.com/services/xactimate-estimation' },
  openGraph: {
    title: 'Xactimate Estimation | Oz Estimations',
    description: xactimateService.description,
    url: 'https://ozestimations.com/services/xactimate-estimation',
  },
};

export default function XactimatePage() {
  const faqs = serviceFaqs['xactimate-estimation'] || [];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={serviceImages['xactimate-estimation']} alt="Xactimate Estimation" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/50 to-navy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Xactimate <span className="text-gold">Estimation</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">{xactimateService.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Professional Xactimate Services</h2>
              <p className="text-slate-custom leading-relaxed mb-6">{xactimateService.longDescription}</p>
              <p className="text-slate-custom leading-relaxed mb-6">
                Xactimate is the industry standard software for property insurance claims estimation, used by adjusters, contractors, and restoration professionals worldwide. Our certified Xactimate estimators deliver reports that meet insurance company standards and speed up the claims approval process.
              </p>
              <p className="text-slate-custom leading-relaxed mb-8">
                Whether you need a supplement, a complete loss claim, or a detailed scope of work, our team has the expertise to generate comprehensive Xactimate estimates that maximize your recovery.
              </p>
              <Button href="/get-estimation" variant="primary">
                Get Xactimate Estimate <HiArrowRight className="w-4 h-4" />
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-navy-light border border-white/5 rounded-2xl p-6 md:p-8">
                <h3 className="text-white font-bold text-xl mb-6">What We Provide</h3>
                <ul className="space-y-3">
                  {xactimateService.features.map((f, i) => (
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

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-navy-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who Benefits From Xactimate?"
            subtitle="Our Xactimate services help a wide range of construction and insurance professionals."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Insurance Adjusters', desc: 'Accurate claim assessments that speed up approval processes and reduce disputes with policyholders.' },
              { title: 'Restoration Contractors', desc: 'Detailed scopes of work that ensure all damage is captured and properly documented for insurance purposes.' },
              { title: 'Property Owners', desc: 'Independent estimates to verify insurance claim settlements and ensure fair compensation for damages.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-navy border border-white/5 rounded-2xl p-6 md:p-8 h-full hover:border-gold/20 transition-all">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gold font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-custom text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Xactimate FAQs" subtitle="Common questions about our Xactimate estimation services." />
            {faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>
      )}

      <WorkProcess />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
