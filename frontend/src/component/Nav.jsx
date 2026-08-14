import React from 'react'
import './css/Nav.css'

export default function Nav() {
    return (
        <div className="nav">
            <div className="nav-left">
                <h1>MASTER AAZAM</h1>
            </div>
            <div className="nav-right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#">Book</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Podcast</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Film</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
