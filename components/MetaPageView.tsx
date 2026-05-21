"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";

/** Re-fire PageView on client navigations (e.g. landing → thank-you). */
export function MetaPageView() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    trackMetaEvent("PageView");
  }, [pathname]);

  return null;
}
