export default function ContactCard({ icon, label, children }) {
  return (
    <div className="glass-card rounded-2xl p-7 transition-all duration-500 hover:translate-y-[-4px] hover:glow-gold">
      <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-amber/10 rounded-2xl flex items-center justify-center mb-5 text-gold text-xl">
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{label}</h3>
      <div className="text-slate-custom text-sm md:text-base leading-relaxed">{children}</div>
    </div>
  );
}
