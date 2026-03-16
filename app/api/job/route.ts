import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const name = formData.get("name") as string;
    const tel = formData.get("tel") as string;
    const role = formData.get("role") as string;
    const message = formData.get("message") as string;
    const website = formData.get("website") as string; // Honeypot
    
    const cvFile = formData.get("cv") as File | null;
    const coverFile = formData.get("cover") as File | null;

    // Basic validation
    if (!name || !tel || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("No RESEND_API_KEY found. Simulating job application email.");
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL || "info@automodif.se";
    const fromEmail = process.env.FROM_EMAIL || "Automodif Web <onboarding@resend.dev>";

    // Prepare attachments
    const attachments = [];

    if (cvFile && cvFile.size > 0) {
      const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: cvBuffer,
      });
    }

    if (coverFile && coverFile.size > 0) {
      const coverBuffer = Buffer.from(await coverFile.arrayBuffer());
      attachments.push({
        filename: coverFile.name,
        content: coverBuffer,
      });
    }

    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: `Ny jobbansökan - ${role || "Öppen ansökan"} - ${name}`,
      text: `
Du har fått en ny jobbansökan via hemsidan (automodif.se).

Namn: ${name}
Telefon: ${tel}
Söker tjänst: ${role || "Ej angivet"}

Kort om mig:
${message}

Bifogade filer: ${attachments.length} st.
      `.trim(),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to process job application:", error);
    return NextResponse.json({ ok: false, error: "Ett internt fel uppstod." }, { status: 500 });
  }
}
