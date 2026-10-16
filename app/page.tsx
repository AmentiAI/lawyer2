import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCards from "@/components/ServiceCards";
import { CtaBand, Faq, Icon, JsonLd, SectionHead, Skyline, Testimonials, UscisCard } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { faqSchema } from "@/lib/schema";
import { ATTORNEY, NEIGHBORHOODS, PHONE, PHONE_TEL, QA, TOWNS } from "@/lib/site";

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

const WHY = [
  ["Direct Attorney Access", "You work directly with Attorney Goncalves from the initial consultation through the resolution of your case, and you are never passed between staff."],
  ["Concierge-Style Service", "Prompt answers, clear guidance, and availability when concerns come up, whether that's a USCIS notice or the night before your Hartford interview."],
  ["Multilingual Support", "English, Spanish, and Portuguese, serving Hartford's Puerto Rican, Latin American, Brazilian, and Portuguese-speaking communities."],
  ["Clear Communication", "An English and MBA background means complex immigration rules are explained in plain language."],
  ["Video-First for Hartford", "Meet by secure video from home or work in Hartford. No I-91 traffic and no drive to the shoreline."],
  ["Military Discipline", "Six years of U.S. Navy service shaped the attention to detail and dedication behind every client relationship."],
];

const STEPS = [
  ["chat", "1. Reach out", "Book online or call. Tell us briefly what you need: a green card, citizenship, a petition, or just answers."],
  ["video", "2. Meet by video", "Talk with the attorney over secure video from anywhere in the Hartford area."],
  ["shield", "3. We prepare everything", "Your petition and evidence are assembled, reviewed, and filed correctly the first time."],
  ["check", "4. Stay informed", "You hear directly from your attorney at each step, including interview prep for the Hartford Field Office."],
] as const;

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">Immigration Lawyer · Hartford, Connecticut</span>
            <h1>Hartford Immigration Lawyer Guiding Families With <em>Personal Care</em> and Attention</h1>
            <p className="lede">From Asylum Hill to the South End, and from West Hartford to Manchester, Greater Hartford families work directly with {ATTORNEY} on green cards, family petitions, and citizenship, mostly by secure video, so you never have to make the drive.</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" href="/consultation">Book a Hartford Consultation</Link>
              <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE}</a>
            </div>
            <ul className="hero-badges">
              <li>Direct attorney access</li><li>English · Español · Português</li><li>U.S. Navy veteran</li>
            </ul>
          </div>
          <figure className="hero-photo">
            <Image src="/images/attorney-goncalves.jpg" alt="Attorney Jacquelyn R. Goncalves, immigration lawyer serving Hartford, Connecticut" width={673} height={1024} priority sizes="(max-width: 820px) 260px, 340px" />
            <figcaption><strong>Jacquelyn R. Goncalves</strong>Immigration Attorney · Serving Hartford</figcaption>
          </figure>
        </div>
        <Skyline />
      </section>

      <section>
        <div className="container split">
          <div>
            <span className="eyebrow">Concierge-Style Representation for Hartford</span>
            <h2>Personal Attention. Clear Guidance.</h2>
            <hr className="divider left" />
            <p>We understand that immigration is more than paperwork. For families in Hartford, it is about your future, your relatives, and your peace of mind.</p>
            <p>At many larger firms, Hartford clients are passed between associates and paralegals. Here, <strong>you work directly with Attorney Goncalves from start to finish</strong>, from your first video consultation to the day you walk out of the USCIS Hartford Field Office with good news.</p>
            <ul className="checklist">
              <li>Direct attorney involvement on every Hartford case</li>
              <li>English, Spanish, and Portuguese, with other languages available on request</li>
              <li>Secure video meetings from anywhere in Greater Hartford</li>
              <li>Family-based immigration focus</li>
            </ul>
            <Link className="btn btn-outline-dark" href="/about">Meet Attorney Goncalves</Link>
          </div>
          <div><UscisCard /></div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <SectionHead eyebrow="Hartford Immigration Services" title="Immigration Legal Services for Hartford Families">
            From family petitions to citizenship, every Hartford case is handled with direct attorney involvement. Business and investment immigration matters are also available.
          </SectionHead>
          <ServiceCards />
          <p style={{ textAlign: "center", marginTop: 36 }}><Link className="btn btn-olive" href="/services">View All Hartford Services</Link></p>
        </div>
      </section>

      <section className="bg-olive">
        <div className="container">
          <SectionHead eyebrow="Why Hartford Clients Choose Us" title="A Tradition of Personal Advocacy" />
          <div className="grid grid-3">
            {WHY.map(([t, d], i) => (
              <div className="feature" key={t}><span className="num">{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead eyebrow="How It Works From Hartford" title="Four Simple Steps, Without Leaving Hartford" />
          <div className="grid grid-4">
            {STEPS.map(([ic, t, d]) => (
              <div className="card" key={t}><div className="icon"><Icon name={ic} /></div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="container">
          <SectionHead eyebrow="Neighborhoods & Towns" title="Serving All of Hartford and Its Neighbors" />
          <ul className="towns">{NEIGHBORHOODS.map((n) => <li key={n}>{n}</li>)}</ul>
          <ul className="towns" style={{ marginTop: 14 }}>
            {TOWNS.slice(1).map((t) => <li key={t.slug}><Link href={`/hartford-area/${t.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{t.name}</Link></li>)}
          </ul>
          <p style={{ textAlign: "center", marginTop: 28 }}><Link className="btn btn-outline-dark" href="/hartford-area">See the Greater Hartford Service Area</Link></p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <SectionHead eyebrow="Client Stories" title="What Our Clients Say" />
          <Testimonials />
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead eyebrow="Questions? We're Here to Help." title="Hartford Immigration FAQs" />
          <div className="faq"><Faq items={FAQS} /></div>
          <p style={{ textAlign: "center", marginTop: 24 }}><Link className="card-link" href="/faq">View all FAQs</Link></p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
