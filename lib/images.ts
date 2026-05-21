import { withBasePath } from "./paths";

/** Public asset URLs (include basePath for next/image and static files). */
export const IMAGES = {
  gpaaLogo: withBasePath("/gpaa-logo.png"),
  ebookCover: withBasePath("/ebook-cover.png"),
  tomFamilyGoldPan: withBasePath("/tom-family-gold-pan.jpg"),
  tomKaelGlacier: withBasePath("/tom-kael-glacier.jpg"),
} as const;
