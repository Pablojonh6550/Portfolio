import React from "react";

import { BiCheck } from 'react-icons/bi';
// --CSS--
import './css/services.css';

function Services() {
    return (
        <section id='services'>
            <h5>What I Dffer</h5>
            <h2>Services</h2>
            <div className="container services_container">
                <article className="services">
                    <div className="services_head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul> 
                </article>
                {/* ----------------------------------------------------------------------- */}

                <article className="services">
                    <div className="services_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul> 
                </article>
                {/* ----------------------------------------------------------------------- */}

                <article className="services">
                    <div className="services_head">
                        <h3>Content create</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list_icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul> 
                </article>
                {/* ----------------------------------------------------------------------- */}

            </div>
        </section>
    );
}

export default Services;