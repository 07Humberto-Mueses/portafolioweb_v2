import Button from "@/components/atoms/Button";
import { FlechaIcon } from "@/components/icons/Icons";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 px-4">
        <div className="text-center space-y-1">
          <h1 className="text-[#131313] dark:text-[#FFFFFF] irish-grover-regular text-6xl md:text-6xl">
            HUMBERTO MUESES
          </h1>
          <h2 className="text-xl md:text-4xl text-[#131313] dark:text-[#FFFFFF]">
            Ingeniero Informático
          </h2>
        </div>
        <div className="text-center max-w-2xl">
          <p className="maven-pro text-base md:text-xl text-[#28251F] dark:text-[#C6C7C0] leading-snug">
            “Nacido en Nariño, Colombia. Apasionado por el fútbol y el desarrollo backend, disfruto crear aplicaciones web funcionales que resuelvan problemas. Me definen la curiosidad, la perseverancia y las ganas de construir tecnología con propósito.”
          </p>
        </div>
        <div className="text-center">
          <Button
            route="/sobreMi"
            text="Mi historia en pixeles"
            icon={FlechaIcon}
            bgColor="bg-[#E45F11]"
            textColor="text-[#FFFFFF]"
          />
        </div>
    </div>
  );
}
