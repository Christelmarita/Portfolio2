import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AboutSection, AboutText, AboutListContainer, AboutListTitle, AboutListItem} from './index.styles';


const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Row>
          <Col md={6}>
          <Row className="text-left d-flex align-items-end">
            <Col className="d-flex flex-column justify-content-end">
            <AboutText>
            <strong>Hi! I´m Christel. I am a UI Designer and Front End Developer from Norway, who recently graduated from Noroff School of Technology and Digital Media.</strong>
            </AboutText>
            </Col>
          </Row>
            <AboutText>
            I am passionate about creating designs that are easy to use and accessible to everyone. I believe technology should work for all people, regardless of their abilities. I focus on making user experiences smooth and ensuring my designs look good while being user-friendly for everyone.
            </AboutText>
            <AboutText>
                I am excited about the opportunity to combine my design skills, technical knowledge, and diverse professional experience to create digital experiences that make a positive impact. Let's connect and explore how we can work together to bring innovative and accessible solutions to life.
            </AboutText>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12}>
                <AboutListContainer>
                  <AboutListTitle>Key Skills:</AboutListTitle>
                  <AboutListItem>Accessible Design</AboutListItem>
                  <AboutListItem>Seamless User Stories</AboutListItem>
                  <AboutListItem>UI/UX Design</AboutListItem>
                </AboutListContainer>
              </Col>
              <Col md={12}>
                <AboutListContainer>
                  <AboutListTitle>Professional Experience:</AboutListTitle>
                  <AboutListItem>Managing retail and hospitality operations</AboutListItem>
                  <AboutListItem>Social media work and marketing</AboutListItem>
                </AboutListContainer>
              </Col>
              <Col md={12}>
                <AboutListContainer>
                  <AboutListTitle>Strengths:</AboutListTitle>
                  <AboutListItem>Strong organizational skills</AboutListItem>
                  <AboutListItem>Keen eye for detail</AboutListItem>
                  <AboutListItem>Ability to handle multiple tasks efficiently</AboutListItem>
                </AboutListContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
