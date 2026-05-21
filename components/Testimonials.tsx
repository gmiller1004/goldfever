import {
  featuredTestimonial,
  testimonials,
} from "@/content/landing";

export function Testimonials() {
  return (
    <section className="border-y border-gpaa-cream-dark bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold tracking-widest text-gpaa-gold-dark uppercase">
          Real prospectors. Real gold.
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gpaa-slate sm:text-4xl">
          They Started Skeptical Too
        </h2>

        <blockquote className="mx-auto mt-12 max-w-3xl rounded-2xl border-2 border-gpaa-gold/30 bg-gpaa-cream px-8 py-10 text-center shadow-sm">
          <p className="text-lg leading-relaxed text-gpaa-slate italic sm:text-xl">
            &ldquo;{featuredTestimonial.quote}&rdquo;
          </p>
          <footer className="mt-6">
            <p className="font-bold text-gpaa-slate">
              {featuredTestimonial.author}
            </p>
            <p className="text-sm text-gpaa-slate-muted">
              {featuredTestimonial.location} ·{" "}
              <span className="text-gpaa-gold-dark">
                {featuredTestimonial.highlight}
              </span>
            </p>
          </footer>
        </blockquote>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-xl border border-gpaa-cream-dark bg-white p-5"
            >
              <p className="text-sm leading-relaxed text-gpaa-slate-muted italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-gpaa-slate">
                {t.author}
                <span className="font-normal text-gpaa-slate-muted">
                  , {t.location}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gpaa-slate-muted">
          Reviews from{" "}
          <a
            href="https://www.goldprospectors.org/join"
            className="underline underline-offset-2 hover:text-gpaa-slate"
            target="_blank"
            rel="noopener noreferrer"
          >
            goldprospectors.org/join
          </a>
        </p>
      </div>
    </section>
  );
}
