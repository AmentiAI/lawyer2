import { SERVICES } from "@/lib/services";
import { CONSULT_FEES, EMAIL, FIRM, HOURS, NEIGHBORHOODS, OFFICE, PHONE, SITE_URL, TOWNS } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt: a plain-text summary of the firm for AI systems (https://llmstxt.org). */
export function GET() {
  const body = `# ${FIRM}: Hartford, CT Immigration Lawyer

> Immigration law firm serving Hartford, Connecticut and the Greater Hartford area. Attorney Jacquelyn R. Goncalves personally handles every case: family-based petitions, green cards (adjustment of status and consular processing), removal of conditions, citizenship and naturalization, and K-1 fiancé(e) visas. Hartford-area clients meet by secure video; the firm's in-person office is in Mystic, CT. Services in English, Spanish and Portuguese.

## Firm facts

- Attorney: Jacquelyn R. Goncalves (U.S. Navy veteran, six years; B.A. in English; MBA)
- Firm: ${FIRM}
- Service area: Hartford, CT and Greater Hartford (${TOWNS.map((t) => t.name).join(", ")})
- Hartford neighborhoods served: ${NEIGHBORHOODS.join(", ")}
- Meetings: secure video for Hartford-area clients; in person at ${OFFICE}
- Phone: ${PHONE} (alternate: (860) 471-3032)
- Email: ${EMAIL}
- Hours: ${HOURS.map(([d, h]) => `${d}: ${h}`).join("; ")}
- Languages: English, Spanish, Portuguese (others on request)
- Consultations: ${CONSULT_FEES.map((f) => `${f.name}, ${f.length}, ${f.price}`).join("; ")}. The 1-hour fee is credited toward attorney fees if the firm is retained.
- Local context: many Connecticut green card and naturalization interviews take place at the USCIS Hartford Field Office, 450 Main Street, Hartford, CT 06103.

## Services

${SERVICES.map((s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.definition}`).join("\n")}

## Key pages

- [Home](${SITE_URL}/): overview for Hartford clients
- [About Attorney Goncalves](${SITE_URL}/about)
- [Greater Hartford service area](${SITE_URL}/hartford-area)
- [FAQ](${SITE_URL}/faq): fees, video consultations, interviews, timelines
- [Book a consultation](${SITE_URL}/consultation)
- [Contact](${SITE_URL}/contact)

## Notes

- U.S. immigration law is federal, so the firm represents clients throughout the United States and abroad.
- Website content is general information, not legal advice. No attorney-client relationship is formed until a signed engagement agreement is in place.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
