import type { Metadata } from "next";
import { CtaBand, Faq, JsonLd, PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { QA } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Hartford Immigration Lawyer FAQ | Fees & Interviews",
  description: "Answers for Hartford, CT immigration clients: consultation fees, video meetings, USCIS Hartford Field Office interviews, languages and timelines.",
  path: "/faq",
});

const GROUPS: [string, QA[]][] = [
  ["Working With a Hartford Immigration Attorney", [
    ["Do you serve clients in Hartford, CT?", "Yes. U.S. immigration law is federal, so Attorney Goncalves represents clients in Hartford, every town in Greater Hartford, across the United States, and abroad. Hartford clients usually meet by secure video."],
    ["Where is your office?", "The firm's in-person office is at 12 Roosevelt Ave, Ste 9B, Mystic, CT 06355. Hartford-area clients usually meet by video, and in-person meetings in Mystic are always available."],
    ["Will I work directly with the attorney?", "Yes. Attorney Jacquelyn Goncalves personally handles every case and works directly with clients throughout the process. Clients are never passed between attorneys or staff."],
    ["What languages do you speak?", "We assist clients in English, Spanish, and Portuguese. Other languages are available on request."],
    ["Do I need an attorney for my immigration case?", "You are not legally required to hire one, but immigration law is complicated and mistakes can lead to delays, denials, or added stress. An attorney helps make sure your paperwork is right and that you understand your options."],
  ]],
  ["Consultations & Fees", [
    ["How much does an immigration consultation cost?", "General Overview Snapshot: 30-minute consultation, $99. Start Working on Your Case: 1-hour consultation, $350, credited toward attorney fees if you retain the office. Both are available by video for Hartford clients."],
    ["How do I start the immigration process?", "Schedule a consultation. Attorney Goncalves will review your case, explain the process, answer your questions, and outline next steps."],
    ["What is your cancellation policy?", "We will reschedule you once if needed. A no-show for a 30-minute consultation forfeits the fee. For a 1-hour consultation, you may reschedule once, after which the fee is refunded."],
    ["What documents should I have ready?", "It depends on your matter. Common documents include passports, birth and marriage certificates, prior immigration records, financial documents, and identification. We tell you exactly what your case needs."],
  ]],
  ["Hartford-Specific Questions", [
    ["Where will my USCIS interview be?", "Many Connecticut green card and citizenship interviews are held at the USCIS Hartford Field Office, 450 Main Street, Hartford. Your notice confirms the exact location."],
    ["Can you come to my Hartford interview?", "Attorney representation at interviews can be arranged. Ask about this during your consultation so it can be included in your case plan."],
    ["How long does the immigration process take?", "It depends on the case type, government backlogs, and your circumstances. Some cases take several months and others longer. We explain your timeline and keep you informed."],
    ["Can you help with business and investment immigration?", "Yes. In addition to family-based immigration, we assist with business and investment immigration matters, including LLC applications and financial documentation."],
  ]],
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([["/faq", "FAQ"]]), faqSchema(GROUPS.flatMap(([, g]) => g))]} />
      <PageHero
        crumbs={[["/faq", "FAQ"]]}
        eyebrow="Questions? We're Here to Help."
        title="Hartford Immigration Law: Frequently Asked Questions"
        lede="Answers to common questions from Hartford-area clients about our services, consultations, and the immigration process."
      />
      <section>
        <div className="container">
          <div className="faq">
            {GROUPS.map(([h, g]) => (
              <div className="faq-group" key={h}><h2>{h}</h2><Faq items={g} /></div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
