# GEO Audit Report: Hartford Immigration Lawyer (Law Office of Jacquelyn R. Goncalves)

**Audit Date:** October 16, 2026
**URL:** Pre-launch Next.js build (audited locally; canonical domain set to placeholder `https://www.hartfordimmigrationlawyer.com`)
**Business Type:** Local Business (legal services), with a service-area model targeting Hartford, CT
**Pages Analyzed:** 33 (100% of sitemap)

---

## Executive Summary

**Overall GEO Score: 46/100 (Poor)**

The site itself is technically solid: every page is statically pre-rendered, crawlable by all AI bots, has one H1, a canonical URL, Open Graph tags, and LegalService/FAQPage/BreadcrumbList/Service structured data. The score is held down by things *outside* the page templates: the attorney has effectively **no third-party footprint** (no indexed Avvo, Justia, Google Business Profile, reviews, or press mentions), there is **no llms.txt**, no outbound citations to authoritative sources, thin attorney credentials, and **20 town pages that are 95% identical**, which risks being treated as doorway pages.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 62/100 | 25% | 15.5 |
| Brand Authority | 10/100 | 20% | 2.0 |
| Content E-E-A-T | 45/100 | 20% | 9.0 |
| Technical GEO | 72/100 | 15% | 10.8 |
| Schema & Structured Data | 70/100 | 10% | 7.0 |
| Platform Optimization | 15/100 | 10% | 1.5 |
| **Overall GEO Score** | | | **46/100** |

---

## Fixes Applied (October 16, 2026)

These code-side fixes were implemented after the audit and verified against a production build (34 pages, 0 metadata or heading issues):

- ✅ `/llms.txt` added (`app/llms.txt/route.ts`), generated from site data
- ✅ Titles now 60 characters or fewer and descriptions 155 or fewer on every page; `og:url` added; new 1200×630 Open Graph and Twitter image (`app/opengraph-image.tsx`)
- ✅ Heading order fixed (footer H4 → H2; "What to Expect" H2 added on `/consultation`)
- ✅ Schema: `LegalService` + `Attorney`, `WebSite`, a site-wide `Person` with `@id`, `sameAs`, `hasMap`, `logo`, and a `WebPage` with `reviewedBy`, `lastReviewed` and `dateModified` on service pages. Credential fields (`alumniOf`, `hasCredential`, `memberOf`) are wired up but emit nothing until they're filled in
- ✅ Service pages: definition-first opening sentence, a "Reviewed by Attorney Goncalves · Updated" line, and 3–6 official USCIS / State Department source links each
- ✅ Security headers (HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy); `X-Powered-By` removed
- ✅ `/privacy` policy page, linked from the footer and both forms

**Still open (needs the firm or a content decision):** set `NEXT_PUBLIC_SITE_URL`; fill in `CREDENTIALS` in `lib/site.ts`; add profile URLs to `SAME_AS` as they're created; consolidate or rewrite the 20 town pages; build directory profiles and collect reviews; add Spanish pages; have the attorney review the privacy policy.

**Estimated score after fixes:** about 53/100. Technical goes to about 90, Schema to about 85, Citability to about 68, and E-E-A-T to about 52. Brand Authority and Platform Optimization don't change until off-site work begins.

---

## Critical Issues (Fix Immediately)

1. **Canonical URLs, sitemap, robots.txt and schema all point to a placeholder domain.** `NEXT_PUBLIC_SITE_URL` defaults to `https://www.hartfordimmigrationlawyer.com`. If deployed before this is set to the real domain, every page will declare a canonical on a domain that doesn't serve it, and search engines and AI crawlers may drop the pages.
   *Fix:* Set `NEXT_PUBLIC_SITE_URL` in the hosting environment before launch. Also decide how this site relates to jacqlaw.com: it reuses some bio and FAQ wording, so either make it a section of jacqlaw.com (for example `/hartford`) or keep it as a separate domain with fully distinct copy.

2. **The brand isn't recognized as an entity.** Web searches for "Jacquelyn R. Goncalves" immigration attorney return no profiles, directory listings, or mentions. AI systems can't cite or recommend an entity they can't verify.
   *Fix:* See Brand Authority and the 30-day plan (Avvo, Justia, Martindale, CT Bar directory, Google Business Profile for the Mystic office).

## High Priority Issues

1. **No `/llms.txt`.** The original jacqlaw.com has one; this build doesn't. *Fix:* Add `app/llms.txt/route.ts` that serves firm facts, services, the Hartford service area, and key page URLs.
2. **The 20 town pages are near-duplicates (95.4% text similarity between `/hartford-area/avon` and `/hartford-area/simsbury`).** Only the town name and one sentence change. Google's doorway-page policy targets exactly this, and AI systems gain nothing citable from it.
   *Fix:* Either cut to the 5–6 towns you can make genuinely unique (Hartford, West Hartford, East Hartford, New Britain, Manchester, Windsor Locks) and `noindex` or redirect the rest, or add 150–300 words of real local substance per town.
3. **Attorney credentials are missing.** There's no law school, bar admission (state and year), bar number, years in practice, or professional memberships (AILA, CBA). These are core YMYL trust signals for legal content. *Fix:* Add them to `/about` and the `Person` schema (`alumniOf`, `hasCredential`, `memberOf`).
4. **No author or reviewer attribution and no dates on service pages.** Legal content without "Reviewed by Attorney Jacquelyn R. Goncalves · Updated <date>" is weaker for AI Overviews and Perplexity. *Fix:* Add a reviewed-by line and `dateModified` (in visible text and in schema) to each service page.

## Medium Priority Issues

1. **No pages link to an outside source** (only `/contact` has one external link: a Google Maps link). Claims about I-751 timing, K-1 90-day rules, N-400 eligibility, and the Visa Bulletin aren't backed by links to USCIS, travel.state.gov, or the eCFR. AI systems favor passages that cite primary sources.
2. **Few concrete figures.** Answers like "processing times vary" give AI nothing to quote. Add dated, sourced specifics: USCIS processing-time ranges for the Hartford Field Office, current filing fees with an "as of" date, and the F4 wait for the most common countries.
3. **Testimonials are both from Florida** and are not marked up as reviews. That's correct, since self-serving review markup on your own LocalBusiness is ignored by Google, but they add nothing to Hartford relevance. Collect Hartford-area Google reviews.
4. **Title tags over 60 characters:** `/services` (79), `/hartford-area` (77), `/about` (71), `/faq` (70), `/contact` (64), and most town pages (60–64). They'll be truncated in search results.
5. **Meta descriptions over 160 characters** on most pages (`/about` 183, `/services` 177, `/` 176, all town pages 167–177).
6. **Multilingual claim without multilingual content.** The site says "Se habla español · Falamos português", but every page is English-only. Spanish pages (for example "abogado de inmigración en Hartford") are a large, low-competition opportunity in Hartford.

## Low Priority Issues

1. **Every page skips from H2 to H4**, because the footer column headings are `<h4>`. Change them to `<h2>` (or a styled `<p>`) in `components/Footer.tsx`. `/consultation` also skips from H1 to H3, where the price cards sit under the hero without an intermediate H2.
2. **The Open Graph image is a 673×1024 portrait.** Link previews crop it badly. Add a 1200×630 `opengraph-image`.
3. **`og:url` is missing.** Set `openGraph.url` per page, or in the layout with `metadataBase`.
4. **No security headers** (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), and `X-Powered-By: Next.js` is exposed. Add `headers()` and `poweredByHeader: false` in `next.config.ts`.
5. **Homepage HTML is about 109 KB.** This is mostly the React Server Components payload plus the skyline SVG's window rectangles. It's acceptable, but the skyline could become a static SVG file to trim every page.

---

## Category Deep Dives

### AI Citability (62/100)

**Strengths**
- There are more than 40 unique question-and-answer pairs across the site, each self-contained and phrased the way people ask (for example "Can I travel or work while my I-751 is pending?").
- The service pages use extractable structures: numbered process steps (consular, K-1), comparison blocks (immediate relatives vs. preference categories, K-1 vs. CR-1), and checklists of RFE causes.
- The Hartford-specific facts are quotable: USCIS Hartford Field Office at 450 Main Street, and Hartford City Hall at 550 Main Street for marriage licenses.

**Weaknesses**
- Most answers hedge instead of quantifying. Example passage (weak):
  > "Processing times vary with USCIS backlogs and your case type."

  Suggested rewrite (citable):
  > "As of [Month Year], USCIS reports that most I-485 family-based green card applications at the Hartford Field Office are completed in about [X–Y] months ([source: USCIS processing times](https://egov.uscis.gov/processing-times/)). Times change monthly; we check the current figure at your consultation."
- There are no definition-first passages. Open each service page with a one-sentence definition that names the entity, for example: "Form I-751, Petition to Remove Conditions on Residence, is the USCIS form conditional permanent residents file to receive a 10-year green card."
- The town pages contribute almost no unique citable content (see High #2).

### Brand Authority (10/100)

| Platform | Status |
|---|---|
| Google Business Profile | Not found in search results (verify, and claim one for the Mystic office) |
| Avvo | Not listed; the Old Mystic page shows 0 immigration lawyers |
| Justia / Martindale / Cornell LII | Not found |
| Connecticut Bar / AILA directory | Not verified |
| Reddit / YouTube / LinkedIn | No mentions found |
| Wikipedia / Wikidata | None (expected for a solo practice; not a priority) |
| Reviews | 2 testimonials (Florida), first-party only |

Competitors that do appear for "immigration lawyer Hartford CT": Law Offices of Justin Conlon, Robinson & Cole, Weinstock Immigration Lawyers, and Collins & Martin. All of them have directory profiles on USLegal, Nolo, and Visa-Pros.

> **Important:** Don't create a Google Business Profile with a Hartford address unless the firm actually staffs an office there. Virtual offices violate GBP guidelines and Connecticut attorney-advertising rules. Use the real Mystic address with a service area that includes Hartford County.

### Content E-E-A-T (45/100)

- **Experience:** Six years of Navy service, an English BA and an MBA are stated. There are no case examples, anonymized outcomes, or years in immigration practice.
- **Expertise:** The service content is accurate and specific (I-130/I-485/I-864/I-765/I-131/I-693, preference categories, the I-751 90-day window, the K-1 90-day marriage rule). There are no credentials, AILA membership, or CLE/speaking history.
- **Authoritativeness:** No external citations, no third-party mentions, no press.
- **Trustworthiness:** Strong in some areas. The site is transparent that the office is in Mystic, it shows an attorney-advertising disclaimer, it states fees and the cancellation policy publicly, and it gives the phone, email and hours. It's missing a privacy policy page, which matters because the forms collect personal data, and visible "last updated" dates.

### Technical GEO (72/100)

| Check | Result |
|---|---|
| Rendering | ✅ All 33 pages are statically pre-rendered (full HTML without JavaScript) |
| robots.txt | ✅ `Allow: /` for all agents (GPTBot, ClaudeBot, PerplexityBot and Google-Extended allowed); `/api/` disallowed |
| Sitemap | ✅ 33 URLs, auto-generated |
| Canonicals | ⚠️ Present on every page but on the placeholder domain (Critical #1) |
| llms.txt | ❌ Missing (404) |
| Status codes | ✅ 33/33 return 200; unknown paths return 404 with a helpful page |
| Mobile | ✅ Responsive, sticky call/book bar, 16px gutters |
| Security headers | ❌ None; `X-Powered-By` exposed |
| Open Graph / Twitter | ✅ Present on every page; ⚠️ portrait image, no `og:url` |
| First-load JS | ✅ About 101–110 KB |

### Schema & Structured Data (70/100)

**Present on every page (JSON-LD, all parse as valid JSON):**
- `LegalService` with name, phone, email, address, hours, `priceRange`, `knowsLanguage`, `areaServed` (20 towns), `founder`, and `knowsAbout`
- `BreadcrumbList` on all subpages
- `FAQPage` on the home, FAQ, area, and all service and town pages
- `Service` on service and town pages, linked to the firm by `@id`
- `Person` on `/about`

**Missing or incomplete:**
- `WebSite` schema (site name and publisher)
- `sameAs` on `LegalService` and `Person`; add these once the profiles exist (Avvo, Justia, LinkedIn, GBP, jacqlaw.com)
- `geo` coordinates and `hasMap` for the Mystic office, plus `logo`
- `Person`: `alumniOf`, `hasCredential` (bar admission), `memberOf`, `jobTitle`, and an `@id` reused as the `author`/`reviewedBy` of service pages
- `dateModified` on service pages
- An `Attorney` type alongside `LegalService` (`"@type": ["LegalService", "Attorney"]`)

Note: Google limited FAQ rich results to government and health sites in 2023. Keep `FAQPage` anyway, because AI systems still use it to parse question-answer pairs.

### Platform Optimization (15/100)

- **Google AI Overviews:** The content is eligible, but local-pack visibility depends on the GBP and reviews, which don't exist yet.
- **ChatGPT and Perplexity:** These lean heavily on directories (Avvo, Justia, Nolo, Yelp) and Reddit for "best immigration lawyer Hartford" queries. The firm is absent from all of them.
- **Bing Copilot:** It needs Bing Places and IndexNow. Neither is set up.
- **Gemini:** It uses Google's entity graph and GBP data. No entity exists yet.
- **YouTube:** A 3–5 video series ("How the Hartford USCIS interview works", "K-1 vs CR-1") would build citable, embeddable authority.

---

## Quick Wins (Implement This Week)

1. **Set the production domain** (`NEXT_PUBLIC_SITE_URL`) before launch. This prevents a canonical failure across the whole site.
2. **Add `/llms.txt`** with firm facts, services, the Hartford service area, and page links. Adapt the existing jacqlaw.com version for Hartford.
3. **Add attorney credentials** (law school, bar admission and year, AILA if applicable) to `/about` and the `Person` schema, plus "Reviewed by Attorney Goncalves · Updated <date>" on the six service pages.
4. **Link to primary sources** on each service page: USCIS form pages, USCIS processing times, the Visa Bulletin, and travel.state.gov. Aim for 2–4 links per page.
5. **Fix metadata hygiene:** shorten titles to 60 characters or fewer and descriptions to 155 or fewer, change footer `<h4>` to `<h2>`, add a 1200×630 OG image and `og:url`, and add security headers with `poweredByHeader: false`.

## 30-Day Action Plan

### Week 1: Launch Blockers & Technical
- [ ] Set `NEXT_PUBLIC_SITE_URL`; deploy; submit the sitemap to Google Search Console and Bing Webmaster Tools
- [ ] Add `/llms.txt`, security headers, the OG image, `og:url`, and a privacy policy page
- [ ] Trim titles and descriptions; fix the heading skips

### Week 2: Entity & Directory Footprint
- [ ] Claim or verify the Google Business Profile (Mystic address, service area including Hartford County); add Hartford-area categories and services
- [ ] Create profiles on Avvo, Justia, Martindale-Hubbell, Nolo, and Bing Places, using the same name, address and phone (NAP) everywhere
- [ ] Add `sameAs` links to the `LegalService` and `Person` schema

### Week 3: E-E-A-T & Citability Content
- [ ] Add credentials to `/about`; add reviewed-by lines and dates to service pages, with `dateModified` and `reviewedBy` in the schema
- [ ] Add definition-first opening sentences and sourced, dated figures (processing times, fees) to each service page
- [ ] Rewrite the 5–6 strongest town pages with real local substance, and noindex or consolidate the rest

### Week 4: Reviews, Language & Distribution
- [ ] Ask recent clients for Google reviews, especially Hartford-area clients
- [ ] Launch Spanish versions of the home page and the top 3 service pages, with `hreflang`
- [ ] Publish 1–2 short YouTube explainers and embed them on the related service pages

---

## Appendix: Pages Analyzed

| URL | Title (length) | Words | GEO Issues |
|---|---|---|---|
| / | Immigration Lawyer Hartford, CT \| Jacquelyn R. Goncalves (56) | 1,081 | 3 (desc >160, H2→H4, no citations) |
| /about | About Attorney Jacquelyn R. Goncalves \| Hartford… (71) | 586 | 5 (title, desc, credentials, H2→H4, no sameAs) |
| /services | Immigration Services Hartford, CT \| Green Cards… (79) | 301 | 4 (title, desc, thin, H2→H4) |
| /hartford-area | Immigration Attorney Greater Hartford, CT \| … (77) | 471 | 3 (title, desc, H2→H4) |
| /faq | Hartford, CT Immigration Lawyer FAQ \| … (70) | 498 | 3 (title, no figures, H2→H4) |
| /contact | Contact \| Hartford, CT Immigration Lawyer … (64) | 197 | 3 (title, no privacy policy, H2→H4) |
| /consultation | Book an Immigration Consultation \| Hartford, CT (47) | 276 | 3 (H1→H3, H2→H4, no privacy policy) |
| /services/family-based-petitions | (53) | 577 | 4 (no citations, no reviewer, no date, H2→H4) |
| /services/adjustment-of-status | (59) | 484 | 4 (same) |
| /services/consular-processing | (57) | 408 | 4 (same) |
| /services/removal-of-conditions | (54) | 440 | 4 (same) |
| /services/citizenship-naturalization | (56) | 431 | 4 (same) |
| /services/fiance-petitions | (49) | 406 | 4 (same) |
| /hartford-area/hartford … /middletown (20 pages) | (55–64) | 499–525 each | 4 each (95% duplicate, desc >160, title >60 on most, H2→H4) |

**Fetch failures:** none (33/33 returned 200).

**Sources consulted for brand authority:** [Avvo Old Mystic immigration listings](https://www.avvo.com/immigration-lawyer/ct/old_mystic.html), [USLegal Hartford immigration attorneys](https://lawyers.uslegal.com/attorneys/immigration-lawyers/connecticut/hartford_1), [Nolo: Immigration Lawyers Near Hartford](https://lawyers.nolo.com/profile/collins-martin-pc), [Visa-Pros Hartford](https://local.visa-pros.com/connecticut/hartford), [Cornell LII lawyer directory](https://lawyers.law.cornell.edu/lawyers/immigration-law/connecticut/ballouville?page=2).
