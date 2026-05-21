import Image from "next/image";
import Link from "next/link";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { thankYou } from "@/content/thank-you";
import { BOOK_TITLE, LINKS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

function StepBadge({ number }: { number: string }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gpaa-gold text-sm font-bold text-gpaa-slate">
      {number}
    </span>
  );
}

export function ThankYouContent() {
  return (
    <main className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div
            className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-gpaa-gold/20 text-2xl text-gpaa-gold-dark"
            aria-hidden
          >
            ✓
          </div>
          <p className="text-sm font-semibold tracking-widest text-gpaa-gold-dark uppercase">
            {thankYou.eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gpaa-slate sm:text-4xl">
            {thankYou.headline}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gpaa-slate-muted">
            {thankYou.subhead}
          </p>
        </div>

        <section className="mt-10 rounded-2xl border border-gpaa-cream-dark bg-white p-6 shadow-sm sm:p-8">
          <div className="flex gap-4">
            <StepBadge number={thankYou.steps.download.step} />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold text-gpaa-slate">
                {thankYou.steps.download.title}
              </h2>
              <p className="mt-1 text-sm text-gpaa-slate-muted sm:text-base">
                {thankYou.steps.download.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={LINKS.pdf}
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-gpaa-gold px-6 py-3.5 font-bold text-gpaa-slate uppercase transition hover:bg-gpaa-gold-dark hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </a>
                <a
                  href={LINKS.epub}
                  className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-gpaa-gold px-6 py-3.5 font-bold text-gpaa-slate uppercase transition hover:bg-gpaa-cream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download EPUB
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-gpaa-cream-dark pt-6">
                <Image
                  src={IMAGES.ebookCover}
                  alt={BOOK_TITLE}
                  width={80}
                  height={104}
                  className="h-auto w-16 shrink-0 drop-shadow-md sm:w-20"
                />
                <p className="text-xs text-gpaa-slate-muted sm:text-sm">
                  <em>{BOOK_TITLE}</em> by Tom Massie
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-gpaa-cream-dark bg-white p-6 shadow-sm sm:p-8">
          <div className="flex gap-4">
            <StepBadge number={thankYou.steps.video.step} />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold text-gpaa-slate">
                {thankYou.steps.video.title}
              </h2>
              <p className="mt-1 text-sm text-gpaa-slate-muted sm:text-base">
                {thankYou.steps.video.description}
              </p>
              <div className="mt-5 overflow-hidden rounded-xl border border-gpaa-cream-dark">
                <YouTubeEmbed title="Full Gold Fever episode with Tom Massie" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border-2 border-gpaa-gold/50 bg-gradient-to-br from-gpaa-cream to-white shadow-sm">
          <div className="border-b border-gpaa-gold/20 bg-gpaa-gold/10 px-6 py-3">
            <p className="text-center text-xs font-bold tracking-widest text-gpaa-gold-dark uppercase">
              {thankYou.panOffer.badge}
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex gap-4">
              <StepBadge number={thankYou.steps.pan.step} />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold text-gpaa-slate sm:text-2xl">
                  {thankYou.panOffer.headline}
                </h2>
                <p className="mt-2 text-gpaa-slate-muted">{thankYou.panOffer.body}</p>
                <ul className="mt-4 space-y-2">
                  {thankYou.panOffer.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-gpaa-slate-muted"
                    >
                      <span className="text-gpaa-gold-dark" aria-hidden>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={LINKS.freeGoldPanCheckout}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-gpaa-slate px-6 py-4 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-gpaa-river sm:w-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {thankYou.steps.pan.cta}
                  </a>
                  <a
                    href={LINKS.freeGoldPan}
                    className="inline-flex w-full items-center justify-center rounded-lg border-2 border-gpaa-slate/20 px-6 py-3 text-sm font-semibold text-gpaa-slate transition hover:border-gpaa-gold hover:text-gpaa-gold-dark sm:w-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {thankYou.steps.pan.ctaSecondary}
                  </a>
                </div>
                <p className="mt-3 text-center text-xs text-gpaa-slate-muted sm:text-left">
                  {thankYou.steps.pan.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-gpaa-cream-dark bg-gpaa-slate px-6 py-8 text-gpaa-cream sm:px-8">
          <h2 className="text-lg font-bold text-gpaa-gold-light">
            {thankYou.emailTease.headline}
          </h2>
          <p className="mt-2 leading-relaxed text-white/85">
            {thankYou.emailTease.body}
          </p>
          <p className="mt-4 text-sm text-white/60">
            {thankYou.emailTease.footnote}
          </p>
        </section>

        <p className="mt-8 text-center text-sm text-gpaa-slate-muted">
          Wrong email?{" "}
          <Link
            href="/"
            className="font-medium text-gpaa-river underline underline-offset-2"
          >
            Go back and sign up again
          </Link>
        </p>
      </div>
    </main>
  );
}
