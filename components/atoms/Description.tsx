import { ReactNode } from 'react';

interface DescriptionProps {
    title: string;
    details: string;
    size?: string;
    className?: string;
}

export default function Description ({
    title,
    details,
    size = 'text-sm md:text-base',
    className = '',
}: DescriptionProps) {
    return (
        <div className={`maven-pro ${size} text-[#28251F] dark:text-[#FFFFFFb9] leading-snug ${className}`}>
            <h2 className='font-bold'>{title}</h2>
            <p>{details}</p>
        </div>
    )
}