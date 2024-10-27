import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { ProjectsSection, ProjectsTitle, ProjectCard, ProjectCardBody, ProjectButton, ProjectTechBadge, ProjectTitle, ProjectDescription } from './index.styles';
import scandiImage from '../../img/scandigazette.png';
import nwtImage from '../../img/nwt.png';
import holidazeImage from '../../img/holidaze.png';

const Projects = () => {
  const projectList = [
    {
      title: "Scandi Gazette",
      description: "School Project. The brief was to design and develop a blog site, fetching posts from WordPress using and api call. All design is created by me.",
      image: scandiImage,
      link: "https://subtle-cendol-bcdb2f.netlify.app/",
      github: "https://github.com/Noroff-FEU-Assignments/project-exam-1-Christelmarita",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Native Woodland Trust",
      description: "School Project. Brief said to design a new brand identity, logo and app for Native Woodland Trust. All designs are created and prototyped in Xd by me.",
      image: nwtImage,
      link: "https://xd.adobe.com/view/1fce32c4-7c29-42ff-b81e-326eab92c6cd-4a9d/?fullscreen&hints=off",
      technologies: ["Adobe Xd"]
    },
    {
      title: "Holidaze",
      description: "School Project. The brief said to design and develop a holiday booking site where users can view venues, register, login, book venues and create and manage venues if reigstered as venue manager.",
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
                  <div>
                    <ProjectButton href={project.link} target="_blank">Demo</ProjectButton>
                    {project.github && ( // Sjekk om GitHub-lenken eksisterer
                      <ProjectButton id="button2" href={project.github} target="_blank">Code</ProjectButton>
                    )}
                    </div>
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
