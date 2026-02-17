---
name: text-harmonizer
description: Applies cohesive typographic harmony across a page. Handles font pairing, letter-spacing, font-weight distribution, line-height rhythm, text-transform patterns, and optical sizing so all text elements speak the same visual language. Called after layout and component decisions are made.
---

# Text Harmonizer

Receives the page context (niche, tone, font selections) and outputs a complete typographic system where every text element relates to every other through intentional spacing, weight, and rhythm.

---

## Input Expectations

Before running, the following should already be decided by upstream skills:

- **Niche / industry** (automotive, luxury, tech, health, editorial, etc.)
- **Font families** (display + body minimum — if missing, this skill selects them)
- **Color tokens** (primary text, muted text, accent text)
- **Overall tone** (aggressive, refined, playful, raw, warm, clinical)

If font families are missing or feel generic, run Section 1 (Font Pairing) before anything else.

---

## 1. Font Pairing

A pairing works when the two fonts create **tension through contrast** while sharing an invisible structural thread (x-height, proportions, era, or geometric DNA). Two similar-looking sans-serifs is not a pairing — it's indecision.

### Contrast Axes

Every good pairing contrasts on at least 2 of these axes:

| Axis | Font A (Display) | Font B (Body) |
|------|------------------|---------------|
| **Classification** | Serif | Sans-serif |
| **Width** | Condensed | Normal |
| **Stroke contrast** | High (thin/thick variation) | Low (uniform strokes) |
| **Mood** | Expressive / loud | Neutral / quiet |
| **Era** | Historical / retro | Contemporary |

If both fonts sit on the same side of every axis → the pairing has no energy. Replace one.

### AI Font Pairing Red Flags

These combinations signal undesigned, auto-generated output. Never use:

```
AVOID — Overused by AI:
Inter + Inter                     ← No pairing at all
Roboto + Open Sans               ← Two neutral sans, no contrast
Poppins + anything               ← AI default #1
Montserrat + Roboto              ← The "I asked ChatGPT" pairing
Space Grotesk + Inter             ← Trendy AI combo, now a cliché
DM Sans + DM Serif Display       ← Lazy same-family pair
Raleway + Lato                   ← 2016 template energy
```

### Trust Calibration

Before picking fonts, determine the **trust level** the niche demands. This overrides all aesthetic preferences. A law firm that looks "creative" loses clients. A Pride association that looks "corporate" loses community.

```
TRUST SPECTRUM:

Maximum trust / Minimum expression
├── Legal, finance, insurance, government, medical
├── Accounting, consulting, B2B enterprise
├── Real estate, education, professional services
├── Tech / SaaS, e-commerce, automotive
├── Food, hospitality, health & wellness
├── Creative agencies, studios, architecture
├── Community orgs, nonprofits, cultural associations
├── Entertainment, nightlife, youth brands
Minimum trust / Maximum expression
```

**Rules by trust level:**

| Trust Level | Serif allowed as display? | Condensed/Black allowed? | Decorative transforms? | Weight range |
|-------------|--------------------------|--------------------------|----------------------|--------------|
| **High trust** (legal, finance, medical) | Yes — preferred | No | Minimal. Uppercase labels only. | 400–700. No extremes. |
| **Professional** (tech, automotive, B2B) | Optional | Yes | Moderate. Uppercase headings OK. | 300–800. |
| **Approachable** (food, health, community) | Warmth-adding only | Sparingly | Flexible. Lowercase headings OK. | 300–700. |
| **Expressive** (creative, entertainment, culture) | Freely | Freely | Go for it. Break rules intentionally. | 200–900. |

### Pairing Recipes by Tone

Each recipe pairs a **display** font (headings, hero) with a **body** font (reading, UI). The connecting thread explains WHY they work.

**Formal / Institutional (law firms, finance, government)**
```
Literata (600) + IBM Plex Sans (400)
  Thread: Mature, bookish serif meets corporate-neutral sans
  Trust signal: Literata reads as established and serious without being stuffy
  Spacing: Conservative. No tight tracking on headings. Labels at --ls-open-3 max.
  
Newsreader (500) + Source Sans 3 (400)
  Thread: Editorial authority meets clear readability
  Trust signal: Newsreader has gravitas without being decorative
  
Libre Baskerville + Outfit (400)
  Thread: Classical serif tradition meets contemporary clarity
  Trust signal: Baskerville lineage = centuries of legal/academic use
```
**Key constraints for this tone:** No uppercase headings (reads as shouting in formal context). No condensed fonts. No weight above 700. Keep letter-spacing neutral to slightly open. Body text at 400 only — never light (300) which reads as flimsy. Serif for headings, sans for body is the safest structure.

**Aggressive / Industrial / Automotive**
```
Barlow Condensed (800) + DM Sans (300–400)
  Thread: Both geometric, but condensed vs normal width creates force
  
Bebas Neue + Source Sans 3
  Thread: Both tall proportions, extreme weight contrast

Archivo Black + Switzer
  Thread: Both grotesk DNA, but black vs light = raw power
```

**Refined / Luxury / Editorial**
```
Cormorant Garamond (300) + Outfit (400)
  Thread: Both have elegant proportions, serif vs geometric sans = class tension

Playfair Display + General Sans
  Thread: High stroke contrast serif meets low-contrast sans = editorial sophistication

DM Serif Display + Satoshi
  Thread: Warm serif meets clean geometric — premium without pretension
```

**Tech / SaaS / Professional**
```
Cabinet Grotesk (700) + IBM Plex Sans (400)
  Thread: Both geometric grotesk family, but personality vs neutrality

Sora + Source Serif 4
  Thread: Geometric futurism meets readable tradition — trust + innovation

Clash Display + Switzer
  Thread: Both contemporary, angular display meets refined body
```

**Warm / Health / Organic**
```
Fraunces + Nunito Sans
  Thread: Both have rounded, soft terminals — organic warmth throughout

Lora + Outfit
  Thread: Humanist serif meets rounded sans — approachable and clear

Source Serif 4 + Plus Jakarta Sans
  Thread: Classical readability meets modern friendliness
```

**Community / Joyful / Inclusive (Pride, youth, cultural orgs, nonprofits)**
```
Sora (700) + Nunito Sans (400)
  Thread: Geometric and rounded — modern energy with soft friendliness
  Expression: Bold display weights OK. Color and weight do the talking.
  
Urbanist (800) + Outfit (400)
  Thread: Both clean and geometric but Urbanist has more edge at heavy weights
  Expression: Wide weight range. Uppercase labels with generous tracking work well.

Plus Jakarta Sans (700) + Plus Jakarta Sans (300–400)
  Thread: Single family with enough weight range to create hierarchy
  Expression: Friendly without being childish. Professional enough for grants, warm enough for community.
```
**Key notes for this tone:** Personality comes from COLOR, WEIGHT CONTRAST, and SPACING — not from wacky fonts. Avoid decorative/script fonts that could read as unserious. Rounded sans-serifs convey inclusion and warmth naturally. Heavy display weight (700–800) + light body (300–400) creates energy without chaos.

**Raw / Brutalist / Creative**
```
Space Mono + Space Grotesk
  Thread: Same family, mono vs proportional — controlled chaos

JetBrains Mono (solo)
  Thread: Monospace only, size/weight/case does the hierarchy work

Anton + IBM Plex Mono
  Thread: Extreme display meets rigid mono — intentional dissonance
```

**Neutral / Versatile (when the niche doesn't fit a clear tone)**
```
General Sans (600) + General Sans (400)
  Thread: Clean, contemporary, wide weight range. Not overused yet.
  
Switzer (700) + Switzer (300–400)
  Thread: Swiss-style grotesk. Works for almost anything. Personality comes from usage, not the font itself.

Satoshi (700) + Source Serif 4 (400)
  Thread: Modern geometric meets readable serif — works across industries.
```
**Use this when:** Client has no strong brand identity yet, the niche is ambiguous, or you need a safe starting point. But always push toward a more specific tone if possible.

### Pairing Validation Checklist

Before committing to a pairing, verify:

- [ ] **Trust level match** — Does the pairing match the niche's position on the trust spectrum? A law firm should never feel "creative". A youth org should never feel "corporate".
- [ ] **x-height compatibility** — Set both at 16px. Do they feel similar in optical size? If one looks dramatically smaller, they'll fight at body size.
- [ ] **Weight coverage** — Does the display font have the weights the trust level allows? Does the body font have 400 minimum?
- [ ] **Character set** — Do both fonts support the required language? (Swedish: å, ä, ö. Check others as needed.)
- [ ] **Not both neutral** — At least one font must have personality. Exception: high-trust niches where neutrality IS the personality.
- [ ] **Role clarity** — Can you instantly tell which is display and which is body? If they're interchangeable, there's no hierarchy.
- [ ] **Tone consistency** — Would this pairing feel right on a business card, a billboard, AND a long text page for this brand?

### Google Fonts Loading

Only load the weights you actually use. Every unused weight is wasted bandwidth.

```html
<!-- Example: Barlow Condensed (display) + DM Sans (body) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet">
```

**In artifacts/React**: Use `@import` at the top of your `<style>` block. Same rule — only needed weights.

---

## 2. Letter-Spacing Scale

Apply systematically. Never leave all text at `normal`.

```
--ls-tight-3:   -0.04em    /* Display headings >3rem */
--ls-tight-2:   -0.025em   /* Display headings 2-3rem */
--ls-tight-1:   -0.015em   /* Subheadings 1.2-2rem */
--ls-normal:     0          /* Body text default */
--ls-open-1:     0.01em    /* Body text when font is tight-set */
--ls-open-2:     0.04em    /* Navigation, buttons */
--ls-open-3:     0.08em    /* Uppercase labels, small caps */
--ls-open-4:     0.14em    /* Micro-labels, overlines, eyebrow text */
--ls-open-5:     0.2em     /* Maximum tracking — decorative/sparse labels */
```

### Application Rules

| Element | Size Range | Spacing Token | Condition |
|---------|-----------|---------------|-----------|
| Hero / display heading | >3rem | `--ls-tight-3` | Always |
| Section heading | 2–3rem | `--ls-tight-2` | Always |
| Subheading | 1.2–2rem | `--ls-tight-1` | Always |
| Body text | 0.9–1.1rem | `--ls-normal` or `--ls-open-1` | Open-1 if font has tight default metrics |
| Navigation links | any | `--ls-open-2` | If uppercase, use `--ls-open-3` |
| Buttons | any | `--ls-open-2` to `--ls-open-3` | Wider tracking for uppercase buttons |
| Uppercase labels | <0.85rem | `--ls-open-3` to `--ls-open-4` | Non-negotiable. Small uppercase without tracking looks broken. |
| Overline / eyebrow | <0.75rem | `--ls-open-4` to `--ls-open-5` | Scale tracking up as size goes down |

**Core principle**: Size and tracking are inversely related. Large text tightens. Small uppercase opens. Exceptions must be intentional.

---

## 3. Weight Distribution

Use at minimum 3 weights across the page. Create tension through contrast, not uniformity.

```
--fw-thin:      200
--fw-light:     300
--fw-regular:   400
--fw-medium:    500
--fw-semibold:  600
--fw-bold:      700
--fw-extrabold: 800
--fw-black:     900
```

### Weight Pairing Patterns

Select ONE pattern based on tone. Each pattern defines weight assignments for the full hierarchy.

**Pattern A — High Contrast (aggressive, industrial, automotive)**
```
Display heading:    800–900
Section heading:    700
Subheading:         600
Body:               300–400
Labels/overlines:   500
Captions/meta:      300
```

**Pattern B — Refined Contrast (luxury, editorial, fashion)**
```
Display heading:    300–400  (light weight + wide tracking = elegance)
Section heading:    600
Subheading:         500
Body:               400
Labels/overlines:   500–600
Captions/meta:      300
```

**Pattern C — Moderate Contrast (tech, SaaS, professional)**
```
Display heading:    700
Section heading:    600
Subheading:         500
Body:               400
Labels/overlines:   500
Captions/meta:      400
```

**Pattern D — Flat Hierarchy (brutalist, raw, minimal)**
```
Display heading:    400–500
Section heading:    400
Subheading:         400
Body:               400
Labels/overlines:   500
Captions/meta:      400
(Differentiation comes from size and spacing, not weight)
```

---

## 4. Line-Height Scale

```
--lh-crush:     0.85       /* Stacked display text, artistic headings */
--lh-tight:     0.95       /* Single-line display headings */
--lh-compact:   1.1        /* Multi-line headings */
--lh-snug:      1.3        /* Subheadings, short descriptions */
--lh-body:      1.6        /* Default reading text */
--lh-relaxed:   1.75       /* Long-form reading, small text */
```

### Application

| Element | Token | Notes |
|---------|-------|-------|
| Hero heading (1 line) | `--lh-tight` | If definitely single-line |
| Hero heading (wraps) | `--lh-compact` | Multiline display |
| Section headings | `--lh-compact` | |
| Subheadings | `--lh-snug` | |
| Body paragraphs | `--lh-body` | |
| Small body / captions | `--lh-relaxed` | Smaller text needs more air |
| Uppercase labels | `--lh-snug` | Single line, but needs padding context |
| Card descriptions | `--lh-body` | Readability in confined space |

**Rule**: Line-height decreases as font-size increases. Display text is dense. Reading text breathes.

---

## 5. Text-Transform Patterns

Use transforms to create visual hierarchy layers that weight and size alone cannot achieve.

### Transform Map

```
.overline        → uppercase    (always)
.label           → uppercase    (when <0.85rem)
.nav-link        → uppercase    (when brand tone is assertive)
.heading         → none         (default — sentence/title case from content)
.heading         → uppercase    (when condensed font + aggressive tone)
.heading         → lowercase    (when casual/playful tone)
.button          → uppercase    (when assertive) or none (when conversational)
.body            → none         (always)
.caption         → none         (always)
```

### When to Apply Uppercase

Uppercase works when paired with:
- Increased letter-spacing (mandatory — uppercase without tracking looks bad)
- Smaller font size (labels, overlines, navigation)
- Medium weight (500–600, not too heavy)

Uppercase fails when:
- Applied to body text or long strings
- No tracking adjustment is made
- Font has poor uppercase design

---

## 6. Measure Control (Line Length)

```
--measure-narrow:   35ch     /* Pull quotes, captions, sidebar */
--measure-default:  55ch     /* Standard body text */
--measure-wide:     70ch     /* Long-form reading with large text */
--measure-full:     none     /* Headings, display — no limit */
```

Apply `max-width` using `ch` units on all body text. Headings generally don't need measure control.

---

## 7. Vertical Rhythm

Space between text elements should follow a consistent ratio tied to body line-height.

```css
/* Base unit derived from body text */
--space-unit: calc(1rem * 1.6);  /* = body line-height as spacing unit */

/* Spacing between elements */
--space-text-xs:  calc(var(--space-unit) * 0.25);   /* Between label and heading */
--space-text-sm:  calc(var(--space-unit) * 0.5);     /* Between heading and body */
--space-text-md:  calc(var(--space-unit) * 1);        /* Between paragraphs */
--space-text-lg:  calc(var(--space-unit) * 2);        /* Between sections */
--space-text-xl:  calc(var(--space-unit) * 3);        /* Major section breaks */
```

---

## 8. Responsive Type Scaling

Use `clamp()` for fluid sizing. Never use fixed `px` for text that must work across viewports.

```css
/* Pattern: clamp(minimum, preferred, maximum) */
--text-display:   clamp(2.5rem, 5vw + 1rem, 5rem);
--text-h1:        clamp(2rem, 3.5vw + 0.5rem, 3.5rem);
--text-h2:        clamp(1.5rem, 2.5vw + 0.3rem, 2.2rem);
--text-h3:        clamp(1.2rem, 1.5vw + 0.3rem, 1.6rem);
--text-body:      clamp(0.95rem, 1vw + 0.3rem, 1.1rem);
--text-small:     clamp(0.8rem, 0.9vw + 0.2rem, 0.875rem);
--text-micro:     clamp(0.65rem, 0.7vw + 0.15rem, 0.75rem);
```

Adjust letter-spacing at breakpoints if needed — tight tracking on large screens can become too tight on mobile where the font size shrinks.

---

## 9. Font Feature Settings

Apply where supported by the chosen fonts.

```css
/* Tabular figures — tables, data, prices, timestamps */
.data, .price, .table-cell {
  font-feature-settings: 'tnum' 1;
  font-variant-numeric: tabular-nums;
}

/* Old-style figures — body text for refined feel */
.prose {
  font-feature-settings: 'onum' 1;
  font-variant-numeric: oldstyle-nums;
}

/* Fractions — recipe amounts, measurements */
.fraction {
  font-feature-settings: 'frac' 1;
}

/* Ligatures — enable for body, disable for headings if tracking is wide */
body { font-feature-settings: 'liga' 1, 'clig' 1; }
.wide-tracked { font-feature-settings: 'liga' 0; }
```

---

## 10. Color Hierarchy for Text

Minimum 3 tiers. Define as CSS variables, applied per element role.

```
--text-primary:     /* Headings, important content — highest contrast */
--text-secondary:   /* Body text — slightly reduced from primary */
--text-muted:       /* Captions, meta, secondary info — clearly receded */
--text-accent:      /* Labels, links, highlighted terms — brand color */
--text-inverse:     /* Text on accent/colored backgrounds */
```

**Dark backgrounds**: Primary should be warm off-white (`#f0ece4`, `#e8e4dc`) not pure `#ffffff`. Muted should be warm gray (`#8a8578`) not blue-gray (`#9ca3af`). Pure white on dark is a hallmark of undesigned output.

**Light backgrounds**: Primary should be warm near-black (`#1a1714`, `#2d2a26`) not pure `#000000`. Same principle — avoid the extremes.

---

## Output

After processing, emit a complete CSS custom properties block and utility classes that upstream components consume. The output should be a single `<style>` block or CSS file containing:

1. All spacing, weight, line-height, and sizing tokens as custom properties
2. Base element styles (`h1`–`h6`, `p`, `a`, `small`, `strong`)
3. Utility classes for labels, overlines, captions, and display text
4. Font-feature-settings where applicable
5. Responsive adjustments via `clamp()` or media queries

No layout. No color beyond text color hierarchy. No component structure. Just text.