"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "../icons/Icons";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Forzar modo claro al inicio
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 p-2 text-[#131313] dark:text-[#C6C7C0] shadow-md"
    >
      {darkMode ? SunIcon : MoonIcon}
    </button>
  );
}
