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
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='name@email.com' />
                    <textarea name="messase" id="message" width="7rem" rows="5" cols="27"></textarea>
                </form>
            </div>
        </div>
    )
}
