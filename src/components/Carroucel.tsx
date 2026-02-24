import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProps {
  images: string[];
}

export const Carroucel = ({ images }: CarouselProps) => {
  return (
    <Carousel opts={{ loop: true }} className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={`Imagem do projeto ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {images.length > 1 && (
        <>
          <CarouselPrevious className="left-2 bg-(--color-surface)/80 border-(--color-border-subtle) text-(--color-text-secondary) hover:bg-(--color-surface-elevated) hover:text-zinc-50" />
          <CarouselNext className="right-2 bg-(--color-surface)/80 border-(--color-border-subtle) text-(--color-text-secondary) hover:bg-(--color-surface-elevated) hover:text-zinc-50" />
        </>
      )}
    </Carousel>
  );
};
