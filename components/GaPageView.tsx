"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackGaPageView } from "@/lib/google-analytics";
import { withBasePath } from "@/lib/paths";

/** Send page_path on client navigations (includes basePath for production). */
export function GaPageView() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const path = pathname === "/" ? "/" : pathname;
    trackGaPageView(withBasePath(path));
  }, [pathname]);

  return null;
}
