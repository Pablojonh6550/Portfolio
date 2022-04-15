import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank' rel='noopener'><BsLinkedin /></a>
        <a href='https://github.com/Pablojonh6550' target='_blank' rel='noopener'><FaGithub /></a>
        <a href='https://instagram.com/pablojonh_' target='_blank' rel='noopener'><FaInstagram /></a>
        <a href='https://twitter.com/pablojonh65' target='_blank' rel='noopener'><FaTwitter /></a>
    </div>
  );
}

export default HeaderSocial;