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
                    <li><a href="#Book">Book</a></li>
                    <li><a href="#Music">Music</a></li>
                    <li><a href="#Reel">Reel</a></li>
                    <li><a href="#Podcast">Podcast</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Film">Film</a></li>
                    <li><a href="#Blog">Blog</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
