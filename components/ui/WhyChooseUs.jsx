'use client';

import AnimatedSection from './AnimatedSection';
import { WHY_CHOOSE } from '@/lib/constants';
import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineUserGroup, HiOutlineDocumentCheck, HiOutlineTrophy } from 'react-icons/hi2';

const iconMap = {
  0: HiOutlineShieldCheck,
  1: HiOutlineClock,
  2: HiOutlineCurrencyDollar,
  3: HiOutlineUserGroup,
  4: HiOutlineDocumentCheck,
  5: HiOutlineTrophy,
};

export default function WhyChooseUs({ light = false }) {
  return (
    <section className={`relative py-20 md:py-28 overflow-hidden ${light ? 'bg-light' : ''}`}>
      {/* Ambient orb */}
      {!light && <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wide uppercase bg-gold/10 text-gold border border-gold/20">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Our Advantages
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight ${light ? 'text-navy' : 'text-white'}`}>
            Why Choose Oz Estimations?
          </h2>
          <p className={`max-w-2xl mx-auto text-base md:text-lg ${light ? 'text-navy/70' : 'text-slate-custom'}`}>
            We deliver precise, reliable cost estimations that help you win more bids and complete projects on budget.
          </p>
          <div className="mt-6 flex items-center gap-1 justify-center">
            <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-gold to-amber rounded-full" />
            <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = iconMap[i] || HiOutlineShieldCheck;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`rounded-2xl p-7 md:p-9 h-full transition-all duration-500 hover:translate-y-[-4px] ${
                  light ? 'bg-white border border-gray-200 hover:border-gold/40 hover:shadow-xl' : 'glass-card hover:glow-gold'
                }`}>
                  <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-amber/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${light ? 'text-navy' : 'text-white'}`}>{item.title}</h3>
                  <p className={`text-sm md:text-base leading-relaxed ${light ? 'text-navy/70' : 'text-slate-custom'}`}>{item.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
