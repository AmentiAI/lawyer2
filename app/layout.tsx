import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { orgSchema, personSchema, websiteSchema } from "@/lib/schema";
import { FIRM, SITE_URL } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dmsans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Immigration Lawyer Hartford, CT | Jacquelyn R. Goncalves",
    template: "%s",
  },
  description:
    "Hartford, CT immigration lawyer for green cards, family petitions, K-1 visas and citizenship. Work directly with Attorney Goncalves by secure video.",
  applicationName: FIRM,
  twitter: { card: "summary_large_image" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: FIRM,
  },
  other: {
    "geo.region": "US-CT",
    "geo.placename": "Hartford",
    "geo.position": "41.7658;-72.6734",
    ICBM: "41.7658, -72.6734",
  },
};

export const viewport: Viewport = { themeColor: "#2a3318" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <JsonLd data={[orgSchema(), websiteSchema(), personSchema()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
