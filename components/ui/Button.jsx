import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', className = '', onClick, type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 cursor-pointer text-sm md:text-base';
  
  const variants = {
    primary: 'bg-gradient-to-r from-gold to-amber text-navy px-7 py-3.5 hover:from-amber hover:to-gold hover:shadow-xl hover:shadow-gold/25 hover:scale-105 shimmer-btn',
    secondary: 'border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold px-7 py-3.5 hover:scale-105 hover:shadow-lg hover:shadow-gold/10 backdrop-blur-sm',
    ghost: 'text-gold hover:text-amber px-4 py-2 hover:underline underline-offset-4',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
