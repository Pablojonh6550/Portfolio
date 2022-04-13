import React from 'react';

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import './css/about.css';
import ME from '../../assets/me-about.jpg';

function About() {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>3+ Yers Working</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore eius omnis eum. 
                        Doloremque labore tempore voluptatem perspiciatis rem quidem fugiat in blanditiis, 
                        recusandae, nisi odio nemo architecto aspernatur temporibus!
                    </p>
                     
                    <a href="#contact" className='btn btn_primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;