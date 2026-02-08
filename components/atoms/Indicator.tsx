
import { StarIcon } from '../icons/Icons';

interface DescriptionProps {
    contenido: string;
    calificacion: string;
    size?: string;
    colorLight?: string;
    colorDark?: string;
    className?: string;
}

export default function Indicator ({
    contenido,
    calificacion,
    size = 'text-sm md:text-base',
    colorLight = 'text-[#000000]',
    colorDark = 'dark:text-[#FFFFFF]',
}: DescriptionProps) {
    return (
        <div className={`maven-pro flex flex-col items-center justify-center text-center gap-1 ${size} ${colorLight} ${colorDark}`}>
            <div className='flex items-center justify-center'>
                {StarIcon}
            </div>
            <p>{contenido}</p>
            <p>{calificacion}</p>
        </div>
    )
}