import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { EMAIL, FIRM, HOURS, OFFICE, PHONE, PHONE_TEL, TOWNS } from "@/lib/site";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link className="brand" href="/">
                <span className="brand-mark">JG</span>
                <span className="brand-text"><strong>{FIRM}</strong><span>Serving Hartford, CT</span></span>
              </Link>
              <p style={{ marginTop: 16 }}>Guiding Hartford families through the immigration process with personal care and attention, from the first consultation to the final approval.</p>
            </div>
            <div>
              <h2 className="footer-heading">Quick Links</h2>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/hartford-area">Greater Hartford Area</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/consultation">Book a Consultation</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="footer-heading">Hartford Services</h2>
              <ul>
                {SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}
                <li><Link href="/services">View all services →</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="footer-heading">Contact</h2>
              <ul>
                <li><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></li>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li>Hartford-area clients: secure video consultations</li>
                <li>In-person office: {OFFICE}</li>
                {HOURS.map(([d, h]) => <li key={d}>{d}: {h}</li>)}
              </ul>
            </div>
          </div>
          <div className="footer-local">
            <p>Immigration help across Greater Hartford</p>
            <ul>
              {TOWNS.map((t) => <li key={t.slug}><Link href={`/hartford-area/${t.slug}`}>Immigration Lawyer {t.name}, CT</Link></li>)}
            </ul>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {FIRM}. All rights reserved. Serving clients in Hartford, Connecticut and throughout the United States.</p>
            <p>Attorney advertising. This website is for informational purposes only and does not constitute legal advice. No attorney-client relationship is formed until a signed engagement agreement is in place. The firm&apos;s physical office is located in Mystic, CT; Hartford-area consultations are held by video or at the Mystic office.</p>
          </div>
        </div>
      </footer>
      <div className="mobile-bar">
        <a className="call" href={`tel:${PHONE_TEL}`}>Call Now</a>
        <Link className="book" href="/consultation">Book Consultation</Link>
      </div>
    </>
  );
}
