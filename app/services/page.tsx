import type { Metadata } from "next";
import Link from "next/link";
import ServiceCards from "@/components/ServiceCards";
import { CtaBand, JsonLd, PageHero, SectionHead } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Hartford, CT Immigration Services | Green Cards & More",
  description: "Hartford immigration services: I-130 family petitions, I-485 green cards, consular processing, I-751, N-400 citizenship and K-1 fiancé visas.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([["/services", "Services"]])} />
      <PageHero
        crumbs={[["/services", "Services"]]}
        eyebrow="Hartford Immigration Services"
        title="Immigration Legal Services in Hartford, CT"
        lede="Family petitions, green cards, consular processing, removal of conditions, citizenship, and fiancé visas for Hartford families, each handled personally by Attorney Goncalves."
      />
      <section>
        <div className="container">
          <SectionHead title="Family-Based Immigration for Greater Hartford">
            Hartford is home to families with roots across the Caribbean, Latin America, Brazil, Portugal, Eastern Europe, Africa, and Asia. Whatever your family&apos;s story, these are the paths we help Hartford residents take.
          </SectionHead>
          <ServiceCards headingLevel="h2" />
        </div>
      </section>
      <section className="bg-white">
        <div className="container split">
          <div>
            <span className="eyebrow">Also Available</span>
            <h2>Business &amp; Investment Immigration</h2>
            <hr className="divider left" />
            <p>Hartford&apos;s insurance, healthcare, and education sectors draw entrepreneurs and professionals from around the world. Attorney Goncalves also assists with business and investment immigration matters, including LLC applications and financial documentation.</p>
            <Link className="btn btn-olive" href="/consultation">Discuss a Business Matter</Link>
          </div>
          <div>
            <h3>Immigration Topics We Handle for Hartford Clients</h3>
            <ul className="checklist">
              <li>Marriage-based green cards and spousal petitions</li>
              <li>Petitions for children, parents, and brothers or sisters</li>
              <li>Forms I-130, I-485, I-864, I-765, I-90, I-751, and N-400</li>
              <li>Naturalization with a criminal history</li>
              <li>Removal of conditions after divorce or separation</li>
              <li>Green card renewal and replacement (I-90)</li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
