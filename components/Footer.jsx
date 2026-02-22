import Link from 'next/link';
import { CONTACT, SITE } from '@/lib/constants';
import { serviceCategories } from '@/data/services';
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-slate-custom text-sm leading-relaxed mb-6">
              {SITE.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceCategories.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/services/${cat.slug}`} className="text-slate-custom text-sm hover:text-gold transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-custom text-sm hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-custom text-sm hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-custom text-sm hover:text-gold transition-colors">All Services</Link></li>
              <li><Link href="/get-estimation" className="text-slate-custom text-sm hover:text-gold transition-colors">Get Estimation</Link></li>
              <li><Link href="/faqs" className="text-slate-custom text-sm hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-custom text-sm hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact Us</h3>
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
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-custom">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span>|</span>
            <span>Designed with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
