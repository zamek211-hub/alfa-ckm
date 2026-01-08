import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!),
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"ALFA-CKM" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Kontakt – ${subject}]`,
      text: `
Imię: ${name}
Email: ${email}
Telefon: ${phone}

${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("SMTP ERROR:", err);
    return res.status(500).json({ success: false });
  }
}

