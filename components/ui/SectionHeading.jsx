'use client';

import AnimatedSection from './AnimatedSection';

export default function SectionHeading({ title, subtitle, centered = true, light = false, badge }) {
  return (
    <AnimatedSection className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wide uppercase ${
          light ? 'bg-gold/10 text-gold border border-gold/20' : 'bg-gold/10 text-gold border border-gold/20'
        }`}>
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight ${light ? 'text-navy' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-navy/70' : 'text-slate-custom'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-1 ${centered ? 'justify-center' : ''}`}>
        <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
        <div className="h-[2px] w-16 bg-gradient-to-r from-gold to-amber rounded-full" />
        <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
      </div>
    </AnimatedSection>
  );
}
