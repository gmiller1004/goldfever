/** Client-safe base path for fetch URLs (must match next.config basePath). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "/gold-fever-e-book";
  if (!base) return path;
  const normalized = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalized}${path.startsWith("/") ? path : `/${path}`}`;
}
