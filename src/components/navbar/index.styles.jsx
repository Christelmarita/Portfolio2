import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const NavbarCustom = styled(Navbar)`
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  transition: box-shadow 0.3s ease-in-out;

  ${({ isScrolled }) =>
    isScrolled
      ? 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'
      : 'box-shadow: none;'}
`;

export const NavLink = styled(Nav.Link)`
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 3%;
  color: #2c282f;
  text-transform: lowercase;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.1s ease-in-out;

  &:hover {
    border-bottom-color: #a1c7bb; 
  }
`;

export const NavbarBrand = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: titlecase;
  cursor: pointer;

  &:hover {
    color: #614562;
    text-decoration: none;
  }
`;

export const NavCollapse = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
    text-align: center;
  }
`;
