import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Faq, JsonLd, PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema, faqSchema, reviewedPageSchema, serviceSchema } from "@/lib/schema";
import { getService, SERVICES } from "@/lib/services";
import { CONTENT_UPDATED, formatDate, PHONE, PHONE_TEL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.description, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();

  return (
    <>
      <JsonLd data={[breadcrumbSchema([["/services", "Services"], [`/services/${s.slug}`, s.name]]), faqSchema(s.faqs), serviceSchema(s.name), reviewedPageSchema(`/services/${s.slug}`, s.title)]} />
      <PageHero crumbs={[["/services", "Services"], [`/services/${s.slug}`, s.name]]} eyebrow={`${s.eyebrow} · Hartford, CT`} title={s.h1} lede={s.lede} />
      <section>
        <div className="container layout-aside">
          <article className="prose">
            <p className="reviewed">
              Reviewed by <Link href="/about">Attorney Jacquelyn R. Goncalves</Link> · Updated <time dateTime={CONTENT_UPDATED}>{formatDate(CONTENT_UPDATED)}</time>
            </p>
            <p className="definition">{s.definition}</p>
            {s.content}
            <h2>{s.name}: Hartford Questions</h2>
            <div className="faq" style={{ margin: 0 }}><Faq items={s.faqs} /></div>
            <h2>Official Sources</h2>
            <ul className="sources">
              {s.sources.map((src) => (
                <li key={src.url}><a href={src.url} target="_blank" rel="noopener noreferrer">{src.label}</a></li>
              ))}
            </ul>
            <p className="form-note">Government fees, forms and processing times change. This page is general information, not legal advice for your situation.</p>
          </article>
          <aside className="aside-card">
            <h3>Start Your {s.name} Case From Hartford</h3>
            <p>Meet Attorney Goncalves by secure video. 30-minute ($99) and 1-hour ($350, credited toward fees) consultations are available.</p>
            <Link className="btn btn-gold" href={`/consultation?matter=${s.slug}`}>Book Consultation</Link>
            <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE}</a>
            <ul>
              <li style={{ border: 0, color: "var(--gold-light)", fontWeight: 600 }}>Other Hartford services</li>
              {SERVICES.filter((o) => o.slug !== s.slug).map((o) => (
                <li key={o.slug}><Link href={`/services/${o.slug}`}>{o.name}</Link></li>
              ))}
              <li><Link href="/services">← All services</Link></li>
            </ul>
          </aside>
        </div>
      </section>
      <CtaBand title={`Discuss Your ${s.name} Case in Hartford`} text="Serving Hartford, West Hartford, East Hartford, New Britain, Manchester, and every town in the capital region." />
    </>
  );
}
