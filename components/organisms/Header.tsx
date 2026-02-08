"use client";

import Image from "next/image";
import Link from "next/link";
import menuData from "@/data/menu.json";
import { usePathname } from "next/navigation";
import ThemeToggle from "../molecules/ThemeToggle";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed inset-x-0 top-0 w-full flex items-center justify-between px-6 py-1 z-50 bg-[#FFFFFF] dark:bg-[#28251F]">
            <Link href="/">
                <Image
                    src="/LOGO.png"
                    alt="Logo"
                    width={70}
                    height={70}
                    className="m-3 dark:hidden"
                />
                <Image
                    src="/LOGO.png"
                    alt="Logo Oscuro"
                    width={70}
                    height={70}
                    className="m-3 hidden dark:block"
                />
            </Link>
            <nav className="flex items-center gap-8 mr-18">
                {menuData.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`maven-pro font-bold text-sm md:text-base transition-colors ${pathname == item.path
                                ? "text-[#E45F11]" // color activo
                                : "text-[#131313] dark:text-[#FFFFFF] hover:text-[#E45F11]"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
            <ThemeToggle/>
        </header>
    )
}