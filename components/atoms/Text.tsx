import { ReactNode } from "react";

interface TextProps {
    children: ReactNode;
    size?: string;
    className?: string;
}

export default function Text({
    children,
    size = "text-base md:text-xl",
    className = "",
}: TextProps) {
    return (
        <p className={`maven-pro ${size} text-[#28251F] dark:text-[#C6C7C0] leading-snug ${className}`}>
            {children}
        </p>
    )
}
