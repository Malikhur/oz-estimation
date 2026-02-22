import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', className = '', onClick, type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer text-sm md:text-base';
  
  const variants = {
    primary: 'bg-gold text-navy hover:bg-amber px-6 py-3 hover:shadow-lg hover:shadow-gold/20 hover:scale-105',
    secondary: 'border-2 border-gold text-gold hover:bg-gold hover:text-navy px-6 py-3 hover:scale-105',
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
