import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, HoursRows, Icon, JsonLd, PageHero, SectionHead, UscisCard } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/schema";
import { ATTORNEY, CREDENTIALS, EMAIL, FIRM, OFFICE, PHONE, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Attorney Jacquelyn R. Goncalves | Hartford, CT",
  description: "Meet Jacquelyn R. Goncalves, a U.S. Navy veteran and immigration attorney serving Hartford, CT families in English, Spanish and Portuguese.",
  path: "/about",
});

const SETS_APART = [
  ["user", "Direct Attorney Access", "Work directly with Attorney Goncalves on every case. Your case is never handed off to staff or paralegals."],
  ["anchor", "Navy Discipline", "Six years of U.S. Navy service instilled the attention to detail clients rely on."],
  ["chat", "Multilingual Services", "Full legal services in English, Spanish, and Portuguese. Other languages are available on request."],
  ["check", "Clear Guidance", "Complex immigration rules explained in plain language so you always know your options."],
] as const;

export default function About() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([["/about", "About"]]),
        ]}
      />
      <PageHero
        crumbs={[["/about", "About"]]}
        eyebrow="About the Attorney"
        title="About Attorney Jacquelyn R. Goncalves, Serving Hartford, CT"
        lede="Helping individuals, families, and businesses in Hartford and across Connecticut navigate the U.S. immigration system with clarity, compassion, and personal attention."
      />
      <section>
        <div className="container split">
          <div className="split-photo">
            <Image src="/images/attorney-goncalves-full.jpg" alt="Jacquelyn R. Goncalves, immigration attorney serving Hartford, CT" width={654} height={1024} sizes="(max-width: 820px) 100vw, 560px" />
          </div>
          <div className="prose">
            <span className="eyebrow">Jacquelyn R. Goncalves · Attorney at Law</span>
            <h2 style={{ marginTop: 0 }}>A Hartford Family&apos;s Immigration Case Deserves an Attorney Who Knows Them</h2>
            <hr className="divider left" />
            <p>{ATTORNEY} is dedicated to helping individuals, families, and businesses in Hartford and throughout Connecticut navigate the U.S. immigration system. Her path to becoming an attorney was shaped by service, communication, and a commitment to helping others through complex challenges.</p>
            <p>Before entering the legal profession, Jacquelyn proudly served in the <strong>United States Navy for six years</strong>. Her military service shaped the discipline, attention to detail, and dedication to service that continue to guide her work with clients today.</p>
            <p>Jacquelyn earned her bachelor&apos;s degree in English and later completed her <strong>MBA</strong> before pursuing her legal education. This background lets her communicate clearly, think strategically, and understand the personal, family, and professional goals behind immigration matters.</p>
            <p>She founded her firm to provide a more personal and accessible legal experience. At larger firms, clients may be passed between multiple attorneys, paralegals, or staff members. At the {FIRM}, Hartford clients work directly with Jacquelyn from the initial consultation through the resolution of their case.</p>
            {(CREDENTIALS.lawSchool || CREDENTIALS.barAdmissions.length > 0 || CREDENTIALS.memberships.length > 0) && (
              <div className="callout">
                <strong>Credentials</strong>
                <ul className="checklist" style={{ margin: "10px 0 0" }}>
                  {CREDENTIALS.lawSchool && <li>{CREDENTIALS.lawSchool}</li>}
                  {CREDENTIALS.barAdmissions.map((b) => <li key={b}>Admitted to practice: {b}</li>)}
                  {CREDENTIALS.memberships.map((m) => <li key={m}>Member, {m}</li>)}
                  <li>U.S. Navy veteran (six years of service)</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container split">
          <div className="prose">
            <span className="eyebrow">A Hands-On, Concierge-Style Approach</span>
            <h2 style={{ marginTop: 0 }}>Built for Busy Hartford Families</h2>
            <hr className="divider left" />
            <p>Immigration matters are often life-changing. They affect families, careers, businesses, and futures. That is why Jacquelyn takes a hands-on, concierge-style approach, guiding Hartford clients through each step, answering questions promptly, and staying available when concerns come up.</p>
            <p>Whether you are pursuing a family-based petition, consular processing, a fiancé(e) visa, citizenship and naturalization, removal of conditions, or a business and investment immigration matter, Jacquelyn provides dedicated advocacy and personalized guidance.</p>
            <p>Her goal is simple: to help every client feel informed, supported, and confident throughout their immigration journey.</p>
          </div>
          <div className="grid grid-2">
            {SETS_APART.map(([ic, t, d]) => (
              <div className="card" key={t}><div className="icon"><Icon name={ic} /></div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead eyebrow="How We Serve Hartford" title="Video-First Representation for the Capital Region">
            The firm&apos;s office is in Mystic, Connecticut. U.S. immigration law is federal, so Attorney Goncalves represents clients in Hartford, throughout Connecticut, across the United States, and abroad. Hartford-area clients meet by secure video and share documents online, and in-person meetings at the Mystic office are always available.
          </SectionHead>
          <div className="grid grid-3">
            <div className="place-card"><div className="head">Hartford Clients</div><div className="body"><p style={{ margin: 0, color: "var(--muted)" }}>Secure video consultations, online document sharing, and phone or email updates directly from your attorney.</p></div></div>
            <UscisCard />
            <div className="place-card">
              <div className="head">In-Person Office</div>
              <div className="body">
                <dl>
                  <dt>Address</dt><dd>{OFFICE}</dd>
                  <dt>Phone</dt><dd><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></dd>
                  <dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
                  <HoursRows />
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
