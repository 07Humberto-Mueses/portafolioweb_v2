import { ReactNode } from "react";

interface TextProps {
    children: ReactNode;
    size?: string;
    colorLight?: string;
    colorDark?: string;
    className?: string;
}

export default function Text({
    children,
    size = "text-base md:text-xl",
    colorLight = "text-[#28251F]",
    colorDark = "dark:text-[#C6C7C0]",
    className = "",
}: TextProps) {
    return (
        <p className={`maven-pro ${size} ${colorLight} ${colorDark} leading-snug ${className}`}>
            {children}
        </p>
    )
}
