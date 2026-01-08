export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * API: /api/contact
 * Odbiera dane z formularza kontaktowego
 * Wysyła maila przez Zoho SMTP
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, subject, message } = body;

    // 🔒 Walidacja danych
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ALFA-CKM" <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.ZOHO_SMTP_USER,
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
  } catch (err: any) {
    console.error("MAIL ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Mail sending failed",
        details: err?.message,
      },
      { status: 500 }
    );
  }
}

/**
 * GET – test endpointu
 */
export async function GET() {
  return NextResponse.json({ ok: true });
}
