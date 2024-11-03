import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { NavbarCustom, NavbarBrand, NavLink, NavCollapse } from './index.styles';

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0); 
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = element.offsetTop - document.querySelector('nav').offsetHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavbarCustom expand="lg" fixed="top" isScrolled={isScrolled}>
      <Container>
        <Navbar.Brand>
          <NavbarBrand href="#">
            <ScrollLink to="home" smooth={true} duration={500}>Øbøe</ScrollLink>
          </NavbarBrand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </Navbar.Toggle>

        <NavCollapse id="basic-navbar-nav" in={isMenuOpen}>
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
