"use client";

import Image from "next/image";
import Link from "next/link";
import menuData from "@/data/menu.json";
import { usePathname } from "next/navigation";
import ThemeToggle from "../molecules/ThemeToggle";
import { useState } from "react";
import Button from "../atoms/Button";
import { MenuIcon } from "../icons/Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang } = useLanguage();

    return (
        <header className="fixed inset-x-0 top-0 w-full flex items-center justify-between px-4 sm:px-6 py-2 z-50 bg-[#FFFFFF] dark:bg-[#28251F]">
            <Link href="/">
                <Image
                    src="/LOGO.png"
                    alt="Logo"
                    width={70}
                    height={70}
                    className="m-3 sm:m-3 dark:hidden"
                />
                <Image
                    src="/LOGO_DARK.png"
                    alt="Logo Oscuro"
                    width={70}
                    height={70}
                    className="m-3 sm:m-3 hidden dark:block"
                />
            </Link>

            <div className="flex-1 text-center md:hidden">
                <span className="maven-pro font-bold text-sm text-[#E45F11]">
                    {menuData.find((item) => item.path === pathname)?.name[lang] || ""}
                </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 mr-10">
                {menuData.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`maven-pro font-bold text-xs sm:text-sm md:text-base transition-colors ${pathname == item.path
                            ? "text-[#E45F11]" // color activo
                            : "text-[#131313] dark:text-[#FFFFFF] hover:text-[#E45F11]"
                            }`}
                    >
                        {item.name[lang]}
                    </Link>
                ))}
            </nav>
            <ThemeToggle />
            <div className="md:hidden text-[#131313] dark:text-[#FFFFFF] ml-2">
                <Button
                    bgColor=""
                    icon={MenuIcon}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>
            {menuOpen && (
                <div className="absolute top-full left-6 right-6 
               mx-4 mt-2 
               bg-[#FFFFFF] dark:bg-[#28251F] 
               shadow-lg rounded-lg 
               flex flex-col items-center 
               p-3 gap-2 md:hidden">
                    {menuData.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`maven-pro font-bold text-sm transition-colors py-2 ${pathname === item.path
                                ? "text-[#E45F11]"
                                : "text-[#131313] dark:text-[#FFFFFF] hover:text-[#E45F11]"
                                }`}
                        >
                            {item.name[lang]}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}