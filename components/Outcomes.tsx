import { outcomes } from "@/content/landing";

export function Outcomes() {
  return (
    <section className="bg-gpaa-slate px-4 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gpaa-gold-light uppercase">
            Inside the guide
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {outcomes.headline}
          </h2>
          <p className="mt-3 text-lg text-white/75">{outcomes.subhead}</p>
        </div>

        <ol className="mt-12 space-y-6">
          {outcomes.items.map((item) => (
            <li
              key={item.step}
              className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8"
            >
              <span
                className="text-4xl font-bold leading-none text-gpaa-gold/80 sm:text-5xl"
                aria-hidden
              >
                {item.step}
              </span>
              <div>
                <h3 className="text-xl font-bold text-gpaa-gold-light sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-white/80">
                  {item.description}
                </p>
                <p className="mt-3 text-sm font-semibold text-gpaa-gold-light">
                  → {item.payoff}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
