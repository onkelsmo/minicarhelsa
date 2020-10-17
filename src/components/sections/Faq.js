import React from 'react';
import { Section, Container } from '@components/global';
import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'Was kostet eine Fahrt?',
    content: () => (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      </>
    ),
  },
  {
    title: 'Wie kann ich bei Minicar Helsa buchen?',
    content: () => (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      </>
    ),
  },
  {
    title: 'Wie kann ich bei Minicar Helsa bezahlen?',
    content: () => (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      </>
    ),
  },
  {
    title: 'Gibt es Stornierungsbedingungen?',
    content: () => (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      </>
    ),
  }
];

const Faq = () => (
  <Section id="faq" accent="secondary">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Häufig gestellte Fragen</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
