# Gold Fever E-Book Lead Magnet

Next.js landing page for Tom Massie's free GPAA guide. Form submissions subscribe leads to a Klaviyo list.

**Production URL:** `https://books.gpaastore.com/gold-fever-e-book`

## Local development

```bash
npm install
cp .env.example .env.local   # add Klaviyo keys
npm run dev
```

Open [http://localhost:3000/gold-fever-e-book](http://localhost:3000/gold-fever-e-book) — or [http://localhost:3000/](http://localhost:3000/) which redirects there (default `basePath` is `/gold-fever-e-book`).

For root-local dev, set in `.env.local`:

```
NEXT_PUBLIC_BASE_PATH=
```

And temporarily set `basePath` to empty in `next.config.ts` or match the env.

## Environment variables

| Variable | Description |
|----------|-------------|
| `KLAVIYO_API_KEY` | Private API key (server only) |
| `KLAVIYO_LIST_ID` | Target list ID |
| `NEXT_PUBLIC_BASE_PATH` | `/gold-fever-e-book` in production |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID for PageView + Lead conversion tracking |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID (e.g. `G-6GF0J7HPH3`) |

## Deploy (Vercel)

1. Import repo → add env vars from `.env.example`
2. Set `NEXT_PUBLIC_BASE_PATH=/gold-fever-e-book`
3. Point `books.gpaastore.com/gold-fever-e-book` at Vercel (Shopify proxy or DNS) — replace Leadpages `custom-proxy.leadpages.net`

## Routes

- `/` — Landing page with lead form
- `/thank-you` — PDF, EPUB, bonus YouTube embed
- `/api/subscribe` — Klaviyo subscription (POST)

## Next steps

- Replace image placeholders in `Hero` / `Story`
- Klaviyo nurture flow (7 emails → [goldprospectors.org/join](https://www.goldprospectors.org/join))
- Swap placeholder DNS from Leadpages to Vercel
