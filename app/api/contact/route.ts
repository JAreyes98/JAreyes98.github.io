import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: "Portafolio", email: process.env.CONTACT_EMAIL }, 
        to: [{ email: process.env.CONTACT_EMAIL }],
        subject: `Nuevo mensaje de ${name}`,
        htmlContent: `<p><strong>De:</strong> ${name} (${email})</p><p><strong>Mensaje:</strong> ${message}</p>`,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: "Error en Brevo" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
  }
}