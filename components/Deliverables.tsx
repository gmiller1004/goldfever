import Image from "next/image";
import { deliverables } from "@/content/landing";
import { IMAGES } from "@/lib/images";

export function Deliverables() {
  return (
    <section className="bg-gpaa-cream-dark/50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gpaa-slate sm:text-4xl">
              {deliverables.headline}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-gpaa-slate-muted">
              {deliverables.subhead}
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
              {deliverables.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-gpaa-cream-dark bg-white p-5 shadow-sm sm:p-6 lg:flex lg:gap-4"
                >
                  <span className="inline-block rounded-md bg-gpaa-gold/15 px-2.5 py-1 text-xs font-bold tracking-wider text-gpaa-gold-dark uppercase">
                    {item.tag}
                  </span>
                  <div className="lg:mt-0">
                    <h3 className="mt-3 text-lg font-bold text-gpaa-slate lg:mt-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gpaa-slate-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto hidden w-full max-w-[220px] lg:block">
            <Image
              src={IMAGES.ebookCover}
              alt=""
              width={440}
              height={580}
              className="h-auto w-full drop-shadow-xl"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
