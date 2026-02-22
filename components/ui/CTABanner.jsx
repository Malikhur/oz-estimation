import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { HiArrowRight } from 'react-icons/hi2';

export default function CTABanner({ title = 'Ready to Get Started?', subtitle = 'Get a detailed, accurate estimate for your construction project today.', buttonText = 'Get Free Estimation', buttonHref = '/get-estimation' }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-light to-navy-dark" />
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.04] rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(rgba(212,168,67,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold tracking-wide uppercase bg-gold/10 text-gold border border-gold/20">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Get Started Today
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">{title}</h2>
          <p className="text-slate-custom text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">{subtitle}</p>
          <Button href={buttonHref} variant="primary">
            {buttonText} <HiArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
