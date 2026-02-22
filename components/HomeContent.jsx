'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { serviceCategories } from '@/data/services';
import { STATS, TRUST_BADGES } from '@/lib/constants';
import { heroImages, serviceImages, testimonialImages } from '@/data/images';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import StatCounter from '@/components/ui/StatCounter';
import Button from '@/components/ui/Button';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import WorkProcess from '@/components/ui/WorkProcess';
import CTABanner from '@/components/ui/CTABanner';
import AreaGrid from '@/components/ui/AreaGrid';
import { HiArrowRight, HiOutlineShieldCheck, HiOutlineStar } from 'react-icons/hi2';

const heroWords = ['Accurate', 'Professional', 'Reliable'];

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImages.home}
          alt="Construction site aerial view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8"
          >
            <HiOutlineStar className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs md:text-sm font-medium">Trusted by 1000+ Contractors Nationwide</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="inline-block mr-3"
              >
                {i === 0 ? <span className="text-gold">{word}</span> : word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="inline-block"
            >
              Construction Estimations
            </motion.span>
          </h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-slate-custom text-base md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            We deliver precise, detailed cost estimations for residential, commercial, and industrial construction projects. Win more bids with confidence.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/get-estimation" variant="primary">
              Get Free Estimation <HiArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/services" variant="secondary">
              Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-12 flex flex-wrap items-center gap-8 text-slate-custom text-xs md:text-sm"
          >
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <HiOutlineShieldCheck className="w-4 h-4 text-gold" />
                {badge.title}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-navy-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Estimation Services"
          subtitle="Comprehensive cost estimation solutions for every construction trade and project type."
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
        <AnimatedSection className="text-center mt-10">
          <Button href="/services" variant="secondary">
            View All Services <HiArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: 'Robert Johnson', role: 'General Contractor', text: 'Oz Estimations helped us win 40% more bids with their accurate and detailed cost breakdowns. Highly recommended!', img: testimonialImages[0] },
    { name: 'Sarah Williams', role: 'Project Manager', text: 'Their MEP estimation services are second to none. The turnaround time and accuracy have been consistently exceptional.', img: testimonialImages[1] },
    { name: 'Michael Chen', role: 'Commercial Developer', text: "We've been using Oz Estimations for 3 years. Their structural trade estimates are always spot-on and delivered on time.", img: testimonialImages[2] },
  ];

  return (
    <section className="py-16 md:py-24 bg-navy-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by contractors, developers, and construction firms across the nation."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-navy border border-white/5 rounded-2xl p-6 md:p-8 h-full hover:border-gold/20 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <HiOutlineStar key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-slate-custom text-sm md:text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.img} alt={t.name} width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-custom text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomeContent() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <WorkProcess />
      <TestimonialsSection />
      <AreaGrid />
      <CTABanner />
    </>
  );
}
