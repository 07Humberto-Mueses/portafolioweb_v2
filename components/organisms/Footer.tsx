import Button from "../atoms/Button";
import { PhoneIcon, LinkedInIcon, GitHubIcon, DownloadIcon, DownIcon } from "../icons/Icons";

const footerButtons = [
  { icon: PhoneIcon },
  { icon: LinkedInIcon },
  { icon: GitHubIcon },
  { icon: DownloadIcon },
];

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 w-full z-50">
      <div className="absolute left-2 sm:left-3 -top-16 sm:-top-18">
        <Button
          text="ES"
          icon={DownIcon}
          bgColor="bg-[#131313] dark:bg-[#D9D9D9]"
          textColor="text-[#FFFFFF] dark:text-[#28251F]"
        />
      </div>

      <div className="flex justify-center items-center bg-[#131313] dark:bg-[#C6C7C0] gap-6 sm:gap-10 py-1 sm:py-2">
        {footerButtons.map((button, index) => (
          <Button
            key={index}
            bgColor=""
            textColor="text-[#C6C7C0] dark:text-[#131313]"
            icon={button.icon}
          />
        ))}
      </div>
    </footer>
  );
}
