"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CustomButtonProps {
  text?: string;
  icon?: ReactNode;
  href?: string;
  route?: string;
  textColor?: string;
  bgColor?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  icon,
  href,
  route,
  textColor,
  bgColor = "bg-indigo-600",
  onClick,
}: CustomButtonProps) {
  const baseClasses =
    `maven-pro inline-flex items-center justify-center 
     font-bold px-2 py-1 rounded-xl
     border-none outline-none apparance-none 
     transition-all duration-300 ease-in-out
     hover:scale-105 hover:shadow-xl active:scale-95
     focus-visible:ring-2 focus-visible:ring-indigo-400
     ${textColor} ${bgColor}`;

  const content = (
    <>
      {text && <span>{text}</span>}
      {icon && icon}
    </>
  );

  if (route) {
    return (
      <Link href={route} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
