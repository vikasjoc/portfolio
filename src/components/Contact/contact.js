import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import emailIcon from '../../assets/email.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_jqsdvlo',          // ✅ Updated Service ID
            'template_q58j7ia',         // ✅ Your EmailJS Template ID
            form.current,
            '39_Ux2kiC8Yzs2gIe'         // ✅ Your Public Key
        )
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent!');
        })
        .catch((error) => {
            console.error('EmailJS Error:', error.text);
        });
    };

    return (
        <div id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form below to discuss any work opportunities.
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name" required />
                    <input type="email" className="email" placeholder="Your Email" name="from_email" required />
                    <textarea name="message" placeholder="Your Message" rows={5} className="msg" required></textarea>
                    <button type="submit" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://github.com/vikasjoc/portfolio" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="link" />
                        </a>
                        <a href="https://linkedin.com/in/vikasjoshi" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a href="mailto:youremail@example.com">
                            <img src={emailIcon} alt="Email" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
