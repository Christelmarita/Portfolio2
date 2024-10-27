import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { HeroSection, HeroTitle, HeroSubtitle } from './index.styles';

const Hero = () => {
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const text = heroTitleRef.current.textContent;
    heroTitleRef.current.innerHTML = text
      .split(' ')
      .map((word, index) => `<span style="--word-index: ${index}">${word} </span>`)
      .join('');
  }, []);

  return (
    <HeroSection id="home">
      <Container>
        <HeroTitle ref={heroTitleRef}>
          FROM IDEAS TO DIGITAL EXPERIENCES
        </HeroTitle>
        <HeroSubtitle>
          Portfolio for UI Designer and Front End Developer Christel Østerbøe
        </HeroSubtitle>
      </Container>
    </HeroSection>
  );
};

export default Hero;
