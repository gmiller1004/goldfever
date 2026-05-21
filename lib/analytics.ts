import { BOOK_TITLE } from "@/lib/constants";
import { trackGaGenerateLead } from "@/lib/google-analytics";
import { trackMetaEvent } from "@/lib/meta-pixel";

const GUIDE_LEAD_KEY = "gf_guide_lead_tracked";

const leadParams = {
  content_name: BOOK_TITLE,
  content_category: "lead_magnet",
};

/**
 * One conversion per session — fires Meta Lead + GA4 generate_lead.
 * Call on successful subscribe (form) and thank-you page.
 */
export function trackGuideLeadOnce() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(GUIDE_LEAD_KEY)) return;
    sessionStorage.setItem(GUIDE_LEAD_KEY, "1");
  } catch {
    /* private browsing */
  }

  trackMetaEvent("Lead", leadParams);
  trackGaGenerateLead({
    ...leadParams,
    method: "lead_form",
  });
}
