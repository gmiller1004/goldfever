import { trustBar } from "@/content/landing";

export function TrustBar() {
  return (
    <section
      className="border-b border-gpaa-cream-dark bg-white px-4 py-6"
      aria-label="Quick facts"
    >
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {trustBar.map((item) => (
          <li key={item.label} className="text-center sm:text-left">
            <p className="text-sm font-bold text-gpaa-slate sm:text-base">
              {item.label}
            </p>
            <p className="text-xs text-gpaa-slate-muted sm:text-sm">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
