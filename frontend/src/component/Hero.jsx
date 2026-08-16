import './css/Hero.css'
import { useEffect } from 'react'

export default function Hero() {
    useEffect(()=>{
        gsap.from('.Hero__content',{
            x:-132,
            duration:0.5,
            scrollTrigger:{
                trigger: ".Hero__content",
                scroller:"body",
                start: "top 40%",
                scrub:2
            }
        })
    })
    
    return (
        <div className="Hero frame">
            <div className="Hero__content">
                <p>WRITER, POET, STORYTELLER, FILM-MAKER, WEB DEVELOPER</p>
                <h1>MASTER <br/> AAZAM</h1>
                <h3>Life is cinematic, I live it Aazamatic</h3>
                <h5>I write what hurts. I create what inspires.<br />Though words, music, stories and visuals.
                    <br />I exolore life, truth and the emotions we all carry.
                </h5>

                <div className="Hero__content__buttons">
                    <button className="Hero__content__buttons__btn1">Explore My World <span>&rarr;</span></button>
                    <button className="Hero__content__buttons__btn2">Contact Me</button>
                </div>
            </div>
            <div className="Hero__image">
                
                <img src="https://i.ibb.co/jkhSfL0N/master-aazam-removebg-preview.png" alt="Hero Image" />
            </div>
        </div>
    )
}
