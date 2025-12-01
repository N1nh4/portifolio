import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProjetoDestaqueProps {
  titulo: string;
  imagem: string[];
}

export default function CarouselProjetoDestaque({
  titulo,
  imagem,
}: CarouselProjetoDestaqueProps) {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {imagem.map((id) => (
          <CarouselItem key={id}>
            <div className="p-1">
              <Image key={id} src={id} alt={titulo} width={500} height={300} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
