---
name: deployment-orchestrator
description: Final launch hardening skill. Prepares a real Next.js site for production by handling SEO defaults, metadata, OG previews, forms/email wiring, analytics, monitoring, legal baseline, launch docs, and a minimal smoke test. This is a deterministic ship gate, not a design exploration or heavy browser loop.
---

## TL;DR
**Skill:** 23 — Deployment Orchestrator  
**Phase:** Ship / Pre-Launch  
**Purpose:** Make a site truly production-ready  
**Change Budget:** MEDIUM  
**Stop:** After launch-critical infra, SEO, form delivery, metadata, and smoke test are complete  
**Redirects:**  
- If visual/design issues appear → 16-polish-pass or 18.5-section-sandbox  
- If performance fails → 08-performance-guardian  
- If bug/debug issue appears → 15-web-debugger  
- If structural refactor is needed → 05-component-architect  
- If full browser/device deep validation is required → 11-browser-validator (final optional pass only)

# Deployment Orchestrator (23)

## Objective

This skill is the **final deterministic ship gate**.

It exists to:
- Prepare a real Next.js site for production
- Enforce basic SEO and indexing readiness
- Wire forms to actual delivery infrastructure
- Add analytics and monitoring
- Add legal/compliance baseline
- Generate deployment + handoff docs
- Run a minimal smoke test

It does NOT:
- Redesign sections
- Reopen layout or brand direction
- Add decorative polish not required for launch
- Perform large refactors unless launch is blocked
- Depend on slow browser inspection loops for work that can be done statically

---

## Philosophy

**Not:** "Open browser, inspect everything, keep poking around until it feels done."

**Instead:**  
1. Apply deterministic launch infrastructure  
2. Verify launch-critical code paths  
3. Run only a narrow smoke test at the end

This skill should feel like **shipping discipline**, not creative wandering.

---

## When to Run

Run this skill when:
- The page/site is already built
- Sections are approved
- Content is mostly final
- The site is moving toward real deployment
- Contact or lead capture must actually function
- Metadata, previews, and indexing must be correct before launch

Do NOT run this skill when:
- Design direction is still unclear
- Major sections are still being prototyped
- The project is still in 18.5 sandbox mode
- Motion/layout/identity is still changing

---

## Hard Gate Preconditions

Do not run unless:
- [ ] Site structure exists
- [ ] Main pages are assembled
- [ ] Copy is mostly final
- [ ] Brand name and site URL are known or at least placeholder-safe
- [ ] Contact destination exists (client inbox or internal inbox)
- [ ] No major unresolved production bugs

If these are not true:
→ STOP  
→ Redirect to relevant earlier skill

---

# PART 1 — Launch Audit

Before changing anything, create a short internal launch audit.

## Output:
```md
## Launch Audit

### Site Type
- Marketing / Lead Gen / Service / Portfolio / Agency / SaaS

### Known Pages
- /
- /about
- /services
- /contact
- etc

### Form Needs
- Contact form?
- Quote form?
- Newsletter?
- Booking CTA only?

### Integrations Needed
- Resend
- GA4
- Sentry
- Search Console
- Cookie banner
- CRM/webhook (optional)

### Known Missing Items
- [ ]
- [ ]
- [ ]
```

Rule:
Do not start implementing blindly. First identify what launch-critical layers are missing.

---

# PART 2 — SEO Hardening (Mandatory)

This skill must enforce basic SEO readiness on every real page.

## 2.1 Metadata Rules

Every indexable page must have:
- Unique title
- Unique description
- OpenGraph metadata
- Twitter metadata
- Canonical URL
- Correct language
- Share preview image

**Rules:**
- Titles target ~50–60 chars
- Descriptions target ~150–160 chars
- No duplicated titles/descriptions across pages
- Canonical must match production URL pattern
- Home page and each service page must be unique

## 2.2 Heading Hierarchy

Enforce:
- Exactly one `<h1>` per page
- No skipped heading levels
- H2s for major sections
- H3s only under real H2s
- Headings should make sense without styling

## 2.3 Semantic HTML

Replace generic wrappers when meaningful (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`).

## 2.4 Indexing Assets

Create or verify:
- `app/robots.ts`
- `app/sitemap.ts`

**Rules:**
- Sitemap must include all indexable pages
- robots must not accidentally block production
- noindex only where explicitly intended

## 2.5 Image SEO

Enforce:
- All meaningful images have alt text
- Decorative images use empty alt only when truly decorative
- Above-fold images use correct loading priority
- Oversized local assets are optimized before launch
- OG preview image exists (1200x630, branded, readable)

## 2.6 Schema

Apply lightweight schema where relevant (Organization/LocalBusiness, FAQ Schema, Service Schema). Do not spam schema.

---

# PART 3 — Forms & Email Wiring (Mandatory if form exists)

This is a first-class launch requirement. If the site has a form, the form must do more than "look complete."

## 3.1 Environment Variables
Create or verify `.env.example` with `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_EMAIL`, `FROM_EMAIL`, etc.

## 3.2 Route Handler Pattern
Preferred path: `app/api/contact/route.ts`
- Parse payload
- Validate with Zod
- Reject spammy requests
- Send structured lead email via Resend
- Return JSON success/error response

## 3.3 Frontend Form Rules
Every production form must have:
- client-side required-state UX
- disabled state while submitting
- success state
- error state
- no page crash if endpoint fails

## 3.4 Auto-Reply
Recommended default: Send a short confirmation mail to the lead.

## 3.5 Anti-Spam Minimum
At minimum add: honeypot field, server-side validation.

---

# PART 4 — Analytics & Monitoring

- **GA4**: create `lib/analytics.ts`, add script in layout, track important events.
- **Sentry**: if monitoring is required, add `@sentry/nextjs`.
- **Uptime**: (Optional note in docs).

---

# PART 5 — Legal / Compliance Baseline

Verify baseline: Privacy policy page, Cookie consent, Contact info, Terms page, Form consent copy.

---

# PART 6 — Technical Launch Hardening

## 6.1 Production Readiness
Verify: `npm run build` succeeds, no fatal TS errors, no broken imports, no placeholder env assumptions, no dead routes, favicon exists, 404 page exists.

## 6.2 Content Readiness
Verify: placeholder text removed, placeholder images removed, copyright year current, contact details correct, footer links correct.

## 6.3 Asset Readiness
Verify: logo files present, OG preview image present, local images use `next/image`.

---

# PART 7 — Smoke Test (Minimal, Not Heavy QA)

Smoke Test Checklist:
- [ ] Home page loads
- [ ] Primary nav links work
- [ ] No immediate 404s on core pages
- [ ] No horizontal scroll on common mobile width
- [ ] Primary CTA visible
- [ ] Form submission path works
- [ ] Success/error states display correctly
- [ ] Metadata and OG asset paths are valid
- [ ] robots and sitemap route correctly

---

# PART 8 — Output Files
- `.env.example`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/api/contact/route.ts`
- `lib/analytics.ts`
- `DEPLOYMENT.md`
- `PRE_LAUNCH_CHECKLIST.md`
- `LAUNCH_AUDIT.md`

---

# PART 9 — Required Launch Docs
Create `LAUNCH_AUDIT.md`, `DEPLOYMENT.md`, and `PRE_LAUNCH_CHECKLIST.md` to summarize status and handoff instructions.

---

# PART 10 — Output Format
Report with "Added", "Verified", "Remaining Manual Items", "Launch Status", and "Blockers".

---

# PART 11 — Constraints
**Do:** Solve launch-critical infra, Prefer deterministic code, Standardize forms, Leave clear docs.
**Do Not:** Redesign the site, Add random features, Turn into full backend architecture skill, Depend on visual QA for static tasks.
