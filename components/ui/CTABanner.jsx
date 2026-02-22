import Button from './Button';
import AnimatedSection from './AnimatedSection';

export default function CTABanner({ title = 'Ready to Get Started?', subtitle = 'Get a detailed, accurate estimate for your construction project today.', buttonText = 'Get Free Estimation', buttonHref = '/get-estimation' }) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-gold/10 via-amber/5 to-gold/10 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-custom text-base md:text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
          <Button href={buttonHref} variant="primary">{buttonText}</Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
