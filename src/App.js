import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GlobalStyle from './styles/globalStyles';
import CustomNavbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <GlobalStyle />
      <CustomNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
