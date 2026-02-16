import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/organisms/Footer";
import ThemeToggle from "@/components/molecules/ThemeToggle";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

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
    <html lang="es" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-[--background]">
        <LanguageProvider>
          <ThemeProvider>
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <main className="flex items-center flex-col">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
