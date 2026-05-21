import { hero } from "@/content/landing";
import { IMAGES } from "@/lib/images";
import { ContentImage } from "./ContentImage";
import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="hero-pattern relative overflow-hidden px-4 py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gpaa-gold/40 bg-gpaa-gold/10 px-3 py-1 text-xs font-semibold tracking-wide text-gpaa-gold-light uppercase">
            <span className="size-1.5 rounded-full bg-gpaa-gold" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {hero.headline}
            <span className="mt-1 block text-gpaa-gold-light">
              {hero.headlineAccent}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            {hero.subhead}
          </p>

          <ul className="mt-8 space-y-3">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm sm:text-base">
                <span
                  className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-gpaa-gold text-xs font-bold text-gpaa-slate"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-white/90">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden overflow-hidden rounded-xl ring-2 ring-white/10 sm:block lg:mt-10">
            <ContentImage
              src={IMAGES.tomFamilyGoldPan}
              alt="Tom Massie with prospectors showing gold in a pan"
              aspect="video"
              objectPosition="center 30%"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <LeadForm
            headline={hero.formHeadline}
            subhead={hero.formSubhead}
            dark
          />
        </div>
      </div>
    </section>
  );
}
