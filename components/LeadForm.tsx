"use client";

import { withBasePath } from "@/lib/paths";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type LeadFormProps = {
  id?: string;
  compact?: boolean;
  headline?: string;
  subhead?: string;
  dark?: boolean;
};

export function LeadForm({
  id = "claim-book",
  compact = false,
  headline = "Send Me The Free Guide",
  subhead = "Instant PDF + EPUB + full Gold Fever episode. No credit card.",
  dark = false,
}: LeadFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(withBasePath("/api/subscribe"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          consent,
          website: honeypot,
        }),
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      router.push("/thank-you");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const cardClass = dark
    ? "border-gpaa-gold/30 bg-white shadow-2xl shadow-black/25"
    : "border-gpaa-cream-dark bg-white shadow-xl shadow-gpaa-slate/10";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`relative rounded-2xl border p-6 sm:p-8 ${cardClass} ${compact ? "" : ""}`}
    >
      {!compact && (
        <div className="mb-5 border-b border-gpaa-cream-dark pb-5">
          <h3 className="text-xl font-bold text-gpaa-slate sm:text-2xl">
            {headline}
          </h3>
          <p className="mt-1 text-sm text-gpaa-slate-muted">{subhead}</p>
        </div>
      )}

      <div className="space-y-4">
        {!compact && (
          <div>
            <label
              htmlFor={`${id}-firstName`}
              className="mb-1 block text-sm font-medium text-gpaa-slate-muted"
            >
              First name <span className="font-normal">(optional)</span>
            </label>
            <input
              id={`${id}-firstName`}
              type="text"
              name="firstName"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border border-gpaa-cream-dark px-3 py-2.5 text-gpaa-slate outline-none focus:border-gpaa-gold focus:ring-2 focus:ring-gpaa-gold/25"
              placeholder="Your first name"
            />
          </div>
        )}

        <div>
          <label
            htmlFor={`${id}-email`}
            className="mb-1 block text-sm font-medium text-gpaa-slate-muted"
          >
            Email <span className="text-gpaa-gold-dark">*</span>
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gpaa-cream-dark px-3 py-2.5 text-gpaa-slate outline-none focus:border-gpaa-gold focus:ring-2 focus:ring-gpaa-gold/25"
            placeholder="you@example.com"
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-gpaa-slate-muted sm:text-sm">
          <input
            type="checkbox"
            name="consent"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 size-4 shrink-0 rounded border-gpaa-cream-dark text-gpaa-gold focus:ring-gpaa-gold"
          />
          <span>
            Send me the free guide and occasional GPAA emails. Unsubscribe
            anytime.{" "}
            <a
              href="https://www.goldprospectors.org/privacy"
              className="text-gpaa-river underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </span>
        </label>

        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          aria-hidden
        />

        {error && (
          <p
            className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800"
            role="alert"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-gpaa-gold px-6 py-4 text-base font-bold tracking-wide text-gpaa-slate uppercase transition hover:bg-gpaa-gold-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending…" : "Get My Free Guide →"}
        </button>
      </div>
    </form>
  );
}
