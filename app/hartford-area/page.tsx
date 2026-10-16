import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Faq, JsonLd, PageHero, SectionHead, UscisCard } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { NEIGHBORHOODS, QA, TOWNS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Immigration Lawyer Serving Greater Hartford, CT",
  description: "Immigration attorney serving Hartford, West Hartford, East Hartford, New Britain, Manchester and all of Greater Hartford by secure video.",
  path: "/hartford-area",
});

const FAQS: QA[] = [
  ["Can you represent me if you are not based in Hartford?", "Yes. Immigration law is federal, so a Connecticut attorney can represent you anywhere in the Hartford area and across the United States. We meet clients by secure video and handle documents online."],
  ["Is a video consultation as good as meeting in person?", "For most immigration matters, yes. You get the same direct attorney attention and the same careful case preparation, without the drive."],
  ["What immigration matters do you handle for Hartford clients?", "Family petitions, green cards, adjustment of status, consular processing, removal of conditions, work permit renewals, K-1 fiancé visas, and citizenship."],
];

export default function HartfordArea() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([["/hartford-area", "Greater Hartford"]]), faqSchema(FAQS)]} />
      <PageHero
        crumbs={[["/hartford-area", "Greater Hartford"]]}
        eyebrow="Central Connecticut"
        title="Immigration Lawyer for Hartford & the Capital Region"
        lede="From downtown Hartford to the towns along the I-84 and I-91 corridors, families in the capital region turn to Attorney Jacquelyn R. Goncalves for direct, personal immigration help, most of it handled conveniently by video."
      />
      <section>
        <div className="container">
          <SectionHead eyebrow="Hartford Neighborhoods" title="Every Hartford Neighborhood" />
          <ul className="towns">{NEIGHBORHOODS.map((n) => <li key={n}>{n}</li>)}</ul>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <SectionHead eyebrow="Greater Hartford" title="Towns We Serve Around Hartford">
            Choose your town to see how we help families there. Not listed? We serve all of Connecticut and clients across the U.S.
          </SectionHead>
          <ul className="town-links">
            {TOWNS.map((t) => <li key={t.slug}><Link href={`/hartford-area/${t.slug}`}>{t.name}, CT →</Link></li>)}
          </ul>
        </div>
      </section>
      <section>
        <div className="container split">
          <div>
            <span className="eyebrow">Local Landmarks in Your Case</span>
            <h2>Where Hartford Immigration Cases Happen</h2>
            <hr className="divider left" />
            <p>Most of your case is handled by mail and online, but a few in-person steps may take place right in Hartford. We tell you what to expect at each one.</p>
            <ul className="checklist">
              <li><strong>USCIS Hartford Field Office</strong>, 450 Main Street: green card and naturalization interviews</li>
              <li><strong>Hartford City Hall</strong>, 550 Main Street: marriage licenses for K-1 couples marrying in Hartford</li>
              <li><strong>Civil surgeons</strong> across Greater Hartford: I-693 immigration medical exams</li>
            </ul>
          </div>
          <UscisCard />
        </div>
      </section>
      <section className="bg-sage">
        <div className="container">
          <SectionHead title="Hartford Immigration: Common Questions" />
          <div className="faq"><Faq items={FAQS} /></div>
        </div>
      </section>
      <CtaBand title="Start Your Case From Hartford Today" />
    </>
  );
}
