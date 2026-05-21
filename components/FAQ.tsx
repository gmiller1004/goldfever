import { faqs } from "@/content/landing";

export function FAQ() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-gpaa-slate">
          Straight Answers
        </h2>
        <p className="mt-2 text-center text-gpaa-slate-muted">
          No fine print. No bait-and-switch.
        </p>

        <dl className="mt-10 divide-y divide-gpaa-cream-dark rounded-2xl border border-gpaa-cream-dark bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-6 py-5">
              <summary className="cursor-pointer list-none font-bold text-gpaa-slate marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span
                    className="text-gpaa-gold transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <dd className="mt-3 pb-1 text-sm leading-relaxed text-gpaa-slate-muted sm:text-base">
                {faq.answer}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
