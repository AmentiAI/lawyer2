export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.hartfordimmigrationlawyer.com").replace(/\/$/, "");

export const FIRM = "Law Office of Jacquelyn R. Goncalves";
export const ATTORNEY = "Attorney Jacquelyn R. Goncalves";
export const PHONE = "(860) 471-3023";
export const PHONE_TEL = "+18604713023";
export const EMAIL = "jr@jacquelynrgoncalveslaw.com";
export const OFFICE = "12 Roosevelt Ave, Ste 9B, Mystic, CT 06355";
export const HOURS: [string, string][] = [
  ["Monday – Friday", "9:00 AM – 6:00 PM"],
  ["Saturday", "9:00 AM – 2:00 PM"],
];

export const NAV: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/hartford-area", label: "Hartford Area" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const NEIGHBORHOODS = [
  "Downtown", "Asylum Hill", "Frog Hollow", "Parkville", "South End", "Barry Square",
  "Behind the Rocks", "Blue Hills", "North End", "West End", "Clay Arsenal", "Sheldon-Charter Oak",
];

export type Town = { slug: string; name: string; county: string; note: string };

export const TOWNS: Town[] = [
  { slug: "hartford", name: "Hartford", county: "Hartford County", note: "Connecticut's capital and home to the USCIS Hartford Field Office, where many green card and citizenship interviews take place." },
  { slug: "west-hartford", name: "West Hartford", county: "Hartford County", note: "Families and professionals pursuing spousal green cards, parent petitions, and naturalization." },
  { slug: "east-hartford", name: "East Hartford", county: "Hartford County", note: "Family petitions and adjustment of status for households just across the Connecticut River from downtown." },
  { slug: "wethersfield", name: "Wethersfield", county: "Hartford County", note: "Removal of conditions, green card renewals, and citizenship applications." },
  { slug: "newington", name: "Newington", county: "Hartford County", note: "Family-based petitions and naturalization guidance." },
  { slug: "new-britain", name: "New Britain", county: "Hartford County", note: "Home to a large Polish and Latino community. Family petitions, consular processing, and citizenship." },
  { slug: "manchester", name: "Manchester", county: "Hartford County", note: "Spousal and K-1 fiancé cases, plus naturalization." },
  { slug: "bloomfield", name: "Bloomfield", county: "Hartford County", note: "Family reunification from the Caribbean and beyond, plus green card renewals." },
  { slug: "windsor", name: "Windsor", county: "Hartford County", note: "Adjustment of status and removal of conditions." },
  { slug: "windsor-locks", name: "Windsor Locks", county: "Hartford County", note: "Home to Bradley International Airport, where many relatives arriving on immigrant and K-1 visas first land." },
  { slug: "glastonbury", name: "Glastonbury", county: "Hartford County", note: "Employment-connected families, spousal petitions, and citizenship." },
  { slug: "rocky-hill", name: "Rocky Hill", county: "Hartford County", note: "Green cards for spouses and parents, and N-400 applications." },
  { slug: "farmington", name: "Farmington", county: "Hartford County", note: "Families tied to the area's hospitals and universities, along with spousal and parent petitions." },
  { slug: "avon", name: "Avon", county: "Hartford County", note: "Family petitions, consular processing, and naturalization." },
  { slug: "simsbury", name: "Simsbury", county: "Hartford County", note: "K-1 fiancé visas, marriage-based green cards, and citizenship." },
  { slug: "enfield", name: "Enfield", county: "Hartford County", note: "Family petitions and adjustment of status in northern Hartford County." },
  { slug: "vernon", name: "Vernon", county: "Tolland County", note: "Removal of conditions, green card renewals, and naturalization east of Hartford." },
  { slug: "south-windsor", name: "South Windsor", county: "Hartford County", note: "Spousal green cards and citizenship applications." },
  { slug: "bristol", name: "Bristol", county: "Hartford County", note: "Family petitions, consular processing, and N-400 preparation." },
  { slug: "middletown", name: "Middletown", county: "Middlesex County", note: "Immigration help for families and university communities just south of Hartford." },
];

export const getTown = (slug: string) => TOWNS.find((t) => t.slug === slug);

export const CONSULT_FEES = [
  { name: "General Overview Snapshot", short: "General Overview", price: "$99", length: "30 minutes", blurb: "Quick answers and an overview of your options." },
  { name: "Start Working on Your Case", short: "Start Your Case", price: "$350", length: "1 hour", blurb: "An in-depth review, credited toward attorney fees if you retain the office." },
];

export const TESTIMONIALS = [
  { quote: "My experience with Jacquelyn during my naturalization process last year was incredibly smooth and efficient. From the moment she submitted my application, everything progressed rapidly — I had my interview scheduled just two months later, and the entire process took only three months to complete. I was amazed by the speed! Jacquelyn also ensured I had all the necessary resources to prepare for and pass the test. I'm really thankful for her support!", who: "CL, Miami, FL" },
  { quote: "I had an amazing experience with Jacquelyn. From the beginning, the whole process was fast and incredibly smooth. She is professional, organized, and always available to answer my questions and guide me through every step. What could have been a stressful process felt easy because of her knowledge, attention to detail, and dedication. Everything was handled efficiently, and I always felt confident that my case was in good hands. I highly recommend her to anyone looking for an attorney who is trustworthy, responsive, and genuinely cares about their clients.", who: "AS, Stuart, FL" },
];

export type QA = [question: string, answer: string];

/** Shown as "Updated …" on service pages and emitted as dateModified/lastReviewed in schema. */
export const CONTENT_UPDATED = "2026-10-16";
export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

/**
 * Official profiles for the firm and attorney (schema `sameAs`). Add Avvo, Justia, Google Business
 * Profile, LinkedIn, etc. as they are created; AI systems use these to confirm who the firm is.
 */
export const SAME_AS: string[] = ["https://www.jacqlaw.com"];

/**
 * Attorney credentials. TODO: fill these in with verified details from the attorney. Empty
 * values are hidden on the page and omitted from structured data, so nothing unverified is published.
 */
export const CREDENTIALS = {
  lawSchool: "", // e.g. "Roger Williams University School of Law, J.D."
  barAdmissions: [] as string[], // e.g. ["Connecticut (2021)"]
  memberships: [] as string[], // e.g. ["American Immigration Lawyers Association (AILA)"]
};
