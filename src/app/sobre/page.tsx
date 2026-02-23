import React from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Image from 'next/image';
import { aboutMe, myJourney } from '@/utils/data';

/**
 * About page. Combines a brief bio with timeline of your journey.
 */
export default function AboutPage() {
  return (
    <Container>
      <Section
        title="Sobre mim"
        subtitle="Saiba mais sobre minha trajetória e minhas experiências"
      >
        <div className="mx-auto flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8">
          <Image
            src={aboutMe[0] || '/mepng.png'}
            alt="Foto do Jefferson"
            width={250}
            height={250}
            className="mb-6 rounded-lg object-cover shadow-lg sm:mb-0"
          />
          <p className="max-w-xl text-sm leading-relaxed">
            Sou desenvolvedor fullstack apaixonado por criar soluções digitais que fazem
            a diferença. Iniciei minha jornada em 2021 estudando HTML, CSS e JavaScript
            e, desde então, me aprofundei em React, Node.js, Express, MongoDB, Docker,
            Kubernetes e diversas outras tecnologias modernas. Ao longo dos anos,
            participei de projetos de e-commerce, blogs, aplicativos mobile e sistemas
            de agendamento. Sempre busco aprender novas técnicas e aprimorar meu
            conhecimento para entregar produtos de alta qualidade. Confira abaixo um
            resumo da minha caminhada.
          </p>
        </div>
        <div className="mt-10 space-y-8">
          {myJourney.map((journey, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:space-x-6">
              <Image
                src={journey.image}
                alt={journey.title}
                width={300}
                height={200}
                className="mb-4 rounded-lg object-cover shadow-md sm:mb-0"
              />
              <div>
                <h3 className="text-lg font-bold">{journey.title}</h3>
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                  {journey.date}
                </p>
                <p className="text-sm">{journey.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
