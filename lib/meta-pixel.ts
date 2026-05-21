/** Meta Pixel ID — set NEXT_PUBLIC_META_PIXEL_ID in Vercel / .env.local */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export type MetaStandardEvent = "PageView" | "Lead";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

function fbq(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq(...args);
}

export function trackMetaEvent(
  event: MetaStandardEvent,
  params?: Record<string, string>
) {
  fbq("track", event, params);
}

