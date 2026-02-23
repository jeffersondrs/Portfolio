import React from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Contact from '@/components/FormContact';

/**
 * Contact page. Wraps the existing contact form in a full page.
 */
export default function ContactPage() {
  return (
    <Container>
      <Section
        title="Contato"
        subtitle="Entre em contato para oportunidades de trabalho ou colaborações"
      >
        <div className="mx-auto max-w-lg">
          <Contact />
        </div>
      </Section>
    </Container>
  );
}
