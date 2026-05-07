export function SectionTitle({ icon = "⚓", children }: { icon?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-14">
      <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="text-gold text-xl">{icon}</span>
      <h2 className="font-display text-2xl md:text-3xl tracking-[0.3em] gold-gradient-text">{children}</h2>
      <span className="text-gold text-xl">{icon}</span>
      <span className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
