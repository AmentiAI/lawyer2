import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { SITE_URL, TOWNS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/about", "/services", "/hartford-area", "/faq", "/contact", "/consultation", "/privacy",
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...TOWNS.map((t) => `/hartford-area/${t.slug}`),
  ];
  return paths.map((p) => ({
    url: `${SITE_URL}${p === "/" ? "" : p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
