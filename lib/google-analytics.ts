/** GA4 measurement ID — set NEXT_PUBLIC_GA_MEASUREMENT_ID in Vercel / .env.local */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

export function trackGaPageView(pagePath: string) {
  if (!GA_MEASUREMENT_ID) return;
  gtag("config", GA_MEASUREMENT_ID, { page_path: pagePath });
}

/** GA4 recommended event for ebook / guide signups */
export function trackGaGenerateLead(params?: Record<string, string>) {
  gtag("event", "generate_lead", params);
}
