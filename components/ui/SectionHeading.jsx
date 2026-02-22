'use client';

import AnimatedSection from './AnimatedSection';

export default function SectionHeading({ title, subtitle, centered = true, light = false }) {
  return (
    <AnimatedSection className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${light ? 'text-navy' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-navy/70' : 'text-slate-custom'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gold rounded-full ${centered ? 'mx-auto' : ''}`} />
    </AnimatedSection>
  );
}
