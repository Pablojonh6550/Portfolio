import React from 'react';
// --CSS--
import './css/App.css';
// --Components--
import Headers from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <Headers />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> Future att*/}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
