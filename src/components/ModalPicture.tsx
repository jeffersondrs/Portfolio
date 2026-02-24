"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { projetos } from "../utils/data";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";

type ModalProps = {
  onClick: () => void;
};

export default function ProjectPage({ onClick }: ModalProps) {
  const id = usePathname().split("/").pop();
  const projectId = parseInt(id as string, 10);
  const project = projetos.find((projeto) => projeto.projectId === projectId);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <p className="text-(--color-text-muted) text-sm text-center py-10">
        Projeto não encontrado.
      </p>
    );
  }

  return (
    <section
      onClick={onClick}
      className="w-full h-full fixed flex flex-col justify-center items-center px-10 md:px-40 py-20 bg-black/60 backdrop-blur-sm top-0 left-0 z-50"
    >
      <div className="surface p-4 flex flex-wrap gap-4 justify-center max-w-4xl w-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-(--color-text-secondary) hover:text-zinc-50"
          onClick={onClick}
        >
          <X size={20} />
        </Button>

        {project.projectImage.map((image, index) => (
          <button
            title={`Imagem ${index + 1} de ${project.projectName}`}
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(image);
            }}
            className="relative w-48 h-32 overflow-hidden rounded-(--radius-md) hover-glow transition-transform hover:scale-[102%]"
          >
            <Image
              src={image}
              alt={`${project.projectName} - imagem ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="bg-(--color-surface) border-(--color-border-subtle) max-w-3xl p-2">
          <DialogTitle className="sr-only">{project.projectName}</DialogTitle>
          {selectedImage && (
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage}
                alt={project.projectName}
                fill
                className="object-contain rounded-(--radius-md)"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
