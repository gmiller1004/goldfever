"use client";

import { useSearchParams } from "next/navigation";

export function SignupNotice() {
  const searchParams = useSearchParams();
  const required = searchParams.get("signup") === "required";

  if (!required) return null;

  return (
    <div
      className="border-b border-gpaa-gold/40 bg-gpaa-gold/15 px-4 py-3 text-center text-sm text-gpaa-slate"
      role="status"
    >
      Claim your free guide below to unlock downloads and the full Gold Fever
      episode.
    </div>
  );
}
