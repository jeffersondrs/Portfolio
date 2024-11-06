import Link from 'next/link';

export default function CurriculoButton() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 bg-gray-700">
      <Link href="/curriculo">
        <p className="flex flex-row items-center justify-center  text-center px-4 py-2 transition-all duration-300 ease-in-out text-white font-mono">
          Visualize ou baixe meu curriculo
        </p>
      </Link>
    </div>
  );
}
