import React from 'react';

import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
//--CSS--
import './css/footer.css';

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jonh</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
        {/* Future att */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        {/* <li><a href="#services">Services</a></li> */}
      </ul>

      <div className="footer_social">
        <a href="https://www.instagram.com/pablojonh_" target="_blank"><FiInstagram className='footer_social_icon'/></a>
        <a href="https://twitter.com/pablojonh65" target="_blank"><IoLogoTwitter className='footer_social_icon'/></a>
        <a href="https://github.com/Pablojonh6550" target="_blank" ><BsGithub className='footer_social_icon'/></a>
        <a href="https://br.linkedin.com/" target="_blank"><FaLinkedin className='footer_social_icon'/></a>
      </div>

      <div className="footer_copyright">
        <small>
            Copyright &copy; Jonh Pablo Vaz - 2022
        </small>
      </div>
    </footer>
  )
}

export default Footer;