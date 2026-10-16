import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { Icon } from "./ui";

export default function ServiceCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <div className="grid grid-3">
      {SERVICES.map((s) => (
        <Link className="card" href={`/services/${s.slug}`} key={s.slug}>
          <div className="icon"><Icon name={s.icon} /></div>
          <span className="form-tag">{s.form}</span>
          <H>{s.name}</H>
          <p>{s.blurb}</p>
          <span className="card-link">Learn more</span>
        </Link>
      ))}
    </div>
  );
}
