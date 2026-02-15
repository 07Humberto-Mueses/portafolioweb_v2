"use client";

import { useLanguage } from "@/context/LanguageContext";
import Button from "../atoms/Button";
import { PhoneIcon, LinkedInIcon, GitHubIcon, DownloadIcon, DownIcon } from "../icons/Icons";
import { footerActions } from "@/utils/footerActions";

const footerButtons = [
  { icon: PhoneIcon, action: footerActions.phone },
  { icon: LinkedInIcon, action: footerActions.linkedin },
  { icon: GitHubIcon, action: footerActions.github },
  { icon: DownloadIcon, action: footerActions.download },
];

export default function Footer() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <footer className="fixed inset-x-0 bottom-0 w-full z-50">
      <div className="absolute left-2 sm:left-3 -top-14 sm:-top-16 pl-2">
        <Button
          text={lang}
          bgColor="bg-[#131313] dark:bg-[#D9D9D9]"
          textColor="text-[#FFFFFF] dark:text-[#28251F]"
          onClick={toggleLanguage}
        />
      </div>

      <div className="flex justify-center items-center bg-[#131313] dark:bg-[#C6C7C0] gap-6 sm:gap-10 py-1 sm:py-2">
        {footerButtons.map((button, index) => (
          <Button
            key={index}
            bgColor=""
            textColor="text-[#C6C7C0] dark:text-[#131313]"
            icon={button.icon}
            onClick={button.action}
          />
        ))}
      </div>
    </footer>
  );
}
