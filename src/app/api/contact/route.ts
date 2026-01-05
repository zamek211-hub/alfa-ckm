export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
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
      subject: "Nowa wiadomość z formularza",
      text: `Imię: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true, sent: true });
  } catch (err: any) {
    console.error("MAIL ERROR:", err);
    return NextResponse.json(
      { error: "Mail failed", details: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, method: "GET" });
}
