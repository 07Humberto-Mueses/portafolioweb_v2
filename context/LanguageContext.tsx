// src/context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ES" | "EN";

type LanguageContextType = {
  lang: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ES");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ES" ? "EN" : "ES"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return context;
}
