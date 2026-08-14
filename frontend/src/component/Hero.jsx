import React from 'react'
import './css/Hero.css'

export default function Hero() {
    return (
        <div className="Hero">
            <div className="Hero__content">
                <p>WRITER, POET, STORYTELLER, FILM-MAKER, WEB DEVELOPER</p>
                <h1>MASTER AAZAM</h1>
                <h3>Life is cinematic, I live it Aazamatic</h3>
                <h5>I write what hurts. I create what inspires.<br />though words, music, stories and visuals.
                    <br />I exolore life, truth and the emotions we all carry.
                </h5>

                <div className="Hero__content__buttons">
                    <button className="Hero__content__buttons__btn1">Explore My World</button>
                    <button className="Hero__content__buttons__btn2">Contact Me</button>
                </div>
            </div>
        </div>
    )
}
