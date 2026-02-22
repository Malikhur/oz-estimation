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
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImages.home}
          alt="Construction site aerial view"
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      </div>

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-amber/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-4xl">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/[0.08] border border-gold/20 rounded-full px-5 py-2 mb-10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-xs md:text-sm font-semibold tracking-wide">Trusted by 1000+ Contractors Nationwide</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-3 md:mr-4"
              >
                {i === 0 ? <span className="text-gradient-gold">{word}</span> : word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block"
            >
              Construction Estimations
            </motion.span>
          </h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-slate-custom text-lg md:text-xl lg:text-2xl max-w-2xl mb-12 leading-relaxed font-light"
          >
            We deliver precise, detailed cost estimations for residential, commercial, and industrial construction projects. Win more bids with confidence.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
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
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-16 flex flex-wrap items-center gap-8 text-slate-custom text-xs md:text-sm"
          >
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white/[0.03] rounded-full px-4 py-2 border border-white/[0.06]">
                <HiOutlineShieldCheck className="w-4 h-4 text-gold" />
                <span className="font-medium">{badge.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(212,168,67,0.4) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="glass-card rounded-2xl p-2 transition-all duration-500 hover:glow-gold">
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Offer"
          title="Our Estimation Services"
          subtitle="Comprehensive cost estimation solutions for every construction trade and project type."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
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
        <AnimatedSection className="text-center mt-14">
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
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by contractors, developers, and construction firms across the nation."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass-card rounded-2xl p-7 md:p-9 h-full transition-all duration-500 hover:translate-y-[-4px] hover:glow-gold group">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <HiOutlineStar key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                {/* Decorative quote */}
                <div className="text-gold/10 text-6xl font-serif leading-none mb-2">&ldquo;</div>
                <p className="text-slate-custom text-sm md:text-base leading-relaxed mb-8 -mt-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gold/20 group-hover:ring-gold/50 transition-all">
                    <Image src={t.img} alt={t.name} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-gold/60 text-xs font-medium">{t.role}</div>
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
