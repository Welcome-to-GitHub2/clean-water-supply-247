import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.re_J12w9Fgt_7cDNuWd6rP3VcUYAN9Ldbqu9);

export async function POST(req: Request) {
  try {
    const { name, phone, location, service, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@cleanwatersupply247.co.za",
      subject: "New Water Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}