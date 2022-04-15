import React from "react";

import { MdOutlineEmail } from 'react-icons/md';
import './css/contact.css'

function Contact() {
    return (
        <section id='contact'>
            <h5>Contate-me</h5>
            <h2>Contato</h2>
            
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option_icon" />
                        <h4>Email</h4>
                        <h5>pablojonh6550@gmail.com</h5>
                        <a href="mailto:pablojonh6550@gmail.com" target="_blank">Send a message</a>
                    </article>
                       
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Digite seu Nome" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                    <textarea name="message" rows="7" placeholder="Mensagem" required></textarea>
                    <button type="submit" className="btn btn_primary">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;