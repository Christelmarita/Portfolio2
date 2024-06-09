import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    color: #fff;
  }
  40% {
    color: #fff;
  }
  50% {
    color: #eee82c;
  }
  60% {
    color: #fff;
  }
  100% {
    color: #fff;
  }
`;

export const HeroSection = styled.div`
  margin-top: 80px;
  background-color: #2c282f;
  padding: 100px 0;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  display: inline-block;
  animation: ${waveAnimation} 3s infinite;
  display: block;

  span {
    animation: ${waveAnimation} 2s infinite;
    animation-delay: calc(var(--word-index) * 0.3s);
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 20px 0;
  color: #fff;
`;
