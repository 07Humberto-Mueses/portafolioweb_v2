import { ReactNode } from 'react';

interface DescriptionProps {
    title: string;
    details: string;
    size?: string;
    colorLight?: string;
    colorDark?: string;
    className?: string;
}

export default function Description ({
    title,
    details,
    size = 'text-sm md:text-base',
    colorLight = 'text-[#28251F]',
    colorDark = 'dark:text-[#FFFFFFb9]',
    className = '',
}: DescriptionProps) {
    return (
        <div className={`maven-pro ${size} ${colorLight} ${colorDark} leading-snug ${className}`}>
            <h2 className='font-bold'>{title}</h2>
            <p>{details}</p>
        </div>
    )
}