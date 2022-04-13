import React from "react";
import './css/header.css';

import Header_components from './Header_components';
import ME from '../../assets/me.png';
import HeaderSocial from "./HeaderSocial";

function Header() {
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Jonh Pablo Vaz</h1>
                <h5 className="text_light">Web Developer</h5>
                <Header_components />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;