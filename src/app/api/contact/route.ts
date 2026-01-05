export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 🔹 Konfiguracja transportera Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    // 🔹 Treść e-maila
    await transporter.sendMail({
      from: `"ALFA-CKM" <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.ZOHO_SMTP_USER, // wysyłamy do siebie (formularz kontaktowy)
      subject: `Nowa wiadomość z formularza kontaktowego`,
      text: `
        Od: ${name}
        E-mail: ${email}

        Wiadomość:
        ${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Mail error:", error);
    return NextResponse.json({ error: "Mail send failed", details: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, method: "GET" });
}
