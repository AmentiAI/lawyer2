import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCards from "@/components/ServiceCards";
import { CtaBand, Faq, JsonLd, PageHero, SectionHead, UscisCard } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getTown, QA, TOWNS } from "@/lib/site";

type Props = { params: Promise<{ town: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTown((await params).town);
  if (!t) return {};
  return pageMeta({
    title: `Immigration Lawyer in ${t.name}, CT | Video Consults`,
    description: `Immigration attorney for ${t.name}, CT: family petitions, green cards, K-1 visas, I-751 and citizenship. Secure video consultations. (860) 471-3023.`,
    path: `/hartford-area/${t.slug}`,
  });
}

const townFaqs = (name: string): QA[] => [
  [`Do you meet with clients from ${name} in person?`, `Most ${name} clients meet with Attorney Goncalves by secure video, which saves the drive. In-person meetings are available at the firm's Mystic office.`],
  [`Where will my USCIS interview be if I live in ${name}?`, `Many Greater Hartford applicants are interviewed at the USCIS Hartford Field Office, 450 Main Street, Hartford. Your appointment notice confirms the exact location, and we prepare you for it.`],
  [`Can you help ${name} families in Spanish or Portuguese?`, "Yes. Services are available in English, Spanish, and Portuguese, with other languages available on request."],
];

export default async function TownPage({ params }: Props) {
  const t = getTown((await params).town);
  if (!t) notFound();
  const isCity = t.slug === "hartford";
  const faqs = townFaqs(t.name);
  const nearby = TOWNS.filter((o) => o.slug !== t.slug).slice(0, 8);

  return (
    <>
      <JsonLd data={[breadcrumbSchema([["/hartford-area", "Greater Hartford"], [`/hartford-area/${t.slug}`, t.name]]), faqSchema(faqs), serviceSchema("Immigration law", `${t.name}, CT`)]} />
      <PageHero
        crumbs={[["/hartford-area", "Greater Hartford"], [`/hartford-area/${t.slug}`, t.name]]}
        eyebrow={`${t.county} · Connecticut`}
        title={`Immigration Lawyer for ${t.name}, CT`}
        lede={`${t.note} Families in ${t.name} work directly with Attorney Jacquelyn R. Goncalves from the first consultation to the final approval.`}
      />
      <section>
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="prose">
            <span className="eyebrow">Personal Immigration Help in {t.name}</span>
            <h2 style={{ marginTop: 0 }}>Direct Attorney Access for {t.name} Families</h2>
            <hr className="divider left" />
            <p>
              Immigration cases affect your family, your work, and your future. {isCity ? "Hartford residents" : `Residents of ${t.name}`} deserve an attorney who knows their case personally, not a rotating team of
              paralegals. With the Law Office of Jacquelyn R. Goncalves, you work with the attorney herself at every step.
            </p>
            <div className="town-facts">
              <div><strong>Meet by video</strong><span>Secure consultations from home in {t.name}</span></div>
              <div><strong>Hartford interviews</strong><span>Preparation for the USCIS Hartford Field Office</span></div>
              <div><strong>3 languages</strong><span>English, Español, Português</span></div>
            </div>
            <ul className="checklist">
              <li>Family petitions for spouses, children, parents, and siblings</li>
              <li>Green cards through adjustment of status or consular processing</li>
              <li>K-1 fiancé(e) visas and removal of conditions</li>
              <li>Citizenship and naturalization, including interview and test preparation</li>
            </ul>
          </div>
          <UscisCard />
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <SectionHead eyebrow={`Services for ${t.name}`} title={`Immigration Services for ${t.name} Residents`} />
          <ServiceCards />
        </div>
      </section>
      <section className="bg-sage">
        <div className="container">
          <SectionHead title={`${t.name} Immigration Questions`} />
          <div className="faq"><Faq items={faqs} /></div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <SectionHead title="Nearby Towns We Serve" />
          <ul className="town-links">
            {nearby.map((o) => <li key={o.slug}><Link href={`/hartford-area/${o.slug}`}>{o.name}, CT →</Link></li>)}
          </ul>
          <p style={{ textAlign: "center", marginTop: 20 }}><Link className="card-link" href="/hartford-area">All Greater Hartford towns</Link></p>
        </div>
      </section>
      <CtaBand title={`Start Your Immigration Case From ${t.name}`} />
    </>
  );
}
