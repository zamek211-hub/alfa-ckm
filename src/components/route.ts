import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
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
      from: `"ALFA-CKM Kontakt" <${process.env.ZOHO_SMTP_USER}>`,
      to: "kontakt@alfackm.pl",
      replyTo: email,
      subject: `Nowa wiadomość z formularza – ${name}`,
      text: `
Imię: ${name}
Email: ${email}

Wiadomość:
${message}
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return new Response(
      JSON.stringify({ error: "Mail send failed" }),
      { status: 500 }
    );
  }
}
