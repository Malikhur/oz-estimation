export default function ContactCard({ icon, label, children }) {
  return (
    <div className="bg-navy-light border border-white/5 rounded-2xl p-6 hover:border-gold/20 transition-all">
      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 text-gold text-xl">
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{label}</h3>
      <div className="text-slate-custom text-sm md:text-base leading-relaxed">{children}</div>
    </div>
  );
}
