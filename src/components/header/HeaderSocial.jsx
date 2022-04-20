import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Pablojonh6550' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href='https://instagram.com/pablojonh_' target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
        <a href='https://twitter.com/pablojonh65' target='_blank' rel="noopener noreferrer"><FaTwitter /></a>
    </div>
  );
}

export default HeaderSocial;