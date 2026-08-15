import React from 'react'
import './css/About.css'

export default function About() {
    return (
        <div className="About frame" id='About'>
            <div className="About_content">
                <h2>About Me</h2>
                <h1>A Creator with a Purpose</h1>
                <p>I'm Pasi Abhishek, known by my creative name Master Aazam.I'm a poet, storyteller, music creator, film-maker, and web developer. I founded Aazamira Production World to turn ideas into meaningful content that connects, inspires and leaves a mark.</p>

                <div className="About__buttons">
                    <button className="Hero__content__buttons__btn2 button">Explore My World <span>&rarr;</span></button>
                </div>
            </div>
            <div className="About_image">

                <img src="https://scontent.cdninstagram.com/v/t51.82787-19/767455812_17938860504339578_6253033938252931196_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=101&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=tKYg1BjkPR8Q7kNvwFJ8ynX&_nc_oc=Adrpbx53qbrE4iz1rlD5iDqMWHPLgI0io-KaiGMRqGH5hWCfUgdPIYNqZE05k1KIP0M&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=lhAgQ2lt6yRN1b358Ha7Nw&_nc_ss=7ba8c&oh=00_AQH_3KIyfeGevXL7CT-alz3BgEQsdVpU3Wl_nW3bGBsh6Q&oe=6A86A0A3" alt="Hero Image" width="350"/>
            </div>

        </div>
    )
}
