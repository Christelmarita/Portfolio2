import styled, { css } from 'styled-components';
import { Card, Button, Badge } from 'react-bootstrap';

export const ProjectsSection = styled.section`
  padding: 70px 1rem;
  text-align: center;
`;

export const ProjectsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
`;

export const ProjectCard = styled(Card)`
  margin-bottom: 20px;
  border-radius: 0px;
  border: 1px solid;
  height: 100%; // Set height to 100% for flexbox alignment
  display: flex;
  flex-direction: column;
`;

export const ProjectCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  flex: 1;
`;

export const ProjectContent = styled.div`
  flex-grow: 1;
`;


export const ProjectCardText = styled(Card.Text)`
  font-size: 1rem;
`;

export const ProjectButton = styled(Button)`
  background-color: #EC95D9;
  color: #2c282f;
  margin: 20px 20px 20px 0px;
  font-family: 'Archivo Black', sans-serif;
  border-style: none;
  border-radius: 0px;
  &:hover {
    background-color: #2c282f;
  }

  ${props =>
    props.id === 'button2' &&
    css`
      background-color: #eee82c;
    `}
`;

export const ProjectTechBadge = styled(Badge)`
  margin-right: 5px;
  background-color: #143d29 !important;
  color: #fff !important;
`;

export const ProjectTitle = styled(Card.Title)`
  font-size: 1.5rem;
`;

export const ProjectDescription = styled(Card.Text)`
  font-size: 1rem;
  margin-bottom: 10px;
`;
