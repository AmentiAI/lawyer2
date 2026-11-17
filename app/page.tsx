import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, Faq, JsonLd } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { faqSchema } from "@/lib/schema";
import { SERVICES } from "@/lib/services";
import {
  ATTORNEY,
  BOOK_URL,
  CONSULT_FEES,
  NEIGHBORHOODS,
  PHONE,
  PHONE_TEL,
  QA,
  TOWNS,
} from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Immigration Lawyer Hartford, CT | Jacquelyn R. Goncalves",
  description: "Hartford, CT immigration lawyer for green cards, family petitions, K-1 visas and citizenship. Work directly with Attorney Goncalves by secure video.",
  path: "/",
});

const FAQS: QA[] = [
  ["Do you represent immigration clients in Hartford, CT?", "Yes. U.S. immigration law is federal, so Attorney Goncalves represents clients in Hartford and every town in Greater Hartford. Most Hartford clients meet with her by secure video, and documents are exchanged online, so there is no need to drive to the shoreline."],
  ["How much does a consultation cost?", "A 30-minute General Overview Snapshot is $99. A 1-hour Start Working on Your Case consultation is $350 and is credited toward attorney fees if you retain the office. Both are available by video for Hartford-area clients."],
  ["Will my green card or citizenship interview be in Hartford?", "Many Connecticut residents are interviewed at the USCIS Hartford Field Office at 450 Main Street. Your appointment notice confirms the location, and Attorney Goncalves prepares you for what to expect."],
  ["Do you speak Spanish or Portuguese?", "Yes. Services are available in English, Spanish, and Portuguese, with other languages available on request."],
];

const CREDENTIALS = [
  { k: "Direct counsel", v: "You work with the attorney on every matter—not a rotating staff." },
  { k: "Languages", v: "English, Spanish, and Portuguese. Other languages on request." },
  { k: "Hartford interviews", v: "Preparation for the USCIS Hartford Field Office at 450 Main Street." },
  { k: "U.S. Navy veteran", v: "Six years of service, applied as discipline and care on every file." },
];

const STEPS = [
  { n: "01", t: "Schedule", d: "Book a video consultation or call the office. Share a brief outline of your matter." },
  { n: "02", t: "Consult", d: "Meet Attorney Goncalves by secure video from anywhere in Greater Hartford." },
  { n: "03", t: "Prepare", d: "Petitions and evidence are assembled, reviewed, and filed correctly the first time." },
  { n: "04", t: "Follow through", d: "You hear from your attorney at each step, including Hartford interview preparation." },
];

export default function Home() {
  return (
    <div className="home">
      <JsonLd data={faqSchema(FAQS)} />

      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-kicker">Immigration law · Hartford, Connecticut</p>
            <h1>Counsel for Hartford families, from the first petition to the final interview.</h1>
            <p className="lede">
              Greater Hartford clients work directly with {ATTORNEY} on family petitions, green cards, and citizenship—by secure video, without a drive to the shoreline.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={BOOK_URL}>Book a Consultation</a>
              <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE}</a>
            </div>
            <p className="home-hero-meta">Video consultations · English · Español · Português</p>
          </div>
          <figure className="home-portrait">
            <Image
              src="/images/attorney-goncalves.jpg"
              alt="Attorney Jacquelyn R. Goncalves, immigration lawyer serving Hartford, Connecticut"
              width={673}
              height={1024}
              priority
              sizes="(max-width: 820px) 280px, 380px"
            />
            <figcaption>
              <strong>Jacquelyn R. Goncalves</strong>
              <span>Attorney at Law</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="home-strip" aria-label="Firm highlights">
        <div className="container home-strip-grid">
          {CREDENTIALS.map((c) => (
            <div key={c.k}>
              <p className="home-strip-label">{c.k}</p>
              <p>{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-practices">
        <div className="container">
          <div className="home-intro">
            <p className="home-kicker dark">Practice areas</p>
            <h2>Immigration matters handled personally for Hartford families</h2>
            <p>Each case is prepared and filed by Attorney Goncalves. Business and investment immigration is also available.</p>
          </div>
          <ul className="home-practice-list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <span className="home-form">{s.form}</span>
                  <span className="home-practice-copy">
                    <strong>{s.name}</strong>
                    <span>{s.blurb}</span>
                  </span>
                  <span className="home-practice-go" aria-hidden="true">View</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="home-center">
            <Link className="btn btn-outline-dark" href="/services">All Hartford services</Link>
          </p>
        </div>
      </section>

      <section className="home-attorney">
        <div className="container home-attorney-grid">
          <figure className="home-attorney-photo">
            <Image
              src="/images/attorney-goncalves-full.jpg"
              alt="Jacquelyn R. Goncalves, immigration attorney serving Hartford, CT"
              width={654}
              height={1024}
              sizes="(max-width: 820px) 100vw, 480px"
            />
          </figure>
          <div>
            <p className="home-kicker dark">The attorney</p>
            <h2>You work with Jacquelyn. Not a team of associates.</h2>
            <p>
              Before founding her practice, Jacquelyn served six years in the United States Navy. She later earned a bachelor&apos;s degree in English and an MBA—training that shows in how she explains options, prepares files, and stays reachable when a USCIS notice arrives.
            </p>
            <p>
              Hartford clients are never passed between paralegals. From the first video meeting through a hearing at 450 Main Street, the attorney on your case is the attorney you hired.
            </p>
            <ul className="home-cred-row">
              <li>U.S. Navy veteran</li>
              <li>B.A. English · MBA</li>
              <li>Direct attorney access</li>
            </ul>
            <Link className="btn btn-olive" href="/about">Meet Attorney Goncalves</Link>
          </div>
        </div>
      </section>

      <section className="home-process">
        <div className="container">
          <div className="home-intro">
            <p className="home-kicker dark">The process</p>
            <h2>Four steps, without leaving Hartford</h2>
          </div>
          <ol className="home-steps">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="home-step-n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-consult">
        <div className="container home-consult-grid">
          <div>
            <p className="home-kicker dark">Consultations</p>
            <h2>Start with a clear conversation</h2>
            <p>Choose a 30-minute overview or a one-hour working session. Both are available by video for Hartford-area clients. The one-hour fee is credited toward attorney fees if you retain the office.</p>
            <div className="home-fees">
              {CONSULT_FEES.map((f) => (
                <article key={f.short}>
                  <p className="home-fee-label">{f.short}</p>
                  <p className="home-fee-price">{f.price}</p>
                  <p className="home-fee-len">{f.length}</p>
                  <p>{f.blurb}</p>
                </article>
              ))}
            </div>
            <a className="btn btn-gold" href={BOOK_URL}>Book a Consultation</a>
          </div>
          <aside className="home-uscis">
            <p className="home-kicker">USCIS Hartford Field Office</p>
            <h2>450 Main Street</h2>
            <p>Abraham Ribicoff Federal Building. Many Connecticut green card and naturalization interviews are held here.</p>
            <dl>
              <div>
                <dt>What happens here</dt>
                <dd>Adjustment interviews, N-400 interviews, and civics tests for many Connecticut applicants.</dd>
              </div>
              <div>
                <dt>How we prepare you</dt>
                <dd>Document review, interview coaching, and a clear list of what to bring.</dd>
              </div>
            </dl>
            <p className="form-note">USCIS assigns the interview location. Confirm the office printed on your appointment notice.</p>
          </aside>
        </div>
      </section>

      <section className="home-quotes">
        <div className="container">
          <div className="home-intro">
            <p className="home-kicker dark">Client remarks</p>
            <h2>What clients say about the work</h2>
          </div>
          <div className="home-quote-grid">
            <blockquote>
              <p>“My experience with Jacquelyn during my naturalization process last year was incredibly smooth and efficient. From the moment she submitted my application, everything progressed rapidly. Jacquelyn also ensured I had all the necessary resources to prepare for and pass the test.”</p>
              <cite>CL, Miami, FL</cite>
            </blockquote>
            <blockquote>
              <p>“She is professional, organized, and always available to answer my questions. What could have been a stressful process felt easy because of her knowledge, attention to detail, and dedication. I always felt confident that my case was in good hands.”</p>
              <cite>AS, Stuart, FL</cite>
            </blockquote>
          </div>
          <p className="home-quote-note">Because immigration law is federal, Attorney Goncalves represents clients in Hartford, across the United States, and abroad.</p>
        </div>
      </section>

      <section className="home-area">
        <div className="container home-area-grid">
          <div>
            <p className="home-kicker dark">Greater Hartford</p>
            <h2>Serving the capital region by video</h2>
            <p>From Asylum Hill to West Hartford, New Britain, and Manchester, families meet with the office online. In-person meetings are available at the Mystic office when preferred.</p>
            <Link className="btn btn-outline-dark" href="/hartford-area">Greater Hartford service area</Link>
          </div>
          <div>
            <h3>Hartford neighborhoods</h3>
            <ul className="home-chips">
              {NEIGHBORHOODS.map((n) => <li key={n}>{n}</li>)}
            </ul>
            <h3>Nearby towns</h3>
            <ul className="home-chips">
              {TOWNS.slice(1).map((t) => (
                <li key={t.slug}><Link href={`/hartford-area/${t.slug}`}>{t.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-faq">
        <div className="container home-faq-grid">
          <div>
            <p className="home-kicker dark">Questions</p>
            <h2>Hartford immigration FAQs</h2>
            <p>Fees, languages, video meetings, and the Hartford Field Office.</p>
            <Link className="card-link" href="/faq">All frequently asked questions</Link>
          </div>
          <div className="faq"><Faq items={FAQS} /></div>
        </div>
      </section>

      <CtaBand
        title="Discuss your immigration matter with the attorney"
        text="Book a secure video consultation from anywhere in Greater Hartford, or call the office during business hours."
      />
    </div>
  );
}
