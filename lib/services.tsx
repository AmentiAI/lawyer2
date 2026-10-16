import type { ReactNode } from "react";
import type { IconName } from "@/components/ui";
import type { QA } from "./site";

export type Service = {
  slug: string;
  name: string;
  form: string;
  icon: IconName;
  blurb: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  /** One-sentence, definition-first summary: the passage AI answers most often quote. */
  definition: string;
  /** Official government sources backing the page's claims. */
  sources: { label: string; url: string }[];
  content: ReactNode;
  faqs: QA[];
};

export const SERVICES: Service[] = [
  {
    slug: "family-based-petitions",
    name: "Family Based Petitions",
    form: "I-130",
    icon: "family",
    definition: "Form I-130, Petition for Alien Relative, is the USCIS form a U.S. citizen or lawful permanent resident files to prove a qualifying family relationship with a relative who wants to immigrate.",
    sources: [{"label": "USCIS: Form I-130, Petition for Alien Relative", "url": "https://www.uscis.gov/i-130"}, {"label": "U.S. Department of State: Visa Bulletin", "url": "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html"}, {"label": "USCIS: Check case processing times", "url": "https://egov.uscis.gov/processing-times/"}, {"label": "USCIS: Current filing fees", "url": "https://www.uscis.gov/forms/filing-fees"}],
    blurb: "I-130 petitions to reunite Hartford families with spouses, children, parents, and siblings.",
    title: "Family Petition Lawyer Hartford, CT | I-130 Petitions",
    description: "Hartford, CT I-130 family petition lawyer. Sponsor a spouse, child, parent or sibling with Attorney Goncalves. Video consultations available.",
    eyebrow: "Family-Based Petition · Form I-130",
    h1: "Family Immigration Petitions for Hartford Families",
    lede: "Whether you are sponsoring a spouse in Hartford, a parent in Kingston, or an adult child in São Paulo, Attorney Goncalves builds your family petition from the ground up: documenting the relationship, choosing the correct category, and guiding your family through every federal step.",
    content: (
      <>
        <p>A family-based petition (Form I-130, Petition for Alien Relative) is often the first step toward permanent residence for a relative. It establishes the qualifying relationship between you, the petitioner, and your family member, whether they live abroad or already here in Hartford. Without an approved petition, no immigrant visa or green card can be issued.</p>
        <p>Attorney Goncalves personally reviews every petition before it is filed. Hartford clients work directly with the attorney from consultation through approval and are never passed between paralegals or support staff.</p>
        <h2>Immediate Relatives vs. Preference Categories</h2>
        <p>Which category your relative falls into determines whether they wait months or years.</p>
        <div className="compare">
          <div><h3>Immediate Relatives: No Annual Cap</h3><p>Spouses, unmarried children under 21, and parents of U.S. citizens. Visas are always available, and if the relative is already in Connecticut, the petition can often be filed together with a green card application.</p></div>
          <div><h3>Family Preference: Visa Bulletin</h3><p>Other relationships (F1, F2A, F2B, F3, F4) have annual caps. Your priority date, the date USCIS receives the petition, sets your place in line. Sibling (F4) cases can involve waits of many years depending on the country of birth.</p></div>
        </div>
        <div className="callout"><strong>Hartford tip:</strong> Filing early locks in your priority date even when the wait is long. If you are a permanent resident and later naturalize, your relative&apos;s category may upgrade, sometimes cutting years off the wait.</div>
        <h2>Common Reasons USCIS Issues an RFE on Family Petitions</h2>
        <ul>
          <li>Name discrepancies across birth certificates, passports, and marriage records</li>
          <li>Insufficient proof of a bona fide marriage in spousal cases</li>
          <li>Missing certified translations of Spanish, Portuguese, Polish, or other foreign-language documents</li>
          <li>Failure to establish a step-parent or adoptive-parent relationship</li>
          <li>Prior immigration violations not addressed in the petition</li>
          <li>Incomplete proof of the petitioner&apos;s U.S. citizenship or permanent resident status</li>
        </ul>
      </>
    ),
    faqs: [
      ["Can I petition for my same-sex spouse from Hartford?", "Yes. Same-sex marriages valid where performed are recognized for federal immigration purposes, and the spousal petition process is the same."],
      ["What if my relative is already in Connecticut without status?", "Unlawful presence can create serious complications. Depending on how your relative entered and how long they have been here, they may need a waiver or may not be able to adjust here. We evaluate this before anything is filed."],
      ["Does filing a petition give my relative legal status?", "No. A petition alone does not grant work authorization or protection from removal. Your relative must keep their own valid status or wait abroad until a visa is available."],
      ["What are the government filing fees?", "USCIS fees change periodically. Attorney Goncalves confirms current fees at your consultation and includes government fees in your case estimate."],
    ],
  },
  {
    slug: "adjustment-of-status",
    name: "Adjustment of Status",
    form: "I-485",
    icon: "card",
    definition: "Form I-485, Application to Register Permanent Residence or Adjust Status, is the USCIS form an eligible person already in the United States files to become a lawful permanent resident without leaving the country.",
    sources: [{"label": "USCIS: Form I-485", "url": "https://www.uscis.gov/i-485"}, {"label": "USCIS: Form I-864, Affidavit of Support", "url": "https://www.uscis.gov/i-864"}, {"label": "USCIS: Form I-693, medical exam", "url": "https://www.uscis.gov/i-693"}, {"label": "USCIS: Form I-765, work permit", "url": "https://www.uscis.gov/i-765"}, {"label": "USCIS: Hartford Field Office", "url": "https://www.uscis.gov/about-us/find-a-uscis-office/field-offices/connecticut-hartford-field-office"}, {"label": "USCIS: Check case processing times", "url": "https://egov.uscis.gov/processing-times/"}],
    blurb: "Apply for your green card without leaving Connecticut through the I-485 process.",
    title: "Adjustment of Status Lawyer Hartford, CT | I-485 Green Card",
    description: "Apply for a green card without leaving Hartford. Attorney Goncalves prepares I-485 cases and gets you ready for your USCIS Hartford interview.",
    eyebrow: "Adjustment of Status · Form I-485",
    h1: "Apply for Your Green Card Without Leaving Hartford",
    lede: "If you are already in the United States and eligible, adjustment of status lets you become a permanent resident while staying home in Hartford with your family and your job.",
    content: (
      <>
        <p>Adjustment of status (Form I-485) is the process of applying for lawful permanent residence from inside the United States. For many Hartford families, especially spouses, parents, and minor children of U.S. citizens, it means no trip abroad and no separation from loved ones.</p>
        <h2>What a Typical Hartford Adjustment Case Includes</h2>
        <ul>
          <li><strong>Form I-485</strong>, the green card application itself</li>
          <li><strong>Form I-864</strong>, the Affidavit of Support showing the sponsor&apos;s income, with a joint sponsor if needed</li>
          <li><strong>Form I-765</strong> for a work permit and <strong>Form I-131</strong> for advance parole travel while the case is pending</li>
          <li>A medical exam (Form I-693) by a USCIS-designated civil surgeon, several of whom practice in the Hartford area</li>
          <li>A biometrics appointment, then in many cases an interview, often at the <strong>USCIS Hartford Field Office, 450 Main Street</strong></li>
        </ul>
        <div className="callout"><strong>Interview preparation matters.</strong> Attorney Goncalves walks Hartford clients through the questions officers commonly ask, organizes your evidence, and makes sure you know what to bring to 450 Main Street.</div>
        <h2>Who May Be Eligible</h2>
        <p>Eligibility generally depends on how you entered the U.S., your current or past status, and the basis of your application. Immediate relatives of U.S. citizens who were inspected and admitted are often eligible even if their status has since expired. Other applicants face stricter rules. Every situation is different, so a consultation comes before any filing.</p>
      </>
    ),
    faqs: [
      ["Can I work while my Hartford adjustment case is pending?", "In most cases, yes. Filing Form I-765 with your I-485 lets you request an employment authorization document while your green card application is pending."],
      ["Can I travel outside the U.S. while my case is pending?", "Leaving without advance parole can cause your application to be treated as abandoned. We file Form I-131 when travel is needed and advise you on the risks before you go."],
      ["Where will my green card interview be?", "Many Connecticut applicants are interviewed at the USCIS Hartford Field Office. Your interview notice states the exact location."],
      ["How long does adjustment take?", "Processing times vary with USCIS backlogs and your case type. We give you a realistic timeline at consultation and keep you updated."],
    ],
  },
  {
    slug: "consular-processing",
    name: "Consular Processing",
    form: "NVC / DS-260",
    icon: "globe",
    definition: "Consular processing is how a relative living outside the United States gets an immigrant visa at a U.S. embassy or consulate after a petition is approved, then enters the country as a permanent resident.",
    sources: [{"label": "U.S. Department of State: The immigrant visa process", "url": "https://travel.state.gov/content/travel/en/us-visas/immigrate/the-immigrant-visa-process.html"}, {"label": "U.S. Department of State: Visa Bulletin", "url": "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html"}, {"label": "USCIS: Form I-864, Affidavit of Support", "url": "https://www.uscis.gov/i-864"}],
    blurb: "Immigrant visa processing for relatives abroad through U.S. embassies and consulates.",
    title: "Consular Processing Lawyer Hartford, CT | Immigrant Visas",
    description: "Bring your relative to Hartford through consular processing: NVC, DS-260 and embassy interview preparation by Attorney Goncalves.",
    eyebrow: "Consular Processing · NVC & DS-260",
    h1: "Bringing Your Family From Abroad to Hartford",
    lede: "When your relative lives outside the United States, consular processing is how they get an immigrant visa and arrive in Hartford as a permanent resident.",
    content: (
      <>
        <p>After USCIS approves the petition, the case moves to the National Visa Center (NVC) and then to a U.S. embassy or consulate in your relative&apos;s home country. Hartford families commonly work with posts such as Kingston, Santo Domingo, Rio de Janeiro, Bogotá, Warsaw, and many others.</p>
        <h2>The Consular Process, Step by Step</h2>
        <ol>
          <li><strong>Petition approval</strong>: USCIS approves the I-130 or other petition.</li>
          <li><strong>NVC stage</strong>: fees are paid, the DS-260 immigrant visa application is filed, and civil documents plus the I-864 Affidavit of Support from the Hartford sponsor are submitted.</li>
          <li><strong>Documentarily qualified</strong>: NVC confirms the file is complete and schedules the interview when a visa is available.</li>
          <li><strong>Medical exam and interview</strong> at the embassy or consulate abroad.</li>
          <li><strong>Arrival in the U.S.</strong>: your relative enters as a permanent resident and the green card is mailed to your Hartford address.</li>
        </ol>
        <div className="callout"><strong>Avoid costly delays.</strong> Most consular delays come from incomplete civil documents, weak financial sponsorship, or missed NVC deadlines. Attorney Goncalves manages the NVC stage for you and prepares your relative for the interview, in Spanish or Portuguese when needed.</div>
      </>
    ),
    faqs: [
      ["My Hartford income is low. Can my relative still immigrate?", "Possibly. A joint sponsor, household member income, or significant assets may help meet the I-864 requirement. We review the options at your consultation."],
      ["Can you help if my relative's visa was refused?", "Yes. We review the refusal reason, whether it is a missing document, a request for administrative processing, or an inadmissibility finding, and advise on next steps, including waivers where available."],
      ["Do I need to travel for the interview?", "No. The interview is for your relative at the embassy or consulate abroad. The Hartford petitioner usually does not attend."],
    ],
  },
  {
    slug: "removal-of-conditions",
    name: "Removal of Conditions",
    form: "I-751",
    icon: "check",
    definition: "Form I-751, Petition to Remove Conditions on Residence, is the USCIS form a conditional permanent resident who immigrated through marriage files to receive a 10-year green card.",
    sources: [{"label": "USCIS: Form I-751", "url": "https://www.uscis.gov/i-751"}, {"label": "USCIS: Hartford Field Office", "url": "https://www.uscis.gov/about-us/find-a-uscis-office/field-offices/connecticut-hartford-field-office"}, {"label": "USCIS: Check case processing times", "url": "https://egov.uscis.gov/processing-times/"}, {"label": "USCIS: Current filing fees", "url": "https://www.uscis.gov/forms/filing-fees"}],
    blurb: "Convert a two-year conditional green card to a 10-year card with Form I-751.",
    title: "Removal of Conditions Lawyer Hartford, CT | Form I-751",
    description: "Turn your 2-year conditional green card into a 10-year card. Hartford I-751 lawyer, including waiver cases after divorce or separation.",
    eyebrow: "Removal of Conditions · Form I-751",
    h1: "Removing Conditions on Your Green Card in Hartford",
    lede: "If you received a two-year conditional green card through marriage, you must file Form I-751 on time to keep your permanent residence. Attorney Goncalves makes sure your Hartford case is filed correctly and well documented.",
    content: (
      <>
        <p>Marriage-based green cards issued before the second wedding anniversary are <strong>conditional</strong> and expire after two years. To get a 10-year card, the couple usually files Form I-751 jointly during the <strong>90 days before the card expires</strong>.</p>
        <h2>Proving Your Marriage Is Real</h2>
        <p>USCIS wants evidence that you built a life together. Strong Hartford I-751 filings often include:</p>
        <ul>
          <li>A joint lease or mortgage for your Hartford-area home</li>
          <li>Joint bank accounts, tax returns, and insurance policies</li>
          <li>Birth certificates of children born to the marriage</li>
          <li>Photos over time, travel records, and affidavits from people who know you as a couple</li>
        </ul>
        <h2>Divorced, Separated, or Facing Hardship?</h2>
        <p>You may still be able to remove conditions on your own by requesting a <strong>waiver of the joint filing requirement</strong>, for example if the marriage was entered in good faith but ended in divorce, if you experienced abuse, or if removal would cause extreme hardship. These cases need careful documentation, and Attorney Goncalves handles them regularly.</p>
        <div className="callout"><strong>Don&apos;t miss the deadline.</strong> If the I-751 is not filed on time, conditional residence can end automatically and removal proceedings may begin. If you are past the deadline, contact us right away.</div>
      </>
    ),
    faqs: [
      ["Can I travel or work while my I-751 is pending?", "Yes. The I-751 receipt notice extends your conditional status for a set period, and together with your green card it serves as evidence of status for work and travel."],
      ["Will I have an interview in Hartford?", "Some I-751 cases are approved without an interview. When one is scheduled, it is often at the USCIS Hartford Field Office, and we prepare you for it."],
      ["My spouse won't sign the joint petition. What can I do?", "You may be able to file with a waiver instead. We evaluate your evidence and the best waiver basis at your consultation."],
    ],
  },
  {
    slug: "citizenship-naturalization",
    name: "Citizenship and Naturalization",
    form: "N-400",
    icon: "flag",
    definition: "Form N-400, Application for Naturalization, is the USCIS form a lawful permanent resident files to become a U.S. citizen.",
    sources: [{"label": "USCIS: Form N-400", "url": "https://www.uscis.gov/n-400"}, {"label": "USCIS: Study for the civics and English test", "url": "https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test"}, {"label": "USCIS: Hartford Field Office", "url": "https://www.uscis.gov/about-us/find-a-uscis-office/field-offices/connecticut-hartford-field-office"}, {"label": "USCIS: Check case processing times", "url": "https://egov.uscis.gov/processing-times/"}, {"label": "Hartford Public Library: Immigration & citizenship services", "url": "https://www.hplct.org/library-services/immigration-citizenship"}],
    blurb: "N-400 applications, civics test preparation, and Hartford interview guidance.",
    title: "Citizenship & Naturalization Lawyer Hartford, CT | N-400",
    description: "Become a U.S. citizen in Hartford. N-400 preparation, civics and English test prep, and interview guidance for the USCIS Hartford Field Office.",
    eyebrow: "Citizenship & Naturalization · Form N-400",
    h1: "Becoming a U.S. Citizen in Hartford",
    lede: "Naturalization is the final step of many immigration journeys. Attorney Goncalves prepares your N-400, gets you ready for the civics and English tests, and guides you to your oath ceremony.",
    content: (
      <>
        <h2>General Eligibility</h2>
        <ul>
          <li>Permanent resident for <strong>5 years</strong>, or <strong>3 years</strong> if married to and living with a U.S. citizen</li>
          <li>Continuous residence and physical presence in the U.S.</li>
          <li>At least 3 months living in Connecticut (or your USCIS district) before filing</li>
          <li>Good moral character, plus the ability to read, write, and speak basic English, with some age-based exceptions</li>
          <li>Knowledge of U.S. history and government (the civics test)</li>
        </ul>
        <h2>Your Hartford Naturalization Interview</h2>
        <p>Many Connecticut applicants are interviewed at the <strong>USCIS Hartford Field Office, 450 Main Street</strong>. The officer reviews your N-400 under oath and gives the English and civics tests. Attorney Goncalves prepares you for every part of the interview and the questions commonly asked.</p>
        <div className="callout"><strong>Naturalization with a criminal record or long trips abroad?</strong> Arrests, convictions, unpaid taxes, and long absences can affect eligibility, and in some cases can put your green card at risk. Have your history reviewed before you file.</div>
        <h2>Study Resources in Hartford</h2>
        <p>In addition to our test preparation, Hartford residents can find free citizenship classes and study materials through community programs such as The American Place at Hartford Public Library.</p>
      </>
    ),
    faqs: [
      ["How long does naturalization take in Connecticut?", "It varies with USCIS workload. One of our clients had an interview about two months after filing and finished in about three months, but timelines differ. We give you a current estimate at consultation."],
      ["Can my children become citizens when I naturalize?", "Children under 18 who are permanent residents and in your legal and physical custody generally become citizens automatically when you naturalize. We can help document their citizenship afterward."],
      ["What if I fail the English or civics test?", "You get a second chance, usually within 60 to 90 days, on the part you did not pass. We help you prepare for the retest."],
    ],
  },
  {
    slug: "fiance-petitions",
    name: "Fiancé Petitions",
    form: "I-129F / K-1",
    icon: "heart",
    definition: "A K-1 visa lets the foreign fiancé(e) of a U.S. citizen enter the United States to marry the petitioner within 90 days and then apply for a green card. The process starts with Form I-129F, Petition for Alien Fiancé(e).",
    sources: [{"label": "USCIS: Form I-129F", "url": "https://www.uscis.gov/i-129f"}, {"label": "U.S. Department of State: Fianc\u00e9(e) K-1 visa", "url": "https://travel.state.gov/content/travel/en/us-visas/immigrate/family-immigration/nonimmigrant-visa-for-a-fiance-k-1.html"}, {"label": "USCIS: Check case processing times", "url": "https://egov.uscis.gov/processing-times/"}],
    blurb: "K-1 fiancé(e) visas to bring your partner to Hartford to marry.",
    title: "K-1 Fiancé Visa Lawyer Hartford, CT | Form I-129F",
    description: "Bring your fiancé(e) to Hartford to marry. K-1 visa petitions (I-129F), embassy interview preparation, and the green card after your Hartford wedding.",
    eyebrow: "Fiancé Petitions · I-129F / K-1 Visa",
    h1: "K-1 Fiancé(e) Visas: Bringing Your Partner to Hartford",
    lede: "If you are a U.S. citizen engaged to someone abroad, the K-1 visa lets your fiancé(e) travel to Hartford so you can marry here and then apply for a green card.",
    content: (
      <>
        <h2>The K-1 Process for Hartford Couples</h2>
        <ol>
          <li><strong>File Form I-129F</strong> with proof you are both free to marry, have met in person within the past two years (with limited exceptions), and intend to marry.</li>
          <li><strong>NVC and embassy</strong>: your fiancé(e) completes the DS-160, a medical exam, and an interview at the U.S. embassy or consulate.</li>
          <li><strong>Travel to Hartford</strong> on the K-1 visa.</li>
          <li><strong>Marry within 90 days</strong> of arrival. In Hartford, marriage licenses are issued by the Town &amp; City Clerk at City Hall, 550 Main Street.</li>
          <li><strong>Adjust status</strong>: file Form I-485 for the green card, along with work and travel permits.</li>
        </ol>
        <div className="compare">
          <div><h3>K-1 Fiancé(e) Visa</h3><p>Marry in Hartford after arrival, then file for the green card here. A good fit if you want the wedding in Connecticut.</p></div>
          <div><h3>Spousal Visa (CR-1/IR-1)</h3><p>Marry abroad first, then your spouse arrives as a permanent resident. Often fewer steps after arrival. We help you choose.</p></div>
        </div>
        <div className="callout"><strong>Children of your fiancé(e)</strong> under 21 and unmarried may qualify for K-2 visas to travel to Hartford with or after their parent.</div>
      </>
    ),
    faqs: [
      ["What if we don't marry within 90 days?", "K-1 status cannot be extended, and your fiancé(e) generally cannot change to another status. Plan the Hartford wedding before the visa interview so you can marry on time."],
      ["Can my fiancé(e) work after arriving in Hartford?", "A K-1 entrant can request work authorization, but most couples get it through the I-765 filed with the green card application after the wedding."],
      ["Is K-1 or a spousal visa better for us?", "It depends on where you want to marry, cost, timing, and family needs. Attorney Goncalves compares both paths at your consultation."],
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
