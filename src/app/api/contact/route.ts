import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formularz kontaktowy" <${process.env.ZOHO_SMTP_USER}>`,
      to: "kontakt@alfackm.pl",
      replyTo: email,
      subject: "Nowa wiadomość z formularza",
      text: `
Imię: ${name}
Email: ${email}

Wiadomość:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
