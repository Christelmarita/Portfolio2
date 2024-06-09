import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { ProjectsSection, ProjectsTitle, ProjectCard, ProjectCardBody, ProjectButton, ProjectTechBadge, ProjectTitle, ProjectDescription } from './index.styles';
import quickbidImage from '../../img/quickbid.png';
import spectraImage from '../../img/spectra.png';
import holidazeImage from '../../img/holidaze.png';

const Projects = () => {
  const projectList = [
    {
      title: "Quickbid",
      description: "A mock auction site built to display learning outcome from year one and first semester of second year at Noroff. It let´s a user register, login, create auctions and use credits to bid on auctions.",
      image: quickbidImage,
      link: "https://statuesque-halva-1e6d0d.netlify.app/",
      github: "https://github.com/Christelmarita/QuickBid",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "Spectra",
      description: "An simple mock ecom site butilt to display knowledge and familiarity with React at Noroff. Users can add items to basket and complete a purchase.",
      image: spectraImage,
      link: "https://js-frameworks-ca-cmo.netlify.app/",
      github: "https://github.com/Christelmarita/js-frameworks",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
    },
    {
      title: "Holidaze",
      description: "Exam Project at Noroff. Holidaze is a mock holiday booking site. Built to display knowledge gained over the last 2 years of studies. Users can view venues, register, login, book venues and create and manage venues if reigstered as venue manager.",
      image: holidazeImage,
      link: "https://holidaze-exam2-cmo.netlify.app/",
      github: "https://github.com/Christelmarita/exam-2",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <ProjectsTitle>Projects</ProjectsTitle>
        <Row>
          {projectList.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <ProjectCard>
                <Card.Img variant="top" src={project.image} />
                <ProjectCardBody>
                  <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  </div>
                  <div>
                    {project.technologies.map((tech, idx) => (
                      <ProjectTechBadge key={idx}>{tech}</ProjectTechBadge>
                    ))}
                    <ProjectButton href={project.link} target="_blank">Live Demo</ProjectButton>
                    <ProjectButton id="button2" href={project.github} target="_blank">Code</ProjectButton>
                  </div>
                </ProjectCardBody>
              </ProjectCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
