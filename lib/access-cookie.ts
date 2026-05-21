/** Cookie set after a successful /api/subscribe — gates /thank-you content. */
export const ACCESS_COOKIE_NAME = "gf_guide_access";

/** 30 days — enough to return from email links without re-signup */
export const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export function getAccessCookiePath(): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "/gold-fever-e-book";
  return base === "" ? "/" : base;
}

export function hasGuideAccess(value: string | undefined): boolean {
  return value === "1";
}
