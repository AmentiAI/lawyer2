# Hartford, CT Immigration Lawyer: Next.js site

A Hartford-focused website for the Law Office of Jacquelyn R. Goncalves, built with Next.js (App Router) and TypeScript.

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Configure

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`: the live domain, used for canonical URLs, the sitemap, and structured data
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`: send contact and booking form submissions by email through [Resend](https://resend.com). If these are not set, the forms open the visitor's email app instead.

## Where things live

| What | File |
| --- | --- |
| Firm facts, phone, hours, towns, testimonials | `lib/site.ts` |
| Service page content and FAQs | `lib/services.tsx` |
| Structured data (LegalService, FAQ, breadcrumbs) | `lib/schema.ts` |
| Header, footer, shared UI, forms | `components/` |
| Pages | `app/` |
| Form email endpoint | `app/api/inquiry/route.ts` |
| Styles | `app/globals.css` |

Add a town to `TOWNS` in `lib/site.ts` and it gets its own `/hartford-area/<slug>` landing page, a footer link, and a sitemap entry automatically.

## Deploy

Deploy on Vercel or any Node host: import the repo, set the environment variables above, and deploy.
