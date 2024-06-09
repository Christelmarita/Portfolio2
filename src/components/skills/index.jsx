import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SkillsSection, SkillsTitle, SkillItem, SkillIcon, SkillText } from './index.styles';

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SkillsTitle>Skills</SkillsTitle>
        <Row>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-html5-plain-wordmark" />
              <SkillText>HTML</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-css3-plain-wordmark" />
              <SkillText>CSS</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-javascript-plain" />
              <SkillText>JavaScript</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-react-original-wordmark" />
              <SkillText>React</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-bootstrap-plain-wordmark" />
              <SkillText>Bootstrap</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-sass-original" />
              <SkillText>SASS</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-xd-line" />
              <SkillText>XD</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-figma-plain" />
              <SkillText>Figma</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-photoshop-line" />
              <SkillText>Photoshop</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-illustrator-line" />
              <SkillText>Illustrator</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-git-plain-wordmark" />
              <SkillText>Git</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-github-original-wordmark" />
              <SkillText>GitHub</SkillText>
            </SkillItem>
          </Col>
          <Col>
            <SkillItem>
              <SkillIcon className="devicon-wordpress-plain-wordmark" />
              <SkillText>WordPress</SkillText>
            </SkillItem>
          </Col>
        </Row>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
