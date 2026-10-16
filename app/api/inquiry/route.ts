import { NextResponse } from "next/server";

const MAX_FIELD = 4000;
const ALLOWED = ["Session", "Meeting", "Name", "Phone", "Email", "Town", "Matter", "Language", "Preferred date", "Preferred time", "Details", "Message"];

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden "website" field; pretend success so they move on.
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true });

  const fields: [string, string][] = ALLOWED.flatMap((k) => {
    const v = body[k];
    return typeof v === "string" && v.trim() ? [[k, v.trim().slice(0, MAX_FIELD)] as [string, string]] : [];
  });
  const get = (k: string) => fields.find(([f]) => f === k)?.[1] ?? "";

  const email = get("Email");
  if (!get("Name") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide your name and a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  const isBooking = body.kind === "booking";
  const subject = `${isBooking ? "Consultation request" : "Website message"}: ${get("Name")} (${get("Town") || "Hartford, CT"})`;
  const text = fields.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2>${escapeHtml(subject)}</h2><table cellpadding="6">${fields
    .map(([k, v]) => `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject, text, html }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "We couldn't send your message right now. Please call (860) 471-3023." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
