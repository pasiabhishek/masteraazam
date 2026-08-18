import React from 'react'
import "./css/Contact.css"

export default function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <div className='Contact_text'>
                <h3>Contact</h3>
                <h1>Let's talk</h1>
                <h3>Got a project , collab or just want to say hi?</h3>
                <p><i class="fa-solid fa-envelope"></i>  hello@masteraazam.com </p>
                <p><i class="fa-solid fa-location-dot"></i>  Mumbai , Maharashtra, India </p>
                <div className="social">
                    <a href="https://www.instagram.com/masteraazam" target='_blank'>
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/pasi-abhishek/" target='_blank'>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/pasiabhishek" target='_blank'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="" target='_blank'>
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
            <div className="Contact_form">
                <form action="" method='Post'>
                    <input type="text" placeholder='Your name' required />
                    <input type="email" placeholder='name@email.com' required />
                    <textarea name="messase" id="message" placeholder='Enter your message' required></textarea>

                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    )
}
