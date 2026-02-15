import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("recibo data", req)
    const { name, email, project } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "humbertom0798@gmail.com",
      subject: "Solicitud de acceso al repositorio",
      text: `Nombre: ${name}\nCorreo: ${email}\nProyecto: ${project}\n\nEl usuario solicita acceso al repositorio.`,
    });

    return NextResponse.json({ message: "Solicitud enviada" });
  } catch (error) {
    console.error("Error al enviar solicitud:", error);
    return NextResponse.json({ message: "Error al enviar solicitud" }, { status: 500 });
  }

}
