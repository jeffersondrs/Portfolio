import Image from 'next/image';
import { MapPinCheck } from 'lucide-react';

export default function Hello() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row py-3">
      <p className="text-lg font-semibold text-wrap max-w-md xl:max-w-xl">
        Olá, eu sou o Jefferson, seja bem-vindo ao meu portfólio!
        <br />
        <span className="flex flex-row justify-start items-center gap-2">
          Rio de Janeiro, Brasil <MapPinCheck size={16} color='#ff0000' /> 
        </span>
        Desenvolvedor web entusiasta e sonhador, pronto para criar soluções
        inovadoras e contribuir para o futuro digital.
      </p>
      <Image src="/mepng.png" alt="Jefferson" width={231} height={250} />
    </div>
  );
}
