'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark, HiChevronDown, HiPhone, HiEnvelope } from 'react-icons/hi2';
import { navigation } from '@/data/navigation';
import { CONTACT } from '@/lib/constants';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-navy-dark via-navy-light to-navy-dark border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-xs text-slate-custom">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT.phone1}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <HiPhone className="w-3 h-3 text-gold/60" /> {CONTACT.phone1}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <HiEnvelope className="w-3 h-3 text-gold/60" /> {CONTACT.email}
            </a>
          </div>
          <div className="shimmer-text font-semibold tracking-wide">Professional Construction Cost Estimation Services</div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-navy/80 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-white/[0.06]' 
            : 'bg-navy/40 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children ? handleMouseEnter(item.label) : null}
                  onMouseLeave={item.children ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                        ? 'text-gold'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {item.children && <HiChevronDown className="w-3 h-3" />}
                  </Link>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 glass rounded-2xl shadow-2xl shadow-black/50 p-6 min-w-[700px] z-50 border-gradient"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                          {item.children.map((category) => (
                            <div key={category.label}>
                              <Link
                                href={category.href}
                                className="text-gold font-semibold text-sm hover:text-amber transition-colors mb-2 block"
                              >
                                {category.label}
                              </Link>
                              {category.children && (
                                <ul className="space-y-1">
                                  {category.children.map((sub) => (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        className="text-slate-custom text-xs hover:text-white transition-colors block py-0.5"
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/get-estimation"
                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-gold to-amber text-navy font-bold text-sm px-6 py-2.5 rounded-xl hover:from-amber hover:to-gold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25 shimmer-btn"
              >
                Get Free Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
