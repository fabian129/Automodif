# Launch Audit

## Completed
- Metadata added and verified on main layout (Title, Description, AutoRepair schema)
- `robots.ts` and `sitemap.ts` created and route correctly
- Contact form wired to Resend (`/api/contact`) with loading states and honeypot
- Job application form wired to Resend (`/api/job`) supporting multipart/form-data for CV/Cover letters
- Build checked: `npm run build` succeeds locally (no TypeScript errors, no missing keys breaking build)
- Pre-launch checklist generated
- Deployment guide generated

## Needs External Setup (Client-side / Manual)
- Log into Vercel and import the repository
- Add `RESEND_API_KEY` in Vercel Environment Variables
- Setup the domain `automodif.se` in Vercel (DNS config)
- Add and verify the domain in Resend for proper Email Delivery
- Optional: Verify if GA4 or Cookie Banner is needed before marketing launch
