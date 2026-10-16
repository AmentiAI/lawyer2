import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">Page not found</span>
        <h1>We couldn&apos;t find that page</h1>
        <p>The page may have moved. Hartford-area clients can start here:</p>
        <p style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-olive" href="/">Home</Link>
          <Link className="btn btn-outline-dark" href="/services">Services</Link>
          <Link className="btn btn-gold" href="/consultation">Book a Consultation</Link>
        </p>
      </div>
    </section>
  );
}
