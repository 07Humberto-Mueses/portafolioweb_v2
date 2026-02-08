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
        <div className="flex items-center justify-between bg-[#FFFFFF] dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6 max-w-3xl mx-auto my-4">
            <div className="">
                <Graduation />
            </div>
            <div className="flex-1 text-start maven-pro text-[#000000] dark:text-[#FFFFFF] px-6">
                <p className="font-bold text-xl">{name}</p>
                <p>{institucion}</p>
                <div className="mt-2 text-xs flex items-center justify-start gap-2">
                    <p>{lugar}</p>
                    <span className="w-2 h-2 rounded-full bg-[#000000] dark:bg-[#FFFFFF]"></span>
                    <p>{duracion}</p>
                </div>
            </div>
            <div className="">
                <Indicator
                    contenido={indicador || ""}
                    calificacion={calificacion || ""}
                />
            </div>
        </div>
    )
}