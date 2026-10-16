import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import { CtaBand, HoursRows, JsonLd, PageHero, UscisCard } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/schema";
import { EMAIL, OFFICE, PHONE, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact a Hartford, CT Immigration Lawyer",
  description: "Contact immigration attorney Jacquelyn R. Goncalves from Hartford, CT. Call (860) 471-3023 or send a message. Secure video consultations.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([["/contact", "Contact"]])} />
      <PageHero crumbs={[["/contact", "Contact"]]} eyebrow="Contact" title="Contact a Hartford Immigration Lawyer" lede="Call, email, or send a message. Hartford-area clients hear back directly from Attorney Goncalves." />
      <section>
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <h2>Send a Message</h2>
            <hr className="divider left" />
            <InquiryForm kind="contact" />
          </div>
          <div className="grid" style={{ gap: 20 }}>
            <div className="place-card">
              <div className="head">Hartford-Area Clients</div>
              <div className="body">
                <dl>
                  <dt>Phone</dt><dd><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></dd>
                  <dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
                  <dt>Meetings</dt><dd>Secure video from anywhere in Greater Hartford</dd>
                  <HoursRows />
                </dl>
              </div>
            </div>
            <div className="place-card">
              <div className="head">In-Person Office</div>
              <div className="body">
                <dl><dt>Address</dt><dd>{OFFICE}</dd></dl>
                <p style={{ margin: "14px 0 0" }}>
                  <a className="card-link" href="https://www.google.com/maps/dir/Hartford,+CT/12+Roosevelt+Ave,+Mystic,+CT+06355" target="_blank" rel="noopener noreferrer">Directions from Hartford</a>
                </p>
              </div>
            </div>
            <UscisCard />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
