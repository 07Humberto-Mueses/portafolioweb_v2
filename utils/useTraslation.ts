// src/hooks/useTranslation.ts
import { useLanguage } from "@/context/LanguageContext";

// Diccionario de ejemplo
const translations: Record<string, { ES: string; EN: string }> = {
  greeting: {
    ES: "Hola, bienvenido a mi portafolio",
    EN: "Hello, welcome to my portfolio",
  },
  aboutMe: {
    ES: "Soy Humberto Mueses, ingeniero informático...",
    EN: "I am Humberto Mueses, computer engineer...",
  },
};

export function useTranslation() {
  const { lang } = useLanguage();

  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  return { t, lang };
}
