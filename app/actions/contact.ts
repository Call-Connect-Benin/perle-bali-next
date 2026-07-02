"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, message: "Veuillez remplir tous les champs obligatoires." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Adresse e-mail invalide." };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <h2>Nouvelle demande de contact — Perle de Bali</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:520px">
      <tr><td><strong>Nom</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      ${phone ? `<tr><td><strong>Téléphone</strong></td><td>${phone}</td></tr>` : ""}
      ${service ? `<tr><td><strong>Soin souhaité</strong></td><td>${service}</td></tr>` : ""}
      <tr><td><strong>Message</strong></td><td>${message.replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Perle de Bali" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? "perledebali@gmail.com",
      replyTo: email,
      subject: `[Perle de Bali] Message de ${name}`,
      html,
    });

    return { success: true, message: "Votre message a bien été envoyé. Je vous répondrai sous 24h." };
  } catch {
    return { success: false, message: "Une erreur est survenue. Contactez-moi directement au 07 56 13 95 96." };
  }
}
