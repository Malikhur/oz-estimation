'use client';

import AnimatedSection from './AnimatedSection';
import { allAreas } from '@/data/areas';
import { HiOutlineMapPin } from 'react-icons/hi2';

export default function AreaGrid() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We Serve Across the USA</h2>
          <p className="text-slate-custom max-w-2xl mx-auto">Our  estimation services are available across all major states in the United States.</p>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {allAreas.map((area, i) => (
            <AnimatedSection key={area} delay={i * 0.02}>
              <div className="bg-navy-light border border-white/5 rounded-xl p-3 text-center hover:border-gold/20 transition-all group">
                <HiOutlineMapPin className="w-4 h-4 text-gold mx-auto mb-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-slate-custom text-xs md:text-sm group-hover:text-white transition-colors">{area}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
