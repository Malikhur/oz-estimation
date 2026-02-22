import Link from 'next/link';
import { CONTACT, SITE } from '@/lib/constants';
import { serviceCategories } from '@/data/services';
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-navy-light to-navy-dark overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold/[0.03] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Logo />
            </div>
            <p className="text-slate-custom text-sm leading-relaxed mb-6">
              {SITE.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <div className="divider-gold mb-5" />
            <ul className="space-y-2.5">
              {serviceCategories.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/services/${cat.slug}`} className="text-slate-custom text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <div className="divider-gold mb-5" />
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-slate-custom text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link href="/about" className="text-slate-custom text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/services" className="text-slate-custom text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">All Services</Link></li>
              <li><Link href="/get-estimation" className="text-slate-custom text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">Get Estimation</Link></li>
              <li><Link href="/faqs" className="text-slate-custom text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-custom text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <div className="divider-gold mb-5" />
            <ul className="space-y-4">
              <li>
                <a href={`tel:${CONTACT.phone1}`} className="flex items-start gap-3 text-slate-custom text-sm hover:text-gold transition-colors">
                  <HiPhone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>{CONTACT.phone1}<br />{CONTACT.phone2}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 text-slate-custom text-sm hover:text-gold transition-colors">
                  <HiEnvelope className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-custom text-sm">
                <HiMapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>{CONTACT.address1.full}<br />{CONTACT.address2.full}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative">
        <div className="divider-gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-custom">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="text-gold/30">|</span>
            <span className="text-gold/40 font-medium">Designed with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
