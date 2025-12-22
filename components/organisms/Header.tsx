import Image from "next/image";
import Button from "../atoms/Button";
import ThemeToggle from "../molecules/ThemeToggle";

export default function Header() {
    return (
        <header className="bg-[#C6C7C0] dark:bg-[#131313] fixed inset-x-0 top-0 w-full">
            <Image src="/logo.png" alt="Logo" width={100} height={100} className="m-3"/>
            <ThemeToggle/>
        </header>
    )
}