import { NextResponse } from "next/server";

// Nécessite BREVO_API_KEY (et BREVO_FROM_EMAIL, si un expéditeur vérifié est
// configuré sur Brevo). Sans clé configurée, l'API répond une erreur
// explicite et le formulaire retombe automatiquement sur mailto: côté client.

const CONTACT_TO = process.env.CONTACT_TO ?? "perledebali@gmail.com";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, phone, service, message } = (body ?? {}) as Record<
    string,
    unknown
  >;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Envoi non configuré (BREVO_API_KEY manquante)." },
      { status: 503 },
    );
  }

  const fromEmail = process.env.BREVO_FROM_EMAIL || "no-reply@perle-bali.fr";
  const phoneStr = typeof phone === "string" ? phone.trim() : "";
  const serviceStr = typeof service === "string" ? service.trim() : "";

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Formulaire Perle de Bali", email: fromEmail },
        to: [{ email: CONTACT_TO }],
        replyTo: { email, name },
        subject: `[Perle de Bali] Message de ${name}`,
        textContent:
          `Nom : ${name}\n` +
          `E-mail : ${email}\n` +
          (phoneStr ? `Téléphone : ${phoneStr}\n` : "") +
          (serviceStr ? `Soin souhaité : ${serviceStr}\n` : "") +
          `\nMessage :\n${message}\n`,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Brevo error:", res.status, errorBody);
      return NextResponse.json({ error: "Échec de l'envoi." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 502 });
  }
}
