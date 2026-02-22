'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

export default function ServiceCard({ title, description, href, image, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  const card = (
    <div className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col hover:translate-y-[-4px]">
      {/* Gradient border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.15) 0%, transparent 50%, rgba(212,168,67,0.1) 100%)' }} />
      
      {image && (
        <div className="relative w-full h-48 sm:h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy-light/50 to-transparent" />
          {/* Gold accent line at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      <div className="relative p-5 sm:p-6 md:p-7 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gradient-gold transition-all duration-300">
          {title}
        </h3>
        <p className="text-slate-custom text-xs sm:text-sm md:text-base leading-relaxed flex-grow mb-3 sm:mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-gold text-xs sm:text-sm font-semibold group-hover:gap-4 transition-all duration-300">
          Learn More <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );

  const wrappedCard = shouldReduceMotion ? (
    card
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      {card}
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{wrappedCard}</Link>;
  }

  return wrappedCard;
}
