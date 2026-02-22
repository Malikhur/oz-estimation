'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

export default function ServiceCard({ title, description, href, image, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  const card = (
    <div className="group relative bg-navy-light border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
      {image && (
        <div className="relative w-full h-44 sm:h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy-light/40 to-transparent" />
        </div>
      )}
      <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-slate-custom text-xs sm:text-sm md:text-base leading-relaxed flex-grow mb-3 sm:mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-gold text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all">
          Learn More <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
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
