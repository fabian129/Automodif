# Pre-Launch Checklist

## Technical
- [x] Next.js build (`npm run build`) passes without errors
- [x] No broken imports or dead routes
- [x] 404 page exists (Next.js default active, or custom)
- [x] Favicon is present

## SEO & Indexing
- [x] `app/robots.ts` is configured and allows indexing
- [x] `app/sitemap.ts` is configured with the correct base URL
- [x] Global metadata (Title, Description) set in `layout.tsx`
- [x] OpenGraph (OG) image path is set
- [x] LocalBusiness / AutoRepair Schema JSON-LD is active on the homepage

## Forms & Email
- [x] "Boka Service" form wired to `/api/contact`
- [x] "Öppna Ansökningar" form wired to `/api/job`
- [x] Both forms handle success, loading, and error states gracefully
- [x] Honeypot spam protection implemented on both forms
- [x] Missing: `RESEND_API_KEY` needs to be set in Vercel to activate delivery

## Analytics
- [ ] Install GA4 (Google Analytics) script if the client wants tracking
- [ ] Set up Google Search Console and submit the sitemap

## Legal & Compliance
- [ ] Review if a cookie banner is needed (depends on GA4/tracking)
- [ ] Ensure the privacy policy/terms exist if the client requires them

## Content
- [x] Placeholder text removed
- [x] Contact details (phone, address, email) are correct
- [x] Footer links point to correct sections

## Handoff
- [ ] Add domain in Vercel
- [ ] Set up DNS records for domain in Vercel and Resend
- [ ] Test form submission in production (from a real phone/browser)
