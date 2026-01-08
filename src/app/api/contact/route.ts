export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * API: /api/contact
 * Formularz kontaktowy – wysyłka maila przez Zoho SMTP
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Walidacja
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Transporter SMTP (Zoho)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,      // np. smtp.zoho.eu
      port: Number(process.env.SMTP_PORT!), // 465
      secure: true, // wymagane dla 465
      auth: {
        user: process.env.SMTP_USER!, // kontakt@alfackm.pl
        pass: process.env.SMTP_PASS!, // App Password
      },
    });

    // Wysyłka maila
    await transporter.sendMail({
      from: `"ALFA-CKM" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL!, // kontakt@alfackm.pl
      replyTo: email,
      subject: `[Kontakt – ${subject}]`,
      text: `
Nowa wiadomość z formularza kontaktowego ALFA-CKM

Imię i nazwisko: ${name}
E-mail: ${email}
Telefon: ${phone}
Temat: ${subject}

Wiadomość:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Mail sending failed" },
      { status: 500 }
    );
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ ok: true });
}
