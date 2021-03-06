import React from "react";

import { BsPatchCheckFill } from 'react-icons/bs'
// --CSS--
import './css/experience.css';

function Experience() {
    return (
        <section id='experience'>
            <h5>Habilidades que possuo</h5>
            <h2>Linguagens</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text_light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text_light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text_light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>ReactJs</h4>
                                <small className="text_light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>ReactNative</h4>
                                <small className="text_light">Básico</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text_light">Básico</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_backend">
                <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text_light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text_light">Básico</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text_light">Iniciando</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text_light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>C</h4>
                                <small className="text_light">Básico</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icons" />
                            <div>
                                <h4>C++</h4>
                                <small className="text_light">Básico</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;