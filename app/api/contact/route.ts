import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  tel: z.string().min(6, "Phone number is required"),
  reg: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
  website: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
    }

    const data = parsed.data;

    // Honeypot check - if bot fills this hidden field, return success silently
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("No RESEND_API_KEY found. Simulating email send.");
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL || "info@automodif.se";
    const fromEmail = process.env.FROM_EMAIL || "Automodif Web <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: `Ny serviceförfrågan - ${data.reg || "Okänd bil"}`,
      replyTo: contactEmail, // As customer didn't enter email, we don't have reply-to. Should ideally ask for email if they want to be reached by mail.
      text: `
Du har fått en ny förfrågan via hemsidan (automodif.se).

Namn: ${data.name}
Telefon: ${data.tel}
Reg.nr: ${data.reg || "Ej angivet"}
Tjänst: ${data.service || "Ej angivet"}

Meddelande:
${data.message}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
