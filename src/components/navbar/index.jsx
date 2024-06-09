import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { NavbarCustom, NavbarBrand, NavLink, NavCollapse } from './index.styles';

const CustomNavbar = () => {
  const handleNavLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = element.offsetTop - document.querySelector('nav').offsetHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <NavbarCustom expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <NavbarBrand href="#">
            <ScrollLink to="home" smooth={true} duration={500}>onibodesign</ScrollLink>
          </NavbarBrand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink onClick={() => handleNavLinkClick('home')}>Home</NavLink>
            <NavLink onClick={() => handleNavLinkClick('about')}>About</NavLink>
            <NavLink onClick={() => handleNavLinkClick('skills')}>Skills</NavLink>
            <NavLink onClick={() => handleNavLinkClick('projects')}>Projects</NavLink>
            <NavLink onClick={() => handleNavLinkClick('contact')}>Contact</NavLink>
          </Nav>
        </NavCollapse>
      </Container>
    </NavbarCustom>
  );
};

export default CustomNavbar;
