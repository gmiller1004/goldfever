/** Gold Catcher variant — free product, $8 S&H at checkout (gpaastore.com) */
const FREE_PAN_VARIANT_ID = "50011557626166";

const panUtm = "utm_source=gold-fever-ebook&utm_medium=thank-you&utm_campaign=free-pan";

export const LINKS = {
  join: "https://www.goldprospectors.org/join",
  /** Marketing page with offer details and household limit */
  freeGoldPan: "https://gpaastore.com/pages/free-gold-pan",
  /** Direct to Shopify cart — one click, then checkout for shipping */
  freeGoldPanCheckout: `https://gpaastore.com/cart/${FREE_PAN_VARIANT_ID}:1?${panUtm}`,
  privacy: "https://www.goldprospectors.org/privacy",
  pdf: "https://cdn.shopify.com/s/files/1/2568/9508/files/Gold_Fever-No-Hassle_Guide_to_Finding_Gold_Across_America.pdf?v=1763166156",
  epub: "https://cdn.shopify.com/s/files/1/2568/9508/files/Gold-Fever-No-Hassle-Guide-to-Finding-Real-Gold-Across-America-By-Tom-Massie.epub?v=1763232251",
  bonusVideo: "https://youtu.be/dZNEZwQDmsY",
  gpaaHome: "https://www.goldprospectors.org/",
} as const;

export const BOOK_TITLE =
  "Gold Fever: No-Hassle Guide To Finding Real Gold In America";
