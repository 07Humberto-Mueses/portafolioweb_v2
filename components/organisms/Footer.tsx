import Button from "../atoms/Button";
import { PhoneIcon, LinkedInIcon, GitHubIcon, DownloadIcon, DownIcon } from "../icons/Icons";

const footerButtons = [
    { icon: PhoneIcon },
    { icon: LinkedInIcon },
    { icon: GitHubIcon },
    { icon: DownloadIcon },
]

export default function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-0 w-full">
            <div className="m-3">
                <Button text="ES" icon={DownIcon} bgColor="bg-[#131313] dark:bg-[#D9D9D9]" textColor="bg-[#FFFFFF] dark:text-[#28251F]" />
            </div>
            <div className="bg-[#131313] dark:bg-[#C6C7C0] flex justify-center items-center gap-10 py-2">
                {footerButtons.map((button, index) => (
                    <Button
                        key={index}
                        bgColor="bg-[#131313] dark:bg-[#C6C7C0]"
                        textColor="text-[#C6C7C0] dark:text-[#131313]"
                        icon={button.icon}
                    />
                ))}
            </div>
        </footer>
    )
}