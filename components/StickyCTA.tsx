export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gpaa-cream-dark bg-white/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md lg:hidden">
      <a
        href="#claim-book"
        className="flex w-full items-center justify-center rounded-lg bg-gpaa-gold py-3.5 text-sm font-bold tracking-wide text-gpaa-slate uppercase"
      >
        Get My Free Guide →
      </a>
    </div>
  );
}
