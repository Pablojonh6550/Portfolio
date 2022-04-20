import React from 'react';

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import './css/about.css';
import MEABOUT from '../../assets/me-about.jpg';

function About() {
    return (
        <section id='about'>
            <h5>Conheça-me</h5>
            <h2>Sobre mim</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={MEABOUT} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experiência</h5>
                            <small>3+ Codando</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'/>
                            <h5>Clientes</h5>
                            <small>2+ Satisfeitos</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projetos</h5>
                            <small>10+ Completos</small>
                        </article>
                    </div>

                    <p>
                        Olá, meu nome é Jonh Pablo amante da tecnologia e jogos no estilo rpg e cartas, 
                        fui apresentado ao universo do desenvolvimento aos 14 anos, onde conheci Java e me 
                        apaixonei por todo esse mundo, no qual tudo é possivel. Hoje sigo evoluindo e desbravando 
                        todo essa mundo da tecnologia.
                    </p>
                     <br />
                    <br />
                </div>
            </div>
        </section>
    );
}

export default About;