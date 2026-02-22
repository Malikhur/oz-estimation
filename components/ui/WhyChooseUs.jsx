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
    <section className={`py-16 md:py-20 ${light ? 'bg-light' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-navy' : 'text-white'}`}>
            Why Choose Oz Estimations?
          </h2>
          <p className={`max-w-2xl mx-auto ${light ? 'text-navy/70' : 'text-slate-custom'}`}>
            We deliver precise, reliable cost estimations that help you win more bids and complete projects on budget.
          </p>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = iconMap[i] || HiOutlineShieldCheck;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`rounded-2xl p-6 md:p-8 h-full border transition-all hover:scale-[1.02] ${
                  light ? 'bg-white border-gray-200 hover:border-gold/40 hover:shadow-lg' : 'bg-navy-light border-white/5 hover:border-gold/20'
                }`}>
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-gold" />
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
