import Graduation from "../atoms/Graduation";
import Indicator from "../atoms/Indicator";

type EducacionProps = {
    name: string;
    institucion: string;
    lugar: string;
    duracion: string;
    indicador?: string;
    calificacion?: string;
}

export default function Educacion({ name, institucion, lugar, duracion, indicador, calificacion }: EducacionProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between 
                 bg-[#FFFFFF] dark:bg-[#1E1E1E] rounded-xl shadow-lg 
                 w-full max-w-3xl mx-auto my-4 
                 p-3 sm:p-6 gap-3 sm:gap-4">
            <div>
                <Graduation />
            </div>
            <div className="flex-1 text-center sm:text-start maven-pro text-[#000000] dark:text-[#FFFFFF] px-2 sm:px-6">
                <p className="font-bold text-lg sm:text-xl">{name}</p>
                <p className="text-sm sm:text-base">{institucion}</p>
                <div className="mt-2 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-2">
                    <p>{lugar}</p>
                    <span className="w-2 h-2 rounded-full bg-[#000000] dark:bg-[#FFFFFF]"></span>
                    <p>{duracion}</p>
                </div>
            </div>
            <div>
                <Indicator
                    contenido={indicador || ""}
                    calificacion={calificacion || ""}
                />
            </div>
        </div>
    )
}