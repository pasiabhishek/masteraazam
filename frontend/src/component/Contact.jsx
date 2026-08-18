import "./css/Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='Contact' id='Contact'>
            <div className='Contact_text'>
                <h3>Contact</h3>
                <h1>Let's talk</h1>
                <h3>Got a project , collab or just want to say hi?</h3>
                <p><i className="fa-solid fa-envelope"></i>  hello@masteraazam.com </p>
                <p><i className="fa-solid fa-location-dot"></i>  Mumbai , Maharashtra, India </p>
                <div className="social">
                    <a href="https://www.instagram.com/masteraazam" target='_blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/pasi-abhishek/" target='_blank'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/pasiabhishek" target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="" target='_blank'>
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
            <div className="Contact_form">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder='Your name' required />
                    <input type="email" name="user_email" placeholder='name@email.com' required />
                    <textarea name="message" id="message" placeholder='Enter your message' required></textarea>

                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    )
}