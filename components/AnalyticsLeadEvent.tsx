"use client";

import { useEffect } from "react";
import { trackGuideLeadOnce } from "@/lib/analytics";

/** Meta Lead + GA4 generate_lead on thank-you (cookie-gated). */
export function AnalyticsLeadEvent() {
  useEffect(() => {
    trackGuideLeadOnce();
  }, []);

  return null;
}
