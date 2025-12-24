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
        <div>
            <div className="m-3">
                <Button text="ES" icon={DownIcon} bgColor="bg-[#131313] dark:bg-[#D9D9D9]" textColor="text-[#FFFFFF] dark:text-[#28251F]" />
            </div>
            <footer className="fixed inset-x-0 bottom-0 w-full bg-[#131313] dark:bg-[#C6C7C0]">
            <div className="flex justify-center items-center gap-10 py-2">
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
        </div>
    )
}