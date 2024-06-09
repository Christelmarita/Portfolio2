import React from 'react';
import { Container } from 'react-bootstrap';
import { ContactSection, ContactTitle, ContactText, ContactLink } from './index.styles';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <ContactTitle>Contact</ContactTitle>
        <ContactText>If you'd like to get in touch, please write to me at <ContactLink href="mailto:christel.marita@onibodesign.no">christel.marita@onibodesign.no</ContactLink> and I will get back to you as soon as possible.</ContactText>
      </Container>
    </ContactSection>
  );
};

export default Contact;
