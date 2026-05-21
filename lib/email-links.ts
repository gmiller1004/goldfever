const UTM_BASE = "utm_source=klaviyo&utm_medium=email&utm_campaign=gold-fever-nurture";

export function emailLink(
  url: string,
  content: string,
  extraParams?: Record<string, string>,
): string {
  const params = new URLSearchParams({
    ...Object.fromEntries(new URLSearchParams(UTM_BASE)),
    utm_content: content,
    ...extraParams,
  });
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${params.toString()}`;
}

export const EMAIL_LINKS = {
  join: emailLink("https://www.goldprospectors.org/join", "join"),
  properties: emailLink("https://www.goldprospectors.org/properties", "property-guide"),
  luckyNugget: emailLink(
    "https://gpaastore.com/products/gpaas-lucky-nugget-paydirt",
    "lucky-nugget",
  ),
  freeGoldPan: emailLink("https://gpaastore.com/pages/free-gold-pan", "free-pan"),
  pdf: emailLink(
    "https://cdn.shopify.com/s/files/1/2568/9508/files/Gold_Fever-No-Hassle_Guide_to_Finding_Gold_Across_America.pdf?v=1763166156",
    "pdf",
  ),
  epub: emailLink(
    "https://cdn.shopify.com/s/files/1/2568/9508/files/Gold-Fever-No-Hassle-Guide-to-Finding-Real-Gold-Across-America-By-Tom-Massie.epub?v=1763232251",
    "epub",
  ),
  video: emailLink("https://youtu.be/dZNEZwQDmsY", "gold-fever-episode"),
  unsubscribe: "{{ unsubscribe_url }}",
  manage: "{{ manage_preferences }}",
} as const;
