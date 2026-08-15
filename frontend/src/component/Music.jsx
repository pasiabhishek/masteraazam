import React, { useState } from 'react'
import "./css/Music.css"
import Songs from './data/Songs.json'

export default function Music() {
    const [varSong, setSong]= useState("Aagaz")
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
                                {varSong}
                            </h3>
                            <p className='Song_Artist'>
                                Master Aazam
                            </p>
                            <input type="range" name="play_bar" id="Play_bar" />
                        </div>
                    </div>
                    <div className='playlist'>
                        {
                            Songs.map((song) => (

                                <div className='playlist-row' key={song.id} onClick={()=>setSong(song.title)}>
                                    <span className='song_id'>{song.id}</span>
                                    <span className='song_title'>{song.title}</span>
                                    <span className='song_duration'>{song.duration}</span>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}
