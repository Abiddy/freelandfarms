# Freeland Family Farms — Landing Page PRD

## Original Problem Statement
Build a single-page rustic landing page inspired by an editorial portfolio reference (loading screen counter, floating glass navbar, hero with farm video, bento product grid, parallax sections, marquee footer) but for **Freeland Family Farms** (real California dairy + bakery, Portuguese heritage, Woodcrest CA). User asked for **light/white theme with warm browns + rustic farmhouse feel** instead of dark portfolio aesthetic.

## User Choices Captured
- Brand: Freeland Family Farms (per freelandfamilyfarms.com)
- All sections included (hero, story, products, sustainability, family, journal, where-to-buy, testimonials, stats, contact)
- Hero: free farm/cow stock video (Pexels)
- No third-party integrations (form is visual only)
- Polished placeholder copy

## Architecture
- **Frontend**: React 19 + CRA, TailwindCSS, framer-motion, GSAP, lucide-react, shadcn/ui
- **Backend**: FastAPI (untouched template; no API needed for this landing)
- **No DB writes** in this iteration

## Design Tokens (light + browns)
- Cream `#FDFBF7`, Cream-warm `#F5F0E6`, Parchment `#EBE3D5`
- Coffee-deep `#2D1C11`, Saddle `#5C4033`, Caramel `#C28E5C`, Honey `#E2B872`, Terracotta `#BA634A`
- Gradient: `linear-gradient(90deg, #C28E5C, #E2B872, #C28E5C)`
- Display: Instrument Serif (italic). Body: Work Sans

## What's Implemented (v1)
- Loading screen with 000→100 counter + rotating words (Heritage / Craft / Family)
- Floating glass-pill navbar with active section detection + smooth scroll
- Hero: pasture cow video bg, italic headline, rotating role word, dual CTA
- Our Story: heritage card + asymmetric bento + 4-step timeline (1962→2025)
- Products bento (8 items, prices: milk/sourdough/burrata/oaxaca/queso/panela/bolos)
- Sustainability: dark coffee-deep section with 6 practice cards
- Meet the Family (Amber, Zach Batista, Gioia cheesemakers)
- Journal: 4 horizontal pill cards
- Where to Buy: 6 stockists + 3 events
- Testimonials: 3 quote cards
- Stats: 4 metrics (years, acres, A2/A2, glass)
- Contact footer: visual form, GSAP marquee, social links, dark coffee-deep bg with flipped video

## Backlog / Next
- P1: Real product photography swap (currently Unsplash placeholders)
- P1: Wire newsletter to Resend/Mailchimp
- P1: Connect contact form to backend (POST /api/contact)
- P2: Real Google Map embed at "Find Us"
- P2: CMS/blog routing for Journal entries
- P2: Add sticky "pre-order this Sunday" cart drawer
- P2: Lighthouse SEO pass + OG image
