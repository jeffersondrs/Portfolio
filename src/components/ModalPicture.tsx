import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { projetos } from '@/api/data';

type ModalProps = {
  onClick: () => void;
};

export default function ProjectPage({ onClick }: ModalProps) {
  const id = usePathname().split('/').pop();
  const projectId = parseInt(id as string, 10);
  const project = projetos.find((projeto) => projeto.id === projectId);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <section
      onClick={onClick}
      className="w-full h-full fixed flex flex-col justify-center items-center px-40 py-20 bg-black/20 top-0 left-0"
    >
      <div>
        {project.image.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={project.title}
            className="w-64 h-full"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedImage} alt={project.title} className="w-64 h-full" />
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
}
