'use client';

import AnimatedSection from './AnimatedSection';
import { WORK_PROCESS } from '@/lib/constants';

export default function WorkProcess({ light = false }) {
  return (
    <section className={`py-16 md:py-20 ${light ? 'bg-light' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-navy' : 'text-white'}`}>
            How It Works
          </h2>
          <p className={`max-w-2xl mx-auto ${light ? 'text-navy/70' : 'text-slate-custom'}`}>
            Our streamlined process ensures accurate estimations delivered on time, every time.
          </p>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className={`relative rounded-2xl p-6 md:p-8 h-full border text-center transition-all ${
                light ? 'bg-white border-gray-200' : 'bg-navy-light border-white/5'
              }`}>
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-gold text-xl font-bold">{step.step}</span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${light ? 'text-navy' : 'text-white'}`}>{step.title}</h3>
                <p className={`text-sm md:text-base leading-relaxed ${light ? 'text-navy/70' : 'text-slate-custom'}`}>{step.desc}</p>
                {i < WORK_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gold/30">
                    →
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
