"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { CloseIcon, SendIcon } from "../icons/Icons";

type TranslatedField = {
  ES: string;
  EN: string;
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: {
    titulo: TranslatedField;
  };
};

export default function RequestAccessForm({ isOpen, onClose, data }: ProjectModalProps) {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        setStatus("idle");
      }, 3000)
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  if (!isOpen) return null;

  const translations = {
    title: { ES: "Solicitar acceso al repositorio", EN: "Request Repository Access" },
    namePlaceholder: { ES: "Nombre completo", EN: "Full Name" },
    emailPlaceholder: { ES: "Correo electrónico", EN: "Email Address" },
    submit: { ES: "Solicitar", EN: "Request" },
    success: { ES: "Solicitud enviada correctamente.", EN: "Request sent successfully." },
    error: { ES: "Error al enviar la solicitud.", EN: "Error sending request." },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, project: data.titulo[lang] }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "" });
      } else {
        setStatus("error");
      }
      setShowMessage(true);
    } catch (error) {
      setStatus("error");
      setShowMessage(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#C6C7C0]/90 dark:bg-[#131313]/90 z-50">
      <form
        onSubmit={handleSubmit}
        className="relative maven-pro bg-[#FFFFFF] dark:bg-[#000000] rounded-xl shadow-xl p-4 sm:p-6 max-w-md w-full sm:max-w-lg md:max-w-2xl"
      >
        <div className="absolute top-2 right-2">
          <Button bgColor="" onClick={onClose} icon={CloseIcon} />
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6">
          {translations.title[lang]}
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder={translations.namePlaceholder[lang]}
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 text-sm sm:text-base md:text-lg w-full"
          />

          <input
            type="email"
            name="email"
            placeholder={translations.emailPlaceholder[lang]}
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 text-sm sm:text-base md:text-lg w-full"
          />
          <div className="flex items-center justify-center gap-2 bg-[#E45F11] hover:bg-[#C64A00] rounded text-sm sm:text-base md:text-lg font-semibold transition">
            <Button
              bgColor=""
              text={translations.submit[lang]}
              onClick={() => handleSubmit}
              icon={SendIcon}
            />
          </div>
          {showMessage && (
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg shadow-lg transition-opacity duration-500 ${status === "success" ? "bg-green-600 text-white text-xl" : "bg-red-600 text-white text-xl"}`} >
              {status === "success" ? translations.success[lang] : translations.error[lang]}
            </div>
          )}
        </div>
      </form>
    </div>

  );
}
