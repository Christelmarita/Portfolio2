import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const NavbarCustom = styled(Navbar)`
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavbarBrand = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #344e41;
    text-decoration: none;
  }
`;

export const NavLink = styled(Nav.Link)`
  position: relative;
  font-size: 1rem;
  margin-left: 1rem;
  color: #2c282f;
  overflow: hidden;

  &:hover {
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 100%;
    background-color: #EC95D9;
    z-index: -1;
    transition: bottom 0.3s ease-in-out;
  }

  &:hover::before {
    bottom: 0;
  }
`;


export const NavCollapse = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
    text-align: center;
  }
`;