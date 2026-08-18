import React from 'react'
import "./css/Contact.css"

export default function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <div className='Contact_text'>
                <h3>Contact</h3>
                <h1>Let's talk</h1>
                <h3>Got a project , collab or just want to say hi?</h3>
                <p>hello@masteraazam.com </p>
                <p>Mumbai , Maharashtra, India </p>
                <div className="social">
                    <a href="">I</a>
                    <a href="">Y</a>
                    <a href="">L</a>
                    <a href="">G</a>
                </div>
            </div>
            <div className="Contact_form">
                <form action="" method='Post'>
                    <input type="text" placeholder='Your name'  required/>
                    <input type="email" placeholder='name@email.com'  required/>
                    <textarea name="messase" id="message" placeholder='Enter your message' required></textarea>

                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    )
}
