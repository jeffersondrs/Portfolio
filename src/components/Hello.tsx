import Image from 'next/image';

export default function Hello() {
  return (
    <div className="flex flex-row items-start justify-start">
      <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r tracking-wide from-orange-500 to-yellow-500 text-wrap max-w-60 xl:max-w-xl w-full">
        Olá, eu sou o Jefferson, seja bem-vindo! <br />
        Rio de Janeiro, Brasil <br /> Desenvolvedor web entusiasta e sonhador,
        pronto para criar soluções inovadoras e contribuir para o futuro
        digital.
      </p>
    </div>
  );
}
