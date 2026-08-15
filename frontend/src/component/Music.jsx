import React from 'react'
import "./css/Music.css"

export default function Music() {
    return (
        <div className="Music" id='Music'>
            <div className='section'>
                <h1>Music</h1>
                <p>Melodies that tells stories.</p>
                <div className='music_player'>
                    <div className='player'>
                        <img src="images\Artwork\aagaz-artwork.jpg" width='250' alt="" />
                        <div className='controls'>
                            <h3 className='Song_name'>
                                Aagaz
                            </h3>
                            <p className='Song_Artist'>
                                Master Aazam
                            </p>
                            <input type="range" name="play_bar" id="Play_bar" />
                        </div>
                    </div>
                    <div className='playlist'>
                        <ul>
                            <li>oggy</li>
                            <li>oggy</li>
                            <li>oggy</li>
                            <li>oggy</li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    )
}
