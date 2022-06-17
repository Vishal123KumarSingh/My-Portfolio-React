import React, { useState } from "react";
import "./Contact.css";

import emailjs from '@emailjs/browser';

import { useRef } from "react";

function Contact() {

    const form = useRef();

    const[done , setdone] =useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kxjljqh', 'template_k3elhau', form.current, 'iK73GH0LjCmGOWQHz')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact" id="Contact">
            <div className="c-left">
                <span>Get In Touch</span>
                <span>Contact Me</span>
                <div className="blur blur2" style={{ background: "skyblue" }}></div>
                <div className="blur blur1" style={{ background: "var(--purple)" }}></div>


            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input className="user" type="text" placeholder="Name" name="user_name"></input>
                    <input className="user" type="email" placeholder="Email" name="user_email"></input>
                    <textarea className="user" cols={10} rows={7} placeholder="mesage" name="message"></textarea>

                    <button type="submit" value="send" className="user" >Send</button>
                    <span >{done && "Thanks For Contacting" }</span>

                </form>

            </div>
        </div>
    )
}

export default Contact;