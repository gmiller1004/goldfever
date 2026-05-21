import { painPoints } from "@/content/landing";

export function PainPoints() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gpaa-slate sm:text-4xl">
            {painPoints.headline}
          </h2>
          <p className="mt-3 text-lg text-gpaa-slate-muted">
            {painPoints.subhead}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {painPoints.items.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-gpaa-cream-dark bg-white p-6 shadow-sm transition hover:border-gpaa-gold/40"
            >
              <h3 className="text-lg font-bold text-gpaa-slate">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gpaa-slate-muted sm:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
