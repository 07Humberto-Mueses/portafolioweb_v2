
import { StarIcon } from '../icons/Icons';

interface DescriptionProps {
    contenido: string;
    calificacion: string;
    size?: string;
    className?: string;
}

export default function Indicator ({
    contenido,
    calificacion,
    size = 'text-sm md:text-base',
}: DescriptionProps) {
    return (
        <div className={`maven-pro flex flex-col items-center justify-center text-center gap-1 ${size} text-[#000000] dark:text-[#FFFFFF]`}>
            <div className='flex items-center justify-center'>
                {StarIcon}
            </div>
            <p>{contenido}</p>
            <p>{calificacion}</p>
        </div>
    )
}