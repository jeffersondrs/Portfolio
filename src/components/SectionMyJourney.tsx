import { myJourney } from "../utils/data";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function SectionMyJourney() {
  return (
    <section className="flex flex-col items-center w-full py-10 gap-4 fade-in">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl font-bold text-gradient">
          Minha jornada começou...
        </h2>
        <p className="text-sm text-(--color-text-secondary) max-w-lg">
          Alguns momentos importantes da minha jornada, e como tudo começou.
        </p>
      </div>

      <ul className="relative w-full max-w-3xl mt-8 flex flex-col gap-0">
        {myJourney.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <li key={index} className="relative flex w-full mb-10">
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-(--color-border) md:-translate-x-1/2" />

              <div className="absolute left-4 md:left-1/2 top-5 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-(--color-surface-elevated) border-2 border-(--color-border-subtle) z-10" />

              <div
                className={`
                surface hover-glow ml-10 md:ml-0 w-full md:w-5/12 flex flex-col gap-3 p-4
                ${
                  isEven
                    ? "md:mr-auto md:ml-0 md:pr-8"
                    : "md:ml-auto md:mr-0 md:pl-8"
                }
              `}
              >
                <time className="font-mono text-xs italic text-(--color-text-muted)">
                  {item.date}
                </time>

                <h3 className="text-base font-bold text-zinc-50">
                  {item.title}
                </h3>

                <Separator className="bg-(--color-border)" />

                <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                  {item.description}
                </p>

                {item.image && (
                  <div className="relative w-full h-44 mt-1 rounded-(--radius-md) overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Imagem de ${item.date}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
