"use client";

import { FormEvent, useEffect, useState } from "react";
import { CONSULT_FEES, EMAIL, PHONE } from "@/lib/site";

type Props = { kind: "contact" | "booking"; matters?: { slug: string; name: string }[] };
type Status = { tone: "ok" | "error"; text: string } | null;

const LANGS = ["English", "Español", "Português", "Other"];

function mailtoFallback(subject: string, fields: Record<string, string>) {
  const body = Object.entries(fields)
    .filter(([k, v]) => k !== "website" && k !== "kind" && v.trim())
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function InquiryForm({ kind, matters = [] }: Props) {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [matter, setMatter] = useState("");

  // Service pages link here with ?matter=<slug> so the request arrives pre-filled.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("matter");
    const m = matters.find((x) => x.slug === slug);
    if (m) setMatter(m.name);
  }, [matters]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Object.fromEntries(Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)]));
    const subject = kind === "booking" ? "Consultation request: Hartford, CT" : "Website message from a Hartford-area client";
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, kind }),
      });
      if (res.ok) {
        form.reset();
        setStatus({ tone: "ok", text: kind === "booking" ? "Thank you! Your request was sent. We'll reply to confirm your consultation time." : "Thank you! Your message was sent. We'll be in touch soon." });
        return;
      }
      if (res.status === 503) {
        // Email delivery isn't configured on the server: hand off to the visitor's email app.
        mailtoFallback(subject, fields);
        setStatus({ tone: "ok", text: `Your email app should open with your request ready to send. If it doesn't, call ${PHONE} or email ${EMAIL}.` });
        return;
      }
      const data = await res.json().catch(() => ({}));
      setStatus({ tone: "error", text: data.error || `Something went wrong. Please call ${PHONE}.` });
    } catch {
      mailtoFallback(subject, fields);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {/* Honeypot: hidden from people, filled in by bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />

      {kind === "booking" && (
        <>
          <div>
            <label>Session</label>
            <div className="radio-cards">
              {CONSULT_FEES.map((f, i) => (
                <label key={f.name}>
                  <input type="radio" name="Session" value={`${f.short}, ${f.length} (${f.price})`} required={i === 0} />
                  {f.short}: {f.length}, {f.price}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label>Meeting type</label>
            <div className="radio-cards">
              <label><input type="radio" name="Meeting" value="Video (Hartford area)" defaultChecked />Secure video from Hartford</label>
              <label><input type="radio" name="Meeting" value="In person (Mystic office)" />In person, Mystic office</label>
            </div>
          </div>
        </>
      )}

      <div className="form-row">
        <div><label htmlFor={`${kind}-name`}>Full name</label><input id={`${kind}-name`} name="Name" required autoComplete="name" maxLength={120} /></div>
        <div><label htmlFor={`${kind}-phone`}>Phone</label><input id={`${kind}-phone`} name="Phone" type="tel" required={kind === "booking"} autoComplete="tel" maxLength={40} /></div>
      </div>
      <div className="form-row">
        <div><label htmlFor={`${kind}-email`}>Email</label><input id={`${kind}-email`} name="Email" type="email" required autoComplete="email" maxLength={200} /></div>
        <div><label htmlFor={`${kind}-town`}>Town</label><input id={`${kind}-town`} name="Town" defaultValue="Hartford, CT" maxLength={80} /></div>
      </div>

      {kind === "booking" ? (
        <>
          <div className="form-row">
            <div>
              <label htmlFor="b-matter">Matter</label>
              <select id="b-matter" name="Matter" value={matter} onChange={(e) => setMatter(e.target.value)}>
                <option value="">Select…</option>
                {matters.map((m) => <option key={m.slug}>{m.name}</option>)}
                <option>Business / Investment Immigration</option>
                <option>Not sure</option>
              </select>
            </div>
            <div><label htmlFor="b-lang">Preferred language</label><select id="b-lang" name="Language">{LANGS.map((l) => <option key={l}>{l}</option>)}</select></div>
          </div>
          <div className="form-row">
            <div><label htmlFor="b-date">Preferred date</label><input id="b-date" name="Preferred date" type="date" /></div>
            <div>
              <label htmlFor="b-time">Preferred time</label>
              <select id="b-time" name="Preferred time"><option>Morning</option><option>Afternoon</option><option>Evening (before 6 PM)</option><option>Saturday</option></select>
            </div>
          </div>
          <div><label htmlFor="b-msg">Briefly describe your situation</label><textarea id="b-msg" name="Details" maxLength={4000} /></div>
          <p className="form-note">Your consultation is confirmed once we reply with a time. Submitting this form does not create an attorney-client relationship. See our <a href="/privacy">privacy policy</a>.</p>
        </>
      ) : (
        <>
          <div><label htmlFor="c-lang">Preferred language</label><select id="c-lang" name="Language">{LANGS.map((l) => <option key={l}>{l}</option>)}</select></div>
          <div><label htmlFor="c-msg">How can we help?</label><textarea id="c-msg" name="Message" required maxLength={4000} /></div>
          <p className="form-note">Please don&apos;t include confidential details. Sending a message does not create an attorney-client relationship. See our <a href="/privacy">privacy policy</a>.</p>
        </>
      )}

      <button className={`btn ${kind === "booking" ? "btn-gold" : "btn-olive"}`} type="submit" disabled={sending}>
        {sending ? "Sending…" : kind === "booking" ? "Request Consultation" : "Send Message"}
      </button>
      {status && (
        <div className="form-status show" role="status" style={status.tone === "error" ? { background: "#fbeaea", color: "#7a1f1f" } : undefined}>
          {status.text}
        </div>
      )}
    </form>
  );
}
