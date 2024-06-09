import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AboutSection, AboutImage, AboutText, AboutBody, AboutListContainer, AboutListTitle, AboutListItem, IconWrapper, IconLink } from './index.styles';
import profileImage from '../../img/profile-img.png';

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Row>

        </Row>
        <Row>
          <Col md={6}>
          <Row className="text-left d-flex align-items-end">
          <Col md="auto">
            <AboutImage src={profileImage} alt="Profile" />
            </Col>
            <Col className="d-flex flex-column justify-content-end">
            <AboutText>
            <strong>Hi! I´m Christel. I am a UI Designer and Junior Front End Developer from Norway, who recently graduated from Noroff School of Technology and Digital Media.</strong>
            </AboutText>
            </Col>
          </Row>
            <AboutText>
              My passion lies in creating accessible design and seamless user stories. I believe that technology should be inclusive, enabling everyone to have a great user experience regardless of their abilities. I strive to break down barriers and ensure that my designs are not only visually appealing but also user-friendly and accessible to all.
            </AboutText>
            <AboutBody>
              <AboutText>
                I am excited about the opportunity to combine my design skills, technical knowledge, and diverse professional experience to create digital experiences that make a positive impact. Let's connect and explore how we can work together to bring innovative and accessible solutions to life.
              </AboutText>
              <IconWrapper>
                You can find me on:
                <IconLink href="https://github.com/" target="_blank">
                  <i className="devicon-github-original"></i> github
                </IconLink>
                <IconLink href="https://linkedin.com/" target="_blank">
                  <i className="devicon-linkedin-plain"></i> linkedin
                </IconLink>
              </IconWrapper>
            </AboutBody>
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
