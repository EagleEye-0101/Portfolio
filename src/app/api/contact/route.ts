import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL ?? "kalim.codes@gmail.com";

    if (!resend) {
      return NextResponse.json(
        {
          error:
            "Email service not configured. Set RESEND_API_KEY or use NEXT_PUBLIC_FORMSPREE_ID for static export.",
        },
        { status: 503 },
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <h2>New message from portfolio</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
