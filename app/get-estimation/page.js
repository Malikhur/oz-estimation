import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Breadcrumb from '@/components/ui/Breadcrumb';
import QuoteForm from '@/components/ui/QuoteForm';
import ContactCard from '@/components/ui/ContactCard';
import CTABanner from '@/components/ui/CTABanner';
import { CONTACT } from '@/lib/constants';
import { heroImages } from '@/data/images';
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlineClock } from 'react-icons/hi2';

export const metadata = {
  title: 'Get Free Estimation — Request Your Construction Cost Quote',
  description: 'Request a free, accurate construction cost estimation from OZ Estimation. Upload your plans and get a detailed quote within 24-48 hours. No obligation, 98% accuracy guaranteed.',
  keywords: ['free construction estimate', 'get cost estimation', 'construction quote', 'free bid estimate', 'upload plans', 'request quote'],
  alternates: { canonical: 'https://ozestimations.com/get-estimation' },
  openGraph: {
    title: 'Get Free Estimation | OZ Estimation',
    description: 'Upload your plans and get a free, detailed construction cost estimation in 24-48 hours.',
    url: 'https://ozestimations.com/get-estimation',
  },
};

export default function GetEstimationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] py-14 md:py-20 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImages.contact} alt="Get estimation" fill className="object-cover object-[center_35%]" sizes="100vw" quality={90} />
          <div className="absolute inset-0 bg-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get Your <span className="text-gold">Free Estimation</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">
              Upload your construction plans and receive a detailed, accurate cost estimation within 24-48 hours. No obligation, completely free.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Contact */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Request a Quote</h2>
                <p className="text-slate-custom mb-8">Fill out the form below and our team will get back to you promptly.</p>
              </AnimatedSection>
              <QuoteForm />
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-4">
              <ContactCard icon={<HiOutlinePhone />} label="Call Us">
                <a href={`tel:${CONTACT.phone1}`} className="hover:text-gold transition-colors block">{CONTACT.phone1}</a>
                <a href={`tel:${CONTACT.phone2}`} className="hover:text-gold transition-colors block">{CONTACT.phone2}</a>
              </ContactCard>
              <ContactCard icon={<HiOutlineEnvelope />} label="Email Us">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors">{CONTACT.email}</a>
              </ContactCard>
              <ContactCard icon={<HiOutlineMapPin />} label="Visit Us">
                <p>{CONTACT.address1.full}</p>
                <p className="mt-1">{CONTACT.address2.full}</p>
              </ContactCard>
              <ContactCard icon={<HiOutlineClock />} label="Working Hours">
                <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 2:00 PM</p>
                <p>Sun: Closed</p>
              </ContactCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
