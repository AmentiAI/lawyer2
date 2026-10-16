import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";
import { Icon, JsonLd, PageHero, SectionHead } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/schema";
import { SERVICES } from "@/lib/services";
import { CONSULT_FEES, PHONE, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Book an Immigration Consultation | Hartford, CT",
  description: "Book a $99 or $350 immigration consultation from Hartford, CT by secure video with Attorney Jacquelyn R. Goncalves. English, Spanish, Portuguese.",
  path: "/consultation",
});

const EXPECT = [
  ["video", "Video or In Person", "Secure video for Hartford clients, or meet at the Mystic office."],
  ["user", "Case Evaluation", "We review your immigration history, current status, and goals."],
  ["shield", "Confidential", "Consultations are private and protected by attorney-client privilege."],
  ["check", "Clear Action Plan", "Leave with your options, timelines, and estimated costs."],
] as const;

export default function Consultation() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([["/consultation", "Book Now"]])} />
      <PageHero
        crumbs={[["/consultation", "Book Now"]]}
        eyebrow="Book Now"
        title="Book an Immigration Consultation From Hartford"
        lede="Request a video consultation from anywhere in Greater Hartford, or an in-person meeting at our Mystic office, and tell us about your immigration matter."
      />
      <section className="section-tight">
        <div className="container">
          <SectionHead title="What to Expect" />
          <div className="grid grid-4">
            {EXPECT.map(([ic, t, d]) => (
              <div className="card" key={t}><div className="icon"><Icon name={ic} /></div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <SectionHead title="Choose a Session Length" />
          <div className="grid grid-2" style={{ maxWidth: 820, margin: "0 auto" }}>
            {CONSULT_FEES.map((f, i) => (
              <div className={`price-card${i === 1 ? " featured" : ""}`} key={f.name}>
                <h3>{f.name}</h3>
                <div className="price">{f.price}</div>
                <div className="len">{f.length} · video or in person</div>
                <p style={{ marginTop: 14, color: "var(--muted)" }}>{f.blurb}</p>
              </div>
            ))}
          </div>
          <p className="form-note" style={{ textAlign: "center", marginTop: 18 }}>
            Cancellation policy: we will reschedule you once if needed. No-show for 30 min: fee forfeited. No-show for 1 hr: reschedule once, then refund.
          </p>
        </div>
      </section>
      <section>
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionHead title="Request Your Consultation">
            Send your request and we&apos;ll confirm a time with you. Prefer to call? <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          </SectionHead>
          <InquiryForm kind="booking" matters={SERVICES.map(({ slug, name }) => ({ slug, name }))} />
          <p style={{ textAlign: "center", marginTop: 28 }}>Have questions first? <Link href="/faq">Visit our Hartford FAQ →</Link></p>
        </div>
      </section>
    </>
  );
}
