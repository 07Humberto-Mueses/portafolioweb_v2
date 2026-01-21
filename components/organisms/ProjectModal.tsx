
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { CloseIcon } from '../icons/Icons';
import ModelCard from '../molecules/ModelCard';

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: {
    titulo: string;
    imagen: string[];
    galeria: string[];
    descripcion: string;
    proposito: string;
    funcionamiento: string;
    tecnologias: string[];
  };
};

export default function ProjectModal({ isOpen, onClose, data }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#C6C7C0] dark:bg-[#131313] backdrop-blur-sm z-50">
        <div className="relative maven-pro bg-[#FFFFFF] dark:bg-[#000000] rounded-xl shadow-xl p-6 max-w-4xl w-full">
        {/* Botón de cerrar */}
        <div className="absolute top-2 right-2">
          <Button bgColor="" onClick={onClose} icon={CloseIcon}/>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
          {/* Imagen principal */}
          <ModelCard
            imagen={data.galeria}
          />

          {/* Información */}
          <div className="flex-1">
            <h1 className="text-[#28251F] dark:text-[#FFFFFF] text-2xl text-center font-bold mb-4">{data.titulo}</h1>
            <Text className='font-bold' colorDark='dark:text-[#FFFFFF]' colorLight='text-[#28251F]' size='text-base'>Descripción General</Text>
            <Text className='' colorDark='dark:text-[#FFFFFF]' colorLight='text-[#28251F]' size='text-sm'>{data.descripcion}</Text>
            <Text className='font-bold' colorDark='dark:text-[#FFFFFF]' colorLight='text-[#28251F]' size='text-base'>Propósito</Text>
            <Text className='' colorDark='dark:text-[#FFFFFF]' colorLight='text-[#28251F]'size='text-sm'>{data.proposito}</Text>
            <Text className='font-bold' colorDark='dark:text-[#FFFFFF]' colorLight='text-[#28251F]' size='text-base'>Funcionamiento</Text>
            <Text className='' colorDark='dark:text-[#FFFFFF]' colorLight='text-[#28251F]'size='text-sm'>{data.funcionamiento}</Text>

            <Text className="font-bold mt-4" colorDark='dark:text-[#FFFFFF]' colorLight='text-[#28251F]' size='text-base'>Tecnologías</Text>
            <ul className="inline-flex flex-wrap gap-2">
              {data.tecnologias.map((tec, idx) => (
                <Text key={idx} colorDark='dark:text-[#FFFFFF]' colorLight='text-[#28251F]' size='text-base'>{tec}</Text>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
