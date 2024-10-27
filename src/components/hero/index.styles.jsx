import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    color: #4A4A4A;
  }
  40% {
    color: #4A4A4A;
  }
  50% {
    color: #578879;
  }
  60% {
    color: #4A4A4A;
  }
  100% {
    color: #4A4A4A;
  }
`;

export const HeroSection = styled.div`
  margin-top: 70px;
  background-color: #fff;
  padding: 70px 0;
  text-align: center;
  overflow: hidden;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #4A4A4A;
  display: inline-block;
  animation: ${waveAnimation} 3s infinite;
  display: block;

  span {
    animation: ${waveAnimation} 2s infinite;
    animation-delay: calc(var(--word-index) * 0.3s);
  }


  @media (max-width: 768px) {
    font-size: 2rem;  
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 20px 0;
  color: #4A4A4A;
`;
