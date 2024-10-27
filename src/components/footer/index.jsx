import React from 'react';
import { Container } from 'react-bootstrap';
import { FooterSection, FooterLink, FooterText } from './index.styles';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterText>&copy; {new Date().getFullYear()} Øbøe. All Rights Reserved.</FooterText>
        <FooterText>
          <FooterLink href="https://github.com/Christelmarita" target="_blank" rel="noopener noreferrer">
            GitHub
          </FooterLink>
          |
          <FooterLink href="https://www.linkedin.com/in/christelosterboe/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
        </FooterText>
      </Container>
    </FooterSection>
  );
};

export default Footer;
