import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FiDribbble  } from 'react-icons/fi';

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble /></a>
    </div>
  );
}

export default HeaderSocial;