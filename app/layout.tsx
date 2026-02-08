import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/organisms/Footer";
import ThemeToggle from "@/components/molecules/ThemeToggle";

export const metadata: Metadata = {
  title: "Portafolio Web Humberto Mueses",
  description: "Este es el portafolio web de Humberto Mueses, un desarrollador web apasionado por crear soluciones innovadoras y funcionales. Aquí encontrarás una selección de mis proyectos, habilidades y experiencia en el desarrollo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="transition-colors duration-300">
        <div className="flex justify-end p-4">
          <ThemeToggle/>
        </div>
        <main className="flex items-center flex-col">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
