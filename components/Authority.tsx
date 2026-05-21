import { authority } from "@/content/landing";
import { IMAGES } from "@/lib/images";
import { ContentImage } from "./ContentImage";

export function Authority() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <ContentImage
          src={IMAGES.tomKaelGlacier}
          alt="Tom Massie and his son Kael prospecting with dredge equipment at a glacier"
          aspect="video"
          objectPosition="center 40%"
        />

        <div>
          <h2 className="text-3xl font-bold text-gpaa-slate sm:text-4xl">
            {authority.headline}
          </h2>

          <blockquote className="mt-6 border-l-4 border-gpaa-gold pl-5 text-lg font-medium italic text-gpaa-slate sm:text-xl">
            &ldquo;{authority.pullQuote}&rdquo;
            <footer className="mt-2 text-sm font-semibold not-italic text-gpaa-slate-muted">
              — Tom Massie
            </footer>
          </blockquote>

          {authority.paragraphs.map((p) => (
            <p
              key={p.slice(0, 48)}
              className="mt-4 leading-relaxed text-gpaa-slate-muted"
            >
              {p}
            </p>
          ))}

          <ul className="mt-6 flex flex-wrap gap-2">
            {authority.credentials.map((cred) => (
              <li
                key={cred}
                className="rounded-full border border-gpaa-cream-dark bg-white px-3 py-1 text-xs font-semibold text-gpaa-slate-muted"
              >
                {cred}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
