"use client";
import { useTheme } from "@/components/providers/ThemeProvider";
import { SunIcon, MoonIcon } from "../icons/Icons";
import Button from "../atoms/Button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      icon={theme === "light" ? (
        MoonIcon
      ) : SunIcon}
      onClick={toggleTheme}
      bgColor=""
    />
  );
}
