# Gold Fever Ebook — Klaviyo Nurture Series

Eight emails in Tom Massie's voice for the **Gold Fever Ebook Leads** list. Each template uses Klaviyo conditionals on the profile property **`Active Membership Type`**:

| Profile state | CTA emphasis |
|---------------|--------------|
| Property **not set** (most leads) | Soft GPAA membership / Property Guide / free pan (email 4 only) |
| Property **has any value** (active member) | Subtle [Lucky Nugget Paydirt](https://gpaastore.com/products/gpaas-lucky-nugget-paydirt) subscription — no membership pitch |

```django
{% if person|lookup:'Active Membership Type' %}
  <!-- member: Lucky Nugget -->
{% else %}
  <!-- non-member: GPAA join / claims -->
{% endif %}
```

Property name is **case-sensitive** — must match Klaviyo exactly.

---

## Series schedule

| # | File | Delay after previous | Cumulative from signup | Subject line |
|---|------|----------------------|----------------------|--------------|
| 0 | [00-welcome.html](./00-welcome.html) | — (immediate) | Day 0 | You're in — your Gold Fever guide + full episode inside |
| 1 | [01-gold-still-out-there.html](./01-gold-still-out-there.html) | 2 days | Day 2 | Tom Massie: the gold didn't run off |
| 2 | [02-golden-rule.html](./02-golden-rule.html) | 2 days | Day 4 | The two sentences that open locked gates |
| 3 | [03-public-ground.html](./03-public-ground.html) | 2 days | Day 6 | Public land is public — but is the gold open? |
| 4 | [04-first-trip-five-tools.html](./04-first-trip-five-tools.html) | 3 days | Day 9 | 5 tools, one creek, color by lunch |
| 5 | [05-family-on-the-creek.html](./05-family-on-the-creek.html) | 3 days | Day 12 | The best gold is in the kids' eyes |
| 6 | [06-stewardship.html](./06-stewardship.html) | 4 days | Day 16 | Fill your holes (Dad's rule that keeps gates open) |
| 7 | [07-buzzards-line.html](./07-buzzards-line.html) | 5 days | Day 21 | Buzzard's line — and your first Saturday on the creek |

**Total span:** ~3 weeks from signup to final email.

---

## Klaviyo flow setup

1. **List:** Gold Fever Ebook Leads (`KLAVIYO_LIST_ID` in `.env.local`)
2. **Flow trigger:** Subscribed to list → **Gold Fever Ebook Nurture**
3. **Emails:** Create 8 emails; paste HTML from each file into the drag-and-drop editor (switch to source/HTML) or use **Import HTML**
4. **Delays:** Use table above between each message (time delay nodes)
5. **Preview:** Test with two profiles — one **without** `Active Membership Type`, one **with** it set (e.g. `Gold Standard`)
6. **Smart sending:** Leave Klaviyo smart sending on unless it conflicts with your window

### Suggested preview text (optional)

| # | Preview |
|---|---------|
| 0 | PDF, EPUB, and a 45-minute Gold Fever episode. Tom's creek notes start tomorrow. |
| 1 | Pickers in a pan last Saturday. New gold every season — here's why. |
| 2 | Nine times out of ten they say yes — sometimes they join you in hip boots. |
| 3 | BLM, Forest Service, and the easy rules Tom uses on every trip. |
| 4 | Tom's exact weekend checklist from 20 years of Gold Fever shoots. |
| 5 | Kia's first nugget. Grandpas being heroes again. Bring the whole crew. |
| 6 | Take only gold and pictures. Leave only footprints. Pass it on. |
| 7 | Gold's where you find it, but you gotta look. Tom's last note in this series. |

---

## Content map (book chapters)

| Email | Book tie-in |
|-------|-------------|
| 0 | Delivery + series promise |
| 1 | Ch 1 — Gold still out there |
| 2 | Ch 2 — Golden Rule |
| 3 | Ch 3–4 — Public land + state snapshot |
| 4 | Ch 11 — First trip + five tools |
| 5 | Ch 9 — Family gold fever |
| 6 | Ch 10 — Stewardship |
| 7 | Conclusion + Buzzard quote |

---

## Member offer: Lucky Nugget Paydirt

- Product: [GPAA's Lucky Nugget Paydirt Subscription](https://gpaastore.com/products/gpaas-lucky-nugget-paydirt) (~$50/bag, choose Small/Medium/Large)
- Subscribe for automatic shipments; ~1 in 25 bags includes a bonus (extra paydirt, nuggets, or loaded returns)
- Positioned for **members only** as at-home practice between claim trips — not a hard sell

---

## Partials & links

- Shared CTA reference: [_partials/cta-blocks.html](./_partials/cta-blocks.html)
- Shared styles reference: [_partials/styles.html](./_partials/styles.html)
- UTM helper in repo: `lib/email-links.ts` (`utm_campaign=gold-fever-nurture`)

---

## After the series

- Move completed profiles to a **newsletter** or **engaged non-member** segment
- Suppress members from aggressive join campaigns
- Consider a **day 30** one-off only if you add new paydirt promo or seasonal claim event (not in this set)
