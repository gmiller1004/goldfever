import { ctaFinal } from "@/content/landing";
import { LeadForm } from "./LeadForm";

export function FinalCTA() {
  return (
    <section className="hero-pattern px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="text-white">
          <p className="text-sm font-semibold tracking-widest text-gpaa-gold-light uppercase">
            {ctaFinal.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-[2.5rem]">
            {ctaFinal.headline}
          </h2>
          <p className="mt-4 text-lg text-white/80">{ctaFinal.subhead}</p>

          <ul className="mt-8 space-y-3 text-sm text-white/75 sm:text-base">
            <li className="flex gap-2">
              <span className="text-gpaa-gold" aria-hidden>
                ✓
              </span>
              PDF + EPUB — yours forever
            </li>
            <li className="flex gap-2">
              <span className="text-gpaa-gold" aria-hidden>
                ✓
              </span>
              Full 45-minute Gold Fever episode
            </li>
            <li className="flex gap-2">
              <span className="text-gpaa-gold" aria-hidden>
                ✓
              </span>
              No membership required to download
            </li>
          </ul>
        </div>

        <LeadForm
          id="claim-book-final"
          headline={ctaFinal.formHeadline}
          subhead={ctaFinal.formSubhead}
          dark
        />
      </div>
    </section>
  );
}
