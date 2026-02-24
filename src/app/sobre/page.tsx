import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Image from "next/image";
import SectionMyJourney from "../../components/SectionMyJourney";

export default function AboutPage() {
  return (
    <Container>
      <Section
        title="Sobre mim"
        subtitle="Saiba mais sobre minha trajetória e minhas experiências"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full max-w-3xl mx-auto">
          <Image
            src="/perfil.png"
            alt="Foto do Jefferson"
            width={220}
            height={220}
            className="rounded-lg object-cover shadow-lg shrink-0 ring-1 ring-(--color-border-subtle)"
          />
          <div className="flex flex-col gap-4">
            <p className="text-sm text-(--color-text-secondary) leading-relaxed">
              Sou desenvolvedor fullstack apaixonado por criar soluções digitais
              que fazem a diferença. Iniciei minha jornada em 2021 estudando
              HTML, CSS e JavaScript e, desde então, me aprofundei em React,
              Node.js, Express, MongoDB, Docker, Kubernetes e diversas outras
              tecnologias modernas.
            </p>
            <p className="text-sm text-(--color-text-secondary) leading-relaxed">
              Ao longo dos anos, participei de projetos de e-commerce, blogs,
              aplicativos mobile e sistemas de agendamento. Sempre busco
              aprender novas técnicas e aprimorar meu conhecimento para entregar
              produtos de alta qualidade.
            </p>
          </div>
        </div>
      </Section>
      <SectionMyJourney />
    </Container>
  );
}
