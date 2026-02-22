'use client';

import AnimatedSection from './AnimatedSection';
import { allAreas } from '@/data/areas';
import { HiOutlineMapPin } from 'react-icons/hi2';

export default function AreaGrid() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wide uppercase bg-gold/10 text-gold border border-gold/20">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Nationwide Coverage
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">We Serve Across the USA</h2>
          <p className="text-slate-custom max-w-2xl mx-auto text-base md:text-lg">Our estimation services are available across all major states in the United States.</p>
          <div className="mt-6 flex items-center gap-1 justify-center">
            <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-gold to-amber rounded-full" />
            <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {allAreas.map((area, i) => (
            <AnimatedSection key={area} delay={i * 0.015}>
              <div className="glass-card rounded-xl p-3.5 text-center transition-all duration-300 group hover:translate-y-[-2px]">
                <HiOutlineMapPin className="w-4 h-4 text-gold/50 mx-auto mb-1.5 group-hover:text-gold group-hover:scale-110 transition-all" />
                <span className="text-slate-custom text-xs md:text-sm group-hover:text-white transition-colors font-medium">{area}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
