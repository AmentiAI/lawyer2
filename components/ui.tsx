import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { HOURS, PHONE, PHONE_TEL, QA, TESTIMONIALS } from "@/lib/site";

const ICONS: Record<string, ReactNode> = {
  family: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></>,
  check: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></>,
  flag: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><path d="M4 22v-7" /></>,
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />,
  user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  video: <><path d="m23 7-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  anchor: <><circle cx="12" cy="5" r="3" /><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" /></>,
  map: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
};
export type IconName = keyof typeof ICONS;

export function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }} />
      ))}
    </>
  );
}

// Skyline geometry: viewBox is 1440x160 with the ground at y=160.
const SKY_W = 1440;
const SKY_H = 160;

/** Deterministic pseudo-random sequence so the skyline renders identically everywhere. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

type Block = { x: number; w: number; h: number };

function row(seed: number, minW: number, maxW: number, minH: number, maxH: number, gap: number): Block[] {
  const r = seeded(seed);
  const out: Block[] = [];
  for (let x = -10; x < SKY_W + 10; ) {
    const w = Math.round(minW + r() * (maxW - minW));
    out.push({ x, w, h: Math.round(minH + r() * (maxH - minH)) });
    x += w + Math.round(r() * gap);
  }
  return out;
}

const FAR = row(7, 34, 70, 70, 118, 4);
const MID = row(21, 30, 58, 44, 92, 6);
const FRONT = row(42, 40, 90, 16, 40, 0);

// Lit windows on the mid layer: a sparse, irregular scatter reads as an evening city.
const WINDOWS = (() => {
  const r = seeded(99);
  const out: { x: number; y: number }[] = [];
  for (const b of MID) {
    for (let y = SKY_H - b.h + 8; y < SKY_H - 34; y += 9) {
      for (let x = b.x + 5; x < b.x + b.w - 6; x += 8) {
        if (r() < 0.22) out.push({ x, y });
      }
    }
  }
  return out;
})();

/** Stylized Hartford skyline: Travelers Tower, the State Capitol, and downtown, layered for depth. */
export function Skyline() {
  return (
    <svg className="skyline" viewBox={`0 0 ${SKY_W} ${SKY_H}`} preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="sky-glow" cx="50%" cy="100%" r="60%" fx="50%" fy="100%">
          <stop offset="0%" stopColor="#d4b84a" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#d4b84a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width={SKY_W} height={SKY_H} fill="url(#sky-glow)" />

      {/* Far layer */}
      <g fill="rgba(255,255,255,0.05)">
        {FAR.map((b, i) => <rect key={i} x={b.x} y={SKY_H - b.h} width={b.w} height={b.h} />)}
      </g>

      {/* Mid layer with lit windows */}
      <g fill="rgba(149,168,106,0.32)">
        {MID.map((b, i) => <rect key={i} x={b.x} y={SKY_H - b.h} width={b.w} height={b.h} />)}
      </g>
      <g fill="#e2c867" opacity="0.55">
        {WINDOWS.map((w, i) => <rect key={i} x={w.x} y={w.y} width="3" height="4" />)}
      </g>

      {/* Front layer: same color as the page below so the banner flows into it */}
      <g fill="currentColor">
        {FRONT.map((b, i) => <rect key={i} x={b.x} y={SKY_H - b.h} width={b.w + 1} height={b.h} />)}

        {/* City Place-style tower with stepped crown */}
        <rect x="520" y="58" width="40" height="102" />
        <rect x="526" y="50" width="28" height="9" />
        <rect x="533" y="44" width="14" height="7" />

        {/* Travelers Tower */}
        <rect x="614" y="40" width="48" height="120" />
        <rect x="621" y="27" width="34" height="14" />
        <polygon points="621,27 638,5 655,27" />
        <rect x="636" y="0" width="4" height="7" />

        {/* Gold Building-style slab */}
        <rect x="690" y="70" width="44" height="90" />
        <rect x="696" y="64" width="32" height="7" />

        {/* State Capitol: wings, gothic corner pinnacles, drum */}
        <rect x="790" y="120" width="180" height="40" />
        <rect x="834" y="104" width="92" height="56" />
        <rect x="796" y="108" width="12" height="13" /><polygon points="796,108 802,98 808,108" />
        <rect x="952" y="108" width="12" height="13" /><polygon points="952,108 958,98 964,108" />
        <rect x="834" y="96" width="10" height="9" /><polygon points="834,96 839,88 844,96" />
        <rect x="916" y="96" width="10" height="9" /><polygon points="916,96 921,88 926,96" />
        <rect x="860" y="84" width="40" height="21" />

        <rect x="1010" y="78" width="38" height="82" />
        <rect x="1016" y="72" width="26" height="7" />
      </g>

      {/* Travelers Tower mullions and beacon */}
      <g stroke="rgba(42,51,24,0.08)" strokeWidth="1">
        {[624, 632, 640, 648, 656].map((x) => <line key={x} x1={x} y1={46} x2={x} y2={116} />)}
      </g>
      <circle cx="638" cy="3" r="2.2" fill="#e2c867" />

      {/* Capitol colonnade, gold dome and finial */}
      <g stroke="rgba(42,51,24,0.1)" strokeWidth="1.5">
        {[866, 873, 880, 887, 894].map((x) => <line key={x} x1={x} y1={88} x2={x} y2={103} />)}
      </g>
      <path d="M856 86 Q880 38 904 86 Z" fill="#c9a227" />
      <path d="M866 80 Q880 52 894 80" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      <rect x="876" y="44" width="8" height="10" fill="#c9a227" />
      <rect x="879" y="32" width="2" height="13" fill="#c9a227" />
    </svg>
  );
}

export function PageHero({ crumbs, eyebrow, title, lede }: { crumbs: [string, string][]; eyebrow: string; title: ReactNode; lede: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map(([href, name], i) =>
            i < crumbs.length - 1 ? (
              <span key={href}> / <Link href={href}>{name}</Link></span>
            ) : (
              <span key={href}> / {name}</span>
            ),
          )}
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{lede}</p>
      </div>
      <Skyline />
    </section>
  );
}

export function SectionHead({ eyebrow, title, children }: { eyebrow?: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <hr className="divider" />
      {children && <p>{children}</p>}
    </div>
  );
}

export function CtaBand({
  title = "Ready to Discuss Your Immigration Case in Hartford?",
  text = "Schedule a consultation by secure video from anywhere in Greater Hartford. Attorney Goncalves will review your situation and outline a clear path forward.",
}: { title?: string; text?: string }) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="actions">
          <Link className="btn btn-gold" href="/consultation">Book Consultation</Link>
          <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: QA[] }) {
  return (
    <>
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <div><p>{a}</p></div>
        </details>
      ))}
    </>
  );
}

export function UscisCard() {
  return (
    <div className="place-card">
      <div className="head">USCIS Hartford Field Office</div>
      <div className="body">
        <dl>
          <dt>Address</dt><dd>Abraham Ribicoff Federal Building, 450 Main Street, Hartford, CT 06103</dd>
          <dt>What happens here</dt><dd>Green card interviews, naturalization interviews and civics tests for many Connecticut applicants</dd>
          <dt>How we help</dt><dd>Interview preparation, document review, and guidance on what to bring and expect</dd>
        </dl>
        <p className="form-note" style={{ margin: "14px 0 0" }}>USCIS sets interview locations. Check your appointment notice for the exact office assigned to your case.</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <>
      <div className="grid grid-2">
        {TESTIMONIALS.map((t) => (
          <blockquote className="quote" key={t.who}>
            <div className="stars" aria-label="5 stars">★★★★★</div>
            <p>“{t.quote}”</p>
            <cite>— {t.who}</cite>
          </blockquote>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: 24, color: "var(--muted)", fontSize: ".92rem" }}>
        Because immigration law is federal, Attorney Goncalves represents clients in Hartford, across the U.S., and abroad.
      </p>
    </>
  );
}

export function HoursRows() {
  return (
    <>
      {HOURS.map(([d, h]) => (
        <Fragment key={d}><dt>{d}</dt><dd>{h}</dd></Fragment>
      ))}
    </>
  );
}
