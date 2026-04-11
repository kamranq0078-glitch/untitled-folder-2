
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK: Make the Exotic Collection website fully
mobile responsive at exactly three breakpoints:
  • 325px (small phones — iPhone SE, budget Androids)
  • 375px (standard phones — iPhone 14, Pixel 7)
  • 425px (large phones — iPhone Pro Max, Galaxy S)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- APPROACH: Mobile-first. Write base styles for
-- 325px, then use min-width media queries to scale
-- up to 375px and 425px. Everything must look
-- intentional at all three sizes — not just "fits".

█ GLOBAL RULES — apply to every page and component

Base reset for all screen sizes:
html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
}
* {
  box-sizing: border-box;
  max-width: 100%;
}
img, video, iframe {
  max-width: 100%;
  height: auto;
  display: block;
}

Root font scale per breakpoint:
/* 325px base */
:root { font-size: 14px; }

@media (min-width: 375px) {
  :root { font-size: 15px; }
}
@media (min-width: 425px) {
  :root { font-size: 16px; }
}

█ NAVIGATION — all three breakpoints

At 325px, 375px, 425px:
- Hide desktop horizontal nav links completely
- Show hamburger menu icon (top right, 44×44px tap target)
- Logo "EXOTIC COLLECTION" — max font-size: 16px at 325px,
  18px at 375px, 20px at 425px. Letter-spacing: 0.15em
  (reduce from desktop 0.3em — too wide on small screens)
- Nav drawer: slides in from right, full viewport height,
  dark bg (#07060A), links stacked vertically, 48px tall
  each, gold color, 24px font-size, generous padding
- Close button (×) top right of drawer, 44px tap target
- Overlay behind drawer: semi-transparent dark, tapping
  it closes the drawer
- WhatsApp floating button: bottom-right, 52px circle,
  always on top (z-index: 9999), never obscures content
  Position: fixed, bottom: 20px, right: 16px

█ HERO SECTION — all three breakpoints

At 325px:
- Height: 100svh (safe viewport height — avoids browser
  chrome issues on mobile)
- Hero image: cover, centered, dark overlay increased to
  0.55 opacity (text readability on small screen)
- H1 font-size: 32px, line-height: 1.15, Cormorant Garamond
- Body text: 14px, max-width: 100%, padding: 0 20px
- Two CTA buttons: stack vertically, full-width (100%),
  height: 48px each, gap: 12px between them
- Remove parallax effect entirely on mobile (performance)
- Scroll indicator chevron: keep, center it

At 375px:
- H1 font-size: 38px
- Body text: 15px
- CTA buttons: still stacked, full-width

At 425px:
- H1 font-size: 42px
- Body text: 15px
- CTA buttons: can go side-by-side IF both fit
  comfortably — test. If not, keep stacked.

█ GEM CATEGORY BAR — all three breakpoints

At 325px and 375px:
- Change from 5-column row to horizontal scroll strip
- Cards: 140px wide, fixed, displayed in a row
- overflow-x: auto, scroll-snap-type: x mandatory
- Each card: scroll-snap-align: start
- Hide scrollbar visually but keep functional:
  scrollbar-width: none (Firefox)
  ::-webkit-scrollbar { display: none }
- Hint of next card visible at right edge to signal
  scrollability (show ~20px of next card)
- Card height: 120px at 325px, 130px at 375px

At 425px:
- Can show 2.5 cards at once in the scroll strip
- Card width: 160px

█ FEATURED COLLECTION — all three breakpoints

At 325px, 375px, 425px:
- Abandon alternating left-right layout completely
- Stack every row: image on top, text below
- Image: full-width, aspect-ratio: 4/3, object-fit: cover
- Text block: padding 20px, full-width
- Piece name: 22px Cormorant Garamond at 325px,
  24px at 375px+
- Material text: 13px
- "Inquire" CTA button: full-width, height: 48px
- Gap between pieces: 48px (breathing room essential)

█ TWO LOCATIONS CARDS — all three breakpoints

At 325px, 375px, 425px:
- Stack vertically (Srinagar card above, Goa card below)
- Each card: full-width, aspect-ratio: 16/9 for image,
  text content below image inside card
- Padding inside card: 20px
- Location name: 24px Cormorant Garamond Italic
- Body text: 13px
- Map link and WhatsApp button: full-width, stacked
- Gap between the two cards: 24px

█ PASHMINA FULL-WIDTH BAND — all three breakpoints

At 325px, 375px, 425px:
- Keep full-width
- Reduce title to: 28px at 325px, 32px at 375px,
  36px at 425px
- Body text: 14px, padding: 0 24px
- CTA button: full-width, centered, height: 48px

█ STATS ROW — all three breakpoints

At 325px:
- Change from horizontal row to 2×2 grid (2 columns)
- Each stat cell: padding 16px, text-align: center
- Stat number: 28px, Cormorant Garamond, gold
- Stat label: 11px, muted, uppercase

At 375px and 425px:
- Same 2×2 grid layout
- Stat number: 32px at 375px, 36px at 425px

█ TESTIMONIALS — all three breakpoints

At 325px, 375px, 425px:
- Change from 3-column grid to single-column vertical stack
- Each card: full-width, padding: 20px
- Quote text: 14px, line-height: 1.7
- Reviewer name + location: 12px, muted
- Stars: font-size: 16px, gold
- Gap between cards: 16px

█ INSTAGRAM GRID — all three breakpoints

At 325px:
- 2-column grid (3 rows = 6 photos)
- Each cell: square, 50% width, no gap (edge to edge)

At 375px:
- 2-column grid with 2px gap

At 425px:
- 3-column grid with 2px gap (2 rows = 6 photos)

█ FOOTER — all three breakpoints

At 325px, 375px, 425px:
- Stack 3 columns vertically (column 1, then 2, then 3)
- Each column: full-width, padding: 24px 20px
- Border separator between columns instead of side-by-side
- Logo: 18px, centered or left-aligned
- Footer links: 15px, line-height: 2 (generous tap targets)
- Bottom strip: 12px, centered, padding: 16px

█ COLLECTIONS PAGE — all three breakpoints

Filter tabs at 325px, 375px:
- Horizontal scroll strip (same as gem category bar)
- overflow-x: auto, no line-wrap
- Each pill: flex-shrink: 0, padding: 8px 16px
- scrollbar hidden

Filter tabs at 425px:
- Wrap to 2 rows if needed (flex-wrap: wrap)

Product grid at 325px:
- 1 column, full-width cards
- Image: aspect-ratio 1/1, full-width
- Text below: padding 16px
- Piece name: 18px

Product grid at 375px:
- 1 column still — jewellery deserves full attention
- Image: aspect-ratio 1/1

Product grid at 425px:
- 2 columns, gap: 12px
- Images: square, fill column width

Individual piece page at all three:
- Remove side-by-side layout entirely
- Image: full-width, aspect-ratio: 1/1, top of page
- Thumbnail strip: horizontal scroll, 70px squares
- All details below image: padding 20px
- WhatsApp CTA button: full-width, height: 52px,
  sticky to bottom of viewport:
  position: sticky; bottom: 0; width: 100%;
  This is the most important mobile UX decision —
  the buy button is always reachable

█ PASHMINA PAGE — all three breakpoints

At 325px, 375px, 425px:
- Education section: single column, full-width
- Each point: padding 16px, left border 2px gold
- Pashmina grid: same rules as collections grid above
  (1 col at 325/375, 2 col at 425)

█ OUR STORY PAGE — all three breakpoints

At 325px, 375px, 425px:
- Large pull quotes: 24px at 325px, 28px at 375px,
  32px at 425px — Cormorant Garamond Italic
- Section images: full-width, aspect-ratio: 16/9
- Body text: 14px at 325px, 15px at 375px+
- Remove any side-by-side image+text splits —
  stack everything vertically

█ STORES PAGE — all three breakpoints

At 325px, 375px, 425px:
- Stack Srinagar and Goa store sections vertically
- Each store hero image: full-width, aspect-ratio: 16/9
- Store details below image: padding 20px
- Google Maps embed: width 100%, height 200px
- WhatsApp + Maps buttons: stack vertically, full-width,
  height: 48px each

█ CONTACT PAGE — all three breakpoints

At 325px, 375px, 425px:
- Stack WhatsApp block, phone block, form vertically
- WhatsApp button: full-width, 52px height, green
- Form fields: full-width, height: 48px, font-size: 16px
  (CRITICAL: 16px prevents iOS from auto-zooming inputs)
- Textarea: min-height: 120px
- Submit button: full-width, height: 52px

█ TOUCH & TAP RULES — apply everywhere

✓ Every tappable element: minimum 44×44px touch target
✓ All form inputs: font-size: 16px minimum (prevents zoom)
✓ Links in body text: padding: 4px 0 (easier to tap)
✓ Buttons: min-height: 48px
✓ No hover-only information — all hover states must have
   a tap equivalent
✓ Remove CSS transitions over 300ms on mobile
   (feels laggy on lower-end phones)
✓ Add touch-action: manipulation to all buttons and links
   (removes 300ms tap delay on older Androids)

█ PERFORMANCE ON MOBILE — non-negotiable

✓ Disable parallax completely on any screen under 768px
   (kills performance, causes jank on phones)
✓ Hero image: serve mobile-specific image at 375px wide,
   WebP format, preloaded in 
✓ Lazy load ALL images except the hero
✓ Remove any backdrop-filter: blur() on mobile —
   devastating on mid-range phones
✓ Reduce animation complexity: on mobile, prefer
   opacity fade only (no translateY, no scale)

█ TESTING CHECKLIST — verify each breakpoint

At 325px check:
□ No horizontal scroll anywhere
□ Hero text fully readable without zooming
□ WhatsApp button not obscuring content
□ All buttons reachable with thumb (bottom of screen)
□ Navigation hamburger opens and closes cleanly
□ Forms don't trigger zoom on focus

At 375px check:
□ All above, plus font sizes feel comfortable
□ Gem category scroll strip works smoothly
□ Images load fast and don't stretch

At 425px check:
□ 2-column grids (where applied) have equal widths
□ No elements feel cramped or cut off
□ Footer columns stacked cleanly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Apply all of the above to every existing page.
Do NOT change any colours, fonts, content, or
dark theme. Only change layout, sizing, spacing,
and behaviour for the three mobile breakpoints.
The desktop version must remain exactly as built.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
