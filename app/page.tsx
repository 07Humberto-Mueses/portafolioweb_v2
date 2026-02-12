import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import { FlechaIcon } from "@/components/icons/Icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-12 py-6">
        <div className="text-center space-y-1">
          <h1 className="irish-grover-regular text-6xl sm:text-5xl md:text-6xl">
            HUMBERTO MUESES
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl">
            Ingeniero Informático
          </h2>
        </div>
        <div className="text-center max-w-md sm:max-w-xl md:max-w-2xl">
          <Text>
            “Nacido en Nariño, Colombia. Apasionado por el fútbol y el desarrollo backend, disfruto crear aplicaciones web funcionales que resuelvan problemas. Me definen la curiosidad, la perseverancia y las ganas de construir tecnología con propósito.”
          </Text>
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
