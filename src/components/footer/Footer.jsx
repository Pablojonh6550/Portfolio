import React from 'react';

import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
//--CSS--
import './css/footer.css';

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jonh</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://www.instagram.com/"><FiInstagram className='footer_social_icon'/></a>
        <a href="https://twitter.com/"><IoLogoTwitter className='footer_social_icon'/></a>
        <a href="https://br.linkedin.com/"><FaLinkedin className='footer_social_icon'/></a>
      </div>

      <div className="footer_copyright">
        <small>
            Copyright &copy; Jonh Pablo Vaz 2022
        </small>
      </div>
    </footer>
  )
}

export default Footer;