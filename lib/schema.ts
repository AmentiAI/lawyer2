import { CONTENT_UPDATED, CREDENTIALS, EMAIL, FIRM, PHONE_TEL, QA, SAME_AS, SITE_URL, TOWNS } from "./site";

export const FIRM_ID = `${SITE_URL}/#firm`;
export const PERSON_ID = `${SITE_URL}/about#jacquelyn-goncalves`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Attorney"],
    "@id": FIRM_ID,
    name: FIRM,
    description:
      "Immigration lawyer serving Hartford, Connecticut and the Greater Hartford area: family petitions, green cards, citizenship, K-1 fiancé visas and removal of conditions.",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/images/attorney-goncalves.jpg`,
    telephone: PHONE_TEL,
    email: EMAIL,
    priceRange: "$99–$350 consultation",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Roosevelt Ave, Ste 9B",
      addressLocality: "Mystic",
      addressRegion: "CT",
      postalCode: "06355",
      addressCountry: "US",
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=12+Roosevelt+Ave+Ste+9B+Mystic+CT+06355",
    areaServed: TOWNS.map((t) => ({ "@type": "City", name: `${t.name}, CT` })),
    knowsLanguage: ["English", "Spanish", "Portuguese"],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
    ],
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    knowsAbout: ["Family-based immigration", "Adjustment of status", "Consular processing", "Removal of conditions", "Naturalization", "K-1 fiancé visas"],
    sameAs: SAME_AS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: "Hartford Immigration Lawyer · Law Office of Jacquelyn R. Goncalves",
    inLanguage: "en-US",
    publisher: { "@id": FIRM_ID },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Jacquelyn R. Goncalves",
    jobTitle: "Immigration Attorney",
    worksFor: { "@id": FIRM_ID },
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/attorney-goncalves-full.jpg`,
    knowsLanguage: ["English", "Spanish", "Portuguese"],
    knowsAbout: ["U.S. immigration law", "Family-based immigration", "Naturalization"],
    areaServed: "Hartford, Connecticut",
    hasOccupation: { "@type": "Occupation", name: "Attorney", occupationLocation: { "@type": "State", name: "Connecticut" } },
    ...(CREDENTIALS.lawSchool && { alumniOf: { "@type": "CollegeOrUniversity", name: CREDENTIALS.lawSchool } }),
    ...(CREDENTIALS.barAdmissions.length && {
      hasCredential: CREDENTIALS.barAdmissions.map((b) => ({ "@type": "EducationalOccupationalCredential", credentialCategory: "Bar admission", name: b })),
    }),
    ...(CREDENTIALS.memberships.length && { memberOf: CREDENTIALS.memberships.map((m) => ({ "@type": "Organization", name: m })) }),
    sameAs: SAME_AS,
  };
}

/** A legal-information page that the attorney has reviewed: dates and reviewer for AI and search. */
export function reviewedPageSchema(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": FIRM_ID },
    author: { "@id": PERSON_ID },
    reviewedBy: { "@id": PERSON_ID },
    lastReviewed: CONTENT_UPDATED,
    dateModified: CONTENT_UPDATED,
  };
}

export function breadcrumbSchema(trail: [path: string, name: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["/", "Home"] as [string, string], ...trail].map(([p, name], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${p}`,
    })),
  };
}

export function faqSchema(faqs: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

export function serviceSchema(name: string, area = "Hartford, CT") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: { "@id": FIRM_ID },
    areaServed: { "@type": "City", name: area },
  };
}
