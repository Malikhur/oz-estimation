import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import StatCounter from '@/components/ui/StatCounter';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import WorkProcess from '@/components/ui/WorkProcess';
import CTABanner from '@/components/ui/CTABanner';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { STATS, CONTACT } from '@/lib/constants';
import { heroImages, aboutImages } from '@/data/images';
import { HiOutlineBuildingOffice2, HiOutlineUserGroup, HiOutlineTrophy, HiOutlineGlobeAmericas } from 'react-icons/hi2';

export const metadata = {
  title: 'About Us — Expert Construction Cost Estimators',
  description: 'Learn about Oz Estimations — a team of experienced construction cost estimators with 10+ years of experience delivering accurate, reliable estimations for 5,000+ projects across all 50 US states.',
  keywords: ['about oz estimations', 'construction estimating company', 'estimating team', 'construction cost experts', 'who we are'],
  alternates: { canonical: 'https://ozestimations.com/about' },
  openGraph: {
    title: 'About Us | Oz Estimations',
    description: '10+ years experience. 5,000+ projects estimated. 98% accuracy. Meet the team behind Oz Estimations.',
    url: 'https://ozestimations.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImages.about} alt="About Oz Estimations" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/50 to-navy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gold">Oz Estimations</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">
              We are a team of dedicated construction cost estimation professionals committed to helping contractors, developers, and builders win more bids with precise, reliable estimates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-custom leading-relaxed mb-4">
                At Oz Estimations, we believe every construction project deserves a precise, comprehensive cost estimate. Our mission is to empower contractors, builders, and developers with the financial clarity they need to bid confidently and execute projects successfully.
              </p>
              <p className="text-slate-custom leading-relaxed mb-4">
                Founded by industry professionals with decades of combined experience, we understand the challenges of construction bidding. Inaccurate estimates lead to lost bids, budget overruns, and project delays. That&apos;s why we leverage cutting-edge estimating software and proven methodologies to deliver estimates you can trust.
              </p>
              <p className="text-slate-custom leading-relaxed">
                Whether you&apos;re working on a residential renovation or a multi-million dollar commercial development, our team is here to provide the detailed takeoffs and cost breakdowns you need to succeed.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image src={aboutImages.mission} alt="Construction site" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: HiOutlineBuildingOffice2, title: 'Experience', desc: '10+ years in cost estimation' },
                  { icon: HiOutlineUserGroup, title: 'Team', desc: 'Expert certified estimators' },
                  { icon: HiOutlineTrophy, title: 'Track Record', desc: '5,000+ projects estimated' },
                  { icon: HiOutlineGlobeAmericas, title: 'Coverage', desc: 'All 50 US states served' },
                ].map((item, i) => (
                  <div key={i} className="bg-navy-light border border-white/5 rounded-2xl p-6 hover:border-gold/20 transition-all">
                    <item.icon className="w-8 h-8 text-gold mb-3" />
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-custom text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-navy-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every estimation we deliver."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Accuracy First', desc: 'We triple-check every calculation. Our meticulous approach ensures estimates within 2-5% of actual costs, giving you the confidence to bid competitively.' },
              { title: 'Timely Delivery', desc: 'Deadlines matter in construction. We deliver most estimates within 24-48 hours without sacrificing quality, keeping your bidding process on track.' },
              { title: 'Client Partnership', desc: 'We see ourselves as an extension of your team. Open communication, transparency, and personalized service define our client relationships.' },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-navy border border-white/5 rounded-2xl p-6 md:p-8 h-full hover:border-gold/20 transition-all">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gold font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{v.title}</h3>
                  <p className="text-slate-custom text-sm md:text-base leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <WorkProcess />
      <CTABanner />
    </>
  );
}
