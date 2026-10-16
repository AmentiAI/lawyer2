import type { Metadata } from "next";
import { JsonLd, PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/schema";
import { CONTENT_UPDATED, EMAIL, FIRM, formatDate, OFFICE, PHONE, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | Law Office of Jacquelyn R. Goncalves",
  description: "How the Law Office of Jacquelyn R. Goncalves collects, uses and protects information submitted through this website's contact and booking forms.",
  path: "/privacy",
});

// TODO: have the attorney review this policy before launch, and update it if analytics or other tools are added.
export default function Privacy() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([["/privacy", "Privacy Policy"]])} />
      <PageHero crumbs={[["/privacy", "Privacy Policy"]]} eyebrow="Legal" title="Privacy Policy" lede={`Last updated ${formatDate(CONTENT_UPDATED)}`} />
      <section>
        <div className="container">
          <div className="prose">
            <p>This policy explains how the {FIRM} (&quot;we&quot;, &quot;us&quot;) handles information you share through this website.</p>

            <h2>Information We Collect</h2>
            <p>We collect only what you choose to send us through the contact and consultation forms: your name, email address, phone number, town, preferred language, the type of immigration matter, preferred appointment times, and any message you write. We do not use advertising trackers on this site.</p>

            <h2>How We Use It</h2>
            <ul>
              <li>To respond to your inquiry and schedule a consultation</li>
              <li>To evaluate whether we can help with your immigration matter</li>
              <li>To keep a record of the communication</li>
            </ul>
            <p>We do not sell, rent, or share your information for marketing.</p>

            <h2>How It Is Delivered</h2>
            <p>Form submissions are sent to the firm by email through a third-party email delivery provider, which processes the message only to deliver it. If your browser opens your own email app instead, your message is sent through your email provider.</p>

            <h2>Confidentiality</h2>
            <p>Please don&apos;t send confidential or sensitive details, such as immigration history, A-numbers, or criminal records, through the website forms. Submitting a form does not create an attorney-client relationship. Once you retain the firm, your communications are protected by attorney-client privilege and professional confidentiality rules.</p>

            <h2>Retention and Your Choices</h2>
            <p>We keep inquiry records only as long as needed to respond and to meet professional record-keeping obligations. You may ask us to access, correct, or delete the information you sent by contacting us.</p>

            <h2>Contact</h2>
            <p>
              {FIRM}<br />
              {OFFICE}<br />
              <a href={`tel:${PHONE_TEL}`}>{PHONE}</a> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
